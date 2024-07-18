import {
  US,
  IN,
  EU,
  JP,
  KR,
  IL,
  VN,
  BD,
  RU,
  BR,
  UA,
  KZ,
  TW,
  GB,
  FlagComponent,
  ID,
} from 'country-flag-icons/react/1x1';

export const currencyList: {
  value: string;
  label: string;
  details: {
    country: string;
    currencySymbol: string;
    currencyName: string;
    currencyShortForm: string;
    icon: FlagComponent;
    iconName: string;
  };
}[] = [
  {
    value: 'INR',
    label: 'INR',
    details: {
      country: 'India',
      currencySymbol: '₹',
      currencyName: 'Indian Rupee',
      currencyShortForm: 'INR',
      icon: IN,
      iconName: 'IN',
    },
  },
  {
    value: 'USD',
    label: 'USD',
    details: {
      country: 'Estados Unidos',
      currencySymbol: '$',
      currencyName: 'Dólar Americado',
      currencyShortForm: 'USD',
      icon: US,
      iconName: 'US',
    },
  },
  {
    value: 'EUR',
    label: 'EUR',
    details: {
      country: 'União Europeia',
      currencySymbol: '€',
      currencyName: 'Euro',
      currencyShortForm: 'EUR',
      icon: EU,
      iconName: 'EU',
    },
  },
  {
    value: 'GBP',
    label: 'GBP',
    details: {
      country: 'Reino Unido',
      currencySymbol: '£',
      currencyName: 'Libra Esterlina',
      currencyShortForm: 'GBP',
      icon: GB,
      iconName: 'GB',
    },
  },
  {
    value: 'JPY',
    label: 'JPY',
    details: {
      country: 'Japão',
      currencySymbol: '¥',
      currencyName: 'Iene japonês',
      currencyShortForm: 'JPY',
      icon: JP,
      iconName: 'JP',
    },
  },
  {
    value: 'KRW',
    label: 'KRW',
    details: {
      country: 'Coreia do Sul',
      currencySymbol: '₩',
      currencyName: 'Won sul-coreano',
      currencyShortForm: 'KRW',
      icon: KR,
      iconName: 'KR',
    },
  },
  {
    value: 'ILS',
    label: 'ILS',
    details: {
      country: 'Israel',
      currencySymbol: '₪',
      currencyName: 'Novo shekel israelense',
      currencyShortForm: 'ILS',
      icon: IL,
      iconName: 'IL',
    },
  },
  {
    value: 'VND',
    label: 'VND',
    details: {
      country: 'Vietnã',
      currencySymbol: '₫',
      currencyName: 'Dong vietnamita',
      currencyShortForm: 'VND',
      icon: VN,
      iconName: 'VN',
    },
  },
  {
    value: 'BDT',
    label: 'BDT',
    details: {
      country: 'Bangladesh',
      currencySymbol: '৳',
      currencyName: 'Taka bengali',
      currencyShortForm: 'BDT',
      icon: BD,
      iconName: 'BD',
    },
  },
  {
    value: 'RUB',
    label: 'RUB',
    details: {
      country: 'Russia',
      currencySymbol: '₽',
      currencyName: 'Russian Ruble',
      currencyShortForm: 'RUB',
      icon: RU,
      iconName: 'RU',
    },
  },
  {
    value: 'BRL',
    label: 'BRL',
    details: {
      country: 'Basil',
      currencySymbol: 'R$',
      currencyName: 'Real Brasileiro',
      currencyShortForm: 'BRL',
      icon: BR,
      iconName: 'BR',
    },
  },
  {
    value: 'UAH',
    label: 'UAH',
    details: {
      country: 'Ucrânia',
      currencySymbol: '₴',
      currencyName: 'Hryvnia ucraniano',
      currencyShortForm: 'UAH',
      icon: UA,
      iconName: 'UA',
    },
  },
  {
    value: 'KZT',
    label: 'KZT',
    details: {
      country: 'Cazaquistão',
      currencySymbol: '₸',
      currencyName: 'Tenge cazaque',
      currencyShortForm: 'KZT',
      icon: KZ,
      iconName: 'KZ',
    },
  },
  {
    value: 'TWD',
    label: 'TWD',
    details: {
      country: 'Taiwan',
      currencySymbol: 'NT$',
      currencyName: 'Novo dólar taiwanês',
      currencyShortForm: 'TWD',
      icon: TW,
      iconName: 'TW',
    },
  },
  {
    value: 'IDR',
    label: 'IDR',
    details: {
      country: 'Indonesia',
      currencySymbol: 'Rp',
      currencyName: 'Rupia indonésia',
      currencyShortForm: 'IDR',
      icon: ID,
      iconName: 'ID',
    },
  },
];
