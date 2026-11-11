import Efectos from "./efectos";
import Icono from "./icono";
import MbareteDemo from "./mbarete-demo";

const chapters = [
  ["01", "Origen"], ["02", "Cronología"], ["03", "Investigación"], ["04", "Producción"],
  ["05", "Ecosistema"], ["06", "Encuestas"], ["07", "Resultados"], ["08", "Desafío"],
  ["09", "Alianza"], ["10", "Laboratorio"], ["11", "Mbarete"], ["12", "Hoja de ruta"], ["13", "Futuro"],
];
const NAV_HIDDEN = ["Investigación", "Encuestas"];

const challengeStats: [number | null, string, string, string][] = [
  [45, "", "45", "equipos inscriptos"], [117, "", "117", "participantes"], [12, "+", "+12", "carreras"], [null, "", "6 de 10", "participantes son de Medicina"],
];

const mcloudProjects = [
  ["01", "trophy", "Desafío UPE Innovación", "Realizado", "1 de noviembre de 2026. Estudiantes de distintas carreras presentaron ideas con IA ante un jurado. El equipo ganador recibió Gs. 10.000.000."],
  ["02", "brain", "Mbarete, IA local de MCLoud", "Funcionando", "Una plataforma de IA que funciona en equipos propios, busca en los documentos y responde citando la fuente. Ya prepara preguntas para Moodle con revisión docente."],
  ["03", "users", "Plataforma UPE Bienestar", "Versión de demostración", "Diseñada con la Dirección de Bienestar: ficha de seguimiento de cada atención, cuestionarios y escalas, y ficha del estudiante. Hoy funciona con datos de prueba."],
  ["04", "clapperboard", "Videoclases con avatar docente", "En pruebas", "Voz y rostro del docente, con su autorización por escrito, para producir videoclases más rápido. Cada video avisa que fue generado con IA."],
  ["05", "scan-text", "Archivo Inteligente", "Piloto en preparación", "Para la Secretaría Académica de Medicina: digitalizar legajos y facilitar su búsqueda, con el documento original y permisos por persona. Financiado por MCLoud."],
];

const allianceFlow = [
  ["users", "Talento", "Estudiantes y docentes de todas las carreras."],
  ["target", "Necesidades reales", "Lo que cada facultad necesita mejorar."],
  ["flask-conical", "Prototipos", "Se propone desarrollarlos y probarlos en el Laboratorio UPE-IA."],
  ["circle-check", "Validación", "Los proyectos avanzan según los resultados de las pruebas."],
  ["rocket", "Soluciones", "Se aplican en la UPE. Otros usos requieren acuerdos previos entre las partes."],
];

const labPipeline = [
  ["lightbulb", "Idea", "Necesidades de las facultades, tesis y proyectos del Desafío."],
  ["flask-conical", "Prototipo", "Un equipo mixto construye una primera versión que se puede usar."],
  ["users", "Piloto", "Se prueba con usuarios reales en una facultad, con un responsable."],
  ["chart-column", "Medición", "Costo, uso, satisfacción, tiempo ahorrado y aprendizaje."],
  ["circle-check", "Decisión", "Se adopta, se mejora o se descarta a tiempo."],
  ["rocket", "Escala", "Lo que funciona llega a otras carreras de la UPE."],
];

const labFeatures = [
  ["users", "Espacio para equipos", "Docentes, estudiantes y mentores en casos reales, con metas por proyecto."],
  ["server", "Servidor de IA propio", "Se prevé instalar Mbarete en un servidor del laboratorio para procesar la información de forma local."],
  ["messages-square", "Mentores", "Acompañamiento técnico de MCLoud y académico de cada facultad."],
  ["library", "Banco de ideas y tesis", "Las tesis y las ideas del Desafío quedan registradas para volverse prototipos."],
  ["flask-conical", "Zona de pruebas", "Datos de prueba y entornos separados para reducir riesgos durante las pruebas."],
  ["shield-check", "Reglas claras", "Convenio, confidencialidad y propiedad intelectual definidos antes de empezar."],
];

const labLines = [
  ["brain", "IA para aprender"], ["stethoscope", "Práctica médica simulada"], ["message-circle", "Asistentes que responden dudas"],
  ["repeat", "Menos tareas repetidas"], ["chart-column", "Datos para decidir mejor"], ["clapperboard", "Videoclases con avatar docente"],
];

const ecosystemPieces = [
  ["compass", "Dirección del Ecosistema", "Coordina todo y responde al Rectorado."],
  ["users-round", "Consejo de Innovación", "Decide qué temas trabajar primero."],
  ["flask-conical", "Laboratorio UPE-IA", "El lugar donde se prueban las ideas."],
  ["map-pin", "Un referente por facultad", "Trae las necesidades de su carrera."],
  ["graduation-cap", "Red de estudiantes", "Estudiantes de todas las carreras en casos reales."],
  ["shield-check", "Reglas claras", "Cuidar los datos y dejar claro de quién es cada idea."],
];

const labGains = [
  ["graduation-cap", "Estudiantes", ["Experiencia en proyectos reales", "Mentoría y formación", "Posibles becas, sujetas a acuerdos", "Posibilidad de sumarse a MCLoud"]],
  ["building-2", "Docentes y facultades", ["Soluciones a sus necesidades", "Tesis que llegan a la práctica", "Saber qué funcionó y qué no"]],
  ["landmark", "UPE", ["Innovación ordenada y medible", "Propiedad intelectual protegida", "Talento propio, visible y reconocido"]],
] as const;

const mbareteCaps = [
  ["file-search", "Responde con fuentes", "Busca en los documentos cargados y cita de dónde sale cada dato.", "Funcionando"],
  ["book-open", "Preguntas para Moodle", "Prepara preguntas a partir del material de clase, en formatos que Moodle importa. El docente revisa y aprueba.", "Funcionando"],
  ["scan-text", "Lee documentos escaneados", "Extrae el texto de archivos PDF y documentos escaneados: la base del Archivo Inteligente.", "Funcionando"],
  ["workflow", "Automatizaciones", "Tareas programadas que se ejecutan automáticamente, como el resumen semanal de pendientes.", "Funcionando"],
  ["brain", "Memoria", "Conserva el contexto de las conversaciones para dar continuidad a las consultas.", "Funcionando"],
  ["plug", "API propia", "Los sistemas de la UPE, como Moodle, pueden usarla en lugar de servicios externos pagos.", "Lista para conectar"],
  ["code", "Agente que programa", "Escribe y prueba código en una copia aislada; nada se aplica sin aprobación.", "En pruebas"],
  ["clapperboard", "Voz y avatar docente", "Voz y avatar digital para videoclases, con autorización del docente.", "En pruebas"],
];

const dataRules = [
  ["lock", "Los datos no salen a internet"], ["shield-check", "No se entrena con datos de la UPE sin autorización escrita"],
  ["users", "Permisos por persona y registro de cada acceso"], ["circle-check", "Las personas deciden: la IA propone"],
];

const roadmap = [
  ["Avances realizados", "2026", "done", ["Desafío UPE Innovación 2026", "Versión de demostración de UPE Bienestar", "Mbarete funcionando con fuentes y preguntas para Moodle", "Primeras pruebas de videoclases con avatar"]],
  ["Próximo paso", "Cierre de 2026", "next", ["Seguimiento de equipos y talentos del Desafío", "Servidores de IA propios para el laboratorio", "Archivo Inteligente: relevamiento y prueba con una muestra de documentos"]],
  ["Primer semestre", "2027", "", ["Laboratorio UPE-IA funcionando en Medicina", "Primeros prototipos con equipos mixtos", "UPE Bienestar con usuarios reales", "Mbarete conectado a Moodle, con revisión docente"]],
  ["Segundo semestre", "2027", "", ["Laboratorio abierto a todas las facultades", "Desafío UPE Innovación 2027", "Archivo Inteligente: digitalización, preparación de la IA local e implementación del asistente"]],
  ["Visión", "2028–2030", "", ["IA en la enseñanza y simulación clínica", "Campus inteligente: todo conectado en un solo ecosistema"]],
] as const;

const institutionalChannels = [
  ["WhatsApp", 42.2, 54], ["Instagram Medicina", 19.5, 25],
  ["Amigos o compañeros", 17.2, 22], ["Instagram UPE", 15.6, 20], ["Otros medios", 5.5, 7],
];

const followedAccounts = [
  ["Instagram Medicina", "@Medicina_UPE_Oficial", 39.1, 50],
  ["Ambas cuentas por igual", "Medicina + Institucional", 35.2, 45],
  ["Instagram Institucional", "@UPEFrancoCentral", 15.6, 20],
  ["Ninguna / no usa Instagram", "", 10.2, 13],
];

const patientUse = [
  ["No conoce la plataforma", 38.2, 34], ["La utilizó pocas veces", 23.6, 21],
  ["La utilizó varias veces", 20.2, 18], ["La conoce, pero no la utilizó", 18.0, 16],
];

const tools = [
  ["ChatGPT", "Guiones, contenidos y asistentes", "seleccionada"],
  ["ElevenLabs", "Narraciones naturales", "seleccionada"],
  ["HeyGen", "Avatares y presentadores", "seleccionada"],
  ["Filmora", "Edición y postproducción", "seleccionada"],
  ["Respond.io", "Atención multicanal", "seleccionada"],
  ["Moodle", "Entorno académico", "integrada"],
  ["Workspace", "Colaboración institucional", "integrada"],
];

const stations = [
  { n: "01", title: "Contenido y guion", text: "El material del docente se adapta a un guion claro para la narración, manteniendo su contenido académico.", tag: "ChatGPT", action: "Ver comparación", media: "Documento original → guion optimizado", video: true, videoSrc: "/media/videos/creacion-guion.mp4", poster: "/media/creacion-guion-poster.jpg" },
  { n: "02", title: "Creación de voz", text: "Se prepara la narración y se revisan la pronunciación, el ritmo y la claridad de la voz.", tag: "ElevenLabs", action: "Escuchar muestra", media: "Espacio para audio real", audio: true, audioSrc: "/media/audio/voz-decano.m4a" },
  { n: "03", title: "Avatar docente", text: "Un presentador digital acompaña la introducción y el cierre de la videoclase.", tag: "HeyGen", action: "Ver fragmento", media: "Espacio para video de avatar", video: true, videoSrc: "/media/videos/avatar-heygen.mp4", poster: "/media/avatar-heygen-poster.jpg" },
  { n: "04", title: "Edición y revisión", text: "Voz, recursos médicos, identidad UPE y video se integran en una pieza final revisada antes de publicarse.", tag: "Filmora", action: "Ver montaje", media: "Espacio para captura de edición", video: true, videoSrc: "/media/videos/filmora-edicion.mp4", poster: "/media/filmora-edicion-poster.jpg" },
];

const milestones = [
  ["2017", "", "Implementación de Moodle", "Se incorporó Moodle como plataforma oficial de apoyo a la enseñanza, iniciando la digitalización de contenidos académicos. Objetivos: centralizar materiales de estudio, facilitar la interacción entre docentes y estudiantes, e incorporar recursos virtuales al proceso de enseñanza."],
  ["2019–2020", "", "La pandemia acelera la transformación", "La emergencia sanitaria aceleró la incorporación de tecnologías digitales. Se integraron a Moodle herramientas de videoconferencia: Zoom, BigBlueButton y Google Meet, permitiendo videoclases, videoconferencias, continuidad académica, comunicación permanente con los estudiantes y producción de material audiovisual educativo. En paralelo, se modernizó la infraestructura tecnológica: servidores institucionales y entorno Moodle."],
  ["2020", "", "Implementación de Google Workspace", "La Universidad incorporó Google Workspace para fortalecer la colaboración entre docentes, estudiantes y equipos administrativos: Gmail institucional, Drive, Meet, Calendar y documentos colaborativos."],
  ["2020", "", "Prueba de plataformas: MEDCEL y SanarFlix", "Se firmaron acuerdos con empresas productoras de contenidos pedagógicos digitales para que los estudiantes probaran MEDCEL, de AFYA, y SanarFlix, de SANAR, durante 2020. El objetivo fue evaluar su uso antes de una posible contratación."],
  ["2020", "", "Prueba de nuevas plataformas: Hard Work Medicine y Lecturio", "Se firmaron acuerdos con nuevas empresas productoras de contenidos pedagógicos digitales, enfocados en preparar a los estudiantes para exámenes de competencias como la Revalida del diploma en Brasil: la plataforma Hard Work Medicine de WEMED Educação Médica y la plataforma Lecturio de EdTech."],
  ["2021", "", "Contratación de SanarFlix", "Se contrató SanarFlix para todos los estudiantes desde primer año, incorporando una plataforma especializada de contenidos para Ciencias de la Salud y ampliando los recursos de aprendizaje disponibles para estudiantes y docentes."],
  ["2021", "", "Incorporación de H5P", "Se implementó H5P (HTML5 Package) para el desarrollo de recursos educativos interactivos: cuestionarios interactivos, videos enriquecidos, presentaciones dinámicas, actividades de autoevaluación y contenidos reutilizables. El principal desafío fue integrar estas herramientas eficazmente con Moodle."],
  ["2023", "", "Biblioteca Digital: eLibro", "Se incorporó la plataforma eLibro, ampliando el acceso de estudiantes y docentes a bibliografía digital especializada: aprendizaje autónomo, investigación y acceso remoto a información científica."],
  ["2024", "", "Estrategia de Marketing Digital", "La Facultad desarrolló una estrategia integral de comunicación digital orientada a posicionamiento institucional, captación de estudiantes, fortalecimiento de la presencia digital y producción de contenidos audiovisuales. Entre 2024 y 2025, la UPE adquirió herramientas para probar la edición y automatización de contenidos: Canva, ElevenLabs, ChatGPT y Make. Se gestionaron mediante el correo institucional y se convocó a estudiantes con conocimientos en tecnología."],
  ["2025", "", "Convenios: Paciente 360 y EstrategiaMed", "Se formalizaron dos convenios para estudiantes de sexto año: con la empresa ACTIVE para su producto PACIENTE360, en uso de prueba durante un semestre, para evaluar una posible contratación posterior; y con la empresa EstrategiaMed —programa nuevo— para su producto Revalida Exclusive."],
  ["2025", "", "Plataforma Active 360°: experiencia inmersiva", "Se incorporó el recorrido virtual inmersivo de la Facultad, permitiendo a futuros estudiantes conocer laboratorios, salas de simulación, biblioteca, aulas e infraestructura académica, fortaleciendo la experiencia del postulante antes de ingresar a la Universidad."],
  ["FEB", "2026", "Sistematización de la producción de contenido con IA", "Se sistematizó la producción de contenido educativo con inteligencia artificial: generación de guiones, voces sintéticas, avatares digitales y edición automatizada de videoclases. Más de 21 soluciones fueron evaluadas en investigación, creación de contenidos, producción audiovisual, automatización, comunicación y gestión del conocimiento."],
  ["MAY", "2026", "Comunicación Inteligente", "Se incorporó Respond.io como plataforma prioritaria para la atención y comunicación institucional: centralizar consultas, automatizar respuestas, mejorar la comunicación con postulantes y estudiantes, e integrar WhatsApp como canal institucional."],
  ["JUN", "2026", "Asistente Virtual y Experiencia Digital", "Se inició el desarrollo del asistente virtual institucional y del nuevo micrositio web de Medicina, trabajando sobre experiencia del usuario, automatización de consultas, accesibilidad y navegación moderna. Además, se contrató PACIENTE360 (ACTIVE) para todos los estudiantes desde cuarto año, con la finalidad de desarrollar competencias procedimentales y evaluaciones prácticas."],
  ["JUL", "2026", "Ecosistema Consolidado", "Se completó una nueva etapa de transformación: publicación del nuevo micrositio institucional, integración del Tour Virtual 360°, organización y actualización de la base de estudiantes, y consolidación del ecosistema digital de comunicación."],
  ["OCT", "2026", "Plataforma UPE Bienestar e IA local", "Se desarrolló, con acompañamiento de MCLoud, una versión de demostración de la plataforma de Bienestar, diseñada con la Dirección de Bienestar, y se puso en marcha Mbarete, una IA que funciona en computadoras propias y prepara preguntas para Moodle con revisión docente."],
  ["NOV", "2026", "Desafío UPE Innovación 2026", "La UPE y MCLoud organizaron el primer Desafío de innovación con IA: 45 equipos inscriptos y 117 participantes de más de 12 carreras presentaron sus ideas ante un jurado."],
  ["2027", "", "Proyección: Archivo Inteligente y asistente institucional", "Digitalizar y organizar documentos institucionales, preparar la base de consulta y entrenar o ajustar la IA local con ejemplos aprobados, según las necesidades. Implementar un asistente que permita consultar esa información, con fuentes y permisos de acceso."],
  ["2028", "", "Proyección: Inteligencia Artificial en la Enseñanza", "Desarrollo de asistentes académicos, simulaciones clínicas inteligentes y recursos personalizados para el aprendizaje."],
  ["2029–2030", "", "Proyección: Campus Inteligente", "Integración de plataformas académicas, comunicación, bienestar estudiantil e internacionalización en un único ecosistema digital."],
];
const CURRENT_MILESTONE_INDEX = 16;

const evolutionClips = [
  { title: "Primera prueba", videoSrc: "/media/videos/primera-prueba.mp4", poster: "/media/primera-prueba-poster.jpg" },
  { title: "Mejora de voz", videoSrc: "/media/videos/mejora-de-voz.mp4", poster: "/media/mejora-de-voz-poster.jpg" },
  { title: "Avatar institucional", videoSrc: "/media/videos/avatar-institucional.mp4", poster: "/media/avatar-institucional-poster.jpg" },
  { title: "Resultado actual", videoSrc: "/media/videos/resultado-actual.mp4", poster: "/media/resultado-actual-poster.jpg" },
];

const achievements = [
  "Consolidación de Moodle como entorno virtual de aprendizaje.",
  "Integración de herramientas de videoconferencia y colaboración.",
  "Modernización de la infraestructura tecnológica y de los servidores institucionales.",
  "Incorporación de recursos educativos interactivos mediante H5P.",
  "Acceso a bibliografía digital especializada a través de eLibro.",
  "Fortalecimiento de la estrategia de comunicación institucional.",
  "Desarrollo de experiencias inmersivas mediante el Tour Virtual 360°.",
  "Implementación de herramientas de inteligencia artificial aplicadas a la educación.",
  "Automatización de la comunicación institucional con Respond.io.",
  "Renovación del portal web y mejora de la experiencia digital del estudiante.",
  "Versión de demostración de UPE Bienestar, desarrollada por MCLoud con la Dirección de Bienestar.",
  "Desafío UPE Innovación 2026: 45 equipos inscriptos y 117 participantes.",
];

const projections = [
  ["01", "Laboratorio UPE-IA", "2027 · empieza en Medicina y se abre a todas las facultades, con servidor de IA propio y mentores."],
  ["02", "Archivo Inteligente y asistente institucional", "2027 · digitalización de documentos, preparación y ajuste de la IA local e implementación de un asistente para consultar información institucional con fuentes y permisos de acceso."],
  ["03", "IA en la enseñanza", "2028 · asistentes académicos, simulaciones clínicas inteligentes y recursos personalizados para el aprendizaje."],
  ["04", "Campus inteligente", "2029–2030 · integración de plataformas académicas, comunicación, bienestar estudiantil e internacionalización."],
];

export default function Home() {
  return (
    <main>
      <Efectos />
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Inicio">
          <span className="brand-mark"><img src="/media/upe-logo.png" alt="Universidad Privada del Este" /></span>
          <i className="brand-divider" />
          <span className="brand-mcloud"><img src="/media/mcloud-horizontal-color.svg" alt="MCLoud" /></span>
        </a>
        <nav aria-label="Capítulos">
          {chapters.filter(([, label]) => !NAV_HIDDEN.includes(label)).map(([n, label]) => <a key={n} href={`#capitulo-${n}`} >{label}</a>)}
        </nav>
        <span className="edition">Reunión de decanos · 2026</span>
      </header>

      <section id="inicio" className="hero">
        <img className="hero-image" src="/media/fachada.jpg" alt="Fachada de la Universidad Privada del Este" />
        <div className="hero-shade" />
        <div className="hero-grid" />
        <div className="hero-content reveal">
          <p className="eyebrow"><span /> Área de Innovación Tecnológica Educativa</p>
          <h1>Ecosistema de<br /><em>Inteligencia Artificial</em></h1>
          <p className="hero-lead">Un recorrido por la transformación digital de la Facultad de Ciencias Médicas de la Universidad Privada del Este: los avances desde 2017, los proyectos actuales y los próximos pasos.</p>
          <div className="hero-actions">
            <a className="button primary" href="#capitulo-01">Comenzar presentación <span>↓</span></a>
            <a className="button ghost" href="#capitulo-09">Ver colaboración con <span className="nocaps">MCLoud</span></a>
          </div>
          <div className="hero-alliance">
            <span>Una alianza</span>
            <img className="alliance-upe" src="/media/upe-logo.png" alt="Universidad Privada del Este" />
            <i />
            <img className="alliance-mcloud" src="/media/mcloud-horizontal-blanco.svg" alt="MCLoud" />
          </div>
        </div>
        <div className="hero-stat">
          <strong>+21</strong><span>herramientas de IA<br />investigadas y evaluadas</span>
        </div>
        <a className="scroll-cue" href="#capitulo-01"><span>DESPLAZAR</span><i /></a>
      </section>

      <section id="capitulo-01" className="chapter origin">
        <div className="chapter-label"><span>CAPÍTULO 01</span><i /></div>
        <div className="split-layout">
          <div className="section-copy">
            <p className="kicker">EL PUNTO DE PARTIDA</p>
            <h2>Un trabajo que comenzó en 2017.</h2>
            <blockquote>Cada etapa abrió el camino para el siguiente avance.</blockquote>
            <p>En 2017, Medicina UPE incorporó Moodle para organizar los materiales de clase y acompañar la enseñanza. Con los años, sumó herramientas para las clases a distancia, bibliotecas digitales y canales de comunicación con los estudiantes. Hoy, ese recorrido continúa con la incorporación de inteligencia artificial.</p>
            <div className="objectives">
              <span>01 <b>Materiales para las clases</b></span><span>02 <b>Comunicación</b></span>
              <span>03 <b>Información para estudiantes</b></span><span>04 <b>Gestión académica</b></span>
            </div>
          </div>
          <figure className="feature-image"><img src="/media/pasillo.jpg" alt="Pasillo de la Facultad" /><figcaption><span>01</span> El comienzo de un recorrido</figcaption></figure>
        </div>
      </section>

      <section id="capitulo-02" className="chapter timeline-section">
        <div className="chapter-label"><span>CAPÍTULO 02</span><i /></div>
        <div className="section-head"><div><p className="kicker">LÍNEA DE TIEMPO</p><h2>Avances que construyen<br />una <em>transformación.</em></h2></div><p>Esta cronología reúne los avances desde 2017. Al final se presentan las propuestas para los próximos años.</p></div>
        <div className="timeline">{milestones.map(([m,y,title,text],i)=><article key={`${m}-${title}`}><div className="date"><b>{m}</b><span>{y}</span></div><i className={i===CURRENT_MILESTONE_INDEX?'current':''}/><div><small>HITO {String(i+1).padStart(2,'0')}</small><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section id="capitulo-03" className="chapter research dark-section">
        <div className="chapter-label light"><span>CAPÍTULO 03</span><i /></div>
        <div className="section-head">
          <div><p className="kicker">INVESTIGACIÓN Y SELECCIÓN</p><h2>Herramientas para<br /><em>necesidades concretas.</em></h2></div>
          <p>Más de 21 soluciones fueron evaluadas en investigación, creación de contenidos, producción audiovisual, automatización, comunicación y gestión del conocimiento.</p>
        </div>
        <div className="research-board">
          <div className="radar">
            <div className="radar-ring r1" /><div className="radar-ring r2" /><div className="radar-ring r3" />
            <div className="radar-core"><strong>+21</strong><span>IA evaluadas</span></div>
            <span className="orbit o1">INVESTIGACIÓN</span><span className="orbit o2">VOZ</span><span className="orbit o3">AVATARES</span><span className="orbit o4">AUTOMATIZACIÓN</span><span className="orbit o5">DISEÑO</span>
          </div>
          <div className="selected-tools">
            <p className="mini-label">HERRAMIENTAS SELECCIONADAS</p>
            {tools.map(([name, desc, state], i) => <article key={name}><span className="tool-index">0{i+1}</span><div><h3>{name}</h3><p>{desc}</p></div><small>{state}</small></article>)}
          </div>
        </div>
      </section>

      <section id="capitulo-04" className="chapter production">
        <div className="chapter-label"><span>CAPÍTULO 04</span><i /></div>
        <div className="section-head">
          <div><p className="kicker">LABORATORIO AUDIOVISUAL</p><h2>Del conocimiento<br />a la <em>videoclase.</em></h2></div>
          <p>El material del docente pasa por etapas de preparación, producción y revisión hasta convertirse en una videoclase.</p>
        </div>
        <div className="process-line" aria-label="Proceso de videoclase">
          {['Contenido', 'Guion', 'Voz', 'Avatar', 'Edición', 'Videoclase'].map((x,i)=><span key={x} className={i===5?'active':''}><b>0{i+1}</b>{x}</span>)}
        </div>
        <div className="stations">
          {stations.map((s, i) => <article className={`station ${i===1?'featured':''}`} key={s.n}>
            <div className="station-top"><span>{s.n}</span><small>{s.tag}</small></div>
            <div className={`media-placeholder ${s.audio?'audio':''} ${s.videoSrc?'has-video':''}`}>
              {s.audioSrc ? <audio controls preload="metadata"><source src={s.audioSrc} type="audio/mp4" /></audio> : s.audio ? <><button aria-label="Reproducir audio">▶</button><div className="wave">{Array.from({length:28}).map((_,j)=><i key={j} style={{height:`${18+(j*17)%48}%`}} />)}</div></> : s.videoSrc ? <video controls preload="metadata" poster={s.poster}><source src={s.videoSrc} type="video/mp4" /></video> : <><span className="media-icon">{s.video?'▶':'Aa'}</span><small>{s.media}</small></>}
            </div>
            <h3>{s.title}</h3><p>{s.text}</p><button className="text-action">{s.action} <span>↗</span></button>
          </article>)}
        </div>
        <div className="final-output">
          <div className="video-frame"><video controls preload="metadata" poster="/media/primera-clase-terminada-poster.jpg"><source src="/media/videos/primera-clase-terminada.mp4" type="video/mp4" /></video></div>
          <div><p className="kicker">RESULTADO FINAL</p><h3>Una experiencia educativa con identidad institucional.</h3><p>El contenido continúa sujeto a revisión académica. La inteligencia artificial acelera la producción; la revisión docente permite evaluar y corregir el contenido.</p><div className="quality"><span>✓ Contenido validado</span><span>✓ Identidad UPE</span><span>✓ Revisión institucional</span></div></div>
        </div>
      </section>

      <section className="evolution-band">
        <div><p className="kicker">EVOLUCIÓN DOCUMENTADA</p><h2>De las primeras pruebas<br />al modelo actual.</h2></div>
        <div className="clip-strip">
          {evolutionClips.map((c,i)=><article key={c.title}><div><video controls preload="metadata" poster={c.poster}><source src={c.videoSrc} type="video/mp4" /></video></div><p><b>0{i+1}</b>{c.title}</p></article>)}
        </div>
      </section>

      <section id="capitulo-05" className="chapter ecosystem dark-section">
        <div className="chapter-label light"><span>CAPÍTULO 05</span><i /></div>
        <div className="section-head"><div><p className="kicker">ECOSISTEMA CONECTADO</p><h2>Enseñanza, comunicación<br /><em>y atención al estudiante.</em></h2></div><p>Estas herramientas ayudan a organizar las clases, responder consultas y facilitar el acceso a la información de la Facultad.</p></div>
        <div className="ecosystem-grid">
          <article className="eco-card assistant"><span className="card-number">01</span><div className="phone"><div className="phone-head">Asistente Medicina <i /></div><div className="bubble user">¿Cuándo comienza la primera convocatoria?</div><div className="bubble bot">La primera convocatoria del Curso de Admisión comienza el <b>1 de octubre.</b></div><small>Información institucional validada</small></div><div><p className="kicker">ASISTENTE VIRTUAL</p><h3>Atención clara, continua y basada en datos oficiales.</h3><p>Responde a partir de información institucional y atiende consultas mediante los canales conectados con Respond.io.</p><div className="qr-block"><img src="/media/whatsapp-qr.png" alt="Código QR para hablar con el asistente virtual por WhatsApp" /><span>Escaneá para hablar por WhatsApp</span></div></div></article>
          <article className="eco-card communication"><span className="card-number">02</span><p className="kicker">COMUNICACIÓN ESTUDIANTIL</p><h3>De primero a sexto año, cada mensaje llega a su lugar.</h3><div className="years">{['1.º','2.º','3.º','4.º','5.º','6.º'].map(y=><span key={y}>{y}</span>)}</div><div className="channel-row"><b>Moodle + Workspace</b><span>Clases, materiales y actividades</span></div><div className="channel-row accent"><b>Respond.io</b><span>Comunicación prioritaria y atención</span></div></article>
          <article className="eco-card microsite"><span className="card-number">03</span><div><p className="kicker">EXPERIENCIA DIGITAL</p><h3>Un nuevo micrositio para Medicina.</h3><p>Un sitio renovado para conocer la Facultad, recorrer sus instalaciones en 360° y consultar información desde el celular o la computadora.</p><a href="https://upe.edu.py/medicina_v2.php" target="_blank" rel="noreferrer">Visitar micrositio ↗</a></div><div className="screen"><img src="/media/fachada.jpg" alt="Vista del micrositio" /><span>MEDICINA UPE</span></div></article>
        </div>
        <figure className="ecosystem-map">
          <p className="kicker">MAPA COMPLETO</p>
          <img src="/media/ecosistema-estrategico.png" alt="Mapa del ecosistema estratégico de la Facultad de Ciencias Médicas UPE: gobernanza institucional, transformación digital, comunicación, experiencia del estudiante, internacionalización, responsabilidad social y gestión basada en datos" />
          <figcaption>Ecosistema estratégico de la Facultad de Ciencias Médicas UPE: las siete áreas que conectan personas, procesos, innovación y calidad.</figcaption>
        </figure>
      </section>

      <section id="capitulo-06" className="chapter surveys">
        <div className="chapter-label"><span>CAPÍTULO 06</span><i /></div>
        <div className="section-head survey-heading">
          <div><p className="kicker">ESCUCHA Y EVALUACIÓN</p><h2>Decisiones respaldadas<br />por la <em>voz estudiantil.</em></h2></div>
          <p>Dos encuestas realizadas mediante Google Forms permiten identificar hábitos de comunicación y oportunidades para fortalecer el aprendizaje clínico digital.</p>
        </div>

        <article className="survey-block">
          <header className="survey-title">
            <div><span className="survey-number">01</span><p className="kicker">ENCUESTA INSTITUCIONAL</p><h3>Comunicación y contenidos de Medicina UPE</h3></div>
            <div className="sample"><strong>128</strong><span>respuestas<br />analizadas</span></div>
          </header>
          <div className="survey-layout">
            <div className="chart-panel">
              <div className="chart-head"><div><span className="chart-tag">CANALES</span><h4>¿Por dónde se informan?</h4></div><small>128 respuestas</small></div>
              <div className="bar-chart">
                {institutionalChannels.map(([label, value, count]) => <div className="bar-row" key={String(label)}>
                  <span>{label}</span><div><i style={{width:`${Number(value) / 42.2 * 100}%`}} /></div><b>{value}%</b><small>{count} estudiantes</small>
                </div>)}
              </div>
              <p className="chart-takeaway"><b>WhatsApp es el canal principal:</b> concentra 54 respuestas y supera ampliamente a cada alternativa individual.</p>
            </div>
            <div className="insight-grid">
              <div className="metric-card cyan"><strong>75.8%</strong><span>prefiere contenidos sobre prácticas y hospitales</span><small>97 de 128 respuestas</small></div>
              <div className="metric-card"><strong>74.2%</strong><span>sigue Medicina UPE o ambas cuentas por igual</span><small>95 de 128 respuestas</small></div>
              <div className="metric-card"><strong>82.8%</strong><span>calificó con 8, 9 o 10 la utilidad de una cuenta propia en español</span><small>106 de 128 respuestas</small></div>
              <div className="summary-card"><p>Qué muestran las respuestas</p><h4>WhatsApp es el canal más mencionado. La cuenta de Instagram de Medicina también es una fuente de información importante para los estudiantes encuestados.</h4><span>La demanda de contenidos es principalmente práctica: actividades hospitalarias, experiencias clínicas, internado, guías y vida académica.</span></div>
            </div>
          </div>

          <div className="accounts-panel">
            <div className="chart-head"><div><span className="chart-tag">CUENTAS DE INSTAGRAM</span><h4>¿Qué cuenta siguen con mayor frecuencia?</h4></div><small>128 respuestas</small></div>
            <div className="account-chart">
              {followedAccounts.map(([label, handle, value, count], index) => <div className={`account-row rank-${index + 1}`} key={String(label)}>
                <span className="account-rank">{String(index + 1).padStart(2, "0")}</span>
                <div className="account-name"><b>{label}</b>{handle && <small>{handle}</small>}</div>
                <div className="account-track"><i style={{width:`${Number(value) / 39.1 * 100}%`}} /></div>
                <strong>{value}%</strong>
                <span className="account-count">{count}<small>estudiantes</small></span>
              </div>)}
            </div>
            <div className="account-highlight"><strong>74.2%</strong><span><b>95 de 128 estudiantes</b> siguen Instagram Medicina — <b>@Medicina_UPE_Oficial</b> — o ambas cuentas por igual.</span></div>
          </div>
        </article>

        <article className="survey-block patient-survey">
          <header className="survey-title">
            <div><span className="survey-number">02</span><p className="kicker">ENCUESTA PACIENTE 360</p><h3>Conocimiento, uso e integración académica</h3></div>
            <div className="sample"><strong>89</strong><span>respuestas<br />analizadas</span></div>
          </header>
          <div className="survey-layout reverse">
            <div className="insight-grid">
              <div className="metric-card cyan"><strong>92.0%</strong><span>la utilizaría si se integra a la evaluación</span><small>80 de 87 respuestas válidas</small></div>
              <div className="metric-card"><strong>71.4%</strong><span>la considera útil o muy útil</span><small>55 de 77 respuestas válidas</small></div>
              <div className="metric-card"><strong>68.2%</strong><span>quiere mayor uso como complemento o actividad obligatoria</span><small>60 de 88 respuestas válidas</small></div>
              <div className="summary-card"><p>Qué muestran las respuestas</p><h4>Existe una disposición alta a utilizar la plataforma, pero su integración actual en las materias todavía es limitada.</h4><span>Las prioridades de simulación son Clínica Médica y Urgencias. En las respuestas abiertas, los estudiantes pidieron orientación inicial, más casos en español, navegación intuitiva e interacción por voz.</span></div>
            </div>
            <div className="chart-panel">
              <div className="chart-head"><h4>Experiencia actual con la plataforma</h4><small>Porcentaje sobre 89 respuestas</small></div>
              <div className="bar-chart patient-bars">
                {patientUse.map(([label, value, count]) => <div className="bar-row" key={String(label)}>
                  <span>{label}</span><div><i style={{width:`${value}%`}} /></div><b>{value}%</b><small>{count}</small>
                </div>)}
              </div>
              <div className="integration-note"><strong>50.6%</strong><span>señala que Paciente 360 no se utiliza en sus materias</span><small>44 de 87 respuestas válidas</small></div>
            </div>
          </div>
        </article>

        <div className="method-note"><b>Nota metodológica</b><span>Resultados descriptivos de formularios aplicados en julio de 2026. Cada porcentaje indica cuántas respuestas se tomaron en cuenta; las preguntas opcionales o no respondidas se calculan solamente sobre respuestas válidas. Los comentarios abiertos fueron agrupados por temas, sin convertirlos en porcentajes.</span></div>
      </section>

      <section id="capitulo-07" className="chapter results-section">
        <div className="chapter-label"><span>CAPÍTULO 07</span><i /></div>
        <div className="results">
          <p className="kicker">RESULTADOS ALCANZADOS</p>
          <div><article><strong>+21</strong><span>herramientas<br/>investigadas</span></article><article><strong>01</strong><span>asistente virtual<br/>desarrollado</span></article><article><strong>6</strong><span>niveles de la carrera<br/>con comunicación organizada</span></article><article><strong>360°</strong><span>recorrido virtual<br/>incorporado</span></article></div>
          <div className="results-list">{achievements.map(a=><span key={a}>{a}</span>)}</div>
          <small>Solo se presentan resultados confirmados. No se incluyen métricas aún no medidas.</small>
        </div>
      </section>

      <section id="capitulo-08" className="chapter challenge">
        <div className="chapter-label"><span>CAPÍTULO 08</span><i /></div>
        <div className="section-head">
          <div><p className="kicker">DESAFÍO UPE INNOVACIÓN 2026</p><h2>Distintas carreras<br />trabajando <em>con IA.</em></h2></div>
          <p>El 1 de noviembre de 2026, la UPE y MCLoud reunieron a estudiantes de distintas carreras para resolver necesidades reales con inteligencia artificial.</p>
        </div>
        <div className="challenge-stats" data-reveal>{challengeStats.map(([n, prefix, text, label]) => <article key={label}><strong {...(n !== null ? { "data-count": n, "data-prefix": prefix } : {})}>{text}</strong><span>{label}</span></article>)}</div>
        <div className="challenge-gallery">
          <figure className="big" data-reveal><img src="/media/desafio-grupal.jpg" alt="Foto grupal de participantes, jurado y organizadores del Desafío UPE Innovación 2026" /><figcaption>Participantes, jurado y organizadores al cierre del Desafío.</figcaption></figure>
          <figure data-reveal style={{ "--i": 1 } as React.CSSProperties}><img src="/media/desafio-premiacion.jpg" alt="Entrega del premio de Gs. 10.000.000 al equipo ganador" /><figcaption>Premio al equipo ganador: Gs. 10.000.000.</figcaption></figure>
          <figure data-reveal style={{ "--i": 2 } as React.CSSProperties}><img src="/media/desafio-exposicion.jpg" alt="Un equipo presenta su proyecto ante el jurado" /><figcaption>Cada equipo presentó su idea ante el jurado.</figcaption></figure>
          <figure data-reveal style={{ "--i": 3 } as React.CSSProperties}><img src="/media/desafio-prototipo.jpg" alt="Prototipo de mano robótica presentado en el Desafío" /><figcaption>Ideas que ya llegan a prototipo.</figcaption></figure>
        </div>
      </section>

      <section id="capitulo-09" className="chapter mcloud-section dark-section">
        <div className="glow g1" aria-hidden="true" /><div className="glow g2" aria-hidden="true" />
        <div className="chapter-label light"><span>CAPÍTULO 09</span><i /></div>
        <div className="section-head">
          <div><p className="kicker">COLABORACIÓN INSTITUCIONAL</p><h2>UPE + MCLoud.<br /><em>Una alianza para innovar.</em></h2></div>
          <p>La UPE reúne las necesidades de sus facultades y el trabajo de estudiantes y docentes. En proyectos específicos, cuenta con el acompañamiento de MCLoud, empresa paraguaya de tecnología, para el desarrollo y las pruebas de soluciones digitales.</p>
        </div>
        <div className="alliance-band" data-reveal>
          <img className="alliance-upe" src="/media/upe-logo.png" alt="Universidad Privada del Este" />
          <span>+</span>
          <img className="alliance-mcloud" src="/media/mcloud-horizontal-blanco.svg" alt="MCLoud" />
          <p>Conectamos ideas.<br />Entregamos soluciones.</p>
        </div>
        <div className="flow" data-draw>
          <p className="mini-label">CÓMO TRABAJAMOS JUNTOS</p>
          <div className="flow-steps">{allianceFlow.map(([ico, title, text], i) => <article key={title} style={{ "--i": i } as React.CSSProperties}><span className="flow-node"><Icono n={ico} /></span><b>{title}</b><small>{text}</small></article>)}</div>
        </div>
        <p className="mini-label">AVANCES Y PROYECTOS EN CURSO</p>
        <div className="project-grid">
          {mcloudProjects.map(([n, ico, title, state, text], i) => <article key={n} data-reveal style={{ "--i": i } as React.CSSProperties}><div className="project-top"><span className="project-ico"><Icono n={ico} /></span><small>{state}</small></div><h3>{title}</h3><p>{text}</p><span className="project-n">{n}</span></article>)}
        </div>
      </section>

      <section id="capitulo-10" className="chapter lab-section">
        <div className="chapter-label"><span>CAPÍTULO 10</span><i /></div>
        <div className="lab-hero" data-reveal>
          <div className="lab-grid" aria-hidden="true" />
          <div className="lab-orbit" aria-hidden="true"><i /><i /><i /><span><Icono n="flask-conical" /></span></div>
          <div className="lab-hero-copy">
            <p className="kicker">EL PROYECTO · LABORATORIO UPE-IA</p>
            <h2>Un laboratorio de IA<br />para crear <em>prototipos.</em></h2>
            <p>Se propone crear un espacio donde estudiantes y docentes desarrollen primeras versiones de soluciones y las prueben con acompañamiento académico y técnico. El Laboratorio UPE-IA formaría parte del ecosistema de innovación. Comenzaría en Medicina, con la propuesta de incorporar luego a otras facultades.</p>
            <div className="lab-tags"><span>Propuesta 2027</span><span>Con servidor de IA propio</span><span>Acompañado por <b className="nocaps">MCLoud</b></span></div>
          </div>
        </div>

        <div className="pipeline" data-draw>
          <div className="pipeline-head"><p className="kicker">DE LA IDEA AL IMPACTO</p><h3>Cada prototipo sigue el mismo camino.</h3></div>
            <div className="pipeline-steps">{labPipeline.map(([ico, title, text], i) => <article key={title} style={{ "--i": i } as React.CSSProperties}><span className="pipe-node"><Icono n={ico} /></span><small>0{i + 1}</small><h4>{title}</h4><p>{text}</p></article>)}</div>
        </div>

        <div className="lab-block">
          <div><p className="kicker">QUÉ TENDRÍA</p><h3>Recursos previstos para desarrollar y probar proyectos.</h3></div>
          <div className="lab-features">{labFeatures.map(([ico, title, text], i) => <article key={title} data-reveal style={{ "--i": i } as React.CSSProperties}><span className="feat-ico"><Icono n={ico} /></span><h4>{title}</h4><p>{text}</p></article>)}</div>
        </div>

        <div className="lab-block">
          <div><p className="kicker">LÍNEAS DE TRABAJO</p><h3>Primeros temas, elegidos por necesidad real.</h3></div>
          <div className="lab-lines" data-reveal>{labLines.map(([ico, label]) => <span key={label}><Icono n={ico} />{label}</span>)}</div>
        </div>

        <div className="lab-block">
          <div><p className="kicker">UN EQUIPO QUE CONECTA TODA LA UPE</p><h3>Así se organizaría.</h3></div>
          <div className="pieces">{ecosystemPieces.map(([ico, title, text], i) => <article key={title} data-reveal style={{ "--i": i } as React.CSSProperties}><Icono n={ico} /><div><b>{title}</b><span>{text}</span></div></article>)}</div>
        </div>

        <div className="gains">{labGains.map(([ico, title, items], i) => <article key={title} data-reveal style={{ "--i": i } as React.CSSProperties}><span className="feat-ico"><Icono n={ico} /></span><h4>{title}</h4><ul>{items.map((x) => <li key={x}><Icono n="check" />{x}</li>)}</ul></article>)}</div>
      </section>

      <section id="capitulo-11" className="chapter mbarete-section dark-section">
        <div className="glow g1" aria-hidden="true" /><div className="glow g3" aria-hidden="true" />
        <div className="chapter-label light"><span>CAPÍTULO 11</span><i /></div>
        <div className="mbarete-hero">
          <div className="mbarete-copy" data-reveal>
            <p className="kicker">La tecnología · IA local de <span className="nocaps">MCLoud</span></p>
            <h2>Mbarete.<br /><em>Inteligencia artificial en equipos propios.</em></h2>
            <p>Mbarete es la plataforma de inteligencia artificial de MCLoud. Actualmente funciona en equipos de MCLoud. Busca en los documentos cargados y responde citando las fuentes. Se prevé su instalación en el laboratorio y su conexión con sistemas de la UPE.</p>
            <div className="data-rules">{dataRules.map(([ico, text]) => <span key={text}><Icono n={ico} />{text}</span>)}</div>
          </div>
          <MbareteDemo />
        </div>

        <div className="stack" data-draw>
          <div className="stack-head"><p className="kicker">CÓMO FUNCIONA</p><h3>Consulta documentos y responde con fuentes.</h3><p>Mbarete funciona en equipos propios. Primero se cargan los documentos que podrá consultar; si están en papel, se digitalizan. Cuando una persona hace una pregunta, busca en esos documentos y prepara una respuesta con las fuentes para poder revisarla. También se puede ajustar con ejemplos aprobados para tareas específicas. Las personas revisan la información y toman las decisiones.</p></div>
        </div>

        <p className="mini-label">QUÉ HACE HOY</p>
        <div className="caps">{mbareteCaps.map(([ico, title, text, state], i) => <article key={title} data-reveal style={{ "--i": i % 4 } as React.CSSProperties}><div className="cap-top"><span className="project-ico"><Icono n={ico} /></span><small className={state === "Funcionando" ? "ok" : ""}>{state}</small></div><h4>{title}</h4><p>{text}</p></article>)}</div>


      </section>

      <section id="capitulo-12" className="chapter roadmap-section">
        <div className="chapter-label"><span>CAPÍTULO 12</span><i /></div>
        <div className="section-head">
          <div><p className="kicker">HOJA DE RUTA</p><h2>Lo que tenemos<br />y <em>lo que viene.</em></h2></div>
          <p>Una propuesta de trabajo por etapas. Las fechas dependen de los acuerdos con la UPE y de lo que muestre cada piloto.</p>
        </div>
        <div className="roadmap" data-draw>
          <div className="roadmap-line"><i /></div>
          {roadmap.map(([phase, when, kind, items], i) => <article key={phase + when} className={kind} style={{ "--i": i } as React.CSSProperties}><span className="road-dot" /><small>{phase}</small><h4>{when}</h4><ul>{items.map((x) => <li key={x}>{x}</li>)}</ul></article>)}
        </div>
      </section>

      <section id="capitulo-13" className="future">
        <img src="/media/laboratorio.jpg" alt="Laboratorio de Medicina UPE" />
        <div className="future-overlay" />
        <div className="future-content"><p className="kicker">PRÓXIMA ETAPA</p><h2>El ecosistema<br />continúa creciendo.</h2><p>Los avances logrados desde 2017 son la base para seguir mejorando la enseñanza, la atención al estudiante y la gestión académica. Las próximas etapas se definirán según las necesidades institucionales, los acuerdos y los resultados de las pruebas.</p><div className="future-list">{projections.map(([n,title,text])=><span key={n}>{n} <b>{title}</b><br/>{text}</span>)}</div></div>
      </section>

      <footer>
        <div className="footer-logos">
          <img className="alliance-upe" src="/media/upe-logo.png" alt="Universidad Privada del Este" />
          <i />
          <img className="alliance-mcloud" src="/media/mcloud-horizontal-blanco.svg" alt="MCLoud" />
        </div>
        <blockquote>“La inteligencia artificial no reemplaza la labor académica, docente ni institucional. <em>La fortalece.</em>”</blockquote>
        <div><span>Facultad de Ciencias Médicas</span><span>Universidad Privada del Este</span><span>Desarrollo y acompañamiento tecnológico: <b className="nocaps">MCLoud</b></span><span>Presidente Franco · Paraguay</span></div>
      </footer>
    </main>
  );
}
