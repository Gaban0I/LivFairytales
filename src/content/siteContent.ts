export type SiteNavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export type SiteContent = {
  brandName: string;
  logo: { src: string; alt: string };
  labels: {
    openMenu: string;
    closeMenu: string;
    viewMore: string;
    learnMore: string;
    applyNow: string;
    donateNow: string;
    bookNow: string;
    inquiryForm: string;
    send: string;
    poweredBy: string;
  };
  socialLinks: { label: string; href: string }[];
  navigation: {
    primary: SiteNavItem[];
  };
  metadata: {
    home: { title: string; description: string; ogImage: string };
    about: { title: string; description: string; ogImage: string };
    howWeHelp: { title: string; description: string; ogImage: string };
    book: { title: string; description: string; ogImage: string };
    support: { title: string; description: string; ogImage: string };
    contact: { title: string; description: string; ogImage: string };
    extras: { title: string; description: string; ogImage: string };
    notFound: { title: string; description: string; ogImage: string };
  };
  home: {
    hero: {
      badge: string;
      titleLine1: string;
      titleLine2: string;
      subtitle: string;
      ctaLabel: string;
      secondaryCtaLabel: string;
      backgroundImage: { src: string; alt: string };
      card: {
        title: string;
        body: string;
        stats: string[];
      };
    };
    gallery: {
      title: string;
      viewMoreLabel: string;
      viewMoreHref: string;
      images: { src: string; alt: string }[];
    };
    story: {
      title: string;
      body: string;
      image: { src: string; alt: string };
      ctaLabel: string;
      ctaHref: string;
    };
    schedule: {
      title: string;
      subtitle: string;
      chips: string[];
      ctaLabel: string;
      ctaHref: string;
    };
    join: {
      title: string;
      body: string;
      ctaLabel: string;
      ctaHref: string;
    };
    donate: {
      title: string;
      body: string;
      ctaLabel: string;
      ctaHref: string;
    };
    event: {
      title: string;
      body: string;
      ctaLabel: string;
      ctaHref: string;
    };
    eventCard: {
      title: string;
      body: string;
      items: string[];
    };
    finalGallery: {
      headline: string;
      buttonLabel: string;
      buttonHref: string;
      image: { src: string; alt: string };
    };
  };
  book: {
    intro: {
      title: string;
      subtitle: string;
    };
    cards: {
      title: string;
      description: string;
      ctaLabel: string;
      ctaHref: string;
      image: { src: string; alt: string };
    }[];
    gallery: {
      title: string;
      viewMoreLabel: string;
      viewMoreHref: string;
      images: { src: string; alt: string }[];
    };
  };
  howWeHelp: {
    hero: {
      title: string;
      subtitle: string;
      image: { src: string; alt: string };
      ctaLabel: string;
    };
    sections: {
      title: string;
      body: string;
      image: { src: string; alt: string };
    }[];
    impact: {
      title: string;
      body: string;
    };
    safety: {
      title: string;
      body: string;
    };
    cta: {
      title: string;
      body: string;
      primaryLabel: string;
      primaryHref: string;
      secondaryLabel: string;
      secondaryHref: string;
    };
  };
  about: {
    hero: {
      title: string;
      subtitle: string;
      image: { src: string; alt: string };
      ctaLabel: string;
    };
    timelineTitle: string;
    boardSubtitle: string;
    newsSubtitle: string;
    newsReadMoreLabel: string;
    timeline: { title: string; body: string }[];
    board: {
      title: string;
      members: { name: string; role: string; bio: string; image: { src: string; alt: string } }[];
    };
    news: {
      title: string;
      items: { outlet: string; headline: string; href: string }[];
    };
  };
  support: {
    donation: {
      title: string;
      body: string;
      ctaLabel: string;
      ctaHref: string;
      cardTitle: string;
      cardBody: string;
      cardCtaLabel: string;
    };
    ways: {
      title: string;
      items: { title: string; body: string }[];
    };
    faqs: {
      title: string;
      items: { question: string; answer: string }[];
    };
  };
  contact: {
    hero: {
      title: string;
      subtitle: string;
    };
    form: {
      nameLabel: string;
      emailLabel: string;
      subjectLabel: string;
      messageLabel: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      subjectPlaceholder: string;
      messagePlaceholder: string;
      buttonLabel: string;
      successMessage: string;
      mailto: string;
    };
    locations: {
      title: string;
      body: string;
    };
    social: {
      title: string;
    };
  };
  extras: {
    merch: { title: string; body: string };
    partnerships: { title: string; body: string };
    resources: { title: string; body: string };
  };
  notFound: {
    title: string;
    body: string;
    ctaHome: string;
    ctaContact: string;
    secondaryLink: string;
  };
  footer: {
    columns: { title: string; links: { label: string; href: string }[] }[];
    copyright: string;
    poweredByLabel: string;
  };
};

export const siteContent: SiteContent = {
  brandName: 'Liv Fairytales',
  logo: {
    src: '/images/placeholder-logo.png',
    alt: 'Logo Liv Fairytales',
  },
  labels: {
    openMenu: 'Menu',
    closeMenu: 'Fermer',
    viewMore: 'Voir plus',
    learnMore: 'En savoir plus',
    applyNow: 'Devenir benevole',
    donateNow: 'Soutenir',
    bookNow: 'Faire une demande',
    inquiryForm: 'Demande de visite',
    send: 'Envoyer',
    poweredBy: 'Gabriel Le Goat',
  },
  socialLinks: [
    { label: 'TikTok', href: 'https://tiktok.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Facebook', href: 'https://facebook.com' },
  ],
  navigation: {
    primary: [
      {
        label: 'A propos',
        children: [
          { label: 'Notre histoire', href: '/about' },
          { label: 'Equipe', href: '/about#executive-board' },
          { label: 'Actualites', href: '/about#in-the-news' },
        ],
      },
      { label: 'Nos actions', href: '/how-we-help' },
      { label: 'Demander une visite', href: '/book' },
      { label: 'Soutenir', href: '/support' },
      { label: 'Contact', href: '/contact' },
      {
        label: 'Extras',
        children: [
          { label: 'Merch', href: '/extras/merch' },
          { label: 'Partenariats', href: '/extras/partnerships' },
          { label: 'Ressources', href: '/extras/resources' },
        ],
      },
    ],
  },
  metadata: {
    home: {
      title: 'Liv Fairytales - Offrir de la magie aux enfants et aux adultes',
      description:
        'Association benevole qui rend visite aux enfants, adolescents et adultes en etablissement medical ou a domicile, pour offrir de la joie et du reconfort.',
      ogImage: '/images/placeholder-og-home.png',
    },
    about: {
      title: 'Notre histoire - Liv Fairytales',
      description: 'Decouvrez la mission, les valeurs et l origine de l association Liv Fairytales.',
      ogImage: '/images/placeholder-og-about.png',
    },
    howWeHelp: {
      title: 'Nos actions - Liv Fairytales',
      description: 'Des visites adaptees en hopital, a domicile et en EHPAD pour offrir des instants magiques.',
      ogImage: '/images/placeholder-og-how.png',
    },
    book: {
      title: 'Demander une visite - Liv Fairytales',
      description: 'Choisissez la formule adaptee a vos besoins et faites une demande de visite.',
      ogImage: '/images/placeholder-og-book.png',
    },
    support: {
      title: 'Soutenir Liv Fairytales',
      description: 'Aidez nous a financer les costumes, les cadeaux et la logistique des visites.',
      ogImage: '/images/placeholder-og-support.png',
    },
    contact: {
      title: 'Contact - Liv Fairytales',
      description: 'Contactez l association pour organiser une visite ou devenir benevole.',
      ogImage: '/images/placeholder-og-contact.png',
    },
    extras: {
      title: 'Extras - Liv Fairytales',
      description: 'Ressources et contenus supplementaires de l association.',
      ogImage: '/images/placeholder-og-extras.png',
    },
    notFound: {
      title: 'Page introuvable - Liv Fairytales',
      description: 'La page demandee est introuvable.',
      ogImage: '/images/placeholder-og-404.png',
    },
  },
  home: {
    hero: {
      badge: 'Association benevole',
      titleLine1: 'Offrir du reve',
      titleLine2: 'au coeur des soins',
      subtitle:
        'Liv Fairytales rend visite aux enfants, adolescents et adultes en situation de vulnerabilite pour apporter joie, reconfort et instants magiques.',
      ctaLabel: 'Demander une visite',
      secondaryCtaLabel: 'Devenir benevole',
      backgroundImage: {
        src: '/images/placeholder-hero.png',
        alt: 'Visite magique en structure medicale',
      },
      card: {
        title: 'Des visites 100% gratuites',
        body: 'Nos interventions sont benevoles et adaptees a chaque structure et a chaque famille.',
        stats: ['Hopital', 'Domicile', 'EHPAD', 'Adolescents'],
      },
    },
    gallery: {
      title: 'Nous combattons avec la magie',
      viewMoreLabel: 'Voir nos actions',
      viewMoreHref: '/how-we-help',
      images: [
        { src: '/images/placeholder-gallery-1.png', alt: 'Moment magique 1' },
        { src: '/images/placeholder-gallery-2.png', alt: 'Moment magique 2' },
        { src: '/images/placeholder-gallery-3.png', alt: 'Moment magique 3' },
        { src: '/images/placeholder-gallery-4.png', alt: 'Moment magique 4' },
        { src: '/images/placeholder-gallery-5.png', alt: 'Moment magique 5' },
      ],
    },
    story: {
      title: 'Une mission nee du coeur et du vecu',
      body:
        'Creee par Olivia Guzniczak, Liv Fairytales est nee d une experience personnelle du milieu hospitalier et d une passion pour le cosplay et l aide aux autres.',
      image: { src: '/images/placeholder-story.png', alt: 'Fondatrice de Liv Fairytales' },
      ctaLabel: 'Notre histoire',
      ctaHref: '/about',
    },
    schedule: {
      title: 'Programmer votre moment magique',
      subtitle: 'Des formules adapteees selon l age, la structure et les besoins.',
      chips: ['Hopital', 'Domicile', 'EHPAD'],
      ctaLabel: 'Faire une demande',
      ctaHref: '/book',
    },
    join: {
      title: 'Devenez benevole',
      body:
        'Cosplayeur, soignant, animateur ou passionne de contact humain, rejoignez l aventure et offrez des instants de magie.',
      ctaLabel: 'Nous rejoindre',
      ctaHref: 'mailto:contact@livfairytales.fr',
    },
    donate: {
      title: 'Soutenir nos actions',
      body:
        'Vos dons financent costumes, cadeaux, materiel creatif et deplacements pour des visites gratuites.',
      ctaLabel: 'Faire un don',
      ctaHref: 'mailto:contact@livfairytales.fr',
    },
    event: {
      title: 'Des rencontres\nqui laissent une trace',
      body:
        'Nous intervenons selon les disponibilites des benevoles et adaptons chaque visite aux besoins medicaux et emotifs.',
      ctaLabel: 'Contactez nous',
      ctaHref: '/contact',
    },
    eventCard: {
      title: 'Ce que nous offrons',
      body: 'Chaque visite est unique et co construite avec les equipes ou les familles.',
      items: ['Entree en musique si possible', 'Lecture et activites creatrices', 'Photos souvenir et autographe'],
    },
    finalGallery: {
      headline: 'Offrons des sourires la ou ils sont le plus necessaires',
      buttonLabel: 'Voir nos formules',
      buttonHref: '/book',
      image: { src: '/images/placeholder-final-gallery.png', alt: 'Final magique' },
    },
  },
  book: {
    intro: {
      title: 'Choisissez la formule adaptee',
      subtitle:
        'Toutes les visites sont gratuites. Les disponibilites dependent de nos benevoles et un delai d attente peut etre necessaire.',
    },
    cards: [
      {
        title: 'Visite hopital 1h',
        description:
          'Jusqu a 2 personnages. Entree en musique si possible, lecture, cadeau de coloriage, photo polaroid et autographe.',
        ctaLabel: 'Faire une demande',
        ctaHref: 'mailto:contact@livfairytales.fr',
        image: { src: '/images/placeholder-book-1.png', alt: 'Visite hopital' },
      },
      {
        title: 'Visite domicile 1h30',
        description:
          'Jusqu a 7 enfants, 2 personnages. Activite manuelle, lecture, danse ou mini spectacle, photo et autographe.',
        ctaLabel: 'Faire une demande',
        ctaHref: 'mailto:contact@livfairytales.fr',
        image: { src: '/images/placeholder-book-2.png', alt: 'Visite domicile' },
      },
      {
        title: 'Visite domicile 2h avec ACC',
        description:
          'Jusqu a 15 enfants, 3 personnages. Couronnement, encadrement du gouter si prevu, activites et photo souvenir.',
        ctaLabel: 'Faire une demande',
        ctaHref: 'mailto:contact@livfairytales.fr',
        image: { src: '/images/placeholder-book-3.png', alt: 'Visite domicile avec ACC' },
      },
      {
        title: 'Formules adultes et EHPAD',
        description:
          'Interventions adaptees pour MAS, EHPAD ou psychiatrie ado. Chants, karaoke, activites manuelles et temps d echange.',
        ctaLabel: 'Faire une demande',
        ctaHref: 'mailto:contact@livfairytales.fr',
        image: { src: '/images/placeholder-book-4.png', alt: 'Visites adultes' },
      },
    ],
    gallery: {
      title: 'Nous combattons avec la magie',
      viewMoreLabel: 'Voir nos actions',
      viewMoreHref: '/how-we-help',
      images: [
        { src: '/images/placeholder-gallery-1.png', alt: 'Moment magique 1' },
        { src: '/images/placeholder-gallery-2.png', alt: 'Moment magique 2' },
        { src: '/images/placeholder-gallery-3.png', alt: 'Moment magique 3' },
        { src: '/images/placeholder-gallery-4.png', alt: 'Moment magique 4' },
        { src: '/images/placeholder-gallery-5.png', alt: 'Moment magique 5' },
      ],
    },
  },
  howWeHelp: {
    hero: {
      title: 'Des visites adaptees a chaque situation',
      subtitle:
        'Hopital, domicile, EHPAD ou structures specialisees, nous adaptons nos interventions aux besoins et aux contraintes.',
      image: { src: '/images/placeholder-how-hero.png', alt: 'Equipe Liv Fairytales' },
      ctaLabel: 'Demander une visite',
    },
    sections: [
      {
        title: 'Formules enfants',
        body:
          'Entrees en musique, lecture d histoires, activites manuelles, cadeaux et photos polaroid avec autographe.',
        image: { src: '/images/placeholder-how-1.png', alt: 'Formules enfants' },
      },
      {
        title: 'Formules adultes et EHPAD',
        body:
          'Visites adaptees, chants et karaoke, activites creatrices et temps d echange avec les residents et familles.',
        image: { src: '/images/placeholder-how-2.png', alt: 'Formules adultes' },
      },
      {
        title: 'Personnages disponibles',
        body:
          'Belle, Elsa, Anna, Raiponce, Ariel, et d autres personnages bientot disponibles selon les benevoles.',
        image: { src: '/images/placeholder-how-3.png', alt: 'Personnages' },
      },
    ],
    impact: {
      title: 'Un impact humain durable',
      body:
        'Nous offrons des sourires, du reconfort et des instants d evasion aux personnes malades ou vulnerables.',
    },
    safety: {
      title: 'Cadre et securite',
      body:
        'Respect des regles d hygiene hospitaliere, des consignes des familles et des structures, et formation des benevoles.',
    },
    cta: {
      title: 'Une visite 100% adaptee',
      body:
        'Chaque demande est etudiee avec attention pour proposer une intervention respectueuse et sur mesure.',
      primaryLabel: 'Demander une visite',
      primaryHref: '/book',
      secondaryLabel: 'Soutenir l association',
      secondaryHref: '/support',
    },
  },
  about: {
    hero: {
      title: 'Notre histoire',
      subtitle:
        'Liv Fairytales est une association nee d une double passion pour la sante et le cosplay, fondee par Olivia Guzniczak.',
      image: { src: '/images/placeholder-about-hero.png', alt: 'Notre histoire' },
      ctaLabel: 'Nous contacter',
    },
    timelineTitle: 'Les grandes etapes',
    boardSubtitle: 'Des benevoles engages et des professionnels de sante.',
    newsSubtitle: 'Ils parlent de nous et de nos actions solidaires.',
    newsReadMoreLabel: 'Lire',
    timeline: [
      {
        title: 'Une vocation personnelle',
        body:
          'Une experience du milieu hospitalier a inspire la creation de Liv Fairytales pour apporter du reconfort.',
      },
      {
        title: 'Allier soin et imagination',
        body:
          'Cosplay et bienveillance se rencontrent pour creer des visites inoubliables.',
      },
      {
        title: 'Une equipe benevole',
        body:
          'Cosplayeurs, soignants, animateurs et passionnes unis pour offrir des moments magiques.',
      },
    ],
    board: {
      title: 'Notre equipe',
      members: [
        {
          name: 'Olivia Guzniczak',
          role: 'Fondatrice',
          bio: 'Diabetique de type 1 et aide soignante en formation, elle a fonde Liv Fairytales pour offrir du reve aux patients.',
          image: { src: '/images/placeholder-board-1.png', alt: 'Olivia Guzniczak' },
        },
        {
          name: 'Benevole principal',
          role: 'Coordinateur visites',
          bio: 'Organisation des visites et accompagnement des nouveaux benevoles.',
          image: { src: '/images/placeholder-board-2.png', alt: 'Coordinateur visites' },
        },
        {
          name: 'Equipe soignante',
          role: 'Referents sante',
          bio: 'Garants du cadre medical, des formations et des bonnes pratiques.',
          image: { src: '/images/placeholder-board-3.png', alt: 'Equipe soignante' },
        },
      ],
    },
    news: {
      title: 'Dans les medias',
      items: [
        {
          outlet: 'Presse locale',
          headline: 'Une association qui apporte de la magie aux patients',
          href: '#',
        },
        {
          outlet: 'Mag solidaire',
          headline: 'Liv Fairytales, entre cosplay et soin',
          href: '#',
        },
        {
          outlet: 'Blog sante',
          headline: 'Des benevoles pour des moments de reve',
          href: '#',
        },
      ],
    },
  },
  support: {
    donation: {
      title: 'Soutenir Liv Fairytales',
      body:
        'Vos dons permettent de financer les costumes, les cadeaux, les supports creatifs et les deplacements.',
      ctaLabel: 'Faire un don',
      ctaHref: 'mailto:contact@livfairytales.fr',
      cardTitle: 'Partenaires et sponsors',
      cardBody: 'Vous etes une entreprise ou une structure solidaire ? Parlons d un partenariat engage.',
      cardCtaLabel: 'Nous ecrire',
    },
    ways: {
      title: 'Autres manieres de soutenir',
      items: [
        {
          title: 'Devenir benevole',
          body: 'Cosplayeurs, soignants, animateurs et accompagnateurs sont les bienvenus.',
        },
        {
          title: 'Materiel et cadeaux',
          body: 'Contribuez avec du materiel creatif, des livres de coloriage ou des accessoires.',
        },
        {
          title: 'Relais et visibilite',
          body: 'Partagez nos actions pour faire grandir la communaute Liv Fairytales.',
        },
      ],
    },
    faqs: {
      title: 'FAQ',
      items: [
        {
          question: 'Les visites sont elles payantes ?',
          answer: 'Non. Toutes les visites sont gratuites et realisees benevolement.',
        },
        {
          question: 'Qui peut faire une demande de visite ?',
          answer:
            'Parents, structures medicales et associations a but non lucratif peuvent nous contacter.',
        },
        {
          question: 'Y a t il un delai d attente ?',
          answer:
            'Oui, selon le planning et les disponibilites des benevoles, un delai peut etre necessaire.',
        },
      ],
    },
  },
  contact: {
    hero: {
      title: 'Contactez Liv Fairytales',
      subtitle: 'Echangeons sur une visite, un partenariat ou un engagement benevole.',
    },
    form: {
      nameLabel: 'Nom complet',
      emailLabel: 'Email',
      subjectLabel: 'Sujet',
      messageLabel: 'Votre message',
      namePlaceholder: 'Votre nom',
      emailPlaceholder: 'votre@email.fr',
      subjectPlaceholder: 'Demande de visite, benevolat, partenariat...',
      messagePlaceholder: 'Expliquez votre contexte et vos besoins.',
      buttonLabel: 'Envoyer la demande',
      successMessage: 'Merci. Votre message a ete pris en compte.',
      mailto: 'mailto:contact@livfairytales.fr',
    },
    locations: {
      title: 'Ou nous intervenons',
      body:
        'Hopitaux, structures specialisees, domicile (selon conditions) et EHPAD, en fonction des demandes et disponibilites.',
    },
    social: {
      title: 'Suivez nos actions',
    },
  },
  extras: {
    merch: {
      title: 'Merch bientot disponible',
      body: 'Bientot une boutique solidaire pour soutenir nos actions.',
    },
    partnerships: {
      title: 'Partenariats',
      body: 'Echangeons pour construire des actions solidaires avec votre structure.',
    },
    resources: {
      title: 'Ressources',
      body: 'Documents et informations pour accompagner vos demandes.',
    },
  },
  notFound: {
    title: 'Page introuvable',
    body: 'Cette page n existe pas ou a ete deplacee.',
    ctaHome: 'Retour a l accueil',
    ctaContact: 'Nous contacter',
    secondaryLink: 'Retour a l accueil',
  },
  footer: {
    columns: [
      {
        title: 'La magie',
        links: [
          { label: 'Demander une visite', href: '/book' },
          { label: 'Nos actions', href: '/how-we-help' },
          { label: 'Contact', href: '/contact' },
        ],
      },
      {
        title: 'A propos',
        links: [
          { label: 'Notre histoire', href: '/about' },
          { label: 'Equipe', href: '/about#executive-board' },
          { label: 'Actualites', href: '/about#in-the-news' },
        ],
      },
      {
        title: 'Nous rejoindre',
        links: [
          { label: 'Devenir benevole', href: 'mailto:contact@livfairytales.fr' },
          { label: 'Soutenir', href: '/support' },
          { label: 'FAQ', href: '/support' },
        ],
      },
      {
        title: 'Extras',
        links: [
          { label: 'Merch', href: '/extras/merch' },
          { label: 'Partenariats', href: '/extras/partnerships' },
          { label: 'Ressources', href: '/extras/resources' },
        ],
      },
      {
        title: 'Contact',
        links: [
          { label: 'Nous ecrire', href: 'mailto:contact@livfairytales.fr' },
          { label: 'Suivre nos reseaux', href: '/contact' },
          { label: 'Faire un don', href: '/support' },
        ],
      },
    ],
    copyright: '© 2026 Liv Fairytales. Tous droits reserves.',
    poweredByLabel: 'Powered by',
  },
};