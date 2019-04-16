import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavItem, NavLink } from 'reactstrap';
import { setActiveTab } from '../action';
import './HomeTabLink.css';

const mapStateToProps = state => {
  return {
      activeTab: state.selectTab.activeTab
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleTabChange: (tabId) => dispatch(setActiveTab(tabId))
  }
}

class HomeTabLink extends Component {
  render () {
    return (
      <NavItem>
        <NavLink 
          className={ (this.props.activeTab === this.props.tabId ? "active" : "") }
          onClick={() => this.props.handleTabChange(this.props.tabId)}
        > 
          <h3> {this.props.tabLabel} </h3>
        </NavLink>
      </NavItem>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeTabLink);