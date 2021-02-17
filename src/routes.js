import Home from './pages/Home';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Courses from './pages/Courses';
import Products from './pages/Products';
import Contact from './pages/Contact';

export const routes = [
    { path: "/datacubation", name: "Home", component: Home },
    { path: "/esemenyek", name: "Események", component: Events },
    { path: "/blog", name: "Blog", component: Blog },
    { path: "/tanfolyamok", name: "Tanfolyamok", component: Courses },
    { path: "/termekek", name: "Termékek", component: Products },
    { path: "/kapcsolat", name: "Kapcsolat", component: Contact }
];
