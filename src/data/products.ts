import { IProducts } from "../types/products.ts";

export const products: IProducts[] = [
  // пицца Маргарита
  {
    id: 1,
    name: "Маргарита",
    category: 1,
    composition: "томатный соус, моцарелла, томаты, базилик",
    weight: null,
    price: null,
    volume: null,
    quantity: null,
    sizes: [
      {
        id: 1,
        name: "24 см",
        weight: "300-400",
        volume: null,
        quantity: null,
        price: 9.5,
      },
      {
        id: 2,
        name: "30 см",
        weight: "500-600",
        volume: null,
        quantity: null,
        price: 15,
      },
    ],
  },

  // пицца 4 Сыра
  {
    id: 2,
    name: "4 сыра",
    category: 1,
    composition: "сырный соус, моцарелла, чеддер, сыр фета, сыр дорблю, базилик",
    weight: null,
    price: null,
    volume: null,
    quantity: null,
    sizes: [
      {
        id: 1,
        name: "24 см",
        weight: "300-400",
        volume: null,
        quantity: null,
        price: 11,
      },
      {
        id: 2,
        name: "30 см",
        weight: "500-600",
        volume: null,
        quantity: null,
        price: 17,
      },
    ],
  },

  // пицца Пепперони
  {
    id: 3,
    name: "Пепперони",
    category: 1,
    composition: "томатный соус, моцарелла, пепперони, базилик",
    weight: null,
    price: null,
    volume: null,
    quantity: null,
    sizes: [
      {
        id: 1,
        name: "24 см",
        weight: "300-400",
        volume: null,
        quantity: null,
        price: 10,
      },
      {
        id: 2,
        name: "30 см",
        weight: "500-600",
        volume: null,
        quantity: null,
        price: 16,
      },
    ],
  },

  // пицца Карбонара
  {
    id: 4,
    name: "Карбонара",
    category: 1,
    composition: "чесночный соус, моцарелла, ветчина, шампиньоны, бекон, лук, базилик",
    weight: null,
    price: null,
    volume: null,
    quantity: null,
    sizes: [
      {
        id: 1,
        name: "24 см",
        weight: "300-400",
        volume: null,
        quantity: null,
        price: 11,
      },
      {
        id: 2,
        name: "30 см",
        weight: "500-600",
        volume: null,
        quantity: null,
        price: 17,
      },
    ],
  },

  // пицца чесночная курочка
  {
    id: 5,
    name: "Чесночная курочка",
    category: 1,
    composition: "чесночный соус, моцарелла, курица, бекон, томаты, базилик",
    weight: null,
    price: null,
    volume: null,
    quantity: null,
    sizes: [
      {
        id: 1,
        name: "24 см",
        weight: "300-400",
        volume: null,
        quantity: null,
        price: 12,
      },
      {
        id: 2,
        name: "30 см",
        weight: "500-600",
        volume: null,
        quantity: null,
        price: 18,
      },
    ],
  },

  // пицца Цыпленок дорблю
  {
    id: 6,
    name: "Цыпленок дорблю",
    category: 1,
    composition: "сырный соус, моцарелла, курица, сыр дорблю, базилик",
    weight: null,
    price: null,
    volume: null,
    quantity: null,
    sizes: [
      {
        id: 1,
        name: "24 см",
        weight: "300-400",
        volume: null,
        quantity: null,
        price: 12,
      },
      {
        id: 2,
        name: "30 см",
        weight: "500-600",
        volume: null,
        quantity: null,
        price: 18,
      },
    ],
  },

  // пицца Колбаски ВВQ
  {
    id: 7,
    name: "Колбаски ВВQ",
    category: 1,
    composition: "томатный соус, моцарелла, колбаски, соленый огурец, лук, базилик",
    weight: null,
    price: null,
    volume: null,
    quantity: null,
    sizes: [
      {
        id: 1,
        name: "24 см",
        weight: "300-400",
        volume: null,
        quantity: null,
        price: 10.5,
      },
      {
        id: 2,
        name: "30 см",
        weight: "500-600",
        volume: null,
        quantity: null,
        price: 17,
      },
    ],
  },

  // пицца Мясная
  {
    id: 8,
    name: "Мясная",
    category: 1,
    composition: "томатный соус, моцарелла, пепперони, ветчина, колбаски, бекон, базилик",
    weight: null,
    price: null,
    volume: null,
    quantity: null,
    sizes: [
      {
        id: 1,
        name: "24 см",
        weight: "300-400",
        volume: null,
        quantity: null,
        price: 13,
      },
      {
        id: 2,
        name: "30 см",
        weight: "500-600",
        volume: null,
        quantity: null,
        price: 20,
      },
    ],
  },

  //пицца Чизбургер
  {
    id: 9,
    name: "Чизбургер",
    category: 1,
    composition: "сырный соус, моцарелла. бекон, фарш, томаты, соленный огурец, лук, кунжут, базилик",
    weight: null,
    price: null,
    volume: null,
    quantity: null,
    sizes: [
      {
        id: 1,
        name: "24 см",
        weight: "300-400",
        volume: null,
        quantity: null,
        price: 12.5,
      },
      {
        id: 2,
        name: "30 см",
        weight: "500-600",
        volume: null,
        quantity: null,
        price: 19,
      },
    ],
  },

  // пицца Вегетарианская
  {
    id: 10,
    name: "Вегетарианская",
    category: 1,
    composition: "томатный соус, моцарелла, томаты, шампиньоны, болгарский перец, сыр фета, маслины, базилик",
    weight: null,
    price: null,
    volume: null,
    quantity: null,
    sizes: [
      {
        id: 1,
        name: "24 см",
        weight: "300-400",
        volume: null,
        quantity: null,
        price: 13,
      },
      {
        id: 2,
        name: "30 см",
        weight: "500-600",
        volume: null,
        quantity: null,
        price: 20,
      },
    ],
  },

  // пицца Эль Диабло
  {
    id: 11,
    name: "Эль Диабло",
    category: 1,
    composition: "томатный соус, моцарелла, пепперони, бекон, болгарский перец, халапеньо, соус чили, базилик",
    weight: null,
    price: null,
    volume: null,
    quantity: null,
    sizes: [
      {
        id: 1,
        name: "24 см",
        weight: "300-400",
        volume: null,
        quantity: null,
        price: 13,
      },
      {
        id: 2,
        name: "30 см",
        weight: "500-600",
        volume: null,
        quantity: null,
        price: 19,
      },
    ],
  },

  // пицца Итальянская
  {
    id: 12,
    name: "Итальянская",
    category: 1,
    composition: "томатный соус, моцарелла, пепперони, шампиньоны, бекон, маслины, базилик",
    weight: null,
    price: null,
    volume: null,
    quantity: null,
    sizes: [
      {
        id: 1,
        name: "24 см",
        weight: "300-400",
        volume: null,
        quantity: null,
        price: 12.5,
      },
      {
        id: 2,
        name: "30 см",
        weight: "500-600",
        volume: null,
        quantity: null,
        price: 19,
      },
    ],
  },

  // шаурма Классическая
  {
    id: 13,
    name: "Классическая",
    category: 2,
    composition: "лепешка, курица, салат, огурец, томат, чесночный соус, томатный соус",
    weight: null,
    price: null,
    volume: null,
    quantity: null,
    sizes: [
      {
        id: 1,
        name: "S",
        weight: "300",
        volume: null,
        quantity: null,
        price: 7,
      },
      {
        id: 2,
        name: "M",
        weight: "400",
        volume: null,
        quantity: null,
        price: 9,
      },
      {
        id: 3,
        name: "XL",
        weight: "500",
        volume: null,
        quantity: null,
        price: 11,
      },
    ],
  },

  // шаурма Мексиканская
  {
    id: 14,
    name: "Мексиканская",
    category: 2,
    composition: "лепешка, курица, салат, халапеньо, кукуруза, томат, чесночный соус, чили соус",
    weight: null,
    price: null,
    volume: null,
    quantity: null,
    sizes: [
      {
        id: 1,
        name: "S",
        weight: "310",
        volume: null,
        quantity: null,
        price: 8,
      },
      {
        id: 2,
        name: "M",
        weight: "420",
        volume: null,
        quantity: null,
        price: 10,
      },
      {
        id: 3,
        name: "XL",
        weight: "530",
        volume: null,
        quantity: null,
        price: 12,
      },
    ],
  },

  // шаурма Баварская
  {
    id: 15,
    name: "Баварская",
    category: 2,
    composition: "лепешка, курица, колбаски, салат, огурец, чесночный соус, соус BBQ",
    weight: null,
    price: null,
    volume: null,
    quantity: null,
    sizes: [
      {
        id: 1,
        name: "S",
        weight: "300",
        volume: null,
        quantity: null,
        price: 8,
      },
      {
        id: 2,
        name: "M",
        weight: "400",
        volume: null,
        quantity: null,
        price: 10,
      },
      {
        id: 3,
        name: "XL",
        weight: "500",
        volume: null,
        quantity: null,
        price: 12,
      },
    ],
  },

  // шаурма Сырная
  {
    id: 16,
    name: "Сырная",
    category: 2,
    composition: "лепешка, курица, салат, моцарелла, чеддер, чесночный соус, сырный соус",
    weight: null,
    price: null,
    volume: null,
    quantity: null,
    sizes: [
      {
        id: 1,
        name: "M",
        weight: "400",
        volume: null,
        quantity: null,
        price: 10,
      },
    ],
  },

  // шаурма Сытная
  {
    id: 17,
    name: "Сытная",
    category: 2,
    composition: "лепешка, курица, салат, пепперони, бекон, моцарелла, огурец, чесночный соус, томатный соус",
    weight: null,
    price: null,
    volume: null,
    quantity: null,
    sizes: [
      {
        id: 1,
        name: "M",
        weight: "440",
        volume: null,
        quantity: null,
        price: 11,
      },
      {
        id: 2,
        name: "XL",
        weight: "550",
        volume: null,
        quantity: null,
        price: 14,
      },
    ],
  },

  // Добавки Курица
  {
    id: 18,
    name: "Курица",
    category: 3,
    composition: null,
    weight: "40",
    price: 2,
    volume: null,
    quantity: null,
    sizes: null,
  },

  // Добавки Халапеньо
  {
    id: 19,
    name: "Халапеньо",
    category: 3,
    composition: null,
    weight: "20",
    price: 1,
    volume: null,
    quantity: null,
    sizes: null,
  },

  // добавки Сыр
  {
    id: 20,
    name: "Сыр",
    category: 3,
    composition: null,
    weight: "30",
    price: 1,
    volume: null,
    quantity: null,
    sizes: null,
  },

  // добавки Маслины
  {
    id: 21,
    name: "Маслины",
    category: 3,
    composition: null,
    weight: "20",
    price: 1,
    volume: null,
    quantity: null,
    sizes: null,
  },

  // добавки Бекон
  {
    id: 22,
    name: "Бекон",
    category: 3,
    composition: null,
    weight: "30",
    price: 2,
    volume: null,
    quantity: null,
    sizes: null,
  },

  // салат Греческий
  {
    id: 23,
    name: "Греческий",
    category: 4,
    composition: "айсберг, томаты, сыр фета, болгарский перец, маслины, красный лук, заправка",
    weight: "200",
    price: 8,
    volume: null,
    quantity: null,
    sizes: null,
  },

  // салат С креветками
  {
    id: 24,
    name: "С креветками",
    category: 4,
    composition: "айсберг, томаты, креветки, маслины, соус спайси",
    weight: "200",
    price: 12,
    volume: null,
    quantity: null,
    sizes: null,
  },

  // фри меню Сет к пиву №1
  {
    id: 25,
    name: "Сет к пиву №1",
    category: 5,
    composition: "крылья BBQ, гренки, луковые кольца, чесночный соус",
    weight: "440",
    price: 18,
    volume: null,
    quantity: null,
    sizes: null,
  },

  // фри меню Сет к пиву №2
  {
    id: 26,
    name: "Сет к пиву №2",
    category: 5,
    composition: "крылья BBQ, картофель фри, гренки, луковые кольца, чесночный соус, сырный соус",
    weight: "900",
    price: 28,
    volume: null,
    quantity: null,
    sizes: null,
  },

  // фри меню Картофель фри
  {
    id: 27,
    name: "Картофель фри",
    category: 5,
    composition: null,
    weight: "200",
    price: 9,
    volume: null,
    quantity: null,
    sizes: null,
  },

  // фри меню Крылья BBQ
  {
    id: 28,
    name: "Крылья BBQ",
    category: 5,
    composition: null,
    weight: "400",
    price: 12,
    volume: null,
    quantity: null,
    sizes: null,
  },

  // фри меню Гренки к пиву
  {
    id: 29,
    name: "Гренки к пиву",
    category: 5,
    composition: null,
    weight: "150",
    price: 8,
    volume: null,
    quantity: null,
    sizes: null,
  },

  // фри меню Луковые кольца
  {
    id: 30,
    name: "Луковые кольца",
    category: 5,
    composition: null,
    weight: null,
    price: 12,
    volume: null,
    quantity: "15",
    sizes: null,
  },

  // фри меню Наггетсы
  {
    id: 31,
    name: "Наггетсы",
    category: 5,
    composition: null,
    weight: null,
    price: 15,
    volume: null,
    quantity: "16",
    sizes: null,
  },

  // соусы Сырный
  {
    id: 32,
    name: "Сырный",
    category: 6,
    composition: null,
    weight: "30",
    price: 1,
    volume: null,
    quantity: null,
    sizes: null,
  },

  // соусы Чесночный
  {
    id: 33,
    name: "Чесночный",
    category: 6,
    composition: null,
    weight: "30",
    price: 1,
    volume: null,
    quantity: null,
    sizes: null,
  },

  // соусы BBQ
  {
    id: 34,
    name: "BBQ",
    category: 6,
    composition: null,
    weight: "30",
    price: 1,
    volume: null,
    quantity: null,
    sizes: null,
  },

  // соусы Чили
  {
    id: 35,
    name: "Чили",
    category: 6,
    composition: null,
    weight: "30",
    price: 1,
    volume: null,
    quantity: null,
    sizes: null,
  },

  // соусы Томатный
  {
    id: 36,
    name: "Томатный",
    category: 6,
    composition: null,
    weight: "30",
    price: 1,
    volume: null,
    quantity: null,
    sizes: null,
  },

  // горячие напитки Эспрессо
  {
    id: 37,
    name: "Эспрессо",
    category: 7,
    composition: null,
    weight: null,
    price: 2.5,
    volume: "50",
    quantity: null,
    sizes: null,
  },

  // горячие напитки Американо
  {
    id: 38,
    name: "Американо",
    category: 7,
    composition: null,
    weight: null,
    price: 2.5,
    volume: "180",
    quantity: null,
    sizes: null,
  },

  // горячие напитки Капучино
  {
    id: 39,
    name: "Капучино",
    category: 7,
    composition: null,
    weight: null,
    price: null,
    volume: null,
    quantity: null,
    sizes: [
      {
        id: 1,
        name: "мал.",
        price: 3.5,
        volume: "250",
        weight: null,
        quantity: null,
      },
      {
        id: 2,
        name: "бол.",
        price: 4.5,
        volume: "350",
        weight: null,
        quantity: null,
      },
    ],
  },

  // горячие напитки Латте
  {
    id: 40,
    name: "Латте",
    category: 7,
    composition: null,
    weight: null,
    price: null,
    volume: null,
    quantity: null,
    sizes: [
      {
        id: 1,
        name: "мал.",
        price: 4,
        volume: "250",
        weight: null,
        quantity: null,
      },
      {
        id: 2,
        name: "бол.",
        price: 5,
        volume: "350",
        weight: null,
        quantity: null,
      },
    ],
  },

  // горячие напитки Флэт уайт
  {
    id: 41,
    name: "Флэт уайт",
    category: 7,
    composition: null,
    weight: null,
    price: 4.5,
    volume: "250",
    quantity: null,
    sizes: null,
  },

  // горячие напитки Раф
  {
    id: 42,
    name: "Раф",
    category: 7,
    composition: null,
    weight: null,
    price: 6,
    volume: "350",
    quantity: null,
    sizes: null,
  },

  // горячие напитки Какао
  {
    id: 43,
    name: "Какао",
    category: 7,
    composition: null,
    weight: null,
    price: 4,
    volume: "350",
    quantity: null,
    sizes: null,
  },

  // горячие напитки Чай-пюре
  {
    id: 44,
    name: "Чай-пюре",
    category: 7,
    composition: null,
    weight: null,
    price: 4,
    volume: "350",
    quantity: null,
    sizes: null,
  },

  // холодные напитки Pepsi
  {
    id: 45,
    name: "Pepsi",
    category: 8,
    composition: null,
    weight: null,
    price: 3,
    volume: "500",
    quantity: null,
    sizes: null,
  },

  // холодные напитки Mirinda
  {
    id: 46,
    name: "Mirinda",
    category: 8,
    composition: null,
    weight: null,
    price: 3,
    volume: "500",
    quantity: null,
    sizes: null,
  },

  // холодные напитки 7up
  {
    id: 47,
    name: "7up",
    category: 8,
    composition: null,
    weight: null,
    price: 3,
    volume: "500",
    quantity: null,
    sizes: null,
  },

  // холодные напитки Schweppes
  {
    id: 48,
    name: "Schweppes",
    category: 8,
    composition: null,
    weight: null,
    price: 4,
    volume: "500",
    quantity: null,
    sizes: null,
  },

  // холодные напитки Dynamit
  {
    id: 49,
    name: "Dynamit",
    category: 8,
    composition: null,
    weight: null,
    price: 4,
    volume: "500",
    quantity: null,
    sizes: null,
  },

  // холодные напитки Вода Aura негазированная
  {
    id: 50,
    name: "Вода Aura негазированная",
    category: 8,
    composition: null,
    weight: null,
    price: 2,
    volume: "500",
    quantity: null,
    sizes: null,
  },

  // холодные напитки Вода Aura газированная
  {
    id: 51,
    name: "Вода Aura газированная",
    category: 8,
    composition: null,
    weight: null,
    price: 2,
    volume: "500",
    quantity: null,
    sizes: null,
  },

  // холодные напитки Сок Rich
  {
    id: 52,
    name: "Сок Rich",
    category: 8,
    composition: null,
    weight: null,
    price: 8,
    volume: "1000",
    quantity: null,
    sizes: null,
  },

  // лимонады Арбуз-базилик
  {
    id: 53,
    name: "Арбуз-базилик",
    category: 9,
    composition: null,
    weight: null,
    price: 4.5,
    volume: "225",
    quantity: null,
    sizes: null,
  },

  // лимонады Клюква-каштан
  {
    id: 54,
    name: "Клюква-каштан",
    category: 9,
    composition: null,
    weight: null,
    price: 4.5,
    volume: "225",
    quantity: null,
    sizes: null,
  },

  // лимонады Мята-черная смородина
  {
    id: 55,
    name: "Мята-черная смородина",
    category: 9,
    composition: null,
    weight: null,
    price: 4.5,
    volume: "225",
    quantity: null,
    sizes: null,
  },

  // лимонады Огурец-личи
  {
    id: 56,
    name: "Огурец-личи",
    category: 9,
    composition: null,
    weight: null,
    price: 4.5,
    volume: "225",
    quantity: null,
    sizes: null,
  },

  // лимонады Груша-лаванда
  {
    id: 57,
    name: "Груша-лаванда",
    category: 9,
    composition: null,
    weight: null,
    price: 4.5,
    volume: "225",
    quantity: null,
    sizes: null,
  },

  // лимонады Дыня-грейпфрут
  {
    id: 58,
    name: "Дыня-грейпфрут",
    category: 9,
    composition: null,
    weight: null,
    price: 4.5,
    volume: "225",
    quantity: null,
    sizes: null,
  },

  // лимонады Огурец-грейпфрут
  {
    id: 59,
    name: "Огурец-грейпфрут",
    category: 9,
    composition: null,
    weight: null,
    price: 4.5,
    volume: "225",
    quantity: null,
    sizes: null,
  },

  // лимонады Холодный чай
  {
    id: 60,
    name: "Холодный чай",
    category: 9,
    composition: null,
    weight: null,
    price: 4,
    volume: "225",
    quantity: null,
    sizes: null,
  },

  // лимонады Айс-латте
  {
    id: 61,
    name: "Айс-латте",
    category: 9,
    composition: null,
    weight: null,
    price: 5,
    volume: "180",
    quantity: null,
    sizes: null,
  },

  // лимонады Бамбл-кофе
  {
    id: 62,
    name: "Бамбл-кофе",
    category: 9,
    composition: null,
    weight: null,
    price: 6,
    volume: "180",
    quantity: null,
    sizes: null,
  },

  // лимонады Эспрессо-тоник
  {
    id: 63,
    name: "Эспрессо-тоник",
    category: 9,
    composition: null,
    weight: null,
    price: 4.5,
    volume: "180",
    quantity: null,
    sizes: null,
  },
];
