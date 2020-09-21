import React from 'react';
import GlobeIcon from '@material-ui/icons/Language';
import SearchIcon from '@material-ui/icons/SearchRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

const Header =  () => {
    return (
      <div className="header">
        <img className="header-logo" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="air-bnb-logo" />

        <div className="search-container">
          <input type="text" placeholder="Start your search" />
          <SearchIcon className="search-svg" />
        </div>

        <div className="mini">
        <div className="mini-txt-ctn">
          <p className="mini-txt">Become a host</p>
        </div>
        <div className="mini-center">
          <GlobeIcon />
          <ExpandMoreRoundedIcon />
        </div>
        <div className="mini-right">
          <MenuRoundedIcon />
          <AccountCircleRoundedIcon className="avatar" />
        </div>
        </div>
      </div>
    )
};

export default Header;