Abderrahman, je vous propose de créer un projet nommé `atelier-ia-citoyen-ln-ia`, avec un site pédagogique Vite, une version utilisable sur votre ordinateur et une publication sur GitHub Pages.

Le principe : conserver un seul projet, suivre ses modifications avec Git et publier une version identifiée après contrôle.

Votre guide-source-pedagogique-IA-LN-IA.docx[guide-source-pedagogique-IA-LN-IA.docx](sandbox:/workspace/scratch/38ef173bf13d/output/guide-source-pedagogique-IA-LN-IA.docx) fournit déjà le scénario de trois heures, les exercices, la grille d’évaluation et la méthode de veille. L’atelier doit transformer ces éléments en activités utilisables.

1. Définir précisément ce que vous allez produire

Je recommande cette première version :

| Espace de l’atelier   | Contenu à produire                                | Résultat pour le participant                       |
| --------------------- | ------------------------------------------------- | -------------------------------------------------- |
| Accueil               | Objectifs, public, durée et parcours              | Comprendre ce qu’il va apprendre                   |
| Comprendre l’IA       | Modèle, application, agent, limites               | Employer les notions correctement                  |
| Pratiquer             | Les trois exercices du guide                      | Vérifier, apprendre avec des indices et déléguer   |
| Produire              | Une fiche de besoin et une consigne de production | Réaliser un contenu utile                          |
| Contrôler             | Checklist, sources et grille sur 20 points        | Corriger avant de partager                         |
| Suivre les évolutions | Fiches datées sur les nouveautés                  | Examiner une annonce sans la reprendre aveuglément |
| Ressources            | Guide, affiches et fiches téléchargeables         | Continuer après l’atelier                          |

La première version peut fonctionner sans compte utilisateur et sans connexion à une API d’IA. Les participants utilisent leur outil habituel pendant les exercices.

Cela permet de concentrer votre apprentissage sur le contenu, le contrôle et la publication.

2. Comprendre les versions locale et distante

| Élément                      | Son rôle                                          | Ce qu’il ne faut pas confondre                           |
| ---------------------------- | ------------------------------------------------- | -------------------------------------------------------- |
| Dossier sur votre ordinateur | Modifier les contenus et essayer le site          | Une modification n’est pas encore enregistrée dans Git   |
| Git local                    | Conserver des étapes identifiées avec des commits | Un commit reste local tant qu’il n’est pas envoyé        |
| Dépôt GitHub                 | Conserver et partager le projet à distance        | Envoyer le code ne garantit pas la publication du site   |
| GitHub Actions               | Exécuter les contrôles et construire le site      | Un contrôle technique ne valide pas la pédagogie         |
| GitHub Pages                 | Présenter la version publiée aux visiteurs        | La page publique peut différer de votre travail en cours |

GitHub Pages peut publier le résultat d’une construction réalisée par GitHub Actions. Le déploiement doit dépendre de la réussite des contrôles et de la construction. [GitHub Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages?utm_source=chatgpt.com)

Pour votre organisation :

- `main` représente la version validée.
- Une branche comme `atelier/premiere-version` contient le travail en préparation.
- Une pull request présente les changements avant leur intégration dans `main`.
- Un tag comme `v1.0.0` identifie une version que vous pourrez retrouver.

3. Organiser les fichiers du projet

Voici une structure à demander à Codex. Ces fichiers sont à créer dans le futur projet.

| Emplacement proposé            | Fonction                                           |
| ------------------------------ | -------------------------------------------------- |
| `references/`                  | Guide Word de référence avec sa date et sa version |
| `content/`                     | Textes des leçons, exercices et fiches de veille   |
| `public/ressources/`           | Fichiers destinés au téléchargement public         |
| `src/`                         | Interface et fonctions du site                     |
| `docs/scenario-formateur.md`   | Déroulement de la séance                           |
| `docs/controle-publication.md` | Contrôles avant et après publication               |
| `docs/journal-validation.md`   | Résultats des contrôles et décision humaine        |
| `AGENTS.md`                    | Instructions permanentes pour Codex                |
| `README.md`                    | Installation, démarrage et publication             |
| `CHANGELOG.md`                 | Historique des changements                         |
| `.github/workflows/`           | Contrôles et déploiement automatisés               |

Le Word reste la référence initiale. Les contenus du site sont ensuite entretenus dans `content/`. Toute évolution importante doit être répercutée explicitement dans une nouvelle édition du guide. Évitez de modifier les deux supports indépendamment sans noter les écarts.

Tout fichier placé dans `public/` est destiné à être publié. Dans un dépôt GitHub public, les autres fichiers suivis par Git sont également consultables.

4. Donner des instructions permanentes à Codex

Le fichier `AGENTS.md` sert à transmettre les règles du projet à Codex. La documentation OpenAI précise que Codex lit ces instructions avant de travailler. [ChatGPT Learn](https://developers.openai.com/codex/guides/agents-md?utm_source=chatgpt.com)

Pour votre atelier, il doit préciser :

- Le public : citoyens, parents, enseignants et professionnels débutants.
- La méthode LN-IA : besoin, cadrage, prompt, production, contrôle, correction, documentation et preuve.
- La référence pédagogique : le guide Word et son numéro de version.
- La rédaction : français clair, exemples concrets et vocabulaire expliqué.
- Les faits : source et date pour toute affirmation évolutive sur les modèles.
- Les exercices : objectif, consigne, résultat attendu, corrigé et critère de réussite.
- La technique : fonctionnement local, téléphone, ordinateur et impression.
- La livraison : expliquer les modifications et fournir les résultats des contrôles.
- La publication : intégrer uniquement les changements relus dans la branche de publication.

Vous restez responsable du choix pédagogique et de la validation des faits. Codex prépare, développe, vérifie ce qui peut l’être automatiquement et documente son travail.

5. Suivre le scénario de production

| Étape                 | Travail à réaliser                          | Condition pour poursuivre                       |
| --------------------- | ------------------------------------------- | ----------------------------------------------- |
| Cadrage               | Définir public, objectif et livrables       | Le résultat attendu tient en quelques phrases   |
| Extraction            | Transformer le guide en leçons et activités | Chaque activité renvoie à sa partie source      |
| Prototype             | Construire une première activité complète   | Elle fonctionne de bout en bout                 |
| Production            | Ajouter les autres espaces                  | Chaque espace a un usage pédagogique précis     |
| Contrôle              | Relire, tester et corriger                  | Les défauts bloquants sont corrigés             |
| Version candidate     | Enregistrer le travail dans Git             | Les modifications sont identifiables            |
| Publication           | Construire et déployer la version validée   | Le déploiement réussit                          |
| Vérification publique | Ouvrir le site et essayer les fonctions     | La version en ligne correspond à celle attendue |

Commencez par une activité complète : « Vérifier une affirmation sur un modèle d’IA ».

Le participant doit pouvoir lire une affirmation, consulter sa source, proposer un verdict et découvrir un corrigé expliqué. Cette première activité permettra de valider votre manière de produire avant de généraliser.

6. Contrôler en local puis publier à distance

Après création du projet et de son fichier de dépendances verrouillé, les commandes habituelles seront :

```bash
npm ci
npm run dev
```

La première prépare les dépendances. La seconde démarre le site de travail. Vous ouvrez l’adresse indiquée dans le terminal.

Pour examiner la version destinée à la publication :

```bash
npm run build
npm run preview
```

Vite construit normalement le site dans `dist/`. La commande `preview` permet d’examiner cette construction localement. Elle ne publie pas le site sur Internet. [Vite](https://vite.dev/guide/static-deploy?utm_source=chatgpt.com)

Votre contrôle doit couvrir trois dimensions :

| Contrôle    | Questions à examiner                                                                                      |
| ----------- | --------------------------------------------------------------------------------------------------------- |
| Pédagogique | L’objectif est-il clair ? L’exercice fait-il réfléchir ? Le corrigé explique-t-il la démarche ?           |
| Factuel     | Les noms, dates, chiffres et citations sont-ils confirmés ? La source soutient-elle réellement le texte ? |
| Technique   | Les boutons, liens, téléchargements, impressions et affichages mobiles fonctionnent-ils ?                 |

Une compilation réussie ne suffit pas à déclarer le contenu exact.

Pour la publication, configurez deux workflows :

- `validate.yml` : contrôler les contenus structurés, construire le site et tester les fonctions essentielles lors des propositions de modification.
- `deploy.yml` : refaire les contrôles sur `main`, construire puis publier uniquement si tout réussit.

Dans les paramètres GitHub Pages, choisissez GitHub Actions comme source. Pour un site publié sous le nom du dépôt, Vite doit utiliser le chemin de base correspondant, par exemple `/atelier-ia-citoyen-ln-ia/`. [Vite](https://vite.dev/guide/static-deploy?utm_source=chatgpt.com)

Après publication, vérifiez vous-même :

- La date et le numéro de version affichés.
- Une activité complète.
- Un téléchargement.
- L’affichage sur téléphone.
- L’actualisation d’une page ouverte directement.

Consignez l’URL publique, le commit publié, la date et le résultat de ces vérifications.

7. Maîtriser la mise à jour et le retour à une version précédente

Pour chaque nouveauté sur l’IA, utilisez le même cycle :

1. Relever l’annonce officielle et sa date.
2. Identifier les contenus concernés.
3. Ouvrir une branche de modification.
4. Modifier uniquement les éléments nécessaires.
5. Vérifier les faits et le fonctionnement.
6. Mettre à jour le journal des changements.
7. Publier puis contrôler la page publique.

Exemple : une modification de disponibilité d’un modèle peut nécessiter de corriger le tableau des modèles, une affiche et un exercice. Il faut repérer ces trois endroits avant de publier.

En cas d’erreur publiée, créez un commit qui annule le changement concerné, puis redéployez. Pour débuter, demandez à Codex de préparer cette opération et de vous expliquer les fichiers touchés.

Votre exercice de maîtrise sera réussi lorsque vous saurez :

- Modifier une phrase localement.
- Observer la différence dans Git.
- Enregistrer puis envoyer cette modification.
- Identifier sa publication en ligne.
- Revenir à la version précédente.
- Récupérer le projet sur un autre ordinateur.

Une version locale n’est pas automatiquement une version entièrement hors connexion. Pour animer sans Internet, prévoyez les ressources embarquées, les dépendances déjà installées et des supports imprimables.

8. Lancer la première mission dans Codex

Vous pouvez copier cette consigne dans VS Code après avoir placé le guide Word dans le dossier du projet.

Construis un atelier pédagogique nommé atelier-ia-citoyen-ln-ia à partir du document guide-source-pedagogique-IA-LN-IA.docx présent dans ce dossier.

Objectif : permettre à des citoyens, parents, enseignants et professionnels débutants de comprendre l’IA, produire un contenu utile, vérifier son exactitude et comprendre sa publication.

Utilise Vite pour créer un site utilisable localement et publiable sur GitHub Pages.

Commence par lire le guide et inspecter le dossier existant. Préserve les fichiers déjà présents.

Crée un plan de réalisation, un README et un AGENTS.md. Organise les contenus séparément du code de présentation.

Prévois les espaces suivants : accueil, notions essentielles, exercices, production, contrôle, veille et ressources.

Pour chaque activité, indique l’objectif, la durée, la consigne, le résultat attendu et un corrigé expliqué. Reprends le scénario de trois heures et la grille d’évaluation du guide.

Commence par réaliser entièrement l’activité « Vérifier une affirmation sur un modèle d’IA ». Utilise cette activité pour établir la présentation commune.

Conserve les sources et leurs dates. Vérifie les informations évolutives avant de les présenter comme actuelles. Signale toute information non confirmée.

Prévois une interface adaptée au téléphone, à l’ordinateur et à l’impression. La première version doit fonctionner sans clé API.

Prépare les workflows de contrôle et de déploiement GitHub Pages. Documente les commandes locales, le circuit de validation et le retour à une version précédente.

Réalise les contrôles disponibles et indique ceux qui restent à faire manuellement. Livre une version locale vérifiable et un rapport des modifications. La première publication fera l’objet d’une validation après examen du résultat.
