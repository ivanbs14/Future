import { Routes, Route } from "react-router-dom";

import { Home } from '../pages/Home';
import { Ranking } from '../pages/Ranking';

export function AppRoutes() {
   return(
       <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/ranking" element={<Ranking />}/>
       </Routes>
   )
}