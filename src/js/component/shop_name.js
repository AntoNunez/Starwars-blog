import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Shop_name = () => {
  const { store, actions } = useContext(Context);
  
  return (
    <div className="container my-4 me-5 fixed-top">
      <div className="col-sm-3 float-end">
        <div className="list-group">
          <h6 className="list-group-item text-center text-warning bg-transparent border border-warning">
            Favorites
            <span className="float-end">{store.favorite.length}</span>
          </h6>
          {!!store.favorite.length !== 0 &&
            store.favorite.map((valor, index) => {
              return (
                <a key={index} className="list-group-item text-warning bg-transparent border-bottom border-warning">
                  {valor}
                  <i
                    className="btn btn-outline-danger bg-transparent far fa-trash-alt float-end text-danger"
                    onClick={() => actions.deleteFavorite(valor)}
                  ></i>
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
};