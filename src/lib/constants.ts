export interface ProductSection {
    title: string;
    subtitle: string;
}

export interface Product {
    id: string;
    name: string;
    price: string;
    themeClass: string;
    gradient: string;
    sections: ProductSection[];
    label: string;
    description: string;
    specs: {
        label1: string;
        value1: string;
        label2: string;
        value2: string;
        label3: string;
        value3: string;
    };
    scroller: {
        imageDir: string;
        startFrame: number;
        endFrame: number;
        extension: string;
        filenamePrefix?: string;
        zeroPadding?: number;
    };
}

export const PRODUCTS: Product[] = [
    {
        id: 'triple-chocolate',
        name: 'Три Шоколада',
        label: 'Трио',
        price: '5200₽',
        themeClass: 'theme-chocolate',
        gradient: 'linear-gradient(135deg, #8D6E63 0%, #3E2723 100%)',
        sections: [
            { title: 'Белый Вельвет', subtitle: 'Швейцарский Белый' },
            { title: 'Молочная Нежность', subtitle: 'Бельгийский Молочный' },
            { title: 'Темная Страсть', subtitle: 'Эквадорский 70%' },
        ],
        description: 'Архитектурный шедевр для истинных гедонистов. Три слоя мусса из премиального шоколада разной интенсивности создают идеальный градиент вкуса. От нежной сливочной ноты до глубокого, терпкого финала.',
        specs: {
            label1: 'Какао',
            value1: '3 Сорта',
            label2: 'Слои',
            value2: 'Идеал',
            label3: 'Зависимость',
            value3: '100%',
        },
        scroller: {
            imageDir: '/chocolate/',
            startFrame: 18,
            endFrame: 192,
            extension: '.jpg',
        },
    },
    {
        id: 'exotic-fruit',
        name: 'Фруктовая Эйфория',
        label: 'Эйфория',
        price: '4600₽',
        themeClass: 'theme-mango',
        gradient: 'linear-gradient(135deg, #FFB74D 0%, #F57C00 100%)',
        sections: [
            { title: 'Тропический Шторм', subtitle: 'Манго и Маракуйя' },
            { title: 'Ягодный Бриз', subtitle: 'Малина и Клубника' },
            { title: 'Невесомость', subtitle: 'Ванильный Шифон' },
        ],
        description: 'Симфония свежести, где каждый кусочек — это путешествие. Сочное конфи из отборного манго и маракуйи встречается с дерзкой кислинкой свежих ягод. Всё это окутано облаком легчайшего сливочного крема на ванильном бисквите.',
        specs: {
            label1: 'Фрукты',
            value1: '7 Видов',
            label2: 'Текстура',
            value2: 'Шелк',
            label3: 'Свежесть',
            value3: '24/7',
        },
        scroller: {
            imageDir: '/fruit/',
            startFrame: 1,
            endFrame: 61,
            extension: '.webp',
        },
    },
    {
        id: 'red-velvet',
        name: 'Красный Бархат',
        label: 'Бархат',
        price: '4900₽',
        themeClass: 'theme-pomegranate',
        gradient: 'linear-gradient(135deg, #E57373 0%, #B71C1C 100%)',
        sections: [
            { title: 'Королевский Алый', subtitle: 'Плотный Бисквит' },
            { title: 'Сливочный Шелк', subtitle: 'Крем-Чиз Филадельфия' },
            { title: 'Скрытая Нота', subtitle: 'Тонкий Вкус Какао' },
        ],
        description: 'Икона кондитерского искусства в современной интерпретации. Узнаваемый влажный бисквит с тонким шоколадным послевкусием, прослоенный легендарным кремом на основе сыра Филадельфия. Классика, доведенная до абсолюта.',
        specs: {
            label1: 'Сыр',
            value1: 'Premium',
            label2: 'Цвет',
            value2: 'Passion',
            label3: 'Статус',
            value3: 'Icon',
        },
        scroller: {
            imageDir: '/red/',
            startFrame: 1,
            endFrame: 97,
            extension: '.jpg',
            filenamePrefix: 'ezgif-frame-',
            zeroPadding: 3,
        },
    },
];
