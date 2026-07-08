"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { z } from "zod";
import { Upload, Send, CheckCircle, Loader2, X, AlertCircle, XCircle, Package, Store } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DEVICE_CATEGORIES,
  COMPLAINT_TYPES,
  BRANDS,
  TN_DISTRICTS,
  type DeviceCategory,
} from "@/lib/constants";

const PHOTO_REQUIRED_COMBOS: { category: DeviceCategory; complaint: string }[] = [
  { category: "Headphones",         complaint: "Physical damage" },
  { category: "TWS / Earbuds",      complaint: "Low volume" },
  { category: "Bluetooth Speaker",  complaint: "Charging pin / port damage" },
];

function isPhotoRequired(category: DeviceCategory | undefined, complaint: string | undefined): boolean {
  if (!category || !complaint) return false;
  return PHOTO_REQUIRED_COMBOS.some((c) => c.category === category && c.complaint === complaint);
}

const schema = z.object({
  fullName:        z.string().min(2, "Enter your full name"),
  mobile:          z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  email:           z.string().email("Enter a valid email").optional().or(z.literal("")),
  deviceCategory:  z.enum(DEVICE_CATEGORIES as unknown as [string, ...string[]]),
  complaintType:   z.string().min(1, "Select a complaint type"),
  modelType:       z.string().optional(),
  brand:           z.string().min(1, "Select a brand"),
  district:        z.string().min(1, "Select your district"),
  deliveryMethod:  z.enum(["pickup", "courier"]),
  returnAddress:   z.string().optional(),
  returnPincode:   z.string().optional(),
  remarks:         z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.deliveryMethod === "courier") {
    if (!data.returnAddress || data.returnAddress.trim().length < 10) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Enter your full delivery address", path: ["returnAddress"] });
    }
    if (!data.returnPincode || !/^\d{6}$/.test(data.returnPincode)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Enter a valid 6-digit pincode", path: ["returnPincode"] });
    }
  }
});

type FormData = z.infer<typeof schema>;

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzxxnU0goSHF5oNuZh7uvVtDDjLWSW4uBxNTCB1jSV893tquhRFqEYJdDvbg6DBklrZyA/exec";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoError, setPhotoError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const selectedCategory   = watch("deviceCategory") as DeviceCategory | undefined;
  const selectedComplaint  = watch("complaintType");
  const selectedDistrict   = watch("district");
  const deliveryMethod     = watch("deliveryMethod");
  const photoRequired      = isPhotoRequired(selectedCategory, selectedComplaint);
  const isCourier          = deliveryMethod === "courier";

  useEffect(() => {
    if (!selectedDistrict) return;
    if (selectedDistrict !== "Coimbatore") {
      setValue("deliveryMethod", "courier");
    } else {
      setValue("deliveryMethod", "pickup");
    }
  }, [selectedDistrict, setValue]);

  useEffect(() => {
    const category = searchParams.get("category") as DeviceCategory | null;
    if (category && DEVICE_CATEGORIES.includes(category as DeviceCategory)) {
      setValue("deviceCategory", category);
    }
  }, [searchParams, setValue]);

  useEffect(() => {
    if (!selectedCategory) return;
    const brand = searchParams.get("brand");
    const issue = searchParams.get("issue");
    const model = searchParams.get("model");
    if (brand) setValue("brand", brand);
    if (issue) setValue("complaintType", issue);
    if (model) setValue("modelType", model);
  }, [selectedCategory, searchParams, setValue]);

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoFile(file);
    setPhotoError(false);
    const reader = new FileReader();
    reader.onloadend = () => setPhotoPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const removePhoto = () => {
    setPhotoFile(null);
    setPhotoPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const onSubmit = async (data: FormData) => {
    if (photoRequired && !photoFile) {
      setPhotoError(true);
      fileInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setIsLoading(true);
    try {
      const payload = new FormData();
      Object.entries(data).forEach(([k, v]) => v != null && v !== "" && payload.append(k, v as string));
      if (photoFile) payload.append("photo", photoFile);
      await fetch(SCRIPT_URL, { method: "POST", body: payload, mode: "no-cors" });
      showToast("Request received! We'll contact you within a few hours.", "success");
      reset();
      removePhoto();
    } catch {
      showToast("Something went wrong. Please WhatsApp us directly.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toast */}
      {toast && (
        <div className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-xl border text-sm font-medium max-w-sm",
          "animate-in slide-in-from-bottom-4 fade-in duration-300",
          toast.type === "success"
            ? "bg-white border-green-300 text-green-700 shadow-green-100"
            : "bg-white border-red-300 text-red-700 shadow-red-100"
        )}>
          {toast.type === "success"
            ? <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
            : <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />}
          <span>{toast.message}</span>
          <button onClick={() => setToast(null)} className="ml-2 text-gray-400 hover:text-gray-600">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 space-y-5 shadow-sm">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Full Name *" error={errors.fullName?.message}>
            <input {...register("fullName")} placeholder="Your name" className={inputCls(!!errors.fullName)} />
          </Field>
          <Field label="Mobile Number *" error={errors.mobile?.message}>
            <input {...register("mobile")} placeholder="10-digit number" maxLength={10} className={inputCls(!!errors.mobile)} />
          </Field>
        </div>

        <Field label="Email (optional)" error={errors.email?.message}>
          <input {...register("email")} type="email" placeholder="you@example.com" className={inputCls(!!errors.email)} />
        </Field>

        <Field label="Device Category *" error={errors.deviceCategory?.message}>
          <select {...register("deviceCategory")} className={inputCls(!!errors.deviceCategory)}>
            <option value="">Select category</option>
            {DEVICE_CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </Field>

        {selectedCategory && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Complaint Type *" error={errors.complaintType?.message}>
              <select {...register("complaintType")} className={inputCls(!!errors.complaintType)}>
                <option value="">Select complaint</option>
                {COMPLAINT_TYPES[selectedCategory]?.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </Field>
            <Field label="Brand *" error={errors.brand?.message}>
              <select {...register("brand")} className={inputCls(!!errors.brand)}>
                <option value="">Select brand</option>
                {BRANDS[selectedCategory]?.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </Field>
          </div>
        )}

        <Field label="Model (optional)">
          <input {...register("modelType")} placeholder="e.g. boAt Airdopes 141" className={inputCls(false)} />
        </Field>

        <Field label="District *" error={errors.district?.message}>
          <select {...register("district")} className={inputCls(!!errors.district)}>
            <option value="">Select district</option>
            {TN_DISTRICTS.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </Field>

        {selectedDistrict && (
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">Device Return *</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setValue("deliveryMethod", "pickup")}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium transition-all",
                  !isCourier
                    ? "bg-blue-50 border-blue-500 text-blue-700"
                    : "bg-white border-gray-200 text-gray-500 hover:border-gray-400"
                )}
              >
                <Store className="w-4 h-4 flex-shrink-0" />
                <span>I&apos;ll pick up from store</span>
              </button>
              <button
                type="button"
                onClick={() => setValue("deliveryMethod", "courier")}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium transition-all",
                  isCourier
                    ? "bg-blue-50 border-blue-500 text-blue-700"
                    : "bg-white border-gray-200 text-gray-500 hover:border-gray-400"
                )}
              >
                <Package className="w-4 h-4 flex-shrink-0" />
                <span>Courier it to me</span>
              </button>
            </div>
            <input type="hidden" {...register("deliveryMethod")} />

            {isCourier && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 space-y-4">
                <p className="text-blue-600 text-xs flex items-center gap-2">
                  <Package className="w-3.5 h-3.5" />
                  We&apos;ll courier your repaired device to this address.
                </p>
                <Field label="Full Delivery Address *" error={errors.returnAddress?.message}>
                  <textarea
                    {...register("returnAddress")}
                    rows={2}
                    placeholder="Door no, Street, Area, City"
                    className={cn(inputCls(!!errors.returnAddress), "resize-none")}
                  />
                </Field>
                <Field label="Pincode *" error={errors.returnPincode?.message}>
                  <input
                    {...register("returnPincode")}
                    placeholder="6-digit pincode"
                    maxLength={6}
                    className={inputCls(!!errors.returnPincode)}
                  />
                </Field>
              </div>
            )}

            {!isCourier && selectedDistrict !== "Coimbatore" && (
              <p className="text-amber-600 text-xs flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                You selected a district outside Coimbatore. Are you sure you want store pickup?
              </p>
            )}
          </div>
        )}

        <Field label="Remarks (optional)">
          <textarea
            {...register("remarks")}
            rows={3}
            placeholder="Describe the issue in detail..."
            className={cn(inputCls(false), "resize-none")}
          />
        </Field>

        {/* Photo upload */}
        <div>
          <label className="block text-sm mb-2">
            <span className={cn("font-medium", photoRequired ? "text-amber-600" : "text-gray-700")}>
              Device Photo {photoRequired ? "*" : "(optional)"}
            </span>
            {photoRequired && (
              <span className="ml-2 text-xs bg-amber-50 border border-amber-200 text-amber-600 px-2 py-0.5 rounded-full">
                Required for this repair type
              </span>
            )}
          </label>

          {photoRequired && !photoFile && (
            <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-3">
              <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-amber-700 text-sm">
                A photo of your device is required for this repair type so we can assess the damage and give you an accurate quote.
              </p>
            </div>
          )}

          <input ref={fileInputRef} type="file" accept="image/*" onChange={handlePhoto} className="hidden" />

          {photoPreview ? (
            <div className="relative inline-block">
              <img src={photoPreview} alt="Device" className="h-32 rounded-xl object-cover border border-gray-200" />
              <button
                type="button"
                onClick={removePhoto}
                className="absolute -top-2 -right-2 bg-white border border-gray-200 rounded-full p-1 text-gray-400 hover:text-gray-700 shadow-sm"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => { setPhotoError(false); fileInputRef.current?.click(); }}
              className={cn(
                "flex items-center gap-2 border border-dashed rounded-xl px-4 py-3 text-sm transition-colors",
                photoError
                  ? "border-red-400 text-red-500 bg-red-50"
                  : photoRequired
                  ? "border-amber-400 hover:border-amber-500 text-amber-600 hover:bg-amber-50"
                  : "border-gray-300 hover:border-blue-400 text-gray-400 hover:text-blue-600"
              )}
            >
              <Upload className="w-4 h-4" />
              {photoRequired ? "Upload device photo (required)" : "Upload photo"}
            </button>
          )}

          {photoError && (
            <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              Please upload a photo of your device to continue.
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold py-4 rounded-xl transition-colors shadow-sm hover:shadow-md hover:shadow-blue-600/20"
        >
          {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          {isLoading ? "Submitting..." : "Submit Repair Request"}
        </button>
      </form>
    </>
  );
}

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-600 text-sm font-medium uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Book a Repair</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Fill in the form and we&apos;ll get back to you with a diagnosis and quote.
          </p>
        </div>
        <Suspense fallback={<div className="max-w-2xl mx-auto h-96 bg-gray-50 border border-gray-200 rounded-2xl animate-pulse" />}>
          <ContactFormInner />
        </Suspense>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm text-gray-700 mb-1.5 font-medium">{label}</label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    "w-full bg-white border rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition",
    hasError ? "border-red-400" : "border-gray-300"
  );
}
