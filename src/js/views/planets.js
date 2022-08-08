import React from "react";
import { Shop_name } from '../component/shop_name';
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link} from "react-router-dom";
import { ModalPlanets } from "../component/modalPlanets";



const Planets = () => {
    const { store, actions } = useContext(Context);
    return (
        <>

            <div className="container">
                <div className="row">
                    <Shop_name />
                    <div className="col-lg-9">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://lumiere-a.akamaihd.net/v1/images/mustafar-4-retina_7fae457a.jpeg?region=0%2C0%2C1200%2C675" className="d-block w-100 border border-warning" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://uideplay.uide.edu.ec/wordpress/wp-content/uploads/2020/10/planet.jpg" className="d-block w-100 border border-warning" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://images.hdqwalls.com/wallpapers/death-star-planet-star-wars-nt.jpg" className="d-block w-100 border border-warning" alt="..." />
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
                                <div className="btn btn-sm btn m-3" id="prev" onClick={() => {
                                    actions.getDataPlanets(store.planets.previous)
                                }}>
                                    Prev
                                </div>
                                <div className="btn btn-sm btn m-3" id="next" onClick={() => {

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
                                        <div className="col-lg-4 col-md-6 mb-4"> 
                                            <div className="card h-100 mt-4 border border-warning">
                                                <a href="#"><img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/planets/${i + 1}.jpg`} alt="" /></a>
                                                <div className="card-body">
                                                    <h4 className="card-title" >
                                                        <Link data-toggle="modal" data-target={"#exampleModalCenter" + i}>{valor.name}</Link>
                                                    </h4>
                                                    <b className="card-text">Climate:</b><p>{valor.climate}</p>
                                                    <b className="card-text">Terrain:</b><p>{valor.terrain}</p>
                                                </div>
                                                <div className="card-footer mb-1">
                                                <button type="button" className="learn-more" data-toggle="modal" data-target={"#exampleModalCenter" + i}><span className="circle" aria-hidden="true">
                                                            <span className="icon arrow"></span>
                                                        </span>
                                                            <span className="button-text">Learn More</span>

                                                        </button>
                                                    <ModalPlanets index={i} planet={valor} />
                                                    <small className="text-warning float-end mb-2"><i className={store.favorite.includes(valor.name) ? "far fa-star" : "far fa-star"} onClick={() => actions.addFavorite(valor.name)}></i></small>
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

