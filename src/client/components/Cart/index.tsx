import React from 'react'
import CheckoutContainer from './container/container'
import CardSection from './components/CardSection';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer';

const Cart = () => {
  return (
      <CheckoutContainer>
          <Header/>
          <CardSection />
          <Footer/>
    </CheckoutContainer>
  )
}

export default Cart;