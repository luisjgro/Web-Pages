function slugify(text) {
  return text
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

const body = (p1, p2, p3, p4, p5) =>
  [p1, p2, p3, p4, p5].filter(Boolean)

const pA = 'Los expertos señalan que el éxito de esta iniciativa radica en la colaboración entre diversos sectores de la sociedad. Gobiernos locales, empresas privadas, organizaciones civiles y ciudadanos voluntarios han unido esfuerzos para lograr resultados que parecían imposibles hace apenas unos años. Esta sinergia ha demostrado ser la clave para enfrentar los desafíos más apremiantes de nuestra época.'
const pB = 'Los beneficios no se han hecho esperar. Las comunidades participantes reportan una mejora significativa en su calidad de vida, con un aumento en el acceso a servicios básicos, mayores oportunidades económicas y un fortalecimiento del tejido social. Los niños y jóvenes, en particular, han sido los más beneficiados, encontrando nuevas oportunidades para desarrollar su potencial.'
const pC = 'Los organizadores ya planean expandir el programa a nuevas regiones el próximo año, con la meta de multiplicar el impacto positivo y llegar a comunidades que aún enfrentan desafíos similares. La meta es ambiciosa, pero el entusiasmo y la determinación de todos los involucrados hacen pensar que es perfectamente alcanzable.'
const pD = 'Esta historia es solo una muestra de que, cuando nos unimos en torno a una causa común, somos capaces de lograr cosas extraordinarias. En Solo Buenas Noticias seguiremos compartiendo estas historias que construyen, inspiran y nos reconcilian con el mundo. Porque lo bueno también merece portada.'

const make = (data) => ({
  slug: slugify(data.title),
  ...data,
  contenido: body(data.p1, data.p2 || pA, data.p3 || pB, data.p4 || pC, data.p5 || pD)
})

export const allArticles = [
  // --- Featured (Noticia del Día) ---
  make({
    title: 'Científicos desarrollan un método revolucionario para limpiar los océanos en una década',
    excerpt: 'Un equipo internacional de investigadores ha presentado un innovador sistema de nanopartículas magnéticas capaz de absorber microplásticos del agua de mar de manera eficiente y económica. El método, que ya se ha probado con éxito en el Pacífico, promete eliminar hasta el 90% de los residuos plásticos en los próximos diez años sin dañar la vida marina.',
    img: 10, badge: 'DESTACADO', category: 'Ciencia', author: 'Mariana Rojas', date: '4 jun 2026', time: '8 min',
    p1: 'En un laboratorio de la Universidad Nacional Autónoma de México, un equipo de científicos ha logrado lo que parecía imposible: desarrollar un método capaz de limpiar los océanos de microplásticos en tiempo récord. Las nanopartículas magnéticas, diseñadas durante cinco años de investigación, tienen la capacidad de atraer y absorber partículas plásticas de hasta 5 micras sin afectar a la fauna marina.',
  }),

  // --- homeArticles (6) ---
  make({
    title: 'Comunidad costera logra reforestar 50 kilómetros de manglares',
    excerpt: 'Más de 2.000 voluntarios participaron en la iniciativa que devolvió la vida a ecosistemas clave para la biodiversidad y la protección contra tormentas.',
    img: 1, badge: 'Medio Ambiente', category: 'Medio Ambiente', author: 'Mariana Rojas', date: '28 may 2026', time: '4 min',
    p1: 'Lo que comenzó como un pequeño grupo de vecinos preocupados por la erosión de la costa se transformó en un movimiento masivo que logró reforestar 50 kilómetros de manglares en el Golfo de México. Durante seis meses, más de 2.000 voluntarios de todas las edades plantaron miles de propágulos de mangle rojo, blanco y negro en áreas que habían sido devastadas por la tala ilegal y el desarrollo turístico.',
  }),
  make({
    title: 'Científicos crean un dispositivo portátil que detecta enfermedades en segundos',
    excerpt: 'El innovador biosensor, del tamaño de una moneda, analiza una gota de sangre y diagnostica hasta 15 condiciones diferentes con una precisión del 98%.',
    img: 2, badge: 'Ciencia', category: 'Ciencia', author: 'Dr. Andrés Guerra', date: '26 may 2026', time: '6 min',
    p1: 'Un equipo de bioingenieros ha desarrollado un dispositivo del tamaño de una moneda que puede diagnosticar hasta 15 enfermedades diferentes en cuestión de segundos. El biosensor, que funciona con una sola gota de sangre, utiliza inteligencia artificial para analizar biomarcadores y detectar condiciones como diabetes, infecciones virales y marcadores tempranos de cáncer.',
  }),
  make({
    title: 'Joven emprendedora crea app que conecta voluntarios con causas sociales',
    excerpt: 'La plataforma ya ha movilizado a más de 10.000 voluntarios en 20 países, facilitando la colaboración en proyectos de educación, salud y medio ambiente.',
    img: 3, badge: 'Inspiración', category: 'Inspiración', author: 'Sofía Mendoza', date: '24 may 2026', time: '3 min',
    p1: 'A sus 24 años, Marina Torres lanzó una aplicación que está transformando la manera en que las personas se conectan con causas sociales. ConectaVoluntarios permite a usuarios encontrar proyectos cercanos que necesiten apoyo, desde clases de alfabetización hasta jornadas de limpieza de playas, y ya cuenta con más de 10.000 voluntarios registrados en 20 países.',
  }),
  make({
    title: 'Programa de mentoría reduce brecha educativa en zonas rurales',
    excerpt: 'Más de 5.000 estudiantes de comunidades rurales mejoraron su rendimiento académico gracias a un programa de tutorías virtuales con profesionales voluntarios.',
    img: 4, badge: 'Sociedad', category: 'Sociedad', author: 'Carlos Huerta', date: '22 may 2026', time: '5 min',
    p1: 'La brecha educativa entre zonas urbanas y rurales ha comenzado a cerrarse gracias a un innovador programa de mentorías virtuales. Más de 5.000 estudiantes de comunidades apartadas reciben tutorías personalizadas de profesionales voluntarios en áreas como matemáticas, ciencias y lenguas extranjeras, con resultados que han superado todas las expectativas.',
  }),
  make({
    title: 'Bibliotecas móviles llevan lectura a comunidades sin acceso a libros',
    excerpt: 'Un programa de bibliotecas itinerantes ha logrado que más de 15.000 niños y adultos tengan acceso a libros en zonas donde antes no llegaba ningún servicio de lectura.',
    img: 5, badge: 'Cultura', category: 'Cultura', author: 'Laura Jiménez', date: '20 may 2026', time: '3 min',
    p1: 'En comunidades donde el acceso a libros era prácticamente inexistente, las bibliotecas móviles están escribiendo una nueva historia. Un programa impulsado por la Secretaría de Cultura y organizaciones civiles ha desplegado 30 bibliotecas sobre ruedas que recorren comunidades rurales y urbanas marginadas, llevando libros, talleres de lectura y actividades culturales a miles de personas.',
  }),
  make({
    title: 'Hospital público reduce tiempos de espera con nuevo sistema digital',
    excerpt: 'El innovador modelo de triaje inteligente y citas en línea ha transformado la experiencia de miles de pacientes, reduciendo las esperas en un 60%.',
    img: 6, badge: 'Salud', category: 'Salud', author: 'Dra. Patricia Luna', date: '18 may 2026', time: '7 min',
    p1: 'Un hospital público de la ciudad de México ha logrado reducir los tiempos de espera en un 60% gracias a la implementación de un sistema de triaje inteligente basado en inteligencia artificial. El sistema, desarrollado por ingenieros mexicanos, prioriza a los pacientes según la gravedad de su condición y optimiza la asignación de recursos médicos en tiempo real.',
  }),

  // --- noticiasArticles (3) ---
  make({
    title: 'Anuncian programa de becas para estudiantes de comunidades indígenas',
    excerpt: 'El gobierno estatal destinará más de 50 millones de pesos para apoyar a jóvenes de comunidades indígenas que deseen cursar estudios universitarios en el próximo ciclo escolar.',
    img: 21, badge: 'Estatal', category: 'Estatal', author: 'Redacción SBN', date: '2 jun 2026', time: '3 min',
    p1: 'El gobierno del estado anunció un programa de becas integrales para estudiantes de comunidades indígenas que deseen cursar estudios universitarios. Con una inversión de más de 50 millones de pesos, el programa cubrirá no solo la colegiatura sino también transporte, alimentación y materiales de estudio durante toda la carrera.',
  }),
  make({
    title: 'Inicia campaña nacional de reforestación con meta de 10 millones de árboles',
    excerpt: 'La iniciativa, impulsada por organizaciones civiles y el gobierno federal, busca restaurar áreas afectadas por la deforestación y generar empleos verdes en 15 estados del país.',
    img: 22, badge: 'Nacional', category: 'Nacional', author: 'Redacción SBN', date: '1 jun 2026', time: '5 min',
    p1: 'Una ambiciosa campaña nacional de reforestación se puso en marcha con la meta de plantar 10 millones de árboles en 15 estados del país. La iniciativa, que combina esfuerzos del gobierno federal, organizaciones civiles y empresas privadas, busca restaurar ecosistemas dañados por la deforestación y generar miles de empleos verdes en comunidades rurales.',
  }),

  // --- cienciaArticles (3) ---
  make({
    title: 'Inteligencia artificial ayuda a diagnosticar enfermedades raras en niños',
    excerpt: 'Un nuevo sistema de IA desarrollado por investigadores mexicanos analiza patrones genéticos y síntomas para identificar enfermedades poco frecuentes con una precisión sin precedentes.',
    img: 23, badge: 'Tecnología', category: 'Tecnología', author: 'Dr. Andrés Guerra', date: '30 may 2026', time: '6 min',
    p1: 'Investigadores mexicanos han desarrollado un sistema de inteligencia artificial capaz de diagnosticar enfermedades raras en niños analizando patrones genéticos y síntomas clínicos. La herramienta, entrenada con miles de casos clínicos, ha demostrado una precisión del 95% en la identificación de condiciones que normalmente tardan años en diagnosticarse.',
  }),
  make({
    title: 'Nueva terapia génica revierte la ceguera en pacientes con enfermedad hereditaria',
    excerpt: 'El tratamiento, aplicado por primera vez en América Latina, ha devuelto la visión parcial a siete pacientes con amaurosis congénita de Leber, una condición que causa ceguera progresiva.',
    img: 24, badge: 'Medicina', category: 'Medicina', author: 'Dra. Patricia Luna', date: '29 may 2026', time: '7 min',
    p1: 'Siete pacientes que habían perdido la visión debido a una enfermedad hereditaria recuperaron parcialmente la vista gracias a una innovadora terapia génica aplicada por primera vez en América Latina. El tratamiento, desarrollado por investigadores de la UNAM en colaboración con centros médicos internacionales, corrige el gen defectuoso responsable de la amaurosis congénita de Leber.',
  }),
  make({
    title: 'Innovador sistema de riego reduce el consumo de agua en un 70%',
    excerpt: 'El sistema, basado en sensores de humedad e inteligencia artificial, optimiza el uso del agua en cultivos de zonas áridas y ya se ha implementado con éxito en cinco estados del norte.',
    img: 25, badge: 'Medio Ambiente', category: 'Medio Ambiente', author: 'Mariana Rojas', date: '28 may 2026', time: '4 min',
    p1: 'En un país donde el agua es un recurso cada vez más escaso, un nuevo sistema de riego inteligente promete revolucionar la agricultura en zonas áridas. El sistema, que combina sensores de humedad del suelo con algoritmos de inteligencia artificial, reduce el consumo de agua en un 70% sin comprometer la productividad de los cultivos.',
  }),

  // --- inspiracionArticles (3) ---
  make({
    title: 'De vendedor ambulante a ingeniero: la historia de superación de José María',
    excerpt: 'Con tan solo la educación básica y una determinación inquebrantable, José María logró titularse como ingeniero de software a los 42 años, demostrando que nunca es tarde para cumplir los sueños.',
    img: 26, badge: 'Historias', category: 'Historias que Inspiran', author: 'Sofía Mendoza', date: '27 may 2026', time: '5 min',
    p1: 'A los 35 años, José María vendía dulces en los semáforos para mantener a su familia. Siete años después, con su título de ingeniero de software en mano, demuestra que la perseverancia puede vencer cualquier obstáculo. Su historia, que ha inspirado a miles, comenzó cuando decidió tomar clases nocturnas de computación mientras seguía trabajando en las calles.',
  }),
  make({
    title: 'Maestra rural recorre 20 km diarios para llevar educación a niños de la montaña',
    excerpt: 'A pesar de las condiciones adversas y el terreno accidentado, la profesora Elena García no ha faltado un solo día a su escuela, donde 30 niños aprenden con la esperanza de un futuro mejor.',
    img: 27, badge: 'Héroes', category: 'Héroes de Carne y Hueso', author: 'Carlos Huerta', date: '26 may 2026', time: '4 min',
    p1: 'Todos los días, antes de que salga el sol, la profesora Elena García emprende un viaje de 20 kilómetros a pie y en transporte público para llegar a su escuela en lo alto de la montaña. Allí la esperan 30 niños que, gracias a su dedicación inquebrantable, tienen la oportunidad de aprender y soñar con un futuro mejor.',
  }),
  make({
    title: 'Científica mexicana gana premio internacional por su trabajo en energías limpias',
    excerpt: 'La doctora Valeria Campos fue reconocida por desarrollar un panel solar biodegradable de bajo costo que podría llevar electricidad a comunidades sin acceso a la red eléctrica.',
    img: 28, badge: 'Mujeres', category: 'Mujeres Talentosas', author: 'Redacción SBN', date: '25 may 2026', time: '3 min',
    p1: 'La doctora Valeria Campos, investigadora del Instituto de Energías Renovables, ha sido galardonada con el prestigioso Premio Mundial de Energía Limpia por el desarrollo de un panel solar biodegradable de bajo costo. Su innovación promete llevar electricidad a millones de personas en comunidades que aún no tienen acceso a la red eléctrica.',
  }),

  // --- culturaArticles (3) ---
  make({
    title: 'Festival de cine documental llega a comunidades indígenas del país',
    excerpt: 'El festival itinerante proyectará más de 40 documentales en 12 comunidades indígenas, con entrada gratuita y talleres de realización cinematográfica para jóvenes.',
    img: 29, badge: 'Cultura', category: 'Cultura', author: 'Laura Jiménez', date: '24 may 2026', time: '4 min',
    p1: 'El cine documental llegará a comunidades indígenas que nunca antes habían tenido acceso a una sala de proyección. El Festival Itinerante de Cine Documental recorrerá 12 comunidades en seis estados, llevando más de 40 documentales que abordan temas como la identidad cultural, la defensa del territorio y los derechos humanos.',
  }),
  make({
    title: 'Atleta paralímpico rompe récord mundial y inspira a nuevas generaciones',
    excerpt: 'Con una marca de 1:45.3 en los 800 metros planos, el corredor mexicano superó su propio récord y dedicó la victoria a todos los jóvenes que sueñan con superar la adversidad.',
    img: 31, badge: 'Deporte', category: 'Deporte', author: 'Carlos Huerta', date: '22 may 2026', time: '5 min',
    p1: 'El atleta paralímpico mexicano Miguel Ángel Hernández volvió a hacer historia al romper su propio récord mundial en los 800 metros planos con un tiempo de 1:45.3. Tras cruzar la meta, dedicó su victoria a todos los jóvenes que enfrentan alguna discapacidad y sueñan con superar la adversidad a través del deporte.',
  }),

  // --- CategoryPage: noticias-local (6) ---
  make({
    title: 'Nueva biblioteca pública abre sus puertas con más de 20.000 ejemplares',
    excerpt: 'El recinto cultural, ubicado en el centro de la ciudad, ofrece salas de lectura, talleres gratuitos y un archivo digital con más de 5.000 títulos disponibles.',
    img: 40, badge: 'Local', category: 'Local', author: 'Redacción SBN', date: '3 jun 2026', time: '4 min',
    p1: 'La nueva biblioteca pública del centro histórico representa un hito cultural para la ciudad. Con una inversión de 30 millones de pesos, el edificio restaurado ofrece espacios modernos y accesibles para toda la comunidad.',
  }),
  make({
    title: 'Mercado orgánico semanal atrae a cientos de familias',
    excerpt: 'Productores locales ofrecen frutas, verduras y artesanías libres de químicos en una iniciativa que impulsa la economía regional y la alimentación saludable.',
    img: 41, badge: 'Local', category: 'Local', author: 'Redacción SBN', date: '2 jun 2026', time: '3 min',
    p1: 'Cada sábado, el mercado orgánico del parque central reúne a decenas de productores locales que ofrecen alimentos libres de pesticidas y productos artesanales. La iniciativa ha crecido tanto que ahora atrae a cientos de familias de toda la región.',
  }),
  make({
    title: 'Jóvenes pintan mural comunitario para embellecer el barrio',
    excerpt: 'Un grupo de 50 voluntarios transformó una calle completa con coloridos murales que reflejan la identidad y la historia de su comunidad.',
    img: 42, badge: 'Local', category: 'Local', author: 'Laura Jiménez', date: '1 jun 2026', time: '4 min',
    p1: 'Lo que antes era una calle gris y descuidada ahora es una galería de arte al aire libre. Cincuenta jóvenes voluntarios, dirigidos por artistas locales, transformaron fachadas enteras con murales que cuentan la historia y la identidad de su barrio.',
  }),
  make({
    title: 'Arranca programa de huertos urbanos en 15 colonias',
    excerpt: 'Familias podrán cultivar sus propios alimentos en espacios públicos recuperados, con asesoría técnica y semillas proporcionadas por el municipio.',
    img: 43, badge: 'Local', category: 'Local', author: 'Carlos Huerta', date: '31 may 2026', time: '5 min',
    p1: 'El programa de huertos urbanos más ambicioso de la ciudad arrancó con la participación de 15 colonias. Las familias recibirán asesoría técnica, semillas y herramientas para cultivar sus propios alimentos en espacios públicos recuperados.',
  }),
  make({
    title: 'Alumnos de secundaria ganan concurso de robótica educativa',
    excerpt: 'Estudiantes de una escuela pública desarrollaron un brazo robótico de bajo costo para ayudar a personas con discapacidad motriz.',
    img: 44, badge: 'Local', category: 'Local', author: 'Sofía Mendoza', date: '30 may 2026', time: '3 min',
    p1: 'Tres estudiantes de secundaria de una escuela pública demostraron que la creatividad y el conocimiento pueden cambiar vidas. Su brazo robótico de bajo costo, diseñado para ayudar a personas con discapacidad motriz, ganó el primer lugar en el concurso nacional de robótica educativa.',
  }),
  make({
    title: 'Nueva ciclovía conecta 12 colonias de la ciudad',
    excerpt: 'La ruta de 18 kilómetros promueve la movilidad sostenible y ya es utilizada por más de 3.000 ciclistas diariamente.',
    img: 45, badge: 'Local', category: 'Local', author: 'Redacción SBN', date: '29 may 2026', time: '4 min',
    p1: 'La nueva ciclovía de 18 kilómetros conecta 12 colonias de la ciudad, ofreciendo una alternativa de transporte seguro y sostenible. Más de 3.000 ciclistas la utilizan a diario, reduciendo la congestión vehicular y las emisiones de carbono.',
  }),

  // --- noticias-estatal (6) ---
  make({
    title: 'Gobierno estatal anuncia becas para estudiantes indígenas',
    excerpt: 'Más de 50 millones de pesos se destinarán a jóvenes de comunidades indígenas que deseen cursar estudios universitarios en el próximo ciclo escolar.',
    img: 46, badge: 'Estatal', category: 'Estatal', author: 'Redacción SBN', date: '2 jun 2026', time: '3 min',
    p1: 'El gobierno del estado presentó un programa histórico de becas integrales para estudiantes de comunidades indígenas, con una inversión superior a los 50 millones de pesos que beneficiará a miles de jóvenes.',
  }),
  make({
    title: 'Nuevo hospital regional atenderá a 200 mil personas',
    excerpt: 'El centro médico cuenta con equipos de última generación y especialistas en 15 áreas diferentes, reduciendo los traslados a la capital.',
    img: 47, badge: 'Estatal', category: 'Estatal', author: 'Dr. Andrés Guerra', date: '1 jun 2026', time: '6 min',
    p1: 'La inauguración del nuevo hospital regional representa un antes y un después para la atención médica en la zona. Con equipos de última generación y especialistas en 15 áreas, el centro atenderá a más de 200 mil personas sin necesidad de viajar a la capital.',
  }),
  make({
    title: 'Programa de empleo temporal beneficia a 5.000 familias',
    excerpt: 'La iniciativa ofrece trabajo en proyectos de infraestructura comunitaria con un salario justo y prestaciones de ley.',
    img: 48, badge: 'Estatal', category: 'Estatal', author: 'Carlos Huerta', date: '31 may 2026', time: '4 min',
    p1: 'Un programa de empleo temporal ha beneficiado a 5.000 familias en todo el estado, ofreciendo trabajo digno en proyectos de infraestructura comunitaria como la reparación de caminos, la construcción de aulas y la rehabilitación de espacios públicos.',
  }),
  make({
    title: 'Feria del libro itinerante recorrerá 20 municipios',
    excerpt: 'Con más de 10.000 ejemplares y actividades culturales gratuitas, la feria busca fomentar la lectura en zonas de baja cobertura educativa.',
    img: 49, badge: 'Estatal', category: 'Estatal', author: 'Laura Jiménez', date: '30 may 2026', time: '3 min',
    p1: 'La Feria del Libro Itinerante arrancó su recorrido por 20 municipios del estado con más de 10.000 ejemplares y una variada programación cultural gratuita. La iniciativa busca acercar la lectura a comunidades con baja cobertura educativa.',
  }),
  make({
    title: 'Certifican a productores locales en técnicas sustentables',
    excerpt: 'Pequeños agricultores recibieron capacitación en prácticas agroecológicas que mejoran la productividad sin dañar el medio ambiente.',
    img: 50, badge: 'Estatal', category: 'Estatal', author: 'Mariana Rojas', date: '29 may 2026', time: '5 min',
    p1: 'Más de 200 pequeños agricultores recibieron certificación en prácticas agroecológicas tras completar un programa de capacitación de seis meses. Las técnicas aprendidas les permiten aumentar su productividad mientras protegen el medio ambiente.',
  }),
  make({
    title: 'Construirán 15 nuevos comedores comunitarios',
    excerpt: 'Los espacios proporcionarán alimentos nutritivos a más de 3.000 personas en situación de vulnerabilidad en todo el estado.',
    img: 51, badge: 'Estatal', category: 'Estatal', author: 'Redacción SBN', date: '28 may 2026', time: '3 min',
    p1: 'Quince nuevos comedores comunitarios serán construidos en los municipios más marginados del estado, proporcionando alimentos nutritivos a más de 3.000 personas en situación de vulnerabilidad.',
  }),

  // --- noticias-nacional (6) ---
  make({
    title: 'Campaña nacional de reforestación busca plantar 10 millones de árboles',
    excerpt: 'La iniciativa, impulsada por organizaciones civiles y el gobierno federal, restaurará áreas afectadas por la deforestación en 15 estados del país.',
    img: 52, badge: 'Nacional', category: 'Nacional', author: 'Redacción SBN', date: '1 jun 2026', time: '5 min',
    p1: 'La campaña nacional de reforestación más ambiciosa de la historia del país se puso en marcha con el objetivo de plantar 10 millones de árboles en 15 estados. La iniciativa busca restaurar ecosistemas dañados y generar empleos verdes.',
  }),
  make({
    title: 'Sistema de salud pública incorpora telemedicina en todo el país',
    excerpt: 'Más de 8 millones de pacientes tendrán acceso a consultas virtuales con especialistas, reduciendo tiempos de espera y costos de traslado.',
    img: 53, badge: 'Nacional', category: 'Nacional', author: 'Dra. Patricia Luna', date: '31 may 2026', time: '7 min',
    p1: 'El sistema de salud pública ha dado un salto hacia la modernidad con la incorporación de la telemedicina a nivel nacional. Más de 8 millones de pacientes ahora pueden acceder a consultas virtuales con especialistas sin salir de su comunidad.',
  }),
  make({
    title: 'Nueva ley de protección animal entra en vigor',
    excerpt: 'La legislación establece sanciones más severas contra el maltrato animal y promueve la adopción responsable en todo el territorio nacional.',
    img: 54, badge: 'Nacional', category: 'Nacional', author: 'Sofía Mendoza', date: '30 may 2026', time: '4 min',
    p1: 'La nueva Ley de Protección Animal, aprobada por unanimidad en el Congreso, entró en vigor estableciendo sanciones más severas contra el maltrato animal y promoviendo la adopción responsable en todo el país.',
  }),
  make({
    title: 'Jóvenes mexicanos ganan medalla en olimpiada internacional de matemáticas',
    excerpt: 'El equipo nacional obtuvo tres medallas de oro y dos de plata en la competencia celebrada en Singapur, la mejor actuación en la historia del país.',
    img: 55, badge: 'Nacional', category: 'Nacional', author: 'Carlos Huerta', date: '29 may 2026', time: '3 min',
    p1: 'México celebró la mejor actuación de su historia en la Olimpiada Internacional de Matemáticas, llevándose tres medallas de oro y dos de plata. Los jóvenes talentos, provenientes de distintos estados, demostraron su destreza en la competencia celebrada en Singapur.',
  }),
  make({
    title: 'Inauguran primer corredor ferroviario de carga 100% eléctrico',
    excerpt: 'El proyecto reduce las emisiones de carbono en un 80% y moderniza la logística de transporte de mercancías entre el centro y el norte del país.',
    img: 56, badge: 'Nacional', category: 'Nacional', author: 'Mariana Rojas', date: '28 may 2026', time: '6 min',
    p1: 'El primer corredor ferroviario de carga completamente eléctrico del país fue inaugurado, marcando un hito en la lucha contra el cambio climático. El proyecto reduce las emisiones de carbono en un 80% y moderniza la logística de transporte.',
  }),
  make({
    title: 'Programa de alfabetización digital llega a comunidades marginadas',
    excerpt: 'Más de 100.000 adultos mayores y personas en situación vulnerable aprenderán habilidades digitales básicas para acceder a servicios en línea.',
    img: 57, badge: 'Nacional', category: 'Nacional', author: 'Redacción SBN', date: '27 may 2026', time: '4 min',
    p1: 'Un ambicioso programa de alfabetización digital beneficiará a más de 100.000 adultos mayores y personas en situación vulnerable, enseñándoles habilidades digitales básicas para acceder a servicios gubernamentales, bancarios y de salud en línea.',
  }),

  // --- noticias-internacional (6) ---
  make({
    title: 'Acuerdo histórico: 50 países eliminarán plásticos de un solo uso',
    excerpt: 'El tratado firmado en Ottawa establece metas vinculantes para la reducción progresiva de plásticos con un horizonte de 2030.',
    img: 58, badge: 'Internacional', category: 'Internacional', author: 'Mariana Rojas', date: '30 may 2026', time: '4 min',
    p1: 'Cincuenta países firmaron en Ottawa un acuerdo histórico para eliminar progresivamente los plásticos de un solo uso para 2030. El tratado establece metas vinculantes y mecanismos de verificación para garantizar el cumplimiento.',
  }),
  make({
    title: 'Comunidad costera reforesta 50 kilómetros de manglares',
    excerpt: 'Más de 2.000 voluntarios participaron en la iniciativa internacional que devolvió la vida a ecosistemas clave para la biodiversidad marina.',
    img: 59, badge: 'Internacional', category: 'Internacional', author: 'Redacción SBN', date: '29 may 2026', time: '4 min',
    p1: 'En una muestra de cooperación internacional, más de 2.000 voluntarios de cinco países se unieron para reforestar 50 kilómetros de manglares en la costa del Pacífico, devolviendo la vida a ecosistemas clave para la biodiversidad marina.',
  }),
  make({
    title: 'Cumbre mundial de energía limpia establece metas ambiciosas',
    excerpt: 'Líderes de 80 países acordaron duplicar la capacidad de energía renovable para 2030 y destinar fondos para la transición energética en naciones en desarrollo.',
    img: 60, badge: 'Internacional', category: 'Internacional', author: 'Dr. Andrés Guerra', date: '28 may 2026', time: '6 min',
    p1: 'La Cumbre Mundial de Energía Limpia concluyó con acuerdos históricos: 80 países se comprometieron a duplicar su capacidad de energía renovable para 2030 y a crear un fondo de 100 mil millones de dólares para la transición energética en países en desarrollo.',
  }),
  make({
    title: 'Científicos desarrollan vacuna universal contra la influenza',
    excerpt: 'El nuevo fármaco, probado con éxito en 30.000 voluntarios, ofrece protección de por vida contra todas las cepas conocidas del virus.',
    img: 61, badge: 'Internacional', category: 'Internacional', author: 'Dra. Patricia Luna', date: '27 may 2026', time: '7 min',
    p1: 'Un equipo internacional de científicos ha desarrollado una vacuna universal contra la influenza que ofrece protección de por vida contra todas las cepas conocidas del virus. Probada con éxito en 30.000 voluntarios, la vacuna podría estar disponible en dos años.',
  }),
  make({
    title: 'Organización humanitaria lleva agua potable a 200 comunidades',
    excerpt: 'Mediante sistemas de filtración de bajo costo, más de 500.000 personas en África y América Latina ahora tienen acceso a agua limpia.',
    img: 62, badge: 'Internacional', category: 'Internacional', author: 'Sofía Mendoza', date: '26 may 2026', time: '5 min',
    p1: 'Una organización humanitaria ha logrado llevar agua potable a más de 200 comunidades en África y América Latina utilizando sistemas de filtración de bajo costo. Más de 500.000 personas ahora tienen acceso a agua limpia por primera vez en sus vidas.',
  }),
  make({
    title: 'Joven activista global lanza campaña de reforestación masiva',
    excerpt: 'La iniciativa #UnMillónDeÁrboles ha movilizado a voluntarios en más de 40 países para plantar árboles nativos en zonas deforestadas.',
    img: 63, badge: 'Internacional', category: 'Internacional', author: 'Carlos Huerta', date: '25 may 2026', time: '4 min',
    p1: 'Una joven activista de 19 años ha logrado movilizar a voluntarios en más de 40 países con su campaña #UnMillónDeÁrboles, que busca plantar árboles nativos en zonas deforestadas de todos los continentes.',
  }),

  // --- ciencia-tecnologia (6) ---
  make({
    title: 'IA ayuda a diagnosticar enfermedades raras en niños',
    excerpt: 'Un nuevo sistema desarrollado por investigadores mexicanos analiza patrones genéticos y síntomas para identificar enfermedades poco frecuentes.',
    img: 64, badge: 'Ciencia y Tecnología', category: 'Ciencia y Tecnología', author: 'Dr. Andrés Guerra', date: '30 may 2026', time: '6 min',
    p1: 'Investigadores mexicanos han creado un sistema de inteligencia artificial que analiza patrones genéticos y síntomas clínicos para diagnosticar enfermedades raras en niños con una precisión del 95%, reduciendo drásticamente el tiempo de diagnóstico.',
  }),
  make({
    title: 'Crean batería de origen vegetal biodegradable y económica',
    excerpt: 'Investigadores desarrollaron una batería a base de celulosa que podría reemplazar las baterías de litio en dispositivos de bajo consumo.',
    img: 65, badge: 'Ciencia y Tecnología', category: 'Ciencia y Tecnología', author: 'Mariana Rojas', date: '29 may 2026', time: '5 min',
    p1: 'Un equipo de investigadores ha desarrollado una batería biodegradable a base de celulosa que podría reemplazar las baterías de litio en dispositivos de bajo consumo, ofreciendo una alternativa ecológica y económica.',
  }),
  make({
    title: 'Nuevo satélite mexicano monitoreará el cambio climático',
    excerpt: 'El dispositivo, lanzado en colaboración con la NASA, proporcionará datos precisos sobre la deforestación y la calidad del aire en América Latina.',
    img: 66, badge: 'Ciencia y Tecnología', category: 'Ciencia y Tecnología', author: 'Redacción SBN', date: '28 may 2026', time: '7 min',
    p1: 'México lanzó al espacio un satélite de última generación en colaboración con la NASA que monitoreará la deforestación, la calidad del aire y los efectos del cambio climático en toda América Latina.',
  }),
  make({
    title: 'Robótica educativa llega a 500 escuelas públicas',
    excerpt: 'El programa dota a estudiantes de herramientas y conocimientos para diseñar y programar robots que resuelvan problemas de su comunidad.',
    img: 67, badge: 'Ciencia y Tecnología', category: 'Ciencia y Tecnología', author: 'Carlos Huerta', date: '27 may 2026', time: '4 min',
    p1: 'El programa de robótica educativa más grande del país llegará a 500 escuelas públicas, dotando a estudiantes de herramientas y conocimientos para diseñar y programar robots que resuelvan problemas reales de sus comunidades.',
  }),
  make({
    title: 'Imprimen en 3D órganos para trasplantes con tejido del paciente',
    excerpt: 'La tecnología reduce significativamente el riesgo de rechazo y elimina las largas listas de espera para donación de órganos.',
    img: 68, badge: 'Ciencia y Tecnología', category: 'Ciencia y Tecnología', author: 'Dra. Patricia Luna', date: '26 may 2026', time: '8 min',
    p1: 'La impresión 3D de órganos con tejido del propio paciente ha dado un salto revolucionario. Científicos lograron trasplantar con éxito riñones y tejido hepático impresos en 3D, eliminando el riesgo de rechazo y las largas listas de espera.',
  }),
  make({
    title: 'Desarrollan panel solar que funciona con luz artificial',
    excerpt: 'El innovador material fotovoltaico puede generar electricidad incluso en interiores, abriendo nuevas posibilidades para dispositivos IoT.',
    img: 69, badge: 'Ciencia y Tecnología', category: 'Ciencia y Tecnología', author: 'Sofía Mendoza', date: '25 may 2026', time: '5 min',
    p1: 'Un innovador panel solar capaz de generar electricidad a partir de luz artificial fue desarrollado por investigadores, abriendo nuevas posibilidades para alimentar dispositivos IoT en interiores sin necesidad de luz solar directa.',
  }),

  // --- ciencia-medicina (6) ---
  make({
    title: 'Terapia génica revierte la ceguera en pacientes hereditaria',
    excerpt: 'El tratamiento, aplicado por primera vez en América Latina, ha devuelto la visión parcial a siete pacientes con amaurosis congénita de Leber.',
    img: 70, badge: 'Medicina', category: 'Medicina', author: 'Dra. Patricia Luna', date: '29 may 2026', time: '7 min',
    p1: 'Siete pacientes que habían perdido la visión recuperaron parcialmente la vista gracias a una terapia génica aplicada por primera vez en América Latina. El tratamiento corrige el gen defectuoso responsable de la amaurosis congénita de Leber.',
  }),
  make({
    title: 'Descubren biomarcador que detecta el Alzheimer 10 años antes',
    excerpt: 'El hallazgo permitirá iniciar tratamientos preventivos en etapas tempranas, mejorando significativamente la calidad de vida de los pacientes.',
    img: 71, badge: 'Medicina', category: 'Medicina', author: 'Dr. Andrés Guerra', date: '28 may 2026', time: '6 min',
    p1: 'Un equipo de científicos ha identificado un biomarcador en la sangre que permite detectar el Alzheimer hasta 10 años antes de que aparezcan los primeros síntomas, abriendo la puerta a tratamientos preventivos en etapas tempranas.',
  }),
  make({
    title: 'Nuevo fármaco mexicano contra el cáncer entra en fase final',
    excerpt: 'El medicamento, desarrollado por científicos de la UNAM, ha mostrado resultados prometedores en la reducción de tumores sin efectos secundarios graves.',
    img: 72, badge: 'Medicina', category: 'Medicina', author: 'Redacción SBN', date: '27 may 2026', time: '8 min',
    p1: 'Un fármaco desarrollado por científicos de la UNAM ha entrado en su fase final de pruebas clínicas, mostrando resultados prometedores en la reducción de tumores sin los graves efectos secundarios de la quimioterapia tradicional.',
  }),
  make({
    title: 'App móvil ayuda a monitorear la salud mental de los jóvenes',
    excerpt: 'La herramienta gratuita ofrece evaluaciones diarias, recursos de apoyo y conexión inmediata con psicólogos certificados.',
    img: 73, badge: 'Medicina', category: 'Medicina', author: 'Sofía Mendoza', date: '26 may 2026', time: '4 min',
    p1: 'Una aplicación móvil gratuita está ayudando a miles de jóvenes a monitorear su salud mental. La herramienta ofrece evaluaciones diarias de estado de ánimo, recursos de apoyo y conexión inmediata con psicólogos certificados.',
  }),
  make({
    title: 'Hospital público reduce esperas un 60% con triaje inteligente',
    excerpt: 'El nuevo sistema digital prioriza pacientes según la urgencia y optimiza los recursos médicos disponibles en tiempo real.',
    img: 74, badge: 'Medicina', category: 'Medicina', author: 'Carlos Huerta', date: '25 may 2026', time: '5 min',
    p1: 'Un sistema de triaje inteligente basado en inteligencia artificial ha reducido los tiempos de espera en un hospital público en un 60%, priorizando a los pacientes según la gravedad y optimizando los recursos médicos en tiempo real.',
  }),
  make({
    title: 'Nanopartículas magnéticas eliminan bacterias resistentes',
    excerpt: 'Científicos desarrollan un método innovador para combatir infecciones causadas por superbacterias sin dañar las células sanas del cuerpo.',
    img: 75, badge: 'Medicina', category: 'Medicina', author: 'Mariana Rojas', date: '24 may 2026', time: '6 min',
    p1: 'Científicos han desarrollado nanopartículas magnéticas capaces de eliminar bacterias resistentes a los antibióticos sin dañar las células sanas del cuerpo, ofreciendo una nueva esperanza en la lucha contra las superbacterias.',
  }),

  // --- ciencia-psicologia (6) ---
  make({
    title: 'Estudio revela que la gratitud mejora la salud cardiovascular',
    excerpt: 'Personas que practican la gratitud diariamente mostraron una reducción del 15% en marcadores de inflamación y una mejor función cardíaca.',
    img: 76, badge: 'Psicología', category: 'Psicología', author: 'Sofía Mendoza', date: '28 may 2026', time: '4 min',
    p1: 'Un estudio publicado en una revista médica de prestigio reveló que las personas que practican la gratitud de manera regular muestran una reducción del 15% en marcadores de inflamación y una función cardíaca significativamente mejor.',
  }),
  make({
    title: 'Terapia con realidad virtual ayuda a superar fobias',
    excerpt: 'El tratamiento inmersivo ha demostrado una efectividad del 85% en pacientes con ansiedad social, miedo a volar y claustrofobia.',
    img: 77, badge: 'Psicología', category: 'Psicología', author: 'Dr. Andrés Guerra', date: '27 may 2026', time: '5 min',
    p1: 'La terapia con realidad virtual está revolucionando el tratamiento de las fobias. Con una efectividad del 85%, los pacientes se enfrentan gradualmente a sus miedos en entornos virtuales controlados, superando la ansiedad social, el miedo a volar y la claustrofobia.',
  }),
  make({
    title: 'Mindfulness en escuelas reduce el estrés y mejora el rendimiento',
    excerpt: 'Un programa piloto en 50 escuelas mostró que 10 minutos diarios de meditación mejoran la concentración y reducen la ansiedad en los estudiantes.',
    img: 78, badge: 'Psicología', category: 'Psicología', author: 'Redacción SBN', date: '26 may 2026', time: '4 min',
    p1: 'Diez minutos de meditación al día pueden transformar el ambiente escolar. Un programa piloto en 50 escuelas demostró que el mindfulness reduce significativamente el estrés y mejora la concentración y el rendimiento académico de los estudiantes.',
  }),
  make({
    title: 'El contacto con la naturaleza mejora la salud mental urbana',
    excerpt: 'Personas que pasan al menos 120 minutos a la semana en espacios verdes reportan niveles significativamente más bajos de estrés y depresión.',
    img: 79, badge: 'Psicología', category: 'Psicología', author: 'Laura Jiménez', date: '25 may 2026', time: '3 min',
    p1: 'La ciencia lo confirma: pasar al menos 120 minutos a la semana en espacios verdes reduce significativamente los niveles de estrés y depresión en habitantes de zonas urbanas, según un estudio realizado en varias ciudades del mundo.',
  }),
  make({
    title: 'La música clásica reduce la ansiedad en pacientes prequirúrgicos',
    excerpt: 'Pacientes que escucharon música clásica antes de una cirugía mostraron una reducción del 40% en los niveles de cortisol.',
    img: 80, badge: 'Psicología', category: 'Psicología', author: 'Carlos Huerta', date: '24 may 2026', time: '4 min',
    p1: 'Escuchar música clásica antes de una cirugía reduce la ansiedad en un 40%. Así lo demuestra un estudio que midió los niveles de cortisol en pacientes que escucharon Mozart y Beethoven antes de entrar al quirófano.',
  }),
  make({
    title: 'Nueva terapia breve para tratar el insomnio crónico',
    excerpt: 'El tratamiento de solo cuatro sesiones ha demostrado ser tan efectivo como los enfoques tradicionales de larga duración.',
    img: 81, badge: 'Psicología', category: 'Psicología', author: 'Dra. Patricia Luna', date: '23 may 2026', time: '5 min',
    p1: 'Una nueva terapia breve de solo cuatro sesiones está demostrando ser tan efectiva como los tratamientos tradicionales de larga duración para el insomnio crónico, ofreciendo una solución rápida y accesible para quienes sufren de este trastorno.',
  }),

  // --- ciencia-medio-ambiente (6) ---
  make({
    title: 'Sistema de riego inteligente reduce el consumo de agua un 70%',
    excerpt: 'Basado en sensores de humedad e IA, el sistema optimiza el uso del agua en cultivos de zonas áridas y ya opera en cinco estados del norte.',
    img: 82, badge: 'Medio Ambiente', category: 'Medio Ambiente', author: 'Mariana Rojas', date: '28 may 2026', time: '4 min',
    p1: 'Un sistema de riego inteligente basado en sensores de humedad e inteligencia artificial está revolucionando la agricultura en zonas áridas del norte del país, reduciendo el consumo de agua en un 70% y mejorando la productividad de los cultivos.',
  }),
  make({
    title: 'Método revolucionario para limpiar los océanos en una década',
    excerpt: 'Nanopartículas magnéticas absorben microplásticos del agua de mar sin dañar la vida marina, con una eficacia del 90%.',
    img: 83, badge: 'Medio Ambiente', category: 'Medio Ambiente', author: 'Mariana Rojas', date: '27 may 2026', time: '8 min',
    p1: 'Un método innovador que utiliza nanopartículas magnéticas promete limpiar los océanos de microplásticos en una década. El sistema, probado con éxito en el Pacífico, elimina hasta el 90% de los residuos plásticos sin dañar la vida marina.',
  }),
  make({
    title: 'Comunidad costera reforesta 50 km de manglares en el Golfo',
    excerpt: 'Miles de voluntarios restauraron ecosistemas clave para la biodiversidad y la protección contra tormentas en el Golfo de México.',
    img: 84, badge: 'Medio Ambiente', category: 'Medio Ambiente', author: 'Redacción SBN', date: '26 may 2026', time: '4 min',
    p1: 'Miles de voluntarios de comunidades costeras se unieron para reforestar 50 kilómetros de manglares en el Golfo de México, restaurando ecosistemas vitales para la biodiversidad y la protección contra tormentas y huracanes.',
  }),
  make({
    title: 'Nueva tecnología convierte desechos plásticos en combustible limpio',
    excerpt: 'El proceso de pirólisis catalítica transforma plásticos no reciclables en hidrógeno verde, reduciendo la contaminación por residuos.',
    img: 85, badge: 'Medio Ambiente', category: 'Medio Ambiente', author: 'Dr. Andrés Guerra', date: '25 may 2026', time: '6 min',
    p1: 'Una nueva tecnología de pirólisis catalítica está transformando desechos plásticos no reciclables en hidrógeno verde, ofreciendo una solución doble: reducir la contaminación por plásticos y generar combustible limpio.',
  }),
  make({
    title: 'Panel solar biodegradable de bajo costo para comunidades remotas',
    excerpt: 'Desarrollado por una científica mexicana, el panel se descompone naturalmente al final de su vida útil sin generar residuos tóxicos.',
    img: 86, badge: 'Medio Ambiente', category: 'Medio Ambiente', author: 'Sofía Mendoza', date: '24 may 2026', time: '5 min',
    p1: 'Una científica mexicana ha desarrollado un panel solar biodegradable de bajo costo que al final de su vida útil se descompone naturalmente sin generar residuos tóxicos, ideal para llevar electricidad a comunidades remotas.',
  }),
  make({
    title: 'Reserva marina protegida duplica la población de especies nativas',
    excerpt: 'Tras cinco años de restricciones pesqueras, la reserva ha visto un aumento del 120% en la biodiversidad y la recuperación de especies amenazadas.',
    img: 87, badge: 'Medio Ambiente', category: 'Medio Ambiente', author: 'Carlos Huerta', date: '23 may 2026', time: '4 min',
    p1: 'La creación de una reserva marina protegida ha dado resultados espectaculares: en solo cinco años, la población de especies nativas se duplicó y la biodiversidad aumentó un 120%, demostrando que la protección de los océanos funciona.',
  }),

  // --- inspiracion-historias (6) ---
  make({
    title: 'De vendedor ambulante a ingeniero de software',
    excerpt: 'José María logró titularse como ingeniero a los 42 años, demostrando que nunca es tarde para cumplir los sueños y reinventarse profesionalmente.',
    img: 88, badge: 'Historias que Inspiran', category: 'Historias que Inspiran', author: 'Sofía Mendoza', date: '27 may 2026', time: '5 min',
    p1: 'José María pasó de vender dulces en los semáforos a convertirse en ingeniero de software a los 42 años. Su historia de perseverancia y determinación demuestra que nunca es tarde para reinventarse y cumplir los sueños.',
  }),
  make({
    title: 'Abuelita de 80 años aprende a leer y escribir para cumplir su sueño',
    excerpt: 'Doña María asistió a clases nocturnas durante dos años y hoy disfruta leyendo cuentos a sus bisnietos.',
    img: 89, badge: 'Historias que Inspiran', category: 'Historias que Inspiran', author: 'Laura Jiménez', date: '26 may 2026', time: '4 min',
    p1: 'A los 80 años, doña María cumplió el sueño de su vida: aprender a leer y escribir. Durante dos años asistió a clases nocturnas sin faltar un solo día, y hoy disfruta leyendo cuentos a sus bisnietos con una sonrisa que ilumina el aula.',
  }),
  make({
    title: 'Joven con parálisis cerebral lanza exitosa startup tecnológica',
    excerpt: 'Con software de reconocimiento de voz y determinación inquebrantable, creó una empresa que emplea a personas con discapacidades.',
    img: 90, badge: 'Historias que Inspiran', category: 'Historias que Inspiran', author: 'Carlos Huerta', date: '25 may 2026', time: '6 min',
    p1: 'Un joven con parálisis cerebral ha demostrado que no hay barreras que la tecnología y la determinación no puedan superar. Con software de reconocimiento de voz, fundó una startup tecnológica que ahora emplea a personas con discapacidades.',
  }),
  make({
    title: 'Pescador se convierte en guardián del santuario de tortugas marinas',
    excerpt: 'Don Roberto pasó de cazar tortugas a protegerlas, y hoy lidera un programa comunitario que ha salvado a miles de crías.',
    img: 91, badge: 'Historias que Inspiran', category: 'Historias que Inspiran', author: 'Mariana Rojas', date: '24 may 2026', time: '5 min',
    p1: 'Don Roberto pasó de ser cazador de tortugas a convertirse en su más feroz protector. Hoy lidera un programa comunitario que ha salvado a miles de crías y ha transformado la conciencia ecológica de toda su comunidad pesquera.',
  }),
  make({
    title: 'Exrecluso funda panadería que emplea a personas reintegradas',
    excerpt: 'Su negocio ha dado empleo a más de 30 personas que buscan una segunda oportunidad, con un modelo de acompañamiento integral.',
    img: 92, badge: 'Historias que Inspiran', category: 'Historias que Inspiran', author: 'Redacción SBN', date: '23 may 2026', time: '4 min',
    p1: 'Después de cumplir su condena, Juan fundó una panadería que hoy da empleo a más de 30 personas que buscan una segunda oportunidad. Su modelo de negocio incluye acompañamiento psicológico y capacitación laboral integral.',
  }),
  make({
    title: 'Mujer transgénero abre el primer refugio LGBTIQ+ del estado',
    excerpt: 'Su iniciativa ha brindado techo, alimento y apoyo psicológico a más de 200 jóvenes rechazados por sus familias.',
    img: 93, badge: 'Historias que Inspiran', category: 'Historias que Inspiran', author: 'Sofía Mendoza', date: '22 may 2026', time: '5 min',
    p1: 'Tras vivir en carne propia el rechazo familiar, Ana decidió abrir el primer refugio LGBTIQ+ del estado. Su iniciativa ha brindado techo, alimento y apoyo psicológico a más de 200 jóvenes que fueron rechazados por sus familias.',
  }),

  // --- inspiracion-heroes (6) ---
  make({
    title: 'Maestra rural recorre 20 km diarios para llevar educación a la montaña',
    excerpt: 'La profesora Elena García no ha faltado un solo día a su escuela, donde 30 niños aprenden con la esperanza de un futuro mejor.',
    img: 94, badge: 'Héroes de Carne y Hueso', category: 'Héroes de Carne y Hueso', author: 'Carlos Huerta', date: '26 may 2026', time: '4 min',
    p1: 'La profesora Elena García camina 20 kilómetros diarios entre ida y vuelta para llegar a su escuela en la montaña. Sin importar el clima, no ha faltado un solo día a su clase, donde 30 niños aprenden con la esperanza de un futuro mejor.',
  }),
  make({
    title: 'Bombero voluntario ha salvado a más de 500 personas en 20 años',
    excerpt: 'Don Ricardo ha dedicado su vida al servicio comunitario sin recibir un salario, movido por su compromiso con los demás.',
    img: 95, badge: 'Héroes de Carne y Hueso', category: 'Héroes de Carne y Hueso', author: 'Redacción SBN', date: '25 may 2026', time: '5 min',
    p1: 'Don Ricardo es bombero voluntario desde hace 20 años y ha salvado más de 500 vidas sin recibir un salario. Su compromiso con la comunidad lo ha llevado a arriesgar su propia vida en incontables ocasiones.',
  }),
  make({
    title: 'Doctora indígena lleva medicina tradicional a hospitales públicos',
    excerpt: 'Su enfoque combina conocimientos ancestrales con la medicina moderna, ofreciendo tratamientos integrales a pacientes de comunidades originarias.',
    img: 96, badge: 'Héroes de Carne y Hueso', category: 'Héroes de Carne y Hueso', author: 'Dra. Patricia Luna', date: '24 may 2026', time: '6 min',
    p1: 'La doctora María Toledo, médica tradicional zapoteca, ha logrado integrar sus conocimientos ancestrales con la medicina moderna en hospitales públicos, ofreciendo tratamientos integrales que respetan la cosmovisión de las comunidades originarias.',
  }),
  make({
    title: 'Joven construye prótesis impresas en 3D para personas de bajos recursos',
    excerpt: 'Ha entregado más de 200 prótesis funcionales de manera gratuita, devolviendo la movilidad a quienes no podían costearlas.',
    img: 97, badge: 'Héroes de Carne y Hueso', category: 'Héroes de Carne y Hueso', author: 'Sofía Mendoza', date: '23 may 2026', time: '4 min',
    p1: 'Un joven ingeniero ha entregado más de 200 prótesis funcionales impresas en 3D de manera completamente gratuita a personas de bajos recursos, devolviendo la movilidad y la esperanza a quienes no podían costear una prótesis comercial.',
  }),
  make({
    title: 'Cocinera comunitaria alimenta a 300 personas diarias en su hogar',
    excerpt: 'Doña Clara convirtió su casa en un comedor comunitario donde nadie se queda sin comer, apoyada por donaciones de sus vecinos.',
    img: 98, badge: 'Héroes de Carne y Hueso', category: 'Héroes de Carne y Hueso', author: 'Laura Jiménez', date: '22 may 2026', time: '3 min',
    p1: 'Doña Clara convirtió su modesta casa en un comedor comunitario donde cada día alimenta a 300 personas. Apoyada por donaciones de vecinos y comercios locales, su lema es simple: aquí nadie se queda sin comer.',
  }),
  make({
    title: 'Activista limpia ríos contaminados desde hace 15 años',
    excerpt: 'Su labor ha recuperado más de 100 kilómetros de causes fluviales, inspirando a comunidades enteras a cuidar sus recursos hídricos.',
    img: 99, badge: 'Héroes de Carne y Hueso', category: 'Héroes de Carne y Hueso', author: 'Mariana Rojas', date: '21 may 2026', time: '5 min',
    p1: 'Quince años de trabajo incansable han convertido a don Antonio en el guardián de los ríos de su región. Su labor ha recuperado más de 100 kilómetros de causes fluviales, inspirando a comunidades enteras a cuidar sus recursos hídricos.',
  }),

  // --- inspiracion-mujeres (6) ---
  make({
    title: 'Científica mexicana gana premio internacional por energías limpias',
    excerpt: 'La doctora Valeria Campos desarrolló un panel solar biodegradable de bajo costo para comunidades sin acceso a la red eléctrica.',
    img: 100, badge: 'Mujeres Talentosas', category: 'Mujeres Talentosas', author: 'Sofía Mendoza', date: '25 may 2026', time: '3 min',
    p1: 'La doctora Valeria Campos recibió el Premio Mundial de Energía Limpia por su innovador panel solar biodegradable, una solución de bajo costo que promete llevar electricidad a comunidades sin acceso a la red eléctrica.',
  }),
  make({
    title: 'Mujer rural crea cooperativa que exporta café orgánico a Europa',
    excerpt: 'Doña Juana transformó la economía de su comunidad al organizar a 80 mujeres productoras y obtener certificaciones internacionales de calidad.',
    img: 101, badge: 'Mujeres Talentosas', category: 'Mujeres Talentosas', author: 'Mariana Rojas', date: '24 may 2026', time: '5 min',
    p1: 'Doña Juana, una mujer rural de Oaxaca, transformó la economía de su comunidad al organizar a 80 mujeres productoras de café. Hoy exportan café orgánico de especialidad a mercados de Europa y Estados Unidos.',
  }),
  make({
    title: 'Abogada indígena defiende los derechos de su pueblo ante la ONU',
    excerpt: 'Su lucha ha logrado el reconocimiento de territorios ancestrales y la implementación de políticas de protección cultural en tres países.',
    img: 102, badge: 'Mujeres Talentosas', category: 'Mujeres Talentosas', author: 'Redacción SBN', date: '23 may 2026', time: '6 min',
    p1: 'Una abogada indígena ha llevado la defensa de los derechos de su pueblo hasta la Organización de las Naciones Unidas. Su lucha ha logrado el reconocimiento de territorios ancestrales en tres países.',
  }),
  make({
    title: 'Ingeniera mexicana lidera misión espacial de la NASA',
    excerpt: 'Por primera vez una mexicana dirige una misión de exploración en Marte, inspirando a miles de niñas a estudiar ciencias.',
    img: 103, badge: 'Mujeres Talentosas', category: 'Mujeres Talentosas', author: 'Dr. Andrés Guerra', date: '22 may 2026', time: '7 min',
    p1: 'Por primera vez en la historia, una ingeniera mexicana dirige una misión de exploración en Marte para la NASA. Su liderazgo ha inspirado a miles de niñas en todo el país a estudiar carreras científicas y tecnológicas.',
  }),
  make({
    title: 'Joven diseñadora crea moda sustentable con textiles reciclados',
    excerpt: 'Su marca ha evitado que más de 10 toneladas de ropa terminen en vertederos, combinando estilo con responsabilidad ambiental.',
    img: 104, badge: 'Mujeres Talentosas', category: 'Mujeres Talentosas', author: 'Laura Jiménez', date: '21 may 2026', time: '4 min',
    p1: 'Una joven diseñadora mexicana está revolucionando la industria de la moda con su marca sustentable. Utilizando textiles reciclados, ha evitado que más de 10 toneladas de ropa terminen en vertederos.',
  }),
  make({
    title: 'Entrenadora paralímpica forma campeones desde la periferia',
    excerpt: 'Ha preparado a 12 atletas que han ganado medallas en Juegos Paralímpicos, entrenando en una cancha prestada con equipo donado.',
    img: 105, badge: 'Mujeres Talentosas', category: 'Mujeres Talentosas', author: 'Carlos Huerta', date: '20 may 2026', time: '5 min',
    p1: 'Con una cancha prestada y equipo donado, una entrenadora paralímpica ha formado a 12 atletas que han ganado medallas en Juegos Paralímpicos, demostrando que el talento y la dedicación pueden superar cualquier carencia.',
  }),

  // --- inspiracion-entrevistas (6) ---
  make({
    title: 'Entrevista con el activista ambiental que inspiró a millones',
    excerpt: 'Conversamos con quien ha dedicado su vida a proteger los océanos y ha movilizado a gobiernos de todo el mundo para reducir la contaminación plástica.',
    img: 106, badge: 'Entrevistas', category: 'Entrevistas', author: 'Mariana Rojas', date: '24 may 2026', time: '12 min',
    p1: 'En una entrevista exclusiva, el activista ambiental que ha movilizado a gobiernos de todo el mundo comparte su visión sobre la crisis de los océanos y las soluciones que están transformando la política ambiental global.',
  }),
  make({
    title: 'El chef que transforma la gastronomía con ingredientes locales',
    excerpt: 'Su restaurante de cero desperdicio ha sido reconocido como uno de los mejores del mundo por su enfoque sostenible y su cocina de autor.',
    img: 107, badge: 'Entrevistas', category: 'Entrevistas', author: 'Laura Jiménez', date: '23 may 2026', time: '10 min',
    p1: 'El chef propietario del primer restaurante cero desperdicio de América Latina nos recibe en su cocina para hablar de su filosofía culinaria, el uso de ingredientes locales y el reconocimiento internacional que ha puesto a México en el mapa gastronómico mundial.',
  }),
  make({
    title: 'La maestra que revolucionó la educación en su comunidad',
    excerpt: 'Con métodos pedagógicos innovadores y recursos limitados, logró que sus alumnos obtuvieran los puntajes más altos en las pruebas estatales.',
    img: 108, badge: 'Entrevistas', category: 'Entrevistas', author: 'Carlos Huerta', date: '22 may 2026', time: '8 min',
    p1: 'Con métodos pedagógicos innovadores y recursos limitados, una maestra de primaria logró que sus alumnos obtuvieran los puntajes más altos en las pruebas estatales, demostrando que la calidad educativa no depende de la infraestructura sino de la dedicación.',
  }),
  make({
    title: 'El músico que lleva conciertos de piano a hospitales',
    excerpt: 'Su iniciativa Musicoterapia ha llevado alivio y esperanza a miles de pacientes hospitalizados, demostrando el poder curativo de la música.',
    img: 109, badge: 'Entrevistas', category: 'Entrevistas', author: 'Sofía Mendoza', date: '21 may 2026', time: '9 min',
    p1: 'Un pianista profesional ha dedicado los últimos cinco años a llevar conciertos a hospitales públicos. Su iniciativa Musicoterapia ha demostrado el poder curativo de la música, llevando alivio y esperanza a miles de pacientes hospitalizados.',
  }),
  make({
    title: 'Entrevista con la primera astronauta latinoamericana',
    excerpt: 'Comparte su increíble viaje desde un pequeño pueblo hasta la Estación Espacial Internacional y su visión para el futuro de la exploración.',
    img: 110, badge: 'Entrevistas', category: 'Entrevistas', author: 'Dr. Andrés Guerra', date: '20 may 2026', time: '15 min',
    p1: 'La primera astronauta latinoamericana nos recibe para compartir su increíble historia: desde un pequeño pueblo hasta la Estación Espacial Internacional. Su visión del futuro de la exploración espacial y su mensaje para las nuevas generaciones.',
  }),
  make({
    title: 'El psicólogo que ayuda a miles con sus videos virales',
    excerpt: 'Sus consejos de salud mental han alcanzado a más de 10 millones de personas, rompiendo estigmas y ofreciendo herramientas prácticas.',
    img: 111, badge: 'Entrevistas', category: 'Entrevistas', author: 'Redacción SBN', date: '19 may 2026', time: '7 min',
    p1: 'Un psicólogo mexicano se ha convertido en un fenómeno viral compartiendo consejos de salud mental en redes sociales. Sus videos han alcanzado a más de 10 millones de personas, rompiendo estigmas y ofreciendo herramientas prácticas para el bienestar emocional.',
  }),

  // --- cultura-cultura (6) ---
  make({
    title: 'Festival de cine documental llega a comunidades indígenas',
    excerpt: 'El festival itinerante proyectará más de 40 documentales en 12 comunidades, con entrada gratuita y talleres de realización cinematográfica.',
    img: 112, badge: 'Cultura', category: 'Cultura', author: 'Laura Jiménez', date: '24 may 2026', time: '4 min',
    p1: 'El cine documental itinerante llegará a 12 comunidades indígenas del país con una programación de más de 40 documentales y talleres gratuitos de realización cinematográfica para jóvenes.',
  }),
  make({
    title: 'Compañía de danza contemporánea presenta obra sobre migración',
    excerpt: 'La puesta en escena combina música tradicional y tecnología multimedia para contar las historias de quienes cruzan fronteras en busca de un mejor futuro.',
    img: 113, badge: 'Cultura', category: 'Cultura', author: 'Redacción SBN', date: '23 may 2026', time: '3 min',
    p1: 'Una compañía de danza contemporánea estrenó una obra multimedia que aborda el fenómeno de la migración a través del movimiento, la música tradicional y proyecciones digitales, ofreciendo una experiencia artística conmovedora.',
  }),
  make({
    title: 'Museo comunitario preserva la memoria de un pueblo minero',
    excerpt: 'Ex trabajadores de la mina restauraron fotografías, herramientas y documentos que narran más de un siglo de historia regional.',
    img: 114, badge: 'Cultura', category: 'Cultura', author: 'Carlos Huerta', date: '22 may 2026', time: '5 min',
    p1: 'Ex trabajadores mineros se unieron para crear un museo comunitario que preserva la memoria de su pueblo. Con sus propias manos restauraron fotografías, herramientas y documentos que narran más de un siglo de historia.',
  }),
  make({
    title: 'Concurso de fotografía callejera atrae a talentos emergentes',
    excerpt: 'Más de 500 fotógrafos aficionados participaron capturando la esencia de la vida urbana en una exposición al aire libre.',
    img: 115, badge: 'Cultura', category: 'Cultura', author: 'Sofía Mendoza', date: '21 may 2026', time: '3 min',
    p1: 'Más de 500 fotógrafos aficionados participaron en el concurso anual de fotografía callejera, capturando la esencia de la vida urbana en imágenes que fueron exhibidas en una galería al aire libre en el centro histórico.',
  }),
  make({
    title: 'Orquesta sinfónica juvenil ofrece conciertos gratuitos en parques',
    excerpt: 'Jóvenes músicos de escasos recursos llevan música clásica a espacios públicos, acercando el arte a comunidades vulnerables.',
    img: 116, badge: 'Cultura', category: 'Cultura', author: 'Laura Jiménez', date: '20 may 2026', time: '4 min',
    p1: 'Una orquesta sinfónica compuesta por jóvenes de escasos recursos ofrece conciertos gratuitos en parques de la ciudad, democratizando el acceso a la música clásica y llevando arte a comunidades vulnerables.',
  }),
  make({
    title: 'Rescatan técnicas textiles ancestrales en peligro de extinción',
    excerpt: 'Artesanas de tres generaciones trabajan juntas para documentar y enseñar métodos tradicionales de tejido a nuevas generaciones.',
    img: 117, badge: 'Cultura', category: 'Cultura', author: 'Mariana Rojas', date: '19 may 2026', time: '6 min',
    p1: 'Artesanas de tres generaciones se han unido para rescatar técnicas textiles ancestrales que estaban en peligro de desaparecer. Juntas documentan y enseñan métodos tradicionales de tejido a las nuevas generaciones.',
  }),

  // --- cultura-consejos (6) ---
  make({
    title: 'Cinco hábitos matutinos que transformarán tu productividad',
    excerpt: 'Especialistas en psicología positiva comparten una rutina de 20 minutos que combina meditación, ejercicio y lectura para empezar el día con energía.',
    img: 118, badge: 'Consejos', category: 'Consejos', author: 'Redacción SBN', date: '23 may 2026', time: '3 min',
    p1: 'Especialistas en psicología positiva han diseñado una rutina matutina de 20 minutos que combina meditación, ejercicio y lectura para maximizar la productividad y el bienestar desde las primeras horas del día.',
  }),
  make({
    title: 'Cómo crear un huerto en casa con poco espacio',
    excerpt: 'Guía práctica para cultivar tus propios alimentos en departamentos pequeños con técnicas de jardinería vertical y macetas inteligentes.',
    img: 119, badge: 'Consejos', category: 'Consejos', author: 'Mariana Rojas', date: '22 may 2026', time: '5 min',
    p1: 'No necesitas un gran jardín para cultivar tus propios alimentos. Con técnicas de jardinería vertical, macetas inteligentes y un poco de creatividad, cualquier departamento puede convertirse en un huerto urbano productivo.',
  }),
  make({
    title: 'Diez libros que cambiarán tu forma de ver el mundo',
    excerpt: 'Una selección de lecturas recomendadas por bibliotecarios y críticos literarios para expandir tu mente y alimentar tu espíritu.',
    img: 120, badge: 'Consejos', category: 'Consejos', author: 'Laura Jiménez', date: '21 may 2026', time: '4 min',
    p1: 'Bibliotecarios y críticos literarios recomiendan diez libros que tienen el poder de cambiar la forma en que vemos el mundo, ofreciendo perspectivas únicas sobre la vida, la sociedad y el ser humano.',
  }),
  make({
    title: 'Ejercicios de respiración para reducir la ansiedad en minutos',
    excerpt: 'Técnicas simples y efectivas basadas en la respiración diafragmática que puedes practicar en cualquier lugar y momento.',
    img: 121, badge: 'Consejos', category: 'Consejos', author: 'Dr. Andrés Guerra', date: '20 may 2026', time: '3 min',
    p1: 'Técnicas simples de respiración diafragmática pueden reducir la ansiedad en cuestión de minutos. Estos ejercicios, basados en la medicina tradicional y validados por la ciencia moderna, se pueden practicar en cualquier lugar.',
  }),
  make({
    title: 'Guía para adoptar un estilo de vida cero desperdicios',
    excerpt: 'Pequeños cambios en tu rutina diaria que reducen significativamente la generación de residuos y ayudan a cuidar el planeta.',
    img: 122, badge: 'Consejos', category: 'Consejos', author: 'Sofía Mendoza', date: '19 may 2026', time: '6 min',
    p1: 'Adoptar un estilo de vida cero desperdicios es más fácil de lo que parece. Pequeños cambios en la rutina diaria pueden reducir significativamente la generación de residuos y contribuir a cuidar el planeta.',
  }),
  make({
    title: 'Cómo organizar tus finanzas personales en 30 días',
    excerpt: 'Un plan paso a paso para salir de deudas, ahorrar e invertir sin ser un experto en economía.',
    img: 123, badge: 'Consejos', category: 'Consejos', author: 'Carlos Huerta', date: '18 may 2026', time: '5 min',
    p1: 'Un plan de 30 días para organizar tus finanzas personales sin necesidad de ser un experto en economía. Paso a paso, aprenderás a salir de deudas, crear un fondo de ahorro e invertir para el futuro.',
  }),

  // --- cultura-deporte (6) ---
  make({
    title: 'Atleta paralímpico rompe récord mundial e inspira a generaciones',
    excerpt: 'Con una marca de 1:45.3 en los 800 metros, el corredor mexicano superó su propio récord y dedicó la victoria a los jóvenes que sueñan con superar la adversidad.',
    img: 124, badge: 'Deporte', category: 'Deporte', author: 'Carlos Huerta', date: '22 may 2026', time: '5 min',
    p1: 'El atleta paralímpico mexicano volvió a hacer historia al romper su propio récord mundial en los 800 metros planos. Su victoria es un mensaje de esperanza para todos los jóvenes que enfrentan adversidades.',
  }),
  make({
    title: 'Escuela de boxeo gratuita mantiene a jóvenes alejados de la violencia',
    excerpt: 'El gimnasio comunitario ha formado a más de 300 jóvenes, varios de los cuales han llegado a competir en torneos nacionales e internacionales.',
    img: 125, badge: 'Deporte', category: 'Deporte', author: 'Redacción SBN', date: '21 may 2026', time: '4 min',
    p1: 'Un gimnasio de boxeo gratuito en un barrio marginado ha logrado mantener a más de 300 jóvenes alejados de la violencia, formando campeones dentro y fuera del ring.',
  }),
  make({
    title: 'Maratonista de 70 años completa su carrera número 100',
    excerpt: 'Don José demuestra que la edad no es un límite y se ha convertido en un símbolo de perseverancia para su comunidad.',
    img: 126, badge: 'Deporte', category: 'Deporte', author: 'Laura Jiménez', date: '20 may 2026', time: '3 min',
    p1: 'A los 70 años, don José completó su maratón número 100, demostrando que la edad no es un límite cuando hay pasión y disciplina. Su hazaña lo ha convertido en un símbolo de perseverancia.',
  }),
  make({
    title: 'Niña de 12 años gana torneo internacional de ajedrez',
    excerpt: 'La joven prodigio derrotó a competidores de 15 países y se convirtió en la campeona más joven en la historia del torneo.',
    img: 127, badge: 'Deporte', category: 'Deporte', author: 'Sofía Mendoza', date: '19 may 2026', time: '4 min',
    p1: 'Una niña mexicana de 12 años se coronó campeona del torneo internacional de ajedrez, derrotando a competidores de 15 países y convirtiéndose en la campeona más joven en la historia de la competencia.',
  }),
  make({
    title: 'Liga femenil de fútbol crece un 300% en dos años',
    excerpt: 'El número de equipos y jugadoras se ha triplicado, impulsado por políticas de inclusión y patrocinios que garantizan salarios justos.',
    img: 128, badge: 'Deporte', category: 'Deporte', author: 'Mariana Rojas', date: '18 may 2026', time: '5 min',
    p1: 'La liga femenil de fútbol ha experimentado un crecimiento explosivo del 300% en solo dos años, impulsada por políticas de inclusión y patrocinios que garantizan salarios justos para las jugadoras.',
  }),
  make({
    title: 'Skatepark gratuito transforma un barrio marginado',
    excerpt: 'Jóvenes que antes pasaban el tiempo en la calle ahora practican skateboarding y organizan competencias que unen a la comunidad.',
    img: 129, badge: 'Deporte', category: 'Deporte', author: 'Carlos Huerta', date: '17 may 2026', time: '4 min',
    p1: 'La construcción de un skatepark gratuito transformó un barrio marginado: los jóvenes que antes pasaban el tiempo en la calle ahora practican skateboarding y organizan competencias que unen a toda la comunidad.',
  }),

  // --- cultura-economia (6) ---
  make({
    title: 'Monedero digital gratuito beneficia a trabajadores informales',
    excerpt: 'La aplicación permite a más de 100.000 trabajadores recibir pagos, ahorrar y acceder a microcréditos sin necesidad de cuenta bancaria.',
    img: 130, badge: 'Economía', category: 'Economía', author: 'Redacción SBN', date: '21 may 2026', time: '5 min',
    p1: 'Una aplicación de monedero digital gratuita está beneficiando a más de 100.000 trabajadores informales, permitiéndoles recibir pagos, ahorrar y acceder a microcréditos sin necesidad de una cuenta bancaria tradicional.',
  }),
  make({
    title: 'Cooperativa de mujeres artesanas triplica sus ingresos exportando',
    excerpt: 'Gracias a una plataforma de comercio justo, 50 artesanas ahora venden sus productos en mercados de Estados Unidos y Europa.',
    img: 131, badge: 'Economía', category: 'Economía', author: 'Mariana Rojas', date: '20 may 2026', time: '4 min',
    p1: 'Cincuenta mujeres artesanas de Oaxaca triplicaron sus ingresos al empezar a exportar sus productos a través de una plataforma de comercio justo que las conecta directamente con compradores en Estados Unidos y Europa.',
  }),
  make({
    title: 'Programa de educación financiera llega a 500 escuelas',
    excerpt: 'Estudiantes de secundaria aprenden a administrar su dinero, ahorrar e invertir desde temprana edad con herramientas prácticas y lúdicas.',
    img: 132, badge: 'Economía', category: 'Economía', author: 'Carlos Huerta', date: '19 may 2026', time: '3 min',
    p1: 'Un programa de educación financiera llegará a 500 escuelas secundarias del país, enseñando a los estudiantes a administrar su dinero, ahorrar e invertir desde temprana edad con herramientas prácticas y lúdicas.',
  }),
  make({
    title: 'Tianguis digital conecta a productores locales con consumidores',
    excerpt: 'La plataforma elimina intermediarios y permite que los agricultores reciban el 90% del precio final de sus productos.',
    img: 133, badge: 'Economía', category: 'Economía', author: 'Sofía Mendoza', date: '18 may 2026', time: '4 min',
    p1: 'Un tianguis digital está conectando directamente a productores locales con consumidores, eliminando intermediarios y permitiendo que los agricultores reciban el 90% del precio final de sus productos.',
  }),
  make({
    title: 'Incubadora de negocios verdes apoya a emprendedores sustentables',
    excerpt: 'Más de 30 startups ambientales han recibido financiamiento y mentoría para desarrollar soluciones innovadoras a problemas ecológicos.',
    img: 134, badge: 'Economía', category: 'Economía', author: 'Dr. Andrés Guerra', date: '17 may 2026', time: '6 min',
    p1: 'Una incubadora de negocios verdes ha apoyado a más de 30 startups ambientales con financiamiento y mentoría, impulsando soluciones innovadoras a problemas ecológicos como la contaminación y el cambio climático.',
  }),
  make({
    title: 'Turismo comunitario genera empleos en zonas rurales marginadas',
    excerpt: 'Familias abren sus hogares a viajeros ofreciendo experiencias auténticas que preservan tradiciones y generan ingresos sostenibles.',
    img: 135, badge: 'Economía', category: 'Economía', author: 'Laura Jiménez', date: '16 may 2026', time: '5 min',
    p1: 'El turismo comunitario está generando empleos en zonas rurales marginadas, donde familias abren sus hogares a viajeros ofreciendo experiencias auténticas que preservan tradiciones y generan ingresos sostenibles.',
  }),
]

export function getArticleBySlug(slug) {
  return allArticles.find(a => a.slug === slug)
}

export function getRelatedArticles(current, count = 3) {
  const sameCat = allArticles.filter(a => a.slug !== current.slug && a.category === current.category)
  if (sameCat.length >= count) return sameCat.slice(0, count)
  const others = allArticles.filter(a => a.slug !== current.slug && a.category !== current.category)
  return [...sameCat, ...others].slice(0, count)
}

export const homeArticleSlugs = [
  'comunidad-costera-logra-reforestar-50-kilometros-de-manglares',
  'cientificos-crean-un-dispositivo-portatil-que-detecta-enfermedades-en-segundos',
  'joven-emprendedora-crea-app-que-conecta-voluntarios-con-causas-sociales',
  'programa-de-mentoria-reduce-brecha-educativa-en-zonas-rurales',
  'bibliotecas-moviles-llevan-lectura-a-comunidades-sin-acceso-a-libros',
  'hospital-publico-reduce-tiempos-de-espera-con-nuevo-sistema-digital',
]

export const noticiasArticleSlugs = [
  'nueva-biblioteca-publica-abre-sus-puertas-con-mas-de-20000-ejemplares',
  'anuncian-programa-de-becas-para-estudiantes-de-comunidades-indigenas',
  'inicia-campana-nacional-de-reforestacion-con-meta-de-10-millones-de-arboles',
]

export const cienciaArticleSlugs = [
  'inteligencia-artificial-ayuda-a-diagnosticar-enfermedades-raras-en-ninos',
  'nueva-terapia-genica-revierte-la-ceguera-en-pacientes-con-enfermedad-hereditaria',
  'innovador-sistema-de-riego-reduce-el-consumo-de-agua-en-un-70',
]

export const inspiracionArticleSlugs = [
  'de-vendedor-ambulante-a-ingeniero-la-historia-de-superacion-de-jose-maria',
  'maestra-rural-recorre-20-km-diarios-para-llevar-educacion-a-ninos-de-la-montana',
  'cientifica-mexicana-gana-premio-internacional-por-su-trabajo-en-energias-limpias',
]

export const culturaArticleSlugs = [
  'festival-de-cine-documental-llega-a-comunidades-indigenas-del-pais',
  'cinco-habitos-matutinos-que-transformaran-tu-productividad',
  'atleta-paralimpico-rompe-record-mundial-y-inspira-a-nuevas-generaciones',
]

export const featuredSlug = 'cientificos-desarrollan-un-metodo-revolucionario-para-limpiar-los-oceanos-en-una-decada'
export const featuredSideSlugs = [
  'comunidad-costera-logra-reforestar-50-kilometros-de-manglares',
  'joven-emprendedora-crea-app-que-conecta-voluntarios-con-causas-sociales',
]

export function getArticlesByBadge(badge) {
  return allArticles.filter(a => a.badge === badge)
}
