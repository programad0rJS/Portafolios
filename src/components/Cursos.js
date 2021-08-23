import React from 'react'
import Vue from './Vue.jpg';
import Facebook from './Facebook.png'
import  Javascript  from './Javascript.jpg';

const Cursos = () => {
    return (
        <div>
            <div class="album py-5 bg-light">
                <div class="container">

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                        <div class="col">
                            <div class="card shadow-sm">
                                <img src={Vue} alt='Vue' />
   
                                <div class="card-body">
                                    <p class="card-text">Lo que aprenderás
                                                        Aprender Vue 3 a profundidad
                                                        Vue Router
                                                        Vuex
                                                        Test unitarios
                                                        Options API y Composition API
                                                        Modularización y re-utilizacion de código</p>
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

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cursos
