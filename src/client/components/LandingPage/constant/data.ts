import Bigen from './../../../../assets/Bigen Oz.jpg';
import Clarol from './../../../../assets/Clarol Soy.jpg';
import CreamBeauty from './../../../../assets/cream_beauty.jpg';
import add from '../components/CosmeticsSection/assets/add.png'
import abc from '../components/CosmeticsSection/assets/abc-store.png'
import Tarry from '../components/CosmeticsSection/assets/erer.jpg';
import food from '../components/CosmeticsSection/assets/food.jpeg';
import tytry from '../components/CosmeticsSection/assets/try.png';
import hhh from '../components/CosmeticsSection/assets/hhh.jpg';
import jorge from '../components/CosmeticsSection/assets/xyz.png';
import kids from '../../../../assets/kids.webp'
import boys from '../../../../assets/boys.jpg';
import girls from '../../../../assets/girls.jpeg';
import men from '../../../../assets/men.jpg';
import women from '../../../../assets/women.webp';

import {
	SportSpeedway,
	ShopBank,
    ShopCryptoCoin,
    ChatCommentBubbleQuestionMark
} from '@heathmont/moon-icons-tw';


export const ITEMS = [
    { image: women, name: 'LADIES' },
    { image: men, name: 'GENTS' },
    { image: girls, name: 'GIRLS' },
    { image: boys, name: 'BOYS' },
    { image: kids, name: 'kids' },
]

export const PRODUCT_DATA = [
    {
        id: 1,
        photo: Bigen,
        name: 'Bigen Oz',
        type: 'Soap',
        price: '$300.00',
        color: 'orange',
        quantity: 1
    },
    {
        id: 2,
        photo: Clarol,
        name: 'Clarol White',
        type: 'Soap | Cream',
        price: '$400.00',
        color: 'White',
        quantity: 1

    },
    {
        id: 3,
        photo: CreamBeauty ,
        name: 'Cream Beauty ',
        type: 'Cream',
        price: '$140.00',
        color: 'White',
        quantity: 1

    },
    {
        id: 4,
        photo: Bigen,
        name: 'Bigen Oz',
        type: 'Soap',
        price: '$300.00',
        color: 'orange',
        quantity: 1
    },
    {
        id: 5,
        photo: Clarol,
        name: 'Clarol White',
        type: 'Soap | Cream',
        price: '$400.00',
        color: 'White',
        quantity: 1
    },
    {
        id: 6,
        photo: CreamBeauty ,
        name: 'Cream Beauty ',
        type: 'Cream',
        price: '$140.00',
        color: 'White',
        quantity: 1
    },
    {
        id: 7,
        photo: Bigen,
        name: 'Bigen Oz',
        type: 'Soap',
        price: '$300.00',
        color: 'orange',
        quantity: 1
    },
    {
        id: 8,
        photo: Clarol,
        name: 'Clarol White',
        type: 'Soap | Cream',
        price: '$400.00',
        color: 'White',
        quantity: 1
    },
    {
        id: 9,
        photo: CreamBeauty ,
        name: 'Cream Beauty ',
        type: 'Cream',
        price: '$140.00',
        color: 'White',
        quantity: 1
    },
]


export const STORE_DATA = [
    { photo: abc, name: 'TEST STORE', productCount: 0 },
    { photo: add, name: 'ADMIN STORE', productCount: 1009 },
    { photo: Tarry, name: 'TARRY STORE', productCount: 0 },
    { photo: food, name: 'ABD STORE', productCount: 0 },
    { photo: tytry, name: 'TYTRY', productCount: 120 },
    { photo: hhh, name: 'DIVINE STORE', productCount: 500 },
    { photo: jorge, name: 'JORGE STORE', productCount: 1230 },
    { photo: Tarry, name: 'TARRY STORE', productCount: 0 },
];

export const BAEUTY_DATA = [
    { modalTitle: 'Register as a Driver', title: 'Become a Driver', description: 'Sign up today and become a driver for any of out store branch within the country of your choice.', icon: SportSpeedway },
    { modalTitle: 'Register as a Vendor', title: 'Become a Vendor', description: 'Sign up today and become a vendor and own your store, monitor your business and flow of cash.', icon: ShopBank },
    { modalTitle: 'Discount and Savings', title: 'Discount and Savings', description: 'For a limited time, sign up for the door beauty store membership and get 20% off.', icon: ShopCryptoCoin },
    { modalTitle: 'Here are list', title: 'Looking for Something?', description: "Don't see what you're looking for? we recommand a product or store.", icon: ChatCommentBubbleQuestionMark}
]
