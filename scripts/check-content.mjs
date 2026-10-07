import { readFile, access } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
const load = async path => JSON.parse(await readFile(new URL('../'+path, import.meta.url), 'utf8'));
const [activities,sources,schedule,criteria,originals] = await Promise.all(['content/activities.json','content/sources.json','content/schedule.json','content/criteria.json','references/inventaire-originaux.json'].map(load));
assert.equal(new Set(activities.map(a=>a.id)).size, activities.length);
for (const a of activities) { for (const key of ['id','title','duration','objective','guideSection','statement','expected','correction','success']) assert.ok(a[key], a.id+' : '+key+' manquant'); assert.ok(Number.isInteger(a.duration)&&a.duration>0); assert.ok(a.instructions.length>=3); for(const id of a.sourceIds) assert.ok(sources.some(s=>s.id===id),'Source inconnue '+id); }
for(const s of sources){assert.match(s.date,/^\d{4}-\d{2}-\d{2}$/);assert.ok(s.status);if(s.local)await access(new URL('../public/'+s.url,import.meta.url));else assert.equal(new URL(s.url).protocol,'https:');}
let end=0;for(const step of schedule){assert.equal(step.start,end);assert.ok(step.end>step.start);end=step.end;}assert.equal(end,180);assert.equal(criteria.length,5);
for(const item of originals){const data=await readFile(new URL('../'+item.fichier,import.meta.url));assert.equal(createHash('sha256').update(data).digest('hex'),item.sha256,'Original modifié : '+item.fichier);}
const guide=await readFile(new URL('../guide-source-pedagogique-IA-LN-IA.docx',import.meta.url));const copy=await readFile(new URL('../public/ressources/guide-source-pedagogique-IA-LN-IA.docx',import.meta.url));assert.ok(guide.equals(copy));
console.log('OK : activités complètes, sources datées, scénario 180 min, grille et 7 originaux préservés.');
