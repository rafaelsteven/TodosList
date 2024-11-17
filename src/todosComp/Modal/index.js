import React from "react";
import ReactDOM from 'react-dom';
import './css/modal.css';
import { TodoContext } from "../TodoProvider";


function Modal({children}) {
    const {
        actionModal,
        titleModal
      } = React.useContext(TodoContext);
    return ReactDOM.createPortal(
        <div  className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={()=>{actionModal(false)}}>&times;</span>
                    <h2>{titleModal}</h2>
                </div>
                <div className="modal-content-children">
                    {children}
                </div>
            </div>
        </div>
        , document.getElementById('modal')
    )
}

export {Modal};