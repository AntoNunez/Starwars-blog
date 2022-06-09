import React from "react";
//import { Navbar } from '../component/navbar';
import { Footer } from '../component/footer';
import { Shop_name } from '../component/shop_name';

import { Item } from '../component/item';
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, withRouter } from "react-router-dom";
import { ModalPlanets } from "../component/modalPlanets.js";



const Planets = () => {
    const { store, actions } = useContext(Context);
    return (
        <>

            <div className="container">
                <div className="row">
                     <Shop_name />
                    <div className="col-lg-9 mb-5">
                        <div className="card bg-dark bg-opacity-10">
                            <img
                                src="https://64.media.tumblr.com/5e697a73a5a9fdcaadf742ea0a98d8be/tumblr_nsnbc3LZsM1uvhnh7o1_500.gifv"
                                className="card-img-top rounded "
                                alt="..."
                            />
                        </div>

                        <div className="row">
                            <div className="col-md-12 d-flex justify-content-around">
                                <div className="btn btn-sm btn btn-secondary mb-2" id="prev" onClick={() => {
                                    actions.getDataPlanets(store.planets.previous)
                                }}>
                                    Prev
                                </div>
                                <div className="btn btn-sm btn btn-secondary mb-2" id="next" onClick={() => {

                                    actions.getDataPlanets(store.planets.next)
                                }}>
                                    Next
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {
                                !!store.planets &&
                                store.planets.results.map((valor, i) => {
                                    return (
                                        <div key={valor.id} className="col-lg-4 col-md-6 mb-4">
                                            <div className="card h-100">
                                                <a href="#"><img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/planets/${i + 1}.jpg`} alt="" /></a>
                                                <div className="card-body">
                                                    <h4 className="card-title" >
                                                        <Link data-toggle="modal" data-target={"#exampleModalCenter" + i}>{valor.name}</Link>
                                                    </h4>
                                                    <b className="card-text">Climate:</b><p>{valor.climate}</p>
                                                    <b className="card-text">Terrain:</b><p>{valor.terrain}</p>
                                                </div>
                                                <div className="card-footer">
                                                    <ModalPlanets index={i} planet={valor} />
                                                    <small className="text-muted float-end"><i className={store.favorite.includes(valor.name) ? "far fa-star" : "far fa-star"} onClick={() => actions.addFavorite(valor.name)}></i></small>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Planets;

