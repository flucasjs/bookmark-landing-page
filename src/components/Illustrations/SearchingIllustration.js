import * as React from "react";

export default function SearchingIllustration(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={props.width}
      height={props.height}
      {...props}
    >
      <defs>
        <filter
          id="c"
          width="117.5%"
          height="113.7%"
          x="-8.8%"
          y="-4.9%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy={5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation={5}
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0.285332669 0 0 0 0 0.363695184 0 0 0 0 0.811480978 0 0 0 0.0830692745 0"
          />
        </filter>
        <filter
          id="e"
          width="139.5%"
          height="131%"
          x="-19.8%"
          y="-13.5%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy={5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation={5}
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
            values="0 0 0 0 0.285332669 0 0 0 0 0.363695184 0 0 0 0 0.811480978 0 0 0 0.0830692745 0"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          id="f"
          width="117.5%"
          height="113.7%"
          x="-8.8%"
          y="-4.9%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy={5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation={5}
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0.285332669 0 0 0 0 0.363695184 0 0 0 0 0.811480978 0 0 0 0.0830692745 0"
          />
        </filter>
        <rect id="a" width={350} height={346} rx={8} />
        <rect id="d" width={200} height={255} rx={8} />
        <rect id="g" width={200} height={255} rx={8} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use xlinkHref="#a" fill="#E8EAF6" fillRule="nonzero" />
        <g mask="url(#b)">
          <path fill="#242A45" d="M-3.53.197h547v59h-547z" />
          <g fill="#FFF" transform="translate(22.47 14.197)">
            <circle cx={16} cy={16} r={16} opacity={0.245} />
            <g transform="translate(47 6)">
              <rect width={120} height={6} opacity={0.75} rx={3} />
              <rect width={64} height={6} y={14} opacity={0.25} rx={3} />
            </g>
          </g>
        </g>
        <g transform="translate(27 138)">
          <use xlinkHref="#d" fill="#000" filter="url(#c)" />
          <use xlinkHref="#d" fill="#FFF" />
          <g transform="translate(23 29)">
            <rect
              width={101.317}
              height={6}
              x={45.683}
              y={6}
              fill="#242A45"
              opacity={0.5}
              rx={3}
            />
            <circle cx={16} cy={16} r={16} fill="#5267DF" />
            <rect
              width={54.036}
              height={6}
              x={45.683}
              y={20}
              fill="#242A45"
              opacity={0.25}
              rx={3}
            />
            <g transform="translate(0 56)">
              <circle cx={16} cy={16} r={16} fill="#5267DF" />
              <rect
                width={101.317}
                height={6}
                x={45.683}
                y={6}
                fill="#242A45"
                opacity={0.5}
                rx={3}
              />
              <rect
                width={54.036}
                height={6}
                x={45.683}
                y={20}
                fill="#242A45"
                opacity={0.25}
                rx={3}
              />
            </g>
            <g transform="translate(0 112)">
              <circle cx={16} cy={16} r={16} fill="#5267DF" />
              <rect
                width={101.317}
                height={6}
                x={45.683}
                y={6}
                fill="#242A45"
                opacity={0.5}
                rx={3}
              />
              <rect
                width={54.036}
                height={6}
                x={45.683}
                y={20}
                fill="#242A45"
                opacity={0.25}
                rx={3}
              />
            </g>
            <g transform="translate(0 168)">
              <circle cx={16} cy={16} r={16} fill="#5267DF" />
              <rect
                width={101.317}
                height={6}
                x={45.683}
                y={6}
                fill="#242A45"
                opacity={0.5}
                rx={3}
              />
              <rect
                width={54.036}
                height={6}
                x={45.683}
                y={20}
                fill="#242A45"
                opacity={0.25}
                rx={3}
              />
            </g>
          </g>
        </g>
        <g filter="url(#e)" transform="translate(251 138)">
          <use xlinkHref="#g" fill="#000" filter="url(#f)" />
          <use xlinkHref="#g" fill="#FFF" />
          <g transform="translate(23 29)">
            <rect
              width={101.317}
              height={6}
              x={45.683}
              y={6}
              fill="#242A45"
              opacity={0.5}
              rx={3}
            />
            <circle cx={16} cy={16} r={16} fill="#5267DF" />
            <rect
              width={54.036}
              height={6}
              x={45.683}
              y={20}
              fill="#242A45"
              opacity={0.25}
              rx={3}
            />
            <g transform="translate(0 56)">
              <circle cx={16} cy={16} r={16} fill="#FA5959" />
              <rect
                width={101.317}
                height={6}
                x={45.683}
                y={6}
                fill="#242A45"
                opacity={0.5}
                rx={3}
              />
              <rect
                width={54.036}
                height={6}
                x={45.683}
                y={20}
                fill="#242A45"
                opacity={0.25}
                rx={3}
              />
            </g>
            <g transform="translate(0 112)">
              <circle cx={16} cy={16} r={16} fill="#5267DF" />
              <rect
                width={101.317}
                height={6}
                x={45.683}
                y={6}
                fill="#242A45"
                opacity={0.5}
                rx={3}
              />
              <rect
                width={54.036}
                height={6}
                x={45.683}
                y={20}
                fill="#242A45"
                opacity={0.25}
                rx={3}
              />
            </g>
            <g transform="translate(0 168)">
              <circle cx={16} cy={16} r={16} fill="#5267DF" />
              <rect
                width={101.317}
                height={6}
                x={45.683}
                y={6}
                fill="#242A45"
                opacity={0.5}
                rx={3}
              />
              <rect
                width={54.036}
                height={6}
                x={45.683}
                y={20}
                fill="#242A45"
                opacity={0.25}
                rx={3}
              />
            </g>
          </g>
        </g>
        <rect width={237} height={34} x={27} y={85} fill="#FFF" rx={8} />
        <g stroke="#5267DF" strokeWidth={20} transform="translate(305 102)">
          <circle cx={67} cy={67} r={67} fill="#495DCF" fillOpacity={0.2} />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m114 115 49 49"
          />
        </g>
      </g>
    </svg>
  );
}
