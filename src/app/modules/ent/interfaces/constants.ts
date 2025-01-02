import { teachers } from "./enum";

import { IData } from "./interface";

export const DATA: IData[] = [
  {
    display: true,
    name: 'Предпринимательство',
    description: '',
    items: [
      {
        order: 1,
        name: 'Личные цели',
        teacher: [teachers.ivanov, teachers.kapura],
        description: '',
      },
      {
        order: 2,
        name: 'Творческое предпринимательство',
        teacher: [teachers.lavrov],
        description: 'Что такое предпринимательство. Креативный предприниматель – кто он? Развитие предпринимательства в современном контексте, тренды и вызовы.',
      },
      {
        order: 3,
        name: 'Творческие проекты',
        teacher: [teachers.ivanov],
        description: 'Как создаются творческие проекты, какое влияние они оказывают на человека и общество. Какую проблему решает ваш проект и как этим воспользоваться.',
      },
      {
        order: 4,
        name: 'Идея творческого проекта',
        teacher: [teachers.malakhova],
        description: 'Роль творческих проектов в развитии среды, территорий и рынков. Как найти уникальную идею для своего проекта и затем его реализовать.',
      },
    ]
  },
  {
    display: true,
    name: 'Личность предпринимателя',
    description: '',
    items: [
      {
        order: 1,
        name: 'Компетенции предпринимателя',
        teacher: [teachers.ivanov, teachers.kapura],
        description: 'Компетенции предпринимателя и личностный рост. Эмоциональный интеллект, как инструмент управления.',
      },
      {
        order: 2,
        name: 'Вебинар блогеров',
        teacher: [teachers.lyapcev, teachers.lyapceva],
        description: '',
      },
      {
        order: 3,
        name: 'Поиск призвания',
        teacher: [teachers.lavrenova],
        description: 'Как найти своё призвание. Самоанализ и выявление личных интересов и сильных сторон. Изучение способов совмещения страсти и карьеры. Разработка стратегии для принятия осознанных решений, ведущих к реализации своих талантов и жизненных целей.',
      },
      {
        order: 4,
        name: 'Команда и роли в проекте',
        teacher: [teachers.lavrenova],
        description: 'Определение ключевых ролей и обязанностей в проектной команде. Стратегии эффективного распределения задач с учетом компетенций и опыта участников. Методы улучшения командной работы и коммуникации для достижения общих целей проекта.',
      },
      {
        order: 5,
        name: 'ИГРА OKR-клуб',
        teacher: [teachers.ivanov, teachers.stepanova],
        description: 'Прожарка идей. Поиск возможностей для создания и развития бизнеса. Оформление концепций проектов.',
      },
    ],
  },
  {
    display: true,
    name: 'Стороны и коммуникации',
    description: '',
    items: [
      {
        order: 1,
        name: 'Ведение переговоров',
        teacher: [teachers.galaeva],
        description: 'Подготовка к переговорам, включая сбор информации и определение целей. Стратегии и техники эффективного общения. Управление конфликтами и умение находить компромиссы в сложных ситуациях.',
      },
      {
        order: 2,
        name: 'Риторика',
        teacher: [teachers.galaeva],
        description: 'Основы риторики и её значение в публичных выступлениях. Методы убеждения и аргументации для усиления воздействия на аудиторию. Развитие навыков выразительного и структурированного изложения мыслей для эффективного общения.',
      },
      {
        order: 3,
        name: 'Презентация',
        teacher: [teachers.vetkova],
        description: 'Основы презентации для предпринимателя.',
      },
      {
        order: 4,
        name: 'Публичные выступления',
        teacher: [teachers.galaeva],
        description: 'Подготовка текста для эффективного донесения идеи. Техники управления волнением и уверенного поведения на сцене. Использование невербальных средств общения (жестов, мимики, зрительного контакта) для усиления воздействия на аудиторию.',
      },
      {
        order: 5,
        name: 'Тренинг по самопрезентации',
        teacher: [teachers.galaeva],
        description: 'Интенсивный тренинг с акцентом на ролевые игры. Практика выступлений перед аудиторией с анализом.',
      },
    ],
  },
  {
    display: true,
    name: 'Маркетинг',
    description: '',
    items: [
      {
        order: 1,
        name: 'Упаковка проекта',
        teacher: [teachers.malakhova],
        description: 'Как разработать бренд, упаковка проекта и продукта, визуальная идентичность.',
      },
      {
        order: 2,
        name: 'Стратегия коммуникации',
        teacher: [teachers.vasilenko],
        description: 'Каналы продвижения и бюджет рекламы. Разрабатываем стратегию коммуникации.',
      },
      {
        order: 3,
        name: 'ИГРА. Многономика',
        teacher: [teachers.ivanov, teachers.stepanova],
        description: 'Стратегическая экономическая игра, в которой игрок управляет виртуальной экономикой, развивая и оптимизируя различные аспекты бизнеса и производства.',
      },
      {
        order: 4,
        name: 'Продвижение продукта',
        teacher: [teachers.vasilenko],
        description: 'Воркшопы по digital-маркетингу и SMM.',
      },
      {
        order: 5,
        name: 'Медиапланирование',
        teacher: [teachers.vasilenko],
        description: 'Планирование медиакампаний для проектов участников. Анализ результатов и корректировка маркетингового плана. Обучение на основе реальных данных и метрик.',
      },
      {
        order: 6,
        name: 'Рынок и конкуренция',
        teacher: [teachers.malakhova],
        description: 'Исследования конкурентной среды. Практическое применение аналитических инструментов.',
      },
      {
        order: 7,
        name: 'Бизнес-игра "Умение создавать информационные концепции"',
        teacher: [teachers.vasilenko],
        description: '',
      },
    ],
  },
  {
    display: true,
    name: 'Производство и продукт',
    description: '',
    items: [
      {
        order: 1,
        name: 'Производство и продукт',
        teacher: [teachers.naimushin],
        description: 'Поиск и верификация идей.',
      },
      {
        order: 2,
        name: 'Бизнес-процессы',
        teacher: [teachers.lavrov],
        description: 'Концепция продукта и планирование производства. Уровень сложности производства. Виды производства в творческом предпринимательстве. Бизнес-процессы и эффективность производства.',
      },
      {
        order: 3,
        name: 'Бизнес-модель Остервальдера',
        teacher: [teachers.lavrov],
        description: 'Составляем бизнес-модель своего проекта и бизнеса и учимся её настраивать.',
      },
      {
        order: 4,
        name: 'Все что нужно знать о презентациях',
        teacher: [teachers.vetkova],
        description: 'Правила и секреты успешных презентаций для инвесторов, партнеров и клиентов.',
      },
    ]
  },
  {
    display: true,
    name: 'Управление проектами',
    description: '',
    items: [
      {
        order: 1,
        name: 'Управление временем',
        teacher: [teachers.malakhova],
        description: 'Управление проектами. Стадии проекта и календарь событий.',
      },
      {
        order: 2,
        name: 'Управление ресурсами',
        teacher: [teachers.lavrov],
        description: 'Как собрать еще больше ресурсов для реализации проекта.',
      },
      {
        order: 3,
        name: 'Финансовое моделирование',
        teacher: [teachers.lavrov],
        description: 'Работа над реальными проектами, включая финансовое моделирование.',
      },
    ]
  },
  {
    display: true,
    name: 'Финансирование',
    description: '',
    items: [
      {
        order: 1,
        name: 'Бухгалтерский учет и налоги',
        teacher: [teachers.boiko],
        description: 'Расчет налогов.',
      },
      {
        order: 2,
        name: 'Банковское взаимодействие и финансовые продукты',
        teacher: [teachers.philatova],
        description: '',
      },
      {
        order: 3,
        name: 'Инвестиционный бюджет',
        teacher: [teachers.antonov],
        description: 'Фокус на кейс-стади и инвестиционных стратегиях.',
      },
    ]
  },
  {
    display: true,
    name: 'Правовые аспекты',
    description: '',
    items: [
      {
        order: 1,
        name: 'Организация и договоры',
        teacher: [teachers.glazkova],
        description: 'Организационно-правовые формы.',
      },
      {
        order: 2,
        name: 'Проекты',
        teacher: [teachers.ivanov, teachers.kapura],
        description: 'Подготовка проектов участников к публичной защите.',
      },
      {
        order: 3,
        name: 'Экосистема креативной деятельности',
        teacher: [teachers.nevolin],
        description: 'Управление, создание, оформление, монетизация и оборот.',
      },
      {
        order: 4,
        name: 'Разрешение споров',
        teacher: [teachers.glazkova],
        description: 'Решение споров. Ролевые игры и моделирование спорных ситуаций. Заключение договоров.',
      },
      {
        order: 5,
        name: 'Практическое занятие по финансовой грамотности. Право - интерактивный воркшоп с анализом реальных кейсов.',
        teacher: [teachers.philatova, teachers.glazkova],
        description: '',
      },
    ]
  },
  {
    display: true,
    name: 'Бизнес-модели',
    description: '',
    items: [
      {
        order: 1,
        name: 'Бизнес-модели',
        teacher: [teachers.kapura],
        description: 'Модель устойчивого развития организаций креативных индустрий. Цифровые модели бизнеса. Модель Эша Маурье и Модель S.P.A.C.E.',
      },
    ]
  },
  {
    display: false,
    name: '',
    description: '',
    items: [
      {
        order: 1,
        name: '',
        teacher: [teachers.lavrov],
        description: '',
      },
    ]
  },
]

export const TMP_MENU = [
  {
    code: '01',
    name: 'Личные цели',
  },
  {
    code: '02',
    name: 'Образ',
  },
  {
    code: '03',
    name: 'Объект',
  },
  {
    code: '04',
    name: 'Идея',
  },
  {
    code: '05',
    name: 'Команда',
  },
  {
    code: '06',
    name: 'Стороны',
  },
  {
    code: '07',
    name: 'Презентация',
  },
  {
    code: '08',
    name: 'Упаковка',
  },
  {
    code: '09',
    name: 'Аудитория',
  },
  {
    code: '10',
    name: 'Продвижение',
  },
  {
    code: '11',
    name: 'Конкуренты',
  },
  {
    code: '12',
    name: 'Продукты',
  },
  {
    code: '13',
    name: 'Финансовая Модель',
  },
  {
    code: '14',
    name: 'Календарь',
  },
  {
    code: '15',
    name: 'Ресурсы',
  },
  {
    code: '16',
    name: 'Бюджет',
  },
  {
    code: '17',
    name: 'Бизнес-модель',
  },
]
