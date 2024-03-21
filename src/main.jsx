import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './Pages/mainPage';
import Hero from './Pages/Hero';
import Bookmarks from './Pages/Bookmarks';
import Blogs from './Pages/Blogs';



const router = createBrowserRouter([
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
      loader:() =>fetch('https://dev.to/api/articles?per_page=20&top=7'),
      },
      {
      path: "/bookmarks",
      element: <Bookmarks></Bookmarks>
      },
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
