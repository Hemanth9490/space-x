import Launch from './Launch.jsx'
import React from 'react'
import './styles.css';


class Launchs extends React.Component{
    render(){
        return(
            <div className="launchs-container">
                <Launch
                banner="https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg" 
                tittle="Falconaon" 
                date="120 1203 4923 53" 
                description="sdofanasdf adfnasodfpads faoodfoiiadf adsfnoasdfa sdfpadfa dsoifaos"/>

                <Launch 
                banner="https://farm8.staticflickr.com/7615/16670240949_8d43db0e36_o.jpg" 
                tittle="vrasefasa" 
                date="12 323 121 1221" 
                description="faoodfoiiadf adsfnoasdfa sdfpadfa dsoifaos"/>
            </div>       
            
        );
    }
}
export default Launchs