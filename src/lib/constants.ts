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
    description: string;
    specs: {
        weight: string;
        shelfLife: string;
        calories: string;
    };
}

export const PRODUCTS: Product[] = [
    {
        id: 'dark-cake',
        name: 'Dark Cake',
        price: '$45',
        themeClass: 'theme-dark-chocolate',
        gradient: 'linear-gradient(135deg, #1a1512 0%, #3d2b1f 100%)',
        sections: [
            { title: 'Pure Intensity', subtitle: '70% Cocoa Precision' },
            { title: 'Velvet Texture', subtitle: 'Sculpted for the Palate' },
            { title: 'Rich Legacy', subtitle: 'The Future of Dark Chocolate' },
            { title: 'Dark Cake', subtitle: 'The Apex of Freshness' },
        ],
        description: 'A deep, immersive journey into the heart of Ecuadorian cocoa. Crafted with surgical precision for a flavor profile that is both complex and clean.',
        specs: {
            weight: '800g',
            shelfLife: '72 Hours',
            calories: '320 kcal / 100g',
        },
    },
    {
        id: 'milk-cake',
        name: 'Milk Cake',
        price: '$42',
        themeClass: 'theme-milk-chocolate',
        gradient: 'linear-gradient(135deg, #2b1f1a 0%, #5d4037 100%)',
        sections: [
            { title: 'Silken Harmony', subtitle: 'Alpine Milk Fusion' },
            { title: 'Golden Hue', subtitle: 'Captured at Perfection' },
            { title: 'Smooth Flow', subtitle: 'Redefining the Classic' },
            { title: 'Milk Cake', subtitle: 'Elegance in Every Bite' },
        ],
        description: 'The perfect equilibrium between rich cocoa and creamy Alpine milk. A smoother, more approachable take on our signature nano-structure.',
        specs: {
            weight: '850g',
            shelfLife: '48 Hours',
            calories: '350 kcal / 100g',
        },
    },
    {
        id: 'white-cake',
        name: 'White Cake',
        price: '$48',
        themeClass: 'theme-white-chocolate',
        gradient: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
        sections: [
            { title: 'Ivory Purity', subtitle: 'Natural Cocoa Butter' },
            { title: 'Vanilla Cloud', subtitle: 'Infused with Madagascar' },
            { title: 'Clean Finish', subtitle: 'Lighter than Air' },
            { title: 'White Cake', subtitle: 'Sublime Refinement' },
        ],
        description: 'An ethereal experience of pure cocoa butter and premium vanilla. Light, airy, and undeniably sophisticated.',
        specs: {
            weight: '750g',
            shelfLife: '48 Hours',
            calories: '380 kcal / 100g',
        },
    },
];
