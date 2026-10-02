/**
 * Data definitions and bilingual content for English Week 2026 - Holi Festival
 */

const TEAM = {
  teacher: { 
    name: 'Prof. Cynthia Maurizzio', 
    role_en: 'English Teacher', 
    role_es: 'Profesora de Inglés', 
    emoji: '👩‍🏫',
    thanks_en: 'Thank you for making this possible! 🙌',
    thanks_es: '¡Gracias por hacer esto posible! 🙌'
  },
  studentsTitle_en: 'Students — 2nd Year',
  studentsTitle_es: 'Alumnos — 2° Año',
  students: [
    'Gabriela Wasquin',
    'Leticia',           
    'Collante Luciano',
    'Sofía',             
    'Tobi Mario',
    'Tobi Adriana',
    'Cardozo Rodrigo'
  ],
};

const COLOR_DATA = [
  { 
    color: '#FF3CAC', 
    name_en: 'Pink', 
    name_es: 'Rosa', 
    emoji: '🌸', 
    short_en: 'Love & Compassion', 
    short_es: 'Amor y Compasión', 
    detail_en: 'Pink represents love, care and affection. It symbolises the bond between family and friends.',
    detail_es: 'El rosa representa el amor, el cariño y el afecto. Simboliza la unión entre familia y amigos.'
  },
  { 
    color: '#FF7000', 
    name_en: 'Orange', 
    name_es: 'Naranja', 
    emoji: '🔶', 
    short_en: 'Courage & Wisdom', 
    short_es: 'Valentía y Sabiduría', 
    detail_en: 'Orange is the colour of fire and bravery. It represents strength, wisdom and enthusiasm.',
    detail_es: 'El naranja es el color del fuego y el coraje. Representa fuerza, sabiduría y entusiasmo.'
  },
  { 
    color: '#FFD700', 
    name_en: 'Yellow', 
    name_es: 'Amarillo', 
    emoji: '🌟', 
    short_en: 'Happiness & Energy', 
    short_es: 'Felicidad y Energía', 
    detail_en: 'Yellow symbolises joy, knowledge, and the positive energy of the sun. It evokes learning and cheerfulness.',
    detail_es: 'El amarillo simboliza alegría, conocimiento y la energía del sol. Evoca aprendizaje y optimismo.'
  },
  { 
    color: '#00E676', 
    name_en: 'Green', 
    name_es: 'Verde', 
    emoji: '🍀', 
    short_en: 'Nature & New Beginnings', 
    short_es: 'Naturaleza y Nuevos Comienzos', 
    detail_en: 'Green stands for nature, growth, fertility and the start of spring — the season Holi celebrates.',
    detail_es: 'El verde representa la naturaleza, el crecimiento y el inicio de la primavera que celebra Holi.'
  },
  { 
    color: '#00E5FF', 
    name_en: 'Blue', 
    name_es: 'Azul', 
    emoji: '💙', 
    short_en: 'Calm & Divinity', 
    short_es: 'Calma y Divinidad', 
    detail_en: 'Blue is associated with Lord Krishna and the sky. It represents calmness, wisdom and the infinite.',
    detail_es: 'El azul está asociado al cielo y a Krishna. Representa tranquilidad, sabiduría y lo infinito.'
  },
  { 
    color: '#7B2FFF', 
    name_en: 'Purple', 
    name_es: 'Violeta', 
    emoji: '💜', 
    short_en: 'Mystery & Magic', 
    short_es: 'Misterio y Magia', 
    detail_en: 'Purple blends the calm of blue with the energy of red, symbolising magic, creativity and mystery.',
    detail_es: 'El violeta combina la calma del azul con la energía del rojo, simbolizando magia y creatividad.'
  },
  { 
    color: '#FF4444', 
    name_en: 'Red', 
    name_es: 'Rojo', 
    emoji: '❤️', 
    short_en: 'Fertility & Beauty', 
    short_es: 'Fertilidad y Belleza', 
    detail_en: 'Red is one of the most sacred Holi colours. It symbolises love, beauty and celebration.',
    detail_es: 'El rojo es uno de los colores más sagrados de Holi. Simboliza amor, belleza y celebración.'
  },
  { 
    color: '#FFFFFF', 
    name_en: 'White', 
    name_es: 'Blanco', 
    emoji: '🤍', 
    short_en: 'Peace & Purity', 
    short_es: 'Paz y Pureza', 
    detail_en: 'White represents purity, peace and the blank canvas on which all colours of life are painted.',
    detail_es: 'El blanco representa pureza, paz y el lienzo limpio donde se pintan todos los colores de la vida.'
  },
];

const TRIVIA = [
  {
    emoji: '🇮🇳',
    question_en: 'In which country did the Holi festival originate?',
    question_es: '¿En qué país se originó el festival de Holi?',
    options_en: ['China', 'India', 'Nepal', 'Thailand'],
    options_es: ['China', 'India', 'Nepal', 'Tailandia'],
    correct: 1,
  },
  {
    emoji: '📅',
    question_en: 'Holi is traditionally celebrated at the end of which season?',
    question_es: '¿Al final de qué estación se celebra tradicionalmente Holi?',
    options_en: ['Summer', 'Autumn', 'Winter', 'Spring'],
    options_es: ['Verano', 'Otoño', 'Invierno', 'Primavera'],
    correct: 2,
  },
  {
    emoji: '🔥',
    question_en: 'What does the bonfire lit on the eve of Holi symbolise?',
    question_es: '¿Qué simboliza la fogata que se enciende en la víspera de Holi?',
    options_en: ['Warmth in winter', 'The victory of good over evil', 'A harvest offering', 'A welcome for rain'],
    options_es: ['Calor en invierno', 'La victoria del bien sobre el mal', 'Una ofrenda de cosecha', 'Una bienvenida a la lluvia'],
    correct: 1,
  },
  {
    emoji: '🌙',
    question_en: 'What is the name of the first night of Holi celebrations?',
    question_es: '¿Cómo se llama la primera noche de celebración de Holi?',
    options_en: ['Holi Purnima', 'Holika Dahan', 'Rangwali Holi', 'Dhulandi'],
    options_es: ['Holi Purnima', 'Holika Dahan', 'Rangwali Holi', 'Dhulandi'],
    correct: 1,
  },
  {
    emoji: '🎨',
    question_en: 'What are the coloured powders used in Holi called?',
    question_es: '¿Cómo se llaman los polvos de colores usados en Holi?',
    options_en: ['Tilak', 'Mehndi', 'Gulal', 'Sindoor'],
    options_es: ['Tilak', 'Mehndi', 'Gulal', 'Sindoor'],
    correct: 2,
  },
  {
    emoji: '💧',
    question_en: 'Besides powder, what else is traditionally thrown during Holi?',
    question_es: 'Además de polvos de colores, ¿qué otra cosa se arroja durante Holi?',
    options_en: ['Sand', 'Flower petals', 'Coloured water', 'Rice'],
    options_es: ['Arena', 'Pétalos de flores', 'Agua de colores', 'Arroz'],
    correct: 2,
  },
  {
    emoji: '🎵',
    question_en: 'Which religion is most closely associated with the Holi festival?',
    question_es: '¿Qué religión está más asociada con el festival de Holi?',
    options_en: ['Buddhism', 'Islam', 'Sikhism', 'Hinduism'],
    options_es: ['Budismo', 'Islam', 'Sijismo', 'Hinduismo'],
    correct: 3,
  },
  {
    emoji: '🌍',
    question_en: 'Which is NOT a common nickname for Holi?',
    question_es: '¿Cuál NO es un apodo común para el festival de Holi?',
    options_en: ['Festival of Colours', 'Spring Festival', 'Rainbow Carnival', 'Festival of Love'],
    options_es: ['Festival de los Colores', 'Festival de Primavera', 'Carnaval del Arcoíris', 'Festival del Amor'],
    correct: 2,
  },
];

/** Word pairs for Match the Pairs game (Elementary Level) */
const WORD_PAIRS_ROUNDS = [
  {
    title_en: 'Round 1: Holi Elements 🌸',
    title_es: 'Ronda 1: Elementos de Holi 🌸',
    pairs: [
      { id: 'p1', emoji: '🎨', en: 'Coloured powder',  es: 'Polvo de colores' },
      { id: 'p2', emoji: '🔥', en: 'Big bonfire',      es: 'Gran fogata' },
      { id: 'p3', emoji: '👕', en: 'White clothes',    es: 'Ropa blanca' },
      { id: 'p4', emoji: '🎈', en: 'Water balloons',   es: 'Globos de agua' },
      { id: 'p5', emoji: '🍬', en: 'Sweet treats',     es: 'Golosinas ricas' },
      { id: 'p6', emoji: '🌸', en: 'Spring season',    es: 'Estación de primavera' },
    ]
  },
  {
    title_en: 'Round 2: Actions & Fun 🎉',
    title_es: 'Ronda 2: Acciones y Diversión 🎉',
    pairs: [
      { id: 'p7',  emoji: '👐', en: 'Throw powder',       es: 'Arrojar polvo' },
      { id: 'p8',  emoji: '💃', en: 'Dance and sing',     es: 'Bailar y cantar' },
      { id: 'p9',  emoji: '🎉', en: 'Celebrate together', es: 'Celebrar juntos' },
      { id: 'p10', emoji: '🏆', en: 'Win a prize',        es: 'Ganar un premio' },
      { id: 'p11', emoji: '🤝', en: 'Good friends',       es: 'Buenos amigos' },
      { id: 'p12', emoji: '😋', en: 'Eat sweets',         es: 'Comer dulces' },
    ]
  }
];
