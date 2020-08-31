import React from 'react'
import ParrMethods from "./parrMethods"
import './../styling/mesParrainagesStyling.css'

const MesParrainages = () => {
    return (
        <div>
            <h4 className="titre">Mes parrainages</h4>
            <div className="content text-center">
                <h4 className="descTitle">Vous aimez le BoatOn Book ? Recommandez-le !</h4>
                <div className="row justify-content-center desc">
                    <div className="col-md-4 verticalLigne">
                        <h3 className="textParr">3 mois gratuits pour vous</h3>
                        <p className="paragParr">à chaque filleul s'abbonant*</p>
                    </div>
                    <div className="col-md-4">
                        <h3 className="textParr">3 mois gratuits pour votre filleul</h3>
                        <p className="paragParr">dès qu'il s'abonne</p>
                    </div>
                </div>
                <ParrMethods />
            </div>
        </div>
        
    );
}

export default MesParrainages;