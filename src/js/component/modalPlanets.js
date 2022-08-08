import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";
import 'animate.css';


export const ModalPlanets = ({index,planet}) => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="modal mt-5 animate__animated animate__fadeInUp" id={"exampleModalCenter" + index} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-dark text-warning">
                            <h5 className="modal-title" id="exampleModalCenterTitle">{planet.name}</h5>
                            
                        </div>
                        <div className="modal-body fs-5 text-warning">
                            
                                <p><strong>Climate: </strong>{planet.climate}</p>
                                <p><strong>Created: </strong>{planet.created}</p>
                                <p><strong>Diameter: </strong>{planet.diameter}</p>
                                <p><strong>Edited: </strong>{planet.edited}</p>
                                <p><strong>Gravity: </strong>{planet.gravity}</p>
                                <p><strong>Orbital Period </strong>{planet.orbital_period}</p>
                                <p><strong>Rotation Period: </strong>{planet.rotation_period}</p>
                                <p> <strong>Terrain: </strong>{planet.terrain}</p>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-warning" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

