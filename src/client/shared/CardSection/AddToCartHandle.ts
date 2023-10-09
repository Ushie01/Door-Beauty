import React, { useState } from 'react';
import { PRODUCT_DATA } from '../../components/LandingPage/constant/data';
import { Toast, ToastError } from '../hooks/useToast';

export const AddToCart = (value: number) => {
	if (value) {
		const selectedItemObject = PRODUCT_DATA.find((item) => item.id === value);
		let itemsArray = JSON.parse(localStorage.getItem('cart') ?? '[]');
		const checkSelected = itemsArray.find((item: any) => item.id === value);
		if (!checkSelected) {
			itemsArray.push(selectedItemObject);
			localStorage.setItem('cart', JSON.stringify(itemsArray));
			Toast({
				text: '🦄 Item successfully added to cart',
			});
		} else {
			ToastError({
				text: 'Item has been already added to cart',
			});
		}
	} 
};
