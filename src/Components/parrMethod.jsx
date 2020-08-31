import React, {Component} from 'react'
import './../styling/parrMethodStyling.css'


class ParrMethod extends Component {

    componentDidMount() {
        console.log(this.props)
    }
    

    getSrc=()=>{
        let url="./images/"+this.props.icon+".png";
        return url;
    }

    render() {
        return (
            <div className="parrMethodItem bg-warning">
                <p>{this.props.titre}</p>
            </div>
        );
    }
}

export default ParrMethod;
