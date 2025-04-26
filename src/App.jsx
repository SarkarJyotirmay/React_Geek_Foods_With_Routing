import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import Quote from './components/Quote';
import Restaurent from './components/Restaurent';
import Foods from './components/Foods';
import Contact from './components/Contact';
import RestaurantDataProvider from './contexts/RestaurantDataProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/Quote",
        element: <Quote />
      },
      {
        path: "/restaurent",
        element: <Restaurent />
      },
      {
        path: "/foods",
        element: <Foods />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]

  },
])


function App() {
  return (
    <>
    <RestaurantDataProvider>
    <RouterProvider router={router} />
    </RestaurantDataProvider>
    </>
  )
}

export default App