import React from "react";
import './css/Loading.css';
import {ReactComponent as   Loading} from './svg/ball-triangle.svg';
function LoadingSvg ()
{
  return (
   <div className="LoadingPaging">
        <Loading/>
   </div>
  );
}

export {LoadingSvg};