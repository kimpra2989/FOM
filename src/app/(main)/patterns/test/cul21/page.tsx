import { svgProps } from '../constants'

export default function Cul21Page() {
  const Gap = 1.56
  const ShapeWidth = 30
  const ShapeHeight = 60 - Gap
  const StartPoints = Array.from(
    { length: Math.floor(svgProps.width / ShapeWidth) },
    (_, i) => ({
      x: (i * ShapeWidth) / 2,
      inversion: Math.random() < 0.5,
    })
  )

  return (
    <svg {...svgProps}>
      <defs>
        <g id="cul2_1">
          <path d="M25.744 0H3.271V0.77942H25.744V0Z" />
          <path d="M25.744 59.2207H3.271V60.0001H25.744V59.2207Z" />
          <path d="M26.3348 1.55884H3.86182V2.33825H26.3348V1.55884Z" />
          <path d="M26.9901 3.11475H4.51709V3.89417H26.9901V3.11475Z" />
          <path d="M27.5995 4.67334H5.12646V5.45276H27.5995V4.67334Z" />
          <path d="M28.1229 6.23218H5.6499V7.01159H28.1229V6.23218Z" />
          <path d="M28.6034 7.79126H6.13037V8.57068H28.6034V7.79126Z" />
          <path d="M29.1166 9.3501H6.64355V10.1295H29.1166V9.3501Z" />
          <path d="M29.4764 10.9087H7.00342V11.6881H29.4764V10.9087Z" />
          <path d="M29.7362 12.4678H7.26318V13.2472H29.7362V12.4678Z" />
          <path d="M29.9999 14.0266H7.52686V14.806H29.9999V14.0266Z" />
          <path d="M29.9999 15.5852H7.52686V16.3646H29.9999V15.5852Z" />
          <path d="M29.9999 17.1411H7.52686V17.9205H29.9999V17.1411Z" />
          <path d="M29.9999 18.7H7.52686V19.4794H29.9999V18.7Z" />
          <path d="M29.7362 20.2588H7.26318V21.0382H29.7362V20.2588Z" />
          <path d="M29.2909 21.8174H6.81787V22.5968H29.2909V21.8174Z" />
          <path d="M28.7547 23.3765H6.28174V24.1559H28.7547V23.3765Z" />
          <path d="M28.3514 24.9355H5.87842V25.715H28.3514V24.9355Z" />
          <path d="M27.7313 26.4939H5.2583V27.2733H27.7313V26.4939Z" />
          <path d="M27.2396 28.053H4.7666V28.8324H27.2396V28.053Z" />
          <path d="M26.2162 29.6118H3.74316V30.3912H26.2162V29.6118Z" />
          <path d="M25.5243 31.1675H3.05127V31.9469H25.5243V31.1675Z" />
          <path d="M25.0697 32.7263H2.59668V33.5057H25.0697V32.7263Z" />
          <path d="M24.3504 34.2852H1.87744V35.0646H24.3504V34.2852Z" />
          <path d="M24.0389 35.8442H1.56592V36.6237H24.0389V35.8442Z" />
          <path d="M23.4618 37.4031H0.98877V38.1825H23.4618V37.4031Z" />
          <path d="M23.034 38.9619H0.561035V39.7413H23.034V38.9619Z" />
          <path d="M22.6903 40.5208H0.217285V41.3002H22.6903V40.5208Z" />
          <path d="M22.5453 42.0796H0.0722656V42.859H22.5453V42.0796Z" />
          <path d="M22.473 43.6382H0V44.4176H22.473V43.6382Z" />
          <path d="M22.5052 45.1941H0.0322266V45.9735H22.5052V45.1941Z" />
          <path d="M22.6419 46.7529H0.168945V47.5323H22.6419V46.7529Z" />
          <path d="M22.7904 48.3118H0.317383V49.0912H22.7904V48.3118Z" />
          <path d="M22.9867 49.9639H0.513672V50.7433H22.9867V49.9639Z" />
          <path d="M23.2303 51.4294H0.757324V52.2089H23.2303V51.4294Z" />
          <path d="M23.4618 52.9885H0.98877V53.7679H23.4618V52.9885Z" />
          <path d="M23.8856 54.5471H1.4126V55.3265H23.8856V54.5471Z" />
          <path d="M24.3773 56.106H1.9043V56.8854H24.3773V56.106Z" />
          <path d="M25.0643 57.6648H2.59131V58.4442H25.0643V57.6648Z" />
        </g>

        <g
          id="cul2_1_reverse"
          transform-origin={`${ShapeWidth / 2} ${ShapeHeight / 2}`}
          transform={`scale(-1, 1)`}
        >
          <use href="#cul2_1" />
        </g>
      </defs>
      <defs>
        <pattern
          id="cul2_1_p"
          width={svgProps.width}
          height={ShapeHeight - 0.78}
          patternUnits="userSpaceOnUse"
        >
          {StartPoints.map((p, idx) => (
            <use
              href={`${p.inversion ? '#cul2_1' : '#cul2_1_reverse'}`}
              x={p.x}
              y={idx % 2 === 0 ? 0 : Gap / 2}
              key={p.x}
            />
          ))}
        </pattern>
      </defs>
      <rect
        width={svgProps.width}
        height={svgProps.height}
        fill="url(#cul2_1_p)"
      />
    </svg>
  )
}
