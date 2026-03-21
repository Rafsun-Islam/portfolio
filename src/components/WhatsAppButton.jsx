export default function WhatsAppButton() {
  const phone = '8801567998451'
  const message = 'Hi! I saw your portfolio and would like to connect.'
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          whatsapp-btn
          fixed z-[9990]
          bottom-4 right-4
          sm:bottom-5 sm:right-5
          md:bottom-6 md:right-6
          lg:bottom-8 lg:right-8
          h-12 w-12
          sm:h-14 sm:w-14
          md:h-16 md:w-16
          rounded-full
          flex items-center justify-center
          shadow-lg
          transition-all duration-300
          hover:scale-110
          hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]
        "
        style={{
          bottom: 'max(1rem, env(safe-area-inset-bottom))',
          right: 'max(1rem, env(safe-area-inset-right))',
          background: '#25D366',
        }}
      >
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="relative z-[2] h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
          fill="white"
        >
          <path d="M16.003 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.359.632 4.637 1.833 6.641L2.667 29.333l6.885-1.807A13.267 13.267 0 0 0 16.003 29.333c7.364 0 13.33-13.333S23.367 2.667 16.003 2.667zm0 24.267a11.012 11.012 0 0 1-5.617-1.539l-.403-.239-4.086 1.072 1.091-3.978-.262-.418A10.974 10.974 0 0 1 5.001 16c0-6.075 4.927-11.001 11.002-11.001S27.005 9.925 27.005 16s-4.927 11.001-11.002 10.934zM22.56 19.22c-.328-.164-1.944-.959-2.245-1.069-.301-.109-.52-.164-.739.164-.219.328-.849 1.069-1.041 1.287-.191.219-.383.246-.711.082-.328-.164-1.387-.511-2.641-1.629-.976-.869-1.636-1.943-1.828-2.271-.191-.328-.02-.506.144-.669.148-.148.328-.383.492-.574.164-.191.219-.328.328-.547.109-.219.055-.41-.027-.574-.082-.164-.739-1.779-1.013-2.436-.267-.639-.539-.552-.739-.562l-.629-.011c-.219 0-.574.082-.875.41-.301.328-1.149 1.123-1.149 2.738s1.177 3.178 1.341 3.397c.164.219 2.316 3.535 5.613 4.956.785.339 1.396.541 1.874.693.787.251 1.503.216 2.069.131.631-.094 1.944-.795 2.218-1.563.273-.768.273-1.426.191-1.563-.082-.136-.301-.219-.629-.383z" />
        </svg>

        {/* Ping animation ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
      </a>

      <style>{`
        .whatsapp-btn::before {
          content: 'Chat on WhatsApp';
          position: absolute;
          top: 50%;
          right: calc(100% + 12px);
          transform: translateY(-50%);
          background: #0d1424;
          color: #e8f0fe;
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.05em;
          white-space: nowrap;
          padding: 0.4rem 0.8rem;
          border: 1px solid rgba(99,202,255,0.15);
          border-radius: 4px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease;
          z-index: 20;
        }

        @media (min-width: 768px) {
          .whatsapp-btn:hover::before {
            opacity: 1;
          }
        }
      `}</style>
    </>
  )
}