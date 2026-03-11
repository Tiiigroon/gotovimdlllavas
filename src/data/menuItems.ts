const cheburekiImg = "/lovable-uploads/643440fb-4170-469d-bc45-71b32f2e3f6f.jpg";
import pelmeniImg from "@/assets/menu/pelmeni.jpg";
import varenikiImg from "@/assets/menu/vareniki.jpg";
const bliniImg = "/lovable-uploads/30d8751f-7370-4753-9c16-c69d2595e9f9.jpg";
import peaSoupImg from "@/assets/menu/pea-soup.jpg";
import meatballSoupImg from "@/assets/menu/meatball-soup.jpg";
import cheeseSoupImg from "@/assets/menu/cheese-soup.jpg";
import borschtImg from "@/assets/menu/borscht.jpg";
import shchiImg from "@/assets/menu/shchi.jpg";
import cabbageRollsImg from "@/assets/menu/cabbage-rolls.jpg";
import stuffedChickenImg from "@/assets/menu/stuffed-chicken.jpg";
import olivierImg from "@/assets/menu/olivier.jpg";
import shubaImg from "@/assets/menu/shuba.jpg";
import mimosaImg from "@/assets/menu/mimosa.jpg";
import chickenSaladImg from "@/assets/menu/chicken-salad.jpg";
import shapkaSaladImg from "@/assets/menu/shapka-salad.jpg";
import crabSaladImg from "@/assets/menu/crab-salad.jpg";
import chickenPineappleSaladImg from "@/assets/menu/chicken-pineapple-salad.jpg";
import potatoesImg from "@/assets/menu/potatoes.jpg";
import drumsticksImg from "@/assets/menu/drumsticks.jpg";
import dranikiImg from "@/assets/menu/draniki.jpg";
import cutletsImg from "@/assets/menu/cutlets.jpg";
import cutletsBatterImg from "@/assets/menu/cutlets-batter.jpg";
import chickenCutletsImg from "@/assets/menu/chicken-cutlets.jpg";
import schnitzelImg from "@/assets/menu/schnitzel.jpg";
import cabbageCutletsImg from "@/assets/menu/cabbage-cutlets.jpg";
import carrotCutletsImg from "@/assets/menu/carrot-cutlets.jpg";
import liverCutletsImg from "@/assets/menu/liver-cutlets.jpg";
import filletCheeseImg from "@/assets/menu/fillet-cheese.jpg";
import thighsCheeseImg from "@/assets/menu/thighs-cheese.jpg";
import bakedMeatImg from "@/assets/menu/baked-meat.jpg";
import meatRollsImg from "@/assets/menu/meat-rolls.jpg";
import julienneImg from "@/assets/menu/julienne.jpg";
import liverCakeImg from "@/assets/menu/liver-cake.jpg";
import syrnikiImg from "@/assets/menu/syrniki.jpg";
import oladyiImg from "@/assets/menu/oladyi.jpg";
import honeyCakeImg from "@/assets/menu/honey-cake.jpg";
import grafskieImg from "@/assets/menu/grafskie.jpg";
import sauerkrautImg from "@/assets/menu/sauerkraut.jpg";

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
  { id: "f1", nameRu: "Чебуреки мясные / мясные с сыром", nameEn: "Chebureki meat / meat with cheese", price: 20, unit: "kg", category: "frozen", image: cheburekiImg },
  { id: "f2", nameRu: "Чебуреки с грибами", nameEn: "Chebureki with mushrooms", price: 20, unit: "kg", category: "frozen", image: cheburekiImg },
  { id: "f3", nameRu: "Чебуреки с картошкой, сыром, яйцом и зеленью", nameEn: "Chebureki with potato, cheese, egg & herbs", price: 20, unit: "kg", category: "frozen", image: cheburekiImg },
  { id: "f4", nameRu: "Пельмени (свинина + курица)", nameEn: "Dumplings (pork + chicken)", price: 22, unit: "kg", category: "frozen", image: pelmeniImg },
  { id: "f5", nameRu: "Вареники с творогом / творогом и изюмом", nameEn: "Vareniki with cottage cheese / cottage cheese & raisins", price: 18, unit: "kg", category: "frozen", image: varenikiImg },
  { id: "f6", nameRu: "Вареники с картошкой", nameEn: "Vareniki with potato", price: 18, unit: "kg", category: "frozen", image: varenikiImg },

  // Охлаждённые — Блинчики
  { id: "c1", nameRu: "Блинчики с капустой", nameEn: "Crepes with cabbage", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying", image: bliniImg },
  { id: "c2", nameRu: "Блинчики творог + изюм", nameEn: "Crepes cottage cheese + raisins", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying", image: bliniImg },
  { id: "c3", nameRu: "Блинчики творог + ягода", nameEn: "Crepes cottage cheese + berries", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying", image: bliniImg },
  { id: "c4", nameRu: "Блинчики творог + яблоко + банан", nameEn: "Crepes cottage cheese + apple + banana", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying", image: bliniImg },
  { id: "c5", nameRu: "Блинчики с яблоком", nameEn: "Crepes with apple", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying", image: bliniImg },
  { id: "c6", nameRu: "Блинчики с мясом", nameEn: "Crepes with meat", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying", image: bliniImg },
  { id: "c7", nameRu: "Блинчики ветчина + сыр", nameEn: "Crepes ham + cheese", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying", image: bliniImg },
  { id: "c8", nameRu: "Блинчики курица + грибы", nameEn: "Crepes chicken + mushrooms", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying", image: bliniImg },
  { id: "c9", nameRu: "Блинчики с печенью и яйцом", nameEn: "Crepes with liver & egg", price: 20, unit: "kg", category: "chilled", noteRu: "нужно обжарить", noteEn: "needs frying", image: bliniImg },

  // Супы
  { id: "s1", nameRu: "Гороховый суп", nameEn: "Pea soup", price: 12, unit: "L", category: "soups", image: peaSoupImg },
  { id: "s2", nameRu: "Суп с фрикадельками", nameEn: "Meatball soup", price: 12, unit: "L", category: "soups", image: meatballSoupImg },
  { id: "s3", nameRu: "Сырный суп", nameEn: "Cheese soup", price: 12, unit: "L", category: "soups", image: cheeseSoupImg },
  { id: "s4", nameRu: "Борщ", nameEn: "Borscht", price: 12, unit: "L", category: "soups", image: borschtImg },
  { id: "s5", nameRu: "Щи", nameEn: "Shchi (cabbage soup)", price: 12, unit: "L", category: "soups", image: shchiImg },

  // Полуфабрикаты
  { id: "sf1", nameRu: "Голубцы", nameEn: "Cabbage rolls", price: 22, unit: "kg", category: "semifinished", noteRu: "нужно тушить", noteEn: "needs stewing", image: cabbageRollsImg },
  { id: "sf2", nameRu: "Курица фаршированная (сырая)", nameEn: "Stuffed chicken (raw)", price: 21, unit: "kg", category: "semifinished", noteRu: "запечь в духовке", noteEn: "bake in oven", image: stuffedChickenImg },

  // Салаты
  { id: "sa1", nameRu: "Салат Оливье с мясом", nameEn: "Olivier salad with meat", price: 28, unit: "kg", category: "salads", image: olivierImg },
  { id: "sa2", nameRu: "Селёдка под шубой", nameEn: "Herring under fur coat", price: 28, unit: "kg", category: "salads", image: shubaImg },
  { id: "sa3", nameRu: "Мимоза (с тунцом)", nameEn: "Mimosa salad (with tuna)", price: 28, unit: "kg", category: "salads", image: mimosaImg },
  { id: "sa4", nameRu: "Шапка Мономаха (с орехами и сухофруктами)", nameEn: "Monomakh's hat (nuts & dried fruits)", price: 28, unit: "kg", category: "salads", image: shapkaSaladImg },
  { id: "sa5", nameRu: "Салат с копчёной курицей", nameEn: "Smoked chicken salad", price: 28, unit: "kg", category: "salads", image: chickenSaladImg },
  { id: "sa6", nameRu: "Салат с крабовыми палочками", nameEn: "Crab stick salad", price: 28, unit: "kg", category: "salads", image: crabSaladImg },
  { id: "sa7", nameRu: "Салат с курицей, грибами и ананасами", nameEn: "Chicken, mushroom & pineapple salad", price: 28, unit: "kg", category: "salads", image: chickenPineappleSaladImg },

  // Доставка в готовом виде
  { id: "r1", nameRu: "Картофель по-деревенски", nameEn: "Country-style potatoes", price: 20, unit: "kg", category: "ready", image: potatoesImg },
  { id: "r2", nameRu: "Окорочка в медово-соевом соусе", nameEn: "Drumsticks in honey-soy sauce", price: 32, unit: "kg", category: "ready", image: drumsticksImg },
  { id: "r3", nameRu: "Окорочка жареные", nameEn: "Fried drumsticks", price: 30, unit: "kg", category: "ready", image: drumsticksImg },
  { id: "r4", nameRu: "Драники с мясом / курицей и грибами / грибами", nameEn: "Potato pancakes with meat / chicken & mushrooms / mushrooms", price: 22, unit: "kg", category: "ready", image: dranikiImg },
  { id: "r5", nameRu: "Котлеты рубленые", nameEn: "Chopped cutlets", price: 28, unit: "kg", category: "ready", image: cutletsImg },
  { id: "r6", nameRu: "Котлеты в сложном кляре с сыром", nameEn: "Cutlets in batter with cheese", price: 28, unit: "kg", category: "ready", noteRu: "10 мин протушить", noteEn: "simmer 10 min", image: cutletsBatterImg },
  { id: "r7", nameRu: "Котлеты куриные", nameEn: "Chicken cutlets", price: 28, unit: "kg", category: "ready", image: chickenCutletsImg },
  { id: "r8", nameRu: "Шницель куриный", nameEn: "Chicken schnitzel", price: 28, unit: "kg", category: "ready", image: schnitzelImg },
  { id: "r9", nameRu: "Котлеты из капусты", nameEn: "Cabbage cutlets", price: 18, unit: "kg", category: "ready", image: cabbageCutletsImg },
  { id: "r10", nameRu: "Котлеты из моркови", nameEn: "Carrot cutlets", price: 18, unit: "kg", category: "ready", image: carrotCutletsImg },
  { id: "r11", nameRu: "Котлеты печёночные", nameEn: "Liver cutlets", price: 20, unit: "kg", category: "ready", image: liverCutletsImg },
  { id: "r12", nameRu: "Голубцы тушёные", nameEn: "Stewed cabbage rolls", price: 23, unit: "kg", category: "ready", image: cabbageRollsImg },
  { id: "r13", nameRu: "Курица фаршированная запечённая", nameEn: "Baked stuffed chicken", price: 25, unit: "kg", category: "ready", image: stuffedChickenImg },
  { id: "r14", nameRu: "Филе птицы в сыре", nameEn: "Poultry fillet in cheese", price: 30, unit: "kg", category: "ready", image: filletCheeseImg },
  { id: "r15", nameRu: "Бёдрышки на косточке с помидором под сыром", nameEn: "Bone-in thighs with tomato & cheese", price: 30, unit: "kg", category: "ready", image: thighsCheeseImg },
  { id: "r16", nameRu: "Мясо запечённое с помидором / грибами и луком", nameEn: "Baked meat with tomato / mushrooms & onion", price: 33, unit: "kg", category: "ready", image: bakedMeatImg },
  { id: "r17", nameRu: "Рулетики из полендвицы с овощами в кляре", nameEn: "Tenderloin rolls with vegetables in batter", price: 33, unit: "kg", category: "ready", noteRu: "протушить 10 минут", noteEn: "simmer 10 min", image: meatRollsImg },
  { id: "r18", nameRu: "Жульены с курицей и грибами в булочке", nameEn: "Julienne with chicken & mushrooms in bun", price: 6, unit: "pcs", category: "ready", image: julienneImg },
  { id: "r19", nameRu: "Тортик печёночный", nameEn: "Liver cake", price: 22, unit: "kg", category: "ready", image: liverCakeImg },
  { id: "r20", nameRu: "Сырники", nameEn: "Syrniki (curd fritters)", price: 22, unit: "kg", category: "ready", image: syrnikiImg },
  { id: "r21", nameRu: "Оладьи", nameEn: "Pancakes (oladyi)", price: 15, unit: "kg", category: "ready", image: oladyiImg },

  // Десерты
  { id: "d1", nameRu: "Десерт медовый", nameEn: "Honey dessert", price: 32, unit: "kg", category: "desserts", image: honeyCakeImg },
  { id: "d2", nameRu: "Десерт «Графские развалины»", nameEn: "\"Count's Ruins\" dessert", price: 32, unit: "kg", category: "desserts", image: grafskieImg },

  // Прочее
  { id: "o1", nameRu: "Капуста квашеная (банка 3л)", nameEn: "Sauerkraut (3L jar)", price: 15, unit: "jar", category: "other", image: sauerkrautImg },
];
