import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./paginas/home/Home";
import Contato from "./paginas/contato/contato";
import Sobre from "./paginas/sobre/sobre";

function RoutesApp() {
    return(
        <div>
            <BrowserRouter>
               
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/contato" element={<Contato/>}/>
                  <Route path="/sobre" element={<Sobre/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default RoutesApp;