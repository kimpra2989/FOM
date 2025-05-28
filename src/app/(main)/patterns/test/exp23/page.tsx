export default function Exp11Page() {
  const Width = 20
  const Height = 13

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 120 120"
    >
      <symbol
        id="exp2_3"
        width={Width}
        height={Height}
        viewBox={`0 0 ${Width} ${Height}`}
      >
        <path
          opacity="0.25"
          d="M12.4687 6.5C12.4687 8.61415 11.5001 10.492 10 11.6788C11.0467 12.5067 12.351 13 13.7656 13C17.2092 13 20 10.0903 20 6.5C20 2.9097 17.2092 0 13.7656 0C12.351 0 11.0455 0.492052 10 1.32118C11.4988 2.50805 12.4687 4.38585 12.4687 6.5Z"
        />
        <path
          opacity="0.25"
          d="M6.23436 13C7.64895 13 8.95454 12.5079 10 11.6788C8.50118 10.492 7.53128 8.61415 7.53128 6.5C7.53128 4.38585 8.49994 2.50805 10 1.32118C8.9533 0.492052 7.64895 0 6.23436 0C2.79078 0 0 2.9097 0 6.5C0 10.0903 2.79078 13 6.23436 13Z"
        />
        <path d="M7.53271 6.50011C7.53271 8.61426 8.50138 10.4921 10.0014 11.6789C11.5003 10.4921 12.4702 8.61426 12.4702 6.50011C12.4702 4.38596 11.5015 2.50816 10.0014 1.32129C8.50261 2.50816 7.53271 4.38596 7.53271 6.50011Z" />
      </symbol>

      <symbol
        id="line23"
        width={120}
        height={Height * 1.7}
        viewBox={`0 0 120 ${Height * 1.7}`}
      >
        <use href="#exp2_3" x="0" y="0" />
        <use href="#exp2_3" x="40" y="0" />
        <use href="#exp2_3" x="80" y="0" />
      </symbol>

      <defs>
        <pattern
          id="p23"
          width={120}
          height={Height * 3.4}
          patternUnits="userSpaceOnUse"
        >
          <use href="#line23" x="0" y="0" />
          <use href="#line23" x="20" y={Height * 1.7} />
        </pattern>
      </defs>

      <rect width={120} height={120} fill="url(#p23)" />
    </svg>
  )
}
