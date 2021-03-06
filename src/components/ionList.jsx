import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var IonList = createReactClass({
  propTypes: {
    customClasses: PropTypes.string,
    inset: PropTypes.bool
  },
  getDefaultProps: function() {
    return {
      customClasses: '',
      inset: false
    };
  },
  render() {
    var classes = classnames(
      {'list': true,
        'list-inset': this.props.inset},
      this.props.customClasses
    );
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
});

export default IonList;

// TODO: Implement sortable / swipe functionality
