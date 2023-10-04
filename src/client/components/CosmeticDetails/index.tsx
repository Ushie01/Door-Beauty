import React from 'react'
import DetailContainer from './container/DetailContainer'
import ImageSection from './components/ImageSection'
import Header from '../../shared/Header/Header'
import Footer from '../../shared/Footer'
import DescriptionSection from './components/DescriptionSection'


const CosmeticDetail = () => {
    return (
        <DetailContainer>
            <Header/>
            <ImageSection />
            <DescriptionSection />
            <Footer/>
      </DetailContainer>
  )
}

export default CosmeticDetail; 
