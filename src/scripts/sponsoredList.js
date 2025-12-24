import watch from '../assets/watch.png';
import power from '../assets/power.png';
import cream from '../assets/cream.png';
import bottle from '../assets/bottle.png';
import chair from '../assets/ergochair.png';
import buds from '../assets/buds.png';

function handleDiscount({ formerPrice, price }) {
  let oldPrice = Number(formerPrice.replace(/,/g, ''));
  let newPrice = Number(price.replace(/,/g, ''));
  return (((newPrice - oldPrice) / oldPrice) * 100).toFixed(2);
}

export default [
  {
    item: 'Smart watch',
    picture: `${watch}`,
    price: '15,500',
    formerPrice: '17,800',
    discount: handleDiscount,
    id: crypto.randomUUID(),
  },
  {
    item: 'Power bank',
    picture: `${power}`,
    price: '25,500',
    formerPrice: '27,950',
    discount: handleDiscount,
    id: crypto.randomUUID(),
  },
  {
    item: 'Body wash',
    picture: `${cream}`,
    price: '5,200',
    formerPrice: '7,100',
    discount: handleDiscount,
    id: crypto.randomUUID(),
  },
  {
    item: 'Water bottle',
    picture: `${bottle}`,
    price: '1,400',
    formerPrice: '2,700',
    discount: handleDiscount,
    id: crypto.randomUUID(),
  },
  {
    item: 'Ergonomic chair',
    picture: `${chair}`,
    price: '41,600',
    formerPrice: '45,300',
    discount: handleDiscount,
    id: crypto.randomUUID(),
  },
  {
    item: 'Ear buds',
    picture: `${buds}`,
    price: '71,980',
    formerPrice: '82,150',
    discount: handleDiscount,
    id: crypto.randomUUID(),
  },
];
