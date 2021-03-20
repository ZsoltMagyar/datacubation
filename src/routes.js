import Home from './pages/Home';
import Program from './pages/Program';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Courses from './pages/Courses';
import Products from './pages/Products';
import Contact from './pages/Contact';

export const routes = [
    { path: "/", component: Home },
    { path: "/datacubation", name: "Home", component: Home },
    { path: "/program", name: "Program", component: Program },
    { path: "/esemenyek", name: "Események", component: Events },
    { path: "/blog", name: "Blog", component: Blog },
    { path: "/tanfolyamok", name: "Tanfolyamok", component: Courses },
    { path: "/termekek", name: "Termékek", component: Products },
    { path: "/kapcsolat", name: "Kapcsolat", component: Contact }
];
