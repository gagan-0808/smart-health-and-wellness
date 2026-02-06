
export enum AppTab {
  DASHBOARD = 'dashboard',
  ENVIRONMENT = 'environment',
  WOMENS_HEALTH = 'womens_health',
  STRESS_AI = 'stress_ai',
  PRESCRIPTIONS = 'prescriptions',
  FAMILY_PETS = 'family_pets'
}

export interface HealthMetric {
  label: string;
  value: string | number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  color: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface EnvironmentalData {
  aqi: number;
  pollen: string;
  waterQuality: string;
  noiseLevel: number;
}
