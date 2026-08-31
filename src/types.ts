/**
 * Technical and conceptual data models for The Wren Chair (THABET / ثابت)
 * Merged from portfolio blueprint structure and technical documentation.
 */

export interface DimensionSpec {
  id: string;
  name: string;
  nameArabic?: string;
  value: string;
  metric: number;
  unit: string;
  description: string;
  category: 'primary' | 'ergonomic' | 'component' | 'angle';
  highlightLocation?: { x: number; y: number; view: 'front' | 'side' | 'top' | 'rear' };
}

export interface Hotspot {
  id: string;
  title: string;
  titleArabic?: string;
  x: number; // percentage 0 - 100
  y: number; // percentage 0 - 100
  category: 'joinery' | 'dimension' | 'material' | 'ergonomics';
  shortSnippet: string;
  fullDetail: string;
  technicalSpec?: string;
}

export interface AssemblyLayer {
  id: string;
  stepNumber: string;
  name: string;
  nameArabic: string;
  material: string;
  density?: string;
  joineryType?: string;
  description: string;
  keyFeatures: string[];
  explodedOffset: number; // Y or Z displacement in px/percent
  color: string;
  strokeColor: string;
}

export interface AnatomyMapping {
  id: string;
  humanAnatomy: string;
  humanFunction: string;
  chairComponent: string;
  chairComponentArabic: string;
  designTranslation: string;
  ergonomicOutcome: string;
  iconName: string;
}

export interface FormEvolutionStage {
  step: number;
  title: string;
  subtitle: string;
  phase: string;
  description: string;
  sculpturalInspiration: string;
  geometricAnalysis: string[];
  keyChange: string;
}

export interface IterationStudy {
  version: string;
  code: string;
  title: string;
  titleArabic?: string;
  verdict: string;
  critique: string;
  resolution: string;
  proportions: {
    backAngle: string;
    seatHeight: string;
    stabilityScore: number;
    aestheticBalance: string;
  };
}

export interface MaterialSwatch {
  id: string;
  name: string;
  origin: string;
  tactility: string;
  meaning: string;
  technique: string;
  sustainability: string;
  colorHex: string;
  accentHex: string;
  details: string[];
}
