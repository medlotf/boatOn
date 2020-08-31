import React from 'react'
import './../styling/mesParrainagesStyling.css'
import TableParr from "./tableParr"

const ListParrainages = () => {
    return (
        <div>
            <h4 className="titre">Liste de mes parrainages</h4>
            <TableParr />
        </div>    
    );
}

export default ListParrainages;