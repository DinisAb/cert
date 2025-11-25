export type Certificate = {
  nominal: number | null;
  background: string | null;
  caption: string | null;
  recipientEmail: string;
  recipientPhone: string;
  senderName: string;
  message: string;
};

export type Step = 1 | 2 | 3;

export const BACKGROUND_IMAGES = {
  'bg1': 'https://cdn.tvuvi.ru/Admin-banners/830f2a5b-8e31-11f0-8203-8e816c8c8642.webp',
  'bg2': 'https://cdn.tvuvi.ru/Admin-banners/c619a2a4-8e30-11f0-b1a7-3251d6b48a16.webp',
  'bg3': 'https://cdn.tvuvi.ru/Admin-banners/daad27be-8e30-11f0-b1a7-3251d6b48a16.webp',
  'bg4': 'https://cdn.tvuvi.ru/Admin-banners/25d25729-a8d3-11f0-a63a-b66d82135efd.webp'
};

export const PRESET_CAPTIONS = [
  'Просто так',
  'Дорогой подруге',
  'Любимой маме',
  'С днём рождения'
];

export const FAQ_ITEMS = [
  {
    id: 1,
    question: 'Как приобрести электронный подарочный сертификат?',
    answer: 'Подарочный сертификат можно приобрести в интернет-магазине, на сайте и по телефону 8 800 000 00 00. Оформите сертификат, указав номер телефона или электронную почту получателя или отправьте его себе.'
  },
  {
    id: 2,
    question: 'Есть ли ограничения по номиналу сертификата?',
    answer: 'Номинал сертификата не может быть меньше 500 ₽. Максимальный номинал вы устанавливаете сами.'
  },
  {
    id: 3,
    question: 'Как использовать подарочный сертификат?',
    answer: 'Введите код сертификата при оформлении заказа на сайте или назовите его продавцу в розничном магазине UVI. Сертификат можно использовать частично — остаток сохранится.'
  },
  {
    id: 4,
    question: 'Можно ли купить пластиковый сертификат?',
    answer: 'Пластиковые подарочные сертификаты доступны только в розничных магазинах UVI.'
  }
];
