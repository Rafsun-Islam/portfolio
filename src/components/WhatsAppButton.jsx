import { personal } from "../data";

const phoneNumber = "8801567998451"; // replace with your WhatsApp number without +

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    `Hi Rafsun, I saw your portfolio and would like to discuss an opportunity.`,
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Rafsun on WhatsApp"
      className="fixed bottom-5 right-5 z-50 hidden items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/12 px-4 py-3 text-sm font-semibold text-emerald-200 backdrop-blur-xl transition-colors duration-200 hover:border-emerald-300/60 hover:bg-emerald-400/20 md:flex"
    >
      <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-400 text-sm text-ink">
        ✆
      </span>
      WhatsApp
    </a>
  );
}
