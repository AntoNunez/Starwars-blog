import React from "react";
//import { Navbar } from '../component/navbar';
import { Shop_name } from '../component/shop_name';
import { Item } from "../component/item.js";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ModalNaves } from "../component/modalNaves.js";



const Naves = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
            
                <div className="container">
                    <div className="row">
                        <Shop_name />
                        <div className="col-lg-9 mb-5">
							<img
								src="https://i.pinimg.com/originals/f8/ad/54/f8ad54434a8cfb4ca4d7f88aaf921a20.gif"
								className="card-img-top rounded"
								alt="..."
							/>
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-around">
                                    <div className="btn btn-sm btn btn-secondary mb-2" id="prev" onClick={() => {
                                        actions.getDataNave(store.naves.previous)
                                    }}>
                                        Prev
                                    </div>
                                    <div className="btn btn-sm btn btn-secondary mb-2" id="next" onClick={() => {

                                        actions.getDataNave(store.naves.next)
                                    }}>
                                        Next
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                {
                                    !!store.naves &&
                                    store.naves.results.map((valor, i) => {
                                        return (
                                            <div key = {valor.id} className="col-lg-4 col-md-6 mb-4">
                                                <div className="card h-100">
                                                    <a href="#"><img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/starships/${(i + 1) + store.c}.jpg`} alt="" /></a>
                                                    
                                                    <div className="card-body">
                                                        <h4 className="card-title" >
                                                            <Link data-toggle="modal" data-target={"#exampleModalCenter" + i}>{valor.name}</Link>
                                                        </h4>
                                                        <b className="card-text">Cargo Capacity:</b><p>{valor.cargo_capacity}</p>
                                                        <b className="card-text">Consumables:</b><p>{valor.consumables}</p>
                                                    </div>
                                                    <div className="card-footer">
                                                        <ModalNaves index={i} nave={valor} />
                                                        <small className="text-muted float-end"><i className = { store.favorite.includes(valor.name) ? "far fa-star" : "far fa-star"} onClick={() => actions.addFavorite(valor.name)}></i></small>
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
export default Naves;