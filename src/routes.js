import Home from './pages/Home';
import Program from './pages/Program';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Courses from './pages/Courses';
import Products from './pages/Products';
import Contact from './pages/Contact';
import BlogPost from "@/pages/BlogPost";
import Course from "@/pages/Course";
import Product from "@/pages/Product";
import GYIK from "@/pages/GYIK";
import Login from "@/pages/Login";
import Registration from "@/pages/Registration";
import UserReg from "@/pages/UserReg";
import CompanyReg from "@/pages/CompanyReg";
import Members from "@/pages/Members";

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
    { path: "/termek", name: "Termék", component: Product },
    { path: "/kapcsolat", name: "Kapcsolat", component: Contact },
    { path: "/gyik", name: "GYIK", component: GYIK },
    { path: "/tagok", name: "Tagok", component: Members },
    { path: "/login", component: Login },
    { path: "/registration", component: Registration },
    { path: "/user-registration", component: UserReg },
    { path: "/company-registration", component: CompanyReg },
];
