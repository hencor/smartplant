import { iconsOpt } from '../../components/ui/icons';
import Page from '../../components/ui/Page';

const list = [
  { id: 1, icon: iconsOpt[0], name: 'Invernadero', function: '' },
  { id: 2, icon: iconsOpt[1], name: 'Iluminación exterior', function: '' },
  { id: 3, icon: iconsOpt[2], name: 'Bomba de agua', function: '' },
  { id: 4, icon: iconsOpt[3], name: 'Cerca eléctrica', function: '' },
];

const Workspaces = ({ workspaces }) => {
  return <Page elements={list} type='WorkspaceForm' title='Espacios de trabajo' />;
};

export default Workspaces;
