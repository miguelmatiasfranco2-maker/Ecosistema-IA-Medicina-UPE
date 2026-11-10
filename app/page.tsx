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
  [45, "", "45", "equipos inscriptos"], [117, "", "117", "participantes"], [12, "+", "+12", "carreras"], [null, "", "6 de 10", "participantes de Medicina"],
];

const mcloudProjects = [
  ["01", "trophy", "Desafío UPE Innovación", "Realizado", "1 de noviembre de 2026. Estudiantes de toda la universidad presentaron ideas con IA ante un jurado. El equipo ganador recibió Gs. 10.000.000."],
  ["02", "brain", "Mbarete, IA local de MCLoud", "Funcionando", "Una IA que corre en computadoras propias, busca en los documentos y responde citando la fuente. Ya prepara preguntas para Moodle con revisión docente."],
  ["03", "users", "Plataforma UPE Bienestar", "Demo funcionando", "Diseñada con la Dirección de Bienestar: ficha de seguimiento de cada atención, cuestionarios y escalas, y ficha del estudiante. Hoy funciona con datos de prueba."],
  ["04", "clapperboard", "Videoclases con avatar docente", "En pruebas", "Voz y rostro del docente, con su autorización por escrito, para producir videoclases más rápido. Cada video avisa que fue generado con IA."],
  ["05", "scan-text", "Archivo Inteligente", "Piloto en preparación", "Para la Secretaría Académica de Medicina: digitalizar legajos y encontrarlos en segundos, con el documento original y permisos por persona. Financiado por MCLoud."],
];

const allianceFlow = [
  ["users", "Talento", "Estudiantes y docentes de todas las carreras."],
  ["target", "Necesidades reales", "Lo que cada facultad necesita mejorar."],
  ["flask-conical", "Prototipos", "Se construyen y prueban en el Laboratorio UPE-IA."],
  ["circle-check", "Validación", "Solo sigue lo que demuestra que sirve."],
  ["rocket", "Soluciones", "Para la UPE y, con acuerdo previo, como productos de MCLoud."],
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
  ["server", "Servidor de IA propio", "Mbarete corre dentro del laboratorio: los datos de la universidad no salen a internet."],
  ["messages-square", "Mentores", "Acompañamiento técnico de MCLoud y académico de cada facultad."],
  ["library", "Banco de ideas y tesis", "Las tesis y las ideas del Desafío quedan registradas para volverse prototipos."],
  ["flask-conical", "Zona de pruebas", "Datos de prueba y entornos separados para probar sin riesgo."],
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
  ["graduation-cap", "Red de estudiantes", "Alumnos de todas las carreras en casos reales."],
  ["shield-check", "Reglas claras", "Cuidar los datos y dejar claro de quién es cada idea."],
];

const labGains = [
  ["graduation-cap", "Estudiantes", ["Experiencia en proyectos reales", "Mentoría y formación", "Becas o medias becas", "Posibilidad de sumarse a MCLoud"]],
  ["building-2", "Docentes y facultades", ["Soluciones a sus necesidades", "Tesis que llegan a la práctica", "Saber qué funcionó y qué no"]],
  ["landmark", "UPE", ["Innovación ordenada y medible", "Propiedad intelectual protegida", "Talento propio, visible y reconocido"]],
] as const;

const mbareteCaps = [
  ["file-search", "Responde con fuentes", "Busca en los documentos cargados y cita de dónde sale cada dato.", "Funcionando"],
  ["book-open", "Preguntas para Moodle", "Prepara preguntas a partir del material de clase, en formatos que Moodle importa. El docente revisa y aprueba.", "Funcionando"],
  ["scan-text", "Lee documentos escaneados", "Extrae el texto de PDF y papeles escaneados: la base del Archivo Inteligente.", "Funcionando"],
  ["workflow", "Automatizaciones", "Tareas que se repiten solas, como el resumen semanal de pendientes.", "Funcionando"],
  ["brain", "Memoria", "Recuerda lo conversado y mejora con el uso, sin enviar datos afuera.", "Funcionando"],
  ["plug", "API propia", "Los sistemas de la UPE, como Moodle, pueden usarla en lugar de servicios externos pagos.", "Lista para conectar"],
  ["code", "Agente que programa", "Escribe y prueba código en una copia aislada; nada se aplica sin aprobación.", "En pruebas"],
  ["clapperboard", "Voz y avatar docente", "Voz clonada y rostro que habla para videoclases, con autorización del docente.", "En pruebas"],
];

const mbareteStack = [
  ["layers-3", "Dónde se usa", ["Chat web", "Moodle", "Asistente institucional", "Bienestar y Archivo Inteligente"]],
  ["brain", "Mbarete · el trabajo de MCLoud", ["Búsqueda en documentos (RAG)", "Agentes y herramientas", "Memoria", "Ajuste con ejemplos (fine-tuning)"]],
  ["cpu", "Modelos abiertos", ["Modelos de lenguaje abiertos de primer nivel", "Se cambian cuando aparece uno mejor"]],
  ["hard-drive", "Infraestructura propia", ["Hoy: equipos de MCLoud y GPU dedicada", "Próximo: servidores de IA del laboratorio"]],
] as const;

const aiUses = [
  ["server", "IA local", "Funciona dentro de la UPE", "Corre en computadoras propias. Los datos de alumnos y pacientes no salen a internet."],
  ["file-search", "RAG", "Busca antes de responder", "Como un examen a libro abierto: busca en los documentos oficiales y responde con eso, citando la fuente."],
  ["sliders-horizontal", "Fine-tuning", "Aprende con ejemplos", "Se ajusta con ejemplos aprobados de cada carrera para hablar como alguien del área, por ejemplo un tutor de Medicina."],
];

const dataRules = [
  ["lock", "Los datos no salen a internet"], ["shield-check", "No se entrena con datos de la UPE sin autorización escrita"],
  ["users", "Permisos por persona y registro de cada acceso"], ["circle-check", "Las personas deciden: la IA propone"],
];

const roadmap = [
  ["Ya hecho", "2026", "done", ["Desafío UPE Innovación 2026", "Demo de la plataforma UPE Bienestar", "Mbarete funcionando con fuentes y preguntas para Moodle", "Primeras pruebas de videoclases con avatar"]],
  ["Próximo paso", "Cierre de 2026", "next", ["Convenio UPE–MCLoud y reglas de propiedad intelectual", "Seguimiento de equipos y talentos del Desafío", "Servidores de IA propios para el laboratorio", "Archivo Inteligente: relevamiento y muestra"]],
  ["Primer semestre", "2027", "", ["Laboratorio UPE-IA funcionando en Medicina", "Primeros prototipos con equipos mixtos", "UPE Bienestar con usuarios reales", "Mbarete conectado a Moodle, con revisión docente"]],
  ["Segundo semestre", "2027", "", ["Laboratorio abierto a todas las facultades", "Desafío UPE Innovación 2027", "Analítica académica para decidir mejor"]],
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
  { n: "01", title: "Contenido y guion", text: "El contenido docente se adapta a un lenguaje claro, narrable y pedagógico sin alterar su rigor académico.", tag: "ChatGPT", action: "Ver comparación", media: "Documento original → guion optimizado", video: true, videoSrc: "/media/videos/creacion-guion.mp4", poster: "/media/creacion-guion-poster.jpg" },
  { n: "02", title: "Creación de voz", text: "La narración se genera con parámetros definidos para obtener una voz natural, clara y consistente.", tag: "ElevenLabs", action: "Escuchar muestra", media: "Espacio para audio real", audio: true, audioSrc: "/media/audio/voz-decano.m4a" },
  { n: "03", title: "Avatar docente", text: "Un presentador digital acompaña la introducción y el cierre, preservando una presencia institucional sobria.", tag: "HeyGen", action: "Ver fragmento", media: "Espacio para video de avatar", video: true, videoSrc: "/media/videos/avatar-heygen.mp4", poster: "/media/avatar-heygen-poster.jpg" },
  { n: "04", title: "Edición y revisión", text: "Voz, recursos médicos, identidad UPE y video se integran en una pieza final revisada antes de publicarse.", tag: "Filmora", action: "Ver montaje", media: "Espacio para captura de edición", video: true, videoSrc: "/media/videos/filmora-edicion.mp4", poster: "/media/filmora-edicion-poster.jpg" },
];

const milestones = [
  ["2017", "", "Implementación de Moodle", "Se incorpora Moodle como plataforma oficial de apoyo a la enseñanza, iniciando la digitalización de contenidos académicos. Objetivos: centralizar materiales de estudio, facilitar la interacción entre docentes y estudiantes, e incorporar recursos virtuales al proceso de enseñanza."],
  ["2019–2020", "", "La pandemia acelera la transformación", "La emergencia sanitaria aceleró la incorporación de tecnologías digitales. Se integran al ecosistema Moodle herramientas de videoconferencia: Zoom, BigBlueButton y Google Meet, permitiendo videoclases, videoconferencias, continuidad académica, comunicación permanente con los estudiantes y producción de material audiovisual educativo. En paralelo, se moderniza la infraestructura tecnológica: servidores institucionales y entorno Moodle."],
  ["2020", "", "Implementación de Google Workspace", "La Universidad incorpora Google Workspace para fortalecer la colaboración entre docentes, estudiantes y equipos administrativos: Gmail institucional, Drive, Meet, Calendar y documentos colaborativos."],
  ["2020", "", "Prueba de plataformas: MEDCEL y SanarFlix", "Se firman acuerdos con empresas productoras de contenidos pedagógicos digitales para dar acceso a los alumnos, con fines de contratación formal posterior: se utiliza durante todo 2020 la plataforma MEDCEL de AFYA y la plataforma SanarFlix de SANAR."],
  ["2020", "", "Prueba de nuevas plataformas: Hard Work Medicine y Lecturio", "Se firman acuerdos con nuevas empresas productoras de contenidos pedagógicos digitales, enfocados en preparar a los alumnos para exámenes de competencias como la Revalida del diploma en Brasil: la plataforma Hard Work Medicine de WEMED Educação Médica y la plataforma Lecturio de EdTech."],
  ["2021", "", "Contratación de SanarFlix", "Se contrata SanarFlix para todos los alumnos desde primer año, incorporando una plataforma especializada de contenidos para Ciencias de la Salud y ampliando los recursos de aprendizaje disponibles para estudiantes y docentes."],
  ["2021", "", "Incorporación de H5P", "Se implementa H5P (HTML5 Package) para el desarrollo de recursos educativos interactivos: cuestionarios interactivos, videos enriquecidos, presentaciones dinámicas, actividades de autoevaluación y contenidos reutilizables. El principal desafío fue integrar estas herramientas eficazmente con Moodle."],
  ["2023", "", "Biblioteca Digital: eLibro", "Se incorpora la plataforma eLibro, ampliando el acceso de estudiantes y docentes a bibliografía digital especializada: aprendizaje autónomo, investigación y acceso remoto a información científica."],
  ["2024", "", "Estrategia de Marketing Digital", "La Facultad desarrolla una estrategia integral de comunicación digital orientada a posicionamiento institucional, captación de estudiantes, fortalecimiento de la presencia digital y producción de contenidos audiovisuales. En la etapa 2024-2025 la UPE adquiere un paquete de herramientas de edición y automatización como laboratorio de prueba, gestionado a través del correo institucional junto con la captación de estudiantes con conocimientos en TIC: Canva, IlebenLab, OpenAI–ChatGPT y Make."],
  ["2025", "", "Convenios: Paciente 360 y EstrategiaMed", "Se formalizan dos convenios para alumnos de sexto año: con la empresa ACTIVE para su producto PACIENTE360, en uso de prueba durante un semestre, con fines de contratación formal posterior; y con la empresa EstrategiaMed —programa nuevo— para su producto Revalida Exclusive."],
  ["2025", "", "Plataforma Active 360°: experiencia inmersiva", "Se incorpora el recorrido virtual inmersivo de la Facultad, permitiendo a futuros estudiantes conocer laboratorios, salas de simulación, biblioteca, aulas e infraestructura académica, fortaleciendo la experiencia del postulante antes de ingresar a la Universidad."],
  ["FEB", "2026", "Sistematización de la producción de contenido con IA", "Se sistematiza la producción de contenido educativo con inteligencia artificial: generación de guiones, voces sintéticas, avatares digitales y edición automatizada de videoclases. Más de 21 soluciones fueron evaluadas en investigación, creación de contenidos, producción audiovisual, automatización, comunicación y gestión del conocimiento."],
  ["MAY", "2026", "Comunicación Inteligente", "Se incorpora Respond.io como plataforma prioritaria para la atención y comunicación institucional: centralizar consultas, automatizar respuestas, mejorar la comunicación con postulantes y estudiantes, e integrar WhatsApp como canal institucional."],
  ["JUN", "2026", "Asistente Virtual y Experiencia Digital", "Se inicia el desarrollo del asistente virtual institucional y del nuevo micrositio web de Medicina, trabajando sobre experiencia del usuario, automatización de consultas, accesibilidad y navegación moderna. Además, se contrata PACIENTE360 (ACTIVE) para todos los alumnos desde cuarto año, con la finalidad de desarrollar competencias procedimentales y evaluaciones prácticas."],
  ["JUL", "2026", "Ecosistema Consolidado", "Se completa una nueva etapa de transformación: publicación del nuevo micrositio institucional, integración del Tour Virtual 360°, organización y actualización de la base de estudiantes, y consolidación del ecosistema digital de comunicación."],
  ["OCT", "2026", "Plataforma UPE Bienestar e IA local", "Junto a MCLoud se desarrolla la demo de la plataforma de Bienestar, diseñada con la Dirección de Bienestar, y se pone en marcha Mbarete, una IA que corre en computadoras propias y prepara preguntas para Moodle con revisión docente."],
  ["NOV", "2026", "Desafío UPE Innovación 2026", "La UPE y MCLoud organizan el primer Desafío de innovación con IA: 45 equipos inscriptos y 117 participantes de más de 12 carreras presentan sus ideas ante un jurado."],
  ["2027", "", "Proyección: Analítica Académica", "Uso de indicadores para apoyar la toma de decisiones y el seguimiento del rendimiento estudiantil."],
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
  "Demo de la plataforma UPE Bienestar, desarrollada por MCLoud con la Dirección de Bienestar.",
  "Desafío UPE Innovación 2026: 45 equipos inscriptos y 117 participantes.",
];

const projections = [
  ["01", "Laboratorio UPE-IA", "2027 · empieza en Medicina y se abre a todas las facultades, con servidor de IA propio y mentores."],
  ["02", "Analítica académica", "2027 · indicadores para apoyar la toma de decisiones y el seguimiento del rendimiento estudiantil."],
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
          <p className="hero-lead">Un recorrido por la transformación digital de la Facultad de Ciencias Médicas de la Universidad Privada del Este: lo que ya logramos junto a MCLoud y lo que viene para toda la universidad.</p>
          <div className="hero-actions">
            <a className="button primary" href="#capitulo-01">Comenzar presentación <span>↓</span></a>
            <a className="button ghost" href="#capitulo-09">Ver lo que hicimos con <span className="nocaps">MCLoud</span></a>
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
            <h2>La innovación comenzó con una pregunta.</h2>
            <blockquote>¿Cómo puede la tecnología fortalecer la educación médica sin perder el criterio humano?</blockquote>
            <p>El proyecto nació para explorar soluciones capaces de modernizar la producción educativa, optimizar la comunicación y facilitar el acceso a información institucional validada.</p>
            <div className="objectives">
              <span>01 <b>Producción educativa</b></span><span>02 <b>Comunicación</b></span>
              <span>03 <b>Acceso a información</b></span><span>04 <b>Apoyo institucional</b></span>
            </div>
          </div>
          <figure className="feature-image"><img src="/media/pasillo.jpg" alt="Pasillo de la Facultad" /><figcaption><span>01</span> El comienzo de un recorrido</figcaption></figure>
        </div>
      </section>

      <section id="capitulo-02" className="chapter timeline-section">
        <div className="chapter-label"><span>CAPÍTULO 02</span><i /></div>
        <div className="section-head"><div><p className="kicker">LÍNEA DE TIEMPO</p><h2>Avances que construyen<br />una <em>transformación.</em></h2></div><p>Antes de entrar en el detalle de cada componente, así fue el camino que construyó este ecosistema.</p></div>
        <div className="timeline">{milestones.map(([m,y,title,text],i)=><article key={`${m}-${title}`}><div className="date"><b>{m}</b><span>{y}</span></div><i className={i===CURRENT_MILESTONE_INDEX?'current':''}/><div><small>HITO {String(i+1).padStart(2,'0')}</small><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section id="capitulo-03" className="chapter research dark-section">
        <div className="chapter-label light"><span>CAPÍTULO 03</span><i /></div>
        <div className="section-head">
          <div><p className="kicker">INVESTIGACIÓN Y SELECCIÓN</p><h2>No elegimos herramientas.<br /><em>Diseñamos un ecosistema.</em></h2></div>
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
          <p>Un proceso trazable transforma contenido académico validado en experiencias audiovisuales claras, consistentes y reutilizables.</p>
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
          <div><p className="kicker">RESULTADO FINAL</p><h3>Una experiencia educativa con identidad institucional.</h3><p>El contenido continúa sujeto a revisión académica. La inteligencia artificial acelera la producción; el criterio docente garantiza su calidad.</p><div className="quality"><span>✓ Contenido validado</span><span>✓ Identidad UPE</span><span>✓ Revisión institucional</span></div></div>
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
        <div className="section-head"><div><p className="kicker">ECOSISTEMA CONECTADO</p><h2>Una solución.<br /><em>Múltiples avances.</em></h2></div><p>Cada componente responde a una necesidad concreta y se integra dentro de una experiencia institucional coherente.</p></div>
        <div className="ecosystem-grid">
          <article className="eco-card assistant"><span className="card-number">01</span><div className="phone"><div className="phone-head">Asistente Medicina <i /></div><div className="bubble user">¿Cuándo comienza la primera convocatoria?</div><div className="bubble bot">La primera convocatoria del Curso de Admisión comienza el <b>1 de octubre.</b></div><small>Información institucional validada</small></div><div><p className="kicker">ASISTENTE VIRTUAL</p><h3>Atención clara, continua y basada en datos oficiales.</h3><p>Entrenado con una base de conocimiento institucional e integrado a los canales conectados con Respond.io.</p><div className="qr-block"><img src="/media/whatsapp-qr.png" alt="Código QR para hablar con el asistente virtual por WhatsApp" /><span>Escaneá para hablar por WhatsApp</span></div></div></article>
          <article className="eco-card communication"><span className="card-number">02</span><p className="kicker">COMUNICACIÓN ESTUDIANTIL</p><h3>De primero a sexto año, cada mensaje llega a su lugar.</h3><div className="years">{['1.º','2.º','3.º','4.º','5.º','6.º'].map(y=><span key={y}>{y}</span>)}</div><div className="channel-row"><b>Moodle + Workspace</b><span>Actividad académica ordinaria</span></div><div className="channel-row accent"><b>Respond.io</b><span>Comunicación prioritaria y atención</span></div></article>
          <article className="eco-card microsite"><span className="card-number">03</span><div><p className="kicker">EXPERIENCIA DIGITAL</p><h3>Un nuevo micrositio para Medicina.</h3><p>Diseño renovado, recorrido 360°, infraestructura y acceso moderno desde cualquier dispositivo.</p><a href="https://upe.edu.py/medicina_v2.php" target="_blank" rel="noreferrer">Visitar micrositio ↗</a></div><div className="screen"><img src="/media/fachada.jpg" alt="Vista del micrositio" /><span>MEDICINA UPE</span></div></article>
        </div>
        <figure className="ecosystem-map">
          <p className="kicker">MAPA COMPLETO</p>
          <img src="/media/ecosistema-estrategico.png" alt="Mapa del ecosistema estratégico de la Facultad de Ciencias Médicas UPE: gobernanza institucional, transformación digital, comunicación, experiencia del estudiante, internacionalización, responsabilidad social y gestión basada en datos" />
          <figcaption>Ecosistema estratégico de la Facultad de Ciencias Médicas UPE: los siete nodos que integran personas, procesos, innovación y calidad.</figcaption>
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
              <div className="summary-card"><p>Lectura ejecutiva</p><h4>WhatsApp lidera el acceso a la información, mientras la cuenta específica de Medicina concentra una atención institucional relevante.</h4><span>La demanda de contenidos es principalmente práctica: actividades hospitalarias, experiencias clínicas, internado, guías y vida académica.</span></div>
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
              <div className="metric-card"><strong>68.2%</strong><span>quiere mayor uso como complemento u obligación</span><small>60 de 88 respuestas válidas</small></div>
              <div className="summary-card"><p>Lectura ejecutiva</p><h4>Existe una disposición alta a utilizar la plataforma, pero su integración actual en las materias todavía es limitada.</h4><span>Las prioridades de simulación son Clínica Médica y Urgencias. Las mejoras abiertas mencionan orientación inicial, más casos en español, navegación intuitiva e interacción por voz.</span></div>
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

        <div className="method-note"><b>Nota metodológica</b><span>Resultados descriptivos de formularios aplicados en julio de 2026. Cada porcentaje indica su denominador; las preguntas opcionales o no respondidas se calculan solamente sobre respuestas válidas. Los comentarios abiertos fueron agrupados por temas, sin convertirlos en porcentajes.</span></div>
      </section>

      <section id="capitulo-07" className="chapter results-section">
        <div className="chapter-label"><span>CAPÍTULO 07</span><i /></div>
        <div className="results">
          <p className="kicker">RESULTADOS ALCANZADOS</p>
          <div><article><strong>+21</strong><span>herramientas<br/>investigadas</span></article><article><strong>01</strong><span>asistente virtual<br/>desarrollado</span></article><article><strong>6</strong><span>años académicos<br/>organizados</span></article><article><strong>360°</strong><span>recorrido virtual<br/>incorporado</span></article></div>
          <div className="results-list">{achievements.map(a=><span key={a}>{a}</span>)}</div>
          <small>Solo se presentan resultados confirmados. No se incluyen métricas aún no medidas.</small>
        </div>
      </section>

      <section id="capitulo-08" className="chapter challenge">
        <div className="chapter-label"><span>CAPÍTULO 08</span><i /></div>
        <div className="section-head">
          <div><p className="kicker">DESAFÍO UPE INNOVACIÓN 2026</p><h2>Toda la universidad<br />pensando <em>con IA.</em></h2></div>
          <p>El 1 de noviembre de 2026, la UPE y MCLoud reunieron a estudiantes de todas las carreras para resolver necesidades reales con inteligencia artificial.</p>
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
          <div><p className="kicker">QUIÉN IMPULSA ESTE AVANCE</p><h2>UPE + MCLoud.<br /><em>Una alianza para innovar.</em></h2></div>
          <p>MCLoud es una empresa paraguaya de tecnología. La UPE aporta talento, investigación y necesidades reales; MCLoud aporta desarrollo, infraestructura de IA y acompañamiento para convertir las mejores ideas en soluciones que funcionan.</p>
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
        <p className="mini-label">LO QUE YA TENEMOS</p>
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
            <p>El lugar del Ecosistema UPE de Innovación donde las ideas de estudiantes y docentes se convierten en prototipos que se prueban, se miden y, si funcionan, llegan a toda la universidad. Empieza en el Centro de IA e Innovación Educativa de Medicina y se abre a todas las facultades.</p>
            <div className="lab-tags"><span>Propuesta 2027</span><span>Con servidor de IA propio</span><span>Acompañado por <b className="nocaps">MCLoud</b></span></div>
          </div>
        </div>

        <div className="pipeline" data-draw>
          <div className="pipeline-head"><p className="kicker">DE LA IDEA AL IMPACTO</p><h3>Cada prototipo sigue el mismo camino.</h3></div>
            <div className="pipeline-steps">{labPipeline.map(([ico, title, text], i) => <article key={title} style={{ "--i": i } as React.CSSProperties}><span className="pipe-node"><Icono n={ico} /></span><small>0{i + 1}</small><h4>{title}</h4><p>{text}</p></article>)}</div>
        </div>

        <div className="lab-block">
          <div><p className="kicker">QUÉ TENDRÍA</p><h3>Todo lo necesario para pasar de la idea a la prueba.</h3></div>
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
            <h2>Mbarete.<br /><em>Una IA que trabaja dentro de casa.</em></h2>
            <p>Mbarete es la plataforma de inteligencia artificial de MCLoud. Corre en computadoras propias, busca en los documentos de la institución y responde citando la fuente. Es el motor del laboratorio y de las soluciones para la UPE.</p>
            <div className="data-rules">{dataRules.map(([ico, text]) => <span key={text}><Icono n={ico} />{text}</span>)}</div>
          </div>
          <MbareteDemo />
        </div>

        <div className="stack" data-draw>
          <div className="stack-head"><p className="kicker">CÓMO ESTÁ ARMADA</p><h3>Cuatro capas, todas bajo control.</h3><p>Usa modelos abiertos de primer nivel. Lo propio de MCLoud es lo que los rodea: la búsqueda en documentos, los agentes, la memoria y el ajuste con ejemplos aprobados.</p></div>
          <div className="stack-layers">{mbareteStack.map(([ico, title, items], i) => <article key={title} className={i === 1 ? "core" : ""} style={{ "--i": i } as React.CSSProperties}><span className="feat-ico"><Icono n={ico} /></span><b>{title}</b><div>{items.map((x) => <small key={x}>{x}</small>)}</div><i className="pulse" /></article>)}</div>
        </div>

        <p className="mini-label">QUÉ HACE HOY</p>
        <div className="caps">{mbareteCaps.map(([ico, title, text, state], i) => <article key={title} data-reveal style={{ "--i": i % 4 } as React.CSSProperties}><div className="cap-top"><span className="project-ico"><Icono n={ico} /></span><small className={state === "Funcionando" ? "ok" : ""}>{state}</small></div><h4>{title}</h4><p>{text}</p></article>)}</div>

        <div className="ai-uses" data-reveal>
          <div className="ai-head"><p className="kicker">EN PALABRAS SIMPLES</p><h3>Tres ideas para entenderla.</h3></div>
          {aiUses.map(([ico, tag, title, text]) => <article key={tag}><span className="feat-ico"><Icono n={ico} /></span><small>{tag}</small><h4>{title}</h4><p>{text}</p></article>)}
          <p className="ai-rule">Siempre: las personas deciden, la IA ayuda y solo se usan datos permitidos.</p>
        </div>
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
        <div className="future-content"><p className="kicker">PRÓXIMA ETAPA</p><h2>El ecosistema<br />continúa creciendo.</h2><p>La evolución tecnológica desarrollada entre 2017 y 2026 es la base de una nueva etapa: consolidar un ecosistema inteligente de aprendizaje que fortalezca la calidad de la formación médica, la experiencia del estudiante y el cumplimiento de los estándares de acreditación.</p><div className="future-list">{projections.map(([n,title,text])=><span key={n}>{n} <b>{title}</b><br/>{text}</span>)}</div></div>
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
