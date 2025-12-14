import React from 'react';
import { TbApple } from 'react-icons/tb';
import {
  PiBabyBold,
  PiCookingPotBold,
  PiDeviceTabletBold,
  PiDotsThreeCircleBold,
  PiGameControllerBold,
  PiHeartbeatBold,
  PiHeartbeatLight,
  PiHouseLineBold,
  PiHouseSimpleBold,
  PiMonitorArrowUpBold,
  PiMonitorBold,
  PiPhone,
  PiPhoneBold,
  PiShirtFoldedBold,
} from 'react-icons/pi';

const data = [
  'Appliances',
  'Phones & Tablets',
  'Health & Beauty',
  'Home & Office',
  'Electronics',
  'Fashion',
  'Supermarket',
  'Computing',
  'Baby Products',
  'Gaming',
  'Musical Instruments',
  'Other categories',
];
const iconList = [
  () => <PiCookingPotBold style={{ marginRight: '8px' }} size={19} />,
  () => <PiDeviceTabletBold style={{ marginRight: '8px' }} size={19} />,
  () => <PiHeartbeatBold style={{ marginRight: '8px' }} size={19} />,
  () => <PiHouseLineBold style={{ marginRight: '8px' }} size={19} />,
  () => <PiMonitorArrowUpBold style={{ marginRight: '8px' }} size={19} />,
  () => <PiShirtFoldedBold style={{ marginRight: '8px' }} size={19} />,
  () => <TbApple style={{ marginRight: '8px' }} size={19} />,
  () => <PiMonitorBold style={{ marginRight: '8px' }} size={19} />,
  () => <PiBabyBold style={{ marginRight: '8px' }} size={19} />,
  () => <PiGameControllerBold style={{ marginRight: '8px' }} size={19} />,
  () => null,
  () => <PiDotsThreeCircleBold style={{ marginRight: '8px' }} size={19} />,
];

export { iconList };

export default data;
