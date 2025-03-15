// Menu data
export const menuData = {
  cocktails: [
    {
      name: "Smoky Maple Old Fashioned",
      ingredients: "Bourbon whiskey, maple syrup, aromatic bitters, applewood smoke",
      price: 16,
      tags: [
        { name: "Signature", color: "secondary" },
        { name: "Strong", color: "primary" }
      ]
    },
    {
      name: "Elderflower Gin Fizz",
      ingredients: "London dry gin, St. Germain, fresh lemon, egg white, soda",
      price: 14,
      tags: [
        { name: "Refreshing", color: "accent" }
      ]
    },
    {
      name: "Spiced Pear Margarita",
      ingredients: "Silver tequila, spiced pear liqueur, lime juice, cinnamon syrup",
      price: 15,
      tags: [
        { name: "Seasonal", color: "secondary" }
      ]
    },
    {
      name: "Blackberry Bourbon Smash",
      ingredients: "Bourbon, muddled blackberries, mint, lemon juice, simple syrup",
      price: 15,
      tags: [
        { name: "Fruity", color: "accent" }
      ]
    }
  ],
  wines: [
    {
      name: "Pinot Noir",
      origin: "Willamette Valley, Oregon",
      description: "Red berries, earthy undertones, smooth finish",
      glassPrice: 12,
      bottlePrice: 48
    },
    {
      name: "Sauvignon Blanc",
      origin: "Marlborough, New Zealand",
      description: "Crisp, citrus notes, grassy finish",
      glassPrice: 10,
      bottlePrice: 40
    }
  ],
  beers: [
    {
      name: "Hazy IPA",
      brewery: "Local Brewery Co.",
      abv: 6.8,
      description: "Tropical fruit notes, low bitterness",
      price: 8
    },
    {
      name: "Belgian Tripel",
      brewery: "Abbey Brewing",
      abv: 9.2,
      description: "Spicy, fruity, complex",
      price: 9
    }
  ],
  smallPlates: [
    {
      name: "Truffle Fries",
      description: "Hand-cut fries, truffle oil, parmesan, herbs, garlic aioli",
      price: 12,
      tags: [
        { name: "Vegetarian", color: "success" }
      ]
    },
    {
      name: "Charcuterie Board",
      description: "Selection of cured meats, artisanal cheeses, pickled vegetables, mustard, crostini",
      price: 24,
      tags: [
        { name: "Shareable", color: "secondary" }
      ]
    }
  ],
  entrees: [
    {
      name: "Short Rib Sliders",
      description: "Braised short rib, brioche bun, caramelized onions, horseradish cream",
      price: 18
    },
    {
      name: "Wild Mushroom Risotto",
      description: "Arborio rice, seasonal wild mushrooms, truffle oil, parmesan",
      price: 22,
      tags: [
        { name: "Vegetarian", color: "success" }
      ]
    }
  ]
};

// Events data
export const eventsData = [
  {
    title: "Live Jazz Night",
    day: "FRI",
    date: "24",
    time: "8:00 PM - 11:00 PM",
    description: "Enjoy smooth jazz from local artists while sipping on our signature cocktails. Perfect for a sophisticated evening out.",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1262&q=80",
    link: "#",
    accentColor: "secondary"
  },
  {
    title: "Mixology Workshop",
    day: "SAT",
    date: "25",
    time: "4:00 PM - 6:00 PM",
    description: "Learn the art of cocktail making from our expert mixologists. Includes tasting of 3 signature cocktails.",
    image: "https://images.unsplash.com/photo-1601931935821-5fbe71157695?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "#",
    accentColor: "secondary"
  },
  {
    title: "Happy Hour Special",
    day: "MON-FRI",
    date: "HH",
    time: "4:00 PM - 7:00 PM",
    description: "Enjoy 25% off all classic cocktails and select small plates every weekday. The perfect after-work destination.",
    image: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "#",
    accentColor: "accent"
  }
];

// Gallery data
export const galleryData = [
  {
    url: "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    alt: "Cocktail on bar"
  },
  {
    url: "https://images.unsplash.com/photo-1568644396922-5c3bfae12521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Bar interior"
  },
  {
    url: "https://images.unsplash.com/photo-1527761939622-933c972ff441?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Mixed drinks"
  },
  {
    url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1257&q=80",
    alt: "People enjoying bar"
  },
  {
    url: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    alt: "Bar shelves"
  },
  {
    url: "https://images.unsplash.com/photo-1621873495884-845a939892d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    alt: "Cocktail preparation"
  },
  {
    url: "https://images.unsplash.com/photo-1575444298650-9a9a82e261a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Food dish"
  },
  {
    url: "https://images.unsplash.com/photo-1530034424920-9b9048b4e4b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Live music"
  }
];
