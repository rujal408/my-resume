import React from 'react'
import './App.css'
import './Styles/SideNav.css'
import './Styles/About-me.css'
import './Styles/Academic.css'
import './Styles/Skills.css'
import './Styles/Project.css'
import Contents from './Components/Contents'
import ProfilePic from './Components/ProfilePic'
import Sidenav from './Components/Sidenav'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Sidenav />
          <ProfilePic />
          <Contents />
        </div>
      </div>
    );
  }
}

export default App;
