import fridge from '../assets/fridge.png';
import ac from '../assets/air_conditioner.png';
import utensils from '../assets/utensils.png';
import phone from '../assets/iphone.png';
import couch from '../assets/couch.png';
import fan from '../assets/fan.png';

function handleDiscount({ formerPrice, price }) {
  let oldPrice = Number(formerPrice.replace(/,/g, ''));
  let newPrice = Number(price.replace(/,/g, ''));
  return (((newPrice - oldPrice) / oldPrice) * 100).toFixed(2);
}

export default [
  {
    item: 'Refridgerator',
    picture: `${fridge}`,
    price: '800,000',
    formerPrice: '814,000',
    discount: handleDiscount,
    max: 20,
    value: 2,
    id: crypto.randomUUID(),
  },
  {
    item: 'Air Conditioner',
    picture: `${ac}`,
    price: '750,800.99',
    formerPrice: '975,005.78',
    discount: handleDiscount,
    max: 50,
    value: 42,
    id: crypto.randomUUID(),
  },
  {
    item: 'Cooking Utensils',
    picture: `${utensils}`,
    price: '800.85',
    formerPrice: '905.80',
    discount: handleDiscount,
    max: 150,
    value: 72,
    id: crypto.randomUUID(),
  },
  {
    item: 'IPhone',
    picture: `${phone}`,
    price: '1,500,200.80',
    formerPrice: '1,905,000.20',
    discount: handleDiscount,
    max: 10,
    value: 1,
    id: crypto.randomUUID(),
  },
  {
    item: 'Couch',
    picture: `${couch}`,
    price: '200,000.55',
    formerPrice: '205,100.08',
    discount: handleDiscount,
    max: 1000,
    value: 200,
    id: crypto.randomUUID(),
  },
  {
    item: 'Standing Fan',
    picture: `${fan}`,
    price: '75,000.00',
    formerPrice: '95,500.78',
    discount: handleDiscount,
    max: 100,
    value: 100,
    id: crypto.randomUUID(),
  },
];
