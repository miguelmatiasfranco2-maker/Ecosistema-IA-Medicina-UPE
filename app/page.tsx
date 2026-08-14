const chapters = [
  ["01", "Origen"], ["02", "Cronología"], ["03", "Investigación"], ["04", "Producción"],
  ["05", "Ecosistema"], ["06", "Encuestas"], ["07", "Resultados"], ["08", "Futuro"],
];

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
  { n: "01", title: "Contenido y guion", text: "El contenido docente se adapta a un lenguaje claro, narrable y pedagógico sin alterar su rigor académico.", tag: "ChatGPT", action: "Ver comparación", media: "Documento original → guion optimizado" },
  { n: "02", title: "Creación de voz", text: "La narración se genera con parámetros definidos para obtener una voz natural, clara y consistente.", tag: "ElevenLabs", action: "Escuchar muestra", media: "Espacio para audio real", audio: true },
  { n: "03", title: "Avatar docente", text: "Un presentador digital acompaña la introducción y el cierre, preservando una presencia institucional sobria.", tag: "HeyGen", action: "Ver fragmento", media: "Espacio para video de avatar", video: true },
  { n: "04", title: "Edición y revisión", text: "Voz, recursos médicos, identidad UPE y video se integran en una pieza final revisada antes de publicarse.", tag: "Filmora", action: "Ver montaje", media: "Espacio para captura de edición", video: true },
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
  ["2027", "", "Proyección: Analítica Académica", "Uso de indicadores para apoyar la toma de decisiones y el seguimiento del rendimiento estudiantil."],
  ["2028", "", "Proyección: Inteligencia Artificial en la Enseñanza", "Desarrollo de asistentes académicos, simulaciones clínicas inteligentes y recursos personalizados para el aprendizaje."],
  ["2029–2030", "", "Proyección: Campus Inteligente", "Integración de plataformas académicas, comunicación, bienestar estudiantil e internacionalización en un único ecosistema digital."],
];
const CURRENT_MILESTONE_INDEX = 14;

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
];

const projections = [
  ["01", "Analítica académica", "2027 · indicadores para apoyar la toma de decisiones y el seguimiento del rendimiento estudiantil."],
  ["02", "IA en la enseñanza", "2028 · asistentes académicos, simulaciones clínicas inteligentes y recursos personalizados para el aprendizaje."],
  ["03", "Campus inteligente", "2029–2030 · integración de plataformas académicas, comunicación, bienestar estudiantil e internacionalización."],
  ["04", "Ecosistema inteligente de aprendizaje", "Analítica académica, simulación clínica y comunicación omnicanal integradas para fortalecer la calidad de la formación médica."],
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Inicio">
          <span className="brand-mark"><img src="/media/upe-logo.png" alt="Universidad Privada del Este" /></span>
          <span><b>MEDICINA UPE</b><small>Innovación Tecnológica Educativa</small></span>
        </a>
        <nav aria-label="Capítulos">
          {chapters.map(([n, label]) => <a key={n} href={`#capitulo-${n}`}>{label}</a>)}
        </nav>
        <span className="edition">Presentación institucional · 2026</span>
      </header>

      <section id="inicio" className="hero">
        <img className="hero-image" src="/media/fachada.jpg" alt="Fachada de la Universidad Privada del Este" />
        <div className="hero-shade" />
        <div className="hero-grid" />
        <div className="hero-content reveal">
          <p className="eyebrow"><span /> Área de Innovación Tecnológica Educativa</p>
          <h1>Ecosistema de<br /><em>Inteligencia Artificial</em></h1>
          <p className="hero-lead">Un recorrido por la transformación digital de la Facultad de Ciencias Médicas de la Universidad Privada del Este.</p>
          <div className="hero-actions">
            <a className="button primary" href="#capitulo-01">Comenzar presentación <span>↓</span></a>
            <a className="button ghost" href="#capitulo-04">Ver proceso audiovisual</a>
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
            <div className={`media-placeholder ${s.audio?'audio':''}`}>
              {s.audio ? <><button aria-label="Reproducir audio">▶</button><div className="wave">{Array.from({length:28}).map((_,j)=><i key={j} style={{height:`${18+(j*17)%48}%`}} />)}</div></> : <><span className="media-icon">{s.video?'▶':'Aa'}</span><small>{s.media}</small></>}
            </div>
            <h3>{s.title}</h3><p>{s.text}</p><button className="text-action">{s.action} <span>↗</span></button>
          </article>)}
        </div>
        <div className="final-output">
          <div className="video-frame"><img src="/media/practica.jpg" alt="Práctica médica en la UPE" /><button aria-label="Reproducir videoclase">▶</button><span>ESPACIO PARA VIDEOCLASE FINAL</span></div>
          <div><p className="kicker">RESULTADO FINAL</p><h3>Una experiencia educativa con identidad institucional.</h3><p>El contenido continúa sujeto a revisión académica. La inteligencia artificial acelera la producción; el criterio docente garantiza su calidad.</p><div className="quality"><span>✓ Contenido validado</span><span>✓ Identidad UPE</span><span>✓ Revisión institucional</span></div></div>
        </div>
      </section>

      <section className="evolution-band">
        <div><p className="kicker">EVOLUCIÓN DOCUMENTADA</p><h2>De las primeras pruebas<br />al modelo actual.</h2></div>
        <div className="clip-strip">
          {['Primera prueba','Mejora de voz','Avatar institucional','Resultado actual'].map((x,i)=><article key={x}><div><img src={['/media/anatomia.jpg','/media/microscopia.jpg','/media/laboratorio.jpg','/media/biblioteca.jpg'][i]} alt="" /><button>▶</button><span>00:{8+i*2}</span></div><p><b>0{i+1}</b>{x}</p></article>)}
        </div>
      </section>

      <section id="capitulo-05" className="chapter ecosystem dark-section">
        <div className="chapter-label light"><span>CAPÍTULO 05</span><i /></div>
        <div className="section-head"><div><p className="kicker">ECOSISTEMA CONECTADO</p><h2>Una solución.<br /><em>Múltiples avances.</em></h2></div><p>Cada componente responde a una necesidad concreta y se integra dentro de una experiencia institucional coherente.</p></div>
        <div className="ecosystem-grid">
          <article className="eco-card assistant"><span className="card-number">01</span><div className="phone"><div className="phone-head">Asistente Medicina <i /></div><div className="bubble user">¿Cuándo comienza la primera convocatoria?</div><div className="bubble bot">La primera convocatoria del Curso de Admisión comienza el <b>1 de octubre.</b></div><small>Información institucional validada</small></div><div><p className="kicker">ASISTENTE VIRTUAL</p><h3>Atención clara, continua y basada en datos oficiales.</h3><p>Entrenado con una base de conocimiento institucional e integrado a los canales conectados con Respond.io.</p></div></article>
          <article className="eco-card communication"><span className="card-number">02</span><p className="kicker">COMUNICACIÓN ESTUDIANTIL</p><h3>De primero a sexto año, cada mensaje llega a su lugar.</h3><div className="years">{['1.º','2.º','3.º','4.º','5.º','6.º'].map(y=><span key={y}>{y}</span>)}</div><div className="channel-row"><b>Moodle + Workspace</b><span>Actividad académica ordinaria</span></div><div className="channel-row accent"><b>Respond.io</b><span>Comunicación prioritaria y atención</span></div></article>
          <article className="eco-card microsite"><span className="card-number">03</span><div><p className="kicker">EXPERIENCIA DIGITAL</p><h3>Un nuevo micrositio para Medicina.</h3><p>Diseño renovado, recorrido 360°, infraestructura y acceso moderno desde cualquier dispositivo.</p><a href="https://upe.edu.py/medicina_v2.php" target="_blank" rel="noreferrer">Visitar micrositio ↗</a></div><div className="screen"><img src="/media/fachada.jpg" alt="Vista del micrositio" /><span>MEDICINA UPE</span></div></article>
        </div>
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

      <section id="capitulo-08" className="future">
        <img src="/media/laboratorio.jpg" alt="Laboratorio de Medicina UPE" />
        <div className="future-overlay" />
        <div className="future-content"><p className="kicker">PRÓXIMA ETAPA</p><h2>El ecosistema<br />continúa creciendo.</h2><p>La evolución tecnológica desarrollada entre 2017 y 2026 es la base de una nueva etapa: consolidar un ecosistema inteligente de aprendizaje que fortalezca la calidad de la formación médica, la experiencia del estudiante y el cumplimiento de los estándares de acreditación.</p><div className="future-list">{projections.map(([n,title,text])=><span key={n}>{n} <b>{title}</b><br/>{text}</span>)}</div></div>
      </section>

      <footer>
        <img src="/media/upe-logo.png" alt="UPE" />
        <blockquote>“La inteligencia artificial no reemplaza la labor académica, docente ni institucional. <em>La fortalece.</em>”</blockquote>
        <div><span>Facultad de Ciencias Médicas</span><span>Universidad Privada del Este</span><span>Presidente Franco · Paraguay</span></div>
      </footer>
    </main>
  );
}
