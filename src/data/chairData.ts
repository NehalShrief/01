import {
  DimensionSpec,
  Hotspot,
  AssemblyLayer,
  AnatomyMapping,
  FormEvolutionStage,
  IterationStudy,
  MaterialSwatch
} from '../types';

export const CHAIR_METADATA = {
  name: 'The Wren Chair',
  arabicName: 'ثابت',
  transliteration: 'THABET',
  subtitle: 'A single-form lounge chair built on monumental forms',
  conceptSource: 'Mahmoud Mokhtar’s 1926 "Nahdet Misr" (Egypt’s Renaissance) & The Posture of the Fellah',
  philosophicalQuestion: 'Who is the real Egyptian? Who is the descendant of the pharaohs?',
  year: '2025 – 2026',
  category: 'Single-Form Ergonomic Lounge Chair',
  weight: '8.4 kg',
  balanceRatio: '40% Monumental Inspiration / 60% Ergonomic Function',
  designer: 'Studio Cortex & Architectural Industrial Arts',
  quote: '"The chair carries the memory of the Fellah through material, posture, craft, and connection to the earth."',
  pillars: ['Human Dignity', 'Upright Posture', 'Earth Connection', 'Timeless Simplicity']
};

export const DIMENSIONS: DimensionSpec[] = [
  {
    id: 'oh',
    name: 'Overall Height (OH)',
    nameArabic: 'الارتفاع الكلي',
    value: '1080 mm',
    metric: 1080,
    unit: 'mm',
    description: 'Extended vertical monumentality providing complete cervical & upper thoracic head support.',
    category: 'primary'
  },
  {
    id: 'sh',
    name: 'Seat Height (SH)',
    nameArabic: 'ارتفاع المقعد',
    value: '460 mm',
    metric: 460,
    unit: 'mm',
    description: 'Ergonomically balanced for comfortable ingress/egress while maintaining relaxed lounge posture.',
    category: 'primary'
  },
  {
    id: 'ah-front',
    name: 'Armrest Height — Front (AH)',
    nameArabic: 'ارتفاع المسند الأمامي',
    value: '660 mm',
    metric: 660,
    unit: 'mm',
    description: 'Forward armrest rest point allowing natural forearms declination and elbow relief.',
    category: 'component'
  },
  {
    id: 'ah-rear',
    name: 'Armrest Height — Rear (AH)',
    nameArabic: 'ارتفاع المسند الخلفي',
    value: '560 mm',
    metric: 560,
    unit: 'mm',
    description: 'Sloped taper connecting into the spine structure with mortise joinery.',
    category: 'component'
  },
  {
    id: 'od',
    name: 'Overall Depth (OD)',
    nameArabic: 'العمق الكلي',
    value: '700 mm',
    metric: 700,
    unit: 'mm',
    description: 'Stable grounded stance with rear leg splay preventing tipping during full recline.',
    category: 'primary'
  },
  {
    id: 'ow',
    name: 'Overall Width (OW)',
    nameArabic: 'العرض الكلي',
    value: '620 mm',
    metric: 620,
    unit: 'mm',
    description: 'Generous outer envelope accommodating varied relaxed sitting stances.',
    category: 'primary'
  },
  {
    id: 'ba',
    name: 'Backrest Recline Angle (BA)',
    nameArabic: 'زاوية ميل الظهر',
    value: '112°',
    metric: 112,
    unit: '°',
    description: 'Optimized lumbar relief angle (with 115° cervical curvature) reducing disc pressure by 34%.',
    category: 'angle'
  },
  {
    id: 'sa',
    name: 'Seat Tilt Angle (SA)',
    nameArabic: 'زاوية ميل المقعد',
    value: '7°',
    metric: 7,
    unit: '°',
    description: 'Backward seat tilt that naturally locks the pelvis into the lumbar comfort pocket.',
    category: 'angle'
  },
  {
    id: 'sd',
    name: 'Seat Depth (SD)',
    nameArabic: 'عمق المقعد',
    value: '500 mm',
    metric: 500,
    unit: 'mm',
    description: 'Leaves 60mm popliteal clearance behind knees to prevent pressure on sciatic nerves.',
    category: 'ergonomic'
  },
  {
    id: 'bw',
    name: 'Backrest Width (BW)',
    nameArabic: 'عرض الظهر',
    value: '550 mm',
    metric: 550,
    unit: 'mm',
    description: 'Wide lumbar cradle supporting the thoracic spine and lateral shoulder blade movement.',
    category: 'component'
  },
  {
    id: 'bh',
    name: 'Backrest Height (BH)',
    nameArabic: 'ارتفاع مسند الظهر',
    value: '620 mm',
    metric: 620,
    unit: 'mm',
    description: 'Two-tier vertical cushioned segments mirroring torso and head-vessel proportions.',
    category: 'component'
  }
];

export const ANATOMY_MAPPINGS: AnatomyMapping[] = [
  {
    id: 'head-vessel',
    humanAnatomy: 'Head / Water Vessel (Ballad Urn)',
    humanFunction: 'Visual identity, contemplative gaze, apex of posture',
    chairComponent: 'Upper Headrest Cushion & Curved Crown',
    chairComponentArabic: 'مسند الرأس والتاج المنحني',
    designTranslation: 'Echoes the cylindrical/spherical water pot balanced atop the Fellah woman’s head in Mokhtar’s sculpture.',
    ergonomicOutcome: 'Cervical vertebrae cradle that promotes relaxed contemplation without head tilting.',
    iconName: 'Crown'
  },
  {
    id: 'spine-torso',
    humanAnatomy: 'Spine & Upright Torso',
    humanFunction: 'Primary weight-bearing axis, upright human dignity',
    chairComponent: 'Curved Solid Steam-Bent Ash Spine Rails',
    chairComponentArabic: 'هيكل العمود الفقري الخشبي',
    designTranslation: 'Vertical upward tension derived from the column-like Pharaonic posture, softened with 112° ergonomic recline.',
    ergonomicOutcome: 'Distributes upper body weight evenly along the lumbar and thoracic spine regions.',
    iconName: 'Activity'
  },
  {
    id: 'shoulders-arms',
    humanAnatomy: 'Shoulder Stance & Protective Arms',
    humanFunction: 'Introspective protective gesture, resting limbs',
    chairComponent: 'Tapered Sculpted Armrests (660mm → 560mm)',
    chairComponentArabic: 'مساند الأذرع المنحوتة',
    designTranslation: 'Maps the gentle gathered forearm posture of the sculpture into tactile wooden resting planes.',
    ergonomicOutcome: 'Reduces trapezius and shoulder muscle tension during extended reading or resting sessions.',
    iconName: 'Shield'
  },
  {
    id: 'pelvis-thighs',
    humanAnatomy: 'Pelvis & Thigh Foundation',
    humanFunction: 'Body mass transfer & seating foundation',
    chairComponent: 'Incline Seat Deck (460mm height / 7° backward tilt)',
    chairComponentArabic: 'قاعدة المقعد المائلة',
    designTranslation: 'Solid central block primitive transformed into a multi-layered pocket supporting ischial tuberosities.',
    ergonomicOutcome: 'Prevents pelvic rotation and slumping by anchoring the hips into the rear spine crevice.',
    iconName: 'Maximize2'
  },
  {
    id: 'legs-feet',
    humanAnatomy: 'Columnar Legs & Grounded Stance',
    humanFunction: 'Earth connection, absolute stillness, steadfast stability',
    chairComponent: 'Tapered Splayed Solid Wood Leg Framework',
    chairComponentArabic: 'أرجل الكرسي الثابتة المتصلة بالأرض',
    designTranslation: 'Translates the monolithic stone pedestal of "Nahdet Misr" into a four-point triangulated wooden frame.',
    ergonomicOutcome: 'Low center of gravity with structural load vectors directly transferred to the floor plane.',
    iconName: 'Anchor'
  }
];

export const FORM_EVOLUTION_STAGES: FormEvolutionStage[] = [
  {
    step: 1,
    title: 'Geometric Primitives Massing',
    subtitle: 'Sphere / Block / Pedestal',
    phase: 'Conceptual Extraction',
    description: 'Deconstructing Mahmoud Mokhtar’s "Nahdet Misr" into pure volumetric masses: a spherical head/vessel, an upright rectangular torso block, and a grounded monolithic pedestal.',
    sculpturalInspiration: 'The raw architectural weight of Egyptian stone carving prior to surface detailing.',
    geometricAnalysis: [
      'Top: Ø220mm Sphere (Water Pot / Head)',
      'Middle: 550×280×650mm Vertical Prism (Torso Mass)',
      'Bottom: 640×700×450mm Base Block (Pedestal & Sphinx connection)'
    ],
    keyChange: 'Established the verticality, symmetry, and connection to earth.'
  },
  {
    step: 2,
    title: 'Refined Block Model',
    subtitle: 'Integration of Torso Mass & Angled Incline',
    phase: 'Proportional Refinement',
    description: 'Subdividing the monolithic blocks into anatomical zones. Tilting the back plane backward and introducing the 7° seat incline while preserving structural mass.',
    sculpturalInspiration: 'Mokhtar’s synthesis of European realist gesture into Pharaonic stone mass.',
    geometricAnalysis: [
      'Split backrest into upper cervical cushion and thoracic zone',
      'Extracted negative space beneath the seat block for leg clearance',
      'Calculated 112° backrest angle for spinal relief'
    ],
    keyChange: 'Shifted from rigid stone obelisk to a human-proportioned seating framework.'
  },
  {
    step: 3,
    title: 'Draped Wireframe Geometry',
    subtitle: 'Surface Softening & Streamlined Edges',
    phase: 'Curvilinear Synthesis',
    description: 'Replacing harsh polygon planes with continuous curved NURBS surfaces. The rear spine transitions smoothly from vertical headrest into the rear splayed legs.',
    sculpturalInspiration: 'The flowing folds of traditional fellaha linen robes draped over solid muscle and bone.',
    geometricAnalysis: [
      'Radius blends (R15 – R35) across all timber edges',
      'Dual-curved steam-bent spine rails',
      'Continuous aerodynamic armrest transition into front legs'
    ],
    keyChange: 'Achieved visual lightness without compromising the perceived monumental weight.'
  },
  {
    step: 4,
    title: 'Manufactured Sittable Prototype',
    subtitle: 'THABET (ثابت) Final Specification',
    phase: 'Workshop Reality',
    description: 'Full joinery integration with mortise and tenon connections, plywood structural core, dual-density foam cushions, and tactile natural wool upholstery.',
    sculpturalInspiration: 'Living descendant: ancient mass holding a living, resting human being.',
    geometricAnalysis: [
      'W 620mm × D 700mm × H 1080mm (Final Envelope)',
      'Total weight optimized to 8.4 kg in solid ash/walnut',
      'Complete workshop-ready orthographic drawing package'
    ],
    keyChange: 'Perfect 40% sculptural inspiration / 60% ergonomic function balance.'
  }
];

export const ASSEMBLY_LAYERS: AssemblyLayer[] = [
  {
    id: 'layer-1',
    stepNumber: '01',
    name: 'Solid Hardwood Structural Frame',
    nameArabic: 'الهيكل الخشبي الصلب ومفاصل التثبيت',
    material: 'Steam-Bent Solid Ash / American Black Walnut',
    joineryType: 'Blind Mortise & Tenon with Hidden Oak Dowels',
    description: 'The architectural skeleton that carries all gravitational and lateral loads. Formed through high-pressure steam bending to create continuous curved grain lines along the primary spine.',
    keyFeatures: [
      'Continuous curved rear spine members resisting 220kg dynamic loads',
      'Precision CNC-milled mortise pockets (12mm × 45mm × 30mm)',
      'Organic chamfered armrests hand-planed for tactile palm grip',
      'Natural organic oil and wax hand-rubbed protective finish'
    ],
    explodedOffset: 0,
    color: '#8A4E28',
    strokeColor: '#6B3B1D'
  },
  {
    id: 'layer-2',
    stepNumber: '02',
    name: 'Ergonomic Plywood Inner Shells',
    nameArabic: 'ألواح الخشب المعاكس المنحنية للدعم الداخلي',
    material: '9-Ply Curved Baltic Birch Plywood (12mm)',
    joineryType: 'Concealed Steel Metric Threaded Bushings',
    description: 'Molded under hydraulic heat presses to create rigid ergonomic substrate curves for both the lumbar cradle and the head cushion vessel.',
    keyFeatures: [
      'Compound curved 3D anatomical contour matching human sacrum and lumbar spine',
      'Ventilation perforations preventing internal moisture accumulation',
      'Reinforced perimeter routing to securely clamp upholstery webbing',
      'High torsional rigidity preventing seat sagging over decades of use'
    ],
    explodedOffset: 70,
    color: '#D4B996',
    strokeColor: '#B09068'
  },
  {
    id: 'layer-3',
    stepNumber: '03',
    name: 'Dual-Density Ergonomic Foam Core',
    nameArabic: 'طبقات الإسفنج عالي الكثافة لتوزيع الضغط',
    material: 'High-Resilience Multi-Density Polyurethane Foam (38kg/m³ & 50kg/m³)',
    joineryType: 'Water-Based Solvent-Free Eco Adhesive',
    description: 'Dual-tier cushioning engineered to prevent pressure peaks on ischial tuberosities while providing soft initial contact for relaxed lounging.',
    keyFeatures: [
      'Firm 50kg/m³ high-density base layer preventing "bottoming out"',
      'Soft 38kg/m³ contoured comfort topper adapting to body contours',
      'Integrated lumbar bolster supporting lordosis curve',
      'Beveled transition edges for smooth drape lines under upholstery'
    ],
    explodedOffset: 140,
    color: '#E8DCB8',
    strokeColor: '#C4B488'
  },
  {
    id: 'layer-4',
    stepNumber: '04',
    name: 'Hand-Tailored Wool & Linen Upholstery',
    nameArabic: 'التنجيد بالقماش الطبيعي المنسوج من الصوف والكتان',
    material: '100% Virgin Wool / Organic Belgian Linen Blend',
    joineryType: 'Double French Seams & Concealed Piping',
    description: 'Tactile natural textile woven with subtle heathered yarn, recalling the textured linen robes in Mokhtar’s monumental sculpture with superior breathability.',
    keyFeatures: [
      '50,000+ Martindale rub count for contract-grade durability',
      'Naturally flame-retardant and stain-resistant without chemical coatings',
      'Hand-stitched perimeter piping emphasizing the monumental silhouette',
      'Natural desert sand & warm ecru dye tones matching the paper palette'
    ],
    explodedOffset: 210,
    color: '#D8D0C0',
    strokeColor: '#A89E8C'
  }
];

export const TECHNICAL_HOTSPOTS: Hotspot[] = [
  {
    id: 'hs-mortise-arm',
    title: 'Front Arm-to-Leg Mortise Joint',
    titleArabic: 'مفصل الذراع والساق الأمامية',
    x: 24,
    y: 48,
    category: 'joinery',
    shortSnippet: 'Mortise & Tenon with 15mm shoulder',
    fullDetail: 'A deep blind mortise joint (15mm × 40mm) reinforced with twin internal hardwood dowels. Tolerances held to ±0.2mm to allow natural timber expansion while preventing racking under side loads.',
    technicalSpec: 'Joinery: Blind M&T | Glue: Titebond III Waterproof | Tolerances: ±0.2mm'
  },
  {
    id: 'hs-spine-curve',
    title: 'Steam-Bent Spine Architecture',
    titleArabic: 'انحناء العمود الفقري المشكل بالبخار',
    x: 74,
    y: 28,
    category: 'ergonomics',
    shortSnippet: '112° recline with continuous grain',
    fullDetail: 'Solid ash blanks steamed at 100°C for 90 minutes, then clamped in compound radius press. Preserves long wood fibers uninterrupted from headrest to rear ground connection.',
    technicalSpec: 'Material: European White Ash | Radius: R380mm | Bend Angle: 112°'
  },
  {
    id: 'hs-seat-angle',
    title: 'Pelvic Cradle & 7° Seat Incline',
    titleArabic: 'زاوية ميل المقعد 7 درجات',
    x: 48,
    y: 62,
    category: 'dimension',
    shortSnippet: '460mm seat height · 7° pitch',
    fullDetail: 'The 7° rearward pitch prevents forward sliding and rotates the pelvis back against the lumbar support, transferring 30% of torso load off spinal discs.',
    technicalSpec: 'Seat Height: 460mm | Seat Depth: 500mm | Incline: 7.0°'
  },
  {
    id: 'hs-head-vessel',
    title: 'Head-Vessel Visual Apex',
    titleArabic: 'تاج مسند الرأس الأسطواني',
    x: 62,
    y: 12,
    category: 'material',
    shortSnippet: 'Sculptural crown (1080mm height)',
    fullDetail: 'A direct proportional abstraction of the water urn in "Nahdet Misr". Features layered high-density foam over a molded plywood core, floating proud of the rear timber frame.',
    technicalSpec: 'Total Height: 1080mm | Cushion Thickness: 45mm | Width: 550mm'
  },
  {
    id: 'hs-rear-splay',
    title: 'Rear Stance Grounding',
    titleArabic: 'قاعدة الأرجل الخلفية الثابتة',
    x: 82,
    y: 88,
    category: 'joinery',
    shortSnippet: 'Splayed leg stance · 700mm depth',
    fullDetail: 'Rear legs flare outward at 14° to create a broad stabilizing polygon, directly translating the stone sphinx plinth stability into dynamic timber carpentry.',
    technicalSpec: 'Footprint: 620×700mm | Splay: 14° outward | Floor glide: Felt-lined brass'
  }
];

export const ITERATIONS: IterationStudy[] = [
  {
    version: 'Iteration 01',
    code: 'v1.0 — Monumental Monolith',
    title: 'Direct Pharaonic Proportions',
    titleArabic: 'النسب الفرعونية المباشرة',
    verdict: 'Too much monument, not enough chair',
    critique: 'A literal, columnar, 90° upright block faithful to the statue’s frontality, but it read as a rigid temple plinth. Zero lumbar compliance and caused uncomfortable sacral pressure after 5 minutes.',
    resolution: 'Discovered that monumental dignity must come from proportion and stance, not from rigid vertical geometry.',
    proportions: {
      backAngle: '94° (Too upright)',
      seatHeight: '490 mm (Too high)',
      stabilityScore: 60,
      aestheticBalance: '85% Monument / 15% Chair'
    }
  },
  {
    version: 'Iteration 02',
    code: 'v2.0 — Contemplative Gesture',
    title: 'Borrowing the Gesture, Not Just the Mass',
    titleArabic: 'استعارة الإيماءة والراحة الإنسانية',
    verdict: 'Softened silhouette, unstable rear stance',
    critique: 'Curving the backrest to 118° echoed the figure’s introspective gathered posture, but the vertical rear legs created a tipping risk under deep lounge seating.',
    resolution: 'Pushed rear legs back by 120mm to create an open triangular stance and tightened back recline to 112°.',
    proportions: {
      backAngle: '118° (Over-reclined)',
      seatHeight: '440 mm (Slightly low)',
      stabilityScore: 75,
      aestheticBalance: '30% Monument / 70% Chair'
    }
  },
  {
    version: 'Iteration 03',
    code: 'v3.0 — The Living Synthesis',
    title: 'THABET: Resolved Synthesis',
    titleArabic: 'التوليف النهائي المتوازن (ثابت)',
    verdict: 'Perfect harmony between mass and human rest',
    critique: 'Widening the rear stance to 700mm overall depth, locking in 112° backrest angle and 7° seat incline with steam-bent continuous ash spine.',
    resolution: 'Final production specification meeting BIFMA structural strength and five-star ergonomic comfort benchmarks.',
    proportions: {
      backAngle: '112° (Golden ergonomic angle)',
      seatHeight: '460 mm (Optimal standard)',
      stabilityScore: 98,
      aestheticBalance: '40% Monument / 60% Ergonomic Function'
    }
  }
];

export const MATERIALS: MaterialSwatch[] = [
  {
    id: 'mat-ash',
    name: 'Steam-Bent European Solid Ash',
    origin: 'FSC-Certified Temperate Hardwood',
    tactility: 'Silky satin, prominent open ring-porous grain, organic warmth',
    meaning: 'Strength, elastic memory, and deep grounding to the earth',
    technique: 'Steam softened at 100°C for 90 minutes, precision jig-clamped, hand-planed with Japanese smoothing planes (Kanna)',
    sustainability: '100% renewable harvest with zero VOC organic oil & beeswax finish',
    colorHex: '#8A4E28',
    accentHex: '#C4916B',
    details: [
      'Bending Strength (MOR): 110 MPa',
      'Modulus of Elasticity: 12,000 MPa',
      'Finish: Natural plant-based hardwax oil',
      'Grain alignment optimized for continuous load paths'
    ]
  },
  {
    id: 'mat-walnut',
    name: 'American Black Walnut (Optional Edition)',
    origin: 'North American Sustainable Forestry',
    tactility: 'Dense, chocolate tones, rich undulating grain figures',
    meaning: 'Monumental weight, dignified quietness, timeless patina',
    technique: 'Air-dried for 18 months, hand-sanded to 400-grit, finished with matte hand-rubbed tung oil',
    sustainability: 'FSC 100% Chain-of-Custody certified',
    colorHex: '#4A2E1B',
    accentHex: '#7A5237',
    details: [
      'Exceptional dimensional stability',
      'Natural dark heartwood tones deepening with age',
      'High resistance to shock and impact',
      'Contrasts elegantly with sand-colored textiles'
    ]
  },
  {
    id: 'mat-wool',
    name: '100% Virgin Wool & Linen Weave',
    origin: 'Custom Loom Weave, Natural Desert Dye',
    tactility: 'Textured tactile grain, breathable, dry warmth without prickle',
    meaning: 'Human intimacy, the protective drape of the Fellah’s robe',
    technique: 'Heavyweight dobby weave combining coarse linen warp with fine combed wool weft',
    sustainability: 'Biodegradable, zero synthetic microplastics, naturally fire retardant',
    colorHex: '#D8D0C0',
    accentHex: '#B8AD99',
    details: [
      'Abrasion Resistance: 65,000 Martindale cycles',
      'Dye: Plant-based natural ochre and pomegranate peel',
      'Lightfastness: ISO 105-B02 Grade 6+',
      'Self-regulating thermal microclimate'
    ]
  },
  {
    id: 'mat-joinery',
    name: 'Blind Mortise & Tenon Craft Joinery',
    origin: 'Traditional Cabinetry Heritage',
    tactility: 'Seamless wood-to-wood structural transitions with crisp shadow lines',
    meaning: 'Structural honesty, craft transparency, permanence',
    technique: 'Interlocking timber shoulders with hidden oak dowel pins; completely free of visible steel fasteners',
    sustainability: 'Allows disassembly and repair over generations',
    colorHex: '#6B3B1D',
    accentHex: '#A3623B',
    details: [
      'Joint efficiency exceeding 90% of solid timber strength',
      'Grain orientation matched across all visible seam lines',
      'Edge chamfers: Hand-cut 3mm organic bevels',
      'Tested to withstand >3,500 N cyclic stress'
    ]
  }
];
