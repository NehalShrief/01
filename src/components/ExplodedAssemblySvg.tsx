import React from 'react';
import { ASSEMBLY_LAYERS } from '../data/chairData';

interface ExplodedAssemblySvgProps {
  explosionProgress: number; // 0 to 1
  selectedLayerId: string | null;
  onSelectLayer: (layerId: string) => void;
  blueprintMode?: boolean;
}

export const ExplodedAssemblySvg: React.FC<ExplodedAssemblySvgProps> = ({
  explosionProgress,
  selectedLayerId,
  onSelectLayer,
  blueprintMode = false
}) => {
  // Isometric projection factor
  const gap = explosionProgress * 85;

  return (
    <div className="relative w-full h-[520px] flex items-center justify-center select-none">
      <svg
        viewBox="0 0 740 600"
        className="w-full h-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Isometric grid shadow */}
          <ellipse cx="370" cy="520" rx="260" ry="45" fill="rgba(34,31,26,0.06)" />
          
          {/* Gradients for wood frame */}
          <linearGradient id="woodFrameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A3623B" />
            <stop offset="60%" stopColor="#8A4E28" />
            <stop offset="100%" stopColor="#5E3317" />
          </linearGradient>

          {/* Gradient for plywood shell */}
          <linearGradient id="plywoodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E5CBA8" />
            <stop offset="100%" stopColor="#BFA077" />
          </linearGradient>

          {/* Gradient for foam */}
          <linearGradient id="foamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4D6" />
            <stop offset="100%" stopColor="#E2D2A4" />
          </linearGradient>

          {/* Gradient for upholstery fabric */}
          <linearGradient id="fabricGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EFE9DC" />
            <stop offset="60%" stopColor="#D9D1C2" />
            <stop offset="100%" stopColor="#BFB6A4" />
          </linearGradient>
        </defs>

        {/* -------------------------------------------------------------
            LAYER 01: SOLID WOOD FRAME & MORTISE/TENON JOINERY
            Base at Y = 400
        ------------------------------------------------------------- */}
        <g
          className={`cursor-pointer transition-all duration-300 ${
            selectedLayerId && selectedLayerId !== 'layer-1' ? 'opacity-30' : 'opacity-100'
          }`}
          onClick={() => onSelectLayer('layer-1')}
        >
          {/* Rear Leg Left */}
          <path
            d="M 280 340 L 230 490 L 248 495 L 295 345 Z"
            fill="url(#woodFrameGrad)"
            stroke="#4A2510"
            strokeWidth="2"
          />
          {/* Rear Leg Right */}
          <path
            d="M 450 340 L 510 490 L 490 495 L 435 345 Z"
            fill="url(#woodFrameGrad)"
            stroke="#4A2510"
            strokeWidth="2"
          />
          {/* Front Leg Left */}
          <path
            d="M 240 370 L 220 510 L 236 515 L 255 375 Z"
            fill="url(#woodFrameGrad)"
            stroke="#4A2510"
            strokeWidth="2"
          />
          {/* Front Leg Right */}
          <path
            d="M 430 370 L 460 510 L 442 515 L 415 375 Z"
            fill="url(#woodFrameGrad)"
            stroke="#4A2510"
            strokeWidth="2"
          />

          {/* Under-Seat Structural Ring / Apron */}
          <polygon
            points="240,370 430,370 450,340 280,340"
            fill="url(#woodFrameGrad)"
            stroke="#4A2510"
            strokeWidth="2.5"
          />

          {/* Curved Rear Upright Ash Spine Post Left */}
          <path
            d="M 290 340 C 300 240, 310 180, 315 110 L 330 110 C 325 180, 315 240, 305 340 Z"
            fill="url(#woodFrameGrad)"
            stroke="#4A2510"
            strokeWidth="2"
          />
          {/* Curved Rear Upright Ash Spine Post Right */}
          <path
            d="M 425 340 C 420 240, 415 180, 415 110 L 400 110 C 400 180, 405 240, 410 340 Z"
            fill="url(#woodFrameGrad)"
            stroke="#4A2510"
            strokeWidth="2"
          />

          {/* Sculpted Left Armrest */}
          <path
            d="M 220 310 C 240 300, 270 305, 300 330 L 305 340 C 275 315, 245 310, 225 320 Z"
            fill="url(#woodFrameGrad)"
            stroke="#4A2510"
            strokeWidth="2"
          />
          {/* Sculpted Right Armrest */}
          <path
            d="M 460 310 C 440 300, 415 305, 415 330 L 410 340 C 410 315, 435 310, 455 320 Z"
            fill="url(#woodFrameGrad)"
            stroke="#4A2510"
            strokeWidth="2"
          />

          {/* Mortise & Tenon Marker Points */}
          <circle cx="300" cy="335" r="4" fill="#E8B86D" stroke="#4A2510" strokeWidth="1.5" />
          <circle cx="415" cy="335" r="4" fill="#E8B86D" stroke="#4A2510" strokeWidth="1.5" />
        </g>

        {/* -------------------------------------------------------------
            LAYER 02: CURVED PLYWOOD INNER SUBSTRATE SHELL
            Displaced vertically by `gap * 1`
        ------------------------------------------------------------- */}
        <g
          transform={`translate(0, -${gap * 0.9})`}
          className={`cursor-pointer transition-all duration-300 ${
            selectedLayerId && selectedLayerId !== 'layer-2' ? 'opacity-30' : 'opacity-100'
          }`}
          onClick={() => onSelectLayer('layer-2')}
        >
          {/* Seat Plywood Tray */}
          <polygon
            points="260,350 410,350 430,325 295,325"
            fill="url(#plywoodGrad)"
            stroke="#8A5B2B"
            strokeWidth="2"
          />
          {/* 9-ply edge stripe */}
          <line x1="260" y1="353" x2="410" y2="353" stroke="#5E3317" strokeWidth="1.5" strokeDasharray="3 2" />

          {/* Lower Backrest Plywood Shell */}
          <polygon
            points="310,315 410,315 405,210 320,210"
            fill="url(#plywoodGrad)"
            stroke="#8A5B2B"
            strokeWidth="2"
          />

          {/* Upper Headrest Crown Plywood Vessel */}
          <polygon
            points="322,190 398,190 392,120 328,120"
            fill="url(#plywoodGrad)"
            stroke="#8A5B2B"
            strokeWidth="2"
          />
        </g>

        {/* -------------------------------------------------------------
            LAYER 03: DUAL-DENSITY ERGONOMIC FOAM PADS
            Displaced vertically by `gap * 2`
        ------------------------------------------------------------- */}
        <g
          transform={`translate(0, -${gap * 1.8})`}
          className={`cursor-pointer transition-all duration-300 ${
            selectedLayerId && selectedLayerId !== 'layer-3' ? 'opacity-30' : 'opacity-100'
          }`}
          onClick={() => onSelectLayer('layer-3')}
        >
          {/* Foam Seat Cushion */}
          <path
            d="M 255 348 C 255 340, 270 338, 340 338 C 410 338, 420 340, 420 348 L 415 365 C 415 372, 400 375, 340 375 C 280 375, 260 372, 255 365 Z"
            fill="url(#foamGrad)"
            stroke="#B59A57"
            strokeWidth="2"
          />
          {/* Lumbar Backrest Foam */}
          <rect
            x="305"
            y="200"
            width="105"
            height="105"
            rx="12"
            fill="url(#foamGrad)"
            stroke="#B59A57"
            strokeWidth="2"
          />
          {/* Head-Vessel Foam */}
          <path
            d="M 315 110 C 315 95, 335 90, 360 90 C 385 90, 405 95, 405 110 L 400 175 C 400 185, 385 188, 360 188 C 335 188, 320 185, 320 175 Z"
            fill="url(#foamGrad)"
            stroke="#B59A57"
            strokeWidth="2"
          />
        </g>

        {/* -------------------------------------------------------------
            LAYER 04: HAND-TAILORED WOOL & LINEN UPHOLSTERY
            Displaced vertically by `gap * 2.8`
        ------------------------------------------------------------- */}
        <g
          transform={`translate(0, -${gap * 2.7})`}
          className={`cursor-pointer transition-all duration-300 ${
            selectedLayerId && selectedLayerId !== 'layer-4' ? 'opacity-30' : 'opacity-100'
          }`}
          onClick={() => onSelectLayer('layer-4')}
        >
          {/* Finished Fabric Seat Cushion */}
          <path
            d="M 250 345 C 250 335, 270 332, 340 332 C 410 332, 425 335, 425 345 L 420 368 C 420 378, 405 380, 340 380 C 275 380, 255 378, 250 368 Z"
            fill="url(#fabricGrad)"
            stroke="#8A7F6E"
            strokeWidth="2.5"
          />
          {/* Double French Seam Detail */}
          <path
            d="M 258 355 C 275 352, 340 352, 412 355"
            stroke="#8A4E28"
            strokeWidth="1.2"
            strokeDasharray="4 2"
          />

          {/* Finished Fabric Backrest Cushion */}
          <rect
            x="300"
            y="195"
            width="115"
            height="115"
            rx="16"
            fill="url(#fabricGrad)"
            stroke="#8A7F6E"
            strokeWidth="2.5"
          />
          <line x1="310" y1="250" x2="405" y2="250" stroke="#8A4E28" strokeWidth="1.2" strokeDasharray="4 2" />

          {/* Finished Fabric Head-Vessel Crown */}
          <path
            d="M 310 105 C 310 88, 335 82, 360 82 C 385 82, 410 88, 410 105 L 405 180 C 405 192, 385 195, 360 195 C 335 195, 315 192, 315 180 Z"
            fill="url(#fabricGrad)"
            stroke="#8A7F6E"
            strokeWidth="2.5"
          />
        </g>

        {/* Exploded Leader Lines and Badges */}
        {explosionProgress > 0.25 && (
          <g fontFamily="'IBM Plex Mono', monospace" fontSize="11" opacity={explosionProgress}>
            {/* Layer 04 Callout */}
            <line x1="435" y1={360 - gap * 2.7} x2="570" y2={360 - gap * 2.7} stroke="#8A4E28" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="435" cy={360 - gap * 2.7} r="3" fill="#8A4E28" />
            <text x="580" y={364 - gap * 2.7} fill="#8A4E28" fontWeight="600">04. 100% WOOL/LINEN UPHOLSTERY</text>

            {/* Layer 03 Callout */}
            <line x1="430" y1={360 - gap * 1.8} x2="570" y2={360 - gap * 1.8} stroke="#B59A57" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="430" cy={360 - gap * 1.8} r="3" fill="#B59A57" />
            <text x="580" y={364 - gap * 1.8} fill="#5B564C" fontWeight="600">03. DUAL-DENSITY FOAM (50+38kg/m³)</text>

            {/* Layer 02 Callout */}
            <line x1="440" y1={340 - gap * 0.9} x2="570" y2={340 - gap * 0.9} stroke="#8A5B2B" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="440" cy={340 - gap * 0.9} r="3" fill="#8A5B2B" />
            <text x="580" y={344 - gap * 0.9} fill="#5B564C" fontWeight="600">02. 12MM CURVED PLYWOOD CORE</text>

            {/* Layer 01 Callout */}
            <line x1="460" y1="360" x2="570" y2="360" stroke="#4A2510" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="460" cy="360" r="3" fill="#4A2510" />
            <text x="580" y="364" fill="#221F1A" fontWeight="600">01. STEAM-BENT ASH FRAME & JOINERY</text>
          </g>
        )}
      </svg>
    </div>
  );
};
