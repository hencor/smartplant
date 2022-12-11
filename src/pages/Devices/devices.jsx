import { iconsOpt } from '../../components/ui/icons';
import Page from '../../components/ui/Page';

const list = [
  { id: 1, icon: iconsOpt[1], name: 'Luz artificial de germinación', function: '' },
  { id: 2, icon: iconsOpt[4], name: 'Estación meteorológica', function: '' },
  { id: 3, icon: iconsOpt[2], name: 'Sistema de riego', function: '' },
  { id: 4, icon: iconsOpt[5], name: 'Plagas', function: '' },
];

const Devices = ({ devices }) => {
  return <Page elements={list} type='DevicesForm' title='Dispositivos' />;
};

export default Devices;