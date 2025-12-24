import trendyol from '../assets/trendyol.png';
import nivea from '../assets/nivea.png';
import itel from '../assets/itel.png';
import skyrun from '../assets/skyrun.png';
import tropic from '../assets/tropicBlender.png';
import smart from '../assets/smartTv.png';

function handleDiscount({ formerPrice, price }) {
  let oldPrice = Number(formerPrice.replace(/,/g, ''));
  let newPrice = Number(price.replace(/,/g, ''));
  return (((newPrice - oldPrice) / oldPrice) * 100).toFixed(2);
}

export default [
  {
    item: "Trendyol Women's Black ...",
    picture: `${trendyol}`,
    price: '11,120',
    formerPrice: '19,000',
    discount: handleDiscount,
    id: crypto.randomUUID(),
  },
  {
    item: 'NIVEA Sun Sunscreen ...',
    picture: `${nivea}`,
    price: '21,840',
    formerPrice: '22,450',
    discount: handleDiscount,
    id: crypto.randomUUID(),
  },
  {
    item: 'itel A100 6.75 90hz Brig...',
    picture: `${itel}`,
    price: '103,000',
    formerPrice: '111,280',
    discount: handleDiscount,
    id: crypto.randomUUID(),
  },
  {
    item: 'Skyrun 4 Burners (4+0) G...',
    picture: `${skyrun}`,
    price: '148,999',
    formerPrice: '174,000',
    discount: handleDiscount,
    id: crypto.randomUUID(),
  },
  {
    item: 'Tropicwhirl Blender 2L 2...',
    picture: `${tropic}`,
    price: '21,499',
    formerPrice: '26,640',
    discount: handleDiscount,
    id: crypto.randomUUID(),
  },
  {
    item: 'Mi+ (MiJ) 43" Inches Digi...',
    picture: `${smart}`,
    price: '202,154',
    formerPrice: '222,369',
    discount: handleDiscount,
    id: crypto.randomUUID(),
  },
];
