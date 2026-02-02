export type SiteNavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export type SiteContent = {
  brandName: string;
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
    sections: {
      title: string;
      subtitle?: string;
      cards: {
        title: string;
        description: string;
        details?: string[];
        ctaLabel: string;
        ctaHref: string;
        image: { src: string; alt: string };
      }[];
    }[];
    notesTitle: string;
    notes: string[];
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
    accessibility: { title: string; body: string };
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
  brandName: 'LivFairytales',
  labels: {
    openMenu: 'Menu',
    closeMenu: 'Fermer',
    viewMore: 'Voir plus',
    learnMore: 'En savoir plus',
    applyNow: 'Devenir bénévole',
    donateNow: 'Soutenir',
    bookNow: 'Faire une demande',
    inquiryForm: 'Demande de visite',
    send: 'Envoyer',
    poweredBy: 'Gabriel Le Goat',
  },
  socialLinks: [
    { label: 'TikTok', href: 'https://www.tiktok.com/@livfairytales?_r=1&_t=ZN-93ZLqw5BBuY' },
    { label: 'Instagram', href: 'https://www.instagram.com/livfairytales?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { label: 'Facebook', href: 'https://www.facebook.com/share/1JD2oxP75g/?mibextid=wwXIfr' },
  ],
  navigation: {
    primary: [
      {
        label: 'À propos',
        children: [
          { label: 'Notre histoire', href: '/about' },
          { label: 'Équipe', href: '/about#executive-board' },
          { label: 'Actualités', href: '/about#in-the-news' },
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
          { label: 'Accessibilité', href: '/extras/accessibility' },
        ],
      },
    ],
  },
  metadata: {
    home: {
      title: 'Liv Fairytales - Offrir de la magie aux enfants et aux adultes',
      description:
        'Association bénévole qui rend visite aux enfants, adolescents et adultes en établissement médical ou à domicile, pour offrir de la joie et du réconfort.',
      ogImage: '/images/placeholder-og-home.png',
    },
    about: {
      title: 'Notre histoire - Liv Fairytales',
      description: "Découvrez la mission, les valeurs et l'origine de l'association Liv Fairytales.",
      ogImage: '/images/placeholder-og-about.png',
    },
    howWeHelp: {
      title: 'Nos actions - Liv Fairytales',
      description: 'Des visites adaptées en hôpital, à domicile et en EHPAD pour offrir des instants magiques.',
      ogImage: '/images/placeholder-og-how.png',
    },
    book: {
      title: 'Demander une visite - Liv Fairytales',
      description: 'Choisissez la formule adaptée à vos besoins et faites une demande de visite.',
      ogImage: '/images/placeholder-og-book.png',
    },
    support: {
      title: 'Soutenir Liv Fairytales',
      description: 'Aidez-nous à financer les costumes, les cadeaux et la logistique des visites.',
      ogImage: '/images/placeholder-og-support.png',
    },
    contact: {
      title: 'Contact - Liv Fairytales',
      description: "Contactez l'association pour organiser une visite ou devenir bénévole.",
      ogImage: '/images/placeholder-og-contact.png',
    },
    extras: {
      title: 'Extras - Liv Fairytales',
      description: "Ressources et contenus supplémentaires de l'association.",
      ogImage: '/images/placeholder-og-extras.png',
    },
    notFound: {
      title: 'Page introuvable - Liv Fairytales',
      description: 'La page demandée est introuvable.',
      ogImage: '/images/placeholder-og-404.png',
    },
  },
  home: {
    hero: {
      badge: 'Association bénévole',
      titleLine1: 'Offrir du rêve',
      titleLine2: 'au cœur des soins',
      subtitle:
        'Liv Fairytales rend visite aux enfants, adolescents et adultes en situation de vulnérabilité pour apporter joie, réconfort et instants magiques.',
      ctaLabel: 'Demander une visite',
      secondaryCtaLabel: 'Devenir bénévole',
      backgroundImage: {
        src: '/images/placeholder-hero.png',
        alt: 'Visite magique en structure médicale',
      },
      card: {
        title: 'Des visites 100% gratuites',
        body: 'Nos interventions sont bénévoles et adaptées à chaque structure et à chaque famille.',
        stats: ['Hôpital', 'Domicile', 'EHPAD', 'Adolescents'],
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
      title: 'Une mission née du cœur et du vécu',
      body:
        "Créée par Olivia Guzniczak, Liv Fairytales est née d'une expérience personnelle du milieu hospitalier et d'une passion pour le cosplay et l'aide aux autres.",
      image: { src: '/images/notre-histoire.jpg', alt: 'Fondatrice de Liv Fairytales' },
      ctaLabel: 'Notre histoire',
      ctaHref: '/about',
    },
    schedule: {
      title: 'Programmer votre moment magique',
      subtitle: "Des formules adaptées selon l'âge, la structure et les besoins.",
      chips: ['Hôpital', 'Domicile', 'EHPAD'],
      ctaLabel: 'Faire une demande',
      ctaHref: '/book',
    },
    join: {
      title: 'Devenez bénévole',
      body:
        "Cosplayeur, soignant, animateur ou passionné de contact humain, rejoignez l'aventure et offrez des instants de magie.",
      ctaLabel: 'Nous rejoindre',
      ctaHref: 'mailto:livfairytales@gmail.com',
    },
    donate: {
      title: 'Soutenir nos actions',
      body: 'Vos dons financent costumes, cadeaux, matériel créatif et déplacements pour des visites gratuites.',
      ctaLabel: 'Faire un don',
      ctaHref: 'mailto:livfairytales@gmail.com',
    },
    event: {
      title: 'Des rencontres\nqui laissent une trace',
      body:
        'Nous intervenons selon les disponibilités des bénévoles et adaptons chaque visite aux besoins médicaux et émotionnels.',
      ctaLabel: 'Contactez-nous',
      ctaHref: '/contact',
    },
    eventCard: {
      title: 'Ce que nous offrons',
      body: 'Chaque visite est unique et co-construite avec les équipes ou les familles.',
      items: ['Entrée en musique si possible', 'Lecture et activités créatives', 'Photos souvenir et autographes'],
    },
    finalGallery: {
      headline: 'Offrons des sourires là où ils sont le plus nécessaires',
      buttonLabel: 'Voir nos formules',
      buttonHref: '/book',
      image: { src: '/images/placeholder-final-gallery.png', alt: 'Final magique' },
    },
  },
  book: {
    intro: {
      title: 'Choisissez la formule adaptée',
      subtitle:
        'Formules enfants et adultes, toutes gratuites et bénévoles. Choisissez la formule adaptée et envoyez votre demande.',
    },
    sections: [
      {
        title: 'Formules enfants',
        subtitle:
          "Visites en hôpital, à domicile ou en visio. Toutes les activités sont adaptées à l'état de santé, au rythme et aux capacités de l'enfant.",
        cards: [
          {
            title: "Visite à l'hôpital — 1h",
            description: 'Formule enfants.',
            details: [
              'Entrée en musique (si les conditions médicales et hospitalières le permettent).',
              "Remise d'un cadeau à l'enfant (livre de coloriage à l'effigie du personnage choisi).",
              "Lecture de l'histoire du personnage.",
              'Photo Polaroid avec autographe du personnage.',
            ],
            ctaLabel: 'Faire une demande',
            ctaHref:
              'https://docs.google.com/forms/d/e/1FAIpQLSdjov7QDluhqzSWlHa7bA9ku_23pFKbAW-IcnZC2yzC0H5P4g/viewform',
            image: { src: '/images/placeholder-book-1.png', alt: 'Visite hôpital enfants' },
          },
          {
            title: 'Visite à domicile — 1h30',
            description: 'Maximum 7 enfants présents.',
            details: [
              'Entrée en musique (si les conditions le permettent).',
              "Remise d'un cadeau à l'enfant (livre de coloriage à l'effigie du personnage choisi).",
              "Activité manuelle avec l'enfant et ses amis.",
              "Lecture de l'histoire du personnage.",
              "Danses si l'état médical de l'enfant le permet (sinon, petit spectacle adapté).",
              'Photo Polaroid avec autographe du personnage.',
            ],
            ctaLabel: 'Faire une demande',
            ctaHref:
              'https://docs.google.com/forms/d/e/1FAIpQLSdjov7QDluhqzSWlHa7bA9ku_23pFKbAW-IcnZC2yzC0H5P4g/viewform',
            image: { src: '/images/placeholder-book-2.png', alt: 'Visite domicile enfants' },
          },
          {
            title: 'Visite à domicile — 2h',
            description: 'Maximum 15 enfants présents.',
            details: [
              'Entrée en musique (si les conditions le permettent).',
              "Remise d'un cadeau à l'enfant (livre de coloriage à l'effigie du personnage choisi).",
              "Activité manuelle avec l'enfant et ses amis.",
              "Lecture de l'histoire du personnage.",
              "Danses si l'état médical de l'enfant le permet (sinon, petit spectacle musical adapté).",
              "Couronnement symbolique de l'enfant malade.",
              'Photo Polaroid avec autographe du personnage.',
              'Encadrement du goûter, si celui-ci est prévu.',
            ],
            ctaLabel: 'Faire une demande',
            ctaHref:
              'https://docs.google.com/forms/d/e/1FAIpQLSdjov7QDluhqzSWlHa7bA9ku_23pFKbAW-IcnZC2yzC0H5P4g/viewform',
            image: { src: '/images/placeholder-book-3.png', alt: 'Visite domicile enfants 2h' },
          },
          {
            title: 'Formule Visio Magique — 30/45 minutes',
            description: "Présence obligatoire d'un parent ou représentant légal.",
            details: [
              'Arrivée du personnage en visio, avec salutation personnalisée.',
              "Petit moment d'échange adapté à l'âge et à l'état de l'enfant.",
              "Lecture d'une histoire ou conte du personnage choisi.",
              'Mini animation interactive (questions, quizz, devinettes).',
              "Message d'encouragement et au revoir féerique.",
              "Lien privé avec mot de passe et salle d'attente.",
              'Aucune captation ou enregistrement sans autorisation écrite.',
              "La visio est adaptée au rythme de l'enfant et peut être écourtée si nécessaire.",
            ],
            ctaLabel: 'Faire une demande',
            ctaHref:
              'https://docs.google.com/forms/d/e/1FAIpQLSdjov7QDluhqzSWlHa7bA9ku_23pFKbAW-IcnZC2yzC0H5P4g/viewform',
            image: { src: '/images/placeholder-book-4.png', alt: 'Visio magique' },
          },
        ],
      },
      {
        title: 'Formules adultes',
        subtitle:
          'Adaptées pour MAS, EHPAD ou services psychiatriques adolescents. Les activités sont pensées pour le confort, le rythme et les capacités des participants.',
        cards: [
          {
            title: 'Visite en hôpital ou structure — 30 à 45 minutes',
            description: 'Avec ACC.',
            details: [
              'Entrée en musique (si les conditions le permettent).',
              'Activité manuelle adaptée aux capacités des participants.',
              'Photo Polaroid avec autographe du personnage.',
            ],
            ctaLabel: 'Faire une demande',
            ctaHref:
              'https://docs.google.com/forms/d/e/1FAIpQLSenfCekTVuCXgPSP99U4a_zjwekLxVTNBghZRI4sbXynaTIqA/viewform',
            image: { src: '/images/placeholder-how-1.png', alt: 'Visite adultes en structure' },
          },
          {
            title: 'Visite “Bal” en EHPAD — 2h30',
            description: 'Avec ACC.',
            details: [
              'Entrée en musique (si les conditions le permettent).',
              'Chants et karaoké avec le personnage.',
              'Activités manuelles adaptées aux résidents.',
              "Temps d'échange avec les résidents et leurs familles.",
              'La visite reste adaptable selon l’organisation et les envies de la structure.',
            ],
            ctaLabel: 'Faire une demande',
            ctaHref:
              'https://docs.google.com/forms/d/e/1FAIpQLSenfCekTVuCXgPSP99U4a_zjwekLxVTNBghZRI4sbXynaTIqA/viewform',
            image: { src: '/images/placeholder-how-2.png', alt: 'Bal en EHPAD' },
          },
        ],
      },
    ],
    notesTitle: 'à savoir',
    notes: [
      "Le terme « formule » n'implique aucun paiement : toutes nos visites sont gratuites et bénévoles.",
      'Les interventions dépendent des disponibilités de nos bénévoles ; le jour exact ne peut pas toujours être garanti.',
      "Selon le planning, un délai d'attente peut être nécessaire avant la réalisation de certaines visites.",
      'Vous êtes une structure médicale ou une association à but non lucratif ? Contactez-nous par mail pour organiser une visite 100% adaptée à vos besoins.',
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
      title: 'Des visites adaptées à chaque situation',
      subtitle:
        'Hôpital, domicile, EHPAD ou structures spécialisées, nous adaptons nos interventions aux besoins et aux contraintes.',
      image: { src: '/images/placeholder-how-hero.png', alt: 'Équipe Liv Fairytales' },
      ctaLabel: 'Demander une visite',
    },
    sections: [
      {
        title: 'Formules enfants',
        body:
          "Visites à l’hôpital (1h), à domicile (1h30 / 2h ) ou en visio (30/45 min). Entrée en musique, cadeaux, lecture, activités et polaroid selon l’état de l’enfant.",
        image: { src: '/images/placeholder-how-1.png', alt: 'Formules enfants' },
      },
      {
        title: 'Formules adultes et EHPAD',
        body:
          "Formules adaptées pour MAS, EHPAD ou services psychiatriques adolescents : visite en structure 30 à 45 min ou Bal en EHPAD 2h30 , activités et échanges modulés selon les résidents.",
        image: { src: '/images/placeholder-how-2.png', alt: 'Formules adultes' },
      },
      {
        title: 'Personnages disponibles',
        body:
          "Belle, Elsa, Anna, Raiponce, Ariel, et d'autres personnages bientôt disponibles selon les bénévoles.",
        image: { src: '/images/placeholder-how-3.png', alt: 'Personnages' },
      },
    ],
    impact: {
      title: 'Un impact humain durable',
      body: "Nous offrons des sourires, du réconfort et des instants d'évasion aux personnes malades ou vulnérables.",
    },
    safety: {
      title: 'Cadre et sécurité',
      body:
        "Respect des règles d'hygiène hospitalière, des consignes des familles et des structures, et formation des bénévoles.",
    },
    cta: {
      title: 'Une visite 100% adaptée',
      body:
        'Chaque demande est étudiée avec attention pour proposer une intervention respectueuse et sur mesure.',
      primaryLabel: 'Demander une visite',
      primaryHref: '/book',
      secondaryLabel: "Soutenir l'association",
      secondaryHref: '/support',
    },
  },
  about: {
    hero: {
      title: 'Notre histoire',
      subtitle:
        "Liv Fairytales est une association née d'une double passion pour la santé et le cosplay, fondée par Olivia Guzniczak.",
      image: { src: '/images/notre-histoire.jpg', alt: 'Notre histoire' },
      ctaLabel: 'Nous contacter',
    },
    timelineTitle: 'Les grandes étapes',
    boardSubtitle: 'Des bénévoles engagés et des professionnels de santé.',
    newsSubtitle: 'Ils parlent de nous et de nos actions solidaires.',
    newsReadMoreLabel: 'Lire',
    timeline: [
      {
        title: 'Une vocation personnelle',
        body:
          "Une expérience du milieu hospitalier a inspiré la création de Liv Fairytales pour apporter du réconfort.",
      },
      {
        title: 'Allier soin et imagination',
        body: 'Cosplay et bienveillance se rencontrent pour créer des visites inoubliables.',
      },
      {
        title: 'Une équipe bénévole',
        body: 'Cosplayeurs, soignants, animateurs et passionnés unis pour offrir des moments magiques.',
      },
    ],
    board: {
      title: 'Notre équipe',
      members: [
        {
          name: 'Olivia Guzniczak',
          role: 'Fondatrice',
          bio: 'Diabétique de type 1 et aide-soignante en formation, elle a fondé Liv Fairytales pour offrir du rêve aux patients.',
          image: { src: '/images/team-1.jpg', alt: 'Olivia Guzniczak' },
        },
        {
          name: 'Bénévole principal',
          role: 'Coordinateur des visites',
          bio: 'Organisation des visites et accompagnement des nouveaux bénévoles.',
          image: { src: '/images/team-2.jpg', alt: 'Coordinateur des visites' },
        },
        {
          name: 'Équipe soignante',
          role: 'Référents santé',
          bio: 'Garants du cadre médical, des formations et des bonnes pratiques.',
          image: { src: '/images/team-3.jpg', alt: 'Équipe soignante' },
        },
      ],
    },
    news: {
      title: 'Dans les médias',
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
          outlet: 'Blog santé',
          headline: 'Des bénévoles pour des moments de rêve',
          href: '#',
        },
      ],
    },
  },
  support: {
    donation: {
      title: 'Soutenir Liv Fairytales',
      body:
        'Vos dons permettent de financer les costumes, les cadeaux, les supports créatifs et les déplacements.',
      ctaLabel: 'Faire un don',
      ctaHref: 'mailto:livfairytales@gmail.com',
      cardTitle: 'Partenaires et sponsors',
      cardBody: "Vous êtes une entreprise ou une structure solidaire ? Parlons d'un partenariat engagé.",
      cardCtaLabel: 'Nous écrire',
    },
    ways: {
      title: 'Autres manières de soutenir',
      items: [
        {
          title: 'Devenir bénévole',
          body: 'Cosplayeurs, soignants, animateurs et accompagnateurs sont les bienvenus.',
        },
        {
          title: 'Matériel et cadeaux',
          body: 'Contribuez avec du matériel créatif, des livres de coloriage ou des accessoires.',
        },
        {
          title: 'Relais et visibilité',
          body: 'Partagez nos actions pour faire grandir la communauté Liv Fairytales.',
        },
      ],
    },
    faqs: {
      title: 'FAQ',
      items: [
        {
          question: 'Les visites sont-elles payantes ?',
          answer: 'Non. Toutes les visites sont gratuites et réalisées bénévolement.',
        },
        {
          question: 'Qui peut faire une demande de visite ?',
          answer:
            'Parents, structures médicales et associations à but non lucratif peuvent nous contacter.',
        },
        {
          question: "Y a-t-il un délai d'attente ?",
          answer:
            'Oui, selon le planning et les disponibilités des bénévoles, un délai peut être nécessaire.',
        },
      ],
    },
  },
  contact: {
    hero: {
      title: 'Contactez Liv Fairytales',
      subtitle: 'Échangeons sur une visite, un partenariat ou un engagement bénévole.',
    },
    form: {
      nameLabel: 'Nom complet',
      emailLabel: 'Email',
      subjectLabel: 'Sujet',
      messageLabel: 'Votre message',
      namePlaceholder: 'Votre nom',
      emailPlaceholder: 'votre@email.fr',
      subjectPlaceholder: 'Demande de visite, bénévolat, partenariat...',
      messagePlaceholder: 'Expliquez votre contexte et vos besoins.',
      buttonLabel: 'Envoyer la demande',
      successMessage: 'Merci. Votre message a été pris en compte.',
      mailto: 'mailto:livfairytales@gmail.com',
    },
    locations: {
      title: 'Où nous intervenons',
      body:
        'Hôpitaux, structures spécialisées, domicile (selon conditions) et EHPAD, en fonction des demandes et des disponibilités.',
    },
    social: {
      title: 'Suivez nos actions',
    },
  },
  extras: {
    merch: {
      title: 'Merch bientôt disponible',
      body: 'Bientôt une boutique solidaire pour soutenir nos actions.',
    },
    partnerships: {
      title: 'Partenariats',
      body: 'Échangeons pour construire des actions solidaires avec votre structure.',
    },
    resources: {
      title: 'Ressources',
      body: 'Documents et informations pour accompagner vos demandes.',
    },
    accessibility: {
      title: 'Accessibilité',
      body: 'Adaptez les effets visuels et les animations pour un confort optimal.',
    },
  },
  notFound: {
    title: 'Page introuvable',
    body: "Cette page n'existe pas ou a été déplacée.",
    ctaHome: "Retour à l'accueil",
    ctaContact: 'Nous contacter',
    secondaryLink: "Retour à l'accueil",
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
        title: 'À propos',
        links: [
          { label: 'Notre histoire', href: '/about' },
          { label: 'Équipe', href: '/about#executive-board' },
          { label: 'Actualités', href: '/about#in-the-news' },
        ],
      },
      {
        title: 'Nous rejoindre',
        links: [
          { label: 'Devenir bénévole', href: 'mailto:livfairytales@gmail.com' },
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
          { label: 'Accessibilité', href: '/extras/accessibility' },
        ],
      },
      {
        title: 'Contact',
        links: [
          { label: 'Nous écrire', href: 'mailto:livfairytales@gmail.com' },
          { label: 'Suivre nos réseaux', href: '/contact' },
          { label: 'Faire un don', href: '/support' },
        ],
      },
    ],
    copyright: '© 2026 Liv Fairytales. Tous droits réservés.',
    poweredByLabel: 'Powered by',
  },
};
