import Launch from './Launch.jsx'
import React from 'react'
import './styles.css';
import axios from "axios";


class Launchs extends React.Component{
    state={
        launchesList:[]
    }

    componentDidMount=()=>{
        this.getLaunchesFromAPI();
    }

    getLaunchesFromAPI=()=>{
        axios.get('https://api.spacexdata.com/v3/launches')
        .then((response)=>{
            this.setState({launchesList:response.data})
        })
        .catch((error)=>{
            console.log("error")
        })
    }

    AllLaunchs=()=>{
        const launchComponents=this.state.launchesList.map((launch,index) =>{
            const image=launch.links.flickr_images.length===0?'https://img.etimg.com/thumb/msid-77517418,width-640,resizemode-4,imgsize-139150/up-up-and-away.jpg':launch.links.flickr_images[0]
            return <Launch
            key={index}
            banner={image} 
            tittle={launch.mission_name} 
            date={launch.launch_date_local} 
            description={launch.details}/>
        })
        return launchComponents;
    }


    render(){
        return(
            
            <div className="launchs-container">
                {this.AllLaunchs()}
            </div>       
            
        );
    }
}
export default Launchs