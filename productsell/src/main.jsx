import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Welcomepage from './myApp/Welcomepage';
import Errorpage from './myApp/SharePage/Errorpage';
import Itemlist from './myApp/Notlogin/Itemlist';
import Contact from './myApp/Notlogin/Contact';
import About from './myApp/Notlogin/About';

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Welcomepage />} >
  <Route path='' element={<Itemlist />}/>
  <Route path='contact' element={<Contact />}/>
  <Route path='aboutus' element={<About />}/>
  <Route path='*' element={<Errorpage />}/>

  </Route>

  <Route path='*' element={<Errorpage />} />
 </Routes>
 </BrowserRouter>
)
