import React from 'react';

interface FormEvolutionSvgProps {
  stage: number; // 1, 2, 3, 4
  showWireframe?: boolean;
}

export const FormEvolutionSvg: React.FC<FormEvolutionSvgProps> = ({
  stage,
  showWireframe = true
}) => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      <svg
        viewBox="0 0 540 500"
        className="w-full h-full drop-shadow-sm transition-all duration-500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ground reference line */}
        <line x1="40" y1="440" x2="500" y2="440" stroke="#8C867A" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
        <text x="50" y="456" fill="#8C867A" fontSize="10" fontFamily="'IBM Plex Mono', monospace">GROUND AXIS ±0.00</text>

        {/* STAGE 1: GEOMETRIC PRIMITIVES (Sphere / Block / Pedestal) */}
        {stage === 1 && (
          <g className="transition-all duration-500">
            {/* Base Pedestal Mass */}
            <polygon
              points="140,430 400,430 380,310 160,310"
              fill="#D4B996"
              stroke="#221F1A"
              strokeWidth="2.5"
            />
            <text x="270" y="375" fill="#221F1A" fontSize="12" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fontWeight="600">
              PEDESTAL / BASE MASS
            </text>

            {/* Torso Rectangular Block */}
            <rect
              x="190"
              y="160"
              width="160"
              height="150"
              fill="#E4DFD3"
              stroke="#221F1A"
              strokeWidth="2.5"
            />
            <text x="270" y="240" fill="#221F1A" fontSize="12" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fontWeight="600">
              TORSO BLOCK
            </text>

            {/* Head / Water Pot Urn Sphere */}
            <circle
              cx="270"
              cy="100"
              r="48"
              fill="#8A4E28"
              fillOpacity="0.8"
              stroke="#221F1A"
              strokeWidth="2.5"
            />
            <text x="270" y="105" fill="#EDE9E0" fontSize="11" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fontWeight="600">
              HEAD / URN
            </text>

            {/* Mass Center Line */}
            <line x1="270" y1="30" x2="270" y2="440" stroke="#8A4E28" strokeWidth="1.5" strokeDasharray="6 3" />
          </g>
        )}

        {/* STAGE 2: REFINED BLOCK MODEL */}
        {stage === 2 && (
          <g className="transition-all duration-500">
            {/* Angled Base with leg cutouts */}
            <path
              d="M 160 430 L 190 320 L 360 320 L 390 430 L 350 430 L 330 350 L 220 350 L 200 430 Z"
              fill="#D4B996"
              stroke="#221F1A"
              strokeWidth="2.5"
            />
            {/* Angled Backrest Block (112° pitch) */}
            <polygon
              points="220,320 370,320 400,160 250,160"
              fill="#E4DFD3"
              stroke="#221F1A"
              strokeWidth="2.5"
            />
            {/* Angled Headrest block */}
            <polygon
              points="260,150 390,150 410,75 280,75"
              fill="#8A4E28"
              fillOpacity="0.8"
              stroke="#221F1A"
              strokeWidth="2.5"
            />
            {/* Proportional Division Lines */}
            <line x1="235" y1="240" x2="385" y2="240" stroke="#221F1A" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="310" y="245" fill="#221F1A" fontSize="10" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle">
              112° INCLINE SEPARATION
            </text>
          </g>
        )}

        {/* STAGE 3: DRAPED WIREFRAME GEOMETRY */}
        {stage === 3 && (
          <g className="transition-all duration-500">
            {/* Continuous curved spine wireframe */}
            <path
              d="M 370 70 C 350 180, 315 280, 300 340 L 410 435 L 390 440 L 285 350 C 300 280, 335 180, 350 70 Z"
              fill="rgba(138, 78, 40, 0.2)"
              stroke="#8A4E28"
              strokeWidth="2"
            />
            {/* Fluid Armrest curve */}
            <path
              d="M 180 260 C 210 245, 270 255, 330 300 L 330 315 C 270 270, 210 260, 180 275 Z"
              fill="rgba(138, 78, 40, 0.2)"
              stroke="#8A4E28"
              strokeWidth="2"
            />
            {/* Front Leg wireframe */}
            <path d="M 195 315 L 180 435 L 198 440 L 215 315 Z" fill="rgba(138, 78, 40, 0.2)" stroke="#8A4E28" strokeWidth="2" />

            {/* Draped Surface Wireframe Iso-lines */}
            {showWireframe && (
              <g stroke="#243B4A" strokeWidth="1" opacity="0.65">
                <line x1="200" y1="330" x2="330" y2="350" />
                <line x1="210" y1="310" x2="335" y2="330" />
                <line x1="280" y1="260" x2="360" y2="280" />
                <line x1="295" y1="210" x2="375" y2="230" />
                <line x1="310" y1="160" x2="385" y2="175" />
                <line x1="325" y1="110" x2="395" y2="120" />
                {/* Longitudinal flow curve */}
                <path d="M 335 85 C 315 180, 280 280, 220 330" fill="none" stroke="#243B4A" strokeWidth="1.5" strokeDasharray="3 3" />
              </g>
            )}
            <text x="270" y="470" fill="#243B4A" fontSize="11" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fontWeight="600">
              NURBS DRAPED SURFACES & REFINED RADII (R15 - R35)
            </text>
          </g>
        )}

        {/* STAGE 4: MANUFACTURED SITTABLE PROTOTYPE */}
        {stage === 4 && (
          <g className="transition-all duration-500">
            {/* Rear Splayed Leg */}
            <path d="M 305 350 L 415 440 L 395 440 L 290 365 Z" fill="#8A4E28" stroke="#221F1A" strokeWidth="2" />
            {/* Front Leg */}
            <path d="M 195 320 L 180 440 L 198 440 L 215 320 Z" fill="#8A4E28" stroke="#221F1A" strokeWidth="2" />
            {/* Spine Rail */}
            <path
              d="M 365 75 C 345 180, 315 280, 300 350 L 318 355 C 330 285, 360 185, 380 75 Z"
              fill="#8A4E28"
              stroke="#221F1A"
              strokeWidth="2"
            />
            {/* Armrest */}
            <path
              d="M 175 255 C 205 242, 260 250, 315 295 L 315 308 C 260 262, 205 255, 175 268 Z"
              fill="#8A4E28"
              stroke="#221F1A"
              strokeWidth="2"
            />
            <path d="M 175 255 L 195 325 L 210 325 L 190 260 Z" fill="#8A4E28" stroke="#221F1A" strokeWidth="1.5" />

            {/* Finished Cushions (Seat, Lumbar, Head) */}
            <path
              d="M 180 325 C 180 312, 195 308, 240 312 L 325 328 C 335 330, 335 348, 320 352 L 195 338 C 185 336, 180 330, 180 325 Z"
              fill="#EDE9E0"
              stroke="#5B564C"
              strokeWidth="2"
            />
            <rect x="285" y="195" width="85" height="100" rx="12" fill="#EDE9E0" stroke="#5B564C" strokeWidth="2" />
            <path
              d="M 320 85 C 320 72, 340 68, 360 68 C 380 68, 395 72, 395 85 L 390 155 C 390 165, 375 170, 355 170 C 335 170, 320 165, 320 155 Z"
              fill="#EDE9E0"
              stroke="#5B564C"
              strokeWidth="2"
            />

            {/* Specs marker */}
            <text x="270" y="475" fill="#8A4E28" fontSize="12" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fontWeight="600">
              THABET (ثابت) · 40% MONUMENT / 60% FUNCTION
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
