import React from "react";
import './styles.css';
class Launch extends React.Component{
    render(){
        return(
            <div>
                <div className="launch">
                    <img src={this.props.banner} alt="Loading..."/>
                    <div className="text-content">
                        <div className="tittles">
                            <h1>{this.props.tittle}</h1>
                            <h2>{this.props.date}</h2>
                        </div>
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Launch;