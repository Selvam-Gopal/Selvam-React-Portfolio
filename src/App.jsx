import React from 'react'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Portfolio from './Pages/Portfolio/Portfolio'
import Contact from './Pages/Contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AppLayout from './components/AppLayout'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },

        {
          path: '/about',
          element: <About />,
        },

        {
          path: '/portfolio',
          element: <Portfolio />,
        },

        {
          path: '/contact',
          element: <Contact />,
        }
      ]
    }
  ]);

  return <RouterProvider  router={router}/>;
}

export default App

