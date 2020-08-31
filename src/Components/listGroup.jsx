import React, { Component } from 'react'
import './../styling/listGroupStyling.css'


class ListGroup extends Component {

    state = { listGroupItems:["Mes informations personnelles", "Mes informations de virement", "Mon bateau", "Mes emplacement", "Mes demandes", "Mes messages", "Mes parrainages"]}

    getClass=(i)=>{
        if(i===0)
            return "list-group-item act";
        return "list-group-item";
    }

    render() {
        const {listGroupItems} = this.state;
        return (
            <div className="listgroup">
                <ul className="list-group">
                    {listGroupItems.map((item,i)=>(<li key={i} className={this.getClass(i)}>{item}</li>))}
                </ul>
            </div>
        );
    }
}

export default ListGroup;