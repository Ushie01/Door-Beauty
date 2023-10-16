import English from '../../../../assets/us.png';
import Spain from '../../../../assets/spain.png';
import Master from '../../../../assets/master-logo.png';
import Paypal from '../../../../assets/payment.png';
import Visa from '../../../../assets/visa.png';


export const DATA: { id: string, name: string; data?: { name: string }[] }[] = [
  { id: '1', name: 'HOME' },
  { id: '2', name: 'STORES' },
  {
    id: '3', name: 'CATEGORIES',
    data: [
      { name: 'CATEGORIES' },
      { name: 'Arlene Mccoy' },
      { name: 'Devon Webb' },
      { name: 'Tom Cook' },
      { name: 'Tanya Fox' },
      { name: 'Hellen Schmidt' },
    ]
  },
  { id: '4', name: 'BEST SELLERS' },
  { id: '5', name: 'BRAND' },
  {
    id: '6', name: 'CONTACT US',
    data: [
      { name: 'CONTACT US' },
      { name: 'Arlene Mccoy' },
      { name: 'Devon Webb' },
      { name: 'Tom Cook' },
      { name: 'Tanya Fox' },
      { name: 'Hellen Schmidt' },
    ]
  }
];

export const people: {name: string}[] = [
	{ name: 'Wade Cooper' },
	{ name: 'Arlene Mccoy' },
	{ name: 'Devon Webb' },
	{ name: 'Tom Cook' },
	{ name: 'Tanya Fox' },
	{ name: 'Hellen Schmidt' },
];

export const FLAG_DATA_ARRAY = [
		{ name: 'English', image: English },
		{ name: 'Spain', image: Spain }
	]

export const CARD_DATA_ARRAY = [
    {name: 'Master Card',  image: Master},
    {name: 'Paypal', image: Paypal},
    {name: 'Visa Card', image: Visa}
  ]