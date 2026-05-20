export interface ProjectVideo {
  type: 'youtube' | 'vimeo';
  id: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  client: string;
  year: string;
  category: string;
  tags: string[];
  description: string;
  context: string;
  objectives: string[];
  heroImage: string;
  gallery: ProjectImage[];
  videos?: ProjectVideo[];
}

const CDN = "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/b2ne8m116DM5kp91/";

export const projects: Project[] = [
  {
    id: 1,
    slug: "airton-climatiseurs",
    title: "Publicité pour les climatiseurs Airton",
    client: "AIRTON",
    year: "2026",
    category: "3D · Motion Design · Publicité",
    tags: ["3D", "Motion Design", "VFX", "Publicité", "Rendu Photoréaliste"],
    description:
      "Conception et réalisation d'une publicité 3D pour les climatiseurs Airton. Chaque plan est modélisé, éclairé et animé à la main — un travail artisanal de précision qui allie rendu photoréaliste, motion design et direction artistique soignée pour donner vie au produit dans un univers visuel fort.",
    context:
      "De la modélisation du produit à la colorimétrie finale, chaque étape a été pensée et exécutée manuellement. Un travail de précision technique et créatif en production 3D publicitaire, pour garantir un résultat à la hauteur des exigences d'une communication de marque premium.",
    objectives: [
      "Modéliser et texturer le produit avec fidélité et précision",
      "Concevoir un éclairage cinématique valorisant chaque angle du climatiseur",
      "Animer le produit avec fluidité pour un rendu dynamique et accrocheur",
      "Livrer une publicité prête à diffuser, cohérente avec l'identité visuelle de la marque",
    ],
    heroImage: "/Publicité pour les climatiseurs Airton.png",
    gallery: [
      { src: "/Publicité pour les climatiseurs Airton.png", alt: "Publicité Airton Climatiseurs" },
    ],
  },
  {
    id: 2,
    slug: "lancer-javelot-vr",
    title: "Lancer Javelot — Jeu VR",
    client: "OBIITY",
    year: "2026",
    category: "VR · Game Design · 3D",
    tags: ["VR", "Unity", "3D", "Game Design", "Expérience Immersive"],
    description:
      "Conception et développement d'une expérience de jeu en réalité virtuelle simulant le lancer de javelot. L'environnement immersif allie gameplay intuitif, physique réaliste et fidélité sportive pour une expérience utilisateur inédite.",
    context:
      "Ce projet VR explore la frontière entre sport réel et simulation numérique, en proposant une interface gestuelle naturelle et un environnement 3D soigné. L'objectif était de rendre l'expérience accessible tout en préservant la rigueur technique de la discipline sportive.",
    objectives: [
      "Simuler fidèlement la gestuelle du lancer de javelot en VR",
      "Concevoir un environnement 3D immersif et performant",
      "Assurer une expérience utilisateur fluide et intuitive",
      "Intégrer un système de score et de progression",
    ],
    heroImage: "/Lancer Javelot.png",
    gallery: [
      { src: "/Lancer Javelot.png", alt: "Lancer Javelot VR" },
    ],
  },
  {
    id: 4,
    slug: "archi-3d",
    title: "ARCHI 3D",
    client: "OBIITY",
    year: "2026",
    category: "Architecture · Visualisation 3D",
    tags: ["Architecture", "3D", "Visualisation", "Rendu Photoréaliste", "Design"],
    description:
      "Modélisation et visualisation architecturale 3D offrant une projection fidèle et photoréaliste des espaces. Un travail minutieux de détail, de matières et d'éclairage au service de la conception et de la communication architecturale.",
    context:
      "Ce projet de visualisation 3D architecturale permet à des professionnels de l'immobilier et de la construction de présenter leurs projets avec une précision et un réalisme exceptionnels, bien avant la phase de construction. Chaque surface, chaque lumière, chaque texture est travaillée pour coller au projet réel.",
    objectives: [
      "Produire une visualisation photoréaliste fidèle aux plans architecturaux",
      "Valoriser les espaces intérieurs et extérieurs avec des rendus premium",
      "Faciliter la communication entre architectes et clients",
      "Proposer différentes ambiances lumineuses (jour / nuit)",
    ],
    heroImage: "/PLAN ARCHI 3D.png",
    gallery: [
      { src: "/PLAN ARCHI 3D.png", alt: "Plan Archi 3D" },
    ],
  },
  {
    id: 5,
    slug: "devenir-agri-entrepreneur",
    title: "DEVENIR AGRI-ENTREPRENEUR",
    client: "KTM ACADEMY",
    year: "2026",
    category: "Serious Game · E-Learning · Game Design",
    tags: ["Serious Game", "Game Design", "Agriculture", "Pédagogie", "Formation"],
    description:
      "Conception d'un serious game interactif destiné à sensibiliser et initier les utilisateurs aux fondamentaux de l'agriculture et de l'agro-entrepreneuriat, couvrant la gestion des terres agricoles, la sélection des semences et la gestion durable des ressources.",
    context:
      "Développé pour KTM Academy, ce jeu pédagogique propose une approche immersive et ludique de la formation agricole. Il aborde les défis concrets de l'agro-entrepreneuriat en Afrique de l'Ouest : accès à la terre, choix des cultures, gestion de l'eau et rentabilité économique.",
    objectives: [
      "Initier les apprenants aux principes de l'agro-entrepreneuriat",
      "Rendre la formation agricole accessible et engageante",
      "Couvrir la gestion des terres, des semences et des ressources durables",
      "Proposer des mises en situation réalistes et progressives",
    ],
    heroImage: "/DEVENIR AGRI-ENTREPRENEUR.png",
    gallery: [
      { src: CDN + "screenshot-199-fAK2BXfzh4CIwfbC.png", alt: "Devenir Agri-Entrepreneur — écran 1" },
      { src: CDN + "screenshot-201-j0EL2dSKFdn3cKzB.png", alt: "Devenir Agri-Entrepreneur — écran 2" },
      { src: CDN + "screenshot-203-odjUWBX5w7jZukNR.png", alt: "Devenir Agri-Entrepreneur — écran 3" },
      { src: CDN + "screenshot-209-0Sn6cQsXXUs3jLxU.png", alt: "Devenir Agri-Entrepreneur — écran 4" },
    ],
  },
  {
    id: 6,
    slug: "boostgi-jobs",
    title: "BOOSTGI-JOBS",
    client: "ENCAF · KTM ADVANCE SN",
    year: "2025",
    category: "Game Design · EdTech · Gamification",
    tags: ["Game Design", "EdTech", "Gamification", "Formation Professionnelle", "Mécatronique"],
    description:
      "Création de modules pédagogiques interactifs et gamifiés intégrés dans le cursus de mécatronique automobile. Une approche hybride combinant apprentissage théorique et expérience immersive pour renforcer la motivation et le développement technique des apprenants.",
    context:
      "Projet mené par MEDEF International en partenariat avec FOTTEN et ENCAF, soutenu par la GIZ dans le cadre de l'initiative Invest for Jobs, couvrant trois régions sénégalaises : Diamniadio, Diourbel et Kaolack. L'objectif est de créer 266 emplois de qualité dans le secteur automobile tout en renforçant l'employabilité locale.",
    objectives: [
      "Concevoir 266 emplois de qualité dans le secteur automobile sénégalais",
      "Développer un écosystème digital innovant pour la formation professionnelle",
      "Renforcer l'employabilité et répondre aux besoins des entreprises locales",
      "Intégrer la gamification pour augmenter l'engagement des apprenants",
    ],
    heroImage: "/BOOSTGI-JOBS.jpeg",
    gallery: [
      { src: CDN + "screenshot-139-gfyR6jhb2UcWkma3.png", alt: "BoostGI Jobs — interface" },
      { src: CDN + "img_4588-WZxw3KKIWXFNXNzm.JPG", alt: "BoostGI Jobs — formation terrain" },
      { src: CDN + "dsc08877-uk6plZQ2mSTPCYU5.JPG", alt: "BoostGI Jobs — atelier mécatronique" },
      { src: CDN + "dsc08841-NFlBIVPGp3XSogIc.JPG", alt: "BoostGI Jobs — participants" },
    ],
  },
  {
    id: 7,
    slug: "digitalisation",
    title: "PROJET DE DIGITALISATION",
    client: "DER · KTM ADVANCE SN",
    year: "2025",
    category: "Animation · Vidéo · Formation Digitale",
    tags: ["Animation", "Vidéo Pédagogique", "Digitalisation", "E-Learning", "Motion Design"],
    description:
      "Participation à un projet de digitalisation pour la DER en travaillant sur la création d'animations pédagogiques et de vidéos explicatives pour des modules de formation. Des contenus visuels engageants conçus pour faciliter l'apprentissage et maintenir les standards d'identité visuelle.",
    context:
      "Ce projet s'inscrit dans une démarche de modernisation des outils de formation de la Délégation Générale à l'Entrepreneuriat Rapide (DER). Il vise à numériser le parcours d'apprentissage en remplaçant les supports statiques par des contenus animés dynamiques et compréhensibles pour tous.",
    objectives: [
      "Créer des animations pédagogiques claires et impactantes",
      "Développer des vidéos explicatives pour chaque module de formation",
      "Respecter l'identité visuelle institutionnelle de la DER",
      "Moderniser l'expérience d'apprentissage via le contenu digital",
    ],
    heroImage: "/PROJET DE DIGITALISATION.png",
    gallery: [
      { src: CDN + "capture-daa-c-cran-97-xgGO2MQ7xTEcY7QJ.png", alt: "Digitalisation DER — module 1" },
      { src: CDN + "screenshot-247-14nGDbfGtOsly3my.png", alt: "Digitalisation DER — module 2" },
    ],
  },
  {
    id: 8,
    slug: "error-404",
    title: "ERROR 404",
    client: "OBIITY",
    year: "2025",
    category: "Court Métrage · Réalisation · Thriller",
    tags: ["Court Métrage", "Réalisation", "VFX", "Montage", "Storytelling"],
    description:
      "Un court métrage de tension atmosphérique mettant en scène un designer travaillant seul tard dans un bureau sombre, qui découvre un fichier au nom suspect. En l'ouvrant, il déclenche une série d'événements de plus en plus étranges — l'écran devient un miroir trompeur révélant une présence qui ne devrait pas exister.",
    context:
      "ERROR 404 explore la frontière entre l'humanité et la technologie numérique à travers une atmosphère minimaliste et inquiétante. La tension progressive est construite via le silence, la lumière des écrans et des perturbations visuelles subtiles, créant un crescendo psychologique jusqu'au dénouement.",
    objectives: [
      "Explorer la tension entre humanité et technologie numérique",
      "Construire une montée en suspens via le minimalisme visuel",
      "Travailler la direction artistique sombre et atmosphérique",
      "Livrer une expérience cinématique courte et percutante",
    ],
    heroImage: "/ERROR 404.png",
    gallery: [
      { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,h=1080,fit=crop/b2ne8m116DM5kp91/capture-daa-c-cran-123-6N4dmR42QKKxN7gi.png", alt: "ERROR 404 — scène 1" },
      { src: CDN + "capture-daa-c-cran-122-oDAwZKZy7NOdLcFJ.png", alt: "ERROR 404 — scène 2" },
      { src: CDN + "capture-daa-c-cran-120-1fcYN0s2CQ4tdmBV.png", alt: "ERROR 404 — scène 3" },
    ],
    videos: [{ type: "youtube", id: "tJrLgFgFYI4" }],
  },
  {
    id: 9,
    slug: "king-of-arena",
    title: "KING OF ARENA",
    client: "DAMEL STUDIO",
    year: "2025",
    category: "Game Design · Character Design · Web",
    tags: ["Game Design", "Character Design", "Web Design", "Patrimoine Culturel", "Lutte Sénégalaise"],
    description:
      "Contribution au design de personnages pour un jeu vidéo inspiré de la lutte sénégalaise — sport emblématique et pilier de l'identité culturelle du Sénégal. Chaque personnage reflète les codes, traditions et esthétiques de cette discipline ancestrale, avec en parallèle la conception du site officiel du jeu.",
    context:
      "King of Arena est un jeu vidéo qui s'inspire de la lutte sénégalaise, sport national et symbole fort de la culture ouest-africaine. Le projet a nécessité une recherche culturelle approfondie pour ancrer les personnages et l'univers visuel dans l'authenticité de cette tradition tout en les rendant accessibles à un public international.",
    objectives: [
      "Concevoir des personnages inspirés des traditions de la lutte sénégalaise",
      "Créer un site officiel transmettant l'univers unique du jeu",
      "Offrir une expérience utilisateur fluide et immersive",
      "Allier patrimoine culturel africain et game design contemporain",
    ],
    heroImage: "/KING OF ARENA.png",
    gallery: [
      { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,h=1280,fit=crop/b2ne8m116DM5kp91/222040918_359f83e6-0095-4ff6-b079-72a3b2a6019b-f06h7AjgO5qizmjv.png", alt: "King of Arena — personnage" },
      { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=593,fit=crop/b2ne8m116DM5kp91/ahmed-taya-uiVVXVrEOFqubnse.png", alt: "King of Arena — combattant Ahmed Taya" },
    ],
  },
  {
    id: 10,
    slug: "fulani",
    title: "FULANI",
    client: "DAMEL STUDIO",
    year: "2023",
    category: "Animation · Character Design · VFX",
    tags: ["Animation", "Character Design", "VFX", "Film Africain", "Storytelling"],
    description:
      "Film d'animation ambitieux retraçant l'histoire d'une guerrière africaine, symbole de force et de résilience. Une direction artistique soignée et un univers immersif fusionnant tradition africaine et techniques d'animation contemporaines pour une expérience visuelle et émotionnelle profonde.",
    context:
      "FULANI est actuellement en production et représente l'une des productions d'animation africaines les plus ambitieuses. Le projet combine une recherche culturelle et historique rigoureuse avec les outils modernes d'animation et de VFX pour créer un film à la fois authentique et visuellement spectaculaire.",
    objectives: [
      "Créer des designs de personnages culturellement et historiquement authentiques",
      "Développer un univers visuel riche fusionnant tradition et modernité",
      "Livrer une expérience animée visuellement et émotionnellement impactante",
      "Valoriser le patrimoine narratif et esthétique africain",
    ],
    heroImage: "/FULANI.png",
    gallery: [
      { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1102,fit=crop/b2ne8m116DM5kp91/cover-2-ExAwwWfOBcoD1xDf.png", alt: "FULANI — guerrière africaine" },
    ],
  },
  {
    id: 11,
    slug: "last-loadout",
    title: "LAST LOADOUT — SURF SCOP",
    client: "SAIPEM",
    year: "2024",
    category: "Motion Design · Vidéo Industrielle · Offshore",
    tags: ["Motion Design", "Vidéo", "Offshore", "Ingénierie", "VFX"],
    description:
      "Production de la vidéo du LAST LOADOUT pour SAIPEM, documentant la phase finale du chargement et de l'installation des structures sous-marines dans l'industrie offshore. Un projet technique et artistique exigeant qui capture avec précision la complexité des opérations d'ingénierie pétrolière.",
    context:
      "Ce projet illustre la capacité à allier exigence technique et narration visuelle dans un contexte industriel offshore hautement spécialisé. La vidéo documente des manœuvres critiques d'installation sous-marine qui requièrent une coordination millimétrique entre équipes et équipements.",
    objectives: [
      "Documenter fidèlement les opérations de chargement offshore final",
      "Mettre en valeur la précision et la complexité des manœuvres d'ingénierie",
      "Produire un contenu de référence pour SAIPEM",
      "Allier qualité cinématique et rigueur technique",
    ],
    heroImage: "/LAST LOADOUT - SURF SCOP.png",
    gallery: [
      { src: CDN + "capture-daa-c-cran-32-D11xFXlmll1o1hXe.png", alt: "Last Loadout — opération offshore 1" },
      { src: CDN + "capture-daa-c-cran-27-tz5vlNfJacgR1xx1.png", alt: "Last Loadout — opération offshore 2" },
    ],
    videos: [{ type: "youtube", id: "I5TPkEcm8V0" }],
  },
  {
    id: 12,
    slug: "clean-up-day",
    title: "CLEAN UP DAY",
    client: "SAIPEM",
    year: "2024",
    category: "Vidéo · Documentaire · RSE",
    tags: ["Vidéo", "Documentaire", "RSE", "Environnement", "Dakar"],
    description:
      "Production de la vidéo du CLEAN UP DAY organisé par SAIPEM à Dakar, capturant l'énergie des bénévoles, l'impact de leurs actions et l'engagement collectif pour un littoral plus propre. Un témoignage visuel fort sur la responsabilité environnementale et la solidarité humaine.",
    context:
      "Initiative de nettoyage des plages dakaroises visant à protéger l'environnement côtier et sensibiliser le public à la préservation du littoral. SAIPEM mobilise ses équipes et la communauté locale pour un acte symbolique et concret en faveur de l'environnement marin.",
    objectives: [
      "Documenter l'initiative de nettoyage de plage",
      "Valoriser les contributions des bénévoles",
      "Sensibiliser à la protection de l'environnement côtier",
      "Témoigner de l'engagement collectif de SAIPEM",
    ],
    heroImage: "/CLEAN UP DAY.png",
    gallery: [
      { src: CDN + "capture-daa-c-cran-37-tQJGRHMn3PfCTcww.png", alt: "Clean Up Day — nettoyage plage 1" },
      { src: CDN + "capture-daa-c-cran-38-80YPIQwYPYQlXeDF.png", alt: "Clean Up Day — nettoyage plage 2" },
      { src: CDN + "capture-daa-c-cran-88-CwQ0qTljcf1x5FLR.png", alt: "Clean Up Day — bénévoles" },
      { src: CDN + "capture-daa-c-cran-86-nZNWkl0HrSrBLgSU.png", alt: "Clean Up Day — résultat" },
    ],
    videos: [{ type: "youtube", id: "6rdSFgFglsE" }],
  },
  {
    id: 13,
    slug: "saipem-training-camp",
    title: "SAIPEM TRAINING CAMP",
    client: "SAIPEM",
    year: "2024",
    category: "Vidéo · Corporate · Événement",
    tags: ["Vidéo", "Corporate", "Formation", "Industrie", "Cérémonie"],
    description:
      "Vidéo de cérémonie de clôture du programme de formation SAIPEM, mettant en valeur des initiatives de formation aux métiers techniques. Présentations de certificats, témoignages des participants et discours officiels valorisant les parcours de développement professionnel.",
    context:
      "Ce programme de formation SAIPEM visait à équiper les apprenants de compétences techniques essentielles dans quatre domaines clés : soudure, rigging, opérations HSE et travaux électriques. La vidéo capture la fierté et les ambitions des diplômés prêts à intégrer l'industrie offshore.",
    objectives: [
      "Documenter et promouvoir le programme de formation technique",
      "Valoriser les compétences acquises par les apprenants",
      "Produire un contenu corporate de qualité pour SAIPEM",
      "Témoigner de l'impact social de l'initiative de formation",
    ],
    heroImage: "/SAIPEM TRAINING CAMP.jpg",
    gallery: [
      { src: CDN + "_mg_2494-DTApy5jSPILaM98K.jpg", alt: "Saipem Training Camp — cérémonie 1" },
      { src: CDN + "_mg_2588-a5oeMrHpP214Tr66.jpg", alt: "Saipem Training Camp — cérémonie 2" },
    ],
  },
  {
    id: 15,
    slug: "femmes-sous-un-baobab",
    title: "FEMMES SOUS UN BAOBAB",
    client: "UNICEF",
    year: "2023",
    category: "Vidéo · Documentaire · Impact Social",
    tags: ["Vidéo Documentaire", "UNICEF", "Femmes", "Empowerment", "Culture Africaine"],
    description:
      "Vidéo-débat mettant en lumière la force et la résilience de femmes réunies sous un baobab pour échanger, apprendre et construire un avenir meilleur pour leur communauté. Un symbole puissant de transmission et de solidarité, au service de l'empowerment féminin en Afrique.",
    context:
      "Réalisé pour UNICEF, ce projet utilise le baobab comme symbole culturel fort de l'Afrique de l'Ouest — arbre de vie, de rencontre et de transmission intergénérationnelle. La vidéo donne la parole à des femmes engagées dans le changement de leur communauté.",
    objectives: [
      "Mettre en valeur la force et la résilience des femmes",
      "Documenter les échanges communautaires et la transmission du savoir",
      "Soutenir la mission de l'UNICEF pour l'empowerment féminin",
      "Créer un témoignage visuel authentique et impactant",
    ],
    heroImage: "/FEMMES SOUS UN BAOBAB.png",
    gallery: [
      { src: CDN + "capture-daa-c-cran-47-vy0JR1ohm5DMAKyS.png", alt: "Femmes sous un baobab — scène 1" },
      { src: CDN + "capture-daa-c-cran-43-lWOYOpgTROu0F8dj.png", alt: "Femmes sous un baobab — scène 2" },
    ],
  },
  {
    id: 14,
    slug: "short-animation",
    title: "SHORT ANIMATION (TEST)",
    client: "OBIITY",
    year: "2023",
    category: "Motion Design · Animation · Publicité",
    tags: ["Motion Design", "Animation", "Publicité", "Minimalisme", "Apple-Inspired"],
    description:
      "Publicité courte inspirée de l'univers visuel d'Apple, explorant la création de contenu promotionnel avec un accent sur l'esthétique minimaliste, la narration visuelle et la mise en valeur du produit. Un exercice de direction artistique pour perfectionner le storytelling de marque.",
    context:
      "Projet personnel d'exploration créative visant à reproduire le langage visuel des grandes marques tech mondiales. L'objectif était de maîtriser chaque élément — timing, typographie, mouvement, son — pour produire un contenu cohérent, impactant et professionnel.",
    objectives: [
      "Explorer la création de contenu publicitaire minimaliste",
      "Reproduire le langage visuel premium des grandes marques tech",
      "Perfectionner la direction artistique et le storytelling visuel",
      "Produire une animation courte mais percutante",
    ],
    heroImage: "/SHORT ANIMATION (TEST).png",
    gallery: [],
    videos: [{ type: "youtube", id: "dr5xmVgbCQk" }],
  },
  {
    id: 17,
    slug: "dolce-fruiti",
    title: "DOLCE FRUITI (PUB)",
    client: "DOLCE FRUITI",
    year: "2026",
    category: "Publicité · Vidéo · Branding",
    tags: ["Publicité", "Vidéo", "Branding", "Motion Design", "IA Générative"],
    description:
      "Production publicitaire complète pour la marque de jus Dolce Fruiti — conception de contenu visuel dynamique pour mettre en valeur la fraîcheur, la qualité et l'identité de la marque. Un workflow optimisé avec l'intégration des outils d'intelligence artificielle générative.",
    context:
      "Ce projet illustre l'utilisation stratégique des outils d'IA dans la chaîne de production créative. En combinant production vidéo classique et optimisation IA, OBIITY a pu accélérer significativement le processus tout en maintenant un niveau de qualité visuelle premium.",
    objectives: [
      "Valoriser la fraîcheur et la qualité des produits Dolce Fruiti",
      "Établir une identité visuelle forte et cohérente",
      "Créer une communication attractive et dynamique",
      "Optimiser la production via l'intégration de l'IA générative",
    ],
    heroImage: "/DOLCE FRUITI (PUB).png",
    gallery: [],
    videos: [
      { type: "youtube", id: "S3rh00beBMg" },
      { type: "youtube", id: "yhgynW_W568" },
    ],
  },
  {
    id: 16,
    slug: "wnpwy",
    title: "WNPWY — Dip Doundou Guiss",
    client: "OBIITY",
    year: "2024",
    category: "3D · Clip Vidéo · Animation",
    tags: ["3D", "Animation", "Clip Vidéo", "Musique", "Storytelling Visuel"],
    description:
      "Création du clip vidéo animé pour le titre puissant WNPWY de Dip Doundou Guiss. Un travail de narration visuelle conçu pour capturer l'intensité et l'émotion véhiculées par la musique, avec des éléments 3D immersifs qui épousent chaque nuance sonore de la track.",
    context:
      "Ce clip représente la rencontre entre la musique africaine contemporaine et l'animation 3D de haute qualité. Les visuels sont conçus pour amplifier l'impact émotionnel de chaque mesure, créant une expérience audiovisuelle totale où image et son ne font qu'un.",
    objectives: [
      "Capturer l'intensité et l'émotion du titre WNPWY",
      "Créer une narration visuelle immersive en 3D",
      "Synchroniser parfaitement image et musique",
      "Livrer un clip à hauteur des standards internationaux",
    ],
    heroImage: "/WNPWY - DIP DOUNDOU GUISS.JPG",
    gallery: [
      { src: "/WNPWY - DIP DOUNDOU GUISS.JPG", alt: "WNPWY — Dip Doundou Guiss" },
      { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=2800,h=1577,fit=crop/b2ne8m116DM5kp91/img_3710-LvLTva10JDIDRRJI.JPG", alt: "WNPWY — image 1" },
      { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=531,fit=crop/b2ne8m116DM5kp91/img_3700-hT1L0jomuE65swtz.JPG", alt: "WNPWY — image 2" },
      { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=512,fit=crop/b2ne8m116DM5kp91/img_3705-m99KmkQ1dASRerdM.JPG", alt: "WNPWY — image 3" },
    ],
    videos: [{ type: "youtube", id: "k2zen1OyUWs" }],
  },
  {
    id: 18,
    slug: "xeer",
    title: "XÉÉR",
    client: "OBIITY",
    year: "2023",
    category: "Vidéo · Court Métrage · Sensibilisation",
    tags: ["Vidéo", "Court Métrage", "Sensibilisation", "Accessibilité", "Handicap Visuel"],
    description:
      "Vidéo de sensibilisation sur les dangers invisibles des objets négligemment abandonnés sur les routes, particulièrement pour les personnes malvoyantes. Le récit suit une personne aveugle qui rencontre accidentellement un obstacle ignoré par les autres passants.",
    context:
      "XÉÉR questionne notre rapport aux autres et notre sens de la responsabilité dans l'espace public. Ce projet à forte dimension sociale met en lumière les dangers quotidiens que certaines personnes vulnérables affrontent dans des espaces pourtant partagés par tous.",
    objectives: [
      "Sensibiliser aux dangers invisibles pour les personnes malvoyantes",
      "Promouvoir la responsabilité citoyenne dans l'espace public",
      "Créer une émotion forte à travers une narration sobre et percutante",
      "Valoriser l'inclusion et l'accessibilité urbaine",
    ],
    heroImage: "/XÉÉR.png",
    gallery: [],
    videos: [{ type: "youtube", id: "llBNrcEFQK0" }],
  },
  {
    id: 19,
    slug: "corniche",
    title: "CORNICHE",
    client: "OBIITY",
    year: "2023",
    category: "Vidéo · Documentaire · Sport",
    tags: ["Vidéo", "Documentaire", "Sport", "Nature", "Dakar"],
    description:
      "La Corniche de Dakar est un espace emblématique où le sport et la nature se rencontrent. Ce documentaire vidéo capture l'énergie des athlètes, la beauté du lieu au lever et au coucher du soleil, et célèbre le lien profond entre l'être humain et son environnement naturel.",
    context:
      "Lieu iconique de Dakar, la Corniche réunit quotidiennement coureurs, sportifs et amoureux du bien-être dans un cadre naturel exceptionnel face à l'Atlantique. Ce projet documente la vitalité de cet espace unique et son rôle dans la vie sociale et sportive dakaroise.",
    objectives: [
      "Documenter la vitalité unique de la Corniche de Dakar",
      "Capturer l'énergie des athlètes et la beauté des lieux",
      "Célébrer le lien entre sport, nature et communauté",
      "Produire un documentaire esthétique et émotionnel",
    ],
    heroImage: "/CORNICHE.png",
    gallery: [
      { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,h=1080,fit=crop/b2ne8m116DM5kp91/capture-daa-c-cran-82-ExGa8jUy4cbVJ6Wt.png", alt: "Corniche Dakar — panorama" },
      { src: CDN + "capture-daa-c-cran-81-VzBiX28drYnIFeWq.png", alt: "Corniche Dakar — athlètes" },
      { src: CDN + "capture-daa-c-cran-78-j9tIT3dUiPy6ZFcG.png", alt: "Corniche Dakar — nature" },
    ],
    videos: [{ type: "youtube", id: "gFLxK7sDeLA" }],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const idx = projects.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? projects[idx - 1] : null,
    next: idx < projects.length - 1 ? projects[idx + 1] : null,
  };
}
