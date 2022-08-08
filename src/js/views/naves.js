import React from "react";
import { Shop_name } from '../component/shop_name';
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, withRouter } from "react-router-dom";
import { ModalNaves } from "../component/modalNaves";



const Naves = () => {
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
                                        <img src="https://w0.peakpx.com/wallpaper/576/109/HD-wallpaper-star-wars-spaceship.jpg" className="d-block w-100 border border-warning" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d71e379b-3f09-42b2-b3fe-26548591a750/deed0y1-cf8bc4bd-dfb9-408f-9c5b-03d4868a337d.jpg/v1/fill/w_1280,h_720,q_75,strp/star_wars_spaceship_wallpaper_by_ericwhitted_deed0y1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZDcxZTM3OWItM2YwOS00MmIyLWIzZmUtMjY1NDg1OTFhNzUwXC9kZWVkMHkxLWNmOGJjNGJkLWRmYjktNDA4Zi05YzViLTAzZDQ4NjhhMzM3ZC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.euwZt7DPvWWMQMvu4V5Y85mDhi3nqMHy-nNIMez1zV0" className="d-block w-100 border border-warning" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://www.teahub.io/photos/full/359-3598907_download-original-resolution-data-src-star-wars-wallpaper.jpg" className="d-block w-100 border border-warning" alt="..."/>
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
                                        actions.getDataNave(store.naves.previous)
                                    }}>
                                        Prev
                                    </div>
                                    <div className="btn btn-sm btn m-3" id="next" onClick={() => {

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
                                            <div className="col-lg-4 col-md-6 mb-4">
                                                <div className="card h-100 mt-4 border border-warning">
                                                    <a href="#"><img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/starships/${(i + 1) + store.c}.jpg`} alt="" /></a>
                                                    
                                                    <div className="card-body">
                                                        <h4 className="card-title" >
                                                            <Link data-toggle="modal" data-target={"#exampleModalCenter" + i}>{valor.name}</Link>
                                                        </h4>
                                                        <b className="card-text">Cargo Capacity:</b><p>{valor.cargo_capacity}</p>
                                                        <b className="card-text">Consumables:</b><p>{valor.consumables}</p>
                                                    </div>
                                                    <div className="card-footer mb-1">
                                                    <button type="button" className="learn-more" data-toggle="modal" data-target={"#exampleModalCenter" + i}><span className="circle" aria-hidden="true">
                                                            <span className="icon arrow"></span>
                                                        </span>
                                                            <span className="button-text">Learn More</span>

                                                        </button>
                                                        <ModalNaves index={i} nave={valor} />
                                                        <small className="text-warning float-end"><i className = { store.favorite.includes(valor.name) ? "far fa-star" : "far fa-star"} onClick={() => actions.addFavorite(valor.name)}></i></small>
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