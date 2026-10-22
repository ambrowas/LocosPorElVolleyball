// Estado oficial y compartido de la Asociación Deportiva “Locos por el Voleibol” - Guinea Ecuatorial
const STORAGE_KEY = "locos_voley_cms_state_v3";
const PASS_KEY = "locos_voley_admin_pass_v1";
const SESSION_KEY = "locos_voley_admin_logged_in";

const DEFAULT_STATE = {
  hero: {
    eyebrow: "Fundada en 2010 · Emblema 2013 · Malabo, Guinea Ecuatorial",
    title: "Impulsamos el voleibol <strong>social, escolar, formativo y competitivo</strong> en Guinea Ecuatorial.",
    lead: "La <strong>Asociación Deportiva «Locos por el Voleibol»</strong> es una iniciativa nacida en <strong>2010</strong> por un grupo de jóvenes malabeños con el propósito de impulsar, desarrollar y masificar el voleibol en Guinea Ecuatorial. Trabajamos desde <strong>Salesianos Don Bosco de Elá Nguema</strong>, implantamos talleres escolares gratuitos (10 a 18 años) hacia una <strong>Liga Escolar Intercolegial</strong> y organizamos desde 2012 el <strong>Torneo de Voley Playa Sipopo</strong>.",
    metrics: [
      { num: "Desde 2010", label: "Iniciativa de Jóvenes Malabeños (Escudo 2013)" },
      { num: "10 a 18 años", label: "Categorías Infantil/Cadete y Juvenil en Colegios" },
      { num: "11 Colegios", label: "2 Monitores y Material sin Coste para el Centro" },
      { num: "Sipopo & CAVB 4", label: "Voley Playa (desde 2012) y Veteranos Zona 4" }
    ]
  },
  waisoEnrollments: [
    {
      id: "waiso-demo-1",
      studentName: "Isabel Obono Nguema",
      age: "12",
      category: "Infantil/Cadete (10 a 14 años)",
      grade: "6º Primaria",
      school: "Colegio Waiso Ipola",
      experience: "Iniciación (Desde cero)",
      guardianName: "Dolores Nsue",
      phone: "+240 222 59 69 35",
      schedulePref: "Tardes (Lunes a Viernes tras clases)",
      status: "Confirmado · Grupo A",
      createdAt: "2026-10-20"
    },
    {
      id: "waiso-demo-2",
      studentName: "Samuel Esono Mba",
      age: "16",
      category: "Juvenil (15 a 18 años)",
      grade: "3º ESBA",
      school: "Colegio Waiso Ipola",
      experience: "Básico (Conoce reglas básicas)",
      guardianName: "Lorenzo Eto",
      phone: "+240 222 59 69 35",
      schedulePref: "Fines de Semana (Sábados mañana)",
      status: "Confirmado · Grupo B",
      createdAt: "2026-10-20"
    }
  ],
  photos: [
    {
      title: "Entrenamientos en Salesianos Don Bosco (Elá Nguema)",
      location: "Polideportivo Don Bosco",
      desc: "Lunes a viernes de 19:00 a 21:00 h · Postes y anclajes financiados por los socios · Telf.: +240 222 59 69 35",
      url: "/assets/gallery-donbosco.svg"
    },
    {
      title: "Taller y Jornada de Aprendizaje en el Colegio E Waiso Ipola",
      location: "Colegio E Waiso Ipola",
      desc: "Centro pionero del Taller de Iniciación Escolar: 2 monitores asignados, material deportivo y canchas acondicionadas",
      url: "/assets/gallery-ewaiso.svg"
    },
    {
      title: "Torneo Anual de Voley Playa Sipopo (Desde 2012)",
      location: "Playa de Sipopo",
      desc: "Jornada familiar de playa, barbacoa, música y competición con equipos de 6 jugadores",
      url: "/assets/gallery-sipopo.svg"
    }
  ],
  eventAlbums: [
    {
      id: "album-sipopo",
      title: "Torneo de Voley Playa Sipopo (VIII & IX Edición)",
      category: "playa",
      categoryLabel: "Voley Playa",
      date: "Enero · Playa de Sipopo",
      location: "Playa de Sipopo, Bioko",
      coverUrl: "/assets/gallery-sipopo.svg",
      description: "Jornada anual de playa, barbacoa, música y competición entre 4 equipos de 6 jugadores desde 2012.",
      photos: [
        {
          url: "/assets/gallery-sipopo.svg",
          caption: "Equipo Quinina en el podio del Torneo Voley Playa Sipopo",
          date: "Enero"
        },
        {
          url: "/assets/gallery-donbosco.svg",
          caption: "Ambiente deportivo y familiar en la arena de Sipopo",
          date: "Enero"
        }
      ]
    },
    {
      id: "album-waiso-ipola",
      title: "Jornada de Aprendizaje en Colegio E Waiso Ipola",
      category: "escolar",
      categoryLabel: "Iniciación Escolar",
      date: "5 de diciembre · Malabo",
      location: "Colegio E Waiso Ipola",
      coverUrl: "/assets/gallery-ewaiso.svg",
      description: "Acondicionamiento y pintado de canchas cubierta y exterior y entrenamientos prácticos con alumnos de primaria.",
      photos: [
        {
          url: "/assets/gallery-ewaiso.svg",
          caption: "Monitores y alumnos de primaria en la cancha acondicionada",
          date: "5 de diciembre"
        },
        {
          url: "/assets/gallery-donbosco.svg",
          caption: "Ejercicios de saque, toque de dedos y antebrazo",
          date: "5 de diciembre"
        }
      ]
    },
    {
      id: "album-donbosco",
      title: "Entrenamientos en Don Bosco y Clásico de Navidad",
      category: "club",
      categoryLabel: "Sede Don Bosco",
      date: "Lunes a Viernes · Elá Nguema",
      location: "Polideportivo Salesianos Don Bosco",
      coverUrl: "/assets/gallery-donbosco.svg",
      description: "Sesiones formativas de 19:00 a 21:00 h, anclajes y postes móviles propios y el tradicional partido navideño a 5 sets.",
      photos: [
        {
          url: "/assets/gallery-donbosco.svg",
          caption: "Entrenamientos diarios en Salesianos Don Bosco de Elá Nguema",
          date: "Lunes a viernes 19:00-21:00 h"
        },
        {
          url: "/assets/gallery-sipopo.svg",
          caption: "Estreno del juego de postes móviles financiado por los socios",
          date: "Diciembre"
        }
      ]
    }
  ],
  pillarsSection: {
    eyebrow: "Quiénes Somos · Desde 2010",
    title: "Deporte base, formación técnica y competición nacional",
    desc: "Convencidos de que el deporte base es la herramienta pedagógica más potente para la juventud, trabajamos para crear cantera y fomentar hábitos de vida saludables en Guinea Ecuatorial.",
    items: [
      {
        badge: "01 · Deporte Base y Escolar (10–18 años)",
        title: "Talleres Escolares y Liga Intercolegial",
        desc: "Facilitamos 2 entrenadores cualificados por colegio (principal y apoyo) y material deportivo inicial sin coste operativo para el centro educativo.",
        points: [
          "Categoría Infantil/Cadete (10–14 años) y Juvenil (15–18 años)",
          "Fomento de la Liga Escolar Intercolegial en Malabo",
          "Partidos amistosos y convivencias trimestrales entre colegios",
          "Rehabilitación de 11 canchas escolares y parques públicos"
        ]
      },
      {
        badge: "02 · Pedagógico y Técnico",
        title: "Formación Técnica y Solidaridad Olímpica",
        desc: "Enseñanza progresiva de fundamentos, valores transversales (comunicación, disciplina y resiliencia) y cursos oficiales con el Comité Olímpico.",
        points: [
          "Toque de antebrazos, pase de dedos, saques, bloqueo y remate",
          "Curso de Árbitros y Entrenadores de nivel inicial (COGE)",
          "Curso de Anotadores oficiales y Gestión Deportiva",
          "Coordinación directa con profesores de Educación Física"
        ]
      },
      {
        badge: "03 · Competitivo y Social",
        title: "Torneos Nacionales, Voley Playa y CAVB 4",
        desc: "Sesiones diarias en Don Bosco para mantener activos a veteranos y jóvenes, nutriendo a futuros clubes y selecciones nacionales.",
        points: [
          "Torneo Anual de Voley Playa Sipopo (celebrado desde 2012)",
          "8 Torneos Nacionales en fechas históricas y festivas",
          "Delegación de 17 miembros al Torneo de Veteranos CAVB Zona 4",
          "Partidos de exhibición, homenajes y Clásico de Navidad"
        ]
      }
    ]
  },
  articlesSection: {
    eyebrow: "Actualidad y Proyectos",
    title: "Artículos, Propuestas y Comunicados",
    desc: "Proyectos educativos en centros como el Colegio Waiso Ipola, crónicas de nuestros torneos en Sipopo y memoria institucional.",
    items: [
      {
        id: "art-propuesta-waiso-ipola",
        title: "Propuesta de implantación del Taller de Iniciación al Voleibol Escolar en el Colegio Waiso Ipola",
        category: "Proyecto Escolar (10–18 años)",
        date: "Malabo · Deporte Base",
        image: "/assets/gallery-ewaiso.svg",
        excerpt: "Programa integral sin coste operativo para el centro educativo: 2 entrenadores asignados, material deportivo y encuentros trimestrales rumbo a la Liga Escolar Intercolegial.",
        content: "La Asociación Deportiva «Locos por el Voleibol», nacida en 2010 por un grupo de jóvenes malabeños, impulsa el Taller de Iniciación al Voleibol Escolar con el Colegio Waiso Ipola como centro pionero.\n\n1. Objetivo General:\nPromover el aprendizaje y la práctica regular del voleibol entre los alumnos facilitando entrenadores cualificados y material deportivo (balones y redes) sin coste operativo para el colegio, con miras a consolidar una Liga Escolar Intercolegial entre los 10 y los 18 años.\n\n2. Categorías y Modelo Operativo:\n• Categoría Infantil/Cadete: 10 a 14 años.\n• Categoría Juvenil: 15 a 18 años.\n• Personal asignado: 2 monitores/entrenadores por centro (uno principal y uno de apoyo) en coordinación con los profesores de Educación Física.\n• Seguimiento: Jornadas de convivencia y partidos amistosos trimestrales intercolegiales.\n\n3. Objetivos Pedagógicos:\n• Desarrollo físico y motriz: Coordinación óculo-manual, agilidad, reflejos y capacidad aeróbica.\n• Formación técnica: Desplazamientos, toque de antebrazos, pase de dedos, saques (mano baja y alta), bloqueo y remate.\n• Valores transversales: Al ser un deporte sin contacto donde ningún jugador retiene el balón, fomenta la solidaridad, la confianza mutua, el respeto arbitral y la resiliencia."
      },
      {
        id: "art-ewaiso-ipola",
        title: "Jornada de Aprendizaje y acondicionamiento de canchas en el Colegio E Waiso Ipola",
        category: "Iniciación Escolar",
        date: "5 de diciembre · Malabo",
        image: "/assets/gallery-ewaiso.svg",
        excerpt: "Los monitores de Locos por el Voleibol pintaron la cancha cubierta y exterior del centro y dirigieron sesiones prácticas para los alumnos de primaria.",
        content: "El pasado 5 de diciembre se llevó a cabo la Jornada de Aprendizaje con los alumnos de primaria del centro educativo E Waiso Ipola.\n\nEl programa comenzó a las 10:00 horas con el trazado y pintado tanto de la cancha cubierta como de la cancha exterior del colegio. A las 14:00 horas llegaron los monitores y alumnos para formar los grupos de trabajo e iniciar los ejercicios prácticos de toque de mano baja, toque de dedos y saque.\n\nTras la pausa de las 16:30 para el bocadillo y la hidratación, a las 17:00 se disputó el partido de exhibición de los monitores, cerrando a las 18:15 con la foto de familia. Esta actividad contó con la colaboración de GETESA y del Comité Olímpico de Guinea Ecuatorial."
      },
      {
        id: "art-sipopo-viii",
        title: "Quinina se proclama campeón de la VIII Edición del Torneo de Voley Playa Sipopo",
        category: "Voley Playa Sipopo",
        date: "19 de enero · Playa de Sipopo",
        image: "/assets/gallery-sipopo.svg",
        excerpt: "Como todos los años desde 2012, la Asociación organizó su cita anual en la playa de Sipopo combinando deporte, música, barbacoa y ambiente familiar.",
        content: "Como todos los años desde el 2012, la Asociación Deportiva Locos por el Voleibol organizó la Octava Edición del Torneo de Voley Playa Sipopo, una iniciativa que promueve el voleibol en la turística playa de Sipopo ofreciendo una jornada de ocio familiar y saludable.\n\nParticiparon 4 equipos de 6 jugadores cada uno. Tras el sorteo de semifinales (a 1 set de 21 puntos), se disputaron el partido por el tercer puesto y la gran final al mejor de 3 sets de 21 puntos.\n\nClasificación final:\n• Campeón: Quinina\n• Subcampeón: Los Guerreros\n• Tercer puesto: Real Bosco\n• Cuarto puesto: El equipo de los animadores"
      },
      {
        id: "art-navidad-donbosco",
        title: "El Equipo Naranja vence 3-2 en el Clásico de Navidad y se estrenan postes en Don Bosco",
        category: "Vida del Club",
        date: "19 de diciembre · Malabo",
        image: "/assets/gallery-donbosco.svg",
        excerpt: "Intenso partido a 5 sets para despedir el año y adquisición de un nuevo juego de postes móviles con anclajes financiado por los socios.",
        content: "Para despedir el año con motivo de las fiestas navideñas, se disputó el tradicional partido al mejor de 5 sets de 25 puntos entre el Equipo Naranja y el Equipo Verde, con victoria por 3 sets a 2 para el Equipo Naranja.\n\n• Equipo Naranja: Dolores Nsue Anguesomo, Lorenzo Eto, José Quintín Mejía, Abuelo, Tahatá y Charly.\n• Equipo Verde: Elvira Silochi, Víctor Manuel Esono, Edersin, Majo, Bernabé Bita y Alberto.\n\nAsimismo, gracias a las aportaciones voluntarias de socios, practicantes y colaboradores (340.500 XAF), la Asociación adquirió un nuevo juego de postes móviles con accesorios y ejecutó los agujeros de anclaje en la cancha de Salesianos Don Bosco de Elá Nguema."
      }
    ]
  },
  tournaments: [
    {
      id: "torneo-sipopo-playa",
      category: "playa",
      cityLabel: "Sipopo · Voley Playa",
      status: "Tradición desde 2012",
      isLive: true,
      title: "Torneo Anual de Voley Playa Sipopo (VIII & IX Edición)",
      dates: "Enero / Febrero",
      venue: "Playa de Sipopo, Bioko",
      division: "Equipos de 6 jugadores · Semifinales y Final a 21 pts",
      description:
        "Iniciativa emblemática organizada cada año desde 2012 para promover el voleibol en la playa de Sipopo en una jornada familiar y saludable de playa, barbacoa, música y deporte.",
      scheduleHighlight: "Jornada Dominical Completa"
    },
    {
      id: "liga-escolar-intercolegial",
      category: "escolar",
      cityLabel: "Malabo · 11 Colegios",
      status: "Trimestral / Anual",
      isLive: true,
      title: "Encuentros Trimestrales y Liga Escolar Intercolegial (10–18 años)",
      dates: "Trimestral durante el curso escolar",
      venue: "Colegio Waiso Ipola y 11 Centros Educativos de Malabo",
      division: "Infantil/Cadete (10–14 años) y Juvenil (15–18 años)",
      description:
        "Jornadas de convivencia y partidos amistosos trimestrales intercolegiales para evaluar el progreso de los talleres escolares y consolidar equipos estables.",
      scheduleHighlight: "Tardes y Fines de Semana"
    },
    {
      id: "torneo-cavb-zona4",
      category: "internacional",
      cityLabel: "Internacional · CAVB Zona 4",
      status: "Delegación Oficial",
      isLive: true,
      title: "Torneo Anual de Veteranos de Voleibol (TVV) — CAVB Zona 4",
      dates: "Calendario CAVB Zona 4",
      venue: "Sede Confederación Africana de Voleibol Zona 4",
      division: "17 Miembros (1 Directivo, 2 Entrenadores, 15 Jugadores)",
      description:
        "Participación internacional del equipo de veteranos de Locos por el Voleibol representando a Guinea Ecuatorial en la Zona 4 de la Confederación Africana.",
      scheduleHighlight: "Concentración Internacional"
    },
    {
      id: "torneo-san-juan-bosco",
      category: "nacionales",
      cityLabel: "Elá Nguema · Pista",
      status: "Enero",
      isLive: false,
      title: "Torneo San Juan Bosco",
      dates: "Mes de Enero",
      venue: "Polideportivo Salesianos Don Bosco, Elá Nguema",
      division: "Categoría Abierta y Socios",
      description:
        "Torneo inaugural del calendario anual en nuestra cancha sede de Salesianos Don Bosco en Elá Nguema.",
      scheduleHighlight: "Sede Don Bosco Elá Nguema"
    },
    {
      id: "torneo-mujer-marzo",
      category: "nacionales",
      cityLabel: "Malabo · Pista",
      status: "3 de Marzo",
      isLive: false,
      title: "Torneo 3 de Marzo “Día Internacional de la Mujer”",
      dates: "3 de Marzo",
      venue: "Malabo",
      division: "Femenino y Mixto",
      description:
        "Jornada competitiva dedicada a visibilizar e impulsar la participación femenina en el voleibol ecuatoguineano.",
      scheduleHighlight: "Jornada Conmemorativa"
    },
    {
      id: "torneo-trabajo-mayo",
      category: "nacionales",
      cityLabel: "Malabo · Pista",
      status: "1 de Mayo",
      isLive: false,
      title: "Torneo 1 de Mayo “Día Internacional del Trabajo”",
      dates: "1 de Mayo",
      venue: "Polideportivo Don Bosco / Malabo",
      division: "Clubes, Empresas y Socios",
      description:
        "Encuentro deportivo de confraternización y competición con motivo del Día Internacional del Trabajo.",
      scheduleHighlight: "Festivo Nacional"
    },
    {
      id: "torneo-5-junio",
      category: "nacionales",
      cityLabel: "Malabo · Nacional",
      status: "5 de Junio",
      isLive: false,
      title: "Torneo 5 de Junio “Natalicio de S.E.”",
      dates: "5 de Junio",
      venue: "Malabo",
      division: "Categoría Sénior y Veteranos",
      description:
        "Cita oficial dentro del calendario de torneos nacionales promovidos por la Asociación Deportiva Locos por el Voleibol.",
      scheduleHighlight: "Jornada Oficial"
    },
    {
      id: "torneo-nino-africano",
      category: "escolar",
      cityLabel: "Centros Educativos · Juvenil",
      status: "16 de Junio",
      isLive: false,
      title: "Torneo 16 de Junio “Día Internacional del Niño Africano”",
      dates: "16 de Junio",
      venue: "Centros Educativos de Malabo",
      division: "Infantil/Cadete (10–14) y Juvenil (15–18)",
      description:
        "Torneo formativo protagonizado por los alumnos de los 11 centros escolares que integran el Proyecto de Iniciación al Voleibol.",
      scheduleHighlight: "Deporte Base Escolar"
    },
    {
      id: "torneo-independencia-octubre",
      category: "nacionales",
      cityLabel: "Malabo · Nacional",
      status: "12 de Octubre",
      isLive: false,
      title: "Torneo 12 de Octubre “Día de la Independencia”",
      dates: "12 de Octubre",
      venue: "Malabo",
      division: "Sénior y Exhibición",
      description:
        "Torneo conmemorativo de la Independencia Nacional con participación de los equipos activos y veteranos.",
      scheduleHighlight: "Fiesta Nacional"
    },
    {
      id: "torneo-santa-isabel",
      category: "nacionales",
      cityLabel: "Malabo · Patronales",
      status: "17 de Noviembre",
      isLive: false,
      title: "Torneo 17 de Noviembre “Santa Isabel”",
      dates: "17 de Noviembre",
      venue: "Malabo",
      division: "Sénior, Veteranos y Jóvenes",
      description:
        "Clásico torneo de las fiestas patronales de Santa Isabel en Malabo.",
      scheduleHighlight: "Festividad de Malabo"
    }
  ],
  sipopoStandings: [
    { pos: "1º", team: "Quinina", players: "6 Jugadores", format: "Campeón (Final al mejor de 3 sets a 21 pts)", highlight: true },
    { pos: "2º", team: "Los Guerreros", players: "6 Jugadores", format: "Subcampeón", highlight: false },
    { pos: "3º", team: "Real Bosco", players: "6 Jugadores", format: "Tercer Puesto", highlight: false },
    { pos: "4º", team: "El equipo de los animadores", players: "6 Jugadores", format: "Semifinalista", highlight: false }
  ],
  recentMatches: [
    {
      competition: "Clásico de Navidad y Fin de Año · Colegio E Waiso Ipola",
      date: "19 de diciembre",
      home: "Equipo Naranja",
      away: "Equipo Verde",
      score: "3 - 2",
      setsDetail:
        "Naranja (Dolores Nsue Anguesomo, Lorenzo Eto, José Quintín Mejía, Abuelo, Tahatá, Charly) vs Verde (Elvira Silochi, Víctor Manuel Esono, Edersin, Majo, Bernabé Bita, Alberto)"
    },
    {
      competition: "Jornada de Aprendizaje y Exhibición · Primaria",
      date: "5 de diciembre · Colegio E Waiso Ipola",
      home: "Monitores Locos por el Voleibol",
      away: "Grupos de Aprendizaje E Waiso Ipola",
      score: "Exhibición",
      setsDetail:
        "Pintado de cancha cubierta y exterior, clínica práctica (14:30h), merienda y partido de exhibición (con apoyo de GETESA y Comité Olímpico)."
    },
    {
      competition: "Partido de Exhibición y Memoria Institucional",
      date: "Agosto · Malabo",
      home: "Veteranos Locos por el Voleibol",
      away: "Jóvenes Activos",
      score: "Homenaje",
      setsDetail:
        "Encuentro especial en homenaje al difunto exjugador y directivo de la FEGUIVOLEI D. Jaime Okue."
    }
  ],
  schoolsSection: {
    eyebrow: "Red de 11 Colegios y Espacios",
    title: "Proyecto de Iniciación Escolar y Rehabilitación de Canchas",
    desc: "Consolidamos equipos escolares estables sin coste operativo para los centros educativos: aportamos 2 entrenadores por centro (principal y apoyo), balones y redes, impulsando la futura Liga Escolar Intercolegial de Malabo.",
    learningSchools: [
      "Colegio E Waiso Ipola (Centro Pionero)",
      "INES Bioko Norte",
      "INES Rey Malabo",
      "INES Argentina",
      "INES Aneja Luther King",
      "Colegio María Cano",
      "Colegio Español",
      "Colegio Francés",
      "Colegio Claret",
      "Colegio Santa Teresita",
      "Colegio Jesús María"
    ],
    rehabSpaces: [
      "Salesianos Don Bosco (Elá Nguema)",
      "Colegio Adventista",
      "Colegio Buen Pastor",
      "Colegio Jesús María",
      "Centro Integral Pilar Bopeyo",
      "Centro Integral de San Juan",
      "Colegio Orfanato",
      "Parque Nacional de Malabo",
      "Parque de Alcaide",
      "Estadio La Paz de Malabo",
      "INES Aneja Luther King"
    ]
  },
  venuesSection: {
    eyebrow: "Entrenamientos y Canchas",
    title: "Dónde entrenamos y competimos",
    phone: "+240 222 59 69 35",
    items: [
      {
        pill: "Sede Central de Entrenamiento",
        name: "Polideportivo Don Bosco (Elá Nguema)",
        desc: "Cancha de Salesianos de Elá Nguema, equipada con juego de postes móviles y anclajes financiados por los socios de la Asociación.",
        schedule: "⏰ Lunes a Viernes de 19:00 a 21:00 horas"
      },
      {
        pill: "Centro Pionero Escolar",
        name: "Colegio E Waiso Ipola",
        desc: "Sede de los Talleres de Iniciación Escolar (10 a 18 años con 2 monitores asignados), cancha cubierta y exterior acondicionadas y Clásico de Navidad.",
        schedule: "Sesiones extracurriculares y amistosos trimestrales"
      },
      {
        pill: "Sede de Voley Playa",
        name: "Playa de Sipopo",
        desc: "Sede desde 2012 del Torneo Anual de Voley Playa Sipopo: deporte, convivencia familiar, música y captación de nuevos jugadores y patrocinadores.",
        schedule: "Equipamiento propio de 10 sets y cintas azules de Voley Playa"
      }
    ]
  },
  customSections: []
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(DEFAULT_STATE);
    const parsed = JSON.parse(raw);
    const state = { ...structuredClone(DEFAULT_STATE), ...parsed };
    if (!state.eventAlbums || !state.eventAlbums.length) {
      state.eventAlbums = structuredClone(DEFAULT_STATE.eventAlbums);
    }
    return state;
  } catch (e) {
    return structuredClone(DEFAULT_STATE);
  }
}

function saveState(state = window.APP_STATE) {
  if (state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }
}

function getAdminPassword() {
  return localStorage.getItem(PASS_KEY) || "locos2026";
}

function isAdminLoggedIn() {
  return sessionStorage.getItem(SESSION_KEY) === "1";
}
