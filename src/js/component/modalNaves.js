import React from "react";
//import { Context } from "../store/appContext";
//import { useContext } from "react";

export const ModalNaves = ({index,nave}) => {
  //  const { store, actions } = useContext(Context);
    return (
        <>
            <div className="modal" id={"exampleModalCenter" + index} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-dark text-light">
                            <h5 className="modal-title" id="exampleModalCenterTitle">{nave.name}</h5>
                            
                        </div>
                        <div className="modal-body">
                            
                                <p><strong>Climate </strong>{nave.mglt}</p>
                                <p><strong>Cargo Capacity: </strong>{nave.cargo_capacity}</p>
                                <p><strong>Consumables: </strong>{nave.consumables}</p>
                                <p><strong>Created: </strong>{nave.created}</p>
                                <p><strong>Crew: </strong>{nave.crew}</p>
                                <p><strong>Length: </strong>{nave.length}</p>
                                <p><strong>Manufacturer: </strong>{nave.manufacturer}</p>
                                <p><strong>Passengers: </strong>{nave.passengers}</p>

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
