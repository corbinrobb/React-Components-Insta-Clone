// You do not need to change any code in this file
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faCircle, faCompass } from '@fortawesome/free-regular-svg-icons'
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="search-bar-wrapper">
      <div className="logos">
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className="instagram">
          <img src="https://fontmeme.com/images/instagram-new-logo.png" />
        </div>
      </div>
      <form className="search-form">
        <input
          type="text"
          value={props.searchTerm}
          placeholder="Search"
          onChange={e => props.setSearchTerm(e.target.value)}
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
