import React from "react";
import Moment from "react-moment";
import moment from 'moment';

export const APP_URL = process.env.REACT_APP_PUBLIC_URL; //Project Base URL
export const BASE_URL = process.env.REACT_APP_API_URL; // Strapi API URL
export const BASE_PATH = process.env.REACT_APP_BASE_PATH; //Project Base Path
export const TRANSACTION_API_BASE_URL = process.env.REACT_APP_TRANSACTION_API_URL; //Transaction API URL

export const LOGIN_PATH = "https://www.sbigeneral.in/channelpartnerlogin.html";
export const EMP_LOGIN_PATH = "https://portal.zinghr.com/2015/pages/authentication/login.aspx";
export const IMG_BASE_URL = BASE_URL;
export const MOTOR_POLICY_RENEWAL_BASE_URL = TRANSACTION_API_BASE_URL + "/motorrenewal/display_product";
export const HEALTH_POLICY_RENEWAL_BASE_URL = TRANSACTION_API_BASE_URL + "/healthrenewal/display_product";
export const QUICK_ASIST_URL = TRANSACTION_API_BASE_URL + "/quick-assist";
export const LOGIN_URL = APP_URL + "/channel-partner-login";
export const POLICY_DOWNLOAD_BASE_URL = TRANSACTION_API_BASE_URL + "/policyprint";

//Social Media Details
export const FB_PAGE_LINK = "https://www.facebook.com/SBIGENOfficial";
export const TWITTER_PAGE_LINK = "https://twitter.com/sbigeneral";
export const LINKEDIN_PAGE_LINK = "https://www.linkedin.com/company/sbi-general-insurance";
export const GOOGLEPLUS_PAGE_LINK = "https://plus.google.com/+sbigeneral";
export const YOUTUBE_PAGE_LINK = "https://www.youtube.com/user/sbigeneralinsurance";

export const YOUTUBE_APP_KEY = "AIzaSyATYW99bD92uqlAnqs74GN7MXnOGvle920";//"AIzaSyAIp3O4Ir7XTG4Qtl3FOE3wOFlvL_W3zTk";
export const YOUTUBE_CHANNEL_ID = "UCmJqZPkDV39lYOK0q8FG7sA";

export const YOUTUBE_FEED_JSON = APP_URL + "/youtube/get-ytdata";
export const MAINTANCE_URL = APP_URL + "/maintenance-page";

// -- Google Map Details -- Start -- 
export const MAP_API_KEY = { key: process.env.REACT_APP_MAP_API_KEY };
export const DEFAULT_LAT_LNG = { lat: 19.113645, lng: 72.8697339, zoom: 16 };
export const JWT_USER = process.env.REACT_APP_JWT_USER;
export const JWT_PASS = process.env.REACT_APP_JWT_PASS;

// -- Google Map Details -- End -- 

export const dateFormater = (date, dFormat) => {
  return (
    <Moment format={dFormat} withTitle>
      {date}
    </Moment>
  );
};

export const gtmCurrentTime = () => {
  return (
    moment().format('YYYY-MM-DD HH:mm:ss')
    //   new Date().toISOString().
    // replace(/T/, ' ').      // replace T with a space
    // replace(/\..+/, '')     // delete the dot and everything after
  );
};

export const textTruncate = (str, length, ending) => {
  // if (length == null) {
  //   length = 100;
  // }
  // if (ending === null || ending === '...') {
  //   ending = `<span><b>. . .</b></span>`;
  // }
  length = !length ? 100 : length;
  ending = (!ending || ending === "...") ? ". . .":"";
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};

export const isTextTruncateReadMore = (str, length) => {
  if (length == null) {
    length = 100;
  }
  if (str.length > length) {
    return true;
  } else {
    return false;
  }
};

export const blogCategory = [
  {
    id: 1,
    blog_category: "Drive Safe",
    product: "Motor"
  },
  {
    id: 2,
    blog_category: "Home Protection",
    product: "Home"
  },
  {
    id: 4,
    blog_category: "Insurance Blog",
    product: "IPA"
  },
  {
    id: 6,
    blog_category: "Staying Healthy",
    product: "Health"
  },
  {
    id: 7,
    blog_category: "Travel Easy",
    product: "Travel"
  },
  {
    id: 8,
    blog_category: "infographics",
    product: ""
  },
  {
    id: 9,
    blog_category: "Secure Biking",
    product: ""
  },
  {
    id: 10,
    blog_category: "Your Finances",
    product: ""
  },
];

export const getUTMSource = () => {
  let paramPage;
  if (sessionStorage.getItem('paramPage')) {
    paramPage = sessionStorage.getItem('paramPage');
    paramPage = JSON.parse(paramPage);
  }
  let utm_source = '';
  let utm_medium = '';
  let utm_campaign = '';
  let utm_uniqueid = '';
  if (typeof paramPage.gclid !== 'undefined') {
    utm_source = 'google';
    utm_medium = typeof paramPage.utm_medium !== 'undefined' ? paramPage.utm_medium : 'cpc';
    utm_campaign = typeof paramPage.utm_campaign !== 'undefined' ? paramPage.utm_campaign : '';
  } else {
    if (typeof paramPage.utm_source !== 'undefined') {
      utm_source = paramPage.utm_source
      utm_medium = typeof paramPage.utm_medium !== 'undefined' ? paramPage.utm_medium : '';
      utm_campaign = typeof paramPage.utm_campaign !== 'undefined' ? paramPage.utm_campaign : '';
    } else {
      let pageReferrer = document.referrer;
      if (pageReferrer) {
        if (pageReferrer.indexOf('google') !== -1) {
          utm_source = 'google';
          utm_medium = 'Organic';
        } else if (pageReferrer.indexOf('sbigeneral') !== -1) {
          utm_source = 'direct';
          utm_medium = 'none';
        } else {
          utm_source = pageReferrer;
          utm_medium = 'referral';
        }
      } else {
        utm_source = 'direct';
        utm_medium = 'none';
      }

    }
  }  
  let sourceParam = [];
  sourceParam["utm_source"] = utm_source;
  sourceParam["utm_medium"] = utm_medium;
  sourceParam["utm_campaign"] = utm_campaign;
  sourceParam["utm_uniqueid"] = utm_uniqueid;
  return sourceParam;
};

export const setDataLayerHandler = () => {
  var productData  = require('./../assets/productRequestCallbackData.json');
  console.log(productData);
}
