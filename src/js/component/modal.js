import { Context } from "../store/appContext";
import { useContext } from "react";

export const Modal = ({ index, character }) => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="modal" id={"exampleModalCenter" + index} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-dark text-light">
                            <h5 className="modal-title text-light" id="exampleModalCenterTitle">{character.name}</h5>
                           
                        </div>
                        <div className="modal-body">

                           
                                <p><strong>BirthYear: </strong>{character.birth_year}</p>
                                <p><strong>Gender: </strong>{character.gender}</p>
                                <p><strong>Created: </strong>{character.created}</p>
                                <p><strong>Edited: </strong>{character.edited}</p>
                                <p><strong>Height: </strong>{character.height}</p>
                                <p><strong>Eye Color: </strong>{character.eye_color}</p>
                                <p><strong>Hair Color: </strong>{character.hair_color}</p>
                                <p> <strong>Skin Color: </strong>{character.skin_color}</p>
                        
                            {/* <span className="card-text">BirthYear:</span><p>{character.birth_year}</p>
                            <b className="card-text">Gender:</b><p>{character.gender}</p> */}
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
