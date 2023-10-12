import React  from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from './Card';
import EmptyCart from '../../../../assets/emptyCart.gif';
import { Buttn } from '@/src/client/shared/Button';
import 'react-toastify/dist/ReactToastify.css';
import useCart from '@/src/client/shared/Context/useCart';


const CardSection = () => {
  const {
    product,
    subPrice,
    incrementCounter,
    decrementCounter,
    handleDelete,
  } = useCart();


	return (
		<div className='flex lg:flex-row flex-col lg:px-16 lg:py-12 w-full'>
			<div className='flex flex-col lg:w-9/12 w-full p-4'>
				<h1 className='text-bold'>
					<span className='text-black font-bold text-xl'>Card</span> (
					{product.length})
				</h1>

				<div className='mt-8 space-y-6'>
					{product.length > 0 &&
						product.map((value, index: number) => (
							<div key={index}>
								<Card
									{...value}
									handleDelete={handleDelete}
									incrementCounter={incrementCounter}
									decrementCounter={decrementCounter}
								/>
							</div>
						))}
					{product.length === 0 && (
						<div className='flex flex-col items-center justify-center'>
							<Image
								src={EmptyCart}
								alt='Empty alt'
								height={400}
							/>
							<p className='text-red-500 text-3xl font-bold -mt-10'>
								Oop! your cart is empty
							</p>
							<p className='font-bold text-center mt-2'>
								Looks like you haven`t added <br /> anything to your cart yet
							</p>
							<Buttn
								text='SHOP NOW'
								link='/category'
							/>
						</div>
					)}
				</div>

				<Link
					href='/'
					className='text-black font-bold text-xl underline mt-16'>
					Continue Shopping
				</Link>
			</div>

			<div className='flex flex-col lg:w-3/12 w-full h-72 mt-5 space-y-5 bg-gray-200 lg:px-9 px-4 py-7 lg:rounded-lg rounded-none'>
				<p className='text-black font-bold text-xl'>Cart Summary</p>
				<div className='flex items-center justify-between text-gray-500'>
					<p>Sub Total</p>
					<p>{`$${subPrice}`}</p>
				</div>
				<hr className='w-full border-gray-400' />
				<div className='flex items-center justify-between text-gray-500'>
					<p>Grand Price</p>
					<p>{`$${subPrice + (product.length * 10)}`}</p>
				</div>
				<Buttn
					text='CHECKOUT'
					link=''
				/>
			</div>
		</div>
	);
};

export default CardSection;
