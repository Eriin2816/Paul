// ============================================================
// CAMPAIGN CONTENT — Paul Harold Johnson
// Ventura County Clerk-Recorder 2026
// All multilingual content lives here. Edit this file to
// update copy across all 4 supported languages.
// ============================================================

export type Lang = 'en' | 'es' | 'tl' | 'fr'
export type ML = Record<Lang, string>

// --- Helpers ------------------------------------------------
export const t = (obj: ML, lang: Lang): string => obj[lang] ?? obj['en']

const ml = (en: string, es: string, tl: string, fr: string): ML => ({ en, es, tl, fr })

// ============================================================
// CONTENT BLOCK TYPES
// ============================================================
export type ContentBlock =
  | { type: 'h2'; text: ML }
  | { type: 'h3'; text: ML }
  | { type: 'p'; text: ML }
  | { type: 'ul'; items: ML[] }
  | { type: 'ol'; items: ML[] }
  | { type: 'highlight'; text: ML }
  | { type: 'divider' }
  | { type: 'cta-note'; text: ML }
  | { type: 'badge-row'; badges: ML[] }

export interface EventItem {
  id: string
  title: ML
  date: string
  time: string
  location: ML
  description: ML
  eventType: 'townhall' | 'meeting' | 'virtual' | 'community'
}

export interface NewsItem {
  id: string
  headline: ML
  source: string
  date: string
  summary: ML
  isPlaceholder: true
}

export interface FaqItem {
  id: string
  question: ML
  answer: ML
}

export interface EndorsementItem {
  id: string
  name: string
  title: ML
  organization?: string
  quote?: ML
  isPlaceholder: true
}

export interface SectionData {
  id: string
  icon: string
  label: ML
  blocks?: ContentBlock[]
  events?: EventItem[]
  news?: NewsItem[]
  faqs?: FaqItem[]
  endorsements?: EndorsementItem[]
  videoUrl?: string  // YouTube or direct video URL for News & Media
}

// ============================================================
// HERO CONTENT
// ============================================================
export const heroContent = {
  title: ml(
    'Trusted Leadership for Ventura County',
    'Liderazgo Confiable para el Condado de Ventura',
    'Mapagkakatiwalaang Pamumuno para sa Ventura County',
    'Un leadership de confiance pour le comté de Ventura'
  ),
  subtitle: ml(
    'Integrity, accessibility, and modern service for every voter and every family.',
    'Integridad, accesibilidad y servicio moderno para cada votante y cada familia.',
    'Integridad, accessibility, at makabagong serbisyo para sa bawat botante at bawat pamilya.',
    'Intégrité, accessibilité et service moderne pour chaque électeur et chaque famille.'
  ),
  body: ml(
    'Paul Harold Johnson is running for Ventura County Clerk-Recorder to support transparent elections, accessible public services, reliable records management, and a more responsive experience for the community.',
    'Paul Harold Johnson se postula para Clerk-Recorder del Condado de Ventura para apoyar elecciones transparentes, servicios públicos accesibles, manejo confiable de registros y una experiencia más eficiente para la comunidad.',
    'Tumatakbo si Paul Harold Johnson bilang Ventura County Clerk-Recorder upang itaguyod ang transparent na halalan, accessible na serbisyong pampubliko, maaasahang records management, at mas maayos na karanasan para sa komunidad.',
    'Paul Harold Johnson se présente au poste de Clerk-Recorder du comté de Ventura afin de soutenir des élections transparentes, des services publics accessibles, une gestion fiable des dossiers et une expérience plus réactive pour la communauté.'
  ),
  learnMore: ml('Learn More', 'Más Información', 'Alamin ang Higit Pa', 'En savoir plus'),
  volunteer: ml('Volunteer', 'Voluntariado', 'Boluntaryo', 'Bénévolat'),
}

// ============================================================
// ABOUT SECTION (Main page — separate from popup About content)
// ============================================================
export const aboutSection = {
  heading: ml(
    'About Paul Harold Johnson',
    'Sobre Paul Harold Johnson',
    'Tungkol kay Paul Harold Johnson',
    'À propos de Paul Harold Johnson'
  ),
  intro: ml(
    'Paul Harold Johnson is running for Ventura County Clerk-Recorder with a focus on transparency, public access, service quality, and modern systems that better serve the community.',
    'Paul Harold Johnson se postula para Clerk-Recorder del Condado de Ventura con enfoque en transparencia, acceso público, calidad de servicio y sistemas modernos que sirvan mejor a la comunidad.',
    'Tumatakbo si Paul Harold Johnson bilang Ventura County Clerk-Recorder na may pokus sa transparency, public access, kalidad ng serbisyo, at makabagong sistema na mas mahusay para sa komunidad.',
    'Paul Harold Johnson se présente au poste de Clerk-Recorder du comté de Ventura avec un engagement envers la transparence, l\'accès public, la qualité du service et des systèmes modernes au service de la communauté.'
  ),
  highlights: [
    ml(
      'Committed to accessible public service',
      'Comprometido con un servicio público accesible',
      'Nakatuon sa accessible na public service',
      'Engagé envers un service public accessible'
    ),
    ml(
      'Focused on transparency and trust',
      'Enfocado en transparencia y confianza',
      'Pinahahalagahan ang transparency at tiwala',
      'Axé sur la transparence et la confiance'
    ),
    ml(
      'Supports modernization with accountability',
      'Apoya la modernización con responsabilidad',
      'Suportado ang modernisasyon na may pananagutan',
      'Soutient la modernisation avec responsabilité'
    ),
    ml(
      'Values respectful service for every resident',
      'Valora un servicio respetuoso para cada residente',
      'Mahalaga ang magalang na serbisyo para sa bawat residente',
      'Valorise un service respectueux pour chaque résident'
    ),
  ],
  whyMatters: ml(
    'The Ventura County Clerk-Recorder is responsible for managing elections, recording vital documents, and providing public access to official records. Every resident deserves an office that is responsive, modern, and accountable.',
    'El Clerk-Recorder del Condado de Ventura es responsable de administrar elecciones, registrar documentos vitales y proporcionar acceso público a registros oficiales. Cada residente merece una oficina receptiva, moderna y responsable.',
    'Ang Ventura County Clerk-Recorder ay responsable sa pamamahala ng mga halalan, pagtatala ng mahahalagang dokumento, at pagbibigay ng pampublikong access sa opisyal na talaan. Bawat residente ay nararapat sa isang opisina na matugunan, moderno, at may pananagutan.',
    'Le Clerk-Recorder du comté de Ventura est responsable de la gestion des élections, de l\'enregistrement des documents vitaux et de l\'accès public aux dossiers officiels. Chaque résident mérite un bureau réactif, moderne et responsable.'
  ),
  ballotDesignation: ml(
    'Ballot Designation: Computerized System Analyst',
    'Designación en la boleta: Analista de Sistemas Computarizados',
    'Ballot Designation: Computerized System Analyst',
    'Désignation sur le bulletin: Analyste en systèmes informatisés'
  ),
  readBio: ml('Read Full Bio', 'Leer Biografía Completa', 'Basahin ang Buong Bio', 'Lire la biographie complète'),
  volunteerCta: ml('Volunteer', 'Voluntariado', 'Boluntaryo', 'Bénévolat'),
}

// ============================================================
// 15 SECTION DATA
// ============================================================
export const sections: SectionData[] = [

  // 1 — ABOUT PAUL
  {
    id: 'about',
    icon: '👤',
    label: ml('About Paul', 'Sobre Paul', 'Tungkol kay Paul', 'À propos de Paul'),
    blocks: [
      {
        type: 'h2',
        text: ml(
          'About Paul Harold Johnson',
          'Sobre Paul Harold Johnson',
          'Tungkol kay Paul Harold Johnson',
          'À propos de Paul Harold Johnson'
        ),
      },
      {
        type: 'highlight',
        text: ml(
          'Computerized System Analyst — Candidate for Ventura County Clerk-Recorder, 2026',
          'Analista de Sistemas Computarizados — Candidato a Clerk-Recorder del Condado de Ventura, 2026',
          'Computerized System Analyst — Kandidato para sa Ventura County Clerk-Recorder, 2026',
          'Analyste en systèmes informatisés — Candidat au poste de Clerk-Recorder du comté de Ventura, 2026'
        ),
      },
      {
        type: 'p',
        text: ml(
          'Paul Harold Johnson has dedicated his career to applying technology and analytical thinking to solve complex organizational challenges. As a Computerized System Analyst, Paul brings a deep understanding of how data systems, digital infrastructure, and process design can transform public services.',
          'Paul Harold Johnson ha dedicado su carrera a aplicar la tecnología y el pensamiento analítico para resolver desafíos organizacionales complejos. Como Analista de Sistemas Computarizados, Paul aporta un profundo entendimiento de cómo los sistemas de datos, la infraestructura digital y el diseño de procesos pueden transformar los servicios públicos.',
          'Inilaan ni Paul Harold Johnson ang kanyang karera sa paglalapat ng teknolohiya at analytical na pag-iisip upang malutas ang mga kumplikadong hamon sa organisasyon. Bilang isang Computerized System Analyst, nagdadala si Paul ng malalim na pag-unawa kung paano mababago ng mga sistema ng data, digital na imprastraktura, at disenyo ng proseso ang mga serbisyong pampubliko.',
          'Paul Harold Johnson a consacré sa carrière à l\'application de la technologie et de la pensée analytique pour résoudre des défis organisationnels complexes. En tant qu\'analyste en systèmes informatisés, Paul apporte une compréhension approfondie de la façon dont les systèmes de données, l\'infrastructure numérique et la conception de processus peuvent transformer les services publics.'
        ),
      },
      {
        type: 'p',
        text: ml(
          'Paul is a longtime resident of Ventura County and is deeply committed to the communities that make this region vibrant. He believes that county government offices should be leaders in accessibility, not barriers to it — serving residents in every neighborhood, in every language, and through every channel available.',
          'Paul es un residente de larga data del Condado de Ventura y está profundamente comprometido con las comunidades que hacen vibrante esta región. Cree que las oficinas del gobierno del condado deben ser líderes en accesibilidad, no barreras — sirviendo a los residentes en cada barrio, en cada idioma y a través de todos los canales disponibles.',
          'Si Paul ay isang matagal nang residente ng Ventura County at lubos na nakatuon sa mga komunidad na nagpapasigla sa rehiyong ito. Naniniwala siya na ang mga opisina ng pamahalaan ng county ay dapat maging mga lider sa accessibility, hindi hadlang — naglilingkod sa mga residente sa bawat kapitbahayan, sa bawat wika, at sa pamamagitan ng bawat available na channel.',
          'Paul est un résident de longue date du comté de Ventura et est profondément engagé envers les communautés qui rendent cette région vibrante. Il croit que les bureaux gouvernementaux du comté doivent être des leaders en matière d\'accessibilité, et non des obstacles — servant les résidents dans chaque quartier, dans chaque langue et par tous les canaux disponibles.'
        ),
      },
      {
        type: 'h3',
        text: ml('Core Values', 'Valores Fundamentales', 'Mga Pangunahing Halaga', 'Valeurs fondamentales'),
      },
      {
        type: 'ul',
        items: [
          ml(
            'Transparency in every decision and process',
            'Transparencia en cada decisión y proceso',
            'Transparency sa bawat desisyon at proseso',
            'Transparence dans chaque décision et processus'
          ),
          ml(
            'Accessibility for all residents regardless of language, ability, or location',
            'Accesibilidad para todos los residentes sin importar idioma, capacidad o ubicación',
            'Accessibility para sa lahat ng residente anuman ang wika, kakayahan, o lokasyon',
            'Accessibilité pour tous les résidents quelles que soient la langue, les capacités ou la localisation'
          ),
          ml(
            'Modernization to bring services into the 21st century',
            'Modernización para llevar los servicios al siglo XXI',
            'Modernisasyon upang dalhin ang mga serbisyo sa ika-21 siglo',
            'Modernisation pour amener les services au XXIe siècle'
          ),
          ml(
            'Accountability to the community above all',
            'Responsabilidad ante la comunidad sobre todo',
            'Pananagutan sa komunidad higit sa lahat',
            'Responsabilité envers la communauté avant tout'
          ),
          ml(
            'Respectful, nonpartisan public service',
            'Servicio público respetuoso y no partidista',
            'Magalang, nonpartisan na serbisyong pampubliko',
            'Service public respectueux et non partisan'
          ),
        ],
      },
      {
        type: 'p',
        text: ml(
          'Paul Harold Johnson is running not as a politician, but as a public servant — someone whose goal is simply to make this office work better for everyone in Ventura County.',
          'Paul Harold Johnson se postula no como político, sino como servidor público — alguien cuyo objetivo es simplemente hacer que esta oficina funcione mejor para todos en el Condado de Ventura.',
          'Tumatakbo si Paul Harold Johnson hindi bilang isang pulitiko, kundi bilang isang lingkod-bayan — isang tao na ang layunin ay simpleng gawing mas epektibo ang opisinang ito para sa lahat sa Ventura County.',
          'Paul Harold Johnson se présente non pas en tant que politicien, mais en tant que serviteur public — quelqu\'un dont le but est simplement de faire fonctionner ce bureau mieux pour tout le monde dans le comté de Ventura.'
        ),
      },
      {
        type: 'cta-note',
        text: ml(
          '[PLACEHOLDER — Add full biography, career history, and community involvement here before launch.]',
          '[MARCADOR — Agregue biografía completa, historial profesional e participación comunitaria aquí antes del lanzamiento.]',
          '[PLACEHOLDER — Idagdag ang buong talambuhay, kasaysayan ng karera, at pakikilahok sa komunidad dito bago ilunsad.]',
          '[ESPACE RÉSERVÉ — Ajoutez la biographie complète, les antécédents professionnels et l\'implication communautaire ici avant le lancement.]'
        ),
      },
    ],
  },

  // 2 — WHY I'M RUNNING
  {
    id: 'why-running',
    icon: '🎯',
    label: ml('Why I\'m Running', 'Por Qué Me Postulo', 'Bakit Ako Tumatakbo', 'Pourquoi je me présente'),
    blocks: [
      {
        type: 'h2',
        text: ml(
          'Why I\'m Running',
          'Por Qué Me Postulo',
          'Bakit Ako Tumatakbo',
          'Pourquoi je me présente'
        ),
      },
      {
        type: 'p',
        text: ml(
          'The Ventura County Clerk-Recorder\'s office touches every resident\'s life — from birth certificates and property records to voter registration and election administration. It is one of the most important yet often overlooked offices in county government. I am running because I believe this office can and should do better.',
          'La oficina del Clerk-Recorder del Condado de Ventura toca la vida de cada residente — desde certificados de nacimiento y registros de propiedad hasta el registro de votantes y la administración electoral. Es una de las oficinas más importantes pero frecuentemente ignoradas del gobierno del condado. Me postulo porque creo que esta oficina puede y debe hacerlo mejor.',
          'Ang opisina ng Ventura County Clerk-Recorder ay nakakaapekto sa buhay ng bawat residente — mula sa mga birth certificate at property record hanggang sa voter registration at election administration. Ito ay isa sa pinaka-mahalagang ngunit madalas na napapabayaang opisina sa gobyerno ng county. Tumatakbo ako dahil naniniwala akong ang opisinang ito ay maaari at dapat gumawa nang mas mahusay.',
          'Le bureau du Clerk-Recorder du comté de Ventura touche la vie de chaque résident — des actes de naissance et des registres fonciers à l\'inscription sur les listes électorales et à l\'administration des élections. C\'est l\'un des bureaux les plus importants mais souvent négligés du gouvernement du comté. Je me présente parce que je crois que ce bureau peut et doit faire mieux.'
        ),
      },
      {
        type: 'h3',
        text: ml('What I See', 'Lo Que Veo', 'Ano ang Nakikita Ko', 'Ce que je vois'),
      },
      {
        type: 'ul',
        items: [
          ml(
            'Residents who struggle to access public records that should be easy to find',
            'Residentes que tienen dificultades para acceder a registros públicos que deberían ser fáciles de encontrar',
            'Mga residente na nahihirapang ma-access ang mga pampublikong talaan na dapat madaling mahanap',
            'Des résidents qui ont du mal à accéder à des registres publics qui devraient être faciles à trouver'
          ),
          ml(
            'Outdated systems that create unnecessary delays and frustration',
            'Sistemas obsoletos que crean retrasos y frustraciones innecesarios',
            'Mga lipas na sistema na lumilikha ng hindi kinakailangang pagkaantala at pagkabigo',
            'Des systèmes obsolètes qui créent des délais et des frustrations inutiles'
          ),
          ml(
            'Language barriers that prevent many community members from accessing services they are entitled to',
            'Barreras idiomáticas que impiden a muchos miembros de la comunidad acceder a los servicios a los que tienen derecho',
            'Mga hadlang sa wika na pumipigil sa maraming miyembro ng komunidad mula sa pag-access sa mga serbisyong may karapatang makuha nila',
            'Des barrières linguistiques qui empêchent de nombreux membres de la communauté d\'accéder aux services auxquels ils ont droit'
          ),
          ml(
            'An opportunity to strengthen public trust in our election process',
            'Una oportunidad para fortalecer la confianza pública en nuestro proceso electoral',
            'Isang pagkakataon upang palakasin ang tiwala ng publiko sa ating proseso ng halalan',
            'Une opportunité de renforcer la confiance du public dans notre processus électoral'
          ),
        ],
      },
      {
        type: 'h3',
        text: ml('My Commitment', 'Mi Compromiso', 'Ang Aking Pangako', 'Mon engagement'),
      },
      {
        type: 'p',
        text: ml(
          'I commit to bringing my professional background in systems analysis and technology to modernize this office — making it faster, more accessible, and more transparent. I will treat every resident\'s need as a priority, not an inconvenience. And I will hold this office to the highest standard of accountability.',
          'Me comprometo a traer mi experiencia profesional en análisis de sistemas y tecnología para modernizar esta oficina — haciéndola más rápida, más accesible y más transparente. Trataré la necesidad de cada residente como una prioridad, no una inconveniencia. Y mantendré esta oficina al más alto estándar de responsabilidad.',
          'Nangangako ako na dalhin ang aking propesyonal na background sa systems analysis at teknolohiya upang modernisahin ang opisinang ito — gagawin itong mas mabilis, mas accessible, at mas transparent. Ituturing ko ang pangangailangan ng bawat residente bilang isang priyoridad, hindi isang abala. At pananatilihin ko ang opisinang ito sa pinakamataas na pamantayan ng pananagutan.',
          'Je m\'engage à apporter mon expérience professionnelle en analyse de systèmes et en technologie pour moderniser ce bureau — le rendant plus rapide, plus accessible et plus transparent. Je traiterai le besoin de chaque résident comme une priorité, pas comme un inconvénient. Et je tiendrai ce bureau au plus haut niveau de responsabilité.'
        ),
      },
      {
        type: 'cta-note',
        text: ml(
          'This is a nonpartisan race. Paul Harold Johnson is running to serve all of Ventura County.',
          'Esta es una elección no partidista. Paul Harold Johnson se postula para servir a todo el Condado de Ventura.',
          'Ito ay isang nonpartisan na karera. Tumatakbo si Paul Harold Johnson upang maglingkod sa buong Ventura County.',
          'Cette élection est non partisane. Paul Harold Johnson se présente pour servir tout le comté de Ventura.'
        ),
      },
    ],
  },

  // 3 — ELECTION INTEGRITY
  {
    id: 'election-integrity',
    icon: '🗳️',
    label: ml('Election Integrity', 'Integridad Electoral', 'Integridad ng Halalan', 'Intégrité électorale'),
    blocks: [
      {
        type: 'h2',
        text: ml('Election Integrity', 'Integridad Electoral', 'Integridad ng Halalan', 'Intégrité électorale'),
      },
      {
        type: 'p',
        text: ml(
          'Free, fair, and secure elections are the foundation of democracy. As Clerk-Recorder, Paul Harold Johnson will prioritize election integrity through transparent processes, modern technology, and a culture of accountability that every voter can trust.',
          'Las elecciones libres, justas y seguras son la base de la democracia. Como Clerk-Recorder, Paul Harold Johnson priorizará la integridad electoral a través de procesos transparentes, tecnología moderna y una cultura de responsabilidad en la que cada votante pueda confiar.',
          'Ang malaya, patas, at ligtas na mga halalan ay pundasyon ng demokrasya. Bilang Clerk-Recorder, uunahin ni Paul Harold Johnson ang integridad ng halalan sa pamamagitan ng transparent na proseso, modernong teknolohiya, at kultura ng pananagutan na mapagkakatiwalaan ng bawat botante.',
          'Des élections libres, équitables et sécurisées sont le fondement de la démocratie. En tant que Clerk-Recorder, Paul Harold Johnson donnera la priorité à l\'intégrité électorale grâce à des processus transparents, une technologie moderne et une culture de responsabilité en laquelle chaque électeur peut avoir confiance.'
        ),
      },
      {
        type: 'h3',
        text: ml('Key Commitments', 'Compromisos Clave', 'Mga Pangunahing Pangako', 'Engagements clés'),
      },
      {
        type: 'ul',
        items: [
          ml(
            'Full compliance with California election law and best practices',
            'Cumplimiento total con la ley electoral de California y las mejores prácticas',
            'Buong pagsunod sa batas ng halalan ng California at pinakamahusay na mga gawi',
            'Conformité totale avec la loi électorale de Californie et les meilleures pratiques'
          ),
          ml(
            'Transparent audit trails for all ballot counting and certification',
            'Rastros de auditoría transparentes para todos los recuentos de votos y certificaciones',
            'Transparent na audit trails para sa lahat ng pagbibilang ng balota at sertipikasyon',
            'Pistes d\'audit transparentes pour tous les décomptes de votes et certifications'
          ),
          ml(
            'Regular public reporting on election administration and outcomes',
            'Informes públicos regulares sobre la administración y resultados electorales',
            'Regular na pampublikong pag-uulat sa administrasyon at resulta ng halalan',
            'Rapports publics réguliers sur l\'administration électorale et les résultats'
          ),
          ml(
            'Accessible polling locations and vote-by-mail options for all voters',
            'Lugares de votación accesibles y opciones de voto por correo para todos los votantes',
            'Accessible na mga lugar ng botohan at mga opsyon sa pagboto sa koreo para sa lahat ng botante',
            'Bureaux de vote accessibles et options de vote par correspondance pour tous les électeurs'
          ),
          ml(
            'Multilingual voter education and outreach programs',
            'Programas de educación e información al votante en múltiples idiomas',
            'Multilingual na edukasyon ng botante at mga programa ng outreach',
            'Programmes d\'éducation électorale et de sensibilisation multilingues'
          ),
        ],
      },
      {
        type: 'p',
        text: ml(
          'Paul Harold Johnson believes that confidence in elections comes from transparency — not secrecy. He will actively seek community input, publish clear documentation of election procedures, and work collaboratively with state and county officials to continuously improve the process.',
          'Paul Harold Johnson cree que la confianza en las elecciones viene de la transparencia — no del secreto. Buscará activamente la participación de la comunidad, publicará documentación clara de los procedimientos electorales y trabajará en colaboración con funcionarios estatales y del condado para mejorar continuamente el proceso.',
          'Naniniwala si Paul Harold Johnson na ang kumpiyansa sa mga halalan ay nagmumula sa transparency — hindi sa lihim. Aktibo niyang hahanapin ang input ng komunidad, maglalathala ng malinaw na dokumentasyon ng mga pamamaraan ng halalan, at makikipagtulungan sa mga opisyal ng estado at county upang patuloy na mapabuti ang proseso.',
          'Paul Harold Johnson croit que la confiance dans les élections vient de la transparence — pas du secret. Il cherchera activement les contributions de la communauté, publiera une documentation claire sur les procédures électorales et travaillera en collaboration avec les responsables de l\'État et du comté pour améliorer continuellement le processus.'
        ),
      },
    ],
  },

  // 4 — VOTER ACCESS
  {
    id: 'voter-access',
    icon: '✅',
    label: ml('Voter Access', 'Acceso al Voto', 'Access ng Botante', 'Accès au vote'),
    blocks: [
      {
        type: 'h2',
        text: ml('Voter Access for Every Resident', 'Acceso al Voto para Cada Residente', 'Access ng Botante para sa Bawat Residente', 'L\'accès au vote pour chaque résident'),
      },
      {
        type: 'p',
        text: ml(
          'Every eligible voter in Ventura County deserves equal, convenient access to the ballot. Paul Harold Johnson will work to remove barriers and make voting simpler, safer, and more accessible for every member of the community.',
          'Cada votante elegible en el Condado de Ventura merece acceso igual y conveniente a las urnas. Paul Harold Johnson trabajará para eliminar barreras y hacer que el voto sea más simple, seguro y accesible para cada miembro de la comunidad.',
          'Bawat karapat-dapat na botante sa Ventura County ay nararapat sa pantay, maginhawang access sa balota. Magsisikap si Paul Harold Johnson na alisin ang mga hadlang at gawing mas simple, mas ligtas, at mas accessible ang pagboto para sa bawat miyembro ng komunidad.',
          'Chaque électeur éligible du comté de Ventura mérite un accès égal et pratique au vote. Paul Harold Johnson s\'efforcera de supprimer les obstacles et de rendre le vote plus simple, plus sûr et plus accessible à chaque membre de la communauté.'
        ),
      },
      {
        type: 'h3',
        text: ml('Access Priorities', 'Prioridades de Acceso', 'Mga Priyoridad sa Access', 'Priorités d\'accès'),
      },
      {
        type: 'ul',
        items: [
          ml(
            'Expanded multilingual voter materials in English, Spanish, Tagalog, and more',
            'Materiales electorales multilingüe expandidos en inglés, español, tagalo y más',
            'Pinalawak na multilingual na materyales ng botante sa Ingles, Espanyol, Tagalog, at higit pa',
            'Matériaux électoraux multilingues élargis en anglais, espagnol, tagalog et plus encore'
          ),
          ml(
            'ADA-compliant polling locations and voting equipment',
            'Lugares de votación y equipos de votación conformes con ADA',
            'Mga lugar ng botohan at kagamitan sa pagboto na sumusunod sa ADA',
            'Bureaux de vote et équipements de vote conformes à l\'ADA'
          ),
          ml(
            'Clear, easy-to-navigate voter registration portal',
            'Portal de registro de votantes claro y fácil de usar',
            'Malinaw, madaling gamitin na portal ng voter registration',
            'Portail d\'inscription des électeurs clair et facile à utiliser'
          ),
          ml(
            'Proactive outreach to underrepresented communities',
            'Alcance proactivo a comunidades subrepresentadas',
            'Proactive na outreach sa mga underrepresented na komunidad',
            'Sensibilisation proactive auprès des communautés sous-représentées'
          ),
          ml(
            'Convenient vote center hours and locations across the county',
            'Horarios y ubicaciones convenientes de los centros de votación en todo el condado',
            'Maginhawang mga oras at lokasyon ng vote center sa buong county',
            'Horaires et emplacements pratiques des centres de vote dans tout le comté'
          ),
        ],
      },
      {
        type: 'p',
        text: ml(
          'A healthy democracy depends on high participation. Paul Harold Johnson will champion voter education programs that help residents understand their rights, navigate the voting process, and have confidence that their voice counts.',
          'Una democracia saludable depende de una alta participación. Paul Harold Johnson defenderá programas de educación para votantes que ayuden a los residentes a comprender sus derechos, navegar el proceso de votación y tener la confianza de que su voz cuenta.',
          'Ang isang malusog na demokrasya ay nakasalalay sa mataas na pakikilahok. Itataguyod ni Paul Harold Johnson ang mga programang pang-edukasyon ng botante na tumutulong sa mga residente na maunawaan ang kanilang mga karapatan, mag-navigate sa proseso ng pagboto, at magkaroon ng kumpiyansang binibilang ang kanilang boses.',
          'Une démocratie saine dépend d\'une forte participation. Paul Harold Johnson défendra les programmes d\'éducation des électeurs qui aident les résidents à comprendre leurs droits, à naviguer dans le processus de vote et à avoir confiance que leur voix compte.'
        ),
      },
    ],
  },

  // 5 — MODERNIZATION
  {
    id: 'modernization',
    icon: '💻',
    label: ml('Modernization', 'Modernización', 'Modernisasyon', 'Modernisation'),
    blocks: [
      {
        type: 'h2',
        text: ml('Modernization', 'Modernización', 'Modernisasyon', 'Modernisation'),
      },
      {
        type: 'p',
        text: ml(
          'The Ventura County Clerk-Recorder\'s office handles thousands of transactions each year. Paul Harold Johnson\'s background as a Computerized System Analyst means he understands how technology can be applied responsibly and effectively to improve every aspect of county services.',
          'La oficina del Clerk-Recorder del Condado de Ventura maneja miles de transacciones cada año. La experiencia de Paul Harold Johnson como Analista de Sistemas Computarizados significa que comprende cómo la tecnología puede aplicarse de manera responsable y efectiva para mejorar cada aspecto de los servicios del condado.',
          'Ang opisina ng Ventura County Clerk-Recorder ay namamahala ng libu-libong transaksyon bawat taon. Ang background ni Paul Harold Johnson bilang Computerized System Analyst ay nangangahulugang nauunawaan niya kung paano ang teknolohiya ay maaaring ilapat nang responsable at epektibo upang mapabuti ang bawat aspeto ng mga serbisyo ng county.',
          'Le bureau du Clerk-Recorder du comté de Ventura traite des milliers de transactions chaque année. L\'expérience de Paul Harold Johnson en tant qu\'analyste en systèmes informatisés signifie qu\'il comprend comment la technologie peut être appliquée de manière responsable et efficace pour améliorer chaque aspect des services du comté.'
        ),
      },
      {
        type: 'h3',
        text: ml('Technology Priorities', 'Prioridades Tecnológicas', 'Mga Priyoridad sa Teknolohiya', 'Priorités technologiques'),
      },
      {
        type: 'ul',
        items: [
          ml(
            'Expanded online services for document requests, filings, and lookups',
            'Servicios en línea expandidos para solicitudes de documentos, presentaciones y consultas',
            'Pinalawak na online na serbisyo para sa mga kahilingan ng dokumento, pagsasampa, at paghahanap',
            'Services en ligne élargis pour les demandes de documents, les dépôts et les recherches'
          ),
          ml(
            'Faster digital processing to reduce wait times and office visits',
            'Procesamiento digital más rápido para reducir los tiempos de espera y las visitas a la oficina',
            'Mas mabilis na digital na pagproseso upang mabawasan ang oras ng paghihintay at mga pagbisita sa opisina',
            'Traitement numérique plus rapide pour réduire les temps d\'attente et les visites au bureau'
          ),
          ml(
            'Secure, accessible digital archives for public records',
            'Archivos digitales seguros y accesibles para registros públicos',
            'Ligtas, accessible na digital na archive para sa mga pampublikong talaan',
            'Archives numériques sécurisées et accessibles pour les registres publics'
          ),
          ml(
            'Clear technology roadmap with community input and oversight',
            'Hoja de ruta tecnológica clara con participación comunitaria y supervisión',
            'Malinaw na technology roadmap na may input at pangangasiwa ng komunidad',
            'Feuille de route technologique claire avec la participation et la supervision de la communauté'
          ),
          ml(
            'Staff training programs to support digital transformation',
            'Programas de capacitación del personal para apoyar la transformación digital',
            'Mga programa ng pagsasanay ng kawani upang suportahan ang digital na pagbabago',
            'Programmes de formation du personnel pour soutenir la transformation numérique'
          ),
        ],
      },
      {
        type: 'p',
        text: ml(
          'Modernization is not about replacing people — it\'s about giving them better tools to serve the public. Paul Harold Johnson will invest in technology thoughtfully, always prioritizing security, privacy, and the resident experience.',
          'La modernización no se trata de reemplazar personas — se trata de darles mejores herramientas para servir al público. Paul Harold Johnson invertirá en tecnología de manera reflexiva, priorizando siempre la seguridad, la privacidad y la experiencia del residente.',
          'Ang modernisasyon ay hindi tungkol sa pagpapalit ng mga tao — ito ay tungkol sa pagbibigay sa kanila ng mas magagandang kasangkapan upang maglingkod sa publiko. Mamumuhunan si Paul Harold Johnson sa teknolohiya nang mapag-isipan, palaging inuuna ang seguridad, privacy, at karanasan ng residente.',
          'La modernisation ne consiste pas à remplacer les gens — il s\'agit de leur donner de meilleurs outils pour servir le public. Paul Harold Johnson investira dans la technologie de manière réfléchie, en donnant toujours la priorité à la sécurité, à la confidentialité et à l\'expérience des résidents.'
        ),
      },
    ],
  },

  // 6 — PUBLIC RECORDS
  {
    id: 'public-records',
    icon: '📁',
    label: ml('Public Records', 'Registros Públicos', 'Pampublikong Talaan', 'Registres publics'),
    blocks: [
      {
        type: 'h2',
        text: ml('Public Records Access', 'Acceso a Registros Públicos', 'Access sa Pampublikong Talaan', 'Accès aux registres publics'),
      },
      {
        type: 'p',
        text: ml(
          'The Clerk-Recorder\'s office is the primary custodian of vital public records for Ventura County — including property documents, official filings, birth and death records, and other essential documents. Paul Harold Johnson will ensure these records are properly maintained, easily accessible, and securely preserved.',
          'La oficina del Clerk-Recorder es el principal custodio de los registros públicos vitales del Condado de Ventura — incluyendo documentos de propiedad, presentaciones oficiales, registros de nacimiento y defunción, y otros documentos esenciales. Paul Harold Johnson garantizará que estos registros se mantengan adecuadamente, sean fácilmente accesibles y estén preservados de manera segura.',
          'Ang opisina ng Clerk-Recorder ang pangunahing tagapangalaga ng mga mahahalagang pampublikong talaan para sa Ventura County — kabilang ang mga dokumento ng ari-arian, opisyal na pagsasampa, mga rekord ng kapanganakan at kamatayan, at iba pang mahahalagang dokumento. Titiyakin ni Paul Harold Johnson na ang mga talangang ito ay maayos na mapanatili, madaling ma-access, at ligtas na mapreserba.',
          'Le bureau du Clerk-Recorder est le principal gardien des registres publics essentiels du comté de Ventura — y compris les documents de propriété, les dépôts officiels, les actes de naissance et de décès et d\'autres documents essentiels. Paul Harold Johnson veillera à ce que ces registres soient correctement maintenus, facilement accessibles et conservés en toute sécurité.'
        ),
      },
      {
        type: 'h3',
        text: ml('What Paul Will Prioritize', 'Lo Que Paul Priorizará', 'Ano ang Uunahing-Pag-aralan ni Paul', 'Ce que Paul priorisera'),
      },
      {
        type: 'ul',
        items: [
          ml(
            'Simplified online search and document request system',
            'Sistema simplificado de búsqueda en línea y solicitud de documentos',
            'Pinasimpleng online na sistema ng paghahanap at kahilingan ng dokumento',
            'Système de recherche en ligne et de demande de documents simplifié'
          ),
          ml(
            'Faster processing for document certifications and copies',
            'Procesamiento más rápido para certificaciones de documentos y copias',
            'Mas mabilis na pagproseso para sa mga sertipikasyon ng dokumento at kopya',
            'Traitement plus rapide pour les certifications de documents et les copies'
          ),
          ml(
            'Long-term digital preservation of historical records',
            'Preservación digital a largo plazo de registros históricos',
            'Pangmatagalang digital na pangangalaga ng mga makasaysayang talaan',
            'Préservation numérique à long terme des dossiers historiques'
          ),
          ml(
            'Transparent fee structures for public records requests',
            'Estructuras de tarifas transparentes para solicitudes de registros públicos',
            'Transparent na mga istruktura ng bayad para sa mga kahilingan ng pampublikong talaan',
            'Structures de frais transparentes pour les demandes de registres publics'
          ),
          ml(
            'Privacy protection for sensitive personal records',
            'Protección de privacidad para registros personales sensibles',
            'Proteksyon ng privacy para sa mga sensitibong personal na talaan',
            'Protection de la vie privée pour les dossiers personnels sensibles'
          ),
        ],
      },
      {
        type: 'p',
        text: ml(
          'Public records are a public resource. Paul Harold Johnson is committed to making sure these records are available to residents, researchers, journalists, and community members in a timely and affordable manner.',
          'Los registros públicos son un recurso público. Paul Harold Johnson está comprometido a garantizar que estos registros estén disponibles para los residentes, investigadores, periodistas y miembros de la comunidad de manera oportuna y asequible.',
          'Ang mga pampublikong talaan ay isang pampublikong mapagkukunan. Nakatuon si Paul Harold Johnson na tiyaking ang mga talangang ito ay available sa mga residente, mananaliksik, mamamahayag, at miyembro ng komunidad sa napapanahon at abot-kayang paraan.',
          'Les registres publics sont une ressource publique. Paul Harold Johnson s\'engage à veiller à ce que ces registres soient disponibles pour les résidents, les chercheurs, les journalistes et les membres de la communauté de manière rapide et abordable.'
        ),
      },
    ],
  },

  // 7 — CUSTOMER SERVICE
  {
    id: 'customer-service',
    icon: '🤝',
    label: ml('Customer Service', 'Servicio al Público', 'Serbisyo sa Publiko', 'Service au public'),
    blocks: [
      {
        type: 'h2',
        text: ml('Customer Service Excellence', 'Excelencia en el Servicio al Público', 'Kahusayan sa Serbisyo sa Publiko', 'Excellence du service au public'),
      },
      {
        type: 'p',
        text: ml(
          'When residents visit or contact the Clerk-Recorder\'s office, they deserve a welcoming, efficient, and respectful experience. Paul Harold Johnson will lead by example, building a service culture where every person who walks through the door — or logs on from home — is treated with dignity and responsiveness.',
          'Cuando los residentes visitan o se comunican con la oficina del Clerk-Recorder, merecen una experiencia acogedora, eficiente y respetuosa. Paul Harold Johnson liderará con el ejemplo, construyendo una cultura de servicio donde cada persona que entra por la puerta — o se conecta desde casa — sea tratada con dignidad y capacidad de respuesta.',
          'Kapag bumibisita o nakikipag-ugnayan ang mga residente sa opisina ng Clerk-Recorder, nararapat silang makatanggap ng isang mapagtaganggap, mahusay, at magalang na karanasan. Manganguna si Paul Harold Johnson sa halimbawa, nagtatayo ng kultura ng serbisyo kung saan ang bawat taong pumapasok sa pintuan — o nag-log on mula sa tahanan — ay itinatrato nang may dignidad at pagiging matugunan.',
          'Lorsque les résidents visitent ou contactent le bureau du Clerk-Recorder, ils méritent une expérience accueillante, efficace et respectueuse. Paul Harold Johnson donnera l\'exemple en créant une culture de service où chaque personne qui franchit la porte — ou se connecte depuis chez elle — est traitée avec dignité et réactivité.'
        ),
      },
      {
        type: 'h3',
        text: ml('Service Improvements', 'Mejoras en el Servicio', 'Mga Pagpapabuti sa Serbisyo', 'Améliorations du service'),
      },
      {
        type: 'ul',
        items: [
          ml(
            'Reduced wait times through smarter scheduling and staffing',
            'Reducción de los tiempos de espera a través de una programación y personal más inteligentes',
            'Nabawasang oras ng paghihintay sa pamamagitan ng mas matalinong pag-schedule at staffing',
            'Réduction des temps d\'attente grâce à une planification et un personnel plus intelligents'
          ),
          ml(
            'Multilingual staff and interpreter assistance available',
            'Personal multilingüe y asistencia de intérpretes disponibles',
            'Multilingual na kawani at available na tulong ng interpreter',
            'Personnel multilingue et assistance d\'interprète disponibles'
          ),
          ml(
            'Online appointment scheduling to minimize in-person wait',
            'Programación de citas en línea para minimizar la espera en persona',
            'Online na pag-schedule ng appointment upang mabawasan ang in-person na paghihintay',
            'Prise de rendez-vous en ligne pour minimiser l\'attente en personne'
          ),
          ml(
            'Clear, friendly guidance for every common service and request',
            'Orientación clara y amigable para cada servicio y solicitud común',
            'Malinaw, friendly na gabay para sa bawat karaniwang serbisyo at kahilingan',
            'Conseils clairs et conviviaux pour chaque service et demande courants'
          ),
          ml(
            'Feedback mechanism to continuously improve the resident experience',
            'Mecanismo de retroalimentación para mejorar continuamente la experiencia del residente',
            'Mekanismo ng feedback upang patuloy na mapabuti ang karanasan ng residente',
            'Mécanisme de rétroaction pour améliorer continuellement l\'expérience des résidents'
          ),
        ],
      },
      {
        type: 'p',
        text: ml(
          'A county office should feel welcoming, not intimidating. Paul Harold Johnson will ensure that residents from all walks of life — including seniors, immigrants, working families, and people with disabilities — receive the support they need.',
          'Una oficina del condado debería sentirse acogedora, no intimidante. Paul Harold Johnson garantizará que los residentes de todos los ámbitos de la vida — incluyendo personas mayores, inmigrantes, familias trabajadoras y personas con discapacidades — reciban el apoyo que necesitan.',
          'Ang isang opisina ng county ay dapat maging mapagtaganggap, hindi nakakatakot. Titiyakin ni Paul Harold Johnson na ang mga residente mula sa lahat ng aspeto ng buhay — kabilang ang mga matatanda, imigrante, mga nagtatrabahong pamilya, at mga taong may kapansanan — ay makatanggap ng suporta na kailangan nila.',
          'Un bureau du comté devrait être accueillant, pas intimidant. Paul Harold Johnson veillera à ce que les résidents de toutes les couches de la société — y compris les personnes âgées, les immigrants, les familles ouvrières et les personnes handicapées — reçoivent le soutien dont ils ont besoin.'
        ),
      },
    ],
  },

  // 8 — TRANSPARENCY
  {
    id: 'transparency',
    icon: '🔍',
    label: ml('Transparency', 'Transparencia', 'Transparency', 'Transparence'),
    blocks: [
      {
        type: 'h2',
        text: ml('Transparency in Public Service', 'Transparencia en el Servicio Público', 'Transparency sa Serbisyong Pampubliko', 'Transparence dans le service public'),
      },
      {
        type: 'p',
        text: ml(
          'Public trust is earned through openness, honesty, and accountability. Paul Harold Johnson believes the Clerk-Recorder\'s office should operate with complete transparency — publishing clear information about its operations, spending, and outcomes so that residents can stay informed and hold the office accountable.',
          'La confianza pública se gana a través de la apertura, la honestidad y la responsabilidad. Paul Harold Johnson cree que la oficina del Clerk-Recorder debe operar con total transparencia — publicando información clara sobre sus operaciones, gastos y resultados para que los residentes puedan mantenerse informados y hacer responsable a la oficina.',
          'Ang tiwala ng publiko ay nakukuha sa pamamagitan ng pagiging bukas, katapatan, at pananagutan. Naniniwala si Paul Harold Johnson na ang opisina ng Clerk-Recorder ay dapat mag-operate nang may kumpletong transparency — naglalathala ng malinaw na impormasyon tungkol sa mga operasyon, gastos, at resulta nito upang ang mga residente ay mapanatiling impormasyon at mapanatili ang opisina nang may pananagutan.',
          'La confiance du public se gagne par l\'ouverture, l\'honnêteté et la responsabilité. Paul Harold Johnson croit que le bureau du Clerk-Recorder doit fonctionner en toute transparence — publiant des informations claires sur ses opérations, ses dépenses et ses résultats afin que les résidents puissent rester informés et tenir le bureau responsable.'
        ),
      },
      {
        type: 'h3',
        text: ml('Transparency Commitments', 'Compromisos de Transparencia', 'Mga Pangako sa Transparency', 'Engagements de transparence'),
      },
      {
        type: 'ul',
        items: [
          ml(
            'Annual public report on office operations, budget, and performance metrics',
            'Informe público anual sobre operaciones de la oficina, presupuesto y métricas de desempeño',
            'Taunang pampublikong ulat sa mga operasyon ng opisina, badyet, at mga sukatan ng pagganap',
            'Rapport public annuel sur les opérations du bureau, le budget et les indicateurs de performance'
          ),
          ml(
            'Open data initiative for public records and election data',
            'Iniciativa de datos abiertos para registros públicos y datos electorales',
            'Inisyatiba ng open data para sa mga pampublikong talaan at datos ng halalan',
            'Initiative de données ouvertes pour les registres publics et les données électorales'
          ),
          ml(
            'Community advisory input on office policies and improvements',
            'Participación consultiva de la comunidad sobre políticas y mejoras de la oficina',
            'Input ng community advisory sa mga patakaran at pagpapabuti ng opisina',
            'Contributions consultatives de la communauté sur les politiques et améliorations du bureau'
          ),
          ml(
            'Clear and timely response to public records requests',
            'Respuesta clara y oportuna a las solicitudes de registros públicos',
            'Malinaw at napapanahong tugon sa mga kahilingan ng pampublikong talaan',
            'Réponse claire et rapide aux demandes de registres publics'
          ),
          ml(
            'Proactive disclosure of relevant information before it is requested',
            'Divulgación proactiva de información relevante antes de que sea solicitada',
            'Proactive na pagsisiwalat ng kaugnay na impormasyon bago ito hingin',
            'Divulgation proactive d\'informations pertinentes avant qu\'elles ne soient demandées'
          ),
        ],
      },
    ],
  },

  // 9 — COMMUNITY OUTREACH
  {
    id: 'community-outreach',
    icon: '🌎',
    label: ml('Community Outreach', 'Alcance Comunitario', 'Ugnayan sa Komunidad', 'Mobilisation communautaire'),
    blocks: [
      {
        type: 'h2',
        text: ml('Community Outreach', 'Alcance Comunitario', 'Ugnayan sa Komunidad', 'Mobilisation communautaire'),
      },
      {
        type: 'p',
        text: ml(
          'Ventura County is a rich, diverse community. Paul Harold Johnson is committed to reaching every corner of the county — from Oxnard and Ventura to Simi Valley, Thousand Oaks, and beyond — to make sure every resident knows about and can access the services of the Clerk-Recorder\'s office.',
          'El Condado de Ventura es una comunidad rica y diversa. Paul Harold Johnson está comprometido a llegar a cada rincón del condado — desde Oxnard y Ventura hasta Simi Valley, Thousand Oaks y más allá — para asegurarse de que cada residente conozca y pueda acceder a los servicios de la oficina del Clerk-Recorder.',
          'Ang Ventura County ay isang mayaman, magkakaibang komunidad. Nakatuon si Paul Harold Johnson na maabot ang bawat sulok ng county — mula sa Oxnard at Ventura hanggang Simi Valley, Thousand Oaks, at higit pa — upang tiyaking alam ng bawat residente at maaari nitong ma-access ang mga serbisyo ng opisina ng Clerk-Recorder.',
          'Le comté de Ventura est une communauté riche et diversifiée. Paul Harold Johnson s\'engage à atteindre chaque recoin du comté — d\'Oxnard et Ventura à Simi Valley, Thousand Oaks et au-delà — pour s\'assurer que chaque résident connaît et peut accéder aux services du bureau du Clerk-Recorder.'
        ),
      },
      {
        type: 'h3',
        text: ml('Outreach Initiatives', 'Iniciativas de Alcance', 'Mga Inisyatiba sa Outreach', 'Initiatives de sensibilisation'),
      },
      {
        type: 'ul',
        items: [
          ml(
            'Multilingual community information events at local libraries and community centers',
            'Eventos comunitarios de información multilingüe en bibliotecas locales y centros comunitarios',
            'Multilingual na mga kaganapan ng impormasyon ng komunidad sa mga lokal na aklatan at community center',
            'Événements d\'information communautaire multilingues dans les bibliothèques locales et les centres communautaires'
          ),
          ml(
            'Partnerships with schools, nonprofits, and civic organizations',
            'Asociaciones con escuelas, organizaciones sin fines de lucro y organizaciones cívicas',
            'Mga pakikipagsosyo sa mga paaralan, nonprofit, at mga civic na organisasyon',
            'Partenariats avec des écoles, des organisations à but non lucratif et des organisations civiques'
          ),
          ml(
            'Mobile service access for rural and hard-to-reach areas',
            'Acceso a servicios móviles para áreas rurales y de difícil acceso',
            'Mobile na access sa serbisyo para sa mga rural at mahirap maabot na lugar',
            'Accès aux services mobiles pour les zones rurales et difficiles d\'accès'
          ),
          ml(
            'Digital engagement through social media, website, and email updates',
            'Participación digital a través de redes sociales, sitio web y actualizaciones por correo electrónico',
            'Digital na pakikipag-ugnayan sa pamamagitan ng social media, website, at mga update sa email',
            'Engagement numérique via les réseaux sociaux, le site web et les mises à jour par e-mail'
          ),
          ml(
            'Regular town halls and community listening sessions',
            'Reuniones municipales regulares y sesiones de escucha comunitaria',
            'Regular na town hall at mga sesyon ng pakikinig sa komunidad',
            'Réunions publiques régulières et séances d\'écoute communautaire'
          ),
        ],
      },
      {
        type: 'p',
        text: ml(
          'Paul Harold Johnson\'s campaign is itself a community outreach effort — he wants to hear from you about what matters most in your neighborhood and what changes would make the biggest difference in your daily life.',
          'La campaña de Paul Harold Johnson es en sí misma un esfuerzo de alcance comunitario — quiere escuchar de usted sobre lo que más importa en su vecindario y qué cambios marcarían la mayor diferencia en su vida diaria.',
          'Ang kampanya mismo ni Paul Harold Johnson ay isang pagsisikap sa community outreach — nais niyang marinig mula sa inyo kung ano ang pinakamahalagang bagay sa inyong kapitbahayan at kung anong mga pagbabago ang gagawa ng pinakamalaking pagkakaiba sa inyong pang-araw-araw na buhay.',
          'La campagne de Paul Harold Johnson est elle-même un effort de sensibilisation communautaire — il veut vous entendre sur ce qui compte le plus dans votre quartier et quels changements feraient la plus grande différence dans votre vie quotidienne.'
        ),
      },
    ],
  },

  // 10 — EVENTS
  {
    id: 'events',
    icon: '📅',
    label: ml('Events', 'Eventos', 'Mga Kaganapan', 'Événements'),
    blocks: [
      {
        type: 'h2',
        text: ml('Campaign Events', 'Eventos de Campaña', 'Mga Kaganapan ng Kampanya', 'Événements de campagne'),
      },
      {
        type: 'p',
        text: ml(
          'Join Paul Harold Johnson at an upcoming event. All events are free and open to the public. We want to hear from you!',
          'Únase a Paul Harold Johnson en un próximo evento. Todos los eventos son gratuitos y abiertos al público. ¡Queremos escucharle!',
          'Sumali kay Paul Harold Johnson sa isang paparating na kaganapan. Lahat ng kaganapan ay libre at bukas sa publiko. Gusto naming marinig mula sa inyo!',
          'Rejoignez Paul Harold Johnson lors d\'un prochain événement. Tous les événements sont gratuits et ouverts au public. Nous voulons vous entendre !'
        ),
      },
      {
        type: 'cta-note',
        text: ml(
          '[PLACEHOLDER — Add real event dates, times, and locations here before launch. Events below are samples only.]',
          '[MARCADOR — Agregue fechas, horarios y ubicaciones reales de eventos antes del lanzamiento. Los eventos a continuación son solo muestras.]',
          '[PLACEHOLDER — Idagdag ang tunay na mga petsa, oras, at lokasyon ng kaganapan dito bago ilunsad. Ang mga kaganapan sa ibaba ay mga halimbawa lamang.]',
          '[ESPACE RÉSERVÉ — Ajoutez les dates, heures et lieux réels des événements avant le lancement. Les événements ci-dessous ne sont que des exemples.]'
        ),
      },
    ],
    events: [
      {
        id: 'evt-1',
        title: ml('Community Town Hall — Oxnard', 'Reunión Comunitaria — Oxnard', 'Community Town Hall — Oxnard', 'Réunion publique communautaire — Oxnard'),
        date: '[SAMPLE DATE — e.g., Saturday, June 7, 2025]',
        time: '10:00 AM – 12:00 PM',
        location: ml('Oxnard Performing Arts Center, 800 Hobson Way, Oxnard, CA 93030', 'Oxnard Performing Arts Center, 800 Hobson Way, Oxnard, CA 93030', 'Oxnard Performing Arts Center, 800 Hobson Way, Oxnard, CA 93030', 'Oxnard Performing Arts Center, 800 Hobson Way, Oxnard, CA 93030'),
        description: ml(
          'Meet Paul Harold Johnson and hear his vision for Ventura County. Q&A session included. Light refreshments provided. All languages welcome.',
          'Conozca a Paul Harold Johnson y escuche su visión para el Condado de Ventura. Sesión de preguntas y respuestas incluida. Se ofrecen refrigerios ligeros. Todos los idiomas son bienvenidos.',
          'Makilala si Paul Harold Johnson at marinig ang kanyang bisyon para sa Ventura County. Kasama ang Q&A session. May ilang meryenda. Lahat ng wika ay tinatanggap.',
          'Rencontrez Paul Harold Johnson et découvrez sa vision pour le comté de Ventura. Session de questions-réponses incluse. Des rafraîchissements légers sont fournis. Toutes les langues sont les bienvenues.'
        ),
        eventType: 'townhall',
      },
      {
        id: 'evt-2',
        title: ml('Volunteer Kickoff Meeting', 'Reunión de Inicio de Voluntariado', 'Volunteer Kickoff Meeting', 'Réunion de lancement des bénévoles'),
        date: '[SAMPLE DATE — e.g., Saturday, June 14, 2025]',
        time: '2:00 PM – 4:00 PM',
        location: ml('Ventura City Hall Community Room, 501 Poli St, Ventura, CA 93001', 'Sala Comunitaria del Ayuntamiento de Ventura, 501 Poli St, Ventura, CA 93001', 'Ventura City Hall Community Room, 501 Poli St, Ventura, CA 93001', 'Salle communautaire de l\'hôtel de ville de Ventura, 501 Poli St, Ventura, CA 93001'),
        description: ml(
          'Are you ready to get involved? Come meet the campaign team, pick up materials, and learn how you can help make a difference in Ventura County.',
          '¿Está listo para participar? Venga a conocer al equipo de campaña, recoja materiales y aprenda cómo puede ayudar a marcar la diferencia en el Condado de Ventura.',
          'Handa ka na bang makilahok? Halika at makilala ang team ng kampanya, kumuha ng mga materyales, at alamin kung paano mo matutulungan ang pagbabago sa Ventura County.',
          'Êtes-vous prêt à vous impliquer ? Venez rencontrer l\'équipe de campagne, récupérer des documents et apprendre comment vous pouvez contribuer à faire une différence dans le comté de Ventura.'
        ),
        eventType: 'community',
      },
      {
        id: 'evt-3',
        title: ml('Virtual Q&A — Ask Paul Anything', 'Preguntas y Respuestas Virtuales — Pregúntele a Paul', 'Virtual Q&A — Tanungin si Paul', 'Questions-réponses virtuelles — Posez vos questions à Paul'),
        date: '[SAMPLE DATE — e.g., Wednesday, June 18, 2025]',
        time: '6:30 PM – 7:30 PM',
        location: ml('Online — Zoom (link sent upon RSVP)', 'En línea — Zoom (enlace enviado al confirmar asistencia)', 'Online — Zoom (link ipapadala sa RSVP)', 'En ligne — Zoom (lien envoyé sur RSVP)'),
        description: ml(
          'Join this live virtual session to ask Paul your questions about elections, public records, and his campaign priorities. Open to all residents of Ventura County.',
          'Únase a esta sesión virtual en vivo para hacerle a Paul sus preguntas sobre elecciones, registros públicos y las prioridades de su campaña. Abierto a todos los residentes del Condado de Ventura.',
          'Sumali sa live virtual na sesyon na ito upang itanong kay Paul ang inyong mga katanungan tungkol sa mga halalan, pampublikong talaan, at mga priyoridad ng kanyang kampanya. Bukas sa lahat ng residente ng Ventura County.',
          'Rejoignez cette session virtuelle en direct pour poser à Paul vos questions sur les élections, les registres publics et les priorités de sa campagne. Ouvert à tous les résidents du comté de Ventura.'
        ),
        eventType: 'virtual',
      },
      {
        id: 'evt-4',
        title: ml('Neighborhood Walk — Simi Valley', 'Caminata por el Vecindario — Simi Valley', 'Neighborhood Walk — Simi Valley', 'Marche de quartier — Simi Valley'),
        date: '[SAMPLE DATE — e.g., Saturday, June 21, 2025]',
        time: '9:00 AM – 11:30 AM',
        location: ml('Simi Valley Town Center, 1555 Simi Town Center Way, Simi Valley, CA 93065', 'Simi Valley Town Center, 1555 Simi Town Center Way, Simi Valley, CA 93065', 'Simi Valley Town Center, 1555 Simi Town Center Way, Simi Valley, CA 93065', 'Simi Valley Town Center, 1555 Simi Town Center Way, Simi Valley, CA 93065'),
        description: ml(
          'Paul Harold Johnson will be walking door-to-door in Simi Valley to hear from residents directly. Join us for this community walk to help spread the word.',
          'Paul Harold Johnson estará yendo de puerta en puerta en Simi Valley para escuchar directamente a los residentes. Únase a nosotros en esta caminata comunitaria para ayudar a correr la voz.',
          'Si Paul Harold Johnson ay maglalakad mula pintuan hanggang pintuan sa Simi Valley upang marinig ang mga residente nang direkta. Sumama sa amin para sa community walk na ito upang makatulong sa pagpapakalat ng balita.',
          'Paul Harold Johnson ira de porte en porte à Simi Valley pour écouter directement les résidents. Rejoignez-nous pour cette marche communautaire pour aider à faire passer le message.'
        ),
        eventType: 'community',
      },
    ],
  },

  // 11 — NEWS & MEDIA
  {
    id: 'news-media',
    icon: '📰',
    label: ml('News & Media', 'Noticias y Medios', 'Balita at Media', 'Actualités et médias'),
    videoUrl: 'https://youtube.com/shorts/EbxaJYarED4?feature=share',
    blocks: [
      {
        type: 'h2',
        text: ml('News & Media', 'Noticias y Medios', 'Balita at Media', 'Actualités et médias'),
      },
      {
        type: 'p',
        text: ml(
          'Stay informed about Paul Harold Johnson\'s campaign, positions, and community appearances. For media inquiries, please use the contact form.',
          'Manténgase informado sobre la campaña, posiciones y apariciones comunitarias de Paul Harold Johnson. Para consultas de medios, utilice el formulario de contacto.',
          'Manatiling impormasyon tungkol sa kampanya, posisyon, at mga paglabas sa komunidad ni Paul Harold Johnson. Para sa mga katanungan sa media, mangyaring gamitin ang contact form.',
          'Restez informé de la campagne, des positions et des apparitions communautaires de Paul Harold Johnson. Pour les demandes des médias, veuillez utiliser le formulaire de contact.'
        ),
      },
      {
        type: 'cta-note',
        text: ml(
          '[PLACEHOLDER — Add real press releases, news coverage, and media items here before launch. Items below are samples only and do not represent real coverage.]',
          '[MARCADOR — Agregue comunicados de prensa reales, cobertura de noticias y elementos de medios antes del lanzamiento. Los elementos a continuación son solo muestras y no representan cobertura real.]',
          '[PLACEHOLDER — Idagdag ang tunay na mga press release, news coverage, at media items dito bago ilunsad. Ang mga item sa ibaba ay mga halimbawa lamang at hindi kumakatawan sa tunay na coverage.]',
          '[ESPACE RÉSERVÉ — Ajoutez les vrais communiqués de presse, la couverture médiatique et les éléments médiatiques ici avant le lancement. Les éléments ci-dessous ne sont que des exemples et ne représentent pas une vraie couverture.]'
        ),
      },
    ],
    news: [
      {
        id: 'news-1',
        headline: ml(
          '[SAMPLE] Paul Harold Johnson Announces Run for Ventura County Clerk-Recorder',
          '[MUESTRA] Paul Harold Johnson anuncia su candidatura para Clerk-Recorder del Condado de Ventura',
          '[HALIMBAWA] Inanunsyo ni Paul Harold Johnson ang Pagtakbo para sa Ventura County Clerk-Recorder',
          '[EXEMPLE] Paul Harold Johnson annonce sa candidature au poste de Clerk-Recorder du comté de Ventura'
        ),
        source: '[Sample Source — Replace with real outlet]',
        date: '[SAMPLE DATE]',
        summary: ml(
          'Computerized System Analyst Paul Harold Johnson officially announces his candidacy for Ventura County Clerk-Recorder, citing the need for modernization, greater accessibility, and stronger public trust.',
          'El Analista de Sistemas Computarizados Paul Harold Johnson anuncia oficialmente su candidatura para Clerk-Recorder del Condado de Ventura, citando la necesidad de modernización, mayor accesibilidad y mayor confianza pública.',
          'Opisyal na inihayag ng Computerized System Analyst Paul Harold Johnson ang kanyang kandidatura para sa Ventura County Clerk-Recorder, na binanggit ang pangangailangan para sa modernisasyon, mas malaking accessibility, at mas malakas na tiwala ng publiko.',
          'L\'analyste en systèmes informatisés Paul Harold Johnson annonce officiellement sa candidature au poste de Clerk-Recorder du comté de Ventura, invoquant la nécessité de modernisation, d\'une plus grande accessibilité et d\'une confiance publique accrue.'
        ),
        isPlaceholder: true,
      },
      {
        id: 'news-2',
        headline: ml(
          '[SAMPLE] Campaign Hosts First Community Town Hall in Oxnard',
          '[MUESTRA] La Campaña Celebra su Primera Reunión Comunitaria en Oxnard',
          '[HALIMBAWA] Nag-host ang Kampanya ng Unang Community Town Hall sa Oxnard',
          '[EXEMPLE] La campagne organise son premier forum communautaire à Oxnard'
        ),
        source: '[Sample Source — Replace with real outlet]',
        date: '[SAMPLE DATE]',
        summary: ml(
          'Dozens of Ventura County residents gathered for the campaign\'s inaugural town hall event in Oxnard to ask questions, share concerns, and learn more about Paul Harold Johnson\'s vision for the Clerk-Recorder\'s office.',
          'Decenas de residentes del Condado de Ventura se reunieron para el evento inaugural de la campaña en Oxnard para hacer preguntas, compartir preocupaciones y aprender más sobre la visión de Paul Harold Johnson para la oficina del Clerk-Recorder.',
          'Nagtipun-tipon ang mga dosenang residente ng Ventura County para sa unang town hall event ng kampanya sa Oxnard upang magtanong, magbahagi ng mga alalahanin, at matuto nang higit pa tungkol sa bisyon ni Paul Harold Johnson para sa opisina ng Clerk-Recorder.',
          'Des dizaines de résidents du comté de Ventura se sont réunis pour l\'événement inaugural de la campagne à Oxnard pour poser des questions, exprimer leurs préoccupations et en savoir plus sur la vision de Paul Harold Johnson pour le bureau du Clerk-Recorder.'
        ),
        isPlaceholder: true,
      },
      {
        id: 'news-3',
        headline: ml(
          '[SAMPLE] Johnson Outlines 5-Point Plan for Election Integrity',
          '[MUESTRA] Johnson Presenta un Plan de 5 Puntos para la Integridad Electoral',
          '[HALIMBAWA] Inilabas ni Johnson ang 5-Point na Plano para sa Integridad ng Halalan',
          '[EXEMPLE] Johnson présente un plan en 5 points pour l\'intégrité électorale'
        ),
        source: '[Sample Source — Replace with real outlet]',
        date: '[SAMPLE DATE]',
        summary: ml(
          'At a press conference at Ventura County Government Center, candidate Paul Harold Johnson unveiled a detailed plan to enhance election transparency, expand voter access, and build greater community confidence in the local election process.',
          'En una conferencia de prensa en el Centro de Gobierno del Condado de Ventura, el candidato Paul Harold Johnson presentó un plan detallado para mejorar la transparencia electoral, ampliar el acceso al voto y generar mayor confianza de la comunidad en el proceso electoral local.',
          'Sa isang press conference sa Ventura County Government Center, inihayag ng kandidatong Paul Harold Johnson ang isang detalyadong plano upang mapahusay ang transparency ng halalan, mapalawig ang access ng botante, at magtayo ng mas malaking kumpiyansa ng komunidad sa lokal na proseso ng halalan.',
          'Lors d\'une conférence de presse au Ventura County Government Center, le candidat Paul Harold Johnson a dévoilé un plan détaillé pour améliorer la transparence électorale, élargir l\'accès des électeurs et renforcer la confiance de la communauté dans le processus électoral local.'
        ),
        isPlaceholder: true,
      },
      {
        id: 'news-4',
        headline: ml(
          '[SAMPLE] Multilingual Outreach Campaign Reaches Communities Across the County',
          '[MUESTRA] Campaña de Alcance Multilingüe Llega a Comunidades en Todo el Condado',
          '[HALIMBAWA] Ang Multilingual na Outreach Campaign ay Umaabot sa mga Komunidad sa Buong County',
          '[EXEMPLE] La campagne de sensibilisation multilingue atteint les communautés du comté'
        ),
        source: '[Sample Source — Replace with real outlet]',
        date: '[SAMPLE DATE]',
        summary: ml(
          'The Johnson campaign has launched multilingual outreach in English, Spanish, Tagalog, and French to ensure all Ventura County residents have access to information about the 2026 election.',
          'La campaña de Johnson ha lanzado un alcance multilingüe en inglés, español, tagalo y francés para garantizar que todos los residentes del Condado de Ventura tengan acceso a información sobre las elecciones de 2026.',
          'Inilunsad ng kampanya ni Johnson ang multilingual na outreach sa Ingles, Espanyol, Tagalog, at Pranses upang tiyaking lahat ng residente ng Ventura County ay may access sa impormasyon tungkol sa halalan ng 2026.',
          'La campagne Johnson a lancé une sensibilisation multilingue en anglais, espagnol, tagalog et français pour s\'assurer que tous les résidents du comté de Ventura ont accès aux informations sur les élections de 2026.'
        ),
        isPlaceholder: true,
      },
    ],
  },

  // 12 — ENDORSEMENTS
  {
    id: 'endorsements',
    icon: '⭐',
    label: ml('Endorsements', 'Respaldo', 'Mga Suporta', 'Appuis'),
    blocks: [
      {
        type: 'h2',
        text: ml('Endorsements', 'Respaldo', 'Mga Suporta', 'Appuis'),
      },
      {
        type: 'p',
        text: ml(
          'Paul Harold Johnson is grateful for the support of community members, civic leaders, and organizations across Ventura County. Endorsements will be added here as they are confirmed.',
          'Paul Harold Johnson está agradecido por el apoyo de miembros de la comunidad, líderes cívicos y organizaciones de todo el Condado de Ventura. Los respaldos se agregarán aquí a medida que se confirmen.',
          'Nagpapasalamat si Paul Harold Johnson sa suporta ng mga miyembro ng komunidad, mga lider sibiko, at mga organisasyon sa buong Ventura County. Ang mga suporta ay idadagdag dito habang sila ay kinukumpirma.',
          'Paul Harold Johnson est reconnaissant du soutien des membres de la communauté, des leaders civiques et des organisations du comté de Ventura. Les appuis seront ajoutés ici au fur et à mesure de leur confirmation.'
        ),
      },
      {
        type: 'cta-note',
        text: ml(
          '[PLACEHOLDER — All endorsements below are sample placeholders only. No real endorsements are represented. Replace with confirmed endorsements before launch.]',
          '[MARCADOR — Todos los respaldos a continuación son solo marcadores de muestra. No se representan respaldos reales. Reemplace con respaldos confirmados antes del lanzamiento.]',
          '[PLACEHOLDER — Lahat ng suporta sa ibaba ay mga sample placeholder lamang. Walang tunay na suporta ang kinakatawan. Palitan ng mga nakumpirmang suporta bago ilunsad.]',
          '[ESPACE RÉSERVÉ — Tous les appuis ci-dessous ne sont que des espaces réservés à titre d\'exemple. Aucun appui réel n\'est représenté. Remplacer par des appuis confirmés avant le lancement.]'
        ),
      },
    ],
    endorsements: [
      {
        id: 'end-1',
        name: '[Placeholder Name]',
        title: ml('[Community Leader — Replace]', '[Líder Comunitario — Reemplazar]', '[Community Leader — Palitan]', '[Leader communautaire — Remplacer]'),
        organization: '[Organization Name — Replace]',
        quote: ml(
          '"[Sample quote — Replace with real endorsement text before launch.]"',
          '"[Cita de muestra — Reemplazar con texto de respaldo real antes del lanzamiento.]"',
          '"[Halimbawang quote — Palitan ng tunay na endorsement text bago ilunsad.]"',
          '"[Exemple de citation — Remplacer par le vrai texte d\'appui avant le lancement.]"'
        ),
        isPlaceholder: true,
      },
      {
        id: 'end-2',
        name: '[Placeholder Name]',
        title: ml('[Elected Official — Replace]', '[Funcionario Electo — Reemplazar]', '[Elected Official — Palitan]', '[Élu — Remplacer]'),
        organization: '[Office — Replace]',
        quote: ml(
          '"[Sample quote — Replace with real endorsement text before launch.]"',
          '"[Cita de muestra — Reemplazar con texto de respaldo real antes del lanzamiento.]"',
          '"[Halimbawang quote — Palitan ng tunay na endorsement text bago ilunsad.]"',
          '"[Exemple de citation — Remplacer par le vrai texte d\'appui avant le lancement.]"'
        ),
        isPlaceholder: true,
      },
      {
        id: 'end-3',
        name: '[Placeholder Name]',
        title: ml('[Civic Organization — Replace]', '[Organización Cívica — Reemplazar]', '[Civic Organization — Palitan]', '[Organisation civique — Remplacer]'),
        organization: '[Organization Name — Replace]',
        quote: ml(
          '"[Sample quote — Replace with real endorsement text before launch.]"',
          '"[Cita de muestra — Reemplazar con texto de respaldo real antes del lanzamiento.]"',
          '"[Halimbawang quote — Palitan ng tunay na endorsement text bago ilunsad.]"',
          '"[Exemple de citation — Remplacer par le vrai texte d\'appui avant le lancement.]"'
        ),
        isPlaceholder: true,
      },
    ],
  },

  // 13 — VOLUNTEER
  {
    id: 'volunteer',
    icon: '🙋',
    label: ml('Volunteer', 'Voluntariado', 'Boluntaryo', 'Bénévolat'),
    blocks: [
      {
        type: 'h2',
        text: ml('Volunteer for the Campaign', 'Únase al Voluntariado', 'Mag-Boluntaryo para sa Kampanya', 'Faites du bénévolat pour la campagne'),
      },
      {
        type: 'p',
        text: ml(
          'The most powerful force in a local campaign is the energy and dedication of volunteers. Whether you can give a few hours or a few months, your help makes a real difference in reaching Ventura County voters.',
          'La fuerza más poderosa en una campaña local es la energía y dedicación de los voluntarios. Ya sea que pueda dar unas pocas horas o unos pocos meses, su ayuda marca una diferencia real en llegar a los votantes del Condado de Ventura.',
          'Ang pinaka-makapangyarihang puwersa sa isang lokal na kampanya ay ang enerhiya at dedikasyon ng mga boluntaryo. Kung maaari kang magbigay ng ilang oras o ilang buwan, ang iyong tulong ay gumagawa ng tunay na pagkakaiba sa pag-abot sa mga botante ng Ventura County.',
          'La force la plus puissante dans une campagne locale est l\'énergie et la dévotion des bénévoles. Que vous puissiez donner quelques heures ou quelques mois, votre aide fait une réelle différence pour atteindre les électeurs du comté de Ventura.'
        ),
      },
      {
        type: 'h3',
        text: ml('Volunteer Opportunities', 'Oportunidades de Voluntariado', 'Mga Oportunidad sa Boluntaryo', 'Opportunités de bénévolat'),
      },
      {
        type: 'ul',
        items: [
          ml(
            'Phone banking — Call voters to share campaign information',
            'Banco de llamadas — Llame a los votantes para compartir información de la campaña',
            'Phone banking — Tumawag sa mga botante upang ibahagi ang impormasyon ng kampanya',
            'Phoning — Appelez les électeurs pour partager les informations de la campagne'
          ),
          ml(
            'Canvassing — Walk neighborhoods and knock doors',
            'Hacer campaña — Camine por vecindarios y toque puertas',
            'Canvassing — Maglakad sa mga kapitbahayan at kumatok sa mga pintuan',
            'Porte-à-porte — Parcourez les quartiers et frappez aux portes'
          ),
          ml(
            'Event support — Help set up and manage campaign events',
            'Apoyo en eventos — Ayude a organizar y gestionar eventos de campaña',
            'Suporta sa kaganapan — Tulungan ang pag-set up at pamamahala ng mga kaganapan ng kampanya',
            'Soutien aux événements — Aidez à organiser et gérer les événements de la campagne'
          ),
          ml(
            'Digital outreach — Share campaign content on social media',
            'Alcance digital — Comparta el contenido de la campaña en redes sociales',
            'Digital na outreach — Ibahagi ang content ng kampanya sa social media',
            'Sensibilisation numérique — Partagez le contenu de la campagne sur les réseaux sociaux'
          ),
          ml(
            'Translation support — Help reach multilingual communities',
            'Apoyo de traducción — Ayude a llegar a comunidades multilingüe',
            'Suporta sa pagsasalin — Tulungan ang pag-abot sa mga multilingual na komunidad',
            'Soutien à la traduction — Aidez à atteindre les communautés multilingues'
          ),
          ml(
            'Administrative support — Office help and data entry',
            'Apoyo administrativo — Ayuda en la oficina e ingreso de datos',
            'Administratibong suporta — Tulong sa opisina at data entry',
            'Soutien administratif — Aide au bureau et saisie de données'
          ),
        ],
      },
      {
        type: 'cta-note',
        text: ml(
          'To sign up, use the Contact form or email the campaign directly. All volunteers will receive orientation and materials.',
          'Para inscribirse, use el formulario de contacto o envíe un correo electrónico directamente a la campaña. Todos los voluntarios recibirán orientación y materiales.',
          'Upang mag-sign up, gamitin ang Contact form o direktang mag-email sa kampanya. Lahat ng boluntaryo ay makakatanggap ng oryentasyon at mga materyales.',
          'Pour vous inscrire, utilisez le formulaire de contact ou envoyez un e-mail directement à la campagne. Tous les bénévoles recevront une orientation et des documents.'
        ),
      },
    ],
  },

  // 14 — FAQs
  {
    id: 'faqs',
    icon: '❓',
    label: ml('FAQs', 'Preguntas Frecuentes', 'Mga Madalas Itanong', 'FAQ'),
    blocks: [
      {
        type: 'h2',
        text: ml('Frequently Asked Questions', 'Preguntas Frecuentes', 'Mga Madalas Itanong', 'Questions fréquemment posées'),
      },
      {
        type: 'p',
        text: ml(
          'Have a question about Paul Harold Johnson\'s campaign or the Ventura County Clerk-Recorder\'s office? Browse common questions below.',
          '¿Tiene preguntas sobre la campaña de Paul Harold Johnson o la oficina del Clerk-Recorder del Condado de Ventura? Consulte las preguntas comunes a continuación.',
          'May katanungan tungkol sa kampanya ni Paul Harold Johnson o sa opisina ng Ventura County Clerk-Recorder? I-browse ang mga karaniwang tanong sa ibaba.',
          'Vous avez une question sur la campagne de Paul Harold Johnson ou le bureau du Clerk-Recorder du comté de Ventura ? Parcourez les questions courantes ci-dessous.'
        ),
      },
    ],
    faqs: [
      {
        id: 'faq-1',
        question: ml(
          'What does the Ventura County Clerk-Recorder do?',
          '¿Qué hace el Clerk-Recorder del Condado de Ventura?',
          'Ano ang ginagawa ng Ventura County Clerk-Recorder?',
          'Que fait le Clerk-Recorder du comté de Ventura ?'
        ),
        answer: ml(
          'The Clerk-Recorder\'s office manages official county records, oversees local elections administration, records property documents, processes voter registration, maintains vital records such as birth and death certificates, and provides public access to county documents and filings.',
          'La oficina del Clerk-Recorder gestiona los registros oficiales del condado, supervisa la administración de elecciones locales, registra documentos de propiedad, procesa el registro de votantes, mantiene registros vitales como certificados de nacimiento y defunción, y proporciona acceso público a documentos y presentaciones del condado.',
          'Ang opisina ng Clerk-Recorder ay namamahala ng mga opisyal na talaan ng county, nangangasiwa sa administrasyon ng mga lokal na halalan, nagtatala ng mga dokumento ng ari-arian, nagpoproseso ng voter registration, nagpapanatili ng mga vital record tulad ng mga birth at death certificate, at nagbibigay ng pampublikong access sa mga dokumento at pagsasampa ng county.',
          'Le bureau du Clerk-Recorder gère les dossiers officiels du comté, supervise l\'administration des élections locales, enregistre les documents fonciers, traite l\'inscription des électeurs, maintient les registres d\'état civil tels que les actes de naissance et de décès, et fournit un accès public aux documents et dépôts du comté.'
        ),
      },
      {
        id: 'faq-2',
        question: ml(
          'Is this a partisan election?',
          '¿Es esta una elección partidista?',
          'Ito ba ay isang partisan na halalan?',
          'S\'agit-il d\'une élection partisane ?'
        ),
        answer: ml(
          'No. The Ventura County Clerk-Recorder race is a nonpartisan election. Paul Harold Johnson is running to serve all residents of Ventura County, regardless of political affiliation.',
          'No. La carrera para Clerk-Recorder del Condado de Ventura es una elección no partidista. Paul Harold Johnson se postula para servir a todos los residentes del Condado de Ventura, independientemente de su afiliación política.',
          'Hindi. Ang karera ng Ventura County Clerk-Recorder ay isang nonpartisan na halalan. Tumatakbo si Paul Harold Johnson upang maglingkod sa lahat ng residente ng Ventura County, anuman ang kanilang political na affiliation.',
          'Non. La course pour le Clerk-Recorder du comté de Ventura est une élection non partisane. Paul Harold Johnson se présente pour servir tous les résidents du comté de Ventura, quelle que soit leur appartenance politique.'
        ),
      },
      {
        id: 'faq-3',
        question: ml(
          'What is Paul Harold Johnson\'s ballot designation?',
          '¿Cuál es la designación en la boleta de Paul Harold Johnson?',
          'Ano ang ballot designation ni Paul Harold Johnson?',
          'Quelle est la désignation sur le bulletin de vote de Paul Harold Johnson ?'
        ),
        answer: ml(
          'Paul Harold Johnson\'s official ballot designation is "Computerized System Analyst," reflecting his professional background and the expertise he brings to the Clerk-Recorder\'s office.',
          'La designación oficial en la boleta de Paul Harold Johnson es "Analista de Sistemas Computarizados", lo que refleja su trayectoria profesional y la experiencia que aporta a la oficina del Clerk-Recorder.',
          'Ang opisyal na ballot designation ni Paul Harold Johnson ay "Computerized System Analyst," na sumasalamin sa kanyang propesyonal na background at kaalaman na dinadala niya sa opisina ng Clerk-Recorder.',
          'La désignation officielle de Paul Harold Johnson sur le bulletin de vote est "Analyste en systèmes informatisés", reflétant son parcours professionnel et l\'expertise qu\'il apporte au bureau du Clerk-Recorder.'
        ),
      },
      {
        id: 'faq-4',
        question: ml(
          'How can I register to vote in Ventura County?',
          '¿Cómo puedo registrarme para votar en el Condado de Ventura?',
          'Paano ako maaaring mag-register upang bumoto sa Ventura County?',
          'Comment puis-je m\'inscrire pour voter dans le comté de Ventura ?'
        ),
        answer: ml(
          'Ventura County residents can register to vote online at RegisterToVote.ca.gov, in person at the Clerk-Recorder\'s office, or through automatic voter registration at the DMV. The deadline to register is typically 15 days before Election Day, though conditional registration is available until Election Day.',
          'Los residentes del Condado de Ventura pueden registrarse para votar en línea en RegisterToVote.ca.gov, en persona en la oficina del Clerk-Recorder, o a través del registro automático de votantes en el DMV. El plazo para registrarse es generalmente 15 días antes del Día de Elecciones, aunque el registro condicional está disponible hasta el Día de Elecciones.',
          'Ang mga residente ng Ventura County ay maaaring mag-register upang bumoto online sa RegisterToVote.ca.gov, nang personal sa opisina ng Clerk-Recorder, o sa pamamagitan ng automatic voter registration sa DMV. Ang deadline para sa pag-register ay karaniwang 15 araw bago ang Election Day, kahit na ang conditional registration ay available hanggang Election Day.',
          'Les résidents du comté de Ventura peuvent s\'inscrire pour voter en ligne sur RegisterToVote.ca.gov, en personne au bureau du Clerk-Recorder, ou par l\'inscription automatique des électeurs au DMV. La date limite d\'inscription est généralement de 15 jours avant le jour du scrutin, bien qu\'une inscription conditionnelle soit disponible jusqu\'au jour du scrutin.'
        ),
      },
      {
        id: 'faq-5',
        question: ml(
          'How can I support Paul Harold Johnson\'s campaign?',
          '¿Cómo puedo apoyar la campaña de Paul Harold Johnson?',
          'Paano ko maaaring suportahan ang kampanya ni Paul Harold Johnson?',
          'Comment puis-je soutenir la campagne de Paul Harold Johnson ?'
        ),
        answer: ml(
          'There are many ways to get involved: volunteer your time, contribute to the campaign, attend events, share our website and social media content, and most importantly — vote! Use the CONTRIBUTE button or the CONTACT form on this site to connect with the campaign.',
          'Hay muchas formas de participar: sea voluntario, contribuya a la campaña, asista a eventos, comparta nuestro sitio web y contenido en redes sociales, y lo más importante — ¡vote! Use el botón CONTRIBUIR o el formulario de CONTACTO en este sitio para conectarse con la campaña.',
          'Maraming paraan upang makilahok: mag-boluntaryo ng iyong oras, mag-ambag sa kampanya, dumalo sa mga kaganapan, ibahagi ang aming website at social media content, at pinakamahalaga — bumoto! Gamitin ang CONTRIBUTE na button o ang CONTACT form sa site na ito upang makipag-ugnayan sa kampanya.',
          'Il existe de nombreuses façons de s\'impliquer : bénévolat, contribution à la campagne, participation aux événements, partage de notre site web et du contenu des réseaux sociaux, et surtout — votez ! Utilisez le bouton CONTRIBUER ou le formulaire CONTACT sur ce site pour entrer en contact avec la campagne.'
        ),
      },
      {
        id: 'faq-6',
        question: ml(
          'What are the qualifications to serve as Ventura County Clerk-Recorder?',
          '¿Cuáles son los requisitos para servir como Clerk-Recorder del Condado de Ventura?',
          'Ano ang mga kwalipikasyon upang maglingkod bilang Ventura County Clerk-Recorder?',
          'Quelles sont les qualifications requises pour exercer les fonctions de Clerk-Recorder du comté de Ventura ?'
        ),
        answer: ml(
          'To be eligible for Ventura County Clerk-Recorder, a candidate must be a registered voter and a resident of Ventura County. The position requires strong administrative capability, understanding of election law, and the ability to manage a large public-facing county office. Paul Harold Johnson\'s background as a Computerized System Analyst provides him with relevant technical and analytical expertise for this role.',
          'Para ser elegible para Clerk-Recorder del Condado de Ventura, un candidato debe ser un votante registrado y residente del Condado de Ventura. El puesto requiere una sólida capacidad administrativa, comprensión de la ley electoral y la capacidad de gestionar una gran oficina del condado orientada al público. La experiencia de Paul Harold Johnson como Analista de Sistemas Computarizados le proporciona experiencia técnica y analítica relevante para este rol.',
          'Upang maging kwalipikado para sa Ventura County Clerk-Recorder, ang isang kandidato ay dapat na registered voter at residente ng Ventura County. Ang posisyon ay nangangailangan ng matibay na kakayahang administratibo, pag-unawa sa batas ng halalan, at kakayahang pamahalaan ang isang malaking opisina ng county na nakaharap sa publiko. Ang background ni Paul Harold Johnson bilang Computerized System Analyst ay nagbibigay sa kanya ng kaugnay na teknikal at analytical na kaalaman para sa papel na ito.',
          'Pour être éligible au poste de Clerk-Recorder du comté de Ventura, un candidat doit être électeur inscrit et résident du comté de Ventura. Le poste requiert de solides capacités administratives, une compréhension du droit électoral et la capacité de gérer un grand bureau du comté ouvert au public. Le parcours de Paul Harold Johnson en tant qu\'analyste en systèmes informatisés lui confère une expertise technique et analytique pertinente pour ce rôle.'
        ),
      },
      {
        id: 'faq-7',
        question: ml(
          'When is the 2026 election?',
          '¿Cuándo es la elección de 2026?',
          'Kailan ang halalan ng 2026?',
          'Quand a lieu l\'élection de 2026 ?'
        ),
        answer: ml(
          'The 2026 California Primary Election is scheduled for June 2026, with the General Election in November 2026. Please check the official Ventura County Elections Division website for the most current dates, deadlines, and information.',
          'La Elección Primaria de California 2026 está programada para junio de 2026, con la Elección General en noviembre de 2026. Consulte el sitio web oficial de la División de Elecciones del Condado de Ventura para obtener las fechas, plazos e información más actualizados.',
          'Ang 2026 California Primary Election ay nakatakda para sa Hunyo 2026, na may General Election sa Nobyembre 2026. Pakitingnan ang opisyal na website ng Ventura County Elections Division para sa pinaka-kasalukuyang mga petsa, deadline, at impormasyon.',
          'L\'élection primaire californienne de 2026 est prévue pour juin 2026, avec l\'élection générale en novembre 2026. Veuillez consulter le site officiel de la Division des élections du comté de Ventura pour les dates, délais et informations les plus récents.'
        ),
      },
    ],
  },

  // 15 — GET INVOLVED
  {
    id: 'get-involved',
    icon: '🌟',
    label: ml('Get Involved', 'Participa', 'Makilahok', 'Participez'),
    blocks: [
      {
        type: 'h2',
        text: ml('Get Involved', 'Participa', 'Makilahok', 'Participez'),
      },
      {
        type: 'p',
        text: ml(
          'Local elections are decided by local participation. When you get involved with Paul Harold Johnson\'s campaign, you are investing in better government for your community — and your voice matters.',
          'Las elecciones locales se deciden por la participación local. Cuando participa en la campaña de Paul Harold Johnson, está invirtiendo en un mejor gobierno para su comunidad — y su voz importa.',
          'Ang mga lokal na halalan ay tinutukoy ng lokal na pakikilahok. Kapag nakikilahok ka sa kampanya ni Paul Harold Johnson, namumuhunan ka sa mas mahusay na pamahalaan para sa iyong komunidad — at ang iyong boses ay mahalaga.',
          'Les élections locales sont décidées par la participation locale. Lorsque vous vous impliquez dans la campagne de Paul Harold Johnson, vous investissez dans un meilleur gouvernement pour votre communauté — et votre voix compte.'
        ),
      },
      {
        type: 'h3',
        text: ml('Ways to Get Involved', 'Formas de Participar', 'Mga Paraan upang Makilahok', 'Façons de s\'impliquer'),
      },
      {
        type: 'ul',
        items: [
          ml(
            'Register to vote and make a plan to vote on Election Day',
            'Regístrese para votar y haga un plan para votar el Día de Elecciones',
            'Mag-register upang bumoto at gumawa ng plano upang bumoto sa Election Day',
            'Inscrivez-vous pour voter et planifiez de voter le jour du scrutin'
          ),
          ml(
            'Volunteer your time — every hour helps',
            'Ofrézcase como voluntario — cada hora ayuda',
            'Mag-boluntaryo ng iyong oras — ang bawat oras ay nakakatulong',
            'Faites du bénévolat — chaque heure compte'
          ),
          ml(
            'Contribute to the campaign to support outreach and events',
            'Contribuya a la campaña para apoyar el alcance y los eventos',
            'Mag-ambag sa kampanya upang suportahan ang outreach at mga kaganapan',
            'Contribuez à la campagne pour soutenir la sensibilisation et les événements'
          ),
          ml(
            'Spread the word — share this website and social media posts',
            'Corra la voz — comparta este sitio web y publicaciones en redes sociales',
            'Ipalaganap ang balita — ibahagi ang website na ito at mga post sa social media',
            'Faites passer le message — partagez ce site web et les publications sur les réseaux sociaux'
          ),
          ml(
            'Attend a community event and bring a friend or neighbor',
            'Asista a un evento comunitario y traiga a un amigo o vecino',
            'Dumalo sa isang kaganapan ng komunidad at magdala ng kaibigan o kapitbahay',
            'Assistez à un événement communautaire et amenez un ami ou un voisin'
          ),
          ml(
            'Write a letter to the editor of your local newspaper',
            'Escriba una carta al editor de su periódico local',
            'Sumulat ng liham sa editor ng iyong lokal na pahayagan',
            'Écrivez une lettre à la rédaction de votre journal local'
          ),
          ml(
            'Display a yard sign or bumper sticker (materials available upon request)',
            'Muestre un letrero en el jardín o calcomanía (materiales disponibles bajo pedido)',
            'Magpakita ng yard sign o bumper sticker (mga materyales available sa kahilingan)',
            'Affichez un panneau de jardin ou un autocollant de pare-chocs (matériaux disponibles sur demande)'
          ),
        ],
      },
      {
        type: 'h3',
        text: ml('Stay Connected', 'Manténgase Conectado', 'Manatiling Konektado', 'Restez connecté'),
      },
      {
        type: 'p',
        text: ml(
          'Follow the campaign on social media for the latest updates, events, and news. Use the Contact form on this site to send a message, ask a question, or let us know how you\'d like to help.',
          'Siga la campaña en redes sociales para obtener las últimas actualizaciones, eventos y noticias. Use el formulario de contacto en este sitio para enviar un mensaje, hacer una pregunta o informarnos cómo le gustaría ayudar.',
          'Sundan ang kampanya sa social media para sa pinakabagong mga update, kaganapan, at balita. Gamitin ang Contact form sa site na ito upang magpadala ng mensahe, magtanong, o ipaalam sa amin kung paano mo gustong tumulong.',
          'Suivez la campagne sur les réseaux sociaux pour les dernières mises à jour, événements et actualités. Utilisez le formulaire de contact sur ce site pour envoyer un message, poser une question ou nous faire savoir comment vous souhaitez aider.'
        ),
      },
      {
        type: 'badge-row',
        badges: [
          ml(
            'Vote in 2026',
            'Vote en 2026',
            'Bumoto sa 2026',
            'Votez en 2026'
          ),
          ml(
            'Ventura County',
            'Condado de Ventura',
            'Ventura County',
            'Comté de Ventura'
          ),
          ml(
            'Nonpartisan',
            'No Partidista',
            'Nonpartisan',
            'Non partisan'
          ),
          ml(
            'Your Voice Matters',
            'Tu Voz Importa',
            'Mahalaga ang Iyong Boses',
            'Votre voix compte'
          ),
        ],
      },
      {
        type: 'cta-note',
        text: ml(
          'This campaign is powered by community. Thank you for your support.',
          'Esta campaña está impulsada por la comunidad. Gracias por su apoyo.',
          'Ang kampanyang ito ay pinapagana ng komunidad. Salamat sa inyong suporta.',
          'Cette campagne est portée par la communauté. Merci pour votre soutien.'
        ),
      },
    ],
  },
]

// ============================================================
// CONTRIBUTE DIALOG LABELS
// ============================================================
export const contributeLabels = {
  title: ml('Contribute to the Campaign', 'Contribuir a la Campaña', 'Mag-Ambag sa Kampanya', 'Contribuer à la campagne'),
  subtitle: ml(
    'Your contribution helps Paul Harold Johnson reach voters across Ventura County. All fields marked with * are required.',
    'Su contribución ayuda a Paul Harold Johnson a llegar a los votantes del Condado de Ventura. Todos los campos marcados con * son obligatorios.',
    'Ang iyong kontribusyon ay tumutulong kay Paul Harold Johnson na maabot ang mga botante sa buong Ventura County. Lahat ng patlang na may markang * ay kinakailangan.',
    'Votre contribution aide Paul Harold Johnson à atteindre les électeurs du comté de Ventura. Tous les champs marqués d\'un * sont obligatoires.'
  ),
  complianceNote: ml(
    'Contributions are subject to campaign finance laws. By contributing, you confirm you are a U.S. citizen or permanent resident and are not a foreign national. [PLACEHOLDER — Consult campaign legal counsel before launch for final compliance language.]',
    'Las contribuciones están sujetas a las leyes de financiamiento de campañas. Al contribuir, confirma que es ciudadano estadounidense o residente permanente y que no es un extranjero. [MARCADOR — Consulte al asesor legal de la campaña antes del lanzamiento para el lenguaje de cumplimiento final.]',
    'Ang mga kontribusyon ay napapailalim sa mga batas ng campaign finance. Sa pamamagitan ng pag-ambag, kinukumpirma mo na ikaw ay isang mamamayan ng US o permanent resident at hindi isang dayuhang pambansa. [PLACEHOLDER — Kumonsulta sa legal counsel ng kampanya bago ilunsad para sa pangwakas na wika ng pagsunod.]',
    'Les contributions sont soumises aux lois sur le financement des campagnes. En contribuant, vous confirmez que vous êtes citoyen américain ou résident permanent et que vous n\'êtes pas un ressortissant étranger. [ESPACE RÉSERVÉ — Consultez le conseiller juridique de la campagne avant le lancement pour la formulation finale de conformité.]'
  ),
}

// ============================================================
// CONTACT DIALOG LABELS
// ============================================================
export const contactLabels = {
  title: ml('Contact & Comments', 'Contacto y Comentarios', 'Makipag-ugnayan at Mga Komento', 'Contact et commentaires'),
  subtitle: ml(
    'Send a message to the Paul Harold Johnson campaign. We read every message and will respond when possible.',
    'Envíe un mensaje a la campaña de Paul Harold Johnson. Leemos cada mensaje y responderemos cuando sea posible.',
    'Magpadala ng mensahe sa kampanya ni Paul Harold Johnson. Binabasa namin ang bawat mensahe at tutugon kami kung posible.',
    'Envoyez un message à la campagne de Paul Harold Johnson. Nous lisons chaque message et répondrons dans la mesure du possible.'
  ),
}

// ============================================================
// LANGUAGE LABELS (for selector UI)
// ============================================================
export const langLabels: Record<Lang, string> = {
  en: 'English',
  es: 'Español',
  tl: 'Filipino',
  fr: 'Français',
}

// ============================================================
// UI LABELS — all translatable UI chrome text
// ============================================================
export const uiLabels = {
  // Header
  nonpartisan:        ml('★ Nonpartisan', '★ No Partidista', '★ Nonpartisan', '★ Non partisan'),
  contribute:         ml('Contribute', 'Contribuir', 'Mag-Ambag', 'Contribuer'),
  skipToContent:      ml('Skip to main content', 'Ir al contenido principal', 'Pumunta sa pangunahing nilalaman', 'Aller au contenu principal'),

  // Theme toggle
  lightMode:          ml('Light mode', 'Modo claro', 'Light mode', 'Mode clair'),
  darkMode:           ml('Dark mode', 'Modo oscuro', 'Dark mode', 'Mode sombre'),
  toggleTheme:        ml('Toggle theme', 'Cambiar tema', 'Palitan ang tema', 'Changer de thème'),

  // ButtonGrid section
  exploreLabel:       ml('Explore the Campaign', 'Explore la Campaña', 'Pag-aralin ang Kampanya', 'Explorez la campagne'),
  exploreHeading:     ml('What Matters to You?', '¿Qué le Importa?', 'Ano ang Mahalaga sa Iyo?', 'Qu\'est-ce qui compte pour vous\u00a0?'),
  exploreSubtitle:    ml(
    'Select any topic to read Paul\'s full positions, plans, and commitments.',
    'Seleccione un tema para conocer las posiciones y planes de Paul Harold Johnson.',
    'Pumili ng paksa upang basahin ang mga buong posisyon, plano, at pangako ni Paul.',
    'Sélectionnez un sujet pour lire les positions, plans et engagements de Paul.'
  ),

  // Hero chips
  chipAnalyst:        ml('Computerized System Analyst', 'Computerized System Analyst', 'Computerized System Analyst', 'Computerized System Analyst'),
  chipRace:           ml('Clerk-Recorder Race', 'Elección Clerk-Recorder', 'Clerk-Recorder Race', 'Course Clerk-Recorder'),
  chipCommunity:      ml('Community First', 'Comunidad Primero', 'Komunidad Muna', 'Communauté d\'abord'),

  // About section
  meetCandidate:      ml('Meet the Candidate', 'Conozca al Candidato', 'Makilala ang Kandidato', 'Rencontrez le candidat'),
  whyRaceMatters:     ml('Why This Race Matters', 'Por Qué Esta Elección Importa', 'Bakit Mahalaga ang Eleksyon na Ito', 'Pourquoi cette course est importante'),
  ballotLabel:        ml('Ballot Designation', 'Designación en la Boleta', 'Pagtatalaga sa Balota', 'Désignation sur le bulletin'),
  electionYear:       ml('2026 Election', 'Elección 2026', '2026 na Halalan', 'Élection 2026'),
  venturaBadge:       ml('Ventura County', 'Condado de Ventura', 'Ventura County', 'Comté de Ventura'),
  nonpartisanBadge:   ml('Nonpartisan', 'No Partidista', 'Nonpartisan', 'Non partisan'),

  // Footer
  footerContact:      ml('Contact / Comment', 'Contacto / Comentario', 'Makipag-ugnayan / Magkomento', 'Contact\u00a0/ Commentaire'),
  footerLanguage:     ml('Language', 'Idioma', 'Wika', 'Langue'),
  footerLinks:        ml('Quick Links', 'Enlaces Rápidos', 'Mabilis na Mga Link', 'Liens rapides'),
  footerLegal:        ml(
    'Paul Harold Johnson for Ventura County Clerk-Recorder. Prepared for future campaign use. All rights reserved.',
    'Paul Harold Johnson para Clerk-Recorder del Condado de Ventura. Preparado para uso futuro de campaña. Todos los derechos reservados.',
    'Paul Harold Johnson para sa Ventura County Clerk-Recorder. Inihanda para sa hinaharap na paggamit ng kampanya. Lahat ng karapatan ay nakalaan.',
    'Paul Harold Johnson pour Clerk-Recorder du comté de Ventura. Préparé pour une utilisation future de la campagne. Tous droits réservés.'
  ),
  footerCompliance:   ml(
    '[PLACEHOLDER — Add official compliance disclaimer before launch.]',
    '[MARCADOR — Agregue descargo de responsabilidad oficial antes del lanzamiento.]',
    '[PLACEHOLDER — Magdagdag ng opisyal na disclaimer bago ilunsad.]',
    '[ESPACE RÉSERVÉ — Ajoutez la clause de non-responsabilité officielle avant le lancement.]'
  ),

  // Popup toolbar
  print:              ml('Print', 'Imprimir', 'I-print', 'Imprimer'),
  pdf:                ml('Save PDF', 'Guardar PDF', 'I-save ang PDF', 'Enregistrer PDF'),
  close:              ml('Close', 'Cerrar', 'Isara', 'Fermer'),

  // Dialog shared
  required:           ml('required', 'obligatorio', 'kinakailangan', 'obligatoire'),
  optional:           ml('Optional', 'Opcional', 'Opsyonal', 'Facultatif'),
  submitting:         ml('Submitting\u2026', 'Enviando\u2026', 'Isinusumite\u2026', 'En cours\u2026'),
  successTitle:       ml('Submitted!', '¡Enviado!', 'Naisumite!', 'Soumis\u00a0!'),
  errorTitle:         ml('Something went wrong', 'Algo salió mal', 'May nangyaring mali', 'Une erreur s\'est produite'),
  errorRetry:         ml('Please try again.', 'Por favor intente de nuevo.', 'Pakisubukang muli.', 'Veuillez réessayer.'),

  // Donate dialog
  donateSuccess:      ml(
    'Thank you for your contribution! The campaign will be in touch.',
    'Gracias por su contribución. La campaña se comunicará con usted.',
    'Salamat sa iyong kontribusyon! Makikipag-ugnayan ang kampanya.',
    'Merci pour votre contribution\u00a0! La campagne vous contactera.'
  ),
  donateSelectAmt:    ml('Select Amount', 'Seleccionar Monto', 'Piliin ang Halaga', 'Sélectionner le montant'),
  donateCustom:       ml('Custom', 'Personalizado', 'Pasadya', 'Personnalisé'),
  donateFullName:     ml('Full Name', 'Nombre Completo', 'Buong Pangalan', 'Nom complet'),
  donateAddress:      ml('Street Address', 'Dirección', 'Kalye Address', 'Adresse'),
  donateCity:         ml('City', 'Ciudad', 'Lungsod', 'Ville'),
  donateState:        ml('State', 'Estado', 'Estado', 'État'),
  donateZip:          ml('ZIP Code', 'Código Postal', 'ZIP Code', 'Code postal'),
  donateOccupation:   ml('Occupation', 'Ocupación', 'Trabaho', 'Profession'),
  donateEmployer:     ml('Employer', 'Empleador', 'Employer', 'Employeur'),
  donateRetiredHint:  ml('(not required if Retired)', '(no requerido si es Jubilado)', '(hindi kailangan kung Retirado)', '(non requis si Retraité)'),
  donateMessage:      ml('Message', 'Mensaje', 'Mensahe', 'Message'),
  donateSubmit:       ml('Submit Contribution', 'Enviar Contribución', 'Isumite ang Kontribusyon', 'Soumettre la contribution'),

  // Contact dialog
  contactName:        ml('Full Name', 'Nombre Completo', 'Buong Pangalan', 'Nom complet'),
  contactEmail:       ml('Email Address', 'Correo Electrónico', 'Email Address', 'Adresse e-mail'),
  contactPhone:       ml('Phone', 'Teléfono', 'Telepono', 'Téléphone'),
  contactSubject:     ml('Subject', 'Asunto', 'Paksa', 'Sujet'),
  contactMessage:     ml('Message', 'Mensaje', 'Mensahe', 'Message'),
  contactSubmit:      ml('Send Message', 'Enviar Mensaje', 'Ipadala ang Mensahe', 'Envoyer le message'),
  contactSuccess:     ml(
    'Thank you! Your message has been received. We\'ll respond as soon as we can.',
    'Gracias. Su mensaje ha sido recibido. Responderemos lo antes posible.',
    'Salamat! Natanggap na ang iyong mensahe. Tutugon kami sa lalong madaling panahon.',
    'Merci\u00a0! Votre message a été reçu. Nous répondrons dès que possible.'
  ),

  // Validation errors
  errRequired:        ml('This field is required.', 'Este campo es obligatorio.', 'Kinakailangan ang field na ito.', 'Ce champ est obligatoire.'),
  errEmail:           ml('Please enter a valid email address.', 'Ingrese un correo electrónico válido.', 'Maglagay ng wastong email address.', 'Veuillez saisir une adresse e-mail valide.'),
  errAmount:          ml('Please select or enter a donation amount.', 'Seleccione o ingrese un monto de donación.', 'Pumili o maglagay ng halaga ng donasyon.', 'Veuillez sélectionner ou saisir un montant de don.'),
}
