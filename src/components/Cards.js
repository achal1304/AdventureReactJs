import React from 'react'
import CardItem from './CardItem'
import '../assets/styles/Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Checkout these destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                        src = '/images/img-2.jpg'
                        text = 'Explore amazing adventure at amazon jungle'
                        label = 'Adventure'
                        path = '/products'
                    />
                    <CardItem
                        src = '/images/img-2.jpg'
                        text = 'Explore amazing beach in Bali in private cruize'
                        label = 'Beach'
                        path = '/products'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem
                        src = '/images/img-3.jpg'
                        text = 'Explore amazing adventure at amazon jungle'
                        label = 'Adventure'
                        path = '/products'
                    />
                    <CardItem
                        src = '/images/img-2.jpg'
                        text = 'Explore amazing beach in Bali in private cruize'
                        label = 'Beach'
                        path = '/products'
                    />
                    <CardItem
                        src = '/images/img-3.jpg'
                        text = 'Explore amazing beach in Bali in private cruize'
                        label = 'Beach'
                        path = '/products'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards