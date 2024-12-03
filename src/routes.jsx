import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Referencias from './pages/Referencias';
import Sobre from './pages/Sobre';
import Comousar from './pages/ComoUsar';
import Materiais from './pages/Materiais'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/referencias',
    element: <Referencias />,
  },
  {
    path: '/sobre',
    element: <Sobre />,
  },
  {
    path: '/materiais',
    element: <Materiais/>
  },
  {
    path: '/comousar',
    element: <Comousar/>
  }
]);

export default router;