import React from "react";
import ReactHtmlParser from "react-html-parser";
import * as AppConstant from "../../AppConstant";
import { Link } from "react-router-dom";
const CardLink = ({
  imageUrl,
  imageName,
  title,
  description,
  link,
  date,
}) => {
  return (
    <Link to={link ? link : "/"} className="kn-blog-main-conet">
      <div className="kn-blog-main-conet">
        <figure>
          <img src={AppConstant.IMG_BASE_URL + imageUrl} alt={`${imageName}`} />
        </figure>
        <div className="kn-blog-belwo-conet">
          {date ? <span className="kn-blg-dte">{date}</span> : null}
          <h4 className="kn-blg-hed">{ReactHtmlParser(title)}</h4>
          <div className="kn-blg-cont">{description}</div>
        </div>
      </div>
    </Link>
  );
};

export default CardLink;
