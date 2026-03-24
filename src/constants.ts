import { FamilyMember } from './types';

export const FAMILY_MEMBERS: FamilyMember[] = [
  {
    id: 'chenxi',
    name: 'Chenxi',
    role: 'Founder & Main Brand',
    description: 'The human behind the lab. Currently navigating the "Spring Job Hunting Season" with a cup of caffeine and a lot of hope.',
    avatar: '/chenxi-cats-drink-lab/chenxi_head.jpg',
    drinkLine: {
      id: 'chenxi-line',
      title: 'Chenxi\'s Lab Notes',
      subtitle: 'Human Energy & Clarity',
      musicTitle: 'Lo-fi Study Beats',
      themeColor: 'bg-[#F7F5F0]', // Warm Cream
      mainMenu: {
        id: 'chenxi-main',
        title: 'The Daily Lab',
        releaseDate: 'All Season',
        description: 'Essential fuels for the modern human. Available every day.',
        drinks: [
          {
            id: 'c-main-1',
            name: 'Signature Americano',
            description: 'Clean, crisp, and uncompromising.',
            ingredients: ['Double Espresso', 'Filtered Water', 'Ice (Optional)'],
            steps: ['Extract double espresso.', 'Add to 200ml hot or cold water.'],
            image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=800',
            tags: ['Classic', 'Essential']
          },
          {
            id: 'c-main-2',
            name: 'Oat Milk Latte',
            description: 'Smooth and creamy with a nutty finish.',
            ingredients: ['Espresso', 'Oat Milk'],
            steps: ['Steam oat milk.', 'Pour over fresh espresso.'],
            image: 'https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?auto=format&fit=crop&q=80&w=800',
            tags: ['Creamy', 'Vegan']
          }
        ]
      },
      menus: [
        {
          id: 'm1',
          title: 'Spring Job Hunting Special',
          releaseDate: '2024-03-20',
          description: 'A collection of drinks designed to keep the mind sharp and the heart calm during interview season.',
          drinks: [
            {
              id: 'c1',
              name: 'Interview Morning Matcha',
              description: 'A calm yet energizing start to a high-stakes day.',
              ingredients: ['Ceremonial Grade Matcha', 'Oat Milk', 'Honey', 'Hot Water'],
              steps: [
                'Sift 1 tsp matcha into a bowl.',
                'Add 2oz hot water (80°C) and whisk until frothy.',
                'Warm oat milk and froth separately.',
                'Pour matcha over milk and sweeten with honey.'
              ],
              image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=800',
              tags: ['Calm', 'Energy']
            },
            {
              id: 'c2',
              name: 'Resume Revive Espresso',
              description: 'Double shot of focus for those late-night edits.',
              ingredients: ['Double Espresso', 'Tonic Water', 'Lemon Slice', 'Ice'],
              steps: [
                'Fill a glass with ice.',
                'Pour 150ml tonic water.',
                'Slowly pour double espresso over the top.',
                'Garnish with a fresh lemon slice.'
              ],
              image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800',
              tags: ['Strong', 'Focus']
            }
          ]
        },
        {
          id: 'm2',
          title: 'Late Night Coding',
          releaseDate: '2024-01-15',
          description: 'Dark, strong, and slightly sweet for those long nights at the keyboard.',
          drinks: [
            {
              id: 'c3',
              name: 'Midnight Brew',
              description: 'Cold brew with a hint of cinnamon.',
              ingredients: ['Cold Brew Coffee', 'Cinnamon Stick', 'Maple Syrup'],
              steps: ['Steep coffee for 12 hours.', 'Add cinnamon.', 'Sweeten with maple syrup.'],
              image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800',
              tags: ['Cold', 'Strong']
            }
          ]
        }
      ]
    }
  },
  {
    id: 'kiro',
    name: 'Kiro',
    role: 'Chief Nap Officer',
    description: 'A fluffy white cloud with a penchant for sunbeams and expensive tuna.',
    avatar: '/chenxi-cats-drink-lab/kiro_head.jpg',
    drinkLine: {
      id: 'kiro-line',
      title: 'Kiro\'s Cloudy World',
      subtitle: 'Soft, Creamy & Dreamy',
      musicTitle: 'Afternoon Jazz',
      themeColor: 'bg-[#EBF1F5]', // Soft Mist Blue
      mainMenu: {
        id: 'kiro-main',
        title: 'Cloud Classics',
        releaseDate: 'All Season',
        description: 'The foundation of Kiro\'s fluffy world.',
        drinks: [
          {
            id: 'k-main-1',
            name: 'Pure Milk Tea',
            description: 'Simple, sweet, and comforting.',
            ingredients: ['Black Tea', 'Fresh Milk', 'Cane Sugar'],
            steps: ['Brew strong black tea.', 'Mix with warm milk.', 'Sweeten to taste.'],
            image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800',
            tags: ['Classic', 'Sweet']
          }
        ]
      },
      menus: [
        {
          id: 'k-m1',
          title: 'Cloudy Afternoon Series',
          releaseDate: '2024-02-10',
          description: 'Inspired by the softest clouds and the longest naps.',
          drinks: [
            {
              id: 'k1',
              name: 'White Cloud Latte',
              description: 'As fluffy as Kiro\'s tail.',
              ingredients: ['Coconut Milk', 'Vanilla Syrup', 'Whipped Cream', 'Marshmallows'],
              steps: [
                'Steam coconut milk with vanilla syrup.',
                'Pour into a tall glass.',
                'Top with a mountain of whipped cream.',
                'Add marshmallows for extra fluffiness.'
              ],
              image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=800',
              tags: ['Sweet', 'Fluffy']
            }
          ]
        }
      ]
    }
  },
  {
    id: 'canele',
    name: 'Canelé',
    role: 'Head of Mischief',
    description: 'Small, dark, and sweet—just like the pastry she was named after.',
    avatar: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&q=80&w=400',
    drinkLine: {
      id: 'canele-line',
      title: 'Canelé\'s Dark Kitchen',
      subtitle: 'Rich, Dark & Playful',
      musicTitle: 'Playful Piano',
      themeColor: 'bg-[#F5EAE6]', // Dusty Rose / Cocoa
      mainMenu: {
        id: 'canele-main',
        title: 'Dark Essentials',
        releaseDate: 'All Season',
        description: 'Rich and bold flavors that never go out of style.',
        drinks: [
          {
            id: 'ca-main-1',
            name: 'Classic Dark Cocoa',
            description: '70% dark chocolate for a pure cocoa experience.',
            ingredients: ['Dark Chocolate Chips', 'Whole Milk'],
            steps: ['Melt chocolate into milk slowly.', 'Whisk until smooth.'],
            image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=80&w=800',
            tags: ['Rich', 'Pure']
          }
        ]
      },
      menus: [
        {
          id: 'ca-m1',
          title: 'Midnight Mischief Cocoa',
          releaseDate: '2024-03-01',
          description: 'Rich chocolate flavors for the adventurous spirit.',
          drinks: [
            {
              id: 'ca1',
              name: 'Burnt Sugar Cocoa',
              description: 'Deep chocolate with a hint of caramel crunch.',
              ingredients: ['Dark Chocolate', 'Whole Milk', 'Brown Sugar', 'Sea Salt'],
              steps: [
                'Melt dark chocolate into simmering milk.',
                'Caramelize brown sugar in a separate pan.',
                'Stir caramel into the chocolate milk.',
                'Finish with a pinch of sea salt.'
              ],
              image: 'https://images.unsplash.com/photo-1544787210-2213d84ad960?auto=format&fit=crop&q=80&w=800',
              tags: ['Rich', 'Caramel']
            }
          ]
        }
      ]
    }
  }
];
