import { IRoutesData } from './types/IRoutesData';
import Home from './components/Home/Home';

const Routes: IRoutesData[] = [
  {
    path: '/',
    sidebarName: 'Home',
    component: Home,
  },
];

export default Routes;
