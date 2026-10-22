// Estado oficial de la Asociación Deportiva “Locos por el Voleibol” - Guinea Ecuatorial
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

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(APP_STATE));
}

function getAdminPassword() {
  return localStorage.getItem(PASS_KEY) || "locos2026";
}

function isAdminLoggedIn() {
  return sessionStorage.getItem(SESSION_KEY) === "1";
}

let APP_STATE = loadState();
let currentGalleryIndex = 0;
let currentTournamentFilter = "all";

function compressImageFile(file, maxWidth = 1000, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, maxWidth / img.width);
        const w = Math.round(img.width * scale);
        const h = Math.round(img.height * scale);
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.onerror = reject;
      img.src = ev.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function renderHeroAndGallery() {
  document.getElementById("hero-eyebrow").textContent = APP_STATE.hero.eyebrow;
  document.getElementById("hero-title").innerHTML = APP_STATE.hero.title;
  document.getElementById("hero-lead").innerHTML = APP_STATE.hero.lead;

  const metricsContainer = document.getElementById("hero-metrics-container");
  if (metricsContainer) {
    metricsContainer.innerHTML = APP_STATE.hero.metrics
      .map(
        (m) => `
        <div>
          <span class="metric-num">${m.num}</span>
          <span class="metric-label">${m.label}</span>
        </div>
      `
      )
      .join("");
  }

  const countBadge = document.getElementById("public-waiso-count");
  if (countBadge) {
    countBadge.textContent = String((APP_STATE.waisoEnrollments || []).length);
  }

  renderGallerySlide();
}

function renderGallerySlide() {
  const photos = APP_STATE.photos || [];
  if (!photos.length) return;
  if (currentGalleryIndex >= photos.length) currentGalleryIndex = 0;
  if (currentGalleryIndex < 0) currentGalleryIndex = photos.length - 1;

  const current = photos[currentGalleryIndex];
  const mainImg = document.getElementById("hero-gallery-main-img");
  const locPill = document.getElementById("gallery-location-pill");
  const counter = document.getElementById("gallery-counter");
  const titleEl = document.getElementById("gallery-caption-title");
  const descEl = document.getElementById("gallery-caption-desc");
  const dotsEl = document.getElementById("gallery-dots");
  const thumbsEl = document.getElementById("hero-gallery-thumbs");

  if (mainImg) {
    mainImg.src = current.url;
    mainImg.alt = current.title;
  }
  if (locPill) locPill.textContent = current.location;
  if (counter) counter.textContent = `${currentGalleryIndex + 1} / ${photos.length}`;
  if (titleEl) titleEl.textContent = current.title;
  if (descEl) descEl.textContent = current.desc || "";

  if (dotsEl) {
    dotsEl.innerHTML = photos
      .map(
        (_, i) =>
          `<button type="button" class="gallery-dot ${i === currentGalleryIndex ? "active" : ""}" data-gallery-idx="${i}" aria-label="Ir a foto ${i + 1}"></button>`
      )
      .join("");
  }

  if (thumbsEl) {
    thumbsEl.innerHTML = photos
      .slice(0, 8)
      .map(
        (p, i) => `
        <button type="button" class="hero-thumb-btn ${i === currentGalleryIndex ? "active" : ""}" data-gallery-idx="${i}" title="${p.title}">
          <img src="${p.url}" alt="${p.title}" loading="lazy" />
        </button>
      `
      )
      .join("");
  }
}

function renderPillars() {
  const sec = APP_STATE.pillarsSection;
  document.getElementById("pillars-eyebrow").textContent = sec.eyebrow;
  document.getElementById("pillars-title").textContent = sec.title;
  document.getElementById("pillars-desc").textContent = sec.desc;

  const grid = document.getElementById("pillars-grid");
  if (grid) {
    grid.innerHTML = sec.items
      .map(
        (p) => `
        <article class="pillar-item">
          <span class="pillar-number">${p.badge}</span>
          <h3 class="pillar-title">${p.title}</h3>
          <p class="pillar-desc">${p.desc}</p>
          <ul class="pillar-points">
            ${(p.points || []).map((pt) => `<li>${pt}</li>`).join("")}
          </ul>
        </article>
      `
      )
      .join("");
  }
}

function renderArticles() {
  const sec = APP_STATE.articlesSection;
  document.getElementById("articles-eyebrow").textContent = sec.eyebrow;
  document.getElementById("articles-title").textContent = sec.title;
  document.getElementById("articles-desc").textContent = sec.desc;

  const grid = document.getElementById("articles-grid");
  if (!grid) return;

  grid.innerHTML = (sec.items || [])
    .map(
      (a) => `
      <article class="article-card">
        <div class="article-img-wrap">
          <img src="${a.image || "/assets/gallery-donbosco.svg"}" alt="${a.title}" class="article-img" loading="lazy" />
        </div>
        <div class="article-body">
          <div class="article-meta">
            <span class="city-pill">${a.category}</span>
            <span>${a.date}</span>
          </div>
          <h3 class="article-title">${a.title}</h3>
          <p class="article-excerpt">${a.excerpt}</p>
          <div class="article-footer">
            <button type="button" class="btn btn-soft btn-sm" data-read-article="${a.id}">
              Leer completo →
            </button>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}

function renderTournaments(filter = currentTournamentFilter) {
  currentTournamentFilter = filter;
  const container = document.getElementById("tournaments-grid");
  if (!container) return;

  const list =
    filter === "all"
      ? APP_STATE.tournaments
      : APP_STATE.tournaments.filter((t) => t.category === filter);

  container.innerHTML = list
    .map(
      (t) => `
      <article class="tournament-card">
        <div class="tournament-top">
          <span class="city-pill">${t.cityLabel}</span>
          <span class="status-badge ${t.isLive ? "live" : ""}">
            ${t.isLive ? "● " : ""}${t.status}
          </span>
        </div>
        <h3 class="tournament-name">${t.title}</h3>
        <p class="pillar-desc" style="margin-bottom:0;">${t.description}</p>
        <ul class="tournament-meta-list">
          <li>📅 ${t.dates}</li>
          <li>📍 ${t.venue}</li>
          <li>🏐 ${t.division}</li>
        </ul>
        <div class="tournament-footer">
          <button type="button" class="btn btn-outline btn-sm" data-open-tournament="${t.id}">
            Ver detalles
          </button>
          <button type="button" class="btn btn-soft btn-sm" data-register-tournament="${t.title}">
            Participar →
          </button>
        </div>
      </article>
    `
    )
    .join("");
}

function renderStandingsAndSchools() {
  const tbody = document.getElementById("standings-tbody");
  if (tbody) {
    tbody.innerHTML = APP_STATE.sipopoStandings
      .map(
        (row) => `
        <tr class="${row.highlight ? "highlight-row" : ""}">
          <td><strong>${row.pos}</strong></td>
          <td>${row.team}</td>
          <td>${row.players}</td>
          <td>${row.format}</td>
        </tr>
      `
      )
      .join("");
  }

  const resultsContainer = document.getElementById("results-list");
  if (resultsContainer) {
    resultsContainer.innerHTML = APP_STATE.recentMatches
      .map(
        (m) => `
        <div class="result-item">
          <div class="result-header">
            <span>${m.competition}</span>
            <span>${m.date}</span>
          </div>
          <div class="result-scoreline">
            <span>${m.home} vs ${m.away}</span>
            <span class="score-pill">${m.score}</span>
          </div>
          <div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 0.15rem;">
            ${m.setsDetail}
          </div>
        </div>
      `
      )
      .join("");
  }

  const sSec = APP_STATE.schoolsSection;
  document.getElementById("schools-eyebrow").textContent = sSec.eyebrow;
  document.getElementById("schools-title").textContent = sSec.title;
  document.getElementById("schools-desc").textContent = sSec.desc;

  const schoolsContainer = document.getElementById("learning-schools-chips");
  if (schoolsContainer) {
    schoolsContainer.innerHTML = (sSec.learningSchools || [])
      .map((s) => `<span class="tag-chip">${s}</span>`)
      .join("");
  }

  const rehabContainer = document.getElementById("rehab-spaces-chips");
  if (rehabContainer) {
    rehabContainer.innerHTML = (sSec.rehabSpaces || [])
      .map((s) => `<span class="tag-chip">${s}</span>`)
      .join("");
  }
}

function renderVenuesAndCustomSections() {
  const vSec = APP_STATE.venuesSection;
  document.getElementById("venues-eyebrow").textContent = vSec.eyebrow;
  document.getElementById("venues-title").textContent = vSec.title;

  const vGrid = document.getElementById("venues-grid");
  if (vGrid) {
    vGrid.innerHTML = (vSec.items || [])
      .map(
        (v) => `
        <article class="venue-card">
          <span class="city-pill" style="width: fit-content;">${v.pill}</span>
          <h3 class="tournament-name">${v.name}</h3>
          <p class="pillar-desc" style="margin-bottom: 0.25rem;">${v.desc}</p>
          <p style="font-size: 0.82rem; color: var(--accent-blue); font-weight: 600;">${v.schedule}</p>
        </article>
      `
      )
      .join("");
  }

  const footerContact = document.getElementById("footer-contact-text");
  if (footerContact && vSec.phone) {
    footerContact.innerHTML = `Telf.: <a href="tel:${vSec.phone.replace(/\s+/g, "")}" style="color: var(--accent-blue); text-decoration: none; font-weight: 600;">${vSec.phone}</a> · Polideportivo Don Bosco (Elá Nguema)`;
  }

  const customContainer = document.getElementById("custom-sections-container");
  const navLinks = document.getElementById("main-nav-links");

  if (navLinks) {
    navLinks.querySelectorAll("[data-custom-nav]").forEach((el) => el.remove());
  }

  if (customContainer) {
    customContainer.innerHTML = (APP_STATE.customSections || [])
      .map((sec, idx) => {
        if (navLinks && sec.navLabel) {
          const li = document.createElement("li");
          li.setAttribute("data-custom-nav", sec.id);
          li.innerHTML = `<a href="#${sec.id}">${sec.navLabel}</a>`;
          navLinks.appendChild(li);
        }

        const cardsHtml =
          sec.items && sec.items.length
            ? `<div class="pillars-grid" style="margin-top: 1.5rem;">
                ${sec.items
                  .map(
                    (it) => `
                  <article class="pillar-item">
                    <h3 class="pillar-title">${it.title}</h3>
                    <p class="pillar-desc" style="margin-bottom: 0;">${it.desc}</p>
                  </article>
                `
                  )
                  .join("")}
              </div>`
            : "";

        return `
          <div class="${idx % 2 === 0 ? "section-alt" : ""}">
            <section id="${sec.id}" class="section">
              <div class="section-header-row">
                <div class="section-header" style="margin-bottom: 0;">
                  ${sec.eyebrow ? `<span class="eyebrow">${sec.eyebrow}</span>` : ""}
                  <h2 class="section-title">${sec.title}</h2>
                  <p class="section-desc">${sec.desc}</p>
                </div>
                <button type="button" class="btn-section-toggle" aria-expanded="true" aria-controls="${sec.id}-content" data-toggle-section>
                  <span class="toggle-text">Plegar</span> <span class="toggle-icon">▲</span>
                </button>
              </div>
              <div id="${sec.id}-content" class="collapsible-content" style="margin-top: 1.5rem;">
                ${cardsHtml}
              </div>
            </section>
          </div>
        `;
      })
      .join("");
  }
}

function toggleSection(btn) {
  const isExpanded = btn.getAttribute("aria-expanded") === "true";
  const targetId = btn.getAttribute("aria-controls");
  const section = btn.closest("section");
  const content = targetId ? document.getElementById(targetId) : section?.querySelector(".collapsible-content");

  if (!content) return;

  if (isExpanded) {
    btn.setAttribute("aria-expanded", "false");
    const textSpan = btn.querySelector(".toggle-text");
    if (textSpan) textSpan.textContent = "Desplegar";
    content.classList.add("collapsed");
    if (section) section.classList.add("section--collapsed");
  } else {
    btn.setAttribute("aria-expanded", "true");
    const textSpan = btn.querySelector(".toggle-text");
    if (textSpan) textSpan.textContent = btn.closest("#inicio") ? "Plegar portada" : "Plegar";
    content.classList.remove("collapsed");
    if (section) section.classList.remove("section--collapsed");
  }
}

let collapsibleInitialized = false;
function initCollapsibleSections() {
  if (collapsibleInitialized) return;
  collapsibleInitialized = true;

  document.addEventListener("click", (e) => {
    const toggleBtn = e.target.closest("[data-toggle-section]");
    if (toggleBtn) {
      e.preventDefault();
      toggleSection(toggleBtn);
      return;
    }

    // Auto-desplegar al pulsar en enlaces de navegación del menú
    const navLink = e.target.closest('a[href^="#"]');
    if (navLink) {
      const hash = navLink.getAttribute("href");
      if (hash && hash.length > 1) {
        const targetSec = document.querySelector(hash);
        if (targetSec) {
          const btn = targetSec.querySelector("[data-toggle-section]");
          const content = targetSec.querySelector(".collapsible-content");
          if (btn && content && content.classList.contains("collapsed")) {
            toggleSection(btn);
          }
        }
      }
    }
  });
}

let currentAlbumFilter = "all";
let currentLightboxPhotos = [];
let currentLightboxIndex = 0;
let currentLightboxTitle = "";
let currentLightboxBadge = "";

function renderEventAlbums(filter = currentAlbumFilter) {
  currentAlbumFilter = filter;
  const container = document.getElementById("event-albums-grid");
  if (!container) return;

  const albums = APP_STATE.eventAlbums || [];
  const filtered = filter === "all" ? albums : albums.filter((a) => a.category === filter);

  if (!filtered.length) {
    container.innerHTML = `<p style="text-align:center; color:var(--text-muted); padding:2rem; grid-column:1/-1;">No hay álbumes disponibles en esta categoría.</p>`;
    return;
  }

  container.innerHTML = filtered
    .map(
      (a) => `
      <article class="event-album-card" data-album-id="${a.id}">
        <div class="album-cover-wrap" data-open-album="${a.id}" data-photo-idx="0" title="Ver álbum en grande">
          <img src="${a.coverUrl || "/assets/gallery-donbosco.svg"}" alt="${a.title}" class="album-cover-img" loading="lazy" />
          <span class="album-badge-overlay">${a.categoryLabel || "Evento"}</span>
          <span class="album-count-overlay">📷 ${(a.photos && a.photos.length) || 1} fotos</span>
        </div>
        <div class="album-card-body">
          <div class="album-card-meta">
            <span>📅 ${a.date}</span>
            <span>📍 ${a.location}</span>
          </div>
          <h3 class="album-card-title">${a.title}</h3>
          <p class="album-card-desc">${a.description}</p>
          
          ${
            a.photos && a.photos.length > 1
              ? `
            <div class="album-thumbs-row">
              ${a.photos
                .map(
                  (ph, pIdx) => `
                <img
                  src="${ph.url}"
                  alt="${ph.caption || a.title}"
                  class="album-mini-thumb"
                  data-open-album="${a.id}"
                  data-photo-idx="${pIdx}"
                  title="${ph.caption || a.title} · Clic para ver en grande"
                  loading="lazy"
                />
              `
                )
                .join("")}
            </div>`
              : ""
          }

          <div style="margin-top:auto; display:flex; justify-content:space-between; align-items:center;">
            <button type="button" class="btn btn-outline btn-sm" data-open-album="${a.id}" data-photo-idx="0">
              Ver fotos en grande →
            </button>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}

function openPhotoViewer({ title, badge = "FOTO", photos = [], startIndex = 0 }) {
  if (!photos || !photos.length) return;
  currentLightboxPhotos = photos;
  currentLightboxTitle = title || "Visor de Fotos";
  currentLightboxBadge = badge;
  currentLightboxIndex = Math.max(0, Math.min(startIndex, photos.length - 1));

  const modal = document.getElementById("event-photo-modal");
  const titleEl = document.getElementById("photo-modal-title");
  const badgeEl = document.getElementById("lightbox-badge-pill");

  if (titleEl) titleEl.textContent = currentLightboxTitle;
  if (badgeEl) badgeEl.textContent = currentLightboxBadge;

  updateLightboxContent();

  if (modal) {
    if (typeof modal.showModal === "function") {
      modal.showModal();
    } else {
      modal.setAttribute("open", "");
    }
  }
}

function openEventLightbox(albumId, photoIdx = 0) {
  const albums = APP_STATE.eventAlbums || [];
  const album = albums.find((a) => a.id === albumId);
  if (!album) return;

  const rawPhotos = (album.photos && album.photos.length)
    ? album.photos
    : [{ url: album.coverUrl, caption: album.title, date: album.date }];

  const viewerPhotos = rawPhotos.map((p) => ({
    url: p.url,
    caption: p.caption || album.title,
    sub: `${album.title} · ${p.date || album.date} · 📍 ${album.location}`
  }));

  openPhotoViewer({
    title: album.title,
    badge: (album.categoryLabel || "EVENTO DEPORTIVO").toUpperCase(),
    photos: viewerPhotos,
    startIndex: photoIdx
  });
}

function openHeroLightbox(startIndex = currentGalleryIndex) {
  const photos = APP_STATE.photos || [];
  if (!photos.length) return;

  const viewerPhotos = photos.map((p) => ({
    url: p.url,
    caption: p.title,
    sub: `${p.location || "Malabo · Guinea Ecuatorial"} ${p.desc ? "· " + p.desc : ""}`
  }));

  openPhotoViewer({
    title: "Galería Oficial · Locos por el Voleibol",
    badge: "PORTADA Y ACTIVIDADES",
    photos: viewerPhotos,
    startIndex: startIndex
  });
}

function updateLightboxContent() {
  if (!currentLightboxPhotos || !currentLightboxPhotos.length) return;
  const current = currentLightboxPhotos[currentLightboxIndex] || currentLightboxPhotos[0];

  const imgEl = document.getElementById("lightbox-img");
  const captionEl = document.getElementById("lightbox-caption");
  const subEl = document.getElementById("lightbox-sub");
  const counterEl = document.getElementById("lightbox-counter");

  if (imgEl) {
    imgEl.src = current.url;
    imgEl.alt = current.caption || currentLightboxTitle;
  }
  if (captionEl) captionEl.textContent = current.caption || currentLightboxTitle;
  if (subEl) subEl.textContent = current.sub || "";
  if (counterEl) counterEl.textContent = `${currentLightboxIndex + 1} / ${currentLightboxPhotos.length}`;

  // Pre-cargar la imagen siguiente para transición fluida
  if (currentLightboxPhotos.length > 1) {
    const nextIdx = (currentLightboxIndex + 1) % currentLightboxPhotos.length;
    const nextImg = new Image();
    nextImg.src = currentLightboxPhotos[nextIdx].url;
  }
}

function nextLightboxPhoto() {
  if (!currentLightboxPhotos || !currentLightboxPhotos.length) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxPhotos.length;
  updateLightboxContent();
}

function prevLightboxPhoto() {
  if (!currentLightboxPhotos || !currentLightboxPhotos.length) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxPhotos.length) % currentLightboxPhotos.length;
  updateLightboxContent();
}

function renderAll() {
  renderHeroAndGallery();
  renderPillars();
  renderArticles();
  renderTournaments();
  renderEventAlbums();
  renderStandingsAndSchools();
  renderVenuesAndCustomSections();
  updateAdminBarVisibility();
  initCollapsibleSections();
}

function updateAdminBarVisibility() {
  const btn = document.getElementById("open-admin-btn");
  if (btn) {
    btn.innerHTML = "🔒 Admin";
  }
}

function openAdminPanel(tabName = "waiso") {
  const query = tabName && tabName !== "waiso" ? `?tab=${tabName}` : "";
  window.location.href = `/admin${query}`;
}

function switchCmsTab(tabName) {
  document.querySelectorAll("[data-cms-tab]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-cms-tab") === tabName);
  });
  ["waiso", "photos", "articles", "sections", "custom", "settings"].forEach((name) => {
    const panel = document.getElementById(`cms-panel-${name}`);
    if (panel) panel.style.display = name === tabName ? "block" : "none";
  });
  if (tabName === "sections") {
    renderSectionEditor(document.getElementById("cms-section-selector").value);
  }
  if (tabName === "waiso") {
    renderWaisoAdminTable();
  }
}

function renderWaisoAdminTable() {
  const list = APP_STATE.waisoEnrollments || [];
  const filterVal = document.getElementById("waiso-admin-filter")?.value || "all";
  const filtered = filterVal === "all" ? list : list.filter((it) => it.category === filterVal);

  const infCount = list.filter((it) => it.category.includes("10 a 14")).length;
  const juvCount = list.filter((it) => it.category.includes("15 a 18")).length;

  const summaryEl = document.getElementById("waiso-admin-summary");
  if (summaryEl) {
    summaryEl.innerHTML = `Total inscritos: <strong>${list.length}</strong> alumnos · Infantil/Cadete (10–14): <strong>${infCount}</strong> · Juvenil (15–18): <strong>${juvCount}</strong>`;
  }

  const tbody = document.getElementById("waiso-admin-tbody");
  if (!tbody) return;

  if (!filtered.length) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--text-muted); padding:1.25rem;">No hay alumnos inscritos en esta categoría todavía.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered
    .map(
      (st) => `
      <tr>
        <td>
          <strong>${st.studentName}</strong>
          <span style="display:block; font-size:0.74rem; color:var(--text-muted);">${st.experience || "Iniciación"}</span>
        </td>
        <td>
          <span class="city-pill">${st.age} años</span>
          <span style="display:block; font-size:0.73rem; color:var(--text-body); margin-top:2px;">${st.category}</span>
        </td>
        <td>
          <strong>${st.school || "Colegio Waiso Ipola"}</strong>
          <span style="display:block; font-size:0.74rem; color:var(--text-muted);">${st.grade} · ${st.schedulePref || ""}</span>
        </td>
        <td>
          <span>${st.guardianName}</span>
          <a href="tel:${(st.phone || "").replace(/\s+/g, "")}" style="display:block; font-size:0.76rem; color:var(--accent-blue); text-decoration:none; font-weight:600;">${st.phone}</a>
        </td>
        <td>
          <select class="form-control" style="padding:0.25rem 0.5rem; font-size:0.76rem;" data-waiso-status="${st.id}">
            <option value="Confirmado · Grupo A" ${st.status === "Confirmado · Grupo A" ? "selected" : ""}>Confirmado · Grupo A</option>
            <option value="Confirmado · Grupo B" ${st.status === "Confirmado · Grupo B" ? "selected" : ""}>Confirmado · Grupo B</option>
            <option value="Pendiente" ${st.status === "Pendiente" ? "selected" : ""}>Pendiente</option>
          </select>
        </td>
        <td>
          <button type="button" class="btn btn-danger btn-sm" data-delete-waiso="${st.id}">Borrar</button>
        </td>
      </tr>
    `
    )
    .join("");
}

function renderCmsLists() {
  renderWaisoAdminTable();

  const photosList = document.getElementById("cms-photos-list");
  if (photosList) {
    photosList.innerHTML = APP_STATE.photos
      .map(
        (p, idx) => `
        <div class="admin-list-item">
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <img src="${p.url}" alt="" class="admin-list-thumb" />
            <div>
              <strong style="font-size:0.85rem; display:block;">${p.title}</strong>
              <span style="font-size:0.75rem; color:var(--text-muted);">${p.location} · ${p.desc || ""}</span>
            </div>
          </div>
          <div style="display:flex; gap:0.4rem;">
            <button type="button" class="btn btn-outline btn-sm" data-edit-photo="${idx}">Editar</button>
            <button type="button" class="btn btn-danger btn-sm" data-delete-photo="${idx}">Borrar</button>
          </div>
        </div>
      `
      )
      .join("");
  }

  const articlesList = document.getElementById("cms-articles-list");
  if (articlesList) {
    articlesList.innerHTML = APP_STATE.articlesSection.items
      .map(
        (a) => `
        <div class="admin-list-item">
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <img src="${a.image || "/assets/gallery-donbosco.svg"}" alt="" class="admin-list-thumb" />
            <div>
              <strong style="font-size:0.85rem; display:block;">${a.title}</strong>
              <span style="font-size:0.75rem; color:var(--text-muted);">${a.category} · ${a.date}</span>
            </div>
          </div>
          <div style="display:flex; gap:0.4rem;">
            <button type="button" class="btn btn-outline btn-sm" data-edit-article="${a.id}">Editar</button>
            <button type="button" class="btn btn-danger btn-sm" data-delete-article="${a.id}">Borrar</button>
          </div>
        </div>
      `
      )
      .join("");
  }

  const customList = document.getElementById("cms-custom-sections-list");
  if (customList) {
    if (!APP_STATE.customSections.length) {
      customList.innerHTML = `<p style="font-size:0.8rem; color:var(--text-muted);">Aún no has creado secciones adicionales. Usa el formulario superior para añadir una nueva sección al menú y a la página.</p>`;
    } else {
      customList.innerHTML = APP_STATE.customSections
        .map(
          (sec) => `
          <div class="admin-list-item">
            <div>
              <strong style="font-size:0.85rem; display:block;">${sec.title} (${sec.navLabel})</strong>
              <span style="font-size:0.75rem; color:var(--text-muted);">${sec.desc.slice(0, 80)}...</span>
            </div>
            <div style="display:flex; gap:0.4rem;">
              <button type="button" class="btn btn-outline btn-sm" data-edit-custom-sec="${sec.id}">Editar</button>
              <button type="button" class="btn btn-danger btn-sm" data-delete-custom-sec="${sec.id}">Borrar</button>
            </div>
          </div>
        `
        )
        .join("");
    }
  }
}

function renderSectionEditor(sectionKey) {
  const container = document.getElementById("cms-section-editor-container");
  if (!container) return;

  if (sectionKey === "hero") {
    const h = APP_STATE.hero;
    container.innerHTML = `
      <form id="dynamic-sec-form-hero" style="display:flex; flex-direction:column; gap:0.75rem;">
        <div class="form-group">
          <label>Etiqueta superior (Eyebrow)</label>
          <input type="text" name="eyebrow" class="form-control" value="${h.eyebrow.replace(/"/g, "&quot;")}" required />
        </div>
        <div class="form-group">
          <label>Título principal (admite &lt;strong&gt; para resaltar en azul)</label>
          <input type="text" name="title" class="form-control" value="${h.title.replace(/"/g, "&quot;")}" required />
        </div>
        <div class="form-group">
          <label>Descripción principal</label>
          <textarea name="lead" rows="3" class="form-control" required>${h.lead}</textarea>
        </div>
        <div class="form-group">
          <label>Cifras clave (1 por línea, formato: Valor | Etiqueta)</label>
          <textarea name="metrics" rows="4" class="form-control">${h.metrics.map((m) => `${m.num} | ${m.label}`).join("\n")}</textarea>
        </div>
        <div style="display:flex; justify-content:flex-end;">
          <button type="submit" class="btn btn-primary btn-sm">Guardar Cambios en Cabecera</button>
        </div>
      </form>
    `;
    document.getElementById("dynamic-sec-form-hero").addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      APP_STATE.hero.eyebrow = fd.get("eyebrow");
      APP_STATE.hero.title = fd.get("title");
      APP_STATE.hero.lead = fd.get("lead");
      APP_STATE.hero.metrics = fd
        .get("metrics")
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean)
        .map((line) => {
          const [num, ...rest] = line.split("|");
          return { num: (num || "").trim(), label: rest.join("|").trim() };
        });
      saveState();
      renderAll();
      alert("✓ Cabecera principal actualizada.");
    });
  } else if (sectionKey === "pillars") {
    const p = APP_STATE.pillarsSection;
    container.innerHTML = `
      <form id="dynamic-sec-form-pillars" style="display:flex; flex-direction:column; gap:0.75rem;">
        <div class="form-row">
          <div class="form-group">
            <label>Etiqueta superior</label>
            <input type="text" name="eyebrow" class="form-control" value="${p.eyebrow}" required />
          </div>
          <div class="form-group">
            <label>Título de sección</label>
            <input type="text" name="title" class="form-control" value="${p.title}" required />
          </div>
        </div>
        <div class="form-group">
          <label>Descripción de la sección</label>
          <textarea name="desc" rows="2" class="form-control">${p.desc}</textarea>
        </div>
        ${p.items
          .map(
            (item, idx) => `
          <div style="padding:0.75rem; background:var(--bg-white); border:1px solid var(--border-light); border-radius:8px;">
            <strong style="font-size:0.82rem; color:var(--accent-blue);">Eje ${idx + 1}</strong>
            <div class="form-row" style="margin-top:0.4rem;">
              <div class="form-group">
                <label>Insignia</label>
                <input type="text" name="badge_${idx}" class="form-control" value="${item.badge}" />
              </div>
              <div class="form-group">
                <label>Título del Eje</label>
                <input type="text" name="title_${idx}" class="form-control" value="${item.title}" />
              </div>
            </div>
            <div class="form-group" style="margin-top:0.4rem;">
              <label>Descripción</label>
              <input type="text" name="desc_${idx}" class="form-control" value="${item.desc}" />
            </div>
            <div class="form-group" style="margin-top:0.4rem;">
              <label>Puntos clave (1 por línea)</label>
              <textarea name="points_${idx}" rows="3" class="form-control">${(item.points || []).join("\n")}</textarea>
            </div>
          </div>
        `
          )
          .join("")}
        <div style="display:flex; justify-content:flex-end;">
          <button type="submit" class="btn btn-primary btn-sm">Guardar Los 3 Ejes</button>
        </div>
      </form>
    `;
    document.getElementById("dynamic-sec-form-pillars").addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      APP_STATE.pillarsSection.eyebrow = fd.get("eyebrow");
      APP_STATE.pillarsSection.title = fd.get("title");
      APP_STATE.pillarsSection.desc = fd.get("desc");
      APP_STATE.pillarsSection.items = APP_STATE.pillarsSection.items.map((_, idx) => ({
        badge: fd.get(`badge_${idx}`),
        title: fd.get(`title_${idx}`),
        desc: fd.get(`desc_${idx}`),
        points: fd
          .get(`points_${idx}`)
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean)
      }));
      saveState();
      renderAll();
      alert("✓ Sección de los 3 Ejes actualizada.");
    });
  } else if (sectionKey === "tournaments") {
    container.innerHTML = `
      <form id="dynamic-tournament-add" style="display:flex; flex-direction:column; gap:0.65rem; background:var(--bg-white); padding:0.9rem; border-radius:8px; border:1px solid var(--border-light);">
        <strong style="font-size:0.84rem;">Añadir nuevo Torneo al Calendario</strong>
        <div class="form-row">
          <div class="form-group">
            <label>Nombre del Torneo *</label>
            <input type="text" name="title" class="form-control" required />
          </div>
          <div class="form-group">
            <label>Categoría de filtro *</label>
            <select name="category" class="form-control">
              <option value="nacionales">Torneos Nacionales</option>
              <option value="playa">Voley Playa Sipopo</option>
              <option value="escolar">Iniciación y Liga Escolar</option>
              <option value="internacional">CAVB Zona 4</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Fechas *</label>
            <input type="text" name="dates" class="form-control" placeholder="Ej. 15 Agosto" required />
          </div>
          <div class="form-group">
            <label>Sede *</label>
            <input type="text" name="venue" class="form-control" placeholder="Ej. Polideportivo Don Bosco" required />
          </div>
        </div>
        <div class="form-group">
          <label>Descripción *</label>
          <input type="text" name="description" class="form-control" required />
        </div>
        <div style="display:flex; justify-content:flex-end;">
          <button type="submit" class="btn btn-primary btn-sm">+ Añadir Torneo</button>
        </div>
      </form>
      <div style="margin-top:0.75rem; display:flex; flex-direction:column; gap:0.4rem;">
        ${APP_STATE.tournaments
          .map(
            (t, idx) => `
          <div class="admin-list-item">
            <div>
              <strong style="font-size:0.82rem;">${t.title}</strong>
              <span style="font-size:0.74rem; color:var(--text-muted); display:block;">${t.dates} · ${t.venue}</span>
            </div>
            <button type="button" class="btn btn-danger btn-sm" data-del-tournament="${idx}">Eliminar</button>
          </div>
        `
          )
          .join("")}
      </div>
    `;
    document.getElementById("dynamic-tournament-add").addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      APP_STATE.tournaments.unshift({
        id: "torneo-" + Date.now(),
        category: fd.get("category"),
        cityLabel: fd.get("venue"),
        status: fd.get("dates"),
        isLive: true,
        title: fd.get("title"),
        dates: fd.get("dates"),
        venue: fd.get("venue"),
        division: "Categoría Oficial",
        description: fd.get("description"),
        scheduleHighlight: fd.get("dates")
      });
      saveState();
      renderAll();
      renderSectionEditor("tournaments");
    });
  } else if (sectionKey === "schools") {
    const s = APP_STATE.schoolsSection;
    container.innerHTML = `
      <form id="dynamic-sec-form-schools" style="display:flex; flex-direction:column; gap:0.75rem;">
        <div class="form-group">
          <label>Título de la sección</label>
          <input type="text" name="title" class="form-control" value="${s.title}" required />
        </div>
        <div class="form-group">
          <label>Descripción</label>
          <textarea name="desc" rows="2" class="form-control">${s.desc}</textarea>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Centros de las Jornadas y Talleres Escolares (1 por línea)</label>
            <textarea name="learningSchools" rows="6" class="form-control">${s.learningSchools.join("\n")}</textarea>
          </div>
          <div class="form-group">
            <label>Canchas y Espacios en Adecuación (1 por línea)</label>
            <textarea name="rehabSpaces" rows="6" class="form-control">${s.rehabSpaces.join("\n")}</textarea>
          </div>
        </div>
        <div style="display:flex; justify-content:flex-end;">
          <button type="submit" class="btn btn-primary btn-sm">Guardar Colegios y Canchas</button>
        </div>
      </form>
    `;
    document.getElementById("dynamic-sec-form-schools").addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      APP_STATE.schoolsSection.title = fd.get("title");
      APP_STATE.schoolsSection.desc = fd.get("desc");
      APP_STATE.schoolsSection.learningSchools = fd
        .get("learningSchools")
        .split("\n")
        .map((x) => x.trim())
        .filter(Boolean);
      APP_STATE.schoolsSection.rehabSpaces = fd
        .get("rehabSpaces")
        .split("\n")
        .map((x) => x.trim())
        .filter(Boolean);
      saveState();
      renderAll();
      alert("✓ Colegios y canchas actualizados.");
    });
  } else if (sectionKey === "venues") {
    const v = APP_STATE.venuesSection;
    container.innerHTML = `
      <form id="dynamic-sec-form-venues" style="display:flex; flex-direction:column; gap:0.75rem;">
        <div class="form-row">
          <div class="form-group">
            <label>Título de sección</label>
            <input type="text" name="title" class="form-control" value="${v.title}" required />
          </div>
          <div class="form-group">
            <label>Teléfono Oficial de Contacto</label>
            <input type="text" name="phone" class="form-control" value="${v.phone}" required />
          </div>
        </div>
        ${v.items
          .map(
            (item, idx) => `
          <div style="padding:0.75rem; background:var(--bg-white); border:1px solid var(--border-light); border-radius:8px;">
            <div class="form-row">
              <div class="form-group">
                <label>Etiqueta Sede ${idx + 1}</label>
                <input type="text" name="pill_${idx}" class="form-control" value="${item.pill}" />
              </div>
              <div class="form-group">
                <label>Nombre de la Sede</label>
                <input type="text" name="name_${idx}" class="form-control" value="${item.name}" />
              </div>
            </div>
            <div class="form-group" style="margin-top:0.4rem;">
              <label>Descripción</label>
              <input type="text" name="desc_${idx}" class="form-control" value="${item.desc}" />
            </div>
            <div class="form-group" style="margin-top:0.4rem;">
              <label>Horario / Detalle</label>
              <input type="text" name="schedule_${idx}" class="form-control" value="${item.schedule}" />
            </div>
          </div>
        `
          )
          .join("")}
        <div style="display:flex; justify-content:flex-end;">
          <button type="submit" class="btn btn-primary btn-sm">Guardar Sedes y Contacto</button>
        </div>
      </form>
    `;
    document.getElementById("dynamic-sec-form-venues").addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      APP_STATE.venuesSection.title = fd.get("title");
      APP_STATE.venuesSection.phone = fd.get("phone");
      APP_STATE.venuesSection.items = APP_STATE.venuesSection.items.map((_, idx) => ({
        pill: fd.get(`pill_${idx}`),
        name: fd.get(`name_${idx}`),
        desc: fd.get(`desc_${idx}`),
        schedule: fd.get(`schedule_${idx}`)
      }));
      saveState();
      renderAll();
      alert("✓ Sedes y contacto actualizados.");
    });
  }
}

function setupInteractions() {
  // Auto-selección de categoría según edad en el formulario de Waiso Ipola
  const waisoAgeInput = document.getElementById("waiso-age");
  const waisoCatSelect = document.getElementById("waiso-category");
  if (waisoAgeInput && waisoCatSelect) {
    waisoAgeInput.addEventListener("input", () => {
      const age = Number(waisoAgeInput.value);
      if (age >= 15) {
        waisoCatSelect.value = "Juvenil (15 a 18 años)";
      } else if (age > 0) {
        waisoCatSelect.value = "Infantil/Cadete (10 a 14 años)";
      }
    });
  }

  // Envío del Formulario Público del Taller Colegio Waiso Ipola
  const waisoForm = document.getElementById("waiso-workshop-form");
  if (waisoForm) {
    waisoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(waisoForm);
      const entry = {
        id: "waiso-" + Date.now(),
        studentName: fd.get("studentName").trim(),
        age: fd.get("age"),
        category: fd.get("category"),
        grade: fd.get("grade").trim(),
        school: fd.get("school"),
        experience: fd.get("experience"),
        guardianName: fd.get("guardianName").trim(),
        phone: fd.get("phone").trim(),
        schedulePref: fd.get("schedulePref"),
        status: "Confirmado · Grupo A",
        createdAt: new Date().toISOString().slice(0, 10)
      };

      APP_STATE.waisoEnrollments = APP_STATE.waisoEnrollments || [];
      APP_STATE.waisoEnrollments.unshift(entry);
      saveState();
      renderAll();

      const fb = document.getElementById("waiso-form-feedback");
      if (fb) {
        fb.style.display = "block";
        fb.innerHTML = `✅ <strong>¡Inscripción registrada!</strong> El alumno/a <strong>${entry.studentName}</strong> (${entry.category} · ${entry.school}) ya figura en el listado oficial del taller.`;
      }
      waisoForm.reset();
    });
  }

  // Filtro y Alta manual en la pestaña Admin de Waiso Ipola
  document.getElementById("waiso-admin-filter")?.addEventListener("change", () => {
    renderWaisoAdminTable();
  });

  const adminAddWaisoForm = document.getElementById("admin-add-waiso-form");
  if (adminAddWaisoForm) {
    adminAddWaisoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(adminAddWaisoForm);
      APP_STATE.waisoEnrollments.unshift({
        id: "waiso-" + Date.now(),
        studentName: fd.get("studentName").trim(),
        age: fd.get("age"),
        category: fd.get("category"),
        grade: fd.get("grade").trim(),
        school: "Colegio Waiso Ipola",
        experience: "Iniciación",
        guardianName: fd.get("guardianName").trim(),
        phone: fd.get("phone").trim(),
        schedulePref: "Tardes",
        status: "Confirmado · Grupo A",
        createdAt: new Date().toISOString().slice(0, 10)
      });
      saveState();
      renderAll();
      renderWaisoAdminTable();
      adminAddWaisoForm.reset();
    });
  }

  // Exportar CSV de Inscritos al Taller Waiso Ipola
  document.getElementById("export-waiso-csv-btn")?.addEventListener("click", () => {
    const rows = [
      ["Alumno/a", "Edad", "Categoria", "Colegio", "Curso", "Nivel", "Tutor", "Telefono", "Horario", "Estado", "Fecha"]
    ];
    (APP_STATE.waisoEnrollments || []).forEach((st) => {
      rows.push([
        st.studentName,
        st.age,
        st.category,
        st.school,
        st.grade,
        st.experience || "",
        st.guardianName,
        st.phone,
        st.schedulePref || "",
        st.status,
        st.createdAt || ""
      ]);
    });
    const csvContent =
      "\uFEFF" +
      rows
        .map((r) => r.map((cell) => `"${String(cell || "").replace(/"/g, '""')}"`).join(","))
        .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "inscritos-taller-waiso-ipola.csv";
    a.click();
    URL.revokeObjectURL(url);
  });

  // Cambio de Estado/Grupo en tabla Admin Waiso
  document.addEventListener("change", (e) => {
    const statusSelect = e.target.closest("[data-waiso-status]");
    if (statusSelect) {
      const id = statusSelect.getAttribute("data-waiso-status");
      const st = (APP_STATE.waisoEnrollments || []).find((item) => item.id === id);
      if (st) {
        st.status = statusSelect.value;
        saveState();
      }
    }
  });

  document.getElementById("gallery-prev-btn")?.addEventListener("click", () => {
    currentGalleryIndex--;
    renderGallerySlide();
  });
  document.getElementById("gallery-next-btn")?.addEventListener("click", () => {
    currentGalleryIndex++;
    renderGallerySlide();
  });

  const filterBtns = document.querySelectorAll("[data-filter]");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderTournaments(btn.getAttribute("data-filter"));
    });
  });

  const albumFilterBtns = document.querySelectorAll("[data-album-filter]");
  albumFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      albumFilterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderEventAlbums(btn.getAttribute("data-album-filter"));
    });
  });

  // Abrir foto en grande al pulsar en la imagen principal del carrusel de portada
  document.getElementById("hero-gallery-main-img")?.addEventListener("click", () => {
    openHeroLightbox(currentGalleryIndex);
  });

  // Abrir foto de álbum o evento en grande
  document.addEventListener("click", (e) => {
    const albumEl = e.target.closest("[data-open-album]");
    if (albumEl) {
      e.preventDefault();
      const albumId = albumEl.getAttribute("data-open-album");
      const idx = Number(albumEl.getAttribute("data-photo-idx") || 0);
      openEventLightbox(albumId, idx);
      return;
    }

    // Abrir foto de artículo en grande al hacer clic
    const artImg = e.target.closest(".article-img");
    if (artImg) {
      e.preventDefault();
      const artCard = artImg.closest(".article-card");
      const title = artCard?.querySelector(".article-title")?.textContent || "Artículo";
      const cat = artCard?.querySelector(".city-pill")?.textContent || "ACTUALIDAD";
      openPhotoViewer({
        title,
        badge: cat,
        photos: [{ url: artImg.src, caption: title, sub: "Fotografía oficial de la crónica deportiva" }],
        startIndex: 0
      });
    }
  });

  // Botones de navegación del Visor en Grande (Tanto laterales como inferiores)
  document.getElementById("lightbox-prev-btn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    prevLightboxPhoto();
  });
  document.getElementById("lightbox-next-btn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    nextLightboxPhoto();
  });
  document.getElementById("lightbox-bottom-prev-btn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    prevLightboxPhoto();
  });
  document.getElementById("lightbox-bottom-next-btn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    nextLightboxPhoto();
  });

  // Al hacer clic en la foto misma, avanzar a la siguiente
  document.getElementById("lightbox-img-wrapper")?.addEventListener("click", (e) => {
    if (e.target.closest("button")) return;
    nextLightboxPhoto();
  });

  // Navegación con teclado (Flechas Izquierda / Derecha y Escape)
  document.addEventListener("keydown", (e) => {
    const modal = document.getElementById("event-photo-modal");
    if (modal && modal.open) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevLightboxPhoto();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        nextLightboxPhoto();
      }
    }
  });

  // Gestos táctiles en pantallas móviles (Swipe izquierda = Delante, Swipe derecha = Detrás)
  let touchStartX = 0;
  let touchEndX = 0;
  const lightboxStage = document.querySelector(".lightbox-main-stage");
  if (lightboxStage) {
    lightboxStage.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    lightboxStage.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (diff > 50) prevLightboxPhoto();
      if (diff < -50) nextLightboxPhoto();
    }, { passive: true });
  }

  document.getElementById("open-admin-btn")?.addEventListener("click", () => {
    openAdminPanel("waiso");
  });

  document.getElementById("admin-logout-btn")?.addEventListener("click", () => {
    sessionStorage.removeItem(SESSION_KEY);
    updateAdminBarVisibility();
  });

  const loginForm = document.getElementById("admin-login-form");
  const loginModal = document.getElementById("admin-login-modal");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("admin-password-input");
      const err = document.getElementById("admin-login-error");
      if (input.value === getAdminPassword()) {
        sessionStorage.setItem(SESSION_KEY, "1");
        err.style.display = "none";
        input.value = "";
        const targetTab = loginModal.getAttribute("data-target-tab") || "waiso";
        loginModal.close();
        updateAdminBarVisibility();
        openAdminPanel(targetTab);
      } else {
        err.style.display = "block";
      }
    });
  }

  document.querySelectorAll("[data-cms-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      switchCmsTab(btn.getAttribute("data-cms-tab"));
    });
  });

  document.getElementById("cms-section-selector")?.addEventListener("change", (e) => {
    renderSectionEditor(e.target.value);
  });

  const photoForm = document.getElementById("cms-photo-form");
  if (photoForm) {
    photoForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const idxStr = document.getElementById("photo-edit-index").value;
      const title = document.getElementById("photo-title").value.trim();
      const location = document.getElementById("photo-location").value.trim();
      const desc = document.getElementById("photo-desc").value.trim();
      const fileInput = document.getElementById("photo-file");
      const urlInput = document.getElementById("photo-url").value.trim();

      let finalUrl = urlInput;
      if (fileInput.files && fileInput.files[0]) {
        finalUrl = await compressImageFile(fileInput.files[0]);
      }
      if (!finalUrl && idxStr !== "") {
        finalUrl = APP_STATE.photos[Number(idxStr)].url;
      }
      if (!finalUrl) {
        alert("Por favor selecciona una imagen de tu dispositivo o pega una URL.");
        return;
      }

      const photoObj = { title, location, desc, url: finalUrl };
      if (idxStr !== "") {
        APP_STATE.photos[Number(idxStr)] = photoObj;
        currentGalleryIndex = Number(idxStr);
      } else {
        APP_STATE.photos.unshift(photoObj);
        currentGalleryIndex = 0;
      }

      saveState();
      renderAll();
      renderCmsLists();
      photoForm.reset();
      document.getElementById("photo-edit-index").value = "";
      document.getElementById("photo-cancel-edit-btn").style.display = "none";
    });
  }

  document.getElementById("photo-cancel-edit-btn")?.addEventListener("click", () => {
    document.getElementById("cms-photo-form").reset();
    document.getElementById("photo-edit-index").value = "";
    document.getElementById("photo-cancel-edit-btn").style.display = "none";
  });

  const articleForm = document.getElementById("cms-article-form");
  if (articleForm) {
    articleForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const editId = document.getElementById("article-edit-id").value;
      const title = document.getElementById("article-title-input").value.trim();
      const category = document.getElementById("article-category-input").value.trim();
      const date = document.getElementById("article-date-input").value.trim();
      const excerpt = document.getElementById("article-excerpt-input").value.trim();
      const content = document.getElementById("article-content-input").value.trim();
      const fileInput = document.getElementById("article-file-input");
      const urlInput = document.getElementById("article-img-url").value.trim();

      let imageUrl = urlInput;
      if (fileInput.files && fileInput.files[0]) {
        imageUrl = await compressImageFile(fileInput.files[0]);
      }

      if (editId) {
        const existing = APP_STATE.articlesSection.items.find((a) => a.id === editId);
        if (existing) {
          existing.title = title;
          existing.category = category;
          existing.date = date;
          existing.excerpt = excerpt;
          existing.content = content;
          if (imageUrl) existing.image = imageUrl;
        }
      } else {
        APP_STATE.articlesSection.items.unshift({
          id: "art-" + Date.now(),
          title,
          category,
          date,
          image: imageUrl || "/assets/gallery-donbosco.svg",
          excerpt,
          content
        });
      }

      saveState();
      renderAll();
      renderCmsLists();
      articleForm.reset();
      document.getElementById("article-edit-id").value = "";
      document.getElementById("article-cancel-edit-btn").style.display = "none";
    });
  }

  document.getElementById("article-cancel-edit-btn")?.addEventListener("click", () => {
    document.getElementById("cms-article-form").reset();
    document.getElementById("article-edit-id").value = "";
    document.getElementById("article-cancel-edit-btn").style.display = "none";
  });

  const customSecForm = document.getElementById("cms-custom-section-form");
  if (customSecForm) {
    customSecForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const editId = document.getElementById("custom-sec-edit-id").value;
      const navLabel = document.getElementById("custom-sec-nav").value.trim();
      const eyebrow = document.getElementById("custom-sec-eyebrow").value.trim();
      const title = document.getElementById("custom-sec-title").value.trim();
      const desc = document.getElementById("custom-sec-desc").value.trim();
      const rawItems = document.getElementById("custom-sec-items").value;

      const items = rawItems
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean)
        .map((line) => {
          const [t, ...rest] = line.split("|");
          return { title: (t || "").trim(), desc: rest.join("|").trim() };
        });

      if (editId) {
        const sec = APP_STATE.customSections.find((s) => s.id === editId);
        if (sec) {
          sec.navLabel = navLabel;
          sec.eyebrow = eyebrow;
          sec.title = title;
          sec.desc = desc;
          sec.items = items;
        }
      } else {
        APP_STATE.customSections.push({
          id: "seccion-" + Date.now(),
          navLabel,
          eyebrow,
          title,
          desc,
          items
        });
      }

      saveState();
      renderAll();
      renderCmsLists();
      customSecForm.reset();
      document.getElementById("custom-sec-edit-id").value = "";
      document.getElementById("custom-sec-cancel-btn").style.display = "none";
    });
  }

  document.getElementById("cms-password-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const newPass = document.getElementById("new-admin-pass").value.trim();
    if (newPass) {
      localStorage.setItem(PASS_KEY, newPass);
      document.getElementById("new-admin-pass").value = "";
      const msg = document.getElementById("pass-saved-msg");
      if (msg) msg.style.display = "block";
    }
  });

  document.getElementById("export-json-btn")?.addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(APP_STATE, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "locos-por-el-voleibol-backup.json";
    a.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById("reset-defaults-btn")?.addEventListener("click", () => {
    if (confirm("¿Seguro que deseas restaurar los textos, fotos y artículos originales?")) {
      localStorage.removeItem(STORAGE_KEY);
      APP_STATE = loadState();
      renderAll();
      renderCmsLists();
    }
  });

  const registerModal = document.getElementById("register-modal");
  const detailModal = document.getElementById("tournament-detail-modal");
  const articleReadModal = document.getElementById("article-read-modal");
  const tournamentSelect = document.getElementById("reg-program");

  document.addEventListener("click", (e) => {
    const delWaisoBtn = e.target.closest("[data-delete-waiso]");
    if (delWaisoBtn) {
      const id = delWaisoBtn.getAttribute("data-delete-waiso");
      APP_STATE.waisoEnrollments = (APP_STATE.waisoEnrollments || []).filter((item) => item.id !== id);
      saveState();
      renderAll();
      renderWaisoAdminTable();
    }

    const galleryIdxBtn = e.target.closest("[data-gallery-idx]");
    if (galleryIdxBtn) {
      currentGalleryIndex = Number(galleryIdxBtn.getAttribute("data-gallery-idx"));
      renderGallerySlide();
    }

    const adminTabTrigger = e.target.closest("[data-open-admin-tab]");
    if (adminTabTrigger) {
      openAdminPanel(adminTabTrigger.getAttribute("data-open-admin-tab"));
    }

    const editPhotoBtn = e.target.closest("[data-edit-photo]");
    if (editPhotoBtn) {
      const idx = Number(editPhotoBtn.getAttribute("data-edit-photo"));
      const p = APP_STATE.photos[idx];
      if (p) {
        document.getElementById("photo-edit-index").value = String(idx);
        document.getElementById("photo-title").value = p.title;
        document.getElementById("photo-location").value = p.location;
        document.getElementById("photo-desc").value = p.desc || "";
        document.getElementById("photo-url").value = p.url.startsWith("data:") ? "" : p.url;
        document.getElementById("photo-cancel-edit-btn").style.display = "inline-flex";
      }
    }

    const delPhotoBtn = e.target.closest("[data-delete-photo]");
    if (delPhotoBtn) {
      const idx = Number(delPhotoBtn.getAttribute("data-delete-photo"));
      if (APP_STATE.photos.length <= 1) {
        alert("Debe quedar al menos 1 foto en la galería.");
        return;
      }
      APP_STATE.photos.splice(idx, 1);
      saveState();
      renderAll();
      renderCmsLists();
    }

    const readArtBtn = e.target.closest("[data-read-article]");
    if (readArtBtn && articleReadModal) {
      const id = readArtBtn.getAttribute("data-read-article");
      const art = APP_STATE.articlesSection.items.find((a) => a.id === id);
      if (art) {
        document.getElementById("article-modal-title").textContent = art.title;
        document.getElementById("article-modal-body").innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="city-pill">${art.category}</span>
            <span style="font-size:0.8rem; color:var(--text-muted);">${art.date}</span>
          </div>
          ${
            art.image
              ? `<img src="${art.image}" alt="${art.title}" style="width:100%; max-height:340px; object-fit:cover; border-radius:12px; border:1px solid var(--border-blue);" />`
              : ""
          }
          <div style="font-size:0.92rem; color:var(--text-main); white-space:pre-line; line-height:1.7;">${art.content}</div>
        `;
        articleReadModal.showModal();
      }
    }

    const editArtBtn = e.target.closest("[data-edit-article]");
    if (editArtBtn) {
      const id = editArtBtn.getAttribute("data-edit-article");
      const a = APP_STATE.articlesSection.items.find((item) => item.id === id);
      if (a) {
        document.getElementById("article-edit-id").value = a.id;
        document.getElementById("article-title-input").value = a.title;
        document.getElementById("article-category-input").value = a.category;
        document.getElementById("article-date-input").value = a.date;
        document.getElementById("article-img-url").value = a.image && !a.image.startsWith("data:") ? a.image : "";
        document.getElementById("article-excerpt-input").value = a.excerpt;
        document.getElementById("article-content-input").value = a.content;
        document.getElementById("article-cancel-edit-btn").style.display = "inline-flex";
      }
    }

    const delArtBtn = e.target.closest("[data-delete-article]");
    if (delArtBtn) {
      const id = delArtBtn.getAttribute("data-delete-article");
      APP_STATE.articlesSection.items = APP_STATE.articlesSection.items.filter((a) => a.id !== id);
      saveState();
      renderAll();
      renderCmsLists();
    }

    const delTournBtn = e.target.closest("[data-del-tournament]");
    if (delTournBtn) {
      const idx = Number(delTournBtn.getAttribute("data-del-tournament"));
      APP_STATE.tournaments.splice(idx, 1);
      saveState();
      renderAll();
      renderSectionEditor("tournaments");
    }

    const editCustomBtn = e.target.closest("[data-edit-custom-sec]");
    if (editCustomBtn) {
      const id = editCustomBtn.getAttribute("data-edit-custom-sec");
      const sec = APP_STATE.customSections.find((s) => s.id === id);
      if (sec) {
        document.getElementById("custom-sec-edit-id").value = sec.id;
        document.getElementById("custom-sec-nav").value = sec.navLabel;
        document.getElementById("custom-sec-eyebrow").value = sec.eyebrow || "";
        document.getElementById("custom-sec-title").value = sec.title;
        document.getElementById("custom-sec-desc").value = sec.desc;
        document.getElementById("custom-sec-items").value = (sec.items || [])
          .map((it) => `${it.title} | ${it.desc}`)
          .join("\n");
        document.getElementById("custom-sec-cancel-btn").style.display = "inline-flex";
      }
    }

    const delCustomBtn = e.target.closest("[data-delete-custom-sec]");
    if (delCustomBtn) {
      const id = delCustomBtn.getAttribute("data-delete-custom-sec");
      APP_STATE.customSections = APP_STATE.customSections.filter((s) => s.id !== id);
      saveState();
      renderAll();
      renderCmsLists();
    }

    const openRegBtn = e.target.closest("[data-open-register]");
    if (openRegBtn && registerModal) {
      const preset = openRegBtn.getAttribute("data-open-register");
      if (preset && tournamentSelect) tournamentSelect.value = preset;
      registerModal.showModal();
    }

    const regTournamentBtn = e.target.closest("[data-register-tournament]");
    if (regTournamentBtn && registerModal) {
      const title = regTournamentBtn.getAttribute("data-register-tournament");
      const notesField = document.getElementById("reg-notes");
      if (notesField) notesField.value = `Inscripción: ${title}`;
      registerModal.showModal();
    }

    const openTournamentBtn = e.target.closest("[data-open-tournament]");
    if (openTournamentBtn && detailModal) {
      const id = openTournamentBtn.getAttribute("data-open-tournament");
      const t = APP_STATE.tournaments.find((item) => item.id === id);
      if (t) {
        document.getElementById("detail-modal-title").textContent = t.title;
        document.getElementById("detail-modal-body").innerHTML = `
          <div><span class="city-pill">${t.cityLabel}</span></div>
          <p style="font-size:0.9rem; color: var(--text-body);">${t.description}</p>
          <div class="result-item" style="font-size:0.84rem;">
            <div><strong>Fecha:</strong> ${t.dates}</div>
            <div><strong>Sede:</strong> ${t.venue}</div>
            <div><strong>Modalidad:</strong> ${t.division}</div>
            <div><strong>Referencia:</strong> ${t.scheduleHighlight}</div>
          </div>
          <div style="display:flex; justify-content:flex-end;">
            <button type="button" class="btn btn-primary btn-sm" data-close-detail-and-register="${t.title}">
              Inscribirse o colaborar
            </button>
          </div>
        `;
        detailModal.showModal();
      }
    }

    const closeAndReg = e.target.closest("[data-close-detail-and-register]");
    if (closeAndReg && detailModal && registerModal) {
      const title = closeAndReg.getAttribute("data-close-detail-and-register");
      detailModal.close();
      const notesField = document.getElementById("reg-notes");
      if (notesField) notesField.value = `Inscripción: ${title}`;
      registerModal.showModal();
    }

    const closeBtn = e.target.closest("[data-close-modal]");
    if (closeBtn) {
      const dialog = closeBtn.closest("dialog");
      if (dialog) dialog.close();
    }
  });

  document.querySelectorAll("dialog.modal").forEach((dialog) => {
    dialog.addEventListener("click", (e) => {
      const rect = dialog.getBoundingClientRect();
      const inside =
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width;
      if (!inside) dialog.close();
    });
  });

  const regForm = document.getElementById("registration-form");
  if (regForm) {
    regForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(regForm);
      const entry = Object.fromEntries(formData.entries());
      const feedback = document.getElementById("reg-feedback");
      if (feedback) {
        feedback.style.display = "block";
        feedback.innerHTML = `✓ Solicitud registrada para <strong>${entry.fullName}</strong>. También puedes contactar directamente al <strong>${APP_STATE.venuesSection.phone}</strong>.`;
      }
      regForm.reset();
    });
  }
}

function checkAdminQueryParam() {
  const urlParams = new URLSearchParams(window.location.search);
  const adminParam = urlParams.get("admin");
  if (adminParam) {
    const validTabs = ["sections", "photos", "articles", "custom", "settings", "waiso"];
    const targetTab = validTabs.includes(adminParam) ? adminParam : "sections";
    setTimeout(() => {
      openAdminPanel(targetTab);
    }, 250);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderAll();
  setupInteractions();
  checkAdminQueryParam();
});
