import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import PostMessage from "../components/message/PostMessage";

import ProfileFeed from '../components/profileFeed/ProfileFeed'
import Userlist from "../components/userlist/Userslist";

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2 className="profile-title">Profile</h2>

        <PostMessage />
        <br/>
        
        <Userlist />

        <ProfileFeed />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
