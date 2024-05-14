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
  {
    name: 'YES Conference',
    email: 'yesconferencelive@test.com',
    username: 'yesconference',
    password: await hashPassword('yesconference'),
  },
  {
    name: 'GOLD Live',
    email: 'goldlive@test.com',
    username: 'goldlive',
    password: await hashPassword('goldlive'),
  },
  {
    name: 'AFA ID',
    email: 'afaid@test.com',
    username: 'afaid',
    password: await hashPassword('afaid'),
  },
  {
    name: 'Voluntrip by Kitabisa',
    email: 'kitabisa@test.com',
    username: 'kitabisa',
    password: await hashPassword('kitabisa'),
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
  {
    promotorUsername: 'flashbackmotion',
    eventData: {
      name: 'FLASHBACK motion - Enchanting ANGGUN',
      startDate: new Date('2024-07-28'),
      endDate: new Date('2024-07-28'),
      startTime: timeToDate('2024-07-28', '18:00'),
      endTime: timeToDate('2024-07-28', '22:00'),
      category: 'Entertainment',
      location: 'JAKARTA',
      namePIC: 'Aruna',
      phonePIC: '08964859321',
      emailPIC: 'aruna@test.com',
      isPublished: true,
      description:
        'Pertunjukan/ pagelaran ENCHANTING ini dipersembahkan bagi para penggemar ANGGUN, super star asal Indonesia dengan berjuta prestasi yang telah berhasil menaklukan kancah dunia musik internasional. \n         Dengan alunan musik yang akan dipandu oleh Andi Rianto & Magenta Orchestra, Sang DIVA beserta beberapa teman akan berkolaborasi, untuk kembali memperdengarkan lagu-lagu hits-nya, di antaranya \n         Mimpi, Snow On The Sahara, Tua-Tua Keladi, Still Reminds Me, Bayang Bayang Ilusi, Yang ‘Ku Tunggu, dan lainnya.',
      promotorUid: '',
      imageLink: 'src/public/image/20240420041901.jpg',
    },
    ticketData: [
      {
        ticketName: 'VIP',
        ticketAmount: 30,
        ticketPrice: 2397000,
        ticketDescription:
          'Randomized Numbered Seating(s); Pengunjung akan diberikan Best Available Seat(s). Tempat duduk di kategori ini akan diberi penomoran.',
        salesStart: new Date('2024-05-01'),
        salesEnd: new Date('2024-07-28'),
        eventId: '',
      },
      {
        ticketName: 'Festival',
        ticketAmount: 50,
        ticketPrice: 997000,
        ticketDescription:
          'Non-Numbered Seating(s); pada saat pertunjukan/ pagelaran, para pengunjung di kategori ini dibebaskan untuk memilih Seat(s) terbaik untuk menyaksikan pertunjukan. Tempat duduk di kategori ini tidak akan diberi penomoran.',
        salesStart: new Date('2024-04-01'),
        salesEnd: new Date('2024-07-28'),
        eventId: '',
      },
    ],
  },
  {
    promotorUsername: 'yesconference',
    eventData: {
      name: 'Youth Entrepreneur Summit (YES) Conference',
      startDate: new Date('2024-05-25'),
      endDate: new Date('2024-05-25'),
      startTime: timeToDate('2024-05-25', '08:00'),
      endTime: timeToDate('2024-05-25', '16:00'),
      category: 'Seminar',
      location: 'JAKARTA',
      namePIC: 'Felly',
      phonePIC: '08964859321',
      emailPIC: 'felly@test.com',
      isPublished: true,
      description:
        'Youth Entrepreneurship Summit (YES) merupakan Conference yang diadakan oleh Prasetiya Mulya dengan Organisasi PMPC. Setiap tahunnya, PMPC selalu membawakan acara menarik yang berkolaborasi dengan developer besar seperti Sinarmas Land, Branz, dan banyak lagi. Pada kesempatan ini, YES Conference berkolaborasi dengan CEO dari Snappin, Pak Devin Cahaya dan akan diadakan di IDD PIK 2 pada hari Sabtu, 25 Mei 2024. \n      Kami ingin memajukan gerakan kewirausahaan dan pendidikan skills generasi muda untuk mendukung tujuan mulia “Indonesia Emas 2045.” Maka dari itu, YES Conference mengusung tema yang berkaitan dengan 5 pilar untuk meraih kesuksesan dalam berbisnis yaitu personal development, entrepreneurship, business (sector) knowledge, personal finance, dan legacy building.',
      promotorUid: '',
      imageLink: 'src/public/image/20240509002902_663bb65eb2e5a.jpg',
    },
    ticketData: [
      {
        ticketName: 'Regular',
        ticketAmount: 30,
        ticketPrice: 200000,
        ticketDescription:
          'Get a full access to our 6 series of topics, from Personal Branding, Stocks Investment, Venture Capital, National Business, etc.',
        salesStart: new Date('2024-04-01'),
        salesEnd: new Date('2024-05-25'),
        eventId: '',
      },
    ],
  },
  {
    promotorUsername: 'yesconference',
    eventData: {
      name: 'SwipeRx IPEC -Jakarta',
      startDate: new Date('2024-06-01'),
      endDate: new Date('2024-06-01'),
      startTime: timeToDate('2024-06-01', '07:00'),
      endTime: timeToDate('2024-06-01', '20:30'),
      category: 'Seminar',
      location: 'JAKARTA',
      namePIC: 'Mega',
      phonePIC: '08964859321',
      emailPIC: 'mega@test.com',
      isPublished: true,
      description:
        'Setelah sukses menyelenggarakan SwipeRx IPEC di Surabaya pada tahun 2023 yang lalu, dalam rangka memajukan apotek secara digital melalui kampanye Sahabat Terpercaya Apotek, SwipeRx Indonesia bersama dengan Ikatan Apoteker Indonesia Pengurus Daerah DKI Jakarta, akan menyelenggarakan event SwipeRx IPEC: The 2nd Indonesian Pharmacy Expo & Conference di Kota Jakarta. Acara ini akan diselenggarakan dengan tema: Accelerating Pharmacy Services and Public Health with Technology Innovation.',
      promotorUid: '',
      imageLink: 'src/public/image/20240513091314_6641773ae237d.jpg',
    },
    ticketData: [
      {
        ticketName: 'SwipeRx IPEC | Member IAI | General Admission',
        ticketAmount: 30,
        ticketPrice: 100000,
        ticketDescription: 'Tiket berlaku untuk IPEC on-site di JCC Senayan.',
        salesStart: new Date('2024-04-01'),
        salesEnd: new Date('2024-06-01'),
        eventId: '',
      },
    ],
  },
  {
    promotorUsername: 'flashbackmotion',
    eventData: {
      name: 'Westlife The Hits Tour 2024',
      startDate: new Date('2024-06-07'),
      endDate: new Date('2024-06-07'),
      startTime: timeToDate('2024-06-07', '18:00'),
      endTime: timeToDate('2024-06-07', '22:00'),
      category: 'Entertainment',
      location: 'YOGYAKARTA',
      namePIC: 'Aruna',
      phonePIC: '08964859321',
      emailPIC: 'aruna@test.com',
      isPublished: true,
      description: 'Westlife Yearly Tour in Indonesia.',
      promotorUid: '',
      imageLink: 'src/public/image/sampleData6_49304.jpg',
    },
    ticketData: [
      {
        ticketName: 'Diamond',
        ticketAmount: 30,
        ticketPrice: 2397000,
        ticketDescription: '- Seating \n - Price exclude Tax dan admin fee.',
        salesStart: new Date('2024-03-25'),
        salesEnd: new Date('2024-06-07'),
        eventId: '',
      },
      {
        ticketName: 'Silver',
        ticketAmount: 30,
        ticketPrice: 1500000,
        ticketDescription: '- Seating \n - Price exclude Tax dan admin fee.',
        salesStart: new Date('2024-03-25'),
        salesEnd: new Date('2024-06-07'),
        eventId: '',
      },
    ],
  },
  {
    promotorUsername: 'goldlive',
    eventData: {
      name: 'Kelab Pertunjukan',
      startDate: new Date('2024-05-31'),
      endDate: new Date('2024-05-31'),
      startTime: timeToDate('2024-05-31', '17:00'),
      endTime: timeToDate('2024-05-31', '23:00'),
      category: 'Entertainment',
      location: 'SURABAYA',
      namePIC: 'Khairul',
      phonePIC: '08964859321',
      emailPIC: 'khairul@test.com',
      isPublished: true,
      description:
        "kelab pertunjukan is a musical celebration event presented to accommodate various musicians from various genres and periods. on the stage the club will perform will feature musicians who were so familiar at the time and will share the stage with new musicians who are coloring the indonesian music scene. not only performing music, kelab pertunjukan is mixed with art installations and screen printing. kelab pertunjukan is the validation of today's youth as a place for self-actualization and expression. kelab pertunjukan will be celebrated in various regions in indonesia. kelab pertunjukan is committed to presenting a celebration music that can provide proper entertainment so that it becomes a moment and experience for those involved and watching.",
      promotorUid: '',
      imageLink: 'src/public/image/20240506124427.jpg',
    },
    ticketData: [
      {
        ticketName: 'General Entry',
        ticketAmount: 30,
        ticketPrice: 150000,
        ticketDescription:
          'Pembeli tiket wajib berusia minimal 18 (Delapan Belas) tahun',
        salesStart: new Date('2024-03-25'),
        salesEnd: new Date('2024-05-31'),
        eventId: '',
      },
    ],
  },
  {
    promotorUsername: 'goldlive',
    eventData: {
      name: 'Saloka Fest 2024',
      startDate: new Date('2024-06-22'),
      endDate: new Date('2024-06-23'),
      startTime: timeToDate('2024-06-22', '10:00'),
      endTime: timeToDate('2024-06-23', '22:00'),
      category: 'Entertainment',
      location: 'YOGYAKARTA',
      namePIC: 'Dian',
      phonePIC: '08964859321',
      emailPIC: 'dian@test.com',
      isPublished: true,
      description:
        'Saloka Fest di tahun 2024 ini sangat spesial karena bertepatan dengan perayaan ulang tahun Saloka Theme Park yang ke-5. Tema MUSIC & ART akan menjadi anchor point untuk event kedepannya dan sustainability menjadi kampanye yang akan dikomunikasikan melalui event Saloka Fest.',
      promotorUid: '',
      imageLink: 'src/public/image/20240411163809_6617af81ebcfe.jpg',
    },
    ticketData: [
      {
        ticketName: 'Pre-Sale GA',
        ticketAmount: 25,
        ticketPrice: 79000,
        ticketDescription:
          'Special tiket bermain di Saloka Theme Park + nonton Konser Salokafest 2024',
        salesStart: new Date('2024-03-25'),
        salesEnd: new Date('2024-04-30'),
        eventId: '',
      },
      {
        ticketName: 'Regular GA',
        ticketAmount: 25,
        ticketPrice: 110000,
        ticketDescription:
          'Special tiket bermain di Saloka Theme Park + nonton Konser Salokafest 2024',
        salesStart: new Date('2024-05-2'),
        salesEnd: new Date('2024-06-23'),
        eventId: '',
      },
    ],
  },
  {
    promotorUsername: 'smsbandung',
    eventData: {
      name: "#DIMANAMANAKONSER Maliq & D'Essentials",
      startDate: new Date('2024-05-31'),
      endDate: new Date('2024-05-31'),
      startTime: timeToDate('2024-05-31', '19:00'),
      endTime: timeToDate('2024-05-31', '21:30'),
      category: 'Entertainment',
      location: 'BANDUNG',
      namePIC: 'Lulu',
      phonePIC: '08964859321',
      emailPIC: 'lulu@test.com',
      isPublished: true,
      description:
        "Acara #DIMANAMANAKONSER Bersama Maliq & D'Essentials tidak dipungut biaya. Sampai bertemu di lokasi pilihanmu!.",
      promotorUid: '',
      imageLink: 'src/public/image/20240508175804_663b5abce7008.jpg',
    },
    ticketData: [
      {
        ticketName: 'Entry Ticket',
        ticketAmount: 25,
        ticketPrice: 0,
        ticketDescription: 'Free admission ticket',
        salesStart: new Date('2024-05-10'),
        salesEnd: new Date('2024-05-31'),
        eventId: '',
      },
    ],
  },
  {
    promotorUsername: 'krapela',
    eventData: {
      name: 'EYES WIDE CLUB - SHORT FILM SESSION',
      startDate: new Date('2024-03-23'),
      endDate: new Date('2024-03-23'),
      startTime: timeToDate('2024-03-23', '16:00'),
      endTime: timeToDate('2024-03-23', '20:00'),
      category: 'Entertainment',
      location: 'JAKARTA',
      namePIC: 'Tania',
      phonePIC: '08964859321',
      emailPIC: 'tania@test.com',
      isPublished: true,
      description:
        'Nonton film bareng di Krapela dan ngobrol bareng pembuat filmnya langsung sambil buka puasa .',
      promotorUid: '',
      imageLink: 'src/public/image/20240311131007_65eea03f2fa5f.jpg',
    },
    ticketData: [
      {
        ticketName: 'EYES WIDE CLUB - 23 MARET 2024',
        ticketAmount: 25,
        ticketPrice: 90000,
        ticketDescription: 'Tiket masuk + makanan buka',
        salesStart: new Date('2024-03-13'),
        salesEnd: new Date('2024-03-23'),
        eventId: '',
      },
    ],
  },
  {
    promotorUsername: 'krapela',
    eventData: {
      name: 'EYES WIDE CLUB - JATUH CINTA SEPERTI DI FILM-FILM',
      startDate: new Date('2024-03-30'),
      endDate: new Date('2024-03-30'),
      startTime: timeToDate('2024-03-30', '16:00'),
      endTime: timeToDate('2024-03-30', '20:00'),
      category: 'Entertainment',
      location: 'JAKARTA',
      namePIC: 'Tania',
      phonePIC: '08964859321',
      emailPIC: 'tania@test.com',
      isPublished: true,
      description:
        'Nonton film bareng di Krapela dan ngobrol bareng pembuat filmnya langsung sambil buka puasa .',
      promotorUid: '',
      imageLink: 'src/public/image/20240311131007_65eea03f2fa5f.jpg',
    },
    ticketData: [
      {
        ticketName: 'EYES WIDE CLUB - 30 MARET 2024',
        ticketAmount: 25,
        ticketPrice: 90000,
        ticketDescription: 'Tiket masuk + makanan buka',
        salesStart: new Date('2024-03-20'),
        salesEnd: new Date('2024-03-20'),
        eventId: '',
      },
    ],
  },
  {
    promotorUsername: 'krapela',
    eventData: {
      name: 'EYES WIDE CLUB - SOMETHING IN THE WAY',
      startDate: new Date('2024-04-06'),
      endDate: new Date('2024-04-06'),
      startTime: timeToDate('2024-04-06', '16:00'),
      endTime: timeToDate('2024-04-06', '20:00'),
      category: 'Entertainment',
      location: 'JAKARTA',
      namePIC: 'Tania',
      phonePIC: '08964859321',
      emailPIC: 'tania@test.com',
      isPublished: true,
      description:
        'Nonton film bareng di Krapela dan ngobrol bareng pembuat filmnya langsung sambil buka puasa .',
      promotorUid: '',
      imageLink: 'src/public/image/20240311131007_65eea03f2fa5f.jpg',
    },
    ticketData: [
      {
        ticketName: 'EYES WIDE CLUB - 6 APRIL 2024',
        ticketAmount: 25,
        ticketPrice: 90000,
        ticketDescription: 'Tiket masuk + makanan buka',
        salesStart: new Date('2024-03-30'),
        salesEnd: new Date('2024-03-30'),
        eventId: '',
      },
    ],
  },
  {
    promotorUsername: 'afaid',
    eventData: {
      name: 'Anime Festival Asia (AFA) ID 2024',
      startDate: new Date('2024-05-04'),
      endDate: new Date('2024-05-05'),
      startTime: timeToDate('2024-05-04', '10:00'),
      endTime: timeToDate('2024-05-05', '21:30'),
      category: 'Entertainment',
      location: 'TANGERANG',
      namePIC: 'Joseph',
      phonePIC: '08964859321',
      emailPIC: 'joseph@test.com',
      isPublished: true,
      description: 'Bringing You All Things J-Culture, Since 2008.',
      promotorUid: '',
      imageLink: 'src/public/image/sampleData4_59827.jpg',
    },
    ticketData: [
      {
        ticketName: 'VIP Ticket',
        ticketAmount: 20,
        ticketPrice: 998000,
        ticketDescription:
          'VIP Concert Access, 1 Day Exhibition + Stage Access, Priority Queue, Numbered VIP Seat',
        salesStart: new Date('2024-02-04'),
        salesEnd: new Date('2024-05-05'),
        eventId: '',
      },
      {
        ticketName: 'GA Ticket',
        ticketAmount: 20,
        ticketPrice: 498000,
        ticketDescription:
          'GA Concert Access, 1 Day Exhibition + Stage Access, Priority Queue, Standing Concert',
        salesStart: new Date('2024-02-04'),
        salesEnd: new Date('2024-05-05'),
        eventId: '',
      },
    ],
  },
  {
    promotorUsername: 'plainsonglive',
    eventData: {
      name: 'Joyland Festival Jakarta 2024',
      startDate: new Date('2024-11-22'),
      endDate: new Date('2024-11-24'),
      startTime: timeToDate('2024-11-22', '15:00'),
      endTime: timeToDate('2024-11-24', '21:30'),
      category: 'Entertainment',
      location: 'JAKARTA',
      namePIC: 'Emilia',
      phonePIC: '08964859321',
      emailPIC: 'emilia@test.com',
      isPublished: true,
      description:
        'Music and arts festival held outdoors in open green space. Three days of live music, comedy, film, workshops, and marketplace across different areas of the venue. A multisensory festival that collaborates with artists in various creative fields',
      promotorUid: '',
      imageLink: 'src/public/image/20240503020209.jpg',
    },
    ticketData: [
      {
        ticketName: 'Early Entry - 3 Day Pass',
        ticketAmount: 20,
        ticketPrice: 540000,
        ticketDescription:
          'Ticket valid for 3 days (Friday to Sunday, 22-24 Nov 2024). Entry before 3PM, otherwise penalty fee will incur.',
        salesStart: new Date('2024-05-10'),
        salesEnd: new Date('2024-11-22'),
        eventId: '',
      },
      {
        ticketName: 'General Admission - 3 Day Pass',
        ticketAmount: 20,
        ticketPrice: 890000,
        ticketDescription:
          'Ticket valid for 3 days (Friday to Sunday, 22-24 Nov 2024).',
        salesStart: new Date('2024-05-10'),
        salesEnd: new Date('2024-11-22'),
        eventId: '',
      },
      {
        ticketName: 'VIP - 3 Day Pass',
        ticketAmount: 20,
        ticketPrice: 1354000,
        ticketDescription:
          'Ticket valid for 3 days (Friday to Sunday, 22-24 Nov 2024). Priority entrance. Access to special viewing areas, lockers, restrooms',
        salesStart: new Date('2024-05-10'),
        salesEnd: new Date('2024-11-22'),
        eventId: '',
      },
    ],
  },
  {
    promotorUsername: 'kitabisa',
    eventData: {
      name: '#FunLearning Edukasi Mitigasi Bencana Gempa Bumi dan Kebakaran Bersama Adik',
      startDate: new Date('2024-05-17'),
      endDate: new Date('2024-05-17'),
      startTime: timeToDate('2024-05-17', '08:00'),
      endTime: timeToDate('2024-05-17', '11:30'),
      category: 'Social',
      location: 'JAKARTA',
      namePIC: 'Desi',
      phonePIC: '08964859321',
      emailPIC: 'desi@test.com',
      isPublished: true,
      description:
        'Ada banyak cara untuk berbagi dan memberikan dampak baik untuk lingkungan sekitarmu, salah satunya dengan menjadi relawan. Selain bisa membawa manfaat yang luar biasa untuk lingkunganmu, kamu juga bisa mendapatkan pengalaman dan menambah makna untuk hari-harimu. Voluntrip by Kitabisa hadir sebagai wadah untuk kamu yang ingin mendapatkan pengalaman menjadi relawan dalam berbagai misi kebaikan. Kali ini Voluntrip akan berkunjung ke Pela Mampang SDN 08 Dan 09 pagi, Kec. Mampang Prpt dan menjadi relawan #FunLearning Edukasi Mitigasi Bencana Gempa Bumi dan Kebakaran Bersama Adik.',
      promotorUid: '',
      imageLink: 'src/public/image/20240503180255_6634c45fd7a41.jpg',
    },
    ticketData: [
      {
        ticketName: '#FunLearning Edukasi Mitigasi Bencana Gempa Bumi',
        ticketAmount: 20,
        ticketPrice: 235000,
        ticketDescription: 'Untuk 1 Orang Volunteer',
        salesStart: new Date('2024-04-28'),
        salesEnd: new Date('2024-05-16'),
        eventId: '',
      },
    ],
  },
  {
    promotorUsername: 'kitabisa',
    eventData: {
      name: 'One Fun Day Outbound Bersama Adik Binaan',
      startDate: new Date('2024-06-01'),
      endDate: new Date('2024-06-01'),
      startTime: timeToDate('2024-06-01', '08:00'),
      endTime: timeToDate('2024-06-01', '14:30'),
      category: 'Social',
      location: 'TANGERANG',
      namePIC: 'Indira',
      phonePIC: '08964859321',
      emailPIC: 'indira@test.com',
      isPublished: true,
      description:
        'Ada banyak cara untuk berbagi dan memberikan dampak baik untuk lingkungan sekitarmu, salah satunya dengan menjadi relawan. Selain bisa membawa manfaat yang luar biasa untuk lingkunganmu, kamu juga bisa mendapatkan pengalaman dan menambah makna untuk hari-harimu. Voluntrip by Kitabisa hadir sebagai wadah untuk kamu yang ingin mendapatkan pengalaman menjadi relawan dalam berbagai misi kebaikan. Voluntrip by Kitabisa hadir sebagai wadah untuk kamu yang ingin mendapatkan pengalaman menjadi relawan dalam berbagai misi kebaikan. Kali ini Voluntrip akan berkunjung ke Rimbun Conservation, Tangerang Selatan dan menjadi relawan One Fun Day Outbound Bersama Adik Binaan.',
      promotorUid: '',
      imageLink: 'src/public/image/20240503180255_6634c45fd7a41.jpg',
    },
    ticketData: [
      {
        ticketName: 'One Fun Day Outbound Bersama Adik Binaan',
        ticketAmount: 15,
        ticketPrice: 235000,
        ticketDescription: 'Untuk 1 Orang Volunteer',
        salesStart: new Date('2024-05-15'),
        salesEnd: new Date('2024-05-30'),
        eventId: '',
      },
    ],
  },
  {
    promotorUsername: 'kitabisa',
    eventData: {
      name: 'Ecotrip Terpadu Ternak dan Kebun serta Berbagi untuk Adik-Adik Binaan',
      startDate: new Date('2024-06-18'),
      endDate: new Date('2024-06-18'),
      startTime: timeToDate('2024-06-18', '08:00'),
      endTime: timeToDate('2024-06-18', '14:30'),
      category: 'Social',
      location: 'YOGYAKARTA',
      namePIC: 'Anies',
      phonePIC: '08964859321',
      emailPIC: 'anies@test.com',
      isPublished: true,
      description:
        'Ada banyak cara untuk berbagi dan memberikan dampak baik untuk lingkungan sekitarmu, salah satunya dengan menjadi relawan. Selain bisa membawa manfaat yang luar biasa untuk lingkunganmu, kamu juga bisa mendapatkan pengalaman dan menambah makna untuk hari-harimu. Voluntrip by Kitabisa hadir sebagai wadah untuk kamu yang ingin mendapatkan pengalaman menjadi relawan dalam berbagai misi kebaikan. Voluntrip by Kitabisa hadir sebagai wadah untuk kamu yang ingin mendapatkan pengalaman menjadi relawan dalam berbagai misi kebaikan. Kali ini Voluntrip akan berkunjung ke Semesta Farm, Kab. Sleman dan menjadi relawan Ecotrip Terpadu Ternak dan Kebun serta Berbagi untuk Adik-Adik Binaan.',
      promotorUid: '',
      imageLink: 'src/public/image/20240508153730_663b39ca0c98e.jpg',
    },
    ticketData: [
      {
        ticketName: 'Ecotrip Terpadu Ternak dan Kebun',
        ticketAmount: 15,
        ticketPrice: 235000,
        ticketDescription: 'Untuk 1 Orang Volunteer',
        salesStart: new Date('2024-05-25'),
        salesEnd: new Date('2024-06-18'),
        eventId: '',
      },
    ],
  },
  {
    promotorUsername: 'ultrabeach',
    eventData: {
      name: 'KIND OF DREAM FESTIVAL 2024',
      startDate: new Date('2024-09-14'),
      endDate: new Date('2024-09-15'),
      startTime: timeToDate('2024-09-14', '16:00'),
      endTime: timeToDate('2024-09-15', '02:30'),
      category: 'Entertainment',
      location: 'JAKARTA',
      namePIC: 'Tiffany',
      phonePIC: '08964859321',
      emailPIC: 'tiffany@test.com',
      isPublished: true,
      description:
        "Anticipating the upcoming event 'Kind of Dream Festival 2024' an unparalleled electronic music beach festival set at the beach area of the first beach club in Jakarta, the Dreamville Beach Club at Pantai Indah Kapuk 2. Scheduled for the sun-soaked and electrifying nights of June 14 & 15, 2024, this festival is not just an event; it's a movement towards connecting dreamers under one sky to create beautiful and memorable festive moments.",
      promotorUid: '',
      imageLink: 'src/public/image/20240404030333.jpg',
    },
    ticketData: [
      {
        ticketName: 'BEACH CLUB DAY PASS',
        ticketAmount: 50,
        ticketPrice: 1258000,
        ticketDescription: 'Access & Entry at Beach Club Area + Welcome Drink',
        salesStart: new Date('2024-05-25'),
        salesEnd: new Date('2024-09-14'),
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
            ticket: {
              include: {
                event: true,
              },
            },
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
