# Atelier IA citoyen LN-IA

Site Vite pour citoyens, parents, enseignants et professionnels débutants. Sept espaces pédagogiques, version candidate 0.1.0 du 7 octobre 2026. Sans compte ni clé API.

## Démarrer

Prérequis : Node.js 24 et npm. Dans ce dossier :

    npm ci
    npm run dev

Ouvrir l’adresse affichée, normalement http://127.0.0.1:5173. Pour tester la version destinée à la publication :

    npm run validate
    npm run preview

La prévisualisation utilise normalement http://127.0.0.1:4173. La construction se trouve dans dist/. Utiliser un serveur HTTP ; ne pas ouvrir index.html directement depuis l’explorateur.

## Utiliser l’atelier

Commencer par Pratiquer : choisir un verdict, écrire une justification et comparer au corrigé. Les réponses restent en mémoire pendant la navigation. Enregistrer le carnet les conserve sur cet appareil dans ce navigateur ; Effacer le carnet retire réponses et enregistrement. Sur un ordinateur partagé, éviter les données personnelles et effacer le carnet en fin de séance.

Produire, Contrôler et Veille permettent un export texte. Imprimer imprime l’espace ouvert. Le kit texte rassemble scénario, activités, preuves et grille. Les liens externes nécessitent Internet. Le site n’appelle aucune API et ne charge aucune police externe. Pour travailler sans connexion, installer les dépendances et préparer ressources et impressions à l’avance.

## Organisation

- content/ : activités, notions, sources, scénario et critères.
- src/ : présentation, navigation et interactions.
- public/ressources/ : copies publiques du guide, affiches et kit.
- references/inventaire-originaux.json : empreintes des sept fichiers de départ.
- docs/ : plan, scénario, validation et publication.
- scripts/ et tests/ : contrôles reproductibles.

Les originaux restent à leur place. Le guide Word version 1.0 est la référence initiale. Les écarts sont consignés dans docs/journal-validation.md. Une modification volontaire d’un original exige de documenter sa nouvelle version et de renouveler explicitement son empreinte.

## Git et première publication

La première publication nécessite votre validation après examen. Aucun dépôt distant n’est connecté automatiquement. Le workflow de publication est manuel et exige la branche main et la saisie VALIDE.

Créer un dépôt GitHub nommé atelier-ia-citoyen-ln-ia. Connecter son URL, envoyer la branche atelier/premiere-version et ouvrir une pull request vers main. Si main n’existe pas encore, créer la branche après examen de la version candidate. Relire avant intégration.

Dans Settings → Pages, choisir GitHub Actions. Après validation humaine, lancer Publier la version validée sur main et saisir VALIDE. Configurer si possible un approbateur dans l’environnement github-pages. Tout fichier de public/ est publié ; dans un dépôt public, les sources Git sont également consultables.

Le workflow construit avec PAGES_BASE égal au nom du dépôt. Pour tester ce chemin en PowerShell :

    $env:PAGES_BASE='/atelier-ia-citoyen-ln-ia/'
    npm run build
    npm run preview

Ouvrir http://127.0.0.1:4173/atelier-ia-citoyen-ln-ia/. Pour revenir au chemin local :

    Remove-Item Env:PAGES_BASE
    npm run build

Les routes sont des fragments (#exercices, #controle) et ne nécessitent aucune réécriture serveur. Contrôler une URL directe après publication.

## Retour à une version précédente

Sur main propre : git log --oneline pour identifier le commit, puis git revert IDENTIFIANT. Pour une fusion, examiner le parent avant un revert -m. Relancer npm run validate, relire, intégrer le correctif et redéployer manuellement. Éviter reset --hard et push --force. Après approbation, un tag v0.1.0 permettra de retrouver cette version.

Sur un autre ordinateur : git clone URL_DU_DEPOT puis npm ci.

Références techniques : https://vite.dev/guide/static-deploy et https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages.
