import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import IonButton from './ionButton';

var IonNavBackButton = createReactClass({
  propTypes: {
    customClasses: PropTypes.string
  },
  getDefaultProps: function() {
    return {
      customClasses: ''
    };
  },
  render() {
    var classes = classnames(
      this.props.customClasses,
      "buttons back-button pull-left"
    );
    return (
      <IonButton {...this.props} {...this.state} customClasses={classes} backButton={true}>
        { this.props.children }
      </IonButton>
    );
  }
});

export default IonNavBackButton;
