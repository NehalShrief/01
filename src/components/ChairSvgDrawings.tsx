import React from 'react';

interface SvgProps {
  className?: string;
  blueprintMode?: boolean;
  highlightPart?: string;
  showDimensions?: boolean;
  showLoadPaths?: boolean;
  showPressureMap?: boolean;
  onHoverHotspot?: (hotspotId: string | null) => void;
  onClickHotspot?: (hotspotId: string) => void;
  activeHotspotId?: string | null;
}

/**
 * Side Elevation SVG with exact 112° backrest recline, 7° seat pitch,
 * 1080mm overall height, 460mm seat height, 660mm/560mm armrest.
 */
export const SideElevationSvg: React.FC<SvgProps> = ({
  className = 'w-full h-full',
  blueprintMode = false,
  showDimensions = true,
  showLoadPaths = false,
  showPressureMap = false,
  onHoverHotspot,
  onClickHotspot,
  activeHotspotId
}) => {
  const strokeColor = blueprintMode ? '#C9D8DE' : '#221F1A';
  const accentColor = blueprintMode ? '#64B5F6' : '#8A4E28';
  const dimColor = blueprintMode ? '#88B2C4' : '#5B564C';
  const woodFill = blueprintMode ? 'rgba(201, 216, 222, 0.05)' : '#D4B996';
  const cushionFill = blueprintMode ? 'rgba(100, 181, 246, 0.15)' : '#E5DEC9';

  return (
    <svg
      viewBox="0 0 600 680"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}
    >
      <defs>
        {/* Hatch pattern for section cuts */}
        <pattern id="woodHatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="8" stroke={dimColor} strokeWidth="0.8" opacity="0.4" />
        </pattern>
        {/* Pressure gradient */}
        <radialGradient id="pressurePelvis" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#EF4444" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#F59E0B" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pressureLumbar" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.75" />
          <stop offset="70%" stopColor="#10B981" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ground Line */}
      <line x1="60" y1="600" x2="540" y2="600" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />
      <text x="70" y="618" fill={dimColor} fontSize="11" fontFamily="'IBM Plex Mono', monospace">GROUND LEVEL ±0.00</text>

      {/* REAR LEG - Splayed back to OD 700mm */}
      <path
        d="M 330 380 L 440 600 L 418 600 L 310 395 Z"
        fill={woodFill}
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* FRONT LEG - Columnar verticality */}
      <path
        d="M 180 340 L 170 600 L 192 600 L 205 340 Z"
        fill={woodFill}
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* UNDER-SEAT APRON & STRUCTURAL RAILS */}
      <path
        d="M 175 340 L 335 375 L 330 395 L 180 360 Z"
        fill={woodFill}
        stroke={strokeColor}
        strokeWidth="2"
      />

      {/* STEAM-BENT ASH SPINE - Sweeps from 112° backrest down into the seat connection */}
      <path
        d="M 395 100 C 375 220, 340 330, 325 385 L 348 390 C 365 330, 400 220, 420 100 Z"
        fill={woodFill}
        stroke={accentColor}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* CUSHION 01: SEAT PLATFORM (460mm height, 7° incline) */}
      {/* 7° pitch: Front is at Y=335, Rear is at Y=370 */}
      <path
        d="M 155 335 C 155 320, 175 315, 220 320 L 350 340 C 365 342, 365 365, 345 370 L 175 350 C 160 348, 155 342, 155 335 Z"
        fill={cushionFill}
        stroke={strokeColor}
        strokeWidth="2"
      />

      {/* CUSHION 02: THORACIC / LUMBAR BACKREST (112° Angle) */}
      <path
        d="M 330 340 C 350 340, 365 330, 368 250 L 375 210 C 377 195, 360 190, 345 190 L 330 225 C 315 260, 310 325, 330 340 Z"
        fill={cushionFill}
        stroke={strokeColor}
        strokeWidth="2"
      />

      {/* CUSHION 03: HEAD-VESSEL CROWN (Top Apex at 1080mm height) */}
      <path
        d="M 360 180 C 380 180, 395 160, 402 115 C 405 95, 385 85, 368 88 C 350 92, 340 115, 342 145 C 345 170, 350 180, 360 180 Z"
        fill={cushionFill}
        stroke={strokeColor}
        strokeWidth="2"
      />

      {/* SCULPTED ARMREST (Tapering from 660mm front to 560mm rear) */}
      <path
        d="M 150 250 C 175 240, 240 250, 335 300 L 335 315 C 240 268, 175 260, 150 270 Z"
        fill={woodFill}
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Front Armrest vertical upright support */}
      <path
        d="M 150 250 L 175 340 L 195 340 L 170 255 Z"
        fill={woodFill}
        stroke={strokeColor}
        strokeWidth="2"
      />

      {/* PRESSURE MAP OVERLAYS (WHEN TOGGLED) */}
      {showPressureMap && (
        <g className="transition-opacity duration-300">
          {/* Ischial Tuberosity pressure zone */}
          <ellipse cx="270" cy="340" rx="45" ry="18" fill="url(#pressurePelvis)" transform="rotate(7 270 340)" />
          {/* Lumbar Lordosis contact zone */}
          <ellipse cx="340" cy="270" rx="20" ry="40" fill="url(#pressureLumbar)" transform="rotate(-22 340 270)" />
          {/* Cervical headrest pressure */}
          <ellipse cx="370" cy="130" rx="16" ry="25" fill="url(#pressureLumbar)" transform="rotate(-22 370 130)" />
          <text x="190" y="420" fill="#EF4444" fontSize="11" fontFamily="'IBM Plex Mono', monospace" fontWeight="600">
            ● PEAK LOAD: ISCHIAL CRADLE (0.38 MPa)
          </text>
          <text x="360" y="240" fill="#F59E0B" fontSize="11" fontFamily="'IBM Plex Mono', monospace" fontWeight="600">
            ● LUMBAR SUPPORT ZONE (112° RELIEF)
          </text>
        </g>
      )}

      {/* LOAD PATH VECTORS (WHEN TOGGLED) */}
      {showLoadPaths && (
        <g className="transition-opacity duration-300">
          {/* Upper torso load vector down the spine */}
          <path
            d="M 370 130 C 350 220, 335 310, 330 380"
            stroke="#EF4444"
            strokeWidth="3"
            strokeDasharray="4 4"
            markerEnd="url(#arrowRed)"
          />
          {/* Compression down rear splayed leg */}
          <line x1="330" y1="380" x2="430" y2="595" stroke="#EF4444" strokeWidth="3" markerEnd="url(#arrowRed)" />
          {/* Direct vertical gravitational load down front leg */}
          <line x1="180" y1="340" x2="180" y2="595" stroke="#3B82F6" strokeWidth="3" markerEnd="url(#arrowBlue)" />
          <text x="445" y="520" fill="#EF4444" fontSize="11" fontFamily="'IBM Plex Mono', monospace">
            PRIMARY REAR LOAD (68%)
          </text>
          <text x="80" y="520" fill="#3B82F6" fontSize="11" fontFamily="'IBM Plex Mono', monospace">
            FRONT LOAD (32%)
          </text>
        </g>
      )}

      {/* DIMENSION LINES & ANGLE ARCS */}
      {showDimensions && (
        <g opacity="0.85">
          {/* Overall Height (1080mm) Dimension Line */}
          <line x1="490" y1="88" x2="490" y2="600" stroke={dimColor} strokeWidth="1" />
          <line x1="475" y1="88" x2="505" y2="88" stroke={dimColor} strokeWidth="1" />
          <line x1="475" y1="600" x2="505" y2="600" stroke={dimColor} strokeWidth="1" />
          <text x="500" y="340" fill={dimColor} fontSize="12" fontFamily="'IBM Plex Mono', monospace" transform="rotate(90 500 340)">
            OH: 1080 mm
          </text>

          {/* Seat Height (460mm) Dimension Line */}
          <line x1="100" y1="335" x2="100" y2="600" stroke={dimColor} strokeWidth="1" />
          <line x1="88" y1="335" x2="112" y2="335" stroke={dimColor} strokeWidth="1" />
          <line x1="88" y1="600" x2="112" y2="600" stroke={dimColor} strokeWidth="1" />
          <text x="90" y="470" fill={dimColor} fontSize="11" fontFamily="'IBM Plex Mono', monospace" transform="rotate(-90 90 470)">
            SH: 460 mm
          </text>

          {/* Armrest Height (660mm front / 560mm rear) */}
          <line x1="125" y1="250" x2="125" y2="600" stroke={dimColor} strokeWidth="0.8" strokeDasharray="3 3" />
          <text x="115" y="245" fill={dimColor} fontSize="10" fontFamily="'IBM Plex Mono', monospace">AH: 660mm</text>

          {/* Overall Depth (700mm) Dimension Line */}
          <line x1="150" y1="640" x2="440" y2="640" stroke={dimColor} strokeWidth="1" />
          <line x1="150" y1="630" x2="150" y2="650" stroke={dimColor} strokeWidth="1" />
          <line x1="440" y1="630" x2="440" y2="650" stroke={dimColor} strokeWidth="1" />
          <text x="260" y="658" fill={dimColor} fontSize="12" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle">
            OD: 700 mm
          </text>

          {/* Backrest Angle 112° Arc */}
          <path d="M 330 350 A 60 60 0 0 1 365 295" stroke={accentColor} strokeWidth="1.5" strokeDasharray="2 2" />
          <line x1="330" y1="350" x2="330" y2="280" stroke={dimColor} strokeWidth="0.8" strokeDasharray="3 3" />
          <text x="365" y="310" fill={accentColor} fontSize="12" fontFamily="'IBM Plex Mono', monospace" fontWeight="600">
            BA: 112°
          </text>

          {/* Seat Incline 7° Arc */}
          <path d="M 175 350 A 80 80 0 0 0 250 355" stroke={accentColor} strokeWidth="1.5" strokeDasharray="2 2" />
          <line x1="175" y1="350" x2="255" y2="350" stroke={dimColor} strokeWidth="0.8" strokeDasharray="3 3" />
          <text x="205" y="375" fill={accentColor} fontSize="11" fontFamily="'IBM Plex Mono', monospace" fontWeight="600">
            SA: 7°
          </text>
        </g>
      )}

      {/* INTERACTIVE HOTSPOTS */}
      {/* Hotspot: Mortise Joint */}
      <g
        className="cursor-pointer group"
        onMouseEnter={() => onHoverHotspot?.('hs-mortise-arm')}
        onMouseLeave={() => onHoverHotspot?.(null)}
        onClick={() => onClickHotspot?.('hs-mortise-arm')}
      >
        <circle
          cx="170"
          cy="255"
          r={activeHotspotId === 'hs-mortise-arm' ? 12 : 7}
          fill={activeHotspotId === 'hs-mortise-arm' ? '#EF4444' : accentColor}
          className="transition-all duration-200"
        />
        <circle cx="170" cy="255" r="16" stroke={accentColor} strokeWidth="1" opacity="0.4" className="animate-ping" />
      </g>

      {/* Hotspot: Steam-Bent Spine */}
      <g
        className="cursor-pointer group"
        onMouseEnter={() => onHoverHotspot?.('hs-spine-curve')}
        onMouseLeave={() => onHoverHotspot?.(null)}
        onClick={() => onClickHotspot?.('hs-spine-curve')}
      >
        <circle
          cx="370"
          cy="220"
          r={activeHotspotId === 'hs-spine-curve' ? 12 : 7}
          fill={activeHotspotId === 'hs-spine-curve' ? '#EF4444' : accentColor}
          className="transition-all duration-200"
        />
      </g>

      {/* Hotspot: Seat Angle */}
      <g
        className="cursor-pointer group"
        onMouseEnter={() => onHoverHotspot?.('hs-seat-angle')}
        onMouseLeave={() => onHoverHotspot?.(null)}
        onClick={() => onClickHotspot?.('hs-seat-angle')}
      >
        <circle
          cx="260"
          cy="335"
          r={activeHotspotId === 'hs-seat-angle' ? 12 : 7}
          fill={activeHotspotId === 'hs-seat-angle' ? '#EF4444' : accentColor}
          className="transition-all duration-200"
        />
      </g>

      {/* Hotspot: Head-Vessel Apex */}
      <g
        className="cursor-pointer group"
        onMouseEnter={() => onHoverHotspot?.('hs-head-vessel')}
        onMouseLeave={() => onHoverHotspot?.(null)}
        onClick={() => onClickHotspot?.('hs-head-vessel')}
      >
        <circle
          cx="375"
          cy="120"
          r={activeHotspotId === 'hs-head-vessel' ? 12 : 7}
          fill={activeHotspotId === 'hs-head-vessel' ? '#EF4444' : accentColor}
          className="transition-all duration-200"
        />
      </g>

      {/* Hotspot: Rear Splay */}
      <g
        className="cursor-pointer group"
        onMouseEnter={() => onHoverHotspot?.('hs-rear-splay')}
        onMouseLeave={() => onHoverHotspot?.(null)}
        onClick={() => onClickHotspot?.('hs-rear-splay')}
      >
        <circle
          cx="428"
          cy="580"
          r={activeHotspotId === 'hs-rear-splay' ? 12 : 7}
          fill={activeHotspotId === 'hs-rear-splay' ? '#EF4444' : accentColor}
          className="transition-all duration-200"
        />
      </g>
    </svg>
  );
};

/**
 * Front Elevation SVG showing 620mm OW, 550mm BW, 660mm Armrest
 */
export const FrontElevationSvg: React.FC<SvgProps> = ({
  className = 'w-full h-full',
  blueprintMode = false,
  showDimensions = true
}) => {
  const strokeColor = blueprintMode ? '#C9D8DE' : '#221F1A';
  const accentColor = blueprintMode ? '#64B5F6' : '#8A4E28';
  const dimColor = blueprintMode ? '#88B2C4' : '#5B564C';
  const woodFill = blueprintMode ? 'rgba(201, 216, 222, 0.05)' : '#D4B996';
  const cushionFill = blueprintMode ? 'rgba(100, 181, 246, 0.15)' : '#E5DEC9';

  return (
    <svg viewBox="0 0 540 680" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ground Line */}
      <line x1="40" y1="600" x2="500" y2="600" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />
      <text x="50" y="618" fill={dimColor} fontSize="11" fontFamily="'IBM Plex Mono', monospace">GROUND LEVEL</text>

      {/* Symmetry Center Line */}
      <line x1="270" y1="50" x2="270" y2="620" stroke={accentColor} strokeWidth="1" strokeDasharray="8 3 2 3" opacity="0.7" />

      {/* FRONT LEGS */}
      <path d="M 100 340 L 90 600 L 112 600 L 125 340 Z" fill={woodFill} stroke={strokeColor} strokeWidth="2.5" />
      <path d="M 440 340 L 450 600 L 428 600 L 415 340 Z" fill={woodFill} stroke={strokeColor} strokeWidth="2.5" />

      {/* REAR LEGS VISIBLE IN BACKGROUND */}
      <path d="M 125 380 L 60 600 L 80 600 L 140 395 Z" fill={woodFill} stroke={strokeColor} strokeWidth="1.5" opacity="0.6" />
      <path d="M 415 380 L 480 600 L 460 600 L 400 395 Z" fill={woodFill} stroke={strokeColor} strokeWidth="1.5" opacity="0.6" />

      {/* FRONT APRON STRETCHER */}
      <rect x="120" y="340" width="300" height="22" rx="3" fill={woodFill} stroke={strokeColor} strokeWidth="2" />

      {/* SEAT CUSHION (W 550mm) */}
      <path
        d="M 115 330 C 115 315, 140 310, 270 310 C 400 310, 425 315, 425 330 L 415 350 C 400 355, 140 355, 125 350 Z"
        fill={cushionFill}
        stroke={strokeColor}
        strokeWidth="2"
      />

      {/* ARMRESTS (660mm height) */}
      <rect x="75" y="240" width="45" height="18" rx="4" fill={woodFill} stroke={strokeColor} strokeWidth="2.5" />
      <rect x="420" y="240" width="45" height="18" rx="4" fill={woodFill} stroke={strokeColor} strokeWidth="2.5" />

      {/* LOWER BACKREST CUSHION (W 550mm) */}
      <rect x="145" y="190" width="250" height="110" rx="8" fill={cushionFill} stroke={strokeColor} strokeWidth="2" />

      {/* UPPER HEADREST / CROWN VESSEL (W 480mm) */}
      <path
        d="M 160 90 C 160 80, 180 75, 270 75 C 360 75, 380 80, 380 90 L 375 160 C 375 170, 355 175, 270 175 C 185 175, 165 170, 165 160 Z"
        fill={cushionFill}
        stroke={strokeColor}
        strokeWidth="2"
      />

      {/* REAR SPINE UPRIGHT POSTS */}
      <line x1="200" y1="75" x2="200" y2="340" stroke={accentColor} strokeWidth="3" />
      <line x1="340" y1="75" x2="340" y2="340" stroke={accentColor} strokeWidth="3" />

      {/* DIMENSION LINES */}
      {showDimensions && (
        <g opacity="0.85">
          {/* Overall Width (620mm) */}
          <line x1="60" y1="640" x2="480" y2="640" stroke={dimColor} strokeWidth="1" />
          <line x1="60" y1="630" x2="60" y2="650" stroke={dimColor} strokeWidth="1" />
          <line x1="480" y1="630" x2="480" y2="650" stroke={dimColor} strokeWidth="1" />
          <text x="270" y="658" fill={dimColor} fontSize="12" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle">
            OW: 620 mm
          </text>

          {/* Backrest Width (550mm) */}
          <line x1="145" y1="45" x2="395" y2="45" stroke={dimColor} strokeWidth="1" />
          <line x1="145" y1="38" x2="145" y2="52" stroke={dimColor} strokeWidth="1" />
          <line x1="395" y1="38" x2="395" y2="52" stroke={dimColor} strokeWidth="1" />
          <text x="270" y="38" fill={dimColor} fontSize="11" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle">
            BW: 550 mm
          </text>
        </g>
      )}
    </svg>
  );
};

/**
 * Top Plan View SVG (OW: 620mm × OD: 700mm)
 */
export const TopPlanSvg: React.FC<SvgProps> = ({
  className = 'w-full h-full',
  blueprintMode = false,
  showDimensions = true
}) => {
  const strokeColor = blueprintMode ? '#C9D8DE' : '#221F1A';
  const dimColor = blueprintMode ? '#88B2C4' : '#5B564C';
  const woodFill = blueprintMode ? 'rgba(201, 216, 222, 0.05)' : '#D4B996';
  const cushionFill = blueprintMode ? 'rgba(100, 181, 246, 0.15)' : '#E5DEC9';

  return (
    <svg viewBox="0 0 540 540" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer Envelope */}
      <rect x="70" y="70" width="400" height="400" stroke={dimColor} strokeWidth="0.8" strokeDasharray="4 4" opacity="0.4" />

      {/* Armrest Outer Contours */}
      <path d="M 80 160 C 80 140, 100 135, 125 135 L 125 430 L 80 410 Z" fill={woodFill} stroke={strokeColor} strokeWidth="2.5" />
      <path d="M 460 160 C 460 140, 440 135, 415 135 L 415 430 L 460 410 Z" fill={woodFill} stroke={strokeColor} strokeWidth="2.5" />

      {/* Seat Cushion (W 550mm × D 500mm) */}
      <rect x="135" y="150" width="270" height="260" rx="16" fill={cushionFill} stroke={strokeColor} strokeWidth="2" />

      {/* Curved Backrest Top Edge */}
      <path
        d="M 130 130 C 190 90, 350 90, 410 130 L 395 160 C 340 125, 200 125, 145 160 Z"
        fill={woodFill}
        stroke={strokeColor}
        strokeWidth="2"
      />

      {/* Rear Splayed Legs Projections */}
      <circle cx="90" cy="450" r="14" fill={woodFill} stroke={strokeColor} strokeWidth="1.5" />
      <circle cx="450" cy="450" r="14" fill={woodFill} stroke={strokeColor} strokeWidth="1.5" />
      <circle cx="105" cy="150" r="14" fill={woodFill} stroke={strokeColor} strokeWidth="1.5" />
      <circle cx="435" cy="150" r="14" fill={woodFill} stroke={strokeColor} strokeWidth="1.5" />

      {showDimensions && (
        <g opacity="0.85">
          <line x1="70" y1="495" x2="470" y2="495" stroke={dimColor} strokeWidth="1" />
          <line x1="70" y1="485" x2="70" y2="505" stroke={dimColor} strokeWidth="1" />
          <line x1="470" y1="485" x2="470" y2="505" stroke={dimColor} strokeWidth="1" />
          <text x="270" y="515" fill={dimColor} fontSize="12" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle">
            SW: 550 mm · OW: 620 mm
          </text>

          <line x1="495" y1="110" x2="495" y2="450" stroke={dimColor} strokeWidth="1" />
          <line x1="485" y1="110" x2="505" y2="110" stroke={dimColor} strokeWidth="1" />
          <line x1="485" y1="450" x2="505" y2="450" stroke={dimColor} strokeWidth="1" />
          <text x="505" y="290" fill={dimColor} fontSize="12" fontFamily="'IBM Plex Mono', monospace" transform="rotate(90 505 290)">
            SD: 500 mm · OD: 700 mm
          </text>
        </g>
      )}
    </svg>
  );
};

/**
 * Section A-A Internal Construction Cutaway
 * Details: Solid Wood -> Plywood Inner Board -> Dual Density Foam -> 100% Wool Fabric -> Mortise & Tenon Joinery
 */
export const SectionCutawaySvg: React.FC<SvgProps> = ({
  className = 'w-full h-full',
  blueprintMode = false
}) => {
  const strokeColor = blueprintMode ? '#C9D8DE' : '#221F1A';
  const dimColor = blueprintMode ? '#88B2C4' : '#5B564C';

  return (
    <svg viewBox="0 0 540 680" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="plywoodHatch" width="6" height="6" patternTransform="rotate(0 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="3" x2="6" y2="3" stroke={dimColor} strokeWidth="0.8" opacity="0.6" />
        </pattern>
        <pattern id="foamStipple" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="0.8" fill={dimColor} opacity="0.5" />
        </pattern>
      </defs>

      {/* Main Structural Wood Spine Section */}
      <path
        d="M 330 90 L 355 90 C 340 220, 310 320, 290 380 L 265 380 C 285 320, 315 220, 330 90 Z"
        fill="url(#woodHatch)"
        stroke={strokeColor}
        strokeWidth="2"
      />

      {/* Curved Plywood Inner Substrate (12mm 9-ply) */}
      <path
        d="M 310 100 C 295 210, 275 300, 260 350 L 248 350 C 263 300, 283 210, 298 100 Z"
        fill="url(#plywoodHatch)"
        stroke="#8A4E28"
        strokeWidth="1.5"
      />

      {/* Multi-density Foam Core (38kg & 50kg/m³) */}
      <path
        d="M 298 100 C 280 210, 255 300, 235 345 L 205 340 C 228 290, 250 200, 270 100 Z"
        fill="url(#foamStipple)"
        stroke="#D4B996"
        strokeWidth="1.5"
      />

      {/* Wool / Linen Upholstery Shell (Outer 3mm Layer) */}
      <path
        d="M 270 100 C 248 200, 226 290, 203 340 L 199 342 C 222 292, 245 200, 267 98 Z"
        fill="none"
        stroke="#3B82F6"
        strokeWidth="2.5"
      />

      {/* Mortise & Tenon Detail Cutaway at Seat Rail */}
      <rect x="220" y="375" width="90" height="24" rx="2" fill="url(#woodHatch)" stroke={strokeColor} strokeWidth="1.5" />
      <rect x="245" y="380" width="40" height="14" fill="#8A4E28" opacity="0.6" stroke={strokeColor} strokeWidth="1" />
      <circle cx="255" cy="387" r="3" fill="#221F1A" />
      <circle cx="275" cy="387" r="3" fill="#221F1A" />

      {/* Callout Annotations */}
      <g fontFamily="'IBM Plex Mono', monospace" fontSize="11" fill={dimColor}>
        {/* Layer 1: Solid Wood Spine */}
        <line x1="345" y1="140" x2="420" y2="140" stroke={dimColor} strokeWidth="1" />
        <circle cx="345" cy="140" r="3" fill={dimColor} />
        <text x="430" y="144" fontWeight="600">01. STEAM-BENT ASH SPINE</text>

        {/* Layer 2: Plywood Substrate */}
        <line x1="290" y1="180" x2="420" y2="180" stroke={dimColor} strokeWidth="1" />
        <circle cx="290" cy="180" r="3" fill={dimColor} />
        <text x="430" y="184" fontWeight="600">02. 12MM CURVED PLYWOOD CORE</text>

        {/* Layer 3: Foam */}
        <line x1="250" y1="230" x2="420" y2="230" stroke={dimColor} strokeWidth="1" />
        <circle cx="250" cy="230" r="3" fill={dimColor} />
        <text x="430" y="234" fontWeight="600">03. DUAL-DENSITY FOAM (50+38kg/m³)</text>

        {/* Layer 4: Wool Upholstery */}
        <line x1="220" y1="280" x2="420" y2="280" stroke={dimColor} strokeWidth="1" />
        <circle cx="220" cy="280" r="3" fill={dimColor} />
        <text x="430" y="284" fontWeight="600">04. 100% WOOL/LINEN UPHOLSTERY</text>

        {/* Joinery: Mortise & Tenon */}
        <line x1="265" y1="390" x2="420" y2="390" stroke={dimColor} strokeWidth="1" />
        <circle cx="265" cy="390" r="3" fill={dimColor} />
        <text x="430" y="394" fontWeight="600">05. DOWELED MORTISE & TENON</text>
      </g>
    </svg>
  );
};
