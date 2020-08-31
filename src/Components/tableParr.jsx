import React, {Component} from 'react'
import './../styling/tableStyling.css'

class TableParr extends Component {

    getStatutClass=(text)=>{
        let cls="";
        if(text==="En attente")
            cls="classic";
        else if(text==="Validée")
            cls="green"
        else if(text==="Expirée")
            cls="red"
        return <p className={cls}>{text} /</p>
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Filleul</th>
                    <th scope="col">Envoi</th>
                    <th scope="col">Statut</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>6 mai <span>2020</span></td>
                        <td>[Prénom, nom]</td>
                        <td>Par SMS/ email</td>
                            <td>{this.getStatutClass("En Attente")}{this.getStatutClass("Validée")}{this.getStatutClass("Expirée")}</td>
                        <td>
                            <button className="btn btn-warning">Renvoyer</button>
                        </td>
                    </tr>
                    <tr>
                        <td>5 mai <span>2020</span></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>22 avr. <span>2020</span></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>15 avr. <span>2020</span></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
                </table>
            </div>
            
        );
    }
}

export default TableParr;