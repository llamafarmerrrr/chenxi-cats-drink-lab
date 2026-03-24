export interface Drink {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  steps: string[];
  image: string;
  tags: string[];
}

export interface Menu {
  id: string;
  title: string;
  releaseDate: string;
  description: string;
  drinks: Drink[];
}

export interface DrinkLine {
  id: string;
  title: string;
  subtitle: string;
  musicTitle: string;
  themeColor: string;
  mainMenu: Menu;
  menus: Menu[];
}

export interface FamilyMember {
  id: string;
  name: string;
  role: string;
  description: string;
  avatar: string;
  drinkLine: DrinkLine;
}
