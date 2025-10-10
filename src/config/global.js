export default {
  global: {
    Name: 'Estrategias de contenido',
    Description:
      'Este componente formativo está diseñado para guiar a los aprendices en la planificación estratégica de contenidos digitales, proporcionando conocimientos sobre la importancia de las narrativas digitales, la construcción de mensajes persuasivos y la utilización de herramientas digitales para su desarrollo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-contenido.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '<i>Storytelling</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Elementos narrativos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Importancia en el <i>marketing</i>',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Conexiones emocionales',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estrategias de contenidos basadas en <i>storytelling</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Narrativas comunes',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Adaptación de narrativas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Casos de éxito',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Técnicas para fortalecer el <i>engagement</i>',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Planificación de contenidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Definición de objetivos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Calendarios',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Mapas de contenido',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Herramientas digitales',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Producción de contenidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Fundamentos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos y características',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Proceso',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Técnicas de persuasión',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Técnicas de adaptación a medios',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Herramientas de producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Texto, imagen y sonido ',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Video',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Calidad de los recursos',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Técnicas de escritura para contenidos narrativos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Redacción persuasiva y creativa',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Captación de atención',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Historias en mensajes breves',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF02_63110191_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Herramientas digitales',
      referencia:
        'Thomas, A. (2018). <i>23 open source audio-visual production tools</i>. Opensource.com.',
      tipo: 'Artículo web',
      link:
        'https://opensource.com/article/18/2/open-source-audio-visual-production-tools',
    },
    {
      tema: 'Importancia del <i>Storytelling</i> en el <i>marketing</i>',
      referencia:
        'HubSpot. (2022). <i>Qué es y cómo hacer un storytelling</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=77TAn3GuKSg',
    },
    {
      tema: 'Narrativas en <i>marketing</i>',
      referencia:
        'Mavericks Marketing. (2024). <i>Narrative marketing: Harnessing the power of storytelling in your brand strategy</i>. ',
      tipo: 'Artículo web',
      link:
        'https://mavericksmarketing.com/the-ultimate-guide-to-narrative-marketing-harnessing-the-power-of-storytelling-in-your-brand-strategy/',
    },
    {
      tema: 'Planificación de contenidos',
      referencia:
        'Planable. (2025). <i>13 content planning tools for marketing success in 2025.</i> ',
      tipo: 'Artículo web',
      link: 'https://planable.io/blog/content-planning-tools/',
    },
  ],
  glosario: [
    {
      termino: 'Calendario de publicación',
      significado:
        'Herramienta de planificación que organiza los tiempos, formatos y canales de distribución de contenido digital, asegurando coherencia y frecuencia adecuada.',
    },
    {
      termino: 'Contenido digital',
      significado:
        'Información producida en formatos multimedia (texto, imagen, audio, video) para ser distribuida en plataformas digitales con fines comunicativos, educativos o comerciales.',
    },
    {
      termino: '<i>Engagement</>',
      significado:
        'Nivel de interacción, conexión emocional y participación que una audiencia establece con un contenido, marca o mensaje digital.',
    },
    {
      termino: 'Mapa de contenido',
      significado:
        'Esquema estratégico que organiza temáticas, subtemas, formatos y canales, facilitando la coherencia narrativa dentro de una estrategia de comunicación digital.',
    },
    {
      termino: 'Narrativa digital',
      significado:
        'Relato adaptado a medios digitales que combina estructura narrativa tradicional con formatos breves, interactivos y multimedia para captar la atención del usuario.',
    },
    {
      termino: 'Narrativa emocional',
      significado:
        'Tipo de <i>storytelling</i> que apela a sentimientos universales como la nostalgia, la felicidad o la motivación para generar conexión profunda con la audiencia.',
    },
    {
      termino: 'Narrativa heroica',
      significado:
        'Estructura narrativa que presenta a un personaje enfrentando desafíos y superando obstáculos, generando inspiración y admiración en el público.',
    },
    {
      termino: 'Planificación estratégica',
      significado:
        'Proceso de organización y diseño de contenidos digitales con base en objetivos comunicacionales, públicos meta y recursos disponibles.',
    },
    {
      termino: 'Redacción persuasiva',
      significado:
        'Técnica de escritura orientada a provocar emociones, generar acción y convencer al lector mediante el uso de lenguaje evocador y estructuras narrativas.',
    },
    {
      termino: '<i>Storytelling</i>',
      significado:
        'Técnica de comunicación que utiliza historias estructuradas para transmitir mensajes significativos, generar empatía y fortalecer el vínculo con la audiencia.',
    },
  ],
  referencias: [
    {
      referencia:
        'Araujo. F. (2023). <i>¿Qué es la creación de contenido digital y para qué sirve?</i> Los Creativos.',
      link: 'https://loscreativos.mx/marketing/crear-buen-contenido-digital/',
    },
    {
      referencia:
        'Elmas, B. (2025). <i>8 best persuasive writing techniques</i>. Eskritor.',
      link: 'https://eskritor.com/persuasive-writing/',
    },
    {
      referencia:
        'Esparza, J. (2016). <i>Narrativa y storytelling</i>. Medium.',
      link:
        'https://medium.com/@Ruiz_Esparza/narrativa-y-storytelling-aff486f3497c',
    },
    {
      referencia:
        'Navarro, Z. (2009). <i>La industria de los contenidos en internet</>. Questión, 1.',
      link: 'https://sedici.unlp.edu.ar/handle/10915/32250',
    },
    {
      referencia:
        'Redondo, E. (2016). <i>Storytelling multimedia</i>. Globorama.',
      link: 'https://www.globograma.es/storytelling-multimedia',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nicolas Cruz Ríos',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
