import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cursos from './Cursos';
import CursosDos from "./CursosDos";



export default function App() {
  return (
    <Router>
      <div>  <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">

            <p>

              <Link  to="/" className="btn btn-secondary my-2">Pagina Principal</Link>
              <Link  to="/CursosDos" className="btn btn-primary my-2">Mas Compras </Link>

            </p>
          </div>
        </div>
      </section>








        <Switch>
          <Route exact path="/" component={Cursos} />
         
      
          <Route exact path="/CursosDos" strict component={CursosDos}/>
          
      
        </Switch>
      </div>
    </Router>
  );
}
