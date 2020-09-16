import React from 'react';

import {
  LeftColumn,
  Profile,
  ProfileInfo,
  LinksWrapper,
} from './styles';

import profileImg from '../../assets/images/profile.jpg';

import SettingsIcon from '@material-ui/icons/Settings';
import CameraOutlinedIcon from '@material-ui/icons/CameraOutlined';
import NewReleasesOutlinedIcon from '@material-ui/icons/NewReleasesOutlined';
import AudiotrackOutlinedIcon from '@material-ui/icons/AudiotrackOutlined';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';

function Landing() {
  return (
    <LeftColumn>
      <Profile>
        <img src={profileImg} alt="Profile" />

        <ProfileInfo>
          <h1>Dany Schudler</h1>
          <a href="/">
            Edit profile
            <SettingsIcon />
          </a>
        </ProfileInfo>
      </Profile>

      <LinksWrapper>
        <div className="container">
          <a href="/">
            <CameraOutlinedIcon fontSize="large" />
              Overview
          </a>

          <a href="/">
            <NewReleasesOutlinedIcon fontSize="large" />
              News
          </a>

          <a href="/">
            <AudiotrackOutlinedIcon fontSize="large" />
              Playlists
          </a>

          <a href="/">
            <WifiTetheringIcon fontSize="large" />
              Discover
          </a>
        </div>

        <div className="container">
          <a href="/">
            <DashboardOutlinedIcon fontSize="large" />
              Dashboard
          </a>

          <a href="/">
            <ChatBubbleOutlineOutlinedIcon fontSize="large" />
              Messages
          </a>

          <a href="/">
            <NotificationsOutlinedIcon fontSize="large" />
              Notifcations
          </a>

          <a href="/">
            <PersonOutlinedIcon fontSize="large" />
              Account
          </a>
        </div>
      </LinksWrapper>
    </LeftColumn>
  );
}

export default Landing;