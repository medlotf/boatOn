import React, { Component } from 'react'
import ParrMethod from "./parrMethod"

class ParrMethods extends Component {

    state = {
        methods:[
            {title:"J'envoie un SMS", icon:"message"},
            {title:"J'envoie un mail", icon:"mail"},
            {title:"Je partage l'offre sur Facebook", icon:"facebook"},
        ]
     }

    render() {
        const {methods} = this.state;
        return (
            <div className="parrainageMethods">
                {methods.map((m,i)=>(<ParrMethod key={i} titre={m.title} icon={m.icon} />))}
            </div>
        );
    }
}

export default ParrMethods;