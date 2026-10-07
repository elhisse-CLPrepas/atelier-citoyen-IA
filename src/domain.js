export function evaluate(scores) {
  const ids = ['besoin', 'exactitude', 'controle', 'qualite', 'comprehension'];
  if (ids.some(id => !Number.isInteger(scores[id]) || scores[id] < 0 || scores[id] > 4)) throw new Error('Chaque critère exige une note entière de 0 à 4.');
  const total = ids.reduce((sum, id) => sum + scores[id], 0);
  return { total, eligible: total >= 14 && scores.exactitude >= 2 && scores.controle >= 2 };
}
export function priceAfterChanges(price) { return Math.round(price * 0.8 * 1.2 * 100) / 100; }
export function evidenceFeedback(verdict, justification) {
  if (!verdict || !justification.trim()) return { ready: false, message: 'Choisissez un verdict et écrivez votre justification avant de consulter le corrigé.' };
  return { ready: true, message: verdict === 'non-etabli' ? 'Le verdict correspond à la portée de cette source. Comparez votre justification au corrigé.' : 'Reprenez la portée de la source : elle décrit l’API et ne prouve pas une disponibilité dans toutes les offres ChatGPT.' };
}
