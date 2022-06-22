import React from "react";
import { UseFetch } from "../UseFetch";

export const CardsPokemon = ({url}) => {
    const estado = UseFetch(url)
    const{cargando,data}=estado


    return(
        <div>
            {
                cargando
                ?
                <h1>Cargando</h1>
                :
                <div className="cards2" style={{width:'14rem'}}>
                    <div className="cards-header">
                        <h5 className="cards-tittle"></h5>
                    </div>
                    <div className="cards-body">
                        <img src={data.sprites.front_default} alt="pokemon"></img>
                    </div>
                    <div className="cards-footer">
                        <p className="cards-text text-capitalize">{data.forms[0].name}</p>
                    </div>
                </div>
            }
        </div>
    )
}
