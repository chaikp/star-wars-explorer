import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge } from 'reactstrap';
import { reloadDetailsModal } from '../action';

const mapDispatchToProps = (dispatch) => {
  return {
    reloadDetailsModal: (modalData, dataClass) => dispatch(reloadDetailsModal(modalData, dataClass))
  }
}

class BadgeLink extends Component {
  render() {
    return (
      <Badge 
        color="dark"  className="mr-1"
        href="#"
        onClick={() => this.props.reloadDetailsModal(this.props.dataObject, this.props.dataClass)}
        >
        { this.props.badgeText }
      </Badge>
    )
  }
}

export default connect(null, mapDispatchToProps)(BadgeLink);