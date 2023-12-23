import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Dec_2023/Newlaunch1500X600_BAU_GW._CB571028760_.jpg' alt='' />
            <div className='home__row'>
                <Product 
                    title='the lean startup' 
                    price={1229} 
                    image="https://m.media-amazon.com/images/I/61H20CIiU9L._SL1360_.jpg"
                    rating={5} />
                <Product 
                    title='Autobiography of a Yogi' 
                    price={429} 
                    image="https://m.media-amazon.com/images/I/81BIQLRubxL._SL1500_.jpg"
                    rating={4} />
            </div>
            <div className='home__row'>
                <Product 
                    title='Apple iPhone 13 (128GB)' 
                    price={52999} 
                    image="https://m.media-amazon.com/images/I/71gm8v4uPBL._SL1500_.jpg"
                    rating={5} />
                <Product 
                    title='Samsung Galaxy Z Flip5 5G' 
                    price={99999} 
                    image="https://m.media-amazon.com/images/I/71U+YdsvMPL._SL1500_.jpg"
                    rating={4} />
                <Product 
                    title='Oneplus Open' 
                    price={139999} 
                    image="https://m.media-amazon.com/images/I/71pKVhll1IL._SL1500_.jpg"
                    rating={5} />
            </div>
            <div className='home__row'>
                <Product 
                    title='Acer Ei491Cr 49 Inch Monitor' 
                    price={77999} 
                    image="https://m.media-amazon.com/images/I/811CjK6UMFL._SL1500_.jpg"
                    rating={4} />
            </div>
        </div>
    </div>
  )
}

export default Home