export default function WaveDivider({ top, bottom }: { top: string; bottom: string }) {
  return (
    <div style={{ backgroundColor: top, lineHeight: 0, display: "block", marginBottom: "-1px" }}>
      <svg
        viewBox="0 0 1440 56"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%", height: "56px" }}
        preserveAspectRatio="none"
      >
        <path d="M0,28 C360,56 1080,0 1440,28 L1440,56 L0,56 Z" fill={bottom} />
      </svg>
    </div>
  );
}
