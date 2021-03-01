import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Product1() {
  return (
    <div className='cards'>
      <h1 className='fruits'>Get Fresh Fruits Everyday!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem
              src='/images/apple.jpeg'
              price='@ Ksh.40 Each'
              text='Sweet Apples'
              label='Apples'
              path='/fruits'
            />
            <CardItem
              src='/images/Bana.jpg'
              price='@ Ksh.5 Each'
              text='Sweet Banana'
              label='Banana'
              path='/fruits'
            />
            <CardItem
              src='/images/avoca.jpg'
              price='@ Ksh.50 Each'
              text='Sweet Avocado'
              label='Avocado'
              path='/fruits'
            />
           <CardItem
              src='/images/orange.jpg'
              price='@ Ksh.20 Each'
              text='Sweet Oranges'
              label='Orange'
              path='/fruits'
            />
            <CardItem
              src='/images/Pears.jpg'
              price='@ Ksh.30 Each'
              text='Sweet Pears'
              label='Pears'
              path='/fruits'
            />
          </ul>

          <ul className='cards__items'>
          <CardItem
              src='/images/Mango.jpg'
              price='@ Ksh.15 Each'
              text='Sweet Mangoes'
              label='Mango'
              path='/fruits'
            />
            <CardItem
              src='/images/pawpaw.jpg'
              price='@ Ksh.60 Each'
              text='Sweet Pawpaw'
              label='Pawpaw'
              path='/fruits'
            />
            <CardItem
              src='/images/guava.jpg'
              price='@ Ksh.5 per Kg'
              text='Sweet Quavas'
              label='Guavas'
              path='/fruits'
            />
            <CardItem
              src='/images/melon.jpg'
              price='@ Ksh.300 Each'
              text='Sweet Melon'
              label='Water melon'
              path='/fruits'
            />
            <CardItem
              src='/images/pin.jpg'
              price='@ Ksh.150 Each'
              text='Sweet Pineapple'
              label='Pineapple'
              path='/fruits'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='/images/Pash.jpg'
              price='@ Ksh.90 per Kg'
              text='Sweet Passion'
              label='Banana'
              path='/fruits'
            />
            <CardItem
              src='/images/Loqu.jpg'
              price='@ Ksh.70 per Kg'
              text='Sweet Loquats'
              label='Loquats'
              path='/fruits'
            />
            <CardItem
              src='/images/Java.png'
              price='@ Ksh.90 per Kg'
              text='Java Plum'
              label='Java Plum'
              path='/fruits'
            />
            <CardItem
              src='/images/Berry.jpg'
              price='@ Ksh.70 per Kg'
              text='Sweet Berries'
              label='Berry'
              path='/fruits'
            />
            <CardItem
              src='/images/grape.jpg'
              price='@ Ksh.90 per Kg'
              text='Sweet Grapes'
              label='Grapes'
              path='/fruits'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='/images/Custa.jpg'
              price='@ Ksh.20 Each'
              text='Custard Apple'
              label='Custard Apple'
              path='/fruits'
            />
            <CardItem
              src='/images/Kiwi.jpg'
              price='@ Ksh.15 Each'
              text='Sweet Kiwi'
              label='Kiwi'
              path='/fruits'
            />
            <CardItem
              src='/images/Coco.jpg'
              price='@ Ksh.50 Each'
              text='Sweet Coconut'
              label='Coconut'
              path='/fruits'
            />
            <CardItem
              src='/images/Fig.jpg'
              price='@ Ksh.10 Each'
              text='Sweet Fig fruits'
              label='Fig'
              path='/fruits'
            />
            <CardItem
              src='/images/Lemon.jpg'
              price='@ Ksh.10 Each'
              text='Fresh Lemon'
              label='Lemon'
              path='/fruits'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Product1;