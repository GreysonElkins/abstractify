const savedSets = [
  {
    id: 1,
    title: "Best pictures I've ever seen",
    images: [
      {
        id: 4118917,
        width: 3639,
        height: 4500,
        url:
          "https://images.pexels.com/photos/4118917/pexels-photo-4118917.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Jeffrey Czum",
          url: "https://www.pexels.com/@jeffrey-czum-254391",
        },
        locked: false,
        seen: true,
      },
      {
        id: 2537112,
        width: 1654,
        height: 3000,
        url:
          "https://images.pexels.com/photos/2537112/pexels-photo-2537112.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Aleksandar Pasaric",
          url: "https://www.pexels.com/@apasaric",
        },
        locked: false,
        seen: true,
      },
      {
        id: 3811073,
        width: 3744,
        height: 5617,
        url:
          "https://images.pexels.com/photos/3811073/pexels-photo-3811073.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Elly Fairytale",
          url: "https://www.pexels.com/@elly-fairytale",
        },
        locked: false,
        seen: true,
      },
      {
        id: 3876782,
        width: 3648,
        height: 4560,
        url:
          "https://images.pexels.com/photos/3876782/pexels-photo-3876782.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Josh Hild",
          url: "https://www.pexels.com/@josh-hild-1270765",
        },
        locked: false,
        seen: true,
      },
      {
        id: 4142190,
        width: 3437,
        height: 4296,
        url:
          "https://images.pexels.com/photos/4142190/pexels-photo-4142190.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Josh Hild",
          url: "https://www.pexels.com/@josh-hild-1270765",
        },
        locked: false,
        seen: true,
      },
      {
        id: 3905161,
        width: 3493,
        height: 4568,
        url:
          "https://images.pexels.com/photos/3905161/pexels-photo-3905161.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Josh Hild",
          url: "https://www.pexels.com/@josh-hild-1270765",
        },
        locked: false,
        seen: true,
      },
      {
        id: 1545494,
        width: 5918,
        height: 3945,
        url:
          "https://images.pexels.com/photos/1545494/pexels-photo-1545494.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Lisa Fotios",
          url: "https://www.pexels.com/@fotios-photos",
        },
        locked: false,
        seen: true,
      },
      {
        id: 3773297,
        width: 3527,
        height: 5155,
        url:
          "https://images.pexels.com/photos/3773297/pexels-photo-3773297.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Josh Hild",
          url: "https://www.pexels.com/@josh-hild-1270765",
        },
        locked: false,
        seen: true,
      },
      {
        id: 3726321,
        width: 2894,
        height: 3617,
        url:
          "https://images.pexels.com/photos/3726321/pexels-photo-3726321.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Josh Hild",
          url: "https://www.pexels.com/@josh-hild-1270765",
        },
        locked: false,
        seen: true,
      },
      {
        id: 2659631,
        width: 4000,
        height: 6000,
        url:
          "https://images.pexels.com/photos/2659631/pexels-photo-2659631.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Timea Kadar",
          url: "https://www.pexels.com/@timea-kadar-860778",
        },
        locked: false,
        seen: true,
      },
      {
        id: 2449364,
        width: 5184,
        height: 3456,
        url:
          "https://images.pexels.com/photos/2449364/pexels-photo-2449364.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Emre Can",
          url: "https://www.pexels.com/@emrecan",
        },
        locked: false,
        seen: true,
      },
      {
        id: 2264699,
        width: 5512,
        height: 5073,
        url:
          "https://images.pexels.com/photos/2264699/pexels-photo-2264699.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Tom Fisk",
          url: "https://www.pexels.com/@tomfisk",
        },
        locked: false,
        seen: true,
      },
      {
        id: 2264700,
        width: 5573,
        height: 7528,
        url:
          "https://images.pexels.com/photos/2264700/pexels-photo-2264700.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Tom Fisk",
          url: "https://www.pexels.com/@tomfisk",
        },
        locked: true,
        seen: false,
      },
      {
        id: 1769331,
        width: 1848,
        height: 2310,
        url:
          "https://images.pexels.com/photos/1769331/pexels-photo-1769331.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Alex Powell",
          url: "https://www.pexels.com/@powella1190",
        },
        locked: false,
        seen: true,
      },
      {
        id: 2422443,
        width: 3037,
        height: 2014,
        url:
          "https://images.pexels.com/photos/2422443/pexels-photo-2422443.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Daria Sannikova",
          url: "https://www.pexels.com/@dariabuntaria",
        },
        locked: false,
        seen: true,
      },
      {
        id: 305809,
        width: 5134,
        height: 2972,
        url:
          "https://images.pexels.com/photos/305809/pexels-photo-305809.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Keefe  Tay",
          url: "https://www.pexels.com/@keefe-tay-94966",
        },
        locked: false,
        seen: true,
      },
      {
        id: 264527,
        width: 3000,
        height: 2000,
        url:
          "https://images.pexels.com/photos/264527/pexels-photo-264527.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Pixabay",
          url: "https://www.pexels.com/@pixabay",
        },
        locked: false,
        seen: true,
      },
      {
        id: 2009829,
        width: 3492,
        height: 4656,
        url:
          "https://images.pexels.com/photos/2009829/pexels-photo-2009829.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Aditya Gidh",
          url: "https://www.pexels.com/@mihirjadhav03",
        },
        locked: false,
        seen: true,
      },
      {
        id: 2480919,
        width: 5357,
        height: 3569,
        url:
          "https://images.pexels.com/photos/2480919/pexels-photo-2480919.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Tom Fisk",
          url: "https://www.pexels.com/@tomfisk",
        },
        locked: false,
        seen: true,
      },
      {
        id: 3441731,
        width: 5301,
        height: 3552,
        url:
          "https://images.pexels.com/photos/3441731/pexels-photo-3441731.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Tom Fisk",
          url: "https://www.pexels.com/@tomfisk",
        },
        locked: false,
        seen: true,
      },
    ],
    created_at: 1600543576681,
  },
  {
    id: 2,
    title: "Drool-worthy",
    images: [
      null,
      {
        id: 3964366,
        width: 5341,
        height: 3001,
        url:
          "https://images.pexels.com/photos/3964366/pexels-photo-3964366.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Josh Fields",
          url: "https://www.pexels.com/@josh-fields-2290258",
        },
        locked: false,
        seen: false,
      },
      {
        id: 3145755,
        width: 3072,
        height: 2048,
        url:
          "https://images.pexels.com/photos/3145755/pexels-photo-3145755.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Thomas Svensson",
          url: "https://www.pexels.com/@thomas-svensson-1505611",
        },
        locked: false,
        seen: false,
      },
      {
        id: 3002552,
        width: 3456,
        height: 5184,
        url:
          "https://images.pexels.com/photos/3002552/pexels-photo-3002552.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Vitória Santos",
          url: "https://www.pexels.com/@vitoriasantos",
        },
        locked: false,
        seen: false,
      },
      {
        id: 1122639,
        width: 4000,
        height: 6000,
        url:
          "https://images.pexels.com/photos/1122639/pexels-photo-1122639.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Irina Iriser",
          url: "https://www.pexels.com/@iriser",
        },
        locked: false,
        seen: false,
      },
      {
        id: 325185,
        width: 5472,
        height: 3648,
        url:
          "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Aleksandar Pasaric",
          url: "https://www.pexels.com/@apasaric",
        },
        locked: false,
        seen: false,
      },
      {
        id: 3989821,
        width: 5489,
        height: 3659,
        url:
          "https://images.pexels.com/photos/3989821/pexels-photo-3989821.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Lina Kivaka",
          url: "https://www.pexels.com/@lina",
        },
        locked: false,
        seen: false,
      },
      {
        id: 1831236,
        width: 2448,
        height: 3060,
        url:
          "https://images.pexels.com/photos/1831236/pexels-photo-1831236.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Daria Shevtsova",
          url: "https://www.pexels.com/@daria",
        },
        locked: false,
        seen: false,
      },
      {
        id: 2896840,
        width: 1825,
        height: 2738,
        url:
          "https://images.pexels.com/photos/2896840/pexels-photo-2896840.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Arianna Jadé",
          url: "https://www.pexels.com/@viscoseillusion",
        },
        locked: false,
        seen: false,
      },
      {
        id: 1380653,
        width: 2656,
        height: 3984,
        url:
          "https://images.pexels.com/photos/1380653/pexels-photo-1380653.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Andreea Ch",
          url: "https://www.pexels.com/@andreea-ch-371539",
        },
        locked: false,
        seen: false,
      },
      {
        id: 1040473,
        width: 5760,
        height: 3840,
        url:
          "https://images.pexels.com/photos/1040473/pexels-photo-1040473.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Oleg Magni",
          url: "https://www.pexels.com/@oleg-magni",
        },
        locked: false,
        seen: false,
      },
      {
        id: 1755385,
        width: 3648,
        height: 5472,
        url:
          "https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Oziel Gómez",
          url: "https://www.pexels.com/@ozgomz",
        },
        locked: false,
        seen: false,
      },
      {
        id: 2441454,
        width: 3403,
        height: 2272,
        url:
          "https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Harrison  Candlin",
          url: "https://www.pexels.com/@harrison-candlin-1279336",
        },
        locked: false,
        seen: false,
      },
      {
        id: 288100,
        width: 2950,
        height: 2950,
        url:
          "https://images.pexels.com/photos/288100/pexels-photo-288100.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Curioso Photography",
          url: "https://www.pexels.com/@curiosophotography",
        },
        locked: false,
        seen: false,
      },
      {
        id: 1693095,
        width: 2848,
        height: 3560,
        url:
          "https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Tobias Bjørkli",
          url: "https://www.pexels.com/@tobias-bjorkli-706370",
        },
        locked: false,
        seen: false,
      },
      {
        id: 46160,
        width: 3872,
        height: 2592,
        url:
          "https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Pixabay",
          url: "https://www.pexels.com/@pixabay",
        },
        locked: false,
        seen: false,
      },
      {
        id: 196667,
        width: 4000,
        height: 2667,
        url:
          "https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "picjumbo.com",
          url: "https://www.pexels.com/@picjumbo-com-55570",
        },
        locked: false,
        seen: false,
      },
      {
        id: 1239291,
        width: 6000,
        height: 4000,
        url:
          "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Daniel Xavier",
          url: "https://www.pexels.com/@danxavier",
        },
        locked: false,
        seen: false,
      },
      {
        id: 2448749,
        width: 4000,
        height: 6000,
        url:
          "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Josh Hild",
          url: "https://www.pexels.com/@josh-hild-1270765",
        },
        locked: false,
        seen: false,
      },
      {
        id: 4173685,
        width: 7868,
        height: 12062,
        url:
          "https://images.pexels.com/photos/4173685/pexels-photo-4173685.jpeg?auto=compress&cs=tinysrgb&h=350",
        photographer: {
          name: "Tom Fisk",
          url: "https://www.pexels.com/@tomfisk",
        },
        locked: false,
        seen: false,
      },
    ],
    created_at: 1600543600216,
  },
];

export default savedSets