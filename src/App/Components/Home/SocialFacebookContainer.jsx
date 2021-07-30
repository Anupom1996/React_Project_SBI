import React, { useEffect } from "react";
import * as AppConstant from '../AppConstant';

const SocialFacebookContainer = () => {
    useEffect(() => {
        let facebookPageLink = AppConstant.FB_PAGE_LINK;
        
        const divRoot = document.createElement("div");
        divRoot.setAttribute("id", "fb-root");
        document.getElementsByClassName("facebook-embed")[0].appendChild(divRoot);

        const script = document.createElement("script");
        script.setAttribute("src", "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v5.0");
        script.setAttribute("crossorigin", "anonymous");
        script.setAttribute("async",true);
        script.setAttribute("defer",true);
        document.getElementsByClassName("facebook-embed")[0].appendChild(script);

        const divPage = document.createElement("div");
        divPage.setAttribute("class", "fb-page");
        divPage.setAttribute("data-tabs", "timeline");
        divPage.setAttribute("data-href", facebookPageLink);
        divPage.setAttribute("data-small-header", true);
        divPage.setAttribute("data-hide-cover", true);
        divPage.setAttribute("data-width", "490");
        divPage.setAttribute("data-height", "450");
        divPage.setAttribute("data-adapt-container-width", true);
        document.getElementsByClassName("facebook-embed")[0].appendChild(divPage);

    }, []);

    return (
        <section className="facebookContainer">
            <div className="facebook-embed"></div>           
        </section>
    );
};

export default SocialFacebookContainer;