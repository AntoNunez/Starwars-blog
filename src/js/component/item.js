import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";


export const Item = () => {
const { store, actions } = useContext(Context);
    
    return (
        <>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                    <div className="card-body">
                        <h4 className="card-title" >
                            <a href="#"></a>
                        </h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"><i className="fas fa-heart"></i></small>
                    </div>
                </div>
            </div>

        </>
    )
};


