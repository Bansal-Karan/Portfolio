import './App.css'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { div } from 'framer-motion/client';

function App() {

  const router = createBrowserRouter([
    { 
      path: "/", 
      element: (<div>
        <Navbar/>
        <Home />
        <Footer/>
      </div>)
    },
    {
      path: "/about", 
      element: (
        <div>
          <Navbar/>
          <About/>
          <Footer/>
        </div>
      )
    },
    {

    }
  ]);
  

  return (
  <div>
    <RouterProvider router={router} />
  </div>
  )
}

export default App
