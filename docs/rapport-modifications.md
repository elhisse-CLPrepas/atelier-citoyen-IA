# Rapport des modifications

Version candidate 0.1.0, 7 octobre 2026. Les sept fichiers originaux sont préservés. Le travail suit prompt-première-consigne.md et instructions-scénario-atelier-citoyen.md après leur enregistrement.

## Résultat

Site Vite avec accueil, notions, exercices, production, contrôle, veille et ressources. Activité principale complète avec affirmation, source officielle, preuve embarquée, verdict, justification, reformulation et corrigé conditionné à une tentative. Trois exercices et une activité de production, carnet facultatif sur l’appareil, exports texte, kit local et styles téléphone/impression.

Scénario de trois heures et grille de cinq critères sur 20 points repris du guide. Seuil de 14 et seuils particuliers de 2 conservés. Aucune clé API ou inscription nécessaire. Aucune publication effectuée.

## Fichiers ajoutés

- package.json, package-lock.json, vite.config.js, index.html : construction Vite.
- content/ : cinq fichiers de contenu structurés.
- src/ : interface, styles et règles pédagogiques.
- public/ressources/ : copies du Word et des deux affiches, kit imprimable en texte.
- scripts/ et tests/ : validation des contenus, originaux et règles d’évaluation.
- .github/workflows/ : contrôle et publication manuelle depuis main.
- AGENTS.md, README.md, CHANGELOG.md et docs/ : règles, plan, scénario, procédures et preuves de validation.
- references/inventaire-originaux.json : inventaire daté par contexte et empreintes SHA-256.
- .gitignore : exclusion des dépendances, construction, fichiers d’environnement et temporaires.

## Validation et limites

Contrôles des contenus et des originaux réussis ; quatre tests réussis ; construction locale réussie ; six ressources HTTP répondent 200. Construction sous le chemin GitHub Pages testée. Le navigateur n’est pas disponible : interactions, affichage mobile et impression restent à essayer manuellement. Les anciens PDF et le Word n’ont pas reçu de validation visuelle complète.

Les constats, références vérifiées, écarts avec le guide et contrôles restants sont consignés dans journal-validation.md. README.md donne les commandes de démarrage et la procédure de retour à une version précédente.

## Première publication

Après relecture de cette version et validation explicite du responsable. Le workflow n’est déclenché que manuellement sur main, avec VALIDE. Il reconstruit et contrôle avant déploiement. Aucune action distante effectuée pendant cette réalisation.

.gitattributes préserve les formats binaires et les octets des deux consignes afin que le contrôle des empreintes soit reproductible entre Windows et GitHub Actions.
