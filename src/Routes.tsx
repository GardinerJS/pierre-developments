import { IRoutesData } from './types/IRoutesData';
import About from './components/About/About';
import Home from './components/Home/Home';

const Routes: IRoutesData[] = [
  {
    Path: '/',
    Component: Home,
  },
  {
    Path: '/about',
    Component: About,
  },
];

export default Routes;
