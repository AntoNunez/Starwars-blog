import React from "react";
//import { Navbar } from '../component/navbar';
import { Shop_name } from '../component/shop_name';
import { Item } from "../component/item";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Modal } from "../component/modal";
import 'animate.css';

const People = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div>
                <div className="container">
                    <div className="row">
                        <Shop_name />
                        <div className="col-lg-9">

                            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://i.ytimg.com/vi/XylehpPxSD4/maxresdefault.jpg" className="d-block w-100 border border-warning" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://www.wallpaperuse.com/wallp/93-930025_m.jpg" className="d-block w-100 border border-warning" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://wallpapercave.com/wp/wp5959235.jpg" className="d-block w-100 border border-warning" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-around">
                                    <div className="btn btn-sm btn  m-3" id="prev" onClick={() => {
                                        actions.getDataPeople(store.people.previous)
                                    }}>
                                        Prev
                                    </div>
                                    <div className="btn btn-sm btn m-3" id="next" onClick={() => {

                                        actions.getDataPeople(store.people.next)
                                    }}>
                                        Next
                                    </div>
                                </div>
                            </div>

                            <div className="row">

                                {
                                    !!store.people &&
                                    store.people.results.map((valor, i) => {
                                        return (

                                            <div className="col-lg-4 col-md-6 mb-3 ">
                                                <div className="card h-100 mt-4 border border-warning">
                                                    <a href="#"><img className="card-img-top text-warning" src={`https://starwars-visualguide.com/assets/img/characters/${(i + 1) + store.c}.jpg`} alt="" /></a>

                                                    <div className="card-body">
                                                        <h4 className="card-title " >
                                                            <Link data-toggle="modal" data-target={"#exampleModalCenter" + i}>{valor.name}{(i + 1) + store.c}</Link>
                                                        </h4>
                                                        <b className="card-text">BirthYear:</b><p>{valor.birth_year}</p>
                                                        <b className="card-text">Gender:</b><p>{valor.gender}</p>
                                                    </div>
                                                    <div className="card-footer mb-1">
                                                        <button type="button" className="learn-more" data-toggle="modal" data-target={"#exampleModalCenter" + i}><span className="circle" aria-hidden="true">
                                                            <span className="icon arrow"></span>
                                                        </span>
                                                            <span className="button-text">Learn More</span>

                                                        </button>
                                                        <Modal index={i} people={valor} />
                                                        <small className="text-warning float-end"><i className={store.favorite.includes(valor.name) ? "far fa-star" : "far fa-star"} onClick={() => actions.addFavorite(valor.name)}></i></small>

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


            </div>
        </>
    )
}
export default People