import {  Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Categoria1 from './pages/Categoria1'

const Rotas = () => (
    <Routes>
        <Route path= "/" element = {< Home />} />
        <Route path = "/Categoria1" element = {< Categoria1 />} />
    </Routes>
)



export default Rotas
