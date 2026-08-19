import {  Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Categoria1 from './pages/Categoria1'
import Categoria2 from './pages/Categoria2'
import Categoria3 from './pages/Categoria3'

const Rotas = () => (
    <Routes>
        <Route path= "/" element = {< Home />} />
        <Route path = "/Categoria1" element = {< Categoria1 />} />
        <Route path="/Categoria2" element={< Categoria2 />} />
        <Route path="/Categoria3" element={< Categoria3 />} />

    </Routes>
)



export default Rotas
