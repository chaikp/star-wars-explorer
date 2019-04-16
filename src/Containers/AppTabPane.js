import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, TabPane, Spinner } from 'reactstrap';
import { toggleDetailsModal } from '../action';
import { DATA_CLASS_FILMS } from '../constants';

const mapStateToProps = state => {
  return {
      activeTab: state.selectTab.activeTab
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDetailsModal: (modalData, dataClass) => dispatch(toggleDetailsModal(modalData, dataClass))
  }
}

class AppTabPane extends Component {

  componentDidMount() {
    if(! this.props.dataProps.isLoaded) {
      this.props.dataSource();
    }
  }
  
  render() {
    if(! this.props.dataProps.isLoaded) {
      return (
        <TabPane tabId={this.props.tabId} className="text-center m-3">
          <Spinner color="dark" size="lg" />
        </TabPane> 
      )
    } else {
      const dataResponse = this.props.dataProps.dataResponse;
      const dataClass = this.props.dataClass;
      const labelsArray = dataResponse.results.map( (dataObject, index) => {
        return (
          <Button 
            color="dark" 
            className="mx-2 my-2" 
            key={index}
            onClick={() => this.props.toggleDetailsModal(dataObject, dataClass)}
          > 
            <strong>{ dataClass === DATA_CLASS_FILMS ? dataObject.title : dataObject.name} </strong>
          </Button>
        )
      })
      return (
        <TabPane tabId={this.props.tabId} className="m-3 px-3">
          <h4>{labelsArray}</h4>
        </TabPane>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppTabPane);