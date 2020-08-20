import React from 'react';

import {
  PageLanding,
  LeftColumn,
  Profile,
  ProfileInfo,
  LinksWrapper,
  Links,
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
    <PageLanding>
      <LeftColumn>
        <Profile>
          <img src={profileImg} alt="Profile" />
          <ProfileInfo>
            <h1>Dany Schudler</h1>
            <div>
              <p>Edit profile</p>
              <SettingsIcon />
            </div>
          </ProfileInfo>
        </Profile>

        <LinksWrapper>
          <Links>
            <CameraOutlinedIcon fontSize="small" />
            <p>Overview</p>
          </Links>

          <Links>
            <NewReleasesOutlinedIcon fontSize="small" />
            <p>News</p>
          </Links>

          <Links>
            <AudiotrackOutlinedIcon fontSize="small" />
            <p>Playlists</p>
          </Links>

          <Links>
            <WifiTetheringIcon fontSize="small" />
            <p>Discover</p>
          </Links>

          <Links>
            <DashboardOutlinedIcon fontSize="small" />
            <p>Dashboard</p>
          </Links>

          <Links>
            <ChatBubbleOutlineOutlinedIcon fontSize="small" />
            <p>Messages</p>
          </Links>

          <Links>
            <NotificationsOutlinedIcon fontSize="small" />
            <p>Notifications</p>
          </Links>

          <Links>
            <PersonOutlinedIcon fontSize="small" />
            <p>Account</p>
          </Links>
        </LinksWrapper>
      </LeftColumn>
    </PageLanding >
  );
}

export default Landing;