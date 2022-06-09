import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";


export const ModalPlanets = ({index,planet}) => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="modal" id={"exampleModalCenter" + index} tabndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-dark text-light">
                            <h5 className="modal-title" id="exampleModalCenterTitle">{planet.name}</h5>
                            
                        </div>
                        <div className="modal-body">
                            
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
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

