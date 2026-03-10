export interface MenuItem {
  id: string;
  nameRu: string;
  nameEn: string;
  price: number;
  unit: "kg" | "L" | "pcs" | "jar";
  category: string;
  noteRu?: string;
  noteEn?: string;
  image: string;
}

export const menuItems: MenuItem[] = [
  // Замороженные — Чебуреки
  { id: "f1", nameRu: "Чебуреки мясные / мясные с сыром", nameEn: "Chebureki meat / meat with cheese", price: 20, unit: "kg", category: "frozen", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop" },
  { id: "f2", nameRu: "Чебуреки с грибами", nameEn: "Chebureki with mushrooms", price: 20, unit: "kg", category: "frozen", image: "https://images.unsplash.com/photo-1625938145744-e380515399bf?w=400&h=300&fit=crop" },
  { id: "f3", nameRu: "Чебуреки с картошкой, сыром, яйцом и зеленью", nameEn: "Chebureki with potato, cheese, egg & herbs", price: 20, unit: "kg", category: "frozen", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop" },
  { id: "f4", nameRu: "Пельмени (свинина + курица)", nameEn: "Dumplings (pork + chicken)", price: 22, unit: "kg", category: "frozen", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=300&fit=crop" },
  { id: "f5", nameRu: "Вареники с творогом / творогом и изюмом", nameEn: "Vareniki with cottage cheese / cottage cheese & raisins", price: 18, unit: "kg", category: "frozen", image: "https://images.unsplash.com/photo-1587116861219-230ac19df971?w=400&h=300&fit=crop" },
  { id: "f6", nameRu: "Вареники с картошкой", nameEn: "Vareniki with potato", price: 18, unit: "kg", category: "frozen", image: "https://images.unsplash.com/photo-1587116861219-230ac19df971?w=400&h=300&fit=crop" },

  // Охлаждённые — Блинчики
  { id: "c1", nameRu: "Блинчики с капустой", nameEn: "Crepes with cabbage", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying", image: "https://images.unsplash.com/photo-1519676867240-f03562e64571?w=400&h=300&fit=crop" },
  { id: "c2", nameRu: "Блинчики творог + изюм", nameEn: "Crepes cottage cheese + raisins", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying", image: "https://images.unsplash.com/photo-1519676867240-f03562e64571?w=400&h=300&fit=crop" },
  { id: "c3", nameRu: "Блинчики творог + ягода", nameEn: "Crepes cottage cheese + berries", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" },
  { id: "c4", nameRu: "Блинчики творог + яблоко + банан", nameEn: "Crepes cottage cheese + apple + banana", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" },
  { id: "c5", nameRu: "Блинчики с яблоком", nameEn: "Crepes with apple", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying", image: "https://images.unsplash.com/photo-1519676867240-f03562e64571?w=400&h=300&fit=crop" },
  { id: "c6", nameRu: "Блинчики с мясом", nameEn: "Crepes with meat", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying", image: "https://images.unsplash.com/photo-1519676867240-f03562e64571?w=400&h=300&fit=crop" },
  { id: "c7", nameRu: "Блинчики ветчина + сыр", nameEn: "Crepes ham + cheese", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying", image: "https://images.unsplash.com/photo-1519676867240-f03562e64571?w=400&h=300&fit=crop" },
  { id: "c8", nameRu: "Блинчики курица + грибы", nameEn: "Crepes chicken + mushrooms", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying", image: "https://images.unsplash.com/photo-1519676867240-f03562e64571?w=400&h=300&fit=crop" },
  { id: "c9", nameRu: "Блинчики с печенью и яйцом", nameEn: "Crepes with liver & egg", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying", image: "https://images.unsplash.com/photo-1519676867240-f03562e64571?w=400&h=300&fit=crop" },

  // Супы
  { id: "s1", nameRu: "Гороховый суп", nameEn: "Pea soup", price: 12, unit: "L", category: "soups", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop" },
  { id: "s2", nameRu: "Суп с фрикадельками", nameEn: "Meatball soup", price: 12, unit: "L", category: "soups", image: "https://images.unsplash.com/photo-1603105037880-880cd4f6be00?w=400&h=300&fit=crop" },
  { id: "s3", nameRu: "Сырный суп", nameEn: "Cheese soup", price: 12, unit: "L", category: "soups", image: "https://images.unsplash.com/photo-1588566565463-180a5b2090d2?w=400&h=300&fit=crop" },
  { id: "s4", nameRu: "Борщ", nameEn: "Borscht", price: 12, unit: "L", category: "soups", image: "https://images.unsplash.com/photo-1550367363-ea12860cc124?w=400&h=300&fit=crop" },
  { id: "s5", nameRu: "Щи", nameEn: "Shchi (cabbage soup)", price: 12, unit: "L", category: "soups", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop" },

  // Полуфабрикаты
  { id: "sf1", nameRu: "Голубцы", nameEn: "Cabbage rolls", price: 22, unit: "kg", category: "semifinished", noteRu: "нужно тушить", noteEn: "needs stewing", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&h=300&fit=crop" },
  { id: "sf2", nameRu: "Курица фаршированная (сырая)", nameEn: "Stuffed chicken (raw)", price: 21, unit: "kg", category: "semifinished", noteRu: "запечь в духовке", noteEn: "bake in oven", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop" },

  // Салаты
  { id: "sa1", nameRu: "Салат Оливье с мясом", nameEn: "Olivier salad with meat", price: 28, unit: "kg", category: "salads", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop" },
  { id: "sa2", nameRu: "Селёдка под шубой", nameEn: "Herring under fur coat", price: 28, unit: "kg", category: "salads", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop" },
  { id: "sa3", nameRu: "Мимоза (с тунцом)", nameEn: "Mimosa salad (with tuna)", price: 28, unit: "kg", category: "salads", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop" },
  { id: "sa4", nameRu: "Шапка Мономаха (с орехами и сухофруктами)", nameEn: "Monomakh's hat (nuts & dried fruits)", price: 28, unit: "kg", category: "salads", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop" },
  { id: "sa5", nameRu: "Салат с копчёной курицей", nameEn: "Smoked chicken salad", price: 28, unit: "kg", category: "salads", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop" },
  { id: "sa6", nameRu: "Салат с крабовыми палочками", nameEn: "Crab stick salad", price: 28, unit: "kg", category: "salads", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop" },
  { id: "sa7", nameRu: "Салат с курицей, грибами и ананасами", nameEn: "Chicken, mushroom & pineapple salad", price: 28, unit: "kg", category: "salads", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop" },

  // Доставка в готовом виде
  { id: "r1", nameRu: "Картофель по-деревенски", nameEn: "Country-style potatoes", price: 20, unit: "kg", category: "ready", image: "https://images.unsplash.com/photo-1518977676601-b28d4e75f99d?w=400&h=300&fit=crop" },
  { id: "r2", nameRu: "Окорочка в медово-соевом соусе", nameEn: "Drumsticks in honey-soy sauce", price: 32, unit: "kg", category: "ready", image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=300&fit=crop" },
  { id: "r3", nameRu: "Окорочка жареные", nameEn: "Fried drumsticks", price: 30, unit: "kg", category: "ready", image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=300&fit=crop" },
  { id: "r4", nameRu: "Драники с мясом / курицей и грибами / грибами", nameEn: "Potato pancakes with meat / chicken & mushrooms / mushrooms", price: 22, unit: "kg", category: "ready", image: "https://images.unsplash.com/photo-1508615070457-7baeba4003ab?w=400&h=300&fit=crop" },
  { id: "r5", nameRu: "Котлеты рубленые", nameEn: "Chopped cutlets", price: 28, unit: "kg", category: "ready", image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop" },
  { id: "r6", nameRu: "Котлеты в сложном кляре с сыром", nameEn: "Cutlets in batter with cheese", price: 28, unit: "kg", category: "ready", noteRu: "10 мин протушить", noteEn: "simmer 10 min", image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop" },
  { id: "r7", nameRu: "Котлеты куриные", nameEn: "Chicken cutlets", price: 28, unit: "kg", category: "ready", image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop" },
  { id: "r8", nameRu: "Шницель куриный", nameEn: "Chicken schnitzel", price: 28, unit: "kg", category: "ready", image: "https://images.unsplash.com/photo-1585325701165-351af916e581?w=400&h=300&fit=crop" },
  { id: "r9", nameRu: "Котлеты из капусты", nameEn: "Cabbage cutlets", price: 18, unit: "kg", category: "ready", image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop" },
  { id: "r10", nameRu: "Котлеты из моркови", nameEn: "Carrot cutlets", price: 18, unit: "kg", category: "ready", image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop" },
  { id: "r11", nameRu: "Котлеты печёночные", nameEn: "Liver cutlets", price: 20, unit: "kg", category: "ready", image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop" },
  { id: "r12", nameRu: "Голубцы тушёные", nameEn: "Stewed cabbage rolls", price: 23, unit: "kg", category: "ready", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&h=300&fit=crop" },
  { id: "r13", nameRu: "Курица фаршированная запечённая", nameEn: "Baked stuffed chicken", price: 25, unit: "kg", category: "ready", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop" },
  { id: "r14", nameRu: "Филе птицы в сыре", nameEn: "Poultry fillet in cheese", price: 30, unit: "kg", category: "ready", image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&h=300&fit=crop" },
  { id: "r15", nameRu: "Бёдрышки на косточке с помидором под сыром", nameEn: "Bone-in thighs with tomato & cheese", price: 30, unit: "kg", category: "ready", image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=300&fit=crop" },
  { id: "r16", nameRu: "Мясо запечённое с помидором / грибами и луком", nameEn: "Baked meat with tomato / mushrooms & onion", price: 33, unit: "kg", category: "ready", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop" },
  { id: "r17", nameRu: "Рулетики из полендвицы с овощами в кляре", nameEn: "Tenderloin rolls with vegetables in batter", price: 33, unit: "kg", category: "ready", noteRu: "протушить 10 минут", noteEn: "simmer 10 min", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop" },
  { id: "r18", nameRu: "Жульены с курицей и грибами в булочке", nameEn: "Julienne with chicken & mushrooms in bun", price: 6, unit: "pcs", category: "ready", image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&h=300&fit=crop" },
  { id: "r19", nameRu: "Тортик печёночный", nameEn: "Liver cake", price: 22, unit: "kg", category: "ready", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop" },
  { id: "r20", nameRu: "Сырники", nameEn: "Syrniki (curd fritters)", price: 22, unit: "kg", category: "ready", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop" },
  { id: "r21", nameRu: "Оладьи", nameEn: "Pancakes (oladyi)", price: 15, unit: "kg", category: "ready", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" },

  // Десерты
  { id: "d1", nameRu: "Десерт медовый", nameEn: "Honey dessert", price: 32, unit: "kg", category: "desserts", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop" },
  { id: "d2", nameRu: "Десерт «Графские развалины»", nameEn: "\"Count's Ruins\" dessert", price: 32, unit: "kg", category: "desserts", image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=300&fit=crop" },

  // Прочее
  { id: "o1", nameRu: "Капуста квашеная (банка 3л)", nameEn: "Sauerkraut (3L jar)", price: 15, unit: "jar", category: "other", image: "https://images.unsplash.com/photo-1617692855027-33b14f061079?w=400&h=300&fit=crop" },
];
