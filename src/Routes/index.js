import routes from '../config/routes';

//layout

//pages

import Home from '../Pages/Home';
import About from '../Pages/About';
import Product from '../Pages/Product';
import Sustainablity from '../Pages/Sustainablity';
import Manufacturing from '../Pages/Manufacturing';
import Partners from '../Pages/Partners';
import News from '../Pages/News';

//puplic routes
const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.about, component: About },
    { path: routes.product, component: Product },
    { path: routes.sustainnablity, component: Sustainablity },
    { path: routes.manufacturing, component: Manufacturing },
    { path: routes.partners, component: Partners },
    { path: routes.news, component: News },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
