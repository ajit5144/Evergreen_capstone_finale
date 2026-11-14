// src/premium.js - the premium math (provided).
// CONFIG: BASE_RATES values only - apply the sponsor's Monday rate decision (Day 2).
import baseRates from './baseRate.json' with { type: 'json' };

//const BASE_RATES = { auto: 90, home: 135, life: 70 };

export function calculatePremium(type, age, coverageAmount) {
  const base = baseRates[type] ?? 100;
  const ageFactor = age < 25 ? 1.4 : age > 60 ? 1.25 : 1.0;
  const raw = base * ageFactor * (coverageAmount / 10000);
  return Math.round(raw * 100) / 100;
}
