import React from 'react';
import { ANATOMY_MAPPINGS } from '../data/chairData';

interface AnatomyErgonomicsSvgProps {
  selectedMappingId: string;
  onSelectMapping: (id: string) => void;
  showAngles?: boolean;
}

export const AnatomyErgonomicsSvg: React.FC<AnatomyErgonomicsSvgProps> = ({
  selectedMappingId,
  onSelectMapping,
  showAngles = true
}) => {
  return (
    <div className="relative w-full h-[520px] flex items-center justify-center select-none">
      <svg
        viewBox="0 0 680 580"
        className="w-full h-full drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="humanSkinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A88B77" />
            <stop offset="100%" stopColor="#8C6F5B" />
          </linearGradient>
        </defs>

        {/* Ground level */}
        <line x1="40" y1="520" x2="640" y2="520" stroke="#8C867A" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
        <text x="50" y="538" fill="#8C867A" fontSize="11" fontFamily="'IBM Plex Mono', monospace">GROUND LEVEL (FEET GROUNDED ±0.00)</text>

        {/* -------------------------------------------------------------
            BACKGROUND CHAIR SILHOUETTE (GHOSTED & STRUCTURAL)
        ------------------------------------------------------------- */}
        <g opacity="0.65">
          {/* Rear Leg */}
          <path d="M 285 340 L 390 520 L 372 520 L 270 355 Z" fill="#8A4E28" stroke="#221F1A" strokeWidth="1.5" />
          {/* Front Leg */}
          <path d="M 155 315 L 140 520 L 158 520 L 175 315 Z" fill="#8A4E28" stroke="#221F1A" strokeWidth="1.5" />
          {/* Steam-Bent Spine */}
          <path
            d="M 345 80 C 330 180, 300 280, 280 345 L 298 350 C 315 285, 345 185, 362 80 Z"
            fill="#8A4E28"
            stroke="#221F1A"
            strokeWidth="1.5"
          />
          {/* Armrest */}
          <path
            d="M 135 240 C 160 230, 220 238, 290 285 L 290 298 C 220 252, 160 245, 135 255 Z"
            fill="#8A4E28"
            stroke="#221F1A"
            strokeWidth="1.5"
          />
          {/* Seat Cushion */}
          <path d="M 140 310 L 295 330 L 290 355 L 145 335 Z" fill="#E4DFD3" stroke="#221F1A" strokeWidth="1.5" />
          {/* Backrest Cushion */}
          <rect x="270" y="180" width="75" height="100" rx="10" fill="#E4DFD3" stroke="#221F1A" strokeWidth="1.5" />
          {/* Headrest Crown */}
          <path d="M 305 80 C 305 70, 320 65, 340 65 C 360 65, 375 70, 375 80 L 370 145 L 305 145 Z" fill="#E4DFD3" stroke="#221F1A" strokeWidth="1.5" />
        </g>

        {/* -------------------------------------------------------------
            HUMAN FIGURE SITTING IN ANATOMICAL POSTURE (FELLAH POSE)
        ------------------------------------------------------------- */}
        {/* Head & Ballad Urn / Water Vessel */}
        <g
          className="cursor-pointer transition-all duration-300 group"
          onClick={() => onSelectMapping('head-vessel')}
        >
          {/* Human Head */}
          <circle
            cx="320"
            cy="110"
            r="32"
            fill="url(#humanSkinGrad)"
            stroke={selectedMappingId === 'head-vessel' ? '#8A4E28' : '#221F1A'}
            strokeWidth={selectedMappingId === 'head-vessel' ? 3 : 1.5}
          />
          {/* Contemplative Gaze Ray */}
          <line x1="330" y1="105" x2="440" y2="120" stroke="#8A4E28" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          <text x="450" y="124" fill="#8A4E28" fontSize="10" fontFamily="'IBM Plex Mono', monospace">CONTEMPLATIVE GAZE</text>

          {/* Crown / Vessel Halo Ring */}
          <ellipse
            cx="320"
            cy="70"
            rx="24"
            ry="14"
            fill={selectedMappingId === 'head-vessel' ? 'rgba(138,78,40,0.3)' : 'rgba(138,78,40,0.1)'}
            stroke="#8A4E28"
            strokeWidth="1.5"
          />
          <text x="320" y="74" fill="#8A4E28" fontSize="9" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle">
            BALLAD URN
          </text>
        </g>

        {/* Torso & Spinal Column (112° recline) */}
        <g
          className="cursor-pointer transition-all duration-300 group"
          onClick={() => onSelectMapping('spine-torso')}
        >
          {/* Upper Body Torso */}
          <path
            d="M 310 145 C 290 195, 275 255, 265 315 L 235 310 C 245 250, 260 190, 280 145 Z"
            fill="url(#humanSkinGrad)"
            stroke={selectedMappingId === 'spine-torso' ? '#8A4E28' : '#221F1A'}
            strokeWidth={selectedMappingId === 'spine-torso' ? 3 : 1.5}
          />
          {/* Spine Vertebrae dots */}
          <circle cx="295" cy="180" r="3" fill="#EDE9E0" />
          <circle cx="282" cy="220" r="3" fill="#EDE9E0" />
          <circle cx="272" cy="260" r="3" fill="#EDE9E0" />
          <circle cx="264" cy="300" r="3" fill="#EDE9E0" />
        </g>

        {/* Arms & Hands Resting on Armrests */}
        <g
          className="cursor-pointer transition-all duration-300 group"
          onClick={() => onSelectMapping('shoulders-arms')}
        >
          {/* Upper Arm down from shoulder */}
          <path
            d="M 285 160 C 265 200, 230 230, 195 240 L 150 240 C 145 240, 140 245, 140 250 C 140 255, 145 258, 150 258 L 205 255 C 240 245, 275 210, 298 165 Z"
            fill="url(#humanSkinGrad)"
            stroke={selectedMappingId === 'shoulders-arms' ? '#8A4E28' : '#221F1A'}
            strokeWidth={selectedMappingId === 'shoulders-arms' ? 3 : 1.5}
          />
        </g>

        {/* Pelvis & Thighs Resting on Seat (7° tilt) */}
        <g
          className="cursor-pointer transition-all duration-300 group"
          onClick={() => onSelectMapping('pelvis-thighs')}
        >
          {/* Thigh section */}
          <path
            d="M 265 315 C 255 335, 240 340, 160 315 L 140 315 C 130 330, 130 345, 145 355 L 235 370 C 255 370, 275 350, 280 325 Z"
            fill="url(#humanSkinGrad)"
            stroke={selectedMappingId === 'pelvis-thighs' ? '#8A4E28' : '#221F1A'}
            strokeWidth={selectedMappingId === 'pelvis-thighs' ? 3 : 1.5}
          />
        </g>

        {/* Lower Legs & Feet Connected to Ground */}
        <g
          className="cursor-pointer transition-all duration-300 group"
          onClick={() => onSelectMapping('legs-feet')}
        >
          {/* Shin & Calf */}
          <path
            d="M 140 340 L 125 500 L 95 500 C 85 500, 80 508, 80 515 L 145 515 C 155 515, 160 505, 155 495 L 165 345 Z"
            fill="url(#humanSkinGrad)"
            stroke={selectedMappingId === 'legs-feet' ? '#8A4E28' : '#221F1A'}
            strokeWidth={selectedMappingId === 'legs-feet' ? 3 : 1.5}
          />
        </g>

        {/* -------------------------------------------------------------
            ERGONOMIC ANGLE LABELS & PROPORTIONAL BARS
        ------------------------------------------------------------- */}
        {showAngles && (
          <g fontFamily="'IBM Plex Mono', monospace" fontSize="11">
            {/* 112° Back Angle arc */}
            <path d="M 270 310 A 55 55 0 0 1 300 260" stroke="#8A4E28" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="270" y1="310" x2="270" y2="245" stroke="#8C867A" strokeWidth="1" strokeDasharray="2 2" />
            <text x="310" y="275" fill="#8A4E28" fontWeight="600">112° LUMBAR RECLINE</text>

            {/* 7° Seat Incline */}
            <path d="M 145 325 A 70 70 0 0 0 215 330" stroke="#8A4E28" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="145" y1="325" x2="225" y2="325" stroke="#8C867A" strokeWidth="1" strokeDasharray="2 2" />
            <text x="180" y="348" fill="#8A4E28" fontWeight="600">7° PELVIS ANGLE</text>

            {/* Popliteal clearance callout */}
            <line x1="140" y1="355" x2="80" y2="385" stroke="#8C867A" strokeWidth="1" />
            <text x="50" y="405" fill="#5B564C">60mm POPLITEAL</text>
            <text x="50" y="418" fill="#5B564C">NERVE CLEARANCE</text>

            {/* Height references */}
            <line x1="480" y1="65" x2="480" y2="520" stroke="#8C867A" strokeWidth="1" />
            <line x1="470" y1="65" x2="490" y2="65" stroke="#8C867A" strokeWidth="1" />
            <line x1="470" y1="520" x2="490" y2="520" stroke="#8C867A" strokeWidth="1" />
            <text x="495" y="290" fill="#5B564C" transform="rotate(90 495 290)">TOTAL HEIGHT: 1080 mm</text>
          </g>
        )}
      </svg>
    </div>
  );
};
