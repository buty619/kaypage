import React from 'react';
import {connect} from "react-redux";
import MenuButton from '../components/MenuButton'
import "../styles/navbar.css";

const NavBar = ({navMenuFlag}) => {
  return (
    <div className="nav animated fadeInRight">
      <MenuButton />
      <div className="nav-container">    
        <ul className="nav-menu-list">
          <li>primero</li>
          <li>segundo</li>
          <li>tercero</li>
          <li>cuarto</li>
        </ul>
        <ul className = {`nav-menu  animated zoomIn ${navMenuFlag?null:"zoomOut"}`}>
          <li><i className="fas fa-coffee" onMouseEnter={}></i></li>
          <li><i className="fas fa-chart-line"></i></li>
          <li><i className="fas fa-envelope"></i></li>
          <li><i className="fas fa-lemon last"></i></li>
        </ul>
      </div>
    </div>    
  );
}

const mapStateToProps = state => {
  return {
    navMenuFlag: state.navMenuFlag
  };
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);