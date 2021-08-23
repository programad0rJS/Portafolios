import React, { Fragment } from 'react';

import Facebook from './Facebook.png'
import  Javascript  from './Javascript.jpg';
import Html from './Html.jpg';
import Node from './Node.jpg'
import ReactNative from './ReactNative.jpg';
const CursosDos = () => {
    return (
        <Fragment>
    
               <div class="album py-5 bg-light">
                <div class="container">

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                        <div class="col">
                            <div class="card shadow-sm">
                                <img src={ReactNative} alt='ReactNative' />
   
                                <div class="card-body">
                                    <p class="card-text">Lo que aprenderás
                                                        React Native
                                                        Crear aplicaciones móviles nativas usando RN
                                                        Crear muchas aplicaciones altamente estilizadas
                                                        Desplegar aplicaciones en Google PlayStore y Apple AppStore
                                                        Dominar React con TypeScript
                                                        Uso de recursos nativos como la cámara, galería y GPS</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                           <a href="https://www.udemy.com/course/vuejs-fh/" target="_blank"> <button type="button" class="btn btn-sm btn-outline-secondary">Visitar</button></a>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

 
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src={Facebook} alt="Facebook" />


                                <div class="card-body">

                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <a href="https://www.facebook.com/" target="_blank"><button type="button" class="btn btn-sm btn-outline-secondary">Visitar</button></a>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div> 
                        
                     
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src={Javascript} alt="Javascript" />

                                <div class="card-body">

                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <a href="https://www.udemy.com/course/desarrollo-de-aplicaciones-web-con-javascript-2020/" target="_blank" ><button type="button" class="btn btn-sm btn-outline-secondary">Visitar</button></a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div class="col">
                            <div class="card shadow-sm">
                               <img src={Html} alt="Html" />

                                <div class="card-body">

                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <a href="https://www.udemy.com/course/curso-html5-completo/"><button type="button" class="btn btn-sm btn-outline-secondary">Visitar</button></a>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div class="col">
                            <div class="card shadow-sm">
                               <img src={Node} alt="Node" />

                                <div class="card-body">
                                    <p class="card-text">Lo que aprenderás
                                                        Crear backend server
                                                        Crear servicios REST
                                                        Subir y administrar archivos en el servidor
                                                        Json web tokens
                                                        Despliegues en Heroku
                                                        Despliegues en Github y Git
                                                        Crear aplicaciones usando sockets
                                                        Aprender Y reforzar tu conocimiento de Node
                                                        Mucho más
                                                        Aplicaciones de consola</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                           <a href="https://www.udemy.com/course/node-de-cero-a-experto/" target="_blank"> <button type="button" class="btn btn-sm btn-outline-secondary">Visitar</button></a>

                                        </div>

                                    </div> 
                                </div> 
                          </div> 
                         </div> 
                    </div>
                </div>
            </div>
        </Fragment>

    );
}

export default CursosDos;