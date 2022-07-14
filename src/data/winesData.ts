interface Wine {
  id: number
  name: string
  year: string
  color: string
  taste: string
  strength: string
  country: string
  producer: string
  img: string
  price: number
}

export const wines: Wine[] = [
  {
    id: 1,
    name: '"Drama" Red Blend',
    year: '2018',
    color: 'red',
    taste: 'dry',
    strength: '14%',
    country: 'Spain, La Mancha',
    producer: 'Bodegas Bastida',
    img: '../WineStore/assets/1.png',
    price: 20
  },

  {
    id: 2,
    name: '"Orea" Primitivo',
    year: '2020',
    color: 'red',
    taste: 'dry',
    strength: '13%',
    country: 'Italy, Apulia',
    producer: 'Cantina Diomede',
    img: '../WineStore/assets/2.png',
    price: 32
  },

  {
    id: 3,
    name: '"ZB Wine" Bastardo',
    year: '2020',
    color: 'red',
    taste: 'semi-sweet',
    strength: '14%',
    country: 'Krym, Sevastopol',
    producer: 'Zolotaya Balka',
    img: '../WineStore/assets/3.png',
    price: 15
  },

  {
    id: 4,
    name: '"Freschello" Bianco Sweet',
    year: '2021',
    color: 'white',
    taste: 'semi-sweet',
    strength: '10%',
    country: 'Italy, Veneto',
    producer: 'Cielo e Terra',
    img: '../WineStore/assets/4.png',
    price: 14
  },

  {
    id: 5,
    name: '"Gabia" Vinho Verde',
    year: '2020',
    color: 'white',
    taste: 'demi',
    strength: '11%',
    country: 'Portugal, Vinho Verde',
    producer: 'Casa Ermelinda Freitas',
    img: '../WineStore/assets/5.png',
    price: 25
  },

  {
    id: 6,
    name: '"Rio Lilo" Sauvignon Blanc-Airen',
    year: '2021',
    color: 'white',
    taste: 'dry',
    strength: '12%',
    country: 'Spain, Murcia, Jumilla',
    producer: 'Alceno',
    img: '../WineStore/assets/6.png',
    price: 21
  },

  {
    id: 7,
    name: '"Protos" Clarete',
    year: '2020',
    color: 'rose',
    taste: 'dry',
    strength: '13%',
    country: 'Spain, Castile and Leon, Cigales',
    producer: 'Bodegas Protos',
    img: '../WineStore/assets/7.png',
    price: 30
  },

  {
    id: 8,
    name: '"WooW" Malbec-Merlot Rose',
    year: '2021',
    color: 'rose',
    taste: 'sweet',
    strength: '8.5%',
    country: 'Argentina, Mendoza',
    producer: 'Bodegas Bianchi',
    img: '../WineStore/assets/8.png',
    price: 19
  },

  {
    id: 9,
    name: '"Folia" Rosato Negroamaro',
    year: '2020',
    color: 'rose',
    taste: 'dry',
    strength: '12%',
    country: 'Italy, Apulia',
    producer: 'Cantina Diomede',
    img: '../WineStore/assets/9.png',
    price: 17
  },

  {
    id: 10,
    name: '"Chateau Tamagne" Select Orange',
    year: '2020',
    color: 'orange',
    taste: 'demi',
    strength: '13.5%',
    country: 'Russia, Krasnodar region',
    producer: 'Kuban-Vino',
    img: '../WineStore/assets/10.png',
    price: 15
  },

  {
    id: 11,
    name: '"Kindeli" Otono',
    year: '2020',
    color: 'orange',
    taste: 'dry',
    strength: '13%',
    country: 'New Zealand, South Island, Nelson',
    producer: 'Alex Craighead',
    img: '../WineStore/assets/11.png',
    price: 46
  },

  {
    id: 12,
    name: '"Naranjo" Viognier',
    year: '2019',
    color: 'orange',
    taste: 'dry',
    strength: '14%',
    country: 'Chile, Central Valley, Colchagua',
    producer: 'Siegel',
    img: '../WineStore/assets/12.png',
    price: 25
  }
]
