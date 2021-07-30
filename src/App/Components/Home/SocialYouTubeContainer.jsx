import React, { Component } from "react";
import Moment from 'react-moment';
import * as AppConstant from '../AppConstant';

class SocialYouTubeContainer extends Component {


    state = {
        ytData: []
    }

    getYouTubeData = ()=>{
        //let appKey = AppConstant.YOUTUBE_APP_KEY;
        //let channelId = AppConstant.YOUTUBE_CHANNEL_ID;
        //let url = "https://www.googleapis.com/youtube/v3/search?key="+appKey+"&part=snippet&type=video&channelId="+channelId;
        let url = AppConstant.YOUTUBE_FEED_JSON;
        fetch(url)
        .then(response =>  response.json())
        .then(resData => {
           //console.log(resData.items);
           //do your logic here       
           //let person = resData.results
           this.setState({ ytData: resData.items }); //this is an asynchronous function
        }).catch(err => {
            console.log(err);
            console.log("|Error|");
          });    
    }


    componentDidMount() {
       this.getYouTubeData();
    }


    render() {
        const{ytData} = this.state;
        return (
            <section className="youtubeContainer">
                {(typeof ytData!=='undefined'?(
                    ytData.map((item, i) => (
                        <div className="yt-video-list" key={i}>
                            <div className="ytImg">
                                <a rel="noopener noreferrer" href={"https://www.youtube.com/watch?v="+item.id.videoId} target="_blank">  
                                <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} width="120" height="90" />
                                </a> 
                            </div>
                            <div className="ytTxt">
                               <h3><a rel="noopener noreferrer" href={"https://www.youtube.com/watch?v="+item.id.videoId} target="_blank">
                                {item.snippet.title}
                                </a></h3> 
                                <div className="date"><Moment fromNow>{item.snippet.publishedAt}</Moment></div>  
                            </div>
    
                        </div>
                    ))
                ):(null))}               
                
            </section>
        )
    }
}

export default SocialYouTubeContainer;