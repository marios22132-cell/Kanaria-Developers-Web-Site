export default function KanariaLogo({ size = "md" }: { size?: "sm" | "md" }) {
  const iconSize = size === "sm" ? 28 : 36;
  const textClass = size === "sm" ? "text-[9px]" : "text-[11px]";

  return (
    <div className="flex items-center gap-3">
      <svg width={iconSize} height={iconSize} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="34" height="34" stroke="#f5f0eb" strokeWidth="1"/>
        <text x="18" y="24" textAnchor="middle" fill="#f5f0eb" fontFamily="serif" fontSize="20" fontWeight="300">K</text>
      </svg>
      <div className="flex flex-col leading-tight">
        <span className={`${textClass} tracking-[0.2em] font-light text-[#f5f0eb]`}>KANARIA</span>
        <span className={`${textClass} tracking-[0.25em] font-light text-[#f5f0eb]/70`}>DEVELOPERS</span>
      </div>
    </div>
  );
}
