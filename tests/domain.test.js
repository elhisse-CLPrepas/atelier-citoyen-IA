import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluate, priceAfterChanges, evidenceFeedback } from '../src/domain.js';
test('le total ne contourne pas les seuils de contrôle',()=>{assert.equal(evaluate({besoin:4,exactitude:1,controle:4,qualite:4,comprehension:4}).eligible,false);assert.equal(evaluate({besoin:4,exactitude:4,controle:1,qualite:4,comprehension:4}).eligible,false);assert.deepEqual(evaluate({besoin:3,exactitude:3,controle:2,qualite:3,comprehension:3}),{total:14,eligible:true});assert.equal(evaluate({besoin:2,exactitude:3,controle:2,qualite:3,comprehension:3}).eligible,false);});
test('notes hors grille refusées',()=>{assert.throws(()=>evaluate({besoin:5,exactitude:3,controle:3,qualite:3,comprehension:3}));assert.throws(()=>evaluate({besoin:2.5,exactitude:3,controle:3,qualite:3,comprehension:3}));assert.throws(()=>evaluate({}));});
test('variations sur des bases différentes',()=>{assert.equal(priceAfterChanges(200),192);assert.equal(priceAfterChanges(300),288);});
test('corrigé après tentative et portée de la preuve',()=>{assert.equal(evidenceFeedback(null,'texte').ready,false);assert.equal(evidenceFeedback('non-etabli','   ').ready,false);assert.equal(evidenceFeedback('non-etabli','La source décrit seulement l’API.').ready,true);assert.match(evidenceFeedback('confirme','Tous les comptes').message,/ne prouve pas/);});
