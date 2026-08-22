export interface ProjectVideo {
  type: 'youtube' | 'vimeo' | 'local';
  id?: string;
  src?: string;
  poster?: string;
  centered?: boolean;
  compact?: boolean;
}

export interface ProjectImage {
  src: string;
  alt: string;
  objectPosition?: string;
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
  heroObjectPosition?: string;
  mobileHeroObjectPosition?: string;
  gallery: ProjectImage[];
  galleryVariant?: 'masonry' | 'showcase' | 'editorial';
  galleryTitle?: string;
  mobileGalleryOrder?: number[];
  videos?: ProjectVideo[];
}

const CDN = "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/b2ne8m116DM5kp91/";

export const projects: Project[] = [
  {
    id: 24,
    slug: "signal",
    title: "SIGNAL",
    client: "OBIITY",
    year: "2026",
    category: "IA Générative · Animation 3D · VFX · Court Métrage",
    tags: ["Seedance", "IA Générative", "Prompt Engineering", "VFX", "3D", "Animation 3D", "Direction Artistique"],
    description:
      "SIGNAL est un court-métrage d'animation 3D de 3 minutes, entièrement conçu et réalisé sous la direction artistique Obiity, mêlant un style de rendu cristallin à facettes (« gem-cut » low-poly) à un éclairage bicolore chaud/froid inspiré du cinéma d'animation contemporain.\n\nDeux inconnus se croisent trois fois dans une même nuit sans jamais échanger un mot. Leurs trajectoires s'orbitent sans le savoir, jusqu'à un toit-terrasse où leurs mains, presque jointes, font basculer le film dans une séquence d'illusion cosmique — le seul contact du film, mais seulement dans l'imaginaire. Retour brutal à la réalité : rien n'est confirmé. Le film se termine à l'aube, sur un carnet ouvert où l'un des deux personnages a dessiné ce qu'elle n'a jamais osé dire.",
    context:
      "SIGNAL explore la synchronicité et le non-dit à travers une mise en scène cinématographique soignée — travellings, séquence en apesanteur — et une direction artistique cohérente du personnage à l'environnement.",
    objectives: [
      "Explorer la synchronicité et le non-dit à travers un storytelling visuel poétique",
      "Créer un style de rendu cristallin à facettes (gem-cut low-poly) unique",
      "Concevoir un éclairage bicolore chaud/froid cinématique et une séquence en apesanteur",
      "Fusionner IA générative, Prompt Engineering technique, VFX et animation 3D",
    ],
    heroImage: "/Signal10.png",
    heroObjectPosition: "center center",
    galleryVariant: "editorial",
    gallery: [
      { src: "/Signal1.png", alt: "SIGNAL — Plan 1" },
      { src: "/Signal7.png", alt: "SIGNAL — Plan 7" },
      { src: "/Signal2.png", alt: "SIGNAL — Plan 2" },
      { src: "/Signal4.png", alt: "SIGNAL — Plan 4" },
      { src: "/Signal5.png", alt: "SIGNAL — Plan 5" },
      { src: "/Signal3.png", alt: "SIGNAL — Plan 3" },
      { src: "/Signal8.png", alt: "SIGNAL — Plan 8" },
      { src: "/Signal6.png", alt: "SIGNAL — Plan 6" },
      { src: "/Signal9.png", alt: "SIGNAL — Plan 9" },
      { src: "/Signal10.png", alt: "SIGNAL — Plan 10" },
      { src: "/Signal12.png", alt: "SIGNAL — Plan 12" },
      { src: "/Signal11.png", alt: "SIGNAL — Plan 11" },
      { src: "/Signal13.png", alt: "SIGNAL — Plan 13" },
      { src: "/Signal14.png", alt: "SIGNAL — Plan 14" },
      { src: "/Signal15.png", alt: "SIGNAL — Plan 15" },
    ],
    videos: [{ type: 'local', src: '/signal.mp4?v=1', poster: '/poster-signal.jpg', centered: true }],
  },
  {
    id: 22,
    slug: "dream",
    title: "DREAM",
    client: "OBIITY",
    year: "2026",
    category: "IA Générative · Court Métrage · VFX",
    tags: ["IA Générative", "IA", "Prompt Engineering", "VFX", "Simulation Volumétrique", "Cinéma Digital"],
    description:
      "DREAM est un court-métrage expérimental explorant la mémoire, la perte et le déni à travers une métaphore visuelle : l'anti-gravité comme état de suspension psychique.\n\nLe film suit un homme assis paisiblement sur un nuage, quelque part entre ciel et souvenir. Autour de lui, des objets familiers — une chaise de bureau, un téléphone qui sonne, une horloge sans aiguilles — se désintègrent lentement en particules de fumée, comme autant de repères qui lui échappent. Le ciel change de teinte sans logique météorologique, suivant plutôt une logique émotionnelle. Puis, sans prévenir, le nuage commence à descendre — révélant que ce moment suspendu n'était jamais une pause, mais une chute déjà entamée.",
    context:
      "Pensé comme un exercice de direction artistique et de VFX narratif, le projet combine cinématographie de haut niveau et un travail de simulation volumétrique (fumée, particules, dissolution) pour construire une expérience à la fois onirique et inconfortable.",
    objectives: [
      "Explorer la mémoire, la perte et le déni à travers la métaphore visuelle de l'anti-gravité",
      "Développer une cinématographie de haut niveau",
      "Concevoir un travail de simulation volumétrique (fumée, particules, dissolution)",
      "Fusionner IA générative, Prompt Engineering et VFX narratifs",
    ],
    heroImage: "/L'homme qui a peur de tombe2.png",
    heroObjectPosition: "center center",
    galleryVariant: "editorial",
    gallery: [
      { src: "/L'homme qui a peur de tombe1.png", alt: "DREAM — Visuel 1" },
      { src: "/L'homme qui a peur de tombe2.png", alt: "DREAM — Visuel 2" },
      { src: "/L'homme qui a peur de tombe3.png", alt: "L'Homme qui a Peur de Tomber — Plan IA 3" },
      { src: "/L'homme qui a peur de tombe4.png", alt: "L'Homme qui a Peur de Tomber — Plan IA 4" },
      { src: "/L'homme qui a peur de tombe5.png", alt: "L'Homme qui a Peur de Tomber — Plan IA 5" },
      { src: "/L'homme qui a peur de tombe6.png", alt: "L'Homme qui a Peur de Tomber — Plan IA 6" },
    ],
    videos: [{ type: 'local', src: '/lhomme-qui-a-peur-de-tomber.mp4?v=1' }],
  },
  {
    id: 21,
    slug: "intro-damel",
    title: "INTRO DAMEL",
    client: "DAMEL STUDIO",
    year: "2026",
    category: "IA Générative · Animation IA · VFX · Cinéma Digital",
    tags: ["Kling AI", "IA Générative", "Prompt Engineering", "Creative AI", "VFX", "Cinéma Digital"],
    description:
      "INTRO DAMEL est une création cinématique réalisée grâce à l'Intelligence Artificielle générative (Kling AI), mettant en scène Lat Dior, figure héroïque de la résistance sénégalaise, chevauchant son légendaire destrier Malaw dans un univers visuel cinématique saisissant.",
    context:
      "Ce projet explore la réinvention des récits historiques et du patrimoine sénégalais à travers la puissance des outils de génération vidéo IA (Kling AI). En combinant prompt engineering technique, direction artistique soignée et compositing VFX, le film illustre la force, la sérénité et le destin d'un guerrier légendaire.",
    objectives: [
      "Réinventer la figure historique de Lat Dior et son cheval Malaw grâce à Kling AI et l'IA générative",
      "Développer un prompt engineering poussé pour obtenir une cohérence visuelle et cinématique",
      "Sublimer le patrimoine historique africain à travers les nouvelles technologies numériques",
      "Intégrer des effets visuels (VFX) et un étalonnage cinématique sur une base vidéo générée par IA",
    ],
    heroImage: "/LAT-DIOR1.png",
    gallery: [],
    videos: [{ type: 'local', src: '/LAT DIOR.mp4?v=3' }],
  },
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
    heroImage: "/airton-cover.jpg",
    gallery: [
      { src: "/airton-cover.jpg",     alt: "Publicité Airton — vue principale" },
      { src: "/airton-gallery-1.jpg", alt: "Publicité Airton — rendu 2" },
      { src: "/airton-gallery-2.jpg", alt: "Publicité Airton — rendu 3" },
    ],
    videos: [{ type: 'local', src: '/airton-video.mp4?v=3' }],
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
      { src: "/Lancer Javelot.png",  alt: "Lancer Javelot VR — vue principale" },
      { src: "/Lancer Javelot1.png", alt: "Lancer Javelot VR — gameplay 1" },
      { src: "/Lancer Javelot2.png", alt: "Lancer Javelot VR — gameplay 2" },
      { src: "/Lancer Javelot3.png", alt: "Lancer Javelot VR — gameplay 3" },
    ],
    videos: [{ type: 'local', src: '/lancer-javelot.mp4?v=3' }],
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
      { src: "/PLAN ARCHI 3D.png",  alt: "Archi 3D — plan principal" },
      { src: "/PLAN ARCHI 3D2.png", alt: "Archi 3D — visualisation 2" },
      { src: "/PLAN ARCHI 3D1.png", alt: "Archi 3D — visualisation 1" },
    ],
    mobileGalleryOrder: [0, 2, 1],
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
    heroImage: "/devenir-agri-entrepreneur.jpg",
    heroObjectPosition: 'center 20%',
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
    category: "XR / VR · Game Design · EdTech · Gamification",
    tags: ["XR", "VR", "Game Design", "EdTech", "Gamification", "Formation Professionnelle", "Mécatronique"],
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
      { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop,gravity=top/b2ne8m116DM5kp91/img_4588-WZxw3KKIWXFNXNzm.JPG", alt: "BoostGI Jobs — formation VR", objectPosition: 'center 20%' },
      { src: CDN + "dsc08841-NFlBIVPGp3XSogIc.JPG", alt: "BoostGI Jobs — participants" },
      { src: CDN + "dsc08877-uk6plZQ2mSTPCYU5.JPG", alt: "BoostGI Jobs — atelier mécatronique" },
      { src: CDN + "screenshot-139-gfyR6jhb2UcWkma3.png", alt: "BoostGI Jobs — interface" },
      { src: "/BOOSTGI-JOBS2.png", alt: "BoostGI Jobs — session 2" },
      { src: "/BOOSTGI-JOBS1.png", alt: "BoostGI Jobs — session 1" },
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
    heroObjectPosition: 'center 25%',
    mobileHeroObjectPosition: 'left center',
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
    videos: [{ type: 'local', src: '/error-404.mp4?v=3' }],
  },
  {
    id: 9,
    slug: "king-of-arena",
    title: "KING OF ARENA",
    client: "DAMEL STUDIO",
    year: "2025",
    category: "Character Design · Modélisation 3D · Gaming",
    tags: ["3D", "Character Design", "Modélisation", "Texturing", "Rigging", "Gaming Africain"],
    description:
      "Modélisation et design de plus de 60 personnages 3D inspirés de la lutte sénégalaise pour le jeu vidéo KING OF ARENA. Chaque lutteur est conçu avec une attention minutieuse aux traditions vestimentaires, aux silhouettes caractéristiques et à l'esthétique culturelle du Sénégal — pour un univers gaming authentique, visuellement percutant et artistiquement ambitieux.",
    context:
      "King of Arena est ancré dans la tradition de la lutte sénégalaise, sport national emblématique. La phase de character modeling a nécessité une recherche culturelle approfondie : costumes traditionnels, morphologies athlétiques, amulettes et parures propres aux lutteurs, architecture des arènes. Chaque personnage est un hommage visuel à la richesse de cette culture sportive africaine.",
    objectives: [
      "Créer plus de 60 personnages 3D uniques, culturellement authentiques",
      "Développer des silhouettes distinctives et mémorables pour chaque lutteur",
      "Texturer et rigger chaque personnage pour une intégration fluide en jeu",
      "Construire une direction artistique gaming ancrée dans l'univers de la lutte sénégalaise",
    ],
    heroImage: "/KING OF ARENA V2.png",
    gallery: [
      { src: "/KING OF ARENA 1.png", alt: "King of Arena — personnage 1" },
      { src: "/KING OF ARENA 2.png", alt: "King of Arena — personnage 2" },
      { src: "/KING OF ARENA 3.png", alt: "King of Arena — personnage 3" },
    ],
    galleryVariant: 'showcase',
    galleryTitle: '+60 lutteurs modélisés',
  },
  {
    id: 20,
    slug: "endev-acces-financement",
    title: "Accès au financement aux producteurs de FA",
    client: "ENDEV",
    year: "2025",
    category: "Motion Design · Vidéo · Communication Visuelle",
    tags: ["Motion Design", "Vidéo", "Communication Visuelle", "Institutionnel", "Impact Social"],
    description:
      "Conception et réalisation d'une vidéo de présentation en Motion Design pour ENDEV, mettant en lumière le programme d'accès au financement destiné aux producteurs de Filières Agricoles. La vidéo articule résultats chiffrés, actions terrain et impacts du programme à travers une narration visuelle dynamique et une direction artistique soignée.",
    context:
      "Ce projet illustre comment le Motion Design peut transformer des données institutionnelles complexes en une communication visuelle claire, engageante et impactante. La vidéo s'adresse aux partenaires, bailleurs et bénéficiaires du programme ENDEV, avec un message fort sur les retombées concrètes de l'initiative d'accès au financement agricole.",
    objectives: [
      "Traduire les résultats du programme en narration visuelle forte via le Motion Design",
      "Mettre en valeur les impacts concrets sur les producteurs de Filières Agricoles",
      "Créer un outil de communication institutionnel moderne et premium",
      "Assurer une diffusion claire et percutante des données et résultats du programme",
    ],
    heroImage: "/acces-financement-producteurs.png",
    gallery: [],
    videos: [{ type: 'local', src: '/acces-financement-producteurs.mp4?v=3' }],
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
      { src: "/FULANI4.png", alt: "FULANI — scène 4" },
      { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200/b2ne8m116DM5kp91/cover-2-ExAwwWfOBcoD1xDf.png", alt: "FULANI — guerrière africaine" },
      { src: "/FULANI5.png", alt: "FULANI — scène 5" },
      { src: "/FULANI1.png", alt: "FULANI — scène 1" },
      { src: "/FULANI3.png", alt: "FULANI — scène 3" },
      { src: "/FULANI2.png", alt: "FULANI — scène 2" },
    ],
    galleryVariant: 'editorial',
    mobileGalleryOrder: [1, 0, 2, 3, 4, 5],
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
      { src: "/Last Loadout 1.png", alt: "Last Loadout — image 1" },
      { src: "/Last Loadout 2.png", alt: "Last Loadout — image 2" },
      { src: "/Last Loadout 3.png", alt: "Last Loadout — image 3" },
      { src: "/Last Loadout 4.png", alt: "Last Loadout — image 4" },
      { src: "/Last Loadout 5.png", alt: "Last Loadout — image 5" },
      { src: "/Last Loadout 6.png", alt: "Last Loadout — image 6" },
      { src: "/Last Loadout 7.png", alt: "Last Loadout — image 7" },
      { src: CDN + "capture-daa-c-cran-32-D11xFXlmll1o1hXe.png", alt: "Last Loadout — opération offshore 1" },
      { src: CDN + "capture-daa-c-cran-27-tz5vlNfJacgR1xx1.png", alt: "Last Loadout — opération offshore 2" },
    ],
    videos: [{ type: 'local', src: '/last-loadout-surf-scop.mp4?v=3' }],
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
    videos: [{ type: 'local', src: '/clean-up-day.mp4?v=3' }],
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
    galleryVariant: 'editorial',
    gallery: [
      { src: CDN + "_mg_2494-DTApy5jSPILaM98K.jpg", alt: "Saipem Training Camp — cérémonie 1" },
      { src: CDN + "_mg_2588-a5oeMrHpP214Tr66.jpg", alt: "Saipem Training Camp — cérémonie 2" },
      { src: "/SAIPEM TRAINING CAMP 1.jpg", alt: "Saipem Training Camp — image 1" },
      { src: "/SAIPEM TRAINING CAMP 2.jpg", alt: "Saipem Training Camp — image 2" },
      { src: "/SAIPEM TRAINING CAMP 3.jpg", alt: "Saipem Training Camp — image 3" },
      { src: "/SAIPEM TRAINING CAMP 4.jpg", alt: "Saipem Training Camp — image 4" },
    ],
  },
  {
    id: 15,
    slug: "femmes-sous-un-baobab",
    title: "FEMMES SOUS UN BAOBAB",
    client: "UNICEF · Maison de Podcast",
    year: "2023",
    category: "Vidéo · Documentaire · Impact Social",
    tags: ["Vidéo Documentaire", "UNICEF", "Femmes", "Empowerment"],
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
    videos: [{ type: 'local', src: '/iPhone.mp4?v=3' }],
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
      { type: 'local', src: '/dolce-fruiti.mp4?v=3' },
      { type: 'local', src: '/dolce-fruiti-v2.mp4?v=3' },
    ],
  },
  {
    id: 28,
    slug: "ton-bon-cadeau",
    title: "Ton Bon Cadeau",
    client: "ETHNI BEAUTY MARKET",
    year: "2026",
    category: "IA Générative · Motion Design · Vidéo · Campaign",
    tags: ["IA Générative", "IA", "Creative AI", "Graphic Design", "Motion Design", "Vidéo", "Branding", "Campagne"],
    description:
      "Conception graphique, vidéo promotionnelle et campagne 'Ton Bon Cadeau' pour Ethni Beauty Market. Un concept visuel élégant et festif développé pour les cartes cadeaux et chèques de fidélité, offrant une expérience d'achat haut de gamme à la clientèle.",
    context:
      "Création d'un dispositif visuel d'engagement client combinant identité de marque raffinée, visuels sociaux, vidéo explicative (40s) et cartes cadeaux personnalisées.",
    objectives: [
      "Concevoir le design premium et la vidéo promotionnelle des cartes cadeaux 'Ton Bon Cadeau'",
      "Élaborer une campagne visuelle et vidéo engageante pour les périodes de fêtes et célébrations",
      "Valoriser l'expérience client et la fidélisation chez Ethni Beauty Market",
      "Décliner les contenus pour le site web, les newsletters et les réseaux sociaux",
    ],
    heroImage: "/EBM/ton-bon-cadeau-cover.jpg",
    heroObjectPosition: "center center",
    galleryVariant: "editorial",
    gallery: [],
    videos: [{ type: 'local', src: '/EBM/ebm-ugc-s2.mp4', poster: '/EBM/poster-ebm-ugc.jpg', centered: true }],
  },
  {
    id: 23,
    slug: "medicube-pads-deep-vita-c",
    title: "Medicube Pads Deep Vita C",
    client: "ETHNI BEAUTY MARKET",
    year: "2026",
    category: "IA Générative · Motion Design · Vidéo · Skincare",
    tags: ["IA Générative", "IA", "Creative AI", "Motion Design", "Vidéo", "Publicité", "UGC", "Skincare"],
    description:
      "Campagne de lancement et production vidéo UGC pour les disques exfoliants et illuminateurs Medicube Deep Vita C Pads chez Ethni Beauty Market. Une présentation en 5 étapes clés mettant en avant les 3 actifs phares (Eau Vitaminée, Dérivé de Vitamine C, Niacinamide 2%) pour lisser le grain de peau et raviver l'éclat du teint.",
    context:
      "Conçu pour la communication digitale d'Ethni Beauty Market, ce projet combine une direction artistique fraîche, un tutoriel étape par étape (exfoliation, hydratation, éclat) et des vidéos au format vertical Reel/UGC optimisées pour TikTok et Instagram.",
    objectives: [
      "Présenter le rituel en 5 étapes pour un grain de peau affiné et un teint lumineux",
      "Valoriser la formulation aux 3 actifs (Vitamine C, Niacinamide 2%, Eau Vitaminée)",
      "Produire des vidéos format vertical UGC/Reel captivantes pour les réseaux sociaux",
      "Stimuler la conversion e-commerce sur les plateformes de vente Ethni Beauty Market",
    ],
    heroImage: "/EBM/Couverture EBM.png",
    heroObjectPosition: "center center",
    galleryVariant: "editorial",
    gallery: [
      { src: "/EBM/C1.png", alt: "Medicube Pads Deep Vita C — Étape 01/05" },
      { src: "/EBM/C2.png", alt: "Medicube Pads Deep Vita C — Étape 02/05 (3 actifs)" },
      { src: "/EBM/C3.png", alt: "Medicube Pads Deep Vita C — Étape 03/05 (4 actions)" },
      { src: "/EBM/C4.png", alt: "Medicube Pads Deep Vita C — Étape 04/05 (Utilisation)" },
      { src: "/EBM/C5.png", alt: "Medicube Pads Deep Vita C — Étape 05/05 (Résultat)" },
      { src: "/EBM/3.jpeg", alt: "Medicube Pads Deep Vita C — Flacon 150ml" },
      { src: "/EBM/4.jpeg", alt: "Medicube Pads Deep Vita C — Vue produit" },
      { src: "/EBM/V1-2.png", alt: "Medicube Pads Deep Vita C — Pourquoi des pads ?" },
    ],
  },
  {
    id: 25,
    slug: "medicube-triple-collagen-serum",
    title: "Medicube Triple Collagen Serum",
    client: "ETHNI BEAUTY MARKET",
    year: "2026",
    category: "IA Générative · Motion Design · Vidéo · Skincare",
    tags: ["IA Générative", "IA", "Creative AI", "Motion Design", "Vidéo", "Publicité", "Branding", "Skincare"],
    description:
      "Campagne visuelle et Reel publicitaire pour le Sérum Triple Collagène 4.0 (55ml) de Medicube chez Ethni Beauty Market. Une présentation luxueuse axée sur l'hydratation profonde, la fermeté et la restauration de l'élasticité cutanée grâce à sa formule enrichie en collagène hydrolysé et atélocollagène.",
    context:
      "Création de visuels produit photoréalistes et d'une vidéo Reel dynamique illustrant l'absorption rapide et les bienfaits repulpants du sérum pour la communauté Ethni Beauty Market.",
    objectives: [
      "Mettre en valeur le Sérum Triple Collagène 4.0 de Medicube",
      "Illustrer scientifiquement l'action du collagène hydrolysé et de l'atélocollagène",
      "Produire une vidéo Reel fluide et engageante pour Instagram et TikTok",
      "Mettre en place une identité visuelle élégante et premium pour le soin anti-âge",
    ],
    heroImage: "/EBM/2.jpeg",
    heroObjectPosition: "center center",
    galleryVariant: "editorial",
    gallery: [
      { src: "/EBM/1.jpeg", alt: "Medicube Triple Collagen Serum — Flacon 55ml" },
      { src: "/EBM/2.jpeg", alt: "Medicube Triple Collagen Serum 4.0 — Campagne" },
    ],
  },
  {
    id: 26,
    slug: "medicube-deep-vita-c-ampoule",
    title: "Medicube Deep Vita C Ampoule",
    client: "ETHNI BEAUTY MARKET",
    year: "2026",
    category: "IA Générative · Motion Design · Vidéo · Skincare",
    tags: ["IA Générative", "IA", "Creative AI", "Motion Design", "Vidéo", "Publicité", "Vitamine C", "Skincare"],
    description:
      "Production visuelle et spot publicitaire pour l'Ampoule Medicube Deep Vita C (14.5% Vitamine C pure & Glutathion) distribuée par Ethni Beauty Market. Un focus ciblé sur l'estompage des taches pigmentaires, l'unification du teint et l'action antioxydante concentrée.",
    context:
      "Conception d'une campagne visuelle percutante mettant en relief le haut dosage en Vitamine C (14.5%) et en Glutathion, déclinée en vidéo promotionnelle et visuels e-commerce.",
    objectives: [
      "Sublimer l'Ampoule Deep Vita C 14.5% de Medicube",
      "Expliquer les bénéfices antioxydants et anti-taches du complexe Vitamine C + Glutathion",
      "Créer une capsule vidéo dynamique aux couleurs vitaminées de la gamme",
      "Renforcer la désirabilité du produit sur le marché cosmétique sénégalais",
    ],
    heroImage: "/EBM/5-2.jpeg",
    heroObjectPosition: "center center",
    galleryVariant: "editorial",
    gallery: [],
    videos: [{ type: 'local', src: '/EBM/ebm-v3.mp4', poster: '/EBM/poster-ebm-v3.jpg', centered: true, compact: true }],
  },
  {
    id: 27,
    slug: "sunny-isle-rosemary-mint",
    title: "Sunny Isle Rosemary Mint",
    client: "ETHNI BEAUTY MARKET",
    year: "2026",
    category: "IA Générative · Motion Design · Haircare · E-Commerce",
    tags: ["IA Générative", "IA", "Creative AI", "Motion Design", "Haircare", "Soin Capillaire", "E-Commerce"],
    description:
      "Direction artistique, visuels promotionnels et campagne digitale pour la gamme capillaire d'exception Sunny Isle Rosemary Mint chez Ethni Beauty Market. Une mise en avant rafraîchissante et organique de l'huile de romarin et de la menthe poivrée pour la pousse, le soin et la fortification des cheveux.",
    context:
      "Création d'un univers esthétique naturel et stimulant pour valoriser les vertus fortifiantes de la menthe et du romarin sur les cheveux texturés et bouclés.",
    objectives: [
      "Créer un univers visuel frais et organique pour Sunny Isle Rosemary Mint",
      "Promouvoir les soins capillaires fortifiants à base d'huiles naturelles",
      "Développer des visuels attractifs pour le catalogue et les réseaux sociaux d'Ethni Beauty Market",
      "Mettre en avant l'expérience sensorielle de la menthe et du romarin",
    ],
    heroImage: "/EBM/sunny-isle-cover.png",
    heroObjectPosition: "center center",
    galleryVariant: "editorial",
    gallery: [],
    videos: [{ type: 'local', src: '/EBM/ebm-reel.mp4', poster: '/EBM/poster-ebm-reel.jpg', centered: true, compact: true }],
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
    heroImage: "/wnpwy-cover.jpg",
    heroObjectPosition: 'center 20%',
    mobileHeroObjectPosition: 'left center',
    gallery: [
      { src: "/wnpwy-cover.jpg", alt: "WNPWY — Dip Doundou Guiss" },
      { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=2800,h=1577,fit=crop/b2ne8m116DM5kp91/img_3710-LvLTva10JDIDRRJI.JPG", alt: "WNPWY — image 1" },
      { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=531,fit=crop/b2ne8m116DM5kp91/img_3700-hT1L0jomuE65swtz.JPG", alt: "WNPWY — image 2" },
      { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=512,fit=crop/b2ne8m116DM5kp91/img_3705-m99KmkQ1dASRerdM.JPG", alt: "WNPWY — image 3" },
    ],
    videos: [{ type: 'local', src: '/WNPWY.mov?v=3' }],
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
    heroImage: "/xeer.png",
    gallery: [],
    videos: [{ type: 'local', src: '/xeer.mp4?v=3' }],
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
    videos: [{ type: 'local', src: '/corniche.mov?v=3' }],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(
    (p) =>
      p.slug === slug ||
      ((slug === 'ebm' || slug === 'ethni-beauty-market') && p.slug === 'medicube-pads-deep-vita-c') ||
      (slug === 'lhomme-qui-a-peur-de-tomber' && p.slug === 'dream')
  );
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const idx = projects.findIndex(
    (p) =>
      p.slug === slug ||
      ((slug === 'ebm' || slug === 'ethni-beauty-market') && p.slug === 'medicube-pads-deep-vita-c') ||
      (slug === 'lhomme-qui-a-peur-de-tomber' && p.slug === 'dream')
  );
  return {
    prev: idx > 0 ? projects[idx - 1] : null,
    next: idx < projects.length - 1 ? projects[idx + 1] : null,
  };
}
