import React from 'react';
import {connect} from "react-redux";
import {navMenuFlag} from "../actionCreators";
import "../styles/MenuButton.css";

const MenuButton = ({navMenuFlag, navMenuToggle}) => {
  const toggleMenu =(()=>{
    document.getElementById("menu-toggle").classList.toggle("is-active");
    navMenuToggle(! navMenuFlag);
  });
  console.log(navMenuFlag)
  return (
    <div className="menu-container">
      <div id="menu-toggle" className="toggle-hamburger toggle-hamburger__animx" onClick={toggleMenu}>
      <span>menu toggle</span>
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
    navMenuToggle (flag) {
      dispatch(navMenuFlag(flag));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuButton);