// src/components/MobileBookButton.jsx
import { setmoreUrl } from "../data/siteData";

export default function MobileBookButton() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <a
        href={setmoreUrl}
        target="_blank"
        rel="noreferrer"
        className="block bg-amber-400 px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-black shadow-xl shadow-amber-500/20"
      >
        Book Your Cut
      </a>
    </div>
  );
}