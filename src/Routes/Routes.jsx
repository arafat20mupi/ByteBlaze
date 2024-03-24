import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/mainPage";
import Hero from "../Pages/Hero";
import Blogs from "../Pages/Blogs";
import Blog from "../Pages/Blog";
import Bookmarks from "../Pages/Bookmarks";
import Content from "../Components/Contants";
import Author from "../Components/Author";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [
      {
        path: "/",
        element: <Hero></Hero>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch('https://dev.to/api/articles?per_page=21&top=7'),
      },
      {
        path: '/blog/:id',
        element: <Blog></Blog>,
        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            path: 'content',
            element: <Content></Content>,
            loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path: 'author',
            element: <Author></Author>,
            loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),

          }
        ]
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>
      },
    ]
  },
]);