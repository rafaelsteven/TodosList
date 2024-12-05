import React from "react";
import {withStorageListener} from './withStorageListener.js';
function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
        <div className="ChangeAlert_div">
            <div className="ChangeAlert_conteiner">
                <div className="ChangeAlert_header">
                    <h2>Alerta</h2>
                </div>
                <div className="ChangeAlert_body">
                    <p>Se detecto un cambio en la lista de todos, desea cargar la pagina</p>
                    <button onClick={toggleShow}>YES!</button>
                </div>
            </div>
        </div>);
    } else
    {
        return null;
    }
}   

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
export { ChangeAlertWithStorageListener };