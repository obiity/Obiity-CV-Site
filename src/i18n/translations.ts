export type Lang = 'fr' | 'en';

export interface Translations {
  nav: {
    about: string; services: string; portfolio: string;
    marketplace: string; software: string; experience: string;
    contact: string; collaborate: string;
  };
  hero: {
    eyebrow: string; line1: string;
    line2Prefix: string; line2Gradient: string;
    subtitle: string; cta1: string; cta2: string; cta3: string; scroll: string;
  };
  about: {
    titleBefore: string; titleGradient: string;
    bio: string;
    stat1Label: string; stat2Label: string; stat3Label: string;
    location: string; availability: string;
    role: string; freelance: string; missions: string; remote: string;
  };
  services: {
    titleBefore: string; titleGradient: string;
    items: { title: string; desc: string }[];
  };
  portfolio: {
    titleBefore: string; titleGradient: string;
    explore: string; otherCount: string; otherLabel: string;
  };
  store: {
    label: string; title: string; subtitle: string; topCta: string;
    featureTitle: string; featureText: string; visitCta: string;
    ue5: string; pbr: string; lods: string; priceFrom: string;
  };
  tech: {
    titleBefore: string; titleGradient: string; aiTools: string;
  };
  cv: {
    titleBefore: string; titleGradient: string;
    expTitle: string; skillsTitle: string; download: string; present: string;
    roles: string[];
    skillNames: string[];
  };
  contact: {
    eyebrow: string; titleBefore: string; titleGradient: string;
    tagline1: string; tagline2: string;
    locationLabel: string; phoneLabel: string; emailLabel: string;
    findMe: string; formTitle: string; badge: string;
    nameLabel: string; emailFieldLabel: string;
    subjectLabel: string; messageLabel: string;
    namePlaceholder: string; emailPlaceholder: string;
    subjectPlaceholder: string; messagePlaceholder: string;
    send: string; sending: string;
    successTitle: string; successMsg: string;
    errorMsg: string; errorEmail: string;
    footerPrefix: string; footerSuffix: string;
  };
  collab: {
    label: string; title: string;
    personalInfo: string; professionalInfo: string;
    budget: string; budgetRange: string;
    budgetCustomLabel: string; budgetCustomPlaceholder: string;
    collabLevel: string;
    nameLabel: string; emailLabel: string; phoneLabel: string;
    companyLabel: string; websiteLabel: string;
    namePlaceholder: string; emailPlaceholder: string;
    phonePlaceholder: string; companyPlaceholder: string; websitePlaceholder: string;
    confirmText: string; submit: string; submitting: string;
    successTitle: string; successMsg: string;
    errorTitle: string; errorMsg: string;
    close: string; retry: string; optional: string; responseTime: string;
    budgetOptions: { value: string; label: string }[];
    collabTypes: { value: string; label: string }[];
    errName: string; errEmail: string; errEmailInvalid: string;
    errCollabType: string; errConfirmed: string;
  };
  project: {
    back: string; madeBy: string; client: string;
    year: string; category: string; technologies: string;
    presentation: string; context: string; objectives: string;
    gallery: string; video: string;
    prevProject: string; nextProject: string;
    explore: string; notFound: string; backToPortfolio: string;
  };
}

export const fr: Translations = {
  nav: {
    about: 'À Propos', services: 'Services', portfolio: 'Portfolio',
    marketplace: 'Marketplace', software: 'Logiciels', experience: 'Expériences',
    contact: 'Contact', collaborate: 'Collaborer',
  },
  hero: {
    eyebrow: 'Portfolio · Obiity · Dakar',
    line1: 'Artiste hybride',
    line2Prefix: '& ', line2Gradient: 'Développeur Créatif',
    subtitle: "À l'intersection de la 3D, des VFX, des technologies immersives, de l'IA et des expériences numériques interactives.",
    cta1: 'Voir les projets', cta2: 'Télécharger le CV', cta3: 'Me contacter',
    scroll: 'Défiler',
  },
  about: {
    titleBefore: 'À ', titleGradient: 'Propos',
    bio: "« Spécialisé dans la conception d'expériences immersives, je développe des projets qui combinent 3D, XR, vidéo et intelligence artificielle. Mon travail s'appuie sur la direction artistique, les technologies émergentes et la narration visuelle pour créer des univers interactifs, innovants et engageants, conçus pour offrir une expérience digitale forte et mémorable. »",
    stat1Label: "Années d'expérience", stat2Label: 'Projets réalisés', stat3Label: 'Références',
    location: 'Basé à Dakar', availability: 'Disponible H24',
    role: 'Artiste 3D / Dev Créatif',
    freelance: 'Disponible pour freelance & consulting',
    missions: 'Ouvert aux missions courtes ou longues durées',
    remote: 'Travail à distance ou hybride',
  },
  services: {
    titleBefore: 'Expertise & ', titleGradient: 'Services',
    items: [
      { title: '3D',                   desc: 'Modélisation, texturing, rendu photoréaliste' },
      { title: 'VFX',                  desc: 'Compositing, simulations, effets spéciaux' },
      { title: 'Motion Design',        desc: 'Animation graphique, motion branding' },
      { title: 'Montage Vidéo',        desc: 'Post-production, colour grading' },
      { title: 'VR / AR / MR',         desc: 'Expériences immersives temps réel' },
      { title: 'IA Générative',        desc: 'Creative AI, génération visuelle augmentée' },
      { title: 'Développement Web',    desc: 'Sites interactifs, Three.js, WebGL' },
      { title: 'Serious & E-Learning', desc: 'Jeux pédagogiques, simulations et modules de formation' },
      { title: 'Design Graphique',     desc: 'Identité visuelle, UI/UX, print & digital' },
    ],
  },
  portfolio: {
    titleBefore: 'Créations ', titleGradient: '& Projets',
    explore: 'Explorer le projet', otherCount: '+150', otherLabel: 'Projets réalisés',
  },
  store: {
    label: 'Marketplace Officielle · FAB',
    title: 'Mes Assets 3D',
    subtitle: "Modèles 3D africains authentiques — props, personnages et véhicules inspirés de la culture sénégalaise, optimisés pour Unreal Engine 5 et Unity.",
    topCta: 'Accéder à la boutique complète',
    featureTitle: 'Assets 3D africains, game-ready',
    featureText: "Conçus à Dakar, ces assets célèbrent la richesse culturelle africaine tout en répondant aux standards techniques les plus élevés — PBR, LODs, rigging professionnel, prêts pour le temps réel et le cinéma.",
    visitCta: 'VISITER LA BOUTIQUE FAB',
    ue5: 'UE5 Ready', pbr: 'PBR Textures', lods: 'LODs inclus', priceFrom: 'À partir de',
  },
  tech: {
    titleBefore: 'Logiciels & ', titleGradient: 'Technologies', aiTools: 'Outils IA',
  },
  cv: {
    titleBefore: 'Parcours ', titleGradient: '& Compétences',
    expTitle: 'Expériences Professionnelles', skillsTitle: 'Compétences Techniques',
    download: 'Télécharger le CV complet', present: 'Présent',
    roles: ['Directeur Artistique 3D / XR', 'Lead 3D & VFX Artist', 'Monteur vidéo', 'Designer graphique'],
    skillNames: ['Modélisation et animation 3D', 'VFX & Compositing', 'Motion Design', 'Développement web', 'IA Générative'],
  },
  contact: {
    eyebrow: 'Travaillons ensemble', titleBefore: 'Me ', titleGradient: 'Contacter',
    tagline1: 'Prêt à donner vie à vos projets les plus ambitieux ?',
    tagline2: 'Discutons de votre prochaine expérience immersive.',
    locationLabel: 'Localisation', phoneLabel: 'Téléphone', emailLabel: 'Email',
    findMe: 'Retrouvez-moi', formTitle: 'Votre message', badge: 'Réponse sous 24h',
    nameLabel: 'Nom', emailFieldLabel: 'Email', subjectLabel: 'Sujet', messageLabel: 'Message',
    namePlaceholder: 'Votre nom complet', emailPlaceholder: 'votre@email.com',
    subjectPlaceholder: 'Collaboration, projet, question…',
    messagePlaceholder: 'Décrivez votre projet, vos besoins, vos idées…',
    send: 'Envoyer un message', sending: 'Envoi en cours…',
    successTitle: 'Message envoyé !', successMsg: 'Je vous répondrai dans les meilleurs délais.',
    errorMsg: "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou me contacter directement à",
    errorEmail: 'obiity1@gmail.com',
    footerPrefix: '©', footerSuffix: 'Ousmane Biteye · Dakar, Sénégal · Tous droits réservés.',
  },
  collab: {
    label: 'Collaboration', title: 'Démarrons un projet',
    personalInfo: 'Informations personnelles', professionalInfo: 'Informations professionnelles',
    budget: 'Budget estimé', budgetRange: 'Fourchette budgétaire',
    budgetCustomLabel: 'Précisez votre budget', budgetCustomPlaceholder: 'ex : $3,500, à discuter…',
    collabLevel: 'Niveau de collaboration',
    nameLabel: 'Nom & Prénom', emailLabel: 'Email professionnel', phoneLabel: 'Téléphone',
    companyLabel: 'Entreprise / Organisation', websiteLabel: 'Site web / LinkedIn',
    namePlaceholder: 'Votre nom complet', emailPlaceholder: 'votre@email.com',
    phonePlaceholder: '+1 (000) 000-0000', companyPlaceholder: 'Votre entreprise',
    websitePlaceholder: 'https://votre-site.com',
    confirmText: "Je confirme que ces informations sont correctes et que mon projet est sérieux.",
    submit: 'Soumettre mon projet', submitting: 'Envoi en cours…',
    successTitle: 'Demande envoyée !', successMsg: 'Je vous répondrai sous 24–48h. Merci pour votre confiance.',
    errorTitle: 'Une erreur est survenue', errorMsg: 'Veuillez réessayer ou me contacter directement par email.',
    close: 'Fermer', retry: 'Réessayer', optional: 'optionnel',
    responseTime: 'Réponse sous 24–48h pour les demandes complètes',
    budgetOptions: [
      { value: '', label: 'Sélectionner un budget' },
      { value: '< $1,000', label: '< $1,000' },
      { value: '$1,000 – $5,000', label: '$1,000 – $5,000' },
      { value: '$5,000 – $15,000', label: '$5,000 – $15,000' },
      { value: '$15,000 – $50,000', label: '$15,000 – $50,000' },
      { value: '> $50,000', label: '> $50,000' },
      { value: 'custom', label: 'Autre / À discuter' },
    ],
    collabTypes: [
      { value: 'freelance', label: 'Freelance ponctuel' },
      { value: 'partnership', label: 'Partenariat long terme' },
      { value: 'subcontracting', label: 'Sous-traitance' },
      { value: 'cocreation', label: 'Co-création / Startup' },
      { value: 'other', label: 'Autre' },
    ],
    errName: 'Le nom est requis.', errEmail: "L'email est requis.", errEmailInvalid: 'Email invalide.',
    errCollabType: 'Sélectionnez un type.', errConfirmed: 'Vous devez confirmer avant de soumettre.',
  },
  project: {
    back: 'Portfolio', madeBy: 'Réalisé par', client: 'Client',
    year: 'Année', category: 'Catégorie', technologies: 'Technologies',
    presentation: 'Présentation', context: 'Contexte', objectives: 'Objectifs',
    gallery: 'Galerie', video: 'Vidéo',
    prevProject: 'Projet précédent', nextProject: 'Projet suivant',
    explore: 'Explorer le projet', notFound: 'Projet introuvable',
    backToPortfolio: 'Retour au portfolio',
  },
};

export const en: Translations = {
  nav: {
    about: 'About', services: 'Services', portfolio: 'Portfolio',
    marketplace: 'Marketplace', software: 'Software', experience: 'Experience',
    contact: 'Contact', collaborate: 'Collaborate',
  },
  hero: {
    eyebrow: 'Portfolio · Obiity · Dakar',
    line1: 'Hybrid Artist',
    line2Prefix: '& ', line2Gradient: 'Creative Developer',
    subtitle: 'At the intersection of 3D, VFX, immersive technologies, AI and interactive digital experiences.',
    cta1: 'View Projects', cta2: 'Download CV', cta3: 'Contact Me',
    scroll: 'Scroll',
  },
  about: {
    titleBefore: '', titleGradient: 'About',
    bio: '"Specialized in crafting immersive experiences, I develop projects that blend 3D, XR, video and artificial intelligence. My work draws on art direction, emerging technologies and visual storytelling to build interactive, innovative worlds designed to deliver powerful, memorable digital experiences."',
    stat1Label: 'Years of experience', stat2Label: 'Projects delivered', stat3Label: 'References',
    location: 'Based in Dakar', availability: 'Available 24/7',
    role: '3D Artist / Creative Dev',
    freelance: 'Open to freelance & consulting',
    missions: 'Short or long-term engagements',
    remote: 'Remote or hybrid work',
  },
  services: {
    titleBefore: 'Expertise & ', titleGradient: 'Services',
    items: [
      { title: '3D',                   desc: 'Modeling, texturing, photorealistic rendering' },
      { title: 'VFX',                  desc: 'Compositing, simulations, special effects' },
      { title: 'Motion Design',        desc: 'Graphic animation, motion branding' },
      { title: 'Video Editing',        desc: 'Post-production, colour grading' },
      { title: 'VR / AR / MR',         desc: 'Real-time immersive experiences' },
      { title: 'Generative AI',        desc: 'Creative AI, augmented visual generation' },
      { title: 'Web Development',      desc: 'Interactive sites, Three.js, WebGL' },
      { title: 'Serious & E-Learning', desc: 'Educational games, simulations and training modules' },
      { title: 'Graphic Design',       desc: 'Visual identity, UI/UX, print & digital' },
    ],
  },
  portfolio: {
    titleBefore: 'Creations ', titleGradient: '& Projects',
    explore: 'Explore project', otherCount: '+150', otherLabel: 'Projects delivered',
  },
  store: {
    label: 'Official Marketplace · FAB',
    title: 'My 3D Assets',
    subtitle: 'Authentic African 3D models — props, characters and vehicles inspired by Senegalese culture, optimized for Unreal Engine 5 and Unity.',
    topCta: 'Browse the full store',
    featureTitle: 'African 3D assets, game-ready',
    featureText: 'Crafted in Dakar, these assets celebrate the richness of African culture while meeting the highest technical standards — PBR, LODs, professional rigging, ready for real-time and cinematic use.',
    visitCta: 'VISIT THE FAB STORE',
    ue5: 'UE5 Ready', pbr: 'PBR Textures', lods: 'LODs included', priceFrom: 'Starting at',
  },
  tech: {
    titleBefore: 'Software & ', titleGradient: 'Technologies', aiTools: 'AI Tools',
  },
  cv: {
    titleBefore: 'Background ', titleGradient: '& Skills',
    expTitle: 'Professional Experience', skillsTitle: 'Technical Skills',
    download: 'Download full CV', present: 'Present',
    roles: ['3D / XR Art Director', 'Lead 3D & VFX Artist', 'Video Editor', 'Graphic Designer'],
    skillNames: ['3D modeling & animation', 'VFX & Compositing', 'Motion Design', 'Web Development', 'Generative AI'],
  },
  contact: {
    eyebrow: "Let's work together", titleBefore: 'Get in ', titleGradient: 'Touch',
    tagline1: 'Ready to bring your most ambitious projects to life?',
    tagline2: "Let's talk about your next immersive experience.",
    locationLabel: 'Location', phoneLabel: 'Phone', emailLabel: 'Email',
    findMe: 'Find me on', formTitle: 'Your message', badge: 'Reply within 24h',
    nameLabel: 'Name', emailFieldLabel: 'Email', subjectLabel: 'Subject', messageLabel: 'Message',
    namePlaceholder: 'Your full name', emailPlaceholder: 'your@email.com',
    subjectPlaceholder: 'Collaboration, project, inquiry…',
    messagePlaceholder: 'Describe your project, needs, ideas…',
    send: 'Send message', sending: 'Sending…',
    successTitle: 'Message sent!', successMsg: "I'll get back to you as soon as possible.",
    errorMsg: 'An error occurred while sending. Please try again or reach me directly at',
    errorEmail: 'obiity1@gmail.com',
    footerPrefix: '©', footerSuffix: 'Ousmane Biteye · Dakar, Senegal · All rights reserved.',
  },
  collab: {
    label: 'Collaboration', title: "Let's start a project",
    personalInfo: 'Personal information', professionalInfo: 'Professional information',
    budget: 'Estimated budget', budgetRange: 'Budget range',
    budgetCustomLabel: 'Specify your budget', budgetCustomPlaceholder: 'e.g. $3,500, open to discussion…',
    collabLevel: 'Collaboration type',
    nameLabel: 'Full name', emailLabel: 'Professional email', phoneLabel: 'Phone',
    companyLabel: 'Company / Organisation', websiteLabel: 'Website / LinkedIn',
    namePlaceholder: 'Your full name', emailPlaceholder: 'your@email.com',
    phonePlaceholder: '+1 (000) 000-0000', companyPlaceholder: 'Your company',
    websitePlaceholder: 'https://your-site.com',
    confirmText: 'I confirm that this information is accurate and my project is genuine.',
    submit: 'Submit my project', submitting: 'Sending…',
    successTitle: 'Request sent!', successMsg: "I'll reply within 24–48h. Thank you for your trust.",
    errorTitle: 'An error occurred', errorMsg: 'Please try again or contact me directly by email.',
    close: 'Close', retry: 'Try again', optional: 'optional',
    responseTime: 'Response within 24–48h for complete requests',
    budgetOptions: [
      { value: '', label: 'Select a budget' },
      { value: '< $1,000', label: '< $1,000' },
      { value: '$1,000 – $5,000', label: '$1,000 – $5,000' },
      { value: '$5,000 – $15,000', label: '$5,000 – $15,000' },
      { value: '$15,000 – $50,000', label: '$15,000 – $50,000' },
      { value: '> $50,000', label: '> $50,000' },
      { value: 'custom', label: 'Other / Open to discussion' },
    ],
    collabTypes: [
      { value: 'freelance', label: 'One-off freelance' },
      { value: 'partnership', label: 'Long-term partnership' },
      { value: 'subcontracting', label: 'Subcontracting' },
      { value: 'cocreation', label: 'Co-creation / Startup' },
      { value: 'other', label: 'Other' },
    ],
    errName: 'Name is required.', errEmail: 'Email is required.', errEmailInvalid: 'Invalid email address.',
    errCollabType: 'Please select a type.', errConfirmed: 'You must confirm before submitting.',
  },
  project: {
    back: 'Portfolio', madeBy: 'Made by', client: 'Client',
    year: 'Year', category: 'Category', technologies: 'Technologies',
    presentation: 'Overview', context: 'Context', objectives: 'Objectives',
    gallery: 'Gallery', video: 'Video',
    prevProject: 'Previous project', nextProject: 'Next project',
    explore: 'Explore project', notFound: 'Project not found',
    backToPortfolio: 'Back to portfolio',
  },
};

export const translations = { fr, en };
