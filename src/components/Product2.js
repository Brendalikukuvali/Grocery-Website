import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='vegetables'>Get Fresh Vegetables Everyday!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
    
          <ul className='cards__items'>
            <CardItem
              src='/images/Caro.png'
              price='@ Ksh.60 per Kg'
              text='Carrots available'
              label='Carrots'
              path='/vegetables'
            />
            <CardItem
              src='/images/tomato.jpeg'
              price='@ Ksh.90 per Kg'
              text='Fresh Tomatoes'
              label='Tomatoes'
              path='/vegetables'
            />
            <CardItem
              src='/images/onion.jpg'
              price='@ Ksh.80 per Kg'
              text='Onions available'
              label='Onions'
              path='/vegetables'
            />
           <CardItem
              src='/images/Bell.jpg'
              price='@ Ksh.20 Each'
              text='Fresh Bell Pepper'
              label='Bell Pepper'
              path='/vegetables'
            />
            <CardItem
              src='/images/Garli.jpg'
              price='@ Ksh.90 per Kg'
              text='Garlic available'
              label='Garlic'
              path='/vegetables'
            />
          </ul>
          
          <ul className='cards__items'>
            <CardItem
              src='/images/Celery.jpg'
              price='@ Ksh.50 per Kg'
              text='Celery available'
              label='Celery'
              path='/vegetables'
            />
            <CardItem
              src='/images/Cauli.png'
              price='@ Ksh.80 per Kg'
              text='Fresh Cauliflower'
              label='Cauliflower'
              path='/vegetables'
            />
            <CardItem
              src='/images/Oni.jpg'
              price='@ Ksh.50 per Kg'
              text='Green Onions'
              label='Green Onions'
              path='/vegetables'
            />
            <CardItem
              src='/images/Bean.jpg'
              price='@ Ksh.90 per Kg'
              text='Green Beans'
              label='Green Beans'
              path='/vegetables'
            />
            <CardItem
              src='/images/Pea.jpeg'
              price='@ Ksh.90 per Kg'
              text='Peas available'
              label='Peas'
              path='/vegetables'
            />
          </ul>
          
          <ul className='cards__items'>
            <CardItem
              src='/images/Cucu.jpg'
              price='@ Ksh.25 Each'
              text='Fresh Cucumber'
              label='Cucumber'
              path='/vegetables'
            />
            <CardItem
              src='/images/Egg.jpg'
              price='@ Ksh.30 Each'
              text='Fresh Eggplant '
              label='Eggplant'
              path='/vegetables'
            />
            <CardItem
              src='/images/Pumpki.jpg'
              price='@ Ksh.300 Each'
              text='Fresh Pumpkin'
              label='Pumpkin'
              path='/vegetables'
            />
            <CardItem
              src='/images/beetru.jpg'
              price='@ Ksh.50 Each'
              text='Fresh Beetroots'
              label='Beetroots'
              path='/vegetables'
            />
            <CardItem
              src='/images/Pote.jpg'
              price='@ Ksh.80 per Kg'
              text='Fresh tomatoes'
              label='Tomatoes'
              path='/vegetables'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='/images/Lettu.jpg'
              price='@ Ksh.60 per Kg'
              text='Fresh Lettuce'
              label='Lettuce'
              path='/vegetables'
            />
            <CardItem
              src='/images/broco.jpg'
              price='@ Ksh.130 Each'
              text='Fresh Brocolli'
              label='Brocolli'
              path='/vegetables'
            />
            <CardItem
              src='/images/cabbe.jpg'
              price='@ Ksh.80 Each'
              text='Fresh Cabbages'
              label='Cabbage'
              path='/vegetables'
            />
            <CardItem
              src='/images/kales.jpg'
              price='@ Ksh.60 per Kg'
              text='Fresh Kales'
              label='Kales'
              path='/vegetables'
            />
            <CardItem
              src='/images/spinach.jpg'
              price='@ Ksh.60 per Kg'
              text='Fresh Spinach'
              label='Spinach'
              path='/vegetables'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;