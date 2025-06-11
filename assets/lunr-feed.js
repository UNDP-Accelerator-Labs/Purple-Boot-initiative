// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('sdg')
  this.field('tags')
  this.field('url')
  this.ref('id')
});

function capitalize(str) {
  return str && typeof str === 'string'
    ? str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : str;
}




index.add({
    title: "Conoce Botas Violeta",
    content: "Botas Violeta\n\nEs una iniciativa del Programa de las Naciones Unidas para el Desarrollo (PNUD) para sensibilizar en género, crear conocimiento accionable para promover cambio de cultura organizacional y la concreción de iniciativas encaminadas a la igualdad de género.\n\nA través ciclos de talleres con metodología basada en Educación Popular sensibiliza a sus participantes sobre las persistentes brechas de género y sus manifestaciones en la vida de mujeres y hombres. Además, promueve cambios actitudinales y planes de acción para la igualdad de género.\n\n¿Qué es la Educación Popular?\n\nLa Educación Popular con enfoque de género parte del reconocimiento de que existen relaciones asimétricas entre mujeres y hombres. Por este motivo, Botas Violeta aplica este proceso educativo para entender cómo funcionan estas desigualdades y, sobre todo, cómo cambiarlas.\n\nDotamos a las organizaciones/proyectos que tienen incidencia a nivel comunitario de técnicas para subvertir las condiciones de desigualdad, acompañando procesos de empoderamiento y fortalecimiento de la autonomía de las mujeres y fomentando aliados masculinos.\n\nLa Educación Popular parte de algunos principios que son fundamentales tener en cuenta:\n\n\n  Afirma que el conocimiento está en todas y todos y que se conoce con la mente y el cuerpo.\n  El saber-sentir-hacer es parte de un mismo continuo, por tanto, las actividades propuestas recogen los tres elementos de forma integral.\n  Reconoce que el conocimiento se produce colectivamente.\n  Lo personal es político, por lo tanto, las reflexiones surgen desde lo subjetivo y vivencial.\n  Lo subjetivo no es lo individual, sino que reconoce sus conexiones con el entorno, la familia, comunidad, sociedad y el mundo.\n  La educadora o el educador popular se sitúa al mismo nivel que las participantes, es decir, no ocupa un rol jerárquico para transmitir conocimientos sino, es parte del proceso de deconstrucción y transformación.\n  La educadora o el educador popular tiene un rol de acompañante para fomentar el interaprendizaje, conectando saberes, sentires y experiencias de las y los participantes.\n  La educadora o el educador popular evidencia y propicia el cambio a través de procesos pedagógicos, las opresiones de las mujeres por su condición de género en un contexto patriarcal.\n\n\nConoce nuestra historia:\n\n",
    tags: null,
    sdg: null,
    url: "/1.%20Qu%C3%A9%20es%20Botas%20Violeta.html",
    id: 0
});












index.add({
    title: "Preguntas frecuentes",
    content: "Preguntas Frecuentes\n\n¿Qué es Botas Violeta y cuál es su objetivo principal?\n\nBotas Violeta es una metodología participativa que utiliza la educación popular para promover la transversalización del enfoque de género y la prevención de la violencia en proyectos con alcance territorial o comunitario. Busca generar cambios culturales y estructurales mediante procesos de reflexión, acción y corresponsabilidad.\n\n¿Quién puede implementar Botas Violeta?\n\nCualquier proyecto, programa u organización que tenga interés en incorporar la perspectiva de género de manera transversal y promover entornos libres de violencia puede implementar Botas Violeta. Está especialmente dirigido a iniciativas con alcance comunitario o territorial que busquen fortalecer la igualdad de género desde sus propias acciones.\n\n¿Cuál es el costo de Botas Violeta?\n\nBotas Violeta es una metodología de acceso libre y autogestionable. No tiene un costo de licenciamiento ni de uso. Sin embargo, cada proyecto es responsable de gestionar los recursos necesarios para su implementación (materiales, facilitación, logística, etc.), de acuerdo con sus capacidades y contexto.\n\n¿Puedo adaptar las actividades establecidas en las guías metodológicas?\n\nSí. Las actividades de Botas Violeta pueden ser adaptadas a las necesidades, características y realidades de cada territorio o grupo poblacional. Se recomienda mantener la coherencia con los principios y objetivos de la metodología, y consultar a la especialista de género de la oficina país en caso de dudas sobre adaptaciones clave.\n\n¿Qué materiales o herramientas incluye Botas Violeta?\n\nLa metodología cuenta con guías metodológicas prácticas, fichas de actividades, herramientas de reflexión colectiva y materiales de apoyo visual. Todo está diseñado para ser fácilmente comprensible, adaptable y aplicable en diversos contextos.\n\n¿Hay acompañamiento disponible para la implementación de Botas Violeta?\n\nSí. Aunque la implementación es autogestionada, los equipos contarán con acompañamiento técnico de la especialista de género de la oficina país, quien brindará orientación metodológica y seguimiento general para asegurar la calidad y el enfoque transformador de género del proceso.\n\n¿Se necesita formación previa para implementar Botas Violeta?\n\nNo es indispensable contar con formación previa. Botas Violeta incluye un módulo introductorio con nociones básicas sobre género, diseñado para facilitar la comprensión de los conceptos clave.\n\n¿Qué tipo de resultados se pueden esperar al implementar Botas Violeta?\n\nEntre los principales resultados están: mayor sensibilización sobre igualdad de género, fortalecimiento del liderazgo de mujeres, participación activa de hombres como aliados, y el desarrollo de acciones concretas para prevenir la violencia de género en los contextos donde se implemente.\n\n¿Cómo se puede medir el impacto de la implementación?\n\nBotas Violeta incluye herramientas básicas de monitoreo participativo que permiten evaluar el proceso, registrar aprendizajes y visibilizar los cambios generados. Además, se pueden coordinar mecanismos de evaluación según las necesidades de cada proyecto.\n",
    tags: null,
    sdg: null,
    url: "/10.%20Preguntas%20frecuentes.html",
    id: 1
});












index.add({
    title: "Contacto",
    content: "Súmate a la comunidad\n\n¿Ya estás implementando Botas Violeta o quieres empezar?\n\n📩 Contáctanos: xxxx@undp.org\n",
    tags: null,
    sdg: null,
    url: "/11.%20Contacto.html",
    id: 2
});












index.add({
    title: "Cómo implementar Botas Violeta",
    content: "Botas Violeta consiste en módulos a ser auto implementados con diferentes audiencias, para tener una aproximación a conceptos base de género que permita realizar diagnósticos breves y planes de acción, así como sensibilizar en temas como violencia basada en género. Fortalece el liderazgo local, promueve la generación de redes e incorpora un enfoque interseccional.\n\nCreado con y para organizaciones, Botas Violeta es adaptable, práctico y centrado en el empoderamiento colectivo a través de la Educación Popular.\n\nBotas Violeta parte de una mirada interseccional, comunitaria y de derechos, fortaleciendo la acción local frente a la discriminación de género.\n\n\n  Fomenta el liderazgo de mujeres y diversidades.\n  Construye conocimientos y saberes de forma colectiva.\n  Promueve alianzas con gobiernos locales y actores clave.\n  Adapta estrategias según los y las participantes.\n  Moviliza acciones concretas mediante la implementación a través de planes acción específicos.\n\n\n¿Quieres implementar Botas Violeta con tu proyecto?\n\nSigue estos pasos:\n\nPASO 1: Selección de participantes\n\nPASO 2: Escoge los contenidos\n\nPASO 3: Implementa los talleres\n\nPASO 4: Sistematiza la información\n\nPASO 5: Cierre de implementación\n",
    tags: null,
    sdg: null,
    url: "/2.%20C%C3%B3mo%20implementar%20Botas%20Violeta.html",
    id: 3
});












index.add({
    title: "Sistematización de resultados",
    content: "Sistematización\n\nAlgunas actividades ya cuentan con formatos para sistematizar la información recabada durante los talleres. Estos formatos nos ayudan como insumos para resaltar los resultados cualitativos y cuantitativos y realizar nuestro informe final de implementación.\n\nPara conocer qué actividades cuentan con un formato de sistematización, puedes revisar las guías metodológicas donde se especifica en cada actividad. Nuestras facilitadoras nos ayudan digitando la información recabada.\n\nPodrás encontrar los formatos de sistematización aquí:\n\nDescarga aquí: Formatos de sistematización\n",
    tags: null,
    sdg: null,
    url: "/6.%20Sistematizaci%C3%B3n%20de%20resultados.html",
    id: 4
});












index.add({
    title: "Cierre de implementación",
    content: "Una vez que los talleres de formación han terminado, las facilitadoras Botas Violeta enviarán un informe por cada implementación realizada. Este servirá como insumo para el informe final.\n\nUna vez que de todos los entregables han sido aprobados, se realizará el proceso de pago para lo cual se deberán incluir los siguientes documentos:\n\n\n  Solicitud de pago\n  Factura de la facilitadora/as\n  Informe de implementación\n  Autorización de uso del LTA por parte del administrador/a de contrato\n  Copia de la agenda de talleres\n  Listas de asistencia firmadas\n\n",
    tags: null,
    sdg: null,
    url: "/7.%20Cierre.html",
    id: 5
});












index.add({
    title: "Recursos",
    content: "Accede a nuestras herramientas e imprimibles para facilitar el proceso:\n\nPara participantes\n\n  Formulario de registro\n  Formulario uso de imagen\n\n\nPara la implementación\n\n  Guías Botas Violeta\n  Recursos imprimibles\n\n\nPara facilitadoras\n\n  Formato de informe para facilitadoras\n  Formatos de sistematización\n  Diana de evaluación de talleres\n\n\nPara el punto focal\n\n\n  Contratos LTA facilitadoras\n  Toolkit de comunicación\n  Protocolo para la construcción de espacios seguros\n\n",
    tags: null,
    sdg: null,
    url: "/8.%20Recursos.html",
    id: 6
});












index.add({
    title: "Nuestro impacto",
    content: "Conoce los territorios que ya están caminando con Botas Violeta:\n\n\n\nConoce las vidas que hemos impactado\n\n",
    tags: null,
    sdg: null,
    url: "/9.%20Nuestro%20impacto.html",
    id: 7
});












index.add({
    title: "Actividades",
    content: "Coordinación de actividades\n\nCrear un cronograma que incluya todas las actividades de la implementación, incluyendo reuniones de planificación, con contrapartes, facilitadoras, etc., para que todo el equipo involucrado pueda conocer la información.\n\nPara facilitar la planificación de los talleres, crea un minuto a minuto incluyendo todas las actividades a desarrollarse durante el programa de formación incluyendo presentaciones iniciales, palabras de apertura, dinámicas de activación, coffee breaks, entrega de certificados, etc. Te sugerimos especificar quién estará encargada de cada actividad.\n\nEl minuto a minuto facilitará conocer en qué actividades se puede solicitar cobertura por parte del equipo de comunicación y coordinar espacios para grabar testimonios.\n\nRecuerda coordinar con tus facilitadoras para la construcción de la agenda, validar materiales a utilizar y duración de las actividades propuestas.\n\nMateriales\n\nUna vez escogidos los temas a impartir durante los talleres Botas Violeta, recuerda revisar en cada actividad, la lista de materiales e impresiones que necesitarás.\n\nPuedes encontrar todos nuestros materiales para imprimir a continuación:\n\nDescarga aquí: Imprimibles\n\nUna vez escogidas las actividades y designados los materiales correspondientes, se puede entregar los materiales a cada facilitadora o llevar todos los materiales el primer día de taller. Se recomienda coordinar con la contraparte para contar con un lugar específico para guardar los materiales durante los talleres.\n",
    tags: null,
    sdg: null,
    url: "/5.%20Implementaci%C3%B3n/Actividades.html",
    id: 8
});












index.add({
    title: "Autorización de uso de imagen",
    content: "Autorización uso de imagen\n\nTodas las personas participantes deberán formar una autorización de uso de imagen para que el proyecto pueda publicar y difundir fotografías o videos. Esta autorización asegura que las personas estén informadas y consientan voluntariamente el uso de su imagen. Si una persona del grupo no desea que su imagen sea difundida o publicada, se puede realizar la cobertura, evitando incluir el rostro de esa persona.\n\nDescarga aquí: Formato Uso de imagen\n",
    tags: null,
    sdg: null,
    url: "/3.%20Participantes/Autorizaci%C3%B3n%20uso%20de%20imagen.html",
    id: 9
});












index.add({
    title: "Toolkit de Comunicación",
    content: "Toolkit Comunicacional\n\nBotas Violeta cuenta con su manual de marca y lineamientos para el uso de recursos comunicacionales.\n\nEl toolkit se deberá compartir con la contraparte, se recomienda que la entrega sea con el punto focal de comunicación para explicar cómo funciona el toolkit y qué herramientas contiene al igual que establecer acuerdos sobre publicaciones en redes sociales y páginas web, cobertura, grabación de testimonios, entre otros.\n\nDescarga aquí: Toolkit\n\nLa iniciativa cuenta con su propio roll-up y backing para grabar testimonios y tomar fotografías los cuales se pueden solicitar al equipo de Comunicación de PNUD para su uso.\n",
    tags: null,
    sdg: null,
    url: "/5.%20Implementaci%C3%B3n/Comunicaci%C3%B3n.html",
    id: 10
});












index.add({
    title: "Selecciona los temas",
    content: "El contenido\n\nElige qué temáticas se impartirán durante los talleres. Botas Violeta cuenta con cuatro guías metodológicas con diferentes actividades para tu elección:\n\nGuía 1: Instituciones igualitarias\n\n\n  Ofrece herramientas para entender, problematizar y aprender sobre algunos conceptos clave y nociones básicas del enfoque de género.\n\n\nGuía 2: Movimientos de mujeres y redes de cuidado\n\n\n  Una mirada crítica de la realidad, validando los conocimientos de las colectividades, así como transformando las relaciones de desigualdad de género entre hombres y mujeres.\n\n\nGuía 3: Violencias patriarcales\n\n\n  Examina el marco de derechos como base para contar con herramientas que sirvan para desnaturalizar la violencia, identificar sus diversas formas y manifestaciones.\n\n\nGuía 4: Nuevas masculinidades\n\n\n  Analiza la construcción de las masculinidades para desnaturalizar ideas y comportamientos machistas. Ofrece herramientas para la construcción de masculinidades más igualitarias, corresponsables y justas.\n\n\nDescarga aquí: Guías metodológicas\n",
    tags: null,
    sdg: null,
    url: "/4.%20Selecci%C3%B3n%20de%20contenido/El%20contenido.html",
    id: 11
});












index.add({
    title: "Espacios seguros, evitando la revictimización",
    content: "En el presente documento, encontrarás directrices para asegurar un espacio seguro durante talleres de género. Entre varios criterios, uno, es evitar el posible contacto entre un/a participante que tenga una denuncia en curso y la persona denunciante.\n\n[Protocolo para la construcción de espacios seguros]\n",
    tags: null,
    sdg: null,
    url: "/3.%20Participantes/Espacios%20seguros.html",
    id: 12
});












index.add({
    title: "Evaluación de conocimiento",
    content: "Evaluaciones de conocimiento\n\nCon la finalidad de medir el incremento de conocimientos y/ o cambio de percepciones y actitud, recomendamos aplicar evaluaciones al inicio de los talleres (antes de impartir contenidos) y volver a aplicar las mismas evaluaciones al finalizar los mismos. Recomendamos, por lo tanto, que se mantenga el mismo grupo de inicio hasta el final. Si, por algún motivo, se redujo la participación, se recomienda procesar las encuestas, siempre en %.\n\nRealizar evaluaciones nos permite identificar el punto de partida, ajustar metodologías según las necesidades detectadas y evaluar el impacto real del taller. Estas herramientas son fundamentales para asegurar procesos formativos efectivos, generar aprendizajes significativos y mejorar continuamente la calidad de nuestras intervenciones.\n\nEn cada guía metodológica podrás encontrar la evaluación correspondiente al contenido del módulo. Puedes crear nuevas preguntas según los contenidos de los talleres.\n\n",
    tags: null,
    sdg: null,
    url: "/4.%20Selecci%C3%B3n%20de%20contenido/Evaluaciones%20de%20conocimiento.html",
    id: 13
});












index.add({
    title: "Evaluación general",
    content: "Evaluación del taller\n\nUtiliza el siguiente formato para evaluación de la calidad de talleres a través de la “diana de evaluación” con 4 categorías:\n\n  Contenidos\n  Facilitación\n  Logística\n  Participación\n\n\nEsta evaluación se aplica una única vez, de forma grupal, al finalizar los talleres.\n\nDescarga aquí: Diana de evaluación\n",
    tags: null,
    sdg: null,
    url: "/4.%20Selecci%C3%B3n%20de%20contenido/Evaluaci%C3%B3n%20del%20taller.html",
    id: 14
});












index.add({
    title: "Equipo facilitador",
    content: "Equipo facilitador\n\nBotas Violeta cuenta con tres facilitadoras con amplia experiencia en Educación Popular, metodología participativas y enfoque de género. Actualmente nuestras facilitadoras se encuentran ya registradas como proveedores de PNUD bajo la contratación “Long Term Agreement – LTA”, disponible hasta octubre 2026.\n\nDescarga aquí: Contratos LTA Facilitadoras\n\nContacto\n\nPuedes contactar a cualquiera de las tres facilitadoras disponibles; puedes contactarlas con antelación para convenir fechas y horarios para talleres.\n\nLorena Burbano\nlburbano91@gmail.com\n+593 99 993 6595\n\nThais Oliveira\nthaisuni@gmail.com\n+593 99 726 8696\n\nPaula Castello\npaulicastello@gmail.com\n+593 98 602 1387\n\nServicios\n\nLas facilitadoras proveen diferentes servicios; podrás encontrar los detalles de cada servicio y su tarifa en cada contrato.\n\n\n  Facilitación de talleres\n  Adaptación metodológica\n  Refrigerios\n  Digitación de insumos\n  Redacción de Informe\n\n\nPara utilizar el LTA, deberás contactar a la administrador/a de contrato para el registro correspondiente.\n",
    tags: null,
    sdg: null,
    url: "/5.%20Implementaci%C3%B3n/Facilitadoras.html",
    id: 15
});












index.add({
    title: "Puntos focales",
    content: "Puntos focales\n\nEl proyecto deberá escoger dos puntos focales que coordinarán las acciones de la implementación; una persona coordinará las actividades logísticas con las facilitadoras, la contraparte, el área de Género y el equipo de comunicación y, otra persona para coordinar los procesos administrativos y financieros de los talleres.\n\nSe sugiere que la contraparte (institución u organización con quien se implementará Botas Violeta) designe dos puntos focales; uno para coordinar las acciones de comunicación y otro para el seguimiento post-implementación.\n",
    tags: null,
    sdg: null,
    url: "/5.%20Implementaci%C3%B3n/Puntos%20focales.html",
    id: 16
});












index.add({
    title: "Contributors",
    content: "Meet the Contributors\n\n\n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Jasmine Smith\n        \n        GreenEarth Initiative\n        Senior Project Coordinator\n      \n    \n    Jasmine Smith is a seasoned environmental activist and project coordinator with GreenEarth Initiative. With over a decade of experience, Jasmine has led multiple campaigns focused on sustainable living and climate change awareness. She specializes in community mobilization and education programs, aiming to involve local communities in environmental conservation efforts. Jasmine is known for her dynamic workshop sessions and engaging public speaking. She holds a Master’s in Environmental Science from the University of California, Berkeley. Her work extends to collaborating with government bodies to implement eco-friendly policies.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Carlos Rodriguez\n        \n        TechSolutions Inc.\n        CEO\n      \n    \n    Carlos Rodriguez is an innovative tech entrepreneur, founder of TechSolutions Inc., and a pioneer in developing smart city technologies. His expertise lies in integrating IoT with urban infrastructure to enhance efficiency and quality of life. Carlos has spearheaded projects in multiple cities worldwide, transforming them into tech-savvy urban centers. He frequently speaks at international technology forums and collaborates with universities to foster young tech talents. Carlos holds a degree in Computer Engineering from MIT and an MBA from Harvard Business School. His vision is to bridge the gap between technology and everyday life.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Lena Kim\n        \n        Global Finance Corp.\n        Senior Financial Analyst\n      \n    \n    Lena Kim is a financial analyst with a sharp eye for market trends and economic patterns. Currently working at Global Finance Corp., she provides insightful analysis to help shape investment strategies and market forecasts. Lena’s expertise includes emerging markets and cryptocurrency. She is known for her comprehensive reports and has been a guest speaker at various financial summits. Lena earned her degree in Economics from the London School of Economics and is currently pursuing her CFA certification. She is passionate about mentoring young women interested in finance and economics.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Marcus Johnson\n        \n        Urban Revitalization Project\n        Chief Urban Planner\n      \n    \n    Marcus Johnson is an experienced urban planner and architect, currently leading the Urban Revitalization Project in New York. With a focus on sustainable and inclusive urban development, Marcus has been instrumental in transforming cityscapes into vibrant, functional spaces. He collaborates closely with local communities to ensure their needs are met in urban designs. Marcus regularly contributes articles to architecture journals and is a guest lecturer at Columbia University. He holds a Master's degree in Architecture from Princeton University. Marcus is an advocate for green building practices and pedestrian-friendly city planning.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Sophia Martinez\n        \n        Human Rights Watch\n        Lead Counsel\n      \n    \n    Sophia Martinez is a human rights lawyer with a strong commitment to justice and equality. Working with Human Rights Watch, she has been involved in high-profile cases defending the rights of marginalized communities. Sophia’s work extends beyond the courtroom to public advocacy and legal reform. She is a key figure in initiatives for legal literacy and has conducted workshops globally. Sophia holds a law degree from Yale Law School and has been recognized for her contributions with several awards. She is a vocal advocate for women’s rights and refugee protection.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Daniel Chen\n        \n        BioTech Solutions\n        Head of Research\n      \n    \n    Daniel Chen is a distinguished biomedical researcher focused on developing innovative solutions for chronic diseases. He currently leads a research team at BioTech Solutions, working on breakthrough therapies in immunology. Daniel’s work has been published in numerous scientific journals, and he holds several patents in medical technology. He is also a regular speaker at international medical conferences. Daniel earned his PhD in Biomedical Engineering from Stanford University. He is passionate about bridging the gap between research and real-world medical applications, aiming to improve patient care and treatment methods.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n  \n\n",
    tags: null,
    sdg: null,
    url: "/Team.html",
    id: 17
});












index.add({
    title: "Selección de participantes",
    content: "Paso 1: Perfil de las y los participantes\n\nConocer a las y los participantes antes de iniciar un proyecto con enfoque de género es clave para asegurar una implementación contextualizada y a la medida de los conocimientos y bagajes grupales y personales, lo que facilita la creación de un espacio seguro para una participación activa y equitativa.\n\nRecomendamos que el grupo no exceda las 25 o 30 personas por ser una metodología vivencial y personalizada.\n\nConocer el perfil del grupo, además de ser útil para una adecuada facilitación, permitirá reportar destinatarios desagregados por etnia, sexo y cargo a los donantes.\n\nA continuación, te dejamos un formulario base para registrar participantes antes de iniciar una implementación, puedes incluir las preguntas que consideres necesarias:\n\nBotón destacado: [Formulario de registro]\n\nRecomendaciones para una participación consistente\n\nEn tiempos de múltiples responsabilidades y agendas apretadas, es muy retador lograr que un grupo culmine los módulos sin bajas o asistencias irregulares. Para evitarlo, ofrecemos las siguientes recomendaciones:\n\n\n  La convocatoria debe realizarse al menos con 15 días de antelación para que puedan bloquear sus agendas.\n  Realizar la convocatoria mediante canales jerárquicos y explicitar el requisito de asistencia mínima del 80% para la obtención del certificado.\n  Sondear conflictos de agenda y horarios preferidos.\n\n",
    tags: null,
    sdg: null,
    url: "/3.%20Participantes/",
    id: 18
});












index.add({
    title: "Selección de contenido",
    content: "\n",
    tags: null,
    sdg: null,
    url: "/4.%20Selecci%C3%B3n%20de%20contenido/",
    id: 19
});












index.add({
    title: "Implementa los talleres",
    content: "\n",
    tags: null,
    sdg: null,
    url: "/5.%20Implementaci%C3%B3n/",
    id: 20
});












index.add({
    title: "Getting Started",
    content: "Markdown Basics\n\nIntroduction\n\nThis page serves as a reference guide to the Markdown syntax used for creating different elements in your micro-site. You can use this guide to populate your micro-site with various content elements.\n",
    tags: ["gender equality","inequality","women empoverment"],
    sdg: ["Reduce Inequality","Gender Equality"],
    url: "/",
    id: 21
});



    
    window.tags = ["gender equality"]

    
    window.tags = ["gender equality","inequality"]

    
    window.tags = ["gender equality","inequality","women empoverment"]




    
    window.sdg = ["Reduce Inequality"]

    
    window.sdg = ["Reduce Inequality","Gender Equality"]










index.add({
    title: "Jasmine Smith",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Jasmine Smith\n            \n            GreenEarth Initiative\n            Senior Project Coordinator\n          \n        \n        \n          Jasmine Smith is a seasoned environmental activist and project coordinator with GreenEarth Initiative. With over a decade of experience, Jasmine has led multiple campaigns focused on sustainable living and climate change awareness. She specializes in community mobilization and education programs, aiming to involve local communities in environmental conservation efforts. Jasmine is known for her dynamic workshop sessions and engaging public speaking. She holds a Master’s in Environmental Science from the University of California, Berkeley. Her work extends to collaborating with government bodies to implement eco-friendly policies.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
    tags: null,
    sdg: null,
    url: "/contributors/Jasmine-Smith.html",
    id: 23
});












index.add({
    title: "Carlos Rodriguez",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Carlos Rodriguez\n            \n            TechSolutions Inc.\n            CEO\n          \n        \n        \n          Carlos Rodriguez is an innovative tech entrepreneur, founder of TechSolutions Inc., and a pioneer in developing smart city technologies. His expertise lies in integrating IoT with urban infrastructure to enhance efficiency and quality of life. Carlos has spearheaded projects in multiple cities worldwide, transforming them into tech-savvy urban centers. He frequently speaks at international technology forums and collaborates with universities to foster young tech talents. Carlos holds a degree in Computer Engineering from MIT and an MBA from Harvard Business School. His vision is to bridge the gap between technology and everyday life.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
    tags: null,
    sdg: null,
    url: "/contributors/Carlos-Rodriguez.html",
    id: 24
});












index.add({
    title: "Lena Kim",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Lena Kim\n            \n            Global Finance Corp.\n            Senior Financial Analyst\n          \n        \n        \n          Lena Kim is a financial analyst with a sharp eye for market trends and economic patterns. Currently working at Global Finance Corp., she provides insightful analysis to help shape investment strategies and market forecasts. Lena’s expertise includes emerging markets and cryptocurrency. She is known for her comprehensive reports and has been a guest speaker at various financial summits. Lena earned her degree in Economics from the London School of Economics and is currently pursuing her CFA certification. She is passionate about mentoring young women interested in finance and economics.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
    tags: null,
    sdg: null,
    url: "/contributors/Lena-Kim.html",
    id: 25
});












index.add({
    title: "Marcus Johnson",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Marcus Johnson\n            \n            Urban Revitalization Project\n            Chief Urban Planner\n          \n        \n        \n          Marcus Johnson is an experienced urban planner and architect, currently leading the Urban Revitalization Project in New York. With a focus on sustainable and inclusive urban development, Marcus has been instrumental in transforming cityscapes into vibrant, functional spaces. He collaborates closely with local communities to ensure their needs are met in urban designs. Marcus regularly contributes articles to architecture journals and is a guest lecturer at Columbia University. He holds a Master's degree in Architecture from Princeton University. Marcus is an advocate for green building practices and pedestrian-friendly city planning.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
    tags: null,
    sdg: null,
    url: "/contributors/Marcus-Johnson.html",
    id: 26
});












index.add({
    title: "Sophia Martinez",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Sophia Martinez\n            \n            Human Rights Watch\n            Lead Counsel\n          \n        \n        \n          Sophia Martinez is a human rights lawyer with a strong commitment to justice and equality. Working with Human Rights Watch, she has been involved in high-profile cases defending the rights of marginalized communities. Sophia’s work extends beyond the courtroom to public advocacy and legal reform. She is a key figure in initiatives for legal literacy and has conducted workshops globally. Sophia holds a law degree from Yale Law School and has been recognized for her contributions with several awards. She is a vocal advocate for women’s rights and refugee protection.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
    tags: null,
    sdg: null,
    url: "/contributors/Sophia-Martinez.html",
    id: 27
});












index.add({
    title: "Daniel Chen",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Daniel Chen\n            \n            BioTech Solutions\n            Head of Research\n          \n        \n        \n          Daniel Chen is a distinguished biomedical researcher focused on developing innovative solutions for chronic diseases. He currently leads a research team at BioTech Solutions, working on breakthrough therapies in immunology. Daniel’s work has been published in numerous scientific journals, and he holds several patents in medical technology. He is also a regular speaker at international medical conferences. Daniel earned his PhD in Biomedical Engineering from Stanford University. He is passionate about bridging the gap between research and real-world medical applications, aiming to improve patient care and treatment methods.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
    tags: null,
    sdg: null,
    url: "/contributors/Daniel-Chen.html",
    id: 28
});













// builds reference data
var store = [{
  "title": "Conoce Botas Violeta",
  "url": "/1.%20Qu%C3%A9%20es%20Botas%20Violeta.html",
  "content": "Botas Violeta\n\nEs una iniciativa del Programa de las Naciones Unidas para el Desarrollo (PNUD) para sensibilizar en género, crear conocimiento accionable para promover cambio de cultura organizacional y la concreción de iniciativas encaminadas a la igualdad de género.\n\nA través ciclos de talleres con metodología basada en Educación Popular sensibiliza a sus participantes sobre las persistentes brechas de género y sus manifestaciones en la vida de mujeres y hombres. Además, promueve cambios actitudinales y planes de acción para la igualdad de género.\n\n¿Qué es la Educación Popular?\n\nLa Educación Popular con enfoque de género parte del reconocimiento de que existen relaciones asimétricas entre mujeres y hombres. Por este motivo, Botas Violeta aplica este proceso educativo para entender cómo funcionan estas desigualdades y, sobre todo, cómo cambiarlas.\n\nDotamos a las organizaciones/proyectos que tienen incidencia a nivel comunitario de técnicas para subvertir las condiciones de desigualdad, acompañando procesos de empoderamiento y fortalecimiento de la autonomía de las mujeres y fomentando aliados masculinos.\n\nLa Educación Popular parte de algunos principios que son fundamentales tener en cuenta:\n\n\n  Afirma que el conocimiento está en todas y todos y que se conoce con la mente y el cuerpo.\n  El saber-sentir-hacer es parte de un mismo continuo, por tanto, las actividades propuestas recogen los tres elementos de forma integral.\n  Reconoce que el conocimiento se produce colectivamente.\n  Lo personal es político, por lo tanto, las reflexiones surgen desde lo subjetivo y vivencial.\n  Lo subjetivo no es lo individual, sino que reconoce sus conexiones con el entorno, la familia, comunidad, sociedad y el mundo.\n  La educadora o el educador popular se sitúa al mismo nivel que las participantes, es decir, no ocupa un rol jerárquico para transmitir conocimientos sino, es parte del proceso de deconstrucción y transformación.\n  La educadora o el educador popular tiene un rol de acompañante para fomentar el interaprendizaje, conectando saberes, sentires y experiencias de las y los participantes.\n  La educadora o el educador popular evidencia y propicia el cambio a través de procesos pedagógicos, las opresiones de las mujeres por su condición de género en un contexto patriarcal.\n\n\nConoce nuestra historia:\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Botas Violeta Es una iniciativa del Programa de las Naciones Unidas para el Desarrollo (PNUD) para sensibilizar en género, crear...",
  "id": 29
},{
  "title": "Preguntas frecuentes",
  "url": "/10.%20Preguntas%20frecuentes.html",
  "content": "Preguntas Frecuentes\n\n¿Qué es Botas Violeta y cuál es su objetivo principal?\n\nBotas Violeta es una metodología participativa que utiliza la educación popular para promover la transversalización del enfoque de género y la prevención de la violencia en proyectos con alcance territorial o comunitario. Busca generar cambios culturales y estructurales mediante procesos de reflexión, acción y corresponsabilidad.\n\n¿Quién puede implementar Botas Violeta?\n\nCualquier proyecto, programa u organización que tenga interés en incorporar la perspectiva de género de manera transversal y promover entornos libres de violencia puede implementar Botas Violeta. Está especialmente dirigido a iniciativas con alcance comunitario o territorial que busquen fortalecer la igualdad de género desde sus propias acciones.\n\n¿Cuál es el costo de Botas Violeta?\n\nBotas Violeta es una metodología de acceso libre y autogestionable. No tiene un costo de licenciamiento ni de uso. Sin embargo, cada proyecto es responsable de gestionar los recursos necesarios para su implementación (materiales, facilitación, logística, etc.), de acuerdo con sus capacidades y contexto.\n\n¿Puedo adaptar las actividades establecidas en las guías metodológicas?\n\nSí. Las actividades de Botas Violeta pueden ser adaptadas a las necesidades, características y realidades de cada territorio o grupo poblacional. Se recomienda mantener la coherencia con los principios y objetivos de la metodología, y consultar a la especialista de género de la oficina país en caso de dudas sobre adaptaciones clave.\n\n¿Qué materiales o herramientas incluye Botas Violeta?\n\nLa metodología cuenta con guías metodológicas prácticas, fichas de actividades, herramientas de reflexión colectiva y materiales de apoyo visual. Todo está diseñado para ser fácilmente comprensible, adaptable y aplicable en diversos contextos.\n\n¿Hay acompañamiento disponible para la implementación de Botas Violeta?\n\nSí. Aunque la implementación es autogestionada, los equipos contarán con acompañamiento técnico de la especialista de género de la oficina país, quien brindará orientación metodológica y seguimiento general para asegurar la calidad y el enfoque transformador de género del proceso.\n\n¿Se necesita formación previa para implementar Botas Violeta?\n\nNo es indispensable contar con formación previa. Botas Violeta incluye un módulo introductorio con nociones básicas sobre género, diseñado para facilitar la comprensión de los conceptos clave.\n\n¿Qué tipo de resultados se pueden esperar al implementar Botas Violeta?\n\nEntre los principales resultados están: mayor sensibilización sobre igualdad de género, fortalecimiento del liderazgo de mujeres, participación activa de hombres como aliados, y el desarrollo de acciones concretas para prevenir la violencia de género en los contextos donde se implemente.\n\n¿Cómo se puede medir el impacto de la implementación?\n\nBotas Violeta incluye herramientas básicas de monitoreo participativo que permiten evaluar el proceso, registrar aprendizajes y visibilizar los cambios generados. Además, se pueden coordinar mecanismos de evaluación según las necesidades de cada proyecto.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Preguntas Frecuentes ¿Qué es Botas Violeta y cuál es su objetivo principal? Botas Violeta es una metodología participativa que utiliza...",
  "id": 29
},{
  "title": "Contacto",
  "url": "/11.%20Contacto.html",
  "content": "Súmate a la comunidad\n\n¿Ya estás implementando Botas Violeta o quieres empezar?\n\n📩 Contáctanos: xxxx@undp.org\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Súmate a la comunidad\n\n¿Ya estás implementando Botas Violeta o quieres empezar?\n\n📩 Contáctanos: xxxx@undp.org\n",
  "id": 29
},{
  "title": "Cómo implementar Botas Violeta",
  "url": "/2.%20C%C3%B3mo%20implementar%20Botas%20Violeta.html",
  "content": "Botas Violeta consiste en módulos a ser auto implementados con diferentes audiencias, para tener una aproximación a conceptos base de género que permita realizar diagnósticos breves y planes de acción, así como sensibilizar en temas como violencia basada en género. Fortalece el liderazgo local, promueve la generación de redes e incorpora un enfoque interseccional.\n\nCreado con y para organizaciones, Botas Violeta es adaptable, práctico y centrado en el empoderamiento colectivo a través de la Educación Popular.\n\nBotas Violeta parte de una mirada interseccional, comunitaria y de derechos, fortaleciendo la acción local frente a la discriminación de género.\n\n\n  Fomenta el liderazgo de mujeres y diversidades.\n  Construye conocimientos y saberes de forma colectiva.\n  Promueve alianzas con gobiernos locales y actores clave.\n  Adapta estrategias según los y las participantes.\n  Moviliza acciones concretas mediante la implementación a través de planes acción específicos.\n\n\n¿Quieres implementar Botas Violeta con tu proyecto?\n\nSigue estos pasos:\n\nPASO 1: Selección de participantes\n\nPASO 2: Escoge los contenidos\n\nPASO 3: Implementa los talleres\n\nPASO 4: Sistematiza la información\n\nPASO 5: Cierre de implementación\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Botas Violeta consiste en módulos a ser auto implementados con diferentes audiencias, para tener una aproximación a conceptos base de...",
  "id": 29
},{
  "title": "Sistematización de resultados",
  "url": "/6.%20Sistematizaci%C3%B3n%20de%20resultados.html",
  "content": "Sistematización\n\nAlgunas actividades ya cuentan con formatos para sistematizar la información recabada durante los talleres. Estos formatos nos ayudan como insumos para resaltar los resultados cualitativos y cuantitativos y realizar nuestro informe final de implementación.\n\nPara conocer qué actividades cuentan con un formato de sistematización, puedes revisar las guías metodológicas donde se especifica en cada actividad. Nuestras facilitadoras nos ayudan digitando la información recabada.\n\nPodrás encontrar los formatos de sistematización aquí:\n\nDescarga aquí: Formatos de sistematización\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Sistematización Algunas actividades ya cuentan con formatos para sistematizar la información recabada durante los talleres. Estos formatos nos ayudan como...",
  "id": 29
},{
  "title": "Cierre de implementación",
  "url": "/7.%20Cierre.html",
  "content": "Una vez que los talleres de formación han terminado, las facilitadoras Botas Violeta enviarán un informe por cada implementación realizada. Este servirá como insumo para el informe final.\n\nUna vez que de todos los entregables han sido aprobados, se realizará el proceso de pago para lo cual se deberán incluir los siguientes documentos:\n\n\n  Solicitud de pago\n  Factura de la facilitadora/as\n  Informe de implementación\n  Autorización de uso del LTA por parte del administrador/a de contrato\n  Copia de la agenda de talleres\n  Listas de asistencia firmadas\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Una vez que los talleres de formación han terminado, las facilitadoras Botas Violeta enviarán un informe por cada implementación realizada....",
  "id": 29
},{
  "title": "Recursos",
  "url": "/8.%20Recursos.html",
  "content": "Accede a nuestras herramientas e imprimibles para facilitar el proceso:\n\nPara participantes\n\n  Formulario de registro\n  Formulario uso de imagen\n\n\nPara la implementación\n\n  Guías Botas Violeta\n  Recursos imprimibles\n\n\nPara facilitadoras\n\n  Formato de informe para facilitadoras\n  Formatos de sistematización\n  Diana de evaluación de talleres\n\n\nPara el punto focal\n\n\n  Contratos LTA facilitadoras\n  Toolkit de comunicación\n  Protocolo para la construcción de espacios seguros\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Accede a nuestras herramientas e imprimibles para facilitar el proceso: Para participantes Formulario de registro Formulario uso de imagen Para...",
  "id": 29
},{
  "title": "Nuestro impacto",
  "url": "/9.%20Nuestro%20impacto.html",
  "content": "Conoce los territorios que ya están caminando con Botas Violeta:\n\n\n\nConoce las vidas que hemos impactado\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Conoce los territorios que ya están caminando con Botas Violeta:\n\n\n\nConoce las vidas que hemos impactado\n\n",
  "id": 29
},{
  "title": "Actividades",
  "url": "/5.%20Implementaci%C3%B3n/Actividades.html",
  "content": "Coordinación de actividades\n\nCrear un cronograma que incluya todas las actividades de la implementación, incluyendo reuniones de planificación, con contrapartes, facilitadoras, etc., para que todo el equipo involucrado pueda conocer la información.\n\nPara facilitar la planificación de los talleres, crea un minuto a minuto incluyendo todas las actividades a desarrollarse durante el programa de formación incluyendo presentaciones iniciales, palabras de apertura, dinámicas de activación, coffee breaks, entrega de certificados, etc. Te sugerimos especificar quién estará encargada de cada actividad.\n\nEl minuto a minuto facilitará conocer en qué actividades se puede solicitar cobertura por parte del equipo de comunicación y coordinar espacios para grabar testimonios.\n\nRecuerda coordinar con tus facilitadoras para la construcción de la agenda, validar materiales a utilizar y duración de las actividades propuestas.\n\nMateriales\n\nUna vez escogidos los temas a impartir durante los talleres Botas Violeta, recuerda revisar en cada actividad, la lista de materiales e impresiones que necesitarás.\n\nPuedes encontrar todos nuestros materiales para imprimir a continuación:\n\nDescarga aquí: Imprimibles\n\nUna vez escogidas las actividades y designados los materiales correspondientes, se puede entregar los materiales a cada facilitadora o llevar todos los materiales el primer día de taller. Se recomienda coordinar con la contraparte para contar con un lugar específico para guardar los materiales durante los talleres.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Coordinación de actividades Crear un cronograma que incluya todas las actividades de la implementación, incluyendo reuniones de planificación, con contrapartes,...",
  "id": 29
},{
  "title": "Autorización de uso de imagen",
  "url": "/3.%20Participantes/Autorizaci%C3%B3n%20uso%20de%20imagen.html",
  "content": "Autorización uso de imagen\n\nTodas las personas participantes deberán formar una autorización de uso de imagen para que el proyecto pueda publicar y difundir fotografías o videos. Esta autorización asegura que las personas estén informadas y consientan voluntariamente el uso de su imagen. Si una persona del grupo no desea que su imagen sea difundida o publicada, se puede realizar la cobertura, evitando incluir el rostro de esa persona.\n\nDescarga aquí: Formato Uso de imagen\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Autorización uso de imagen Todas las personas participantes deberán formar una autorización de uso de imagen para que el proyecto...",
  "id": 29
},{
  "title": "Toolkit de Comunicación",
  "url": "/5.%20Implementaci%C3%B3n/Comunicaci%C3%B3n.html",
  "content": "Toolkit Comunicacional\n\nBotas Violeta cuenta con su manual de marca y lineamientos para el uso de recursos comunicacionales.\n\nEl toolkit se deberá compartir con la contraparte, se recomienda que la entrega sea con el punto focal de comunicación para explicar cómo funciona el toolkit y qué herramientas contiene al igual que establecer acuerdos sobre publicaciones en redes sociales y páginas web, cobertura, grabación de testimonios, entre otros.\n\nDescarga aquí: Toolkit\n\nLa iniciativa cuenta con su propio roll-up y backing para grabar testimonios y tomar fotografías los cuales se pueden solicitar al equipo de Comunicación de PNUD para su uso.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Toolkit Comunicacional Botas Violeta cuenta con su manual de marca y lineamientos para el uso de recursos comunicacionales. El toolkit...",
  "id": 29
},{
  "title": "Selecciona los temas",
  "url": "/4.%20Selecci%C3%B3n%20de%20contenido/El%20contenido.html",
  "content": "El contenido\n\nElige qué temáticas se impartirán durante los talleres. Botas Violeta cuenta con cuatro guías metodológicas con diferentes actividades para tu elección:\n\nGuía 1: Instituciones igualitarias\n\n\n  Ofrece herramientas para entender, problematizar y aprender sobre algunos conceptos clave y nociones básicas del enfoque de género.\n\n\nGuía 2: Movimientos de mujeres y redes de cuidado\n\n\n  Una mirada crítica de la realidad, validando los conocimientos de las colectividades, así como transformando las relaciones de desigualdad de género entre hombres y mujeres.\n\n\nGuía 3: Violencias patriarcales\n\n\n  Examina el marco de derechos como base para contar con herramientas que sirvan para desnaturalizar la violencia, identificar sus diversas formas y manifestaciones.\n\n\nGuía 4: Nuevas masculinidades\n\n\n  Analiza la construcción de las masculinidades para desnaturalizar ideas y comportamientos machistas. Ofrece herramientas para la construcción de masculinidades más igualitarias, corresponsables y justas.\n\n\nDescarga aquí: Guías metodológicas\n",
  "tags": null,
  "sdg": null,
  "excerpt": "El contenido Elige qué temáticas se impartirán durante los talleres. Botas Violeta cuenta con cuatro guías metodológicas con diferentes actividades...",
  "id": 29
},{
  "title": "Espacios seguros, evitando la revictimización",
  "url": "/3.%20Participantes/Espacios%20seguros.html",
  "content": "En el presente documento, encontrarás directrices para asegurar un espacio seguro durante talleres de género. Entre varios criterios, uno, es evitar el posible contacto entre un/a participante que tenga una denuncia en curso y la persona denunciante.\n\n[Protocolo para la construcción de espacios seguros]\n",
  "tags": null,
  "sdg": null,
  "excerpt": "En el presente documento, encontrarás directrices para asegurar un espacio seguro durante talleres de género. Entre varios criterios, uno, es...",
  "id": 29
},{
  "title": "Evaluación de conocimiento",
  "url": "/4.%20Selecci%C3%B3n%20de%20contenido/Evaluaciones%20de%20conocimiento.html",
  "content": "Evaluaciones de conocimiento\n\nCon la finalidad de medir el incremento de conocimientos y/ o cambio de percepciones y actitud, recomendamos aplicar evaluaciones al inicio de los talleres (antes de impartir contenidos) y volver a aplicar las mismas evaluaciones al finalizar los mismos. Recomendamos, por lo tanto, que se mantenga el mismo grupo de inicio hasta el final. Si, por algún motivo, se redujo la participación, se recomienda procesar las encuestas, siempre en %.\n\nRealizar evaluaciones nos permite identificar el punto de partida, ajustar metodologías según las necesidades detectadas y evaluar el impacto real del taller. Estas herramientas son fundamentales para asegurar procesos formativos efectivos, generar aprendizajes significativos y mejorar continuamente la calidad de nuestras intervenciones.\n\nEn cada guía metodológica podrás encontrar la evaluación correspondiente al contenido del módulo. Puedes crear nuevas preguntas según los contenidos de los talleres.\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Evaluaciones de conocimiento Con la finalidad de medir el incremento de conocimientos y/ o cambio de percepciones y actitud, recomendamos...",
  "id": 29
},{
  "title": "Evaluación general",
  "url": "/4.%20Selecci%C3%B3n%20de%20contenido/Evaluaci%C3%B3n%20del%20taller.html",
  "content": "Evaluación del taller\n\nUtiliza el siguiente formato para evaluación de la calidad de talleres a través de la “diana de evaluación” con 4 categorías:\n\n  Contenidos\n  Facilitación\n  Logística\n  Participación\n\n\nEsta evaluación se aplica una única vez, de forma grupal, al finalizar los talleres.\n\nDescarga aquí: Diana de evaluación\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Evaluación del taller Utiliza el siguiente formato para evaluación de la calidad de talleres a través de la “diana de...",
  "id": 29
},{
  "title": "Equipo facilitador",
  "url": "/5.%20Implementaci%C3%B3n/Facilitadoras.html",
  "content": "Equipo facilitador\n\nBotas Violeta cuenta con tres facilitadoras con amplia experiencia en Educación Popular, metodología participativas y enfoque de género. Actualmente nuestras facilitadoras se encuentran ya registradas como proveedores de PNUD bajo la contratación “Long Term Agreement – LTA”, disponible hasta octubre 2026.\n\nDescarga aquí: Contratos LTA Facilitadoras\n\nContacto\n\nPuedes contactar a cualquiera de las tres facilitadoras disponibles; puedes contactarlas con antelación para convenir fechas y horarios para talleres.\n\nLorena Burbano\nlburbano91@gmail.com\n+593 99 993 6595\n\nThais Oliveira\nthaisuni@gmail.com\n+593 99 726 8696\n\nPaula Castello\npaulicastello@gmail.com\n+593 98 602 1387\n\nServicios\n\nLas facilitadoras proveen diferentes servicios; podrás encontrar los detalles de cada servicio y su tarifa en cada contrato.\n\n\n  Facilitación de talleres\n  Adaptación metodológica\n  Refrigerios\n  Digitación de insumos\n  Redacción de Informe\n\n\nPara utilizar el LTA, deberás contactar a la administrador/a de contrato para el registro correspondiente.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Equipo facilitador Botas Violeta cuenta con tres facilitadoras con amplia experiencia en Educación Popular, metodología participativas y enfoque de género....",
  "id": 29
},{
  "title": "Puntos focales",
  "url": "/5.%20Implementaci%C3%B3n/Puntos%20focales.html",
  "content": "Puntos focales\n\nEl proyecto deberá escoger dos puntos focales que coordinarán las acciones de la implementación; una persona coordinará las actividades logísticas con las facilitadoras, la contraparte, el área de Género y el equipo de comunicación y, otra persona para coordinar los procesos administrativos y financieros de los talleres.\n\nSe sugiere que la contraparte (institución u organización con quien se implementará Botas Violeta) designe dos puntos focales; uno para coordinar las acciones de comunicación y otro para el seguimiento post-implementación.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Puntos focales El proyecto deberá escoger dos puntos focales que coordinarán las acciones de la implementación; una persona coordinará las...",
  "id": 29
},{
  "title": "Contributors",
  "url": "/Team.html",
  "content": "Meet the Contributors\n\n\n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Jasmine Smith\n        \n        GreenEarth Initiative\n        Senior Project Coordinator\n      \n    \n    Jasmine Smith is a seasoned environmental activist and project coordinator with GreenEarth Initiative. With over a decade of experience, Jasmine has led multiple campaigns focused on sustainable living and climate change awareness. She specializes in community mobilization and education programs, aiming to involve local communities in environmental conservation efforts. Jasmine is known for her dynamic workshop sessions and engaging public speaking. She holds a Master’s in Environmental Science from the University of California, Berkeley. Her work extends to collaborating with government bodies to implement eco-friendly policies.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Carlos Rodriguez\n        \n        TechSolutions Inc.\n        CEO\n      \n    \n    Carlos Rodriguez is an innovative tech entrepreneur, founder of TechSolutions Inc., and a pioneer in developing smart city technologies. His expertise lies in integrating IoT with urban infrastructure to enhance efficiency and quality of life. Carlos has spearheaded projects in multiple cities worldwide, transforming them into tech-savvy urban centers. He frequently speaks at international technology forums and collaborates with universities to foster young tech talents. Carlos holds a degree in Computer Engineering from MIT and an MBA from Harvard Business School. His vision is to bridge the gap between technology and everyday life.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Lena Kim\n        \n        Global Finance Corp.\n        Senior Financial Analyst\n      \n    \n    Lena Kim is a financial analyst with a sharp eye for market trends and economic patterns. Currently working at Global Finance Corp., she provides insightful analysis to help shape investment strategies and market forecasts. Lena’s expertise includes emerging markets and cryptocurrency. She is known for her comprehensive reports and has been a guest speaker at various financial summits. Lena earned her degree in Economics from the London School of Economics and is currently pursuing her CFA certification. She is passionate about mentoring young women interested in finance and economics.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Marcus Johnson\n        \n        Urban Revitalization Project\n        Chief Urban Planner\n      \n    \n    Marcus Johnson is an experienced urban planner and architect, currently leading the Urban Revitalization Project in New York. With a focus on sustainable and inclusive urban development, Marcus has been instrumental in transforming cityscapes into vibrant, functional spaces. He collaborates closely with local communities to ensure their needs are met in urban designs. Marcus regularly contributes articles to architecture journals and is a guest lecturer at Columbia University. He holds a Master's degree in Architecture from Princeton University. Marcus is an advocate for green building practices and pedestrian-friendly city planning.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Sophia Martinez\n        \n        Human Rights Watch\n        Lead Counsel\n      \n    \n    Sophia Martinez is a human rights lawyer with a strong commitment to justice and equality. Working with Human Rights Watch, she has been involved in high-profile cases defending the rights of marginalized communities. Sophia’s work extends beyond the courtroom to public advocacy and legal reform. She is a key figure in initiatives for legal literacy and has conducted workshops globally. Sophia holds a law degree from Yale Law School and has been recognized for her contributions with several awards. She is a vocal advocate for women’s rights and refugee protection.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Daniel Chen\n        \n        BioTech Solutions\n        Head of Research\n      \n    \n    Daniel Chen is a distinguished biomedical researcher focused on developing innovative solutions for chronic diseases. He currently leads a research team at BioTech Solutions, working on breakthrough therapies in immunology. Daniel’s work has been published in numerous scientific journals, and he holds several patents in medical technology. He is also a regular speaker at international medical conferences. Daniel earned his PhD in Biomedical Engineering from Stanford University. He is passionate about bridging the gap between research and real-world medical applications, aiming to improve patient care and treatment methods.\n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Meet the Contributors Jasmine Smith GreenEarth Initiative Senior Project Coordinator Jasmine Smith is a seasoned environmental activist and project coordinator...",
  "id": 29
},{
  "title": "Selección de participantes",
  "url": "/3.%20Participantes/",
  "content": "Paso 1: Perfil de las y los participantes\n\nConocer a las y los participantes antes de iniciar un proyecto con enfoque de género es clave para asegurar una implementación contextualizada y a la medida de los conocimientos y bagajes grupales y personales, lo que facilita la creación de un espacio seguro para una participación activa y equitativa.\n\nRecomendamos que el grupo no exceda las 25 o 30 personas por ser una metodología vivencial y personalizada.\n\nConocer el perfil del grupo, además de ser útil para una adecuada facilitación, permitirá reportar destinatarios desagregados por etnia, sexo y cargo a los donantes.\n\nA continuación, te dejamos un formulario base para registrar participantes antes de iniciar una implementación, puedes incluir las preguntas que consideres necesarias:\n\nBotón destacado: [Formulario de registro]\n\nRecomendaciones para una participación consistente\n\nEn tiempos de múltiples responsabilidades y agendas apretadas, es muy retador lograr que un grupo culmine los módulos sin bajas o asistencias irregulares. Para evitarlo, ofrecemos las siguientes recomendaciones:\n\n\n  La convocatoria debe realizarse al menos con 15 días de antelación para que puedan bloquear sus agendas.\n  Realizar la convocatoria mediante canales jerárquicos y explicitar el requisito de asistencia mínima del 80% para la obtención del certificado.\n  Sondear conflictos de agenda y horarios preferidos.\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Paso 1: Perfil de las y los participantes Conocer a las y los participantes antes de iniciar un proyecto con...",
  "id": 29
},{
  "title": "Selección de contenido",
  "url": "/4.%20Selecci%C3%B3n%20de%20contenido/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n",
  "id": 29
},{
  "title": "Implementa los talleres",
  "url": "/5.%20Implementaci%C3%B3n/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n",
  "id": 29
},{
  "title": "Getting Started",
  "url": "/",
  "content": "Markdown Basics\n\nIntroduction\n\nThis page serves as a reference guide to the Markdown syntax used for creating different elements in your micro-site. You can use this guide to populate your micro-site with various content elements.\n",
  "tags": ["gender equality","inequality","women empoverment"],
  "sdg": ["Reduce Inequality","Gender Equality"],
  "excerpt": "Markdown Basics Introduction This page serves as a reference guide to the Markdown syntax used for creating different elements in...",
  "id": 29
},{
  "title": null,
  "url": "/assets/lunr-feed.js",
  "content": "// builds lunr\nvar index = lunr(function () {\n  this.field('title')\n  this.field('content', {boost: 10})\n  this.field('sdg')\n  this.field('tags')\n  this.field('url')\n  this.ref('id')\n});\n\nfunction capitalize(str) {\n  return str && typeof str === 'string'\n    ? str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')\n    : str;\n}\n\n{% assign count = 0 %}\n{% for post in site.pages %}\n{% unless post.url contains 'assets/' %}\nindex.add({\n    title: {{post.title | jsonify}},\n    content: {{post.content | strip_html | jsonify}},\n    tags: {{ post.tags | jsonify }},\n    sdg: {{ post.sdg | jsonify }},\n    url: {{ post.url | jsonify }},\n    id: {{count}}\n});\n\n{% assign tags = \"\" | split: \",\" %}\n{% for tg in post.tags %}\n    {% unless tags contains tg %}\n        {% assign tags = tags | push: tg %}\n    {% endunless %}\n    window.tags = {{ tags | jsonify}}\n{% endfor %}\n\n{% assign sdg = \"\" | split: \",\" %}\n{% for cg in post.sdg %}\n    {% unless sdg contains cg %}\n        {% assign sdg = sdg | push: cg %}\n    {% endunless %}\n    window.sdg = {{ sdg | jsonify}}\n{% endfor %}\n\n\n{% endunless %}\n{% assign count = count | plus: 1 %}\n{% endfor %}\n\n\n// builds reference data\nvar store = [{% for post in site.pages %}{\n  \"title\": {{post.title | jsonify}},\n  \"url\": {{ post.url | jsonify  }},\n  \"content\": {{post.content | strip_html | jsonify}},\n  \"tags\": {{ post.tags | jsonify }},\n  \"sdg\": {{ post.sdg | jsonify }},\n  \"excerpt\": {{ post.content | strip_html | truncatewords: 20 | jsonify }},\n  \"id\": {{ count }}\n}{% unless forloop.last %},{% endunless %}{% endfor %}]\n\n\n// builds search\n$(document).ready(function() {\n  $('input#search').on('keyup', function () {\n    var resultdiv = $('#results');\n    var contentdiv = $('#content');\n\n    var query = $(this).val();\n    var result = index.search(query);\n    resultdiv.empty();\n    contentdiv.empty()\n    \n    // Add status\n    resultdiv.prepend('Found '+result.length+' result(s)');\n    // Loop through, match, and add results\n    for (var item in result) {\n      var ref = result[item].ref;\n      var searchitem = `\n      \n        \n        \n            ${store[ref]?.title}\n        \n        \n        \n            ${store[ref].excerpt}\n        \n    \n      `\n\n      resultdiv.append(searchitem);\n    }\n  });\n  \n  function customSort(a, b) {\n    // Check if strings start with a number\n    let startsWithNumberA = /^\\d+/.test(a);\n    let startsWithNumberB = /^\\d+/.test(b);\n    \n    // If both start with numbers, sort by number\n    if (startsWithNumberA && startsWithNumberB) {\n        let numA = parseInt(a.match(/^\\d+/)[0]);\n        let numB = parseInt(b.match(/^\\d+/)[0]);\n        return numA - numB;\n    } else if (startsWithNumberA) {\n        // If only a starts with a number, it comes first\n        return -1;\n    } else if (startsWithNumberB) {\n        // If only b starts with a number, it comes first\n        return 1;\n    } else {\n        // Otherwise, sort alphabetically\n        return a.localeCompare(b);\n    }\n}\n\n  //POPULATE TAGS AND SDG FILTER\nvar tagsdiv = $('#tag-div');\nvar sdgdiv = $('#sdg-div')\n\nif(tags.length > 0){\n    tags = tags.sort(customSort);\n    let tg = `\n    \n        \n        Tags\n        \n        \n    `;\n\n    for(let i = 0; i \n                \n                    ${capitalize(tags[i])}\n                    \n                \n              \n        `;\n    }\n\n    tg += `\n            \n        \n    `;\n\n    tagsdiv.append(tg)\n}\n\nif(sdg.length > 0){\n    sdg = sdg.sort(customSort);\n    let tg = `\n    \n        \n        SDG\n        \n        \n    `;\n\n    for(let i = 0; i \n                \n                    ${capitalize(sdg[i])}\n                    \n                \n              \n        `;\n    }\n\n    tg += `\n            \n        \n    `;\n\n    sdgdiv.append(tg)\n}\n\nlet taglist = []\nlet sdglist = []\n\nlet searchitemfn = post => `\n\n    \n    \n        ${post?.title}\n    \n    \n    \n        ${post.excerpt}\n    \n\n`\n\nlet resultdiv = $('#results');\nlet contentdiv = $('#content');\nlet contentCopy = $(\"#content\").html(); // Store the current content\n\nlet filterresult = () => {\n    resultdiv.empty()\n    resultdiv.prepend('Showing results for  ' + [...sdglist, ...taglist].toString() + '');\n    for(post of store){\n        if(post?.tags?.some(tg => taglist.includes(tg) )){\n            contentdiv.empty()\n            var searchitem = searchitemfn(post)\n\n            resultdiv.append(searchitem);\n        }\n        else if(post?.sdg?.some(tg => sdglist.includes(tg) )){\n            contentdiv.empty()\n            var searchitem = searchitemfn(post)\n\n            resultdiv.append(searchitem);\n        }\n    };\n}\n\n$(document).on('multiSelectInputToggle', (e) => {\n    let { value, checked, name } = e.target;\n    \n    if(checked && name === 'tags') taglist.push(value)\n    else if(checked && name === 'sdg') sdglist.push(value)\n    else if(!checked && name === 'sdg' && sdglist.includes(value)) sdglist.splice(sdglist.indexOf(value), 1)\n    else if(taglist.includes(value)) taglist.splice(taglist.indexOf(value), 1)\n  \n    filterresult()\n\n});\n\n$(document).on('filterSearchChipRemoval', (e) => {\n    let textContent = e.target.getAttribute('option-name');\n    sdglist.includes(textContent) && sdglist.splice(sdglist.indexOf(textContent), 1)\n    taglist.includes(textContent) && taglist.splice(taglist.indexOf(textContent), 1)\n    filterresult()\n});\n\n$(document).on('filterSearchClear', (e) => {\n    sdglist = [];\n    taglist =  [];\n    resultdiv.empty()\n    $(\"#content\").html(contentCopy);\n});\n\n//GET ELEMTENTS WITH ID TAGS AND SDG\n$('.tag-chip').on('click', e =>{\n    let textContent = e.target.getAttribute('text-value');\n    taglist = [ textContent ]\n    sdglist = []\n    contentdiv.empty()\n    filterresult()\n} )\n\n$('.sdg-chip').on('click', e =>{\n    let textContent = e.target.getAttribute('text-value');\n    sdglist = [textContent]\n    taglist = []\n    contentdiv.empty()\n    filterresult()\n} )\n\n})",
  "tags": null,
  "sdg": null,
  "excerpt": "// builds lunr var index = lunr(function () { this.field('title') this.field('content', {boost: 10}) this.field('sdg') this.field('tags') this.field('url') this.ref('id') }); function capitalize(str)...",
  "id": 29
},{
  "title": "Jasmine Smith",
  "url": "/contributors/Jasmine-Smith.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Jasmine Smith\n            \n            GreenEarth Initiative\n            Senior Project Coordinator\n          \n        \n        \n          Jasmine Smith is a seasoned environmental activist and project coordinator with GreenEarth Initiative. With over a decade of experience, Jasmine has led multiple campaigns focused on sustainable living and climate change awareness. She specializes in community mobilization and education programs, aiming to involve local communities in environmental conservation efforts. Jasmine is known for her dynamic workshop sessions and engaging public speaking. She holds a Master’s in Environmental Science from the University of California, Berkeley. Her work extends to collaborating with government bodies to implement eco-friendly policies.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
  "tags": null,
  "sdg": null,
  "excerpt": "Jasmine Smith GreenEarth Initiative Senior Project Coordinator Jasmine Smith is a seasoned environmental activist and project coordinator with GreenEarth Initiative....",
  "id": 29
},{
  "title": "Carlos Rodriguez",
  "url": "/contributors/Carlos-Rodriguez.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Carlos Rodriguez\n            \n            TechSolutions Inc.\n            CEO\n          \n        \n        \n          Carlos Rodriguez is an innovative tech entrepreneur, founder of TechSolutions Inc., and a pioneer in developing smart city technologies. His expertise lies in integrating IoT with urban infrastructure to enhance efficiency and quality of life. Carlos has spearheaded projects in multiple cities worldwide, transforming them into tech-savvy urban centers. He frequently speaks at international technology forums and collaborates with universities to foster young tech talents. Carlos holds a degree in Computer Engineering from MIT and an MBA from Harvard Business School. His vision is to bridge the gap between technology and everyday life.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
  "tags": null,
  "sdg": null,
  "excerpt": "Carlos Rodriguez TechSolutions Inc. CEO Carlos Rodriguez is an innovative tech entrepreneur, founder of TechSolutions Inc., and a pioneer in...",
  "id": 29
},{
  "title": "Lena Kim",
  "url": "/contributors/Lena-Kim.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Lena Kim\n            \n            Global Finance Corp.\n            Senior Financial Analyst\n          \n        \n        \n          Lena Kim is a financial analyst with a sharp eye for market trends and economic patterns. Currently working at Global Finance Corp., she provides insightful analysis to help shape investment strategies and market forecasts. Lena’s expertise includes emerging markets and cryptocurrency. She is known for her comprehensive reports and has been a guest speaker at various financial summits. Lena earned her degree in Economics from the London School of Economics and is currently pursuing her CFA certification. She is passionate about mentoring young women interested in finance and economics.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
  "tags": null,
  "sdg": null,
  "excerpt": "Lena Kim Global Finance Corp. Senior Financial Analyst Lena Kim is a financial analyst with a sharp eye for market...",
  "id": 29
},{
  "title": "Marcus Johnson",
  "url": "/contributors/Marcus-Johnson.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Marcus Johnson\n            \n            Urban Revitalization Project\n            Chief Urban Planner\n          \n        \n        \n          Marcus Johnson is an experienced urban planner and architect, currently leading the Urban Revitalization Project in New York. With a focus on sustainable and inclusive urban development, Marcus has been instrumental in transforming cityscapes into vibrant, functional spaces. He collaborates closely with local communities to ensure their needs are met in urban designs. Marcus regularly contributes articles to architecture journals and is a guest lecturer at Columbia University. He holds a Master's degree in Architecture from Princeton University. Marcus is an advocate for green building practices and pedestrian-friendly city planning.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
  "tags": null,
  "sdg": null,
  "excerpt": "Marcus Johnson Urban Revitalization Project Chief Urban Planner Marcus Johnson is an experienced urban planner and architect, currently leading the...",
  "id": 29
},{
  "title": "Sophia Martinez",
  "url": "/contributors/Sophia-Martinez.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Sophia Martinez\n            \n            Human Rights Watch\n            Lead Counsel\n          \n        \n        \n          Sophia Martinez is a human rights lawyer with a strong commitment to justice and equality. Working with Human Rights Watch, she has been involved in high-profile cases defending the rights of marginalized communities. Sophia’s work extends beyond the courtroom to public advocacy and legal reform. She is a key figure in initiatives for legal literacy and has conducted workshops globally. Sophia holds a law degree from Yale Law School and has been recognized for her contributions with several awards. She is a vocal advocate for women’s rights and refugee protection.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
  "tags": null,
  "sdg": null,
  "excerpt": "Sophia Martinez Human Rights Watch Lead Counsel Sophia Martinez is a human rights lawyer with a strong commitment to justice...",
  "id": 29
},{
  "title": "Daniel Chen",
  "url": "/contributors/Daniel-Chen.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Daniel Chen\n            \n            BioTech Solutions\n            Head of Research\n          \n        \n        \n          Daniel Chen is a distinguished biomedical researcher focused on developing innovative solutions for chronic diseases. He currently leads a research team at BioTech Solutions, working on breakthrough therapies in immunology. Daniel’s work has been published in numerous scientific journals, and he holds several patents in medical technology. He is also a regular speaker at international medical conferences. Daniel earned his PhD in Biomedical Engineering from Stanford University. He is passionate about bridging the gap between research and real-world medical applications, aiming to improve patient care and treatment methods.\n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n",
  "tags": null,
  "sdg": null,
  "excerpt": "Daniel Chen BioTech Solutions Head of Research Daniel Chen is a distinguished biomedical researcher focused on developing innovative solutions for...",
  "id": 29
}]


// builds search
$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var contentdiv = $('#content');

    var query = $(this).val();
    var result = index.search(query);
    resultdiv.empty();
    contentdiv.empty()
    
    // Add status
    resultdiv.prepend('<h6 class="">Found '+result.length+' result(s)</h6>');
    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = `
      <div class="tertiary">
        <h5 class="" tabindex="0" data-viewport="false">
        <a href="/Purple-Boot-initiative${store[ref]?.url}">
            ${store[ref]?.title}
        </a>
        </h5>
        <p>
            ${store[ref].excerpt}
        </p>
    </div>
      `

      resultdiv.append(searchitem);
    }
  });
  
  function customSort(a, b) {
    // Check if strings start with a number
    let startsWithNumberA = /^\d+/.test(a);
    let startsWithNumberB = /^\d+/.test(b);
    
    // If both start with numbers, sort by number
    if (startsWithNumberA && startsWithNumberB) {
        let numA = parseInt(a.match(/^\d+/)[0]);
        let numB = parseInt(b.match(/^\d+/)[0]);
        return numA - numB;
    } else if (startsWithNumberA) {
        // If only a starts with a number, it comes first
        return -1;
    } else if (startsWithNumberB) {
        // If only b starts with a number, it comes first
        return 1;
    } else {
        // Otherwise, sort alphabetically
        return a.localeCompare(b);
    }
}

  //POPULATE TAGS AND SDG FILTER
var tagsdiv = $('#tag-div');
var sdgdiv = $('#sdg-div')

if(tags.length > 0){
    tags = tags.sort(customSort);
    let tg = `
    <div class="multi-select" data-multi-select="">
        <button aria-label="Region" aria-expanded="false" data-id="tag">
        Tags
        </button>
        <ul
        data-type="region"
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true"
        >
    `;

    for(let i = 0; i < tags.length; i++) {
        tg += `
            <li role="option">
                <div class="form-check">
                    <label for="tag${i+1}">${capitalize(tags[i])}</label>
                    <input
                        type="checkbox"
                        id="${tags[i]}"
                        name="tags"
                        value="${tags[i]}"
                    />
                </div>
            </li>  
        `;
    }

    tg += `
            </ul>
        </div>
    `;

    tagsdiv.append(tg)
}

if(sdg.length > 0){
    sdg = sdg.sort(customSort);
    let tg = `
    <div class="multi-select" data-multi-select="">
        <button aria-label="Region" aria-expanded="false" data-id="sdg">
        SDG
        </button>
        <ul
        data-type="region"
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true"
        >
    `;

    for(let i = 0; i < sdg.length; i++) {
        tg += `
            <li role="option">
                <div class="form-check">
                    <label for="sdg${i+1}">${capitalize(sdg[i])}</label>
                    <input
                        type="checkbox"
                        id="${sdg[i]}"
                        name="sdg"
                        value="${sdg[i]}"
                    />
                </div>
            </li>  
        `;
    }

    tg += `
            </ul>
        </div>
    `;

    sdgdiv.append(tg)
}

let taglist = []
let sdglist = []

let searchitemfn = post => `
<div class="tertiary">
    <h5 class="" tabindex="0" data-viewport="false">
    <a href="/Purple-Boot-initiative${post?.url}">
        ${post?.title}
    </a>
    </h5>
    <p>
        ${post.excerpt}
    </p>
</div>
`

let resultdiv = $('#results');
let contentdiv = $('#content');
let contentCopy = $("#content").html(); // Store the current content

let filterresult = () => {
    resultdiv.empty()
    resultdiv.prepend('<h6 class="">Showing results for  ' + [...sdglist, ...taglist].toString() + '</h6>');
    for(post of store){
        if(post?.tags?.some(tg => taglist.includes(tg) )){
            contentdiv.empty()
            var searchitem = searchitemfn(post)

            resultdiv.append(searchitem);
        }
        else if(post?.sdg?.some(tg => sdglist.includes(tg) )){
            contentdiv.empty()
            var searchitem = searchitemfn(post)

            resultdiv.append(searchitem);
        }
    };
}

$(document).on('multiSelectInputToggle', (e) => {
    let { value, checked, name } = e.target;
    
    if(checked && name === 'tags') taglist.push(value)
    else if(checked && name === 'sdg') sdglist.push(value)
    else if(!checked && name === 'sdg' && sdglist.includes(value)) sdglist.splice(sdglist.indexOf(value), 1)
    else if(taglist.includes(value)) taglist.splice(taglist.indexOf(value), 1)
  
    filterresult()

});

$(document).on('filterSearchChipRemoval', (e) => {
    let textContent = e.target.getAttribute('option-name');
    sdglist.includes(textContent) && sdglist.splice(sdglist.indexOf(textContent), 1)
    taglist.includes(textContent) && taglist.splice(taglist.indexOf(textContent), 1)
    filterresult()
});

$(document).on('filterSearchClear', (e) => {
    sdglist = [];
    taglist =  [];
    resultdiv.empty()
    $("#content").html(contentCopy);
});

//GET ELEMTENTS WITH ID TAGS AND SDG
$('.tag-chip').on('click', e =>{
    let textContent = e.target.getAttribute('text-value');
    taglist = [ textContent ]
    sdglist = []
    contentdiv.empty()
    filterresult()
} )

$('.sdg-chip').on('click', e =>{
    let textContent = e.target.getAttribute('text-value');
    sdglist = [textContent]
    taglist = []
    contentdiv.empty()
    filterresult()
} )

})