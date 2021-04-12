import Home from './pages/Home';
import Program from './pages/Program';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Courses from './pages/Courses';
import Products from './pages/Products';
import Contact from './pages/Contact';
import BlogPost from "@/pages/BlogPost";
import Course from "@/pages/Course";

export const routes = [
    { path: "/", component: Home },
    { path: "/datacubation", name: "Home", component: Home },
    { path: "/program", name: "Program", component: Program },
    { path: "/esemenyek", name: "Események", component: Events },
    { path: "/blog", name: "Blog", component: Blog },
    { path: "/blog-post", name: "BlogPost", component: BlogPost},
    { path: "/tanfolyamok", name: "Tanfolyamok", component: Courses },
    { path: "/tanfolyam", name: "Tanfolyam", component: Course },
    { path: "/termekek", name: "Termékek", component: Products },
    { path: "/kapcsolat", name: "Kapcsolat", component: Contact }
];
