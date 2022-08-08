import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";
import 'animate.css';

export const Modal = ({ index, people }) => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="modal mt-5 animate__animated animate__fadeInUp" id={"exampleModalCenter" + index} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-dark text-warning">
                            <h5 className="modal-title text-warning" id="exampleModalCenterTitle">{people.name}</h5>
                           
                        </div>
                        <div className="modal-body fs-5 text-warning">
                         
                                <p><strong>BirthYear: </strong>{people.birth_year}</p>
                                <p><strong>Gender: </strong>{people.gender}</p>
                                <p><strong>Created: </strong>{people.created}</p>
                                <p><strong>Edited: </strong>{people.edited}</p>
                                <p><strong>Height: </strong>{people.height}</p>
                                <p><strong>Eye Color: </strong>{people.eye_color}</p>
                                <p><strong>Hair Color: </strong>{people.hair_color}</p>
                                <p> <strong>Skin Color: </strong>{people.skin_color}</p>
                        
                             <span className="card-text text-warning">BirthYear:</span><p>{people.birth_year}</p>
                            <b className="card-text text-warning">Gender:</b><p>{people.gender}</p>
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
