import React, { Component } from "react";

import { Container } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import ReactHtmlParser from "react-html-parser";
import Axios from "../../Services/Shared/Axios.js";
import './HomeVideos.css';
import ReactPlayer from 'react-player';


class HomeVideos extends Component {

  state = {
    videoList: []
  }

  getVideoList = () => {
    Axios({
      method: "get",
      url: "/homevideos?_limit=5&_sort=created_at:desc"
    })
      .then(res => {
        res.data.map((data) => {
          return (
          data.youtube_video_embed_code = this.youtube_parser(data.youtube_video_embed_code)
          )
        });
        console.log(res.data);
        this.setState({
          videoList: res.data
        });
      })
      .catch(err => {
        console.log(err);
        console.log("|Error|");
      });
  }

  componentDidMount() {
    this.getVideoList();

    // const el = document.querySelector('.testivideo');
    // if(el){
    //   el.addEventListener('click', function(){
    //       console.log('TEST');
    //       this.gtmClickHandler("homepage_3_video_play", "Home Page", "Video")
    //   });
    // }
  }

  gtmClickHandler = (eventName, pageType, clickText) => {
    window.dataLayer = window.dataLayer || [];
    const data = {
      'event': eventName,
      'pagetype': pageType,
      'click_text': clickText
    };
    window.dataLayer.push(data);
  }

  youtube_parser = (url) => {
    // var regExp = /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;
    // var match = url.match(regExp);
    // return (match && match[1].length==11)? match[1] : false;
    var ID = '';
    url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (url[2] !== undefined) {
      ID = url[2].split(/[^0-9a-z_]/i);
      ID = ID[0];
    }
    else {
      ID = url;
    }
    return 'http://www.youtube.com/watch?v='+ID;
  }

  render() {
    const { videoList } = this.state;
    return (
      <section className="testimonialsec">
        <Container>
          {videoList && videoList.length && (
            <OwlCarousel
              className="owl-theme"
              loop={false}
              mouseDrag={false}
              autoplay={false}
              margin={0}
              nav={false}
              dots={false}
              items={1}
              rewind={false}
            >
              {videoList.map((item, i) => (
                <div className="item" key={i}>
                  <div className="testibox">
                    <div className="testishade"></div>
                    <div className="clearfix testi-content-wrapper">
                      <div className="testicont">
                        <h4>
                          {item.title}
                        </h4>
                        <p>
                          {item.description}
                        </p>
                      </div>
                      <div className="testivideo">
                        {item.youtube_video_embed_code ? (
                          <ReactPlayer width="95%" height="95%" url={item.youtube_video_embed_code} onStart={()=>{this.gtmClickHandler("homepage_3_video_play", "Home Page", "Video")}} /> //ReactHtmlParser(item.youtube_video_embed_code)
                        ) : (null)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          )}
        </Container>
        <div className="outershade">
          <div className="testishade"></div>{" "}
        </div>
      </section>
    );
  }
}

export default HomeVideos;
