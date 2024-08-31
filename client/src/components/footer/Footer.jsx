import "./footer.css"
import React from 'react';

var d = new Date();
var currYear = d.getFullYear();

export const Footer = () => {
  return (
    <div className="footer">
            <div className="fText"> Copyright @ {currYear} : Apna Nazariya --  by  Anant </div>
    </div>
  )
}
