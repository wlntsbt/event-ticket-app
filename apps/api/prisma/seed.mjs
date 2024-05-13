import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import bcrypt from 'bcrypt';
const saltRounds = 5;

export const referralCodeGenerator = () => {
  return (Math.random() + 1).toString(36).substring(7);
};

export const hashPassword = async (password) => {
  return await bcrypt.hash(password, saltRounds);
};

export const timeToDate = (date, time) => {
  const [year, month, day] = date.split('-').map((x) => parseInt(x));
  const [hour, minute] = time.split(':').map((x) => parseInt(x));
  return new Date(year, month - 1, day, hour, minute);
};

function randomDate(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const randomTime =
    start.getTime() + Math.random() * (end.getTime() - start.getTime());
  return new Date(randomTime);
}

const attendees = [
  {
    firstName: 'Wulan',
    lastName: 'Tsabita',
    username: 'wlntsbt',
    email: 'wulan@test.com',
    password: await hashPassword('wulan123'),
    referralCode: referralCodeGenerator(),
  },
  {
    firstName: 'Bogi',
    lastName: 'Prasetyandi',
    username: 'bogz',
    email: 'bogi@test.com',
    password: await hashPassword('bogi123'),
    referralCode: referralCodeGenerator(),
  },
  {
    firstName: 'Alice',
    lastName: 'Smith',
    username: 'alicesmith',
    email: 'alice@test.com',
    password: await hashPassword('alice123'),
    referralCode: referralCodeGenerator(),
  },
  {
    firstName: 'Michael',
    lastName: 'Johnson',
    username: 'michaelj',
    email: 'michael@test.com',
    password: await hashPassword('michael123'),
    referralCode: referralCodeGenerator(),
  },
  {
    firstName: 'Emily',
    lastName: 'Brown',
    username: 'emilyb',
    email: 'emily@test.com',
    password: await hashPassword('emily123'),
    referralCode: referralCodeGenerator(),
  },
  {
    firstName: 'David',
    lastName: 'Garcia',
    username: 'davidg',
    email: 'david@test.com',
    password: await hashPassword('david123'),
    referralCode: referralCodeGenerator(),
  },
  {
    firstName: 'Barent',
    lastName: 'Limita',
    username: 'barentnolimit',
    email: 'barent@test.com',
    password: await hashPassword('barent123'),
    referralCode: referralCodeGenerator(),
  },
  {
    firstName: 'Muhammad',
    lastName: 'Iqbal',
    username: 'iqbaale',
    email: 'muhammad@test.com',
    password: await hashPassword('iqbal123'),
    referralCode: referralCodeGenerator(),
  },
  {
    firstName: 'Raihan',
    lastName: 'Putra',
    username: 'raihanp',
    email: 'raihan@test.com',
    password: await hashPassword('raihan123'),
    referralCode: referralCodeGenerator(),
  },
  {
    firstName: 'Naura',
    lastName: 'Nabila',
    username: 'nauran',
    email: 'naura@test.com',
    password: await hashPassword('naura123'),
    referralCode: referralCodeGenerator(),
  },
  {
    firstName: 'Faris',
    lastName: 'Anugrah',
    username: 'farisanu',
    email: 'faris@test.com',
    password: await hashPassword('faris123'),
    referralCode: referralCodeGenerator(),
  },
  {
    firstName: 'Alya',
    lastName: 'Sari',
    username: 'alyasari',
    email: 'alya@test.com',
    password: await hashPassword('alya123'),
    referralCode: referralCodeGenerator(),
  },
  {
    firstName: 'Fathan',
    lastName: 'Ramadhan',
    username: 'fathanr',
    email: 'fathan@test.com',
    password: await hashPassword('fathan123'),
    referralCode: referralCodeGenerator(),
  },
  {
    firstName: 'Aurora',
    lastName: 'Dewi',
    username: 'aurorad',
    email: 'aurora@test.com',
    password: await hashPassword('aurora123'),
    referralCode: referralCodeGenerator(),
  },
  {
    firstName: 'Kevin',
    lastName: 'Putra',
    username: 'kevinp',
    email: 'kevin@test.com',
    password: await hashPassword('kevin123'),
    referralCode: referralCodeGenerator(),
  },
  {
    firstName: 'Denisa',
    lastName: 'Dhaniswara',
    username: 'denisa',
    email: 'denisa@test.com',
    password: await hashPassword('denisa123'),
    referralCode: referralCodeGenerator(),
  },
  {
    firstName: 'William',
    lastName: 'Moore',
    username: 'williamm',
    email: 'william@test.com',
    password: await hashPassword('william123'),
    referralCode: referralCodeGenerator(),
  },
];

const promotors = [
  {
    name: 'KRAPELA',
    email: 'krapelalive@test.com',
    username: 'krapela',
    password: await hashPassword('krapela'),
  },
  {
    name: 'Plainsong Live',
    email: 'plainsonglive@test.com',
    username: 'plainsonglive',
    password: await hashPassword('plainsong'),
  },
  {
    name: 'FLASHBACK motion',
    email: 'flashbackmotionlive@test.com',
    username: 'flashbackmotion',
    password: await hashPassword('flashbackmotion'),
  },
  {
    name: 'Summarecon Mall Bandung',
    email: 'summareconmallbandunglive@test.com',
    username: 'smsbandung',
    password: await hashPassword('smsbandung'),
  },
  {
    name: 'ULTRA BEACH BALI',
    email: 'ultrabeachbalilive@test.com',
    username: 'ultrabeach',
    password: await hashPassword('ultrabeachbali'),
  },
  {
    name: 'DOM SOCIAL HUB',
    email: 'domsocialhublive@test.com',
    username: 'domsocialhub',
    password: await hashPassword('domsocialhub'),
  },
  {
    name: 'Jakarta GO',
    email: 'jakartagolive@test.com',
    username: 'jakartago',
    password: await hashPassword('jakartago'),
  },
];

const events = [
  {
    promotorUsername: 'krapela',
    eventData: {
      name: 'Journey in Harmony',
      startDate: new Date('2024-05-15'),
      endDate: new Date('2024-05-29'),
      startTime: timeToDate('2024-05-15', '17:00'),
      endTime: timeToDate('2024-05-29', '23:59'),
      category: 'Entertainment',
      location: 'JAKARTA',
      namePIC: 'Adrian',
      phonePIC: '08964859321',
      emailPIC: 'adrian@test.com',
      isPublished: true,
      description:
        "Celebrating a decade of musical brilliance with Isyana Sarasvati, 'JOURNEY IN HARMONY' is an intimate residency that showcases her talent, enthusiasm, and dedication to music. Over the course of four unforgettable shows, immerse yourself in the essence of Isyana's musical evolution as each show unveils a different chapter of her remarkable journey.",
      promotorUid: '',
      imageLink: 'src/public/image/20240424192022_6628f906ed82b_51609.jpg',
    },
    ticketData: [
      {
        ticketName: 'PARADOX | 15 May 2024',
        ticketAmount: 30,
        ticketPrice: 250000,
        ticketDescription: '1 Standing ticket, price INCLUDES tax and admin',
        salesStart: new Date('2024-04-20'),
        salesEnd: new Date('2024-05-15'),
        eventId: '',
      },
      {
        ticketName: 'LEXICON | 22 May 2024',
        ticketAmount: 30,
        ticketPrice: 250000,
        ticketDescription: '1 Standing ticket, price INCLUDES tax and admin',
        salesStart: new Date('2024-04-20'),
        salesEnd: new Date('2024-05-22'),
        eventId: '',
      },
      {
        ticketName: 'ISYANA | 29 May 2024',
        ticketAmount: 30,
        ticketPrice: 390000,
        ticketDescription: '1 Standing ticket, price INCLUDES tax and admin',
        salesStart: new Date('2024-04-20'),
        salesEnd: new Date('2024-05-29'),
        eventId: '',
      },
    ],
  },
  {
    promotorUsername: 'plainsonglive',
    eventData: {
      name: 'JOYLAND BALI 2024',
      startDate: new Date('2024-03-01'),
      endDate: new Date('2024-03-03'),
      startTime: timeToDate('2024-03-01', '15:00'),
      endTime: timeToDate('2024-03-03', '23:59'),
      category: 'Entertainment',
      location: 'BALI',
      namePIC: 'Michael',
      phonePIC: '08964859321',
      emailPIC: 'michael@test.com',
      isPublished: true,
      description:
        'Music and arts festival held outdoors in open green space. Three days of live music, comedy, film, workshops, and marketplace across different areas of the venue. A multisensory festival that collaborates with artists in various creative fields',
      promotorUid: '',
      imageLink: 'src/public/image/joylandbali.jpg',
    },
    ticketData: [
      {
        ticketName: '3-Day Pass VIP',
        ticketAmount: 30,
        ticketPrice: 1200000,
        ticketDescription:
          'Ticket valid for 3 days (Friday to Sunday, 1-3 March 2024) \n VIP Pass Benefits: \n Priority entrance - Access to special viewing areas, lockers, restrooms \n Access to raffle for Artist Meet & Greet or signed merchandise \n Exclusive discounts on Joyland pre-party / after-party tickets',
        salesStart: new Date('2023-11-20'),
        salesEnd: new Date('2024-03-03'),
        eventId: '',
      },
      {
        ticketName: '3-Day Pass GA',
        ticketAmount: 40,
        ticketPrice: 750000,
        ticketDescription:
          'Ticket valid for 3 days (Friday to Sunday, 1-3 March 2024)',
        salesStart: new Date('2023-11-20'),
        salesEnd: new Date('2024-03-03'),
        eventId: '',
      },
      {
        ticketName: 'DAY 1 - FRI MARCH 1',
        ticketAmount: 20,
        ticketPrice: 350000,
        ticketDescription: 'Ticket valid for 1 day',
        salesStart: new Date('2024-01-20'),
        salesEnd: new Date('2024-03-01'),
        eventId: '',
      },
      {
        ticketName: 'DAY 2 - SAT MARCH 2',
        ticketAmount: 20,
        ticketPrice: 350000,
        ticketDescription: 'Ticket valid for 1 day',
        salesStart: new Date('2024-01-20'),
        salesEnd: new Date('2024-03-02'),
        eventId: '',
      },
      {
        ticketName: 'DAY 3 - SAT MARCH 3',
        ticketAmount: 20,
        ticketPrice: 350000,
        ticketDescription: 'Ticket valid for 1 day',
        salesStart: new Date('2024-01-20'),
        salesEnd: new Date('2024-03-03'),
        eventId: '',
      },
    ],
  },
  {
    promotorUsername: 'jakartago',
    eventData: {
      name: 'Scent of Indonesia',
      startDate: new Date('2024-06-28'),
      endDate: new Date('2024-06-30'),
      startTime: timeToDate('2024-06-28', '10:00'),
      endTime: timeToDate('2024-06-30', '22:00'),
      category: 'Bazaar',
      location: 'JAKARTA',
      namePIC: 'Widya',
      phonePIC: '08964859321',
      emailPIC: 'widya@test.com',
      isPublished: true,
      description:
        "THE FIRST LOCAL FRAGRANCE MARKET IN INDONESIA IS FINALLY HERE! \n We will have more than 50+ fragrance tenants offering a diverse range of products, including perfumes, body care items, and home fragrances. \n Featuring brands such as MINE Perfumery, SAFF n co, Scents of Pluto, Hint, The Body Tale, Semerbak, House of Dappers and many more yet to be announced! \n Alongside, we'll also have FnB tenants, installation to capture your memorable memories at our event, expert speakers sharing their fragrance knowledge and music performances for you to enjoy!",
      promotorUid: '',
      imageLink: 'src/public/image/20240506160110_66389c5655100.jpg',
    },
    ticketData: [
      {
        ticketName: 'Daily Entry Pass',
        ticketAmount: 30,
        ticketPrice: 90000,
        ticketDescription: 'Ticket valid for 1 day of entry',
        salesStart: new Date('2024-05-12'),
        salesEnd: new Date('2024-06-30'),
        eventId: '',
      },
    ],
  },
  {
    promotorUsername: 'jakartago',
    eventData: {
      name: 'Siksa Kubur Experience (Wahana Official)',
      startDate: new Date('2024-04-16'),
      endDate: new Date('2024-05-30'),
      startTime: timeToDate('2024-04-16', '15:00'),
      endTime: timeToDate('2024-05-30', '20:00'),
      category: 'Entertainment',
      location: 'JAKARTA',
      namePIC: 'Heru',
      phonePIC: '08964859321',
      emailPIC: 'heru@test.com',
      isPublished: true,
      description:
        'Didukung secara langsung oleh Come and See Pictures sebagai Production House dari film Siksa Kubur, film karya Joko Anwar ini diadaptasikan menjadi sebuah experience yang akan membawa Anda merasakan sudut pandang Sita yang mencari tahu mengenai Siksa Kubur.',
      promotorUid: '',
      imageLink: 'src/public/image/20240504132724_6635d54ce2a75.jpg',
    },
    ticketData: [
      {
        ticketName: 'Sesi 1 (15:00 - 16:00)',
        ticketAmount: 20,
        ticketPrice: 89000,
        ticketDescription: 'Ticket valid for 1 day of entry',
        salesStart: new Date('2024-04-16'),
        salesEnd: new Date('2024-05-30'),
        eventId: '',
      },
      {
        ticketName: 'Sesi 2 (17:00 - 18:00)',
        ticketAmount: 20,
        ticketPrice: 89000,
        ticketDescription: 'Ticket valid for 1 day of entry',
        salesStart: new Date('2024-04-16'),
        salesEnd: new Date('2024-05-30'),
        eventId: '',
      },
      {
        ticketName: 'Sesi 3 (19:00 - 20:00)',
        ticketAmount: 20,
        ticketPrice: 89000,
        ticketDescription: 'Ticket valid for 1 day of entry',
        salesStart: new Date('2024-04-16'),
        salesEnd: new Date('2024-05-30'),
        eventId: '',
      },
    ],
  },
  {
    promotorUsername: 'domsocialhub',
    eventData: {
      name: 'Le Laguan with Reality Club',
      startDate: new Date('2024-05-12'),
      endDate: new Date('2024-05-12'),
      startTime: timeToDate('2024-05-12', '16:00'),
      endTime: timeToDate('2024-05-12', '23:00'),
      category: 'Entertainment',
      location: 'TANGERANG',
      namePIC: 'Tara',
      phonePIC: '08964859321',
      emailPIC: 'tara@test.com',
      isPublished: true,
      description:
        'DOM Social Hub kembali menghadirkan musisi ternama yaitu Reality Club dan Magnolia Celebration.',
      promotorUid: '',
      imageLink: 'src/public/image/20240425150520_662a0ec09fef3.jpg',
    },
    ticketData: [
      {
        ticketName: 'Reguler',
        ticketAmount: 30,
        ticketPrice: 80000,
        ticketDescription: 'Ticket valid for 1 person',
        salesStart: new Date('2023-03-24'),
        salesEnd: new Date('2023-05-12'),
        eventId: '',
      },
      {
        ticketName: 'NONTON BERDUA',
        ticketAmount: 20,
        ticketPrice: 120000,
        ticketDescription:
          'Masuk langsung berdua, cocok buat yang pacaran, atau pergi bareng temen♥️',
        salesStart: new Date('2023-03-24'),
        salesEnd: new Date('2023-05-12'),
        eventId: '',
      },
    ],
  },
  {
    promotorUsername: 'smsbandung',
    eventData: {
      name: 'Gedebage Jazz Festival',
      startDate: new Date('2024-05-25'),
      endDate: new Date('2024-06-07'),
      startTime: timeToDate('2024-05-25', '13:00'),
      endTime: timeToDate('2024-05-26', '22:00'),
      category: 'Entertainment',
      location: 'BANDUNG',
      namePIC: 'Alya',
      phonePIC: '08964859321',
      emailPIC: 'alya@test.com',
      isPublished: true,
      description:
        'Gedebage Jazz Festival merupakan konser musik yang menggabungkan keindahan musik jazz dengan nuansa seni yang kaya. Acara ini diselenggarakan oleh Summarecon Mall Bandung, mall yang sangat mengapresiasi keindahan seni dan musik. Dalam event ini, para pengunjung akan disuguhkan dengan penampilan - penampilan musik jazz yang memukau dari 12 musisi terkenal dan berbakat di Indonesia. Dengan suasana yang penuh semangat dan inspiratif, Gedebage Jazz Festival tidak hanya menjadi tempat bagi pecinta musik jazz untuk berkumpul, tetapi juga merayakan keberagaman seni dan budaya, serta mempromosikan pertumbuhan dan pengembangan bakat lokal.',
      promotorUid: '',
      imageLink: 'src/public/image/20240405213040_66100b10221fb.jpg',
    },
    ticketData: [
      {
        ticketName: '2 Day Pass',
        ticketAmount: 20,
        ticketPrice: 200000,
        ticketDescription: 'Ticket valid for 1 person',
        salesStart: new Date('2023-03-24'),
        salesEnd: new Date('2023-05-26'),
        eventId: '',
      },
      {
        ticketName: '1 Day Pass (25 Mei 2024)',
        ticketAmount: 30,
        ticketPrice: 120000,
        ticketDescription: 'Ticket valid for 1 person',
        salesStart: new Date('2023-03-24'),
        salesEnd: new Date('2023-05-25'),
        eventId: '',
      },
      {
        ticketName: '1 Day Pass (26 Mei 2024)',
        ticketAmount: 30,
        ticketPrice: 120000,
        ticketDescription: 'Ticket valid for 1 person',
        salesStart: new Date('2023-03-24'),
        salesEnd: new Date('2023-05-26'),
        eventId: '',
      },
    ],
  },
  {
    promotorUsername: 'ultrabeach',
    eventData: {
      name: 'Ultra Beach Bali 2024',
      startDate: new Date('2024-06-06'),
      endDate: new Date('2024-06-07'),
      startTime: timeToDate('2024-06-06', '14:00'),
      endTime: timeToDate('2024-06-07', '23:00'),
      category: 'Entertainment',
      location: 'BALI',
      namePIC: 'Made',
      phonePIC: '08964859321',
      emailPIC: 'made@test.com',
      isPublished: true,
      description:
        "Get ready for the ultimate beach party experience as Ultra Beach Bali returns for its 6th year! Join us for a day of sun, sand, and electrifying beats, set against the stunning backdrop of Bali's breathtaking coastline.",
      promotorUid: '',
      imageLink: 'src/public/image/sampleData7_62950.jpg',
    },
    ticketData: [
      {
        ticketName: '2 Day Pass',
        ticketAmount: 20,
        ticketPrice: 2500000,
        ticketDescription: 'Ticket valid for 1 person',
        salesStart: new Date('2023-04-24'),
        salesEnd: new Date('2023-06-07'),
        eventId: '',
      },
      {
        ticketName: '1 Day Pass (Jun 06 2024)',
        ticketAmount: 20,
        ticketPrice: 990000,
        ticketDescription: 'Ticket valid for 1 person',
        salesStart: new Date('2023-03-24'),
        salesEnd: new Date('2023-06-06'),
        eventId: '',
      },
      {
        ticketName: '1 Day Pass (Jun 07 2024)',
        ticketAmount: 20,
        ticketPrice: 990000,
        ticketDescription: 'Ticket valid for 1 person',
        salesStart: new Date('2023-03-24'),
        salesEnd: new Date('2023-06-06'),
        eventId: '',
      },
    ],
  },
];

const transactions = [
  {
    attendeeUsername: 'wlntsbt',
    bookingData: [
      [
        {
          ticketId: 1,
          qty: 3,
        },
        {
          ticketId: 3,
          qty: 1,
        },
      ],
      [
        {
          ticketId: 4,
          qty: 1,
        },
      ],
      [
        {
          ticketId: 9,
          qty: 3,
        },
      ],
      [
        {
          ticketId: 13,
          qty: 5,
        },
      ],
    ],
  },
  {
    attendeeUsername: 'bogz',
    bookingData: [
      [
        {
          ticketId: 2,
          qty: 2,
        },
      ],
      [
        {
          ticketId: 6,
          qty: 2,
        },
      ],
      [
        {
          ticketId: 19,
          qty: 2,
        },
      ],
      [
        {
          ticketId: 11,
          qty: 2,
        },
      ],
      [
        {
          ticketId: 12,
          qty: 4,
        },
      ],
    ],
  },
  {
    attendeeUsername: 'alicesmith',
    bookingData: [
      [
        {
          ticketId: 2,
          qty: 2,
        },
      ],
      [
        {
          ticketId: 5,
          qty: 4,
        },
      ],
      [
        {
          ticketId: 19,
          qty: 2,
        },
      ],
      [
        {
          ticketId: 11,
          qty: 2,
        },
      ],
      [
        {
          ticketId: 9,
          qty: 1,
        },
      ],
    ],
  },
  {
    attendeeUsername: 'barentnolimit',
    bookingData: [
      [
        {
          ticketId: 3,
          qty: 5,
        },
      ],
      [
        {
          ticketId: 10,
          qty: 3,
        },
      ],
      [
        {
          ticketId: 14,
          qty: 2,
        },
      ],
    ],
  },
  {
    attendeeUsername: 'iqbaale',
    bookingData: [
      [
        {
          ticketId: 1,
          qty: 2,
        },
        {
          ticketId: 2,
          qty: 2,
        },
        {
          ticketId: 3,
          qty: 4,
        },
      ],
      [
        {
          ticketId: 12,
          qty: 5,
        },
      ],
      [
        {
          ticketId: 14,
          qty: 2,
        },
      ],
    ],
  },
  {
    attendeeUsername: 'raihanp',
    bookingData: [
      [
        {
          ticketId: 1,
          qty: 2,
        },
        {
          ticketId: 3,
          qty: 2,
        },
      ],
      [
        {
          ticketId: 5,
          qty: 3,
        },
      ],
      [
        {
          ticketId: 9,
          qty: 2,
        },
      ],
      [
        {
          ticketId: 14,
          qty: 2,
        },
      ],
      [
        {
          ticketId: 18,
          qty: 2,
        },
      ],
    ],
  },
  {
    attendeeUsername: 'davidg',
    bookingData: [
      [
        {
          ticketId: 4,
          qty: 2,
        },
        {
          ticketId: 6,
          qty: 2,
        },
        {
          ticketId: 8,
          qty: 3,
        },
      ],
      [
        {
          ticketId: 11,
          qty: 3,
        },
      ],
      [
        {
          ticketId: 18,
          qty: 2,
        },
      ],
    ],
  },
  {
    attendeeUsername: 'nauran',
    bookingData: [
      [
        {
          ticketId: 2,
          qty: 2,
        },
      ],
      [
        {
          ticketId: 6,
          qty: 2,
        },
      ],
      [
        {
          ticketId: 8,
          qty: 3,
        },
      ],
      [
        {
          ticketId: 14,
          qty: 2,
        },
      ],
      [
        {
          ticketId: 15,
          qty: 3,
        },
      ],
      [
        {
          ticketId: 20,
          qty: 2,
        },
      ],
    ],
  },
  {
    attendeeUsername: 'farisanu',
    bookingData: [
      [
        {
          ticketId: 1,
          qty: 1,
        },
      ],
      [
        {
          ticketId: 7,
          qty: 3,
        },
      ],
      [
        {
          ticketId: 16,
          qty: 5,
        },
      ],
      [
        {
          ticketId: 20,
          qty: 1,
        },
      ],
    ],
  },
  {
    attendeeUsername: 'alyasari',
    bookingData: [
      [
        {
          ticketId: 7,
          qty: 3,
        },
      ],
      [
        {
          ticketId: 9,
          qty: 2,
        },
      ],
      [
        {
          ticketId: 10,
          qty: 5,
        },
      ],
      [
        {
          ticketId: 15,
          qty: 3,
        },
      ],
    ],
  },
  {
    attendeeUsername: 'fathanr',
    bookingData: [
      [
        {
          ticketId: 5,
          qty: 2,
        },
        {
          ticketId: 6,
          qty: 2,
        },
      ],
      [
        {
          ticketId: 12,
          qty: 3,
        },
      ],
      [
        {
          ticketId: 15,
          qty: 3,
        },
      ],
    ],
  },
  {
    attendeeUsername: 'aurorad',
    bookingData: [
      [
        {
          ticketId: 14,
          qty: 1,
        },
      ],
      [
        {
          ticketId: 4,
          qty: 2,
        },
      ],
      [
        {
          ticketId: 1,
          qty: 2,
        },
      ],
      [
        {
          ticketId: 16,
          qty: 5,
        },
      ],
    ],
  },
  {
    attendeeUsername: 'denisa',
    bookingData: [
      [
        {
          ticketId: 3,
          qty: 4,
        },
      ],
      [
        {
          ticketId: 4,
          qty: 3,
        },
        {
          ticketId: 8,
          qty: 1,
        },
      ],
      [
        {
          ticketId: 10,
          qty: 5,
        },
      ],
      [
        {
          ticketId: 18,
          qty: 3,
        },
      ],
    ],
  },
  {
    attendeeUsername: 'kevinp',
    bookingData: [
      [
        {
          ticketId: 1,
          qty: 2,
        },
      ],
      [
        {
          ticketId: 5,
          qty: 5,
        },
      ],
      [
        {
          ticketId: 9,
          qty: 2,
        },
      ],
      [
        {
          ticketId: 11,
          qty: 4,
        },
      ],
      [
        {
          ticketId: 17,
          qty: 3,
        },
      ],
      [
        {
          ticketId: 18,
          qty: 2,
        },
      ],
    ],
  },
  {
    attendeeUsername: 'williamm',
    bookingData: [
      [
        {
          ticketId: 14,
          qty: 2,
        },
      ],
      [
        {
          ticketId: 7,
          qty: 2,
        },
      ],
      [
        {
          ticketId: 15,
          qty: 2,
        },
      ],
      [
        {
          ticketId: 19,
          qty: 3,
        },
      ],
    ],
  },
];

async function main() {
  for (let attendee of attendees) {
    await prisma.attendee.create({
      data: attendee,
    });
  }

  for (let promotor of promotors) {
    await prisma.promotor.create({
      data: promotor,
    });
  }

  for (let event of events) {
    const promotor = await prisma.promotor.findUnique({
      where: {
        username: event.promotorUsername,
      },
    });

    event.eventData.promotorUid = promotor.uid;

    const newEvent = await prisma.event.create({
      data: event.eventData,
    });

    for (let ticket of event.ticketData) {
      ticket.eventId = newEvent.id;
      await prisma.ticket.create({
        data: ticket,
      });
    }
  }

  await prisma.$transaction(async (tx) => {
    for (let transaction of transactions) {
      console.log('INI USERNAME', transaction.attendeeUsername);
      const attendee = await tx.attendee.findUnique({
        where: {
          username: transaction.attendeeUsername,
        },
      });

      for (let booking of transaction.bookingData) {
        const bill = await tx.bill.create({
          data: {
            attendeeUid: attendee.uid,
            Booking: {
              create: booking,
            },
          },
        });

        console.log('INI BILL', bill);

        const bookingItems = await tx.booking.findMany({
          where: {
            billId: bill.id,
          },
          include: {
            ticket: true,
          },
        });

        const total = bookingItems.reduce(
          (acc, x) => acc + x.ticket.ticketPrice * x.qty,
          0,
        );

        await tx.bill.update({
          where: {
            id: bill.id,
          },
          data: {
            total: total,
            status: 'PAID',
          },
        });

        const ticketData = [];

        bookingItems.forEach((x) => {
          for (let i = 0; i < x.qty; i++) {
            const date = randomDate(x.ticket.salesStart, x.ticket.salesEnd);
            ticketData.push({
              ticketId: x.ticketId,
              billId: x.billId,
              createdAt: date,
            });
          }
        });

        const newTicketsResult = await tx.attendeeTicket.createMany({
          data: ticketData,
        });
        for (let book of bookingItems) {
          await tx.ticket.update({
            where: {
              id: book.ticketId,
            },
            data: {
              ticketAmount: {
                decrement: book.qty,
              },
            },
          });
        }
      }
    }
  });
}

main()
  .catch((e) => {
    console.log(e);
    // process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
