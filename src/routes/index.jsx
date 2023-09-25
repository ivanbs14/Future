import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from './app.routes';

import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export function Routes() {

   return (
      <BrowserRouter>
         <Nav />
         <AppRoutes />
         <Footer />
      </BrowserRouter>
   )
}