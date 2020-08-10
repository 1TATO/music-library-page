import React from 'react';

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

import './styles.css';

function Landing() {
  return (
    <div id="page-landing">
      <aside id="page-landing-aside">
        <div id="profile">
          <img src={profileImg} alt="Profile" />
          <div className="content">
            <h1>Dany Schudler</h1>
            <a href="#">
              <p>Edit profile</p>
              <SettingsIcon />
            </a>
          </div>
        </div>

        <div id="wrapper-links">
          <div id="links" className="app-links">
            <a href="#">
              <CameraOutlinedIcon fontSize="large" />
              <p>Overview</p>
            </a>

            <a href="#">
              <NewReleasesOutlinedIcon fontSize="large" />
              <p>News</p>
            </a>

            <a href="#">
              <AudiotrackOutlinedIcon fontSize="large" />
              <p>Playlists</p>
            </a>

            <a href="#">
              <WifiTetheringIcon fontSize="large" />
              <p>Discover</p>
            </a>
          </div>

          <div id="links" className="personal-links">
            <a href="#">
              <DashboardOutlinedIcon fontSize="large" />
              <p>Dashboard</p>
            </a>

            <a href="#">
              <ChatBubbleOutlineOutlinedIcon fontSize="large" />
              <p>Messages</p>
            </a>

            <a href="#">
              <NotificationsOutlinedIcon fontSize="large" />
              <p>Notifications</p>
            </a>

            <a href="#">
              <PersonOutlinedIcon fontSize="large" />
              <p>Account</p>
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Landing;