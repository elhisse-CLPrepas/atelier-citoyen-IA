# Journal de validation

## Version candidate 0.1.0 — 7 octobre 2026

État : réalisée localement, première publication en attente de validation humaine. Responsable pédagogique : à renseigner par le propriétaire du projet.

Les deux consignes étaient vides au premier accès, puis leur contenu a été enregistré pendant la session. Elles ont ensuite été lues intégralement et appliquées. Elles n’ont pas été modifiées par l’agent.

## Contrôles obtenus

- Inventaire : sept fichiers originaux ; empreintes SHA-256 conservées et vérifiées.
- Word : extraction du corps du document et contrôle structurel (615 paragraphes, 15 tableaux, aucun commentaire ou suivi de modification repéré). Pagination de 24 pages annoncée par le sommaire, sans validation par rendu.
- PDF : structure de 1 et 15 pages repérée ; extraction textuelle. Certaines polices du Livre-Maître ne sont pas entièrement décodées ; aucune validation visuelle complète des PDF.
- PNG : les deux affiches ont été examinées visuellement. Mention Illustration conceptuelle présente sur la scène de rencontre.
- Scénario : continuité de 0 à 180 minutes. Calculs : 192 DH et 288 DH confirmés.
- npm install : dépendances verrouillées, Vite 8.3.3 ; audit d’installation sans vulnérabilité signalée.
- npm run validate : contrôle des contenus et des originaux, quatre tests réussis, construction locale réussie.
- Six points HTTP locaux contrôlés : accueil, module principal, guide Word, kit texte et deux PNG ; réponses 200.
- Construction avec PAGES_BASE=/atelier-ia-citoyen-ln-ia/ : effectuée pour vérifier la préparation du chemin de publication.

## Sources examinées

Catalogue OpenAI, catalogue complet et fiche GPT-6.1 Sol : consultés le 7 octobre 2026. Ils confirment les noms principaux du tableau du guide. Ils ne constituent pas une preuve de disponibilité dans toutes les offres ChatGPT.

Étude Bastani et al. : passages sur la réduction de 17 % des notes à l’épreuve sans aide et sur GPT Tutor vérifiés. UIT Facts and Figures 2025 : estimation 2,2 milliards de personnes hors ligne vérifiée pour 2025.

Liens :
- https://developers.openai.com/api/docs/models
- https://developers.openai.com/api/docs/models/all
- https://developers.openai.com/api/docs/models/gpt-6.1-sol
- https://hamsabastani.github.io/education_llm.pdf
- https://www.itu.int/en/ITU-D/Statistics/Pages/facts/default.aspx

## Écarts documentés avec le guide

L’activité modèle utilise une affirmation sur le passage injustifié du catalogue API à toutes les offres ChatGPT. Elle remplace l’affirmation du guide sur les accès au lancement, qui n’a pas été recontrôlée. Le corrigé distingue non établi et faux. Les dates de lancement et détails Work/Chat ne sont pas repris comme informations actuelles.

Le site conserve des références de sections et mentionne que la pagination est annoncée, non validée par rendu. Les expériences nationales ne sont pas présentées comme faits recontrôlés. Le Word original reste téléchargeable comme référence initiale.

## Points à traiter dans les anciens supports

La fiche IA selon Sam Altman contient une citation attribuée sans référence et des formulations générales à sourcer. Le guide propose déjà leur révision. Le Livre-Maître contient des libellés de graphiques génériques (Série 1, Élément 1) et des pourcentages sans contexte explicite dans le texte extrait. Examiner ces graphiques visuellement et expliquer leurs données avant publication. Aucune modification de ces supports n’a été effectuée.

## Contrôles humains restant à faire

Aucun navigateur n’est connecté à cette session après diagnostic et découverte. Les interactions n’ont donc pas été validées dans un navigateur. Les tests unitaires portent sur les règles pédagogiques, pas sur un parcours visuel.

À vérifier : navigation clavier ; activité de bout en bout ; conservation radio/texte entre espaces et après enregistrement/rechargement ; effacement sur appareil partagé ; calcul et grille ; exports ; téléchargement ; mobile réel ; impression de chaque espace. Vérifier la fidélité visuelle du guide Word et des deux PDF avec les outils locaux.

Workflows préparés mais non exécutés sur GitHub. Aucun dépôt distant, URL publique, compte rendu de publication ou tag de version approuvée. Confirmer les droits de diffusion des supports avant la première publication.

## Décision humaine

Date : à renseigner.
Responsable : à renseigner.
Commit examiné : à renseigner.
Décision : en attente.
URL publique et commit publié : à renseigner après déploiement.

## Configuration du dépôt distant — 7 octobre 2026

Dépôt indiqué par le propriétaire : https://github.com/elhisse-CLPrepas/atelier-citoyen-IA.git. Lecture git ls-remote réussie sans référence annoncée : dépôt apparemment vide au moment du contrôle. Connexion locale origin préparée ; aucun push ni déploiement. Chemin GitHub Pages à utiliser : /atelier-citoyen-IA/. Le workflow emploie déjà le nom réel du dépôt automatiquement. Les commandes du README ont été adaptées.
