import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Policy from './routes/Policy';
import Rememberers from './routes/Rememberers';
import Store from './routes/Store';
import Terms from './routes/Terms';
import Error from './routes/Error';


const router = createBrowserRouter([
  { path: "/", element: <Home />, },
  { path: "/about", element: <About />, },
  { path: "/contact-us", element: <Contact />, },
  { path: "/privacy-policy", element: <Policy />, },
  { path: "/the-rememberers", element: <Rememberers />, },
  { path: "/store", element: <Store />, },
  { path: "/terms-and-conditions", element: <Terms />, },
  { path: "*", element: <Error />, },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);
