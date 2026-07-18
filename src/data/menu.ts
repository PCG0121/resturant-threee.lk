export type CategoryId =
  | "specials"
  | "fried-rice"
  | "chop-suey-rice"
  | "biriyani"
  | "nasi-goreng"
  | "mongolian-rice"
  | "kottu"
  | "dolphin-kottu"
  | "cheese-kottu"
  | "noodles"
  | "pasta"
  | "seafood"
  | "chicken"
  | "sides"
  | "omelette"
  | "salads"
  | "soups"
  | "desserts"
  | "beverages";

export type Category = {
  id: CategoryId;
  name: string;
  description: string;
};

export type MenuVariant = {
  name: string;
  price: number;
};

export type MenuItem = {
  id: string;
  name: string;
  category: CategoryId;
  description: string;
  fullDescription: string;
  price: number;
  variants?: MenuVariant[];
  image: string;
  popular: boolean;
  isNew: boolean;
  spicyLevel: 0 | 1 | 2 | 3;
  vegetarian: boolean;
  available: boolean;
  ingredients: string[];
  prepTime: string;
  featured: boolean;
  bestSeller: boolean;
};

export type Offer = {
  title: string;
  description: string;
  note: string;
};

export type ContactInfo = {
  restaurantName: string;
  location: string;
  phone: string;
  whatsappNumber: string;
  facebookUrl: string;
  googleMapsUrl: string;
  pickMeFoodUrl: string;
  openingHours: string[];
};

export const categories: Category[] = [
  { id: "specials", name: "Specials", description: "Big Bites and family specials" },
  { id: "fried-rice", name: "Fried Rice", description: "Regular and large wok rice plates" },
  { id: "chop-suey-rice", name: "Chop Suey Rice", description: "Rice with chop suey toppings" },
  { id: "biriyani", name: "Biriyani", description: "Sri Lankan biriyani plates" },
  { id: "nasi-goreng", name: "Nasi Goreng", description: "Spiced rice with nasi flavours" },
  { id: "mongolian-rice", name: "Mongolian Rice", description: "Wok-tossed Mongolian rice" },
  { id: "kottu", name: "Kottu", description: "Rotti and diappa kottu" },
  { id: "dolphin-kottu", name: "Dolphin Kottu", description: "Soft layered dolphin kottu" },
  { id: "cheese-kottu", name: "Cheese Kottu", description: "Kottu finished with cheese" },
  { id: "noodles", name: "Noodles", description: "Regular and large noodle plates" },
  { id: "pasta", name: "Spaghetti & Macaroni", description: "Pasta plates with creamy and spicy sauces" },
  { id: "seafood", name: "Fish, Cuttlefish & Prawns", description: "Seafood mains and devilled items" },
  { id: "chicken", name: "Chicken", description: "Chicken curries, fried plates and devilled dishes" },
  { id: "sides", name: "Other Bites", description: "Sausages, nuggets, chips and sharing bites" },
  { id: "omelette", name: "Omelette", description: "Egg and cheese omelettes" },
  { id: "salads", name: "Salad", description: "Fresh salads and fruit plates" },
  { id: "soups", name: "Soup", description: "Warm chicken, vegetable and sweet corn soups" },
  { id: "desserts", name: "Dessert", description: "Watalappan, fruit salad and ice cream" },
  { id: "beverages", name: "Juice", description: "Fresh juices with optional ice cream" },
];

const imageByCategory: Record<CategoryId, string> = {
  specials: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=900&q=82",
  "fried-rice": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=80",
  "chop-suey-rice": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80",
  biriyani: "https://images.unsplash.com/photo-1563379091339-03246963d999?auto=format&fit=crop&w=900&q=80",
  "nasi-goreng": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80",
  "mongolian-rice": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=80",
  kottu: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=80",
  "dolphin-kottu": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=900&q=80",
  "cheese-kottu": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=900&q=80",
  noodles: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=80",
  pasta: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=900&q=80",
  seafood: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80",
  chicken: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=80",
  sides: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=900&q=80",
  omelette: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
  salads: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
  soups: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80",
  desserts: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
  beverages: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80",
};

type MenuItemSeed = {
  id: string;
  name: string;
  category: CategoryId;
  price: number;
  variants?: MenuVariant[];
  description?: string;
  fullDescription?: string;
  image?: string;
  popular?: boolean;
  isNew?: boolean;
  spicyLevel?: 0 | 1 | 2 | 3;
  vegetarian?: boolean;
  available?: boolean;
  ingredients?: string[];
  prepTime?: string;
  featured?: boolean;
  bestSeller?: boolean;
};

const regularLarge = (regular: number, large: number): MenuVariant[] => [
  { name: "Regular", price: regular },
  { name: "Large", price: large },
];

const withIceCream = (regular: number, iceCream?: number): MenuVariant[] | undefined =>
  iceCream ? [{ name: "Regular", price: regular }, { name: "With ice cream", price: iceCream }] : undefined;

const categoryName = (categoryId: CategoryId) => categories.find((category) => category.id === categoryId)?.name ?? "Menu";

const createMenuItem = (input: MenuItemSeed): MenuItem => {
  const variantSummary = input.variants?.map((variant) => `${variant.name} Rs. ${variant.price}`).join(", ");
  const description = input.description ?? (variantSummary ? `${categoryName(input.category)} item with ${variantSummary}.` : `${categoryName(input.category)} menu item.`);

  return {
    id: input.id,
    name: input.name,
    category: input.category,
    description,
    fullDescription: input.fullDescription ?? description,
    price: input.price,
    variants: input.variants,
    image: input.image ?? imageByCategory[input.category],
    popular: input.popular ?? false,
    isNew: input.isNew ?? false,
    spicyLevel: input.spicyLevel ?? 1,
    vegetarian: input.vegetarian ?? false,
    available: input.available ?? true,
    ingredients: input.ingredients ?? input.variants?.map((variant) => `${variant.name}: Rs. ${variant.price}`) ?? [categoryName(input.category)],
    prepTime: input.prepTime ?? "15 min",
    featured: input.featured ?? false,
    bestSeller: input.bestSeller ?? false,
  };
};

export const menuItems: MenuItem[] = [
  createMenuItem({
    id: "mixed-grill",
    name: "Mixed Grill",
    category: "specials",
    price: 3000,
    description: "Big Bites mixed grill sharing plate.",
    ingredients: ["Mixed meats", "Grilled items", "Big Bites special"],
    spicyLevel: 2,
    popular: true,
    featured: true,
    bestSeller: true,
    prepTime: "25 min",
  }),
  createMenuItem({
    id: "cheese-sambal",
    name: "Cheese Sambal",
    category: "specials",
    price: 3000,
    description: "Big Bites cheese sambal special.",
    ingredients: ["Cheese", "Sambal", "Sharing portion"],
    spicyLevel: 2,
    popular: true,
    featured: true,
    prepTime: "20 min",
  }),
  createMenuItem({
    id: "crispy-chicken-white-sauce",
    name: "Crispy Chicken & White Sauce",
    category: "specials",
    price: 2500,
    description: "Crispy chicken served with white sauce.",
    ingredients: ["Crispy chicken", "White sauce", "Big Bites special"],
    spicyLevel: 1,
    popular: true,
    featured: true,
    bestSeller: true,
    prepTime: "20 min",
  }),
  createMenuItem({
    id: "three-special",
    name: "3 Special",
    category: "specials",
    price: 1900,
    variants: [
      { name: "Regular - 2 persons", price: 1900 },
      { name: "Large - 4 persons", price: 2650 },
    ],
    description: "3 Special sharing meal for two or four persons.",
    ingredients: ["2 persons", "4 persons", "Restaurant Three special"],
    spicyLevel: 2,
    popular: true,
    bestSeller: true,
    prepTime: "25 min",
  }),
  createMenuItem({
    id: "special-four-persons",
    name: "Special - 4 Persons",
    category: "specials",
    price: 3500,
    description: "Special family portion for four persons.",
    ingredients: ["4 persons", "Family portion", "Restaurant special"],
    spicyLevel: 2,
    popular: true,
    prepTime: "30 min",
  }),

  createMenuItem({ id: "mixed-fried-rice", name: "Mixed Fried Rice", category: "fried-rice", price: 850, variants: regularLarge(850, 1250), popular: true, bestSeller: true }),
  createMenuItem({ id: "chicken-fried-rice", name: "Chicken Fried Rice", category: "fried-rice", price: 680, variants: regularLarge(680, 880), popular: true }),
  createMenuItem({ id: "prawns-fried-rice", name: "Prawns Fried Rice", category: "fried-rice", price: 680, variants: regularLarge(680, 900) }),
  createMenuItem({ id: "vegetable-fried-rice", name: "Vegetable Fried Rice", category: "fried-rice", price: 630, variants: regularLarge(630, 830), vegetarian: true, spicyLevel: 0 }),
  createMenuItem({ id: "egg-fried-rice", name: "Egg Fried Rice", category: "fried-rice", price: 650, variants: regularLarge(650, 850), vegetarian: true, spicyLevel: 0 }),
  createMenuItem({ id: "seafood-fried-rice", name: "Seafood Fried Rice", category: "fried-rice", price: 680, variants: regularLarge(680, 900), popular: true }),
  createMenuItem({ id: "thai-fried-rice", name: "Thai Fried Rice", category: "fried-rice", price: 750, variants: regularLarge(750, 1150), spicyLevel: 2 }),
  createMenuItem({ id: "thai-mixed-fried-rice", name: "Thai Mixed Fried Rice", category: "fried-rice", price: 950, variants: regularLarge(950, 1500), spicyLevel: 2 }),
  createMenuItem({ id: "sausage-fried-rice", name: "Sausages Fried Rice", category: "fried-rice", price: 650, variants: regularLarge(650, 850) }),
  createMenuItem({ id: "cuttlefish-fried-rice", name: "Cuttlefish Fried Rice", category: "fried-rice", price: 680, variants: regularLarge(680, 900) }),

  createMenuItem({ id: "mixed-chop-suey-rice", name: "Mixed Chop Suey Rice", category: "chop-suey-rice", price: 1300, variants: regularLarge(1300, 1950), popular: true }),
  createMenuItem({ id: "chicken-chop-suey-rice", name: "Chicken Chop Suey Rice", category: "chop-suey-rice", price: 1600, variants: regularLarge(1600, 2500) }),
  createMenuItem({ id: "prawns-chop-suey-rice", name: "Prawns Chop Suey Rice", category: "chop-suey-rice", price: 1500, variants: regularLarge(1500, 2350) }),
  createMenuItem({ id: "fish-chop-suey-rice", name: "Fish Chop Suey Rice", category: "chop-suey-rice", price: 1500, variants: regularLarge(1500, 2350) }),
  createMenuItem({ id: "cuttlefish-chop-suey-rice", name: "Cuttlefish Chop Suey Rice", category: "chop-suey-rice", price: 1500, variants: regularLarge(1500, 2300) }),
  createMenuItem({ id: "seafood-chop-suey-rice", name: "Seafood Chop Suey Rice", category: "chop-suey-rice", price: 1550, variants: regularLarge(1550, 2400) }),

  createMenuItem({ id: "chicken-biriyani", name: "Chicken Biriyani", category: "biriyani", price: 900, variants: regularLarge(900, 1400), popular: true }),
  createMenuItem({ id: "fish-biriyani", name: "Fish Biriyani", category: "biriyani", price: 850, variants: regularLarge(850, 1350) }),
  createMenuItem({ id: "prawns-biriyani", name: "Prawns Biriyani", category: "biriyani", price: 850, variants: regularLarge(850, 1350) }),
  createMenuItem({ id: "egg-biriyani", name: "Egg Biriyani", category: "biriyani", price: 800, variants: regularLarge(800, 1300), vegetarian: true, spicyLevel: 1 }),
  createMenuItem({ id: "indian-biriyani", name: "Indian Biriyani", category: "biriyani", price: 950, variants: regularLarge(950, 1500), spicyLevel: 2 }),
  createMenuItem({ id: "seafood-biriyani", name: "Seafood Biriyani", category: "biriyani", price: 950, variants: regularLarge(950, 1500) }),
  createMenuItem({ id: "mixed-biriyani", name: "Mixed Biriyani", category: "biriyani", price: 1000, variants: regularLarge(1000, 1500), popular: true }),

  createMenuItem({ id: "mixed-nasi-goreng", name: "Mixed Nasi Goreng", category: "nasi-goreng", price: 900, variants: regularLarge(900, 1500), spicyLevel: 2, popular: true }),
  createMenuItem({ id: "chicken-nasi-goreng", name: "Chicken Nasi Goreng", category: "nasi-goreng", price: 850, variants: regularLarge(850, 1400), spicyLevel: 2 }),
  createMenuItem({ id: "prawns-nasi-goreng", name: "Prawns Nasi Goreng", category: "nasi-goreng", price: 850, variants: regularLarge(850, 1400), spicyLevel: 2 }),
  createMenuItem({ id: "egg-nasi-goreng", name: "Egg Nasi Goreng", category: "nasi-goreng", price: 750, variants: regularLarge(750, 1350), vegetarian: true, spicyLevel: 2 }),
  createMenuItem({ id: "fish-nasi-goreng", name: "Fish Nasi Goreng", category: "nasi-goreng", price: 850, variants: regularLarge(850, 1400), spicyLevel: 2 }),
  createMenuItem({ id: "seafood-nasi-goreng", name: "Seafood Nasi Goreng", category: "nasi-goreng", price: 880, variants: regularLarge(880, 1450), spicyLevel: 2 }),
  createMenuItem({ id: "cuttlefish-nasi-goreng", name: "Cuttlefish Nasi Goreng", category: "nasi-goreng", price: 900, variants: regularLarge(900, 1450), spicyLevel: 2 }),

  createMenuItem({ id: "mixed-mongolian-rice", name: "Mixed Mongolian Rice", category: "mongolian-rice", price: 880, variants: regularLarge(880, 1280), popular: true }),
  createMenuItem({ id: "chicken-mongolian-rice", name: "Chicken Mongolian Rice", category: "mongolian-rice", price: 730, variants: regularLarge(730, 1100) }),
  createMenuItem({ id: "prawns-mongolian-rice", name: "Prawns Mongolian Rice", category: "mongolian-rice", price: 730, variants: regularLarge(730, 1100) }),
  createMenuItem({ id: "vegetable-mongolian-rice", name: "Vegetable Mongolian Rice", category: "mongolian-rice", price: 650, variants: regularLarge(650, 850), vegetarian: true, spicyLevel: 0 }),
  createMenuItem({ id: "egg-mongolian-rice", name: "Egg Mongolian Rice", category: "mongolian-rice", price: 700, variants: regularLarge(700, 900), vegetarian: true, spicyLevel: 0 }),
  createMenuItem({ id: "fish-mongolian-rice", name: "Fish Mongolian Rice", category: "mongolian-rice", price: 730, variants: regularLarge(730, 1100) }),
  createMenuItem({ id: "seafood-mongolian-rice", name: "Seafood Mongolian Rice", category: "mongolian-rice", price: 850, variants: regularLarge(850, 1250) }),
  createMenuItem({ id: "cuttlefish-mongolian-rice", name: "Cuttlefish Mongolian Rice", category: "mongolian-rice", price: 730, variants: regularLarge(730, 1100) }),

  createMenuItem({ id: "mongolian-kottu", name: "Mongolian Kottu", category: "kottu", price: 700, variants: regularLarge(700, 1000), spicyLevel: 2 }),
  createMenuItem({ id: "red-chilli-kottu", name: "Red Chilli Kottu", category: "kottu", price: 700, variants: regularLarge(700, 1000), spicyLevel: 3 }),
  createMenuItem({ id: "green-chilli-kottu", name: "Green Chilli Kottu", category: "kottu", price: 700, variants: regularLarge(700, 1000), spicyLevel: 3 }),
  createMenuItem({ id: "chicken-kottu", name: "Chicken Kottu", category: "kottu", price: 650, variants: regularLarge(650, 800), popular: true, bestSeller: true }),
  createMenuItem({ id: "fish-kottu", name: "Fish Kottu", category: "kottu", price: 650, variants: regularLarge(650, 850) }),
  createMenuItem({ id: "egg-kottu", name: "Egg Kottu", category: "kottu", price: 600, variants: regularLarge(600, 800), vegetarian: true }),
  createMenuItem({ id: "mixed-kottu", name: "Mixed Kottu", category: "kottu", price: 750, variants: regularLarge(750, 1000), popular: true }),
  createMenuItem({ id: "vegetable-kottu", name: "Vegetable Kottu", category: "kottu", price: 550, variants: regularLarge(550, 750), vegetarian: true, spicyLevel: 1 }),
  createMenuItem({ id: "seafood-kottu", name: "Seafood Kottu", category: "kottu", price: 750, variants: regularLarge(750, 950) }),
  createMenuItem({ id: "prawns-kottu", name: "Prawns Kottu", category: "kottu", price: 750, variants: regularLarge(750, 1000) }),

  createMenuItem({ id: "chicken-dolphin-kottu", name: "Chicken Dolphin Kottu", category: "dolphin-kottu", price: 750, variants: regularLarge(750, 1400), popular: true }),
  createMenuItem({ id: "egg-dolphin-kottu", name: "Egg Dolphin Kottu", category: "dolphin-kottu", price: 700, variants: regularLarge(700, 1300), vegetarian: true }),
  createMenuItem({ id: "fish-dolphin-kottu", name: "Fish Dolphin Kottu", category: "dolphin-kottu", price: 750, variants: regularLarge(750, 1350) }),
  createMenuItem({ id: "mixed-dolphin-kottu", name: "Mixed Dolphin Kottu", category: "dolphin-kottu", price: 850, variants: regularLarge(850, 1600), popular: true }),
  createMenuItem({ id: "seafood-dolphin-kottu", name: "Seafood Dolphin Kottu", category: "dolphin-kottu", price: 830, variants: regularLarge(830, 1450) }),

  createMenuItem({ id: "egg-cheese-kottu", name: "Egg Cheese Kottu", category: "cheese-kottu", price: 750, variants: regularLarge(750, 1050), vegetarian: true }),
  createMenuItem({ id: "chicken-cheese-kottu", name: "Chicken Cheese Kottu", category: "cheese-kottu", price: 800, variants: regularLarge(800, 1400), popular: true, bestSeller: true }),
  createMenuItem({ id: "vegetable-cheese-kottu", name: "Vegetable Cheese Kottu", category: "cheese-kottu", price: 600, variants: regularLarge(600, 1000), vegetarian: true }),
  createMenuItem({ id: "fish-cheese-kottu", name: "Fish Cheese Kottu", category: "cheese-kottu", price: 800, variants: regularLarge(800, 1400) }),
  createMenuItem({ id: "seafood-cheese-kottu", name: "Seafood Cheese Kottu", category: "cheese-kottu", price: 900, variants: regularLarge(900, 1450) }),
  createMenuItem({ id: "mixed-cheese-kottu", name: "Mixed Cheese Kottu", category: "cheese-kottu", price: 900, variants: regularLarge(900, 1500), popular: true }),

  createMenuItem({ id: "mixed-noodles", name: "Mixed Noodles", category: "noodles", price: 900, variants: regularLarge(900, 1280), popular: true }),
  createMenuItem({ id: "chicken-noodles", name: "Chicken Noodles", category: "noodles", price: 780, variants: regularLarge(780, 980), popular: true }),
  createMenuItem({ id: "fish-noodles", name: "Fish Noodles", category: "noodles", price: 780, variants: regularLarge(780, 980) }),
  createMenuItem({ id: "prawns-noodles", name: "Prawns Noodles", category: "noodles", price: 780, variants: regularLarge(780, 980) }),
  createMenuItem({ id: "cuttlefish-noodles", name: "Cuttlefish Noodles", category: "noodles", price: 780, variants: regularLarge(780, 980) }),
  createMenuItem({ id: "vegetable-noodles", name: "Vegetable Noodles", category: "noodles", price: 780, variants: regularLarge(780, 980), vegetarian: true, spicyLevel: 0 }),
  createMenuItem({ id: "seafood-noodles", name: "Seafood Noodles", category: "noodles", price: 870, variants: regularLarge(870, 1250) }),
  createMenuItem({ id: "sausages-noodles", name: "Sausages Noodles", category: "noodles", price: 650, variants: regularLarge(650, 850) }),
  createMenuItem({ id: "egg-noodles", name: "Egg Noodles", category: "noodles", price: 780, variants: regularLarge(780, 980), vegetarian: true }),

  createMenuItem({ id: "mixed-spaghetti-macaroni", name: "Mixed Spaghetti & Macaroni", category: "pasta", price: 1100, variants: regularLarge(1100, 1500), popular: true }),
  createMenuItem({ id: "chicken-spaghetti-macaroni", name: "Chicken Spaghetti & Macaroni", category: "pasta", price: 1000, variants: regularLarge(1000, 1400) }),
  createMenuItem({ id: "prawns-spaghetti-macaroni", name: "Prawns Spaghetti & Macaroni", category: "pasta", price: 1000, variants: regularLarge(1000, 1400) }),
  createMenuItem({ id: "vegetable-spaghetti-macaroni", name: "Vegetable Spaghetti & Macaroni", category: "pasta", price: 900, variants: regularLarge(900, 1300), vegetarian: true, spicyLevel: 0 }),
  createMenuItem({ id: "cheese-spaghetti-macaroni", name: "Cheese Spaghetti & Macaroni", category: "pasta", price: 1000, variants: regularLarge(1000, 1400), vegetarian: true, spicyLevel: 0 }),
  createMenuItem({ id: "seafood-spaghetti-macaroni", name: "Seafood Spaghetti & Macaroni", category: "pasta", price: 1050, variants: regularLarge(1050, 1400) }),
  createMenuItem({ id: "italian-spaghetti-macaroni", name: "Italian Spaghetti & Macaroni", category: "pasta", price: 1000, variants: regularLarge(1000, 1400), spicyLevel: 1 }),
  createMenuItem({ id: "thai-spaghetti-macaroni", name: "Thai Spaghetti & Macaroni", category: "pasta", price: 1000, variants: regularLarge(1000, 1400), spicyLevel: 2 }),

  createMenuItem({ id: "devilled-fish", name: "Devilled Fish", category: "seafood", price: 1500, spicyLevel: 3, popular: true }),
  createMenuItem({ id: "fried-fish", name: "Fried Fish", category: "seafood", price: 1500 }),
  createMenuItem({ id: "fish-stew", name: "Fish Stew", category: "seafood", price: 1500, spicyLevel: 1 }),
  createMenuItem({ id: "fish-curry", name: "Fish Curry", category: "seafood", price: 1500, spicyLevel: 2 }),
  createMenuItem({ id: "sweet-sour-fish", name: "Sweet & Sour Fish", category: "seafood", price: 1600, spicyLevel: 1 }),
  createMenuItem({ id: "black-pepper-fish", name: "Black Pepper Fish", category: "seafood", price: 1600, spicyLevel: 2 }),
  createMenuItem({ id: "battered-fish", name: "Battered Fish", category: "seafood", price: 1750 }),
  createMenuItem({ id: "devilled-cuttlefish", name: "Devilled Cuttlefish", category: "seafood", price: 1500, spicyLevel: 3 }),
  createMenuItem({ id: "battered-fried-cuttlefish", name: "Battered Fried Cuttlefish", category: "seafood", price: 1750 }),
  createMenuItem({ id: "cuttlefish-stew", name: "Cuttlefish Stew", category: "seafood", price: 1500, spicyLevel: 1 }),
  createMenuItem({ id: "cuttlefish-curry", name: "Cuttlefish Curry", category: "seafood", price: 1500, spicyLevel: 2 }),
  createMenuItem({ id: "sweet-sour-cuttlefish", name: "Sweet & Sour Cuttlefish", category: "seafood", price: 1600, spicyLevel: 1 }),
  createMenuItem({ id: "oyster-sauce-cuttlefish", name: "Oyster Sauce Cuttlefish", category: "seafood", price: 1750, spicyLevel: 1 }),
  createMenuItem({ id: "hot-battered-cuttlefish", name: "Hot Battered Cuttlefish", category: "seafood", price: 1500, spicyLevel: 3, popular: true }),
  createMenuItem({ id: "devilled-prawns", name: "Devilled Prawns", category: "seafood", price: 1500, spicyLevel: 3 }),
  createMenuItem({ id: "battered-fried-prawns", name: "Battered Fried Prawns", category: "seafood", price: 1750 }),
  createMenuItem({ id: "prawns-stew", name: "Prawns Stew", category: "seafood", price: 1500, spicyLevel: 1 }),
  createMenuItem({ id: "prawns-curry", name: "Prawns Curry", category: "seafood", price: 1500, spicyLevel: 2 }),
  createMenuItem({ id: "fried-prawns", name: "Fried Prawns", category: "seafood", price: 1500 }),
  createMenuItem({ id: "cashew-prawns", name: "Cashew Prawns", category: "seafood", price: 1500 }),
  createMenuItem({ id: "hot-battered-prawns", name: "Hot Battered Prawns", category: "seafood", price: 1500, spicyLevel: 3 }),
  createMenuItem({ id: "kankun-prawns", name: "Kankun Prawns", category: "seafood", price: 1500, spicyLevel: 1 }),
  createMenuItem({ id: "sweet-sour-prawns", name: "Sweet & Sour Prawns", category: "seafood", price: 1750, spicyLevel: 1 }),
  createMenuItem({ id: "mixed-devilled", name: "Mixed Devilled", category: "seafood", price: 2000, spicyLevel: 3, popular: true }),
  createMenuItem({ id: "seafood-devilled", name: "Seafood Devilled", category: "seafood", price: 2000, spicyLevel: 3 }),
  createMenuItem({ id: "scambal-mixed", name: "Scambal Mixed", category: "seafood", price: 1500, spicyLevel: 3 }),

  createMenuItem({ id: "fried-chicken", name: "Fried Chicken", category: "chicken", price: 1500, popular: true }),
  createMenuItem({ id: "devilled-chicken", name: "Devilled Chicken", category: "chicken", price: 1500, spicyLevel: 3, popular: true, bestSeller: true }),
  createMenuItem({ id: "chilly-chicken-with-cashew", name: "Chilly Chicken with Cashew", category: "chicken", price: 1750, spicyLevel: 3 }),
  createMenuItem({ id: "sweet-sour-chicken", name: "Sweet & Sour Chicken", category: "chicken", price: 1600, spicyLevel: 1 }),
  createMenuItem({ id: "kankun-chicken", name: "Kankun Chicken", category: "chicken", price: 1500, spicyLevel: 1 }),
  createMenuItem({ id: "chicken-stew", name: "Chicken Stew", category: "chicken", price: 1500, spicyLevel: 1 }),
  createMenuItem({ id: "chicken-curry", name: "Chicken Curry", category: "chicken", price: 1500, spicyLevel: 2 }),
  createMenuItem({ id: "battered-chicken", name: "Battered Chicken", category: "chicken", price: 1500 }),
  createMenuItem({ id: "hot-battered-chicken", name: "Hot Battered Chicken", category: "chicken", price: 1500, spicyLevel: 3 }),

  createMenuItem({ id: "boil-vegetables", name: "Boil Vegetables", category: "sides", price: 1000, vegetarian: true, spicyLevel: 0 }),
  createMenuItem({ id: "jumbo-sausages", name: "Jumbo Sausages", category: "sides", price: 1150 }),
  createMenuItem({ id: "fried-sausages", name: "Fried Sausages", category: "sides", price: 1250 }),
  createMenuItem({ id: "nuggets-vegetable", name: "Nuggets Vegetable", category: "sides", price: 1500, vegetarian: true }),
  createMenuItem({ id: "nuggets-chips", name: "Nuggets Chips", category: "sides", price: 1250 }),
  createMenuItem({ id: "nuggets-with-cashew", name: "Nuggets with Cashew", category: "sides", price: 1500 }),
  createMenuItem({ id: "potato-chips", name: "Potato Chips", category: "sides", price: 750, vegetarian: true, spicyLevel: 0 }),
  createMenuItem({ id: "cashew", name: "Cashew", category: "sides", price: 1500, vegetarian: true, spicyLevel: 0 }),
  createMenuItem({ id: "battered-onion", name: "Battered Onion", category: "sides", price: 1000, vegetarian: true }),
  createMenuItem({ id: "mixed-stew", name: "Mixed Stew", category: "sides", price: 2000, spicyLevel: 1 }),
  createMenuItem({ id: "seafood-stew", name: "Seafood Stew", category: "sides", price: 1900, spicyLevel: 1 }),
  createMenuItem({ id: "mixed-fried", name: "Mixed Fried", category: "sides", price: 2000 }),

  createMenuItem({ id: "sri-lankan-omelette", name: "Sri Lankan Omelette", category: "omelette", price: 500, vegetarian: true, spicyLevel: 1 }),
  createMenuItem({ id: "cheese-omelette", name: "Cheese Omelette", category: "omelette", price: 600, vegetarian: true, spicyLevel: 0 }),
  createMenuItem({ id: "cheese-chicken-omelette", name: "Cheese Chicken Omelette", category: "omelette", price: 800, spicyLevel: 0 }),
  createMenuItem({ id: "mixed-omelette", name: "Mixed Omelette", category: "omelette", price: 850, spicyLevel: 1 }),
  createMenuItem({ id: "fried-egg", name: "Fried Egg", category: "omelette", price: 100, vegetarian: true, spicyLevel: 0 }),

  createMenuItem({ id: "cucumber-salad", name: "Cucumber Salad", category: "salads", price: 450, vegetarian: true, spicyLevel: 0 }),
  createMenuItem({ id: "onion-salad", name: "Onion Salad", category: "salads", price: 350, vegetarian: true, spicyLevel: 0 }),
  createMenuItem({ id: "pineapple-salad", name: "Pineapple Salad", category: "salads", price: 400, vegetarian: true, spicyLevel: 0 }),
  createMenuItem({ id: "mixed-seafood-salad", name: "Mixed Seafood Salad", category: "salads", price: 2000, spicyLevel: 1 }),
  createMenuItem({ id: "mixed-chicken-veg-salad", name: "Mixed Chicken & Veg Salad", category: "salads", price: 1500, spicyLevel: 1 }),
  createMenuItem({ id: "chef-salad", name: "Chef Salad", category: "salads", price: 2000, spicyLevel: 1 }),
  createMenuItem({ id: "mixed-vegetable-salad", name: "Mixed Vegetable Salad", category: "salads", price: 1000, vegetarian: true, spicyLevel: 0 }),
  createMenuItem({ id: "fruit-plate", name: "Fruit Plate", category: "salads", price: 1000, vegetarian: true, spicyLevel: 0 }),

  createMenuItem({ id: "cream-of-chicken-soup", name: "Cream of Chicken Soup", category: "soups", price: 450, spicyLevel: 0 }),
  createMenuItem({ id: "chicken-sweet-corn-soup", name: "Chicken & Sweet Corn Soup", category: "soups", price: 550, spicyLevel: 0 }),
  createMenuItem({ id: "chicken-mushroom-egg-soup", name: "Chicken, Mushroom & Egg Soup", category: "soups", price: 400, spicyLevel: 0 }),
  createMenuItem({ id: "vegetable-sweet-corn-soup", name: "Vegetable Sweet Corn Soup", category: "soups", price: 450, vegetarian: true, spicyLevel: 0 }),
  createMenuItem({ id: "mixed-noodles-egg-soup", name: "Mixed with Noodles & Egg Soup", category: "soups", price: 480, spicyLevel: 0 }),
  createMenuItem({ id: "chicken-soup", name: "Chicken Soup", category: "soups", price: 480, spicyLevel: 0 }),
  createMenuItem({ id: "vegetable-soup", name: "Vegetable Soup", category: "soups", price: 350, vegetarian: true, spicyLevel: 0 }),
  createMenuItem({ id: "vegetable-egg-soup", name: "Vegetable & Egg Soup", category: "soups", price: 300, vegetarian: true, spicyLevel: 0 }),

  createMenuItem({ id: "watalappan", name: "Watalappan", category: "desserts", price: 130, vegetarian: true, spicyLevel: 0 }),
  createMenuItem({ id: "fruit-salad", name: "Fruit Salad", category: "desserts", price: 350, vegetarian: true, spicyLevel: 0 }),
  createMenuItem({ id: "ice-cream", name: "Ice Cream", category: "desserts", price: 350, vegetarian: true, spicyLevel: 0 }),
  createMenuItem({ id: "coconut-ice-cream", name: "Coconut Ice Cream", category: "desserts", price: 150, vegetarian: true, spicyLevel: 0 }),

  createMenuItem({ id: "orange-juice", name: "Orange Juice", category: "beverages", price: 300, variants: withIceCream(300), vegetarian: true, spicyLevel: 0 }),
  createMenuItem({ id: "mango-juice", name: "Mango Juice", category: "beverages", price: 250, variants: withIceCream(250, 300), vegetarian: true, spicyLevel: 0, popular: true }),
  createMenuItem({ id: "papaya-juice", name: "Papaya Juice", category: "beverages", price: 250, variants: withIceCream(250, 300), vegetarian: true, spicyLevel: 0 }),
  createMenuItem({ id: "lime-juice", name: "Lime Juice", category: "beverages", price: 300, variants: withIceCream(300), vegetarian: true, spicyLevel: 0 }),
  createMenuItem({ id: "mixed-juice", name: "Mixed Juice", category: "beverages", price: 300, variants: withIceCream(300, 350), vegetarian: true, spicyLevel: 0, popular: true }),
  createMenuItem({ id: "avocado-juice", name: "Avocado Juice", category: "beverages", price: 250, variants: withIceCream(250, 300), vegetarian: true, spicyLevel: 0 }),
];

export const offers: Offer[] = [
  {
    title: "Mixed Grill",
    description: "Big Bites mixed grill sharing plate.",
    note: "Rs. 3000",
  },
  {
    title: "Cheese Sambal",
    description: "Big Bites cheese sambal special.",
    note: "Rs. 3000",
  },
  {
    title: "Crispy Chicken & White Sauce",
    description: "Big Bites crispy chicken offer.",
    note: "Rs. 2500",
  },
  {
    title: "Special",
    description: "Family special for four persons.",
    note: "Rs. 3500",
  },
  {
    title: "3 Special",
    description: "Regular for two persons or large for four persons.",
    note: "Rs. 1900 / Rs. 2650",
  },
];

export const contactInfo: ContactInfo = {
  restaurantName: "Restaurant Three",
  location: "Kurunegala",
  phone: "037 480 0953",
  whatsappNumber: "94775660554",
  facebookUrl: "https://www.facebook.com/",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Restaurant+Three+Kurunegala",
  pickMeFoodUrl: "https://pickme.lk/food",
  openingHours: [
    "Monday - Thursday: 11.00 AM - 10.00 PM",
    "Friday - Sunday: 11.00 AM - 11.00 PM",
    "Public holidays: Please call to confirm",
  ],
};

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-LK", {
    style: "currency",
    currency: "LKR",
    maximumFractionDigits: 0,
  }).format(price);
