import LayoutThree from "@/layout/layoutThree";
import RootLayout from "@/layout/root";
import Error from "@/pages/404";
import About from "@/pages/about";
import Blog from "@/pages/blog";
import BlogDetails from "@/pages/blog-details";
import BlogStandard from "@/pages/blog-standard";
import Contact from "@/pages/contact";
import Faq from "@/pages/faq";
import HomeThreeSingle from "@/pages/home-three-single";
import Pricing from "@/pages/pricing";
import Project from "@/pages/project";
import ProjectCarousel from "@/pages/project-carousel";
import ProjectDetails from "@/pages/project-details";
import ProjectDetailsOne from "@/pages/project-details-1";
import Service from "@/pages/service";
import ServiceCarousel from "@/pages/service-carousel";
import ServiceDetails from "@/pages/service-details";
import ServiceDetailsBess from "@/pages/service-details-bess";
import ServiceDetailsHidrogen from "@/pages/service-details-hidrogen";
import Team from "@/pages/team";
import TeamCarousel from "@/pages/team-carousel";
import TeamDetails from "@/pages/team-details";
import LegalTerms from "@/pages/legal-terms";
import PrivacyPolicy from "@/pages/privacy-policy";
import NewsDetails1 from "@/pages/news-details-1";
import NewsDetails2 from "@/pages/news-details-2";
import NewsDetails3 from "@/pages/news-details-3";
import NewsDetails4 from "@/pages/news-details-4";
import NewsDetails5 from "@/pages/news-details-5";
import NewsDetails6 from "@/pages/news-details-6";
import Login from '@/pages/login';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: (
                    <ProtectedRoute>
                        <HomeThreeSingle />
                    </ProtectedRoute>
                )
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/service',
                element:<Service/>
            },
            {
                path:'/service-carousel',
                element:<ServiceCarousel/>
            },
            {
                path:'/service-details',
                element:<ServiceDetails/>
            },
            {
                path:'/service-details-bess',
                element: <ServiceDetailsBess />
            },
            {
                path:'/service-details-hydrogen',
                element: <ServiceDetailsHidrogen />
            },
            {
                path:'/project',
                element:<Project/>
            },
            {
                path:'/project-carousel',
                element:<ProjectCarousel/>
            },
            {
                path:'/project-details',
                element:<ProjectDetails/>
            },
            {
                path:'/project-details-1',
                element:<ProjectDetailsOne/>
            },
            {
                path:'/team',
                element:<Team/>
            },
            {
                path:'/team-carousel',
                element:<TeamCarousel/>
            },
            {
                path:'/team-details',
                element:<TeamDetails/>
            },
            {
                path:'/pricing',
                element:<Pricing/>
            },
            {
                path:'/faq',
                element:<Faq/>
            },
            {
                path:'/404',
                element:<Error/>
            },
            {
                path:'/news',
                element:<Blog/>
            },
            {
                path:'/news-standard',
                element:<BlogStandard/>
            },
            {
                path:'/news-details',
                element:<BlogDetails/>
            },
            {
                path:'/news-details-1',
                element: <NewsDetails1 />
            },
            {
                path:'/news-details-2',
                element: <NewsDetails2 />
            },
            {
                path:'/news-details-3',
                element: <NewsDetails3 />
            },
            {
                path:'/news-details-4',
                element: <NewsDetails4 />
            },
            {
                path:'/news-details-5',
                element: <NewsDetails5 />
            },
            {
                path:'/news-details-6',
                element: <NewsDetails6 />
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/legal-terms',
                element:<LegalTerms/>
            },
            {
                path:'/privacy-policy',
                element:<PrivacyPolicy/>
            },
        ]
    },
    {
        path:'*',
        element:<Error/>
    },
    {
        path: "/",
        element: <LayoutThree />,
        children: [
            {
                path: "/home-three-single",
                element: <HomeThreeSingle />
            },
        ]
    },
])