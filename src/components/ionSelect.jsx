import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var IonSelect= createReactClass({
  propTypes: {
    customClasses: PropTypes.string,
    label: PropTypes.string,
    handleChange: PropTypes.func,
    options:PropTypes.array,
    defaultValue: PropTypes.string
  },
  getInitialState(){
    return {
      value: this.props.defaultValue
    };
  },
  getDefaultProps: function() {
    return {
      customClasses: '',
      label: '',
      options:[],
      handleChange: () => {},
      value: ''
    };
  },
  handleChange(event){
    if(this.props.handleChange)
      this.props.handleChange(event.target.value)
    this.setState({
      value: event.target.value
    })
  },
  //Render our props `options`
  renderOptions(){
    var list = this.props.options.map((option, index) => {
      return <option key={index} value={option}>{option}</option>
    });
    return list
  },
  render() {
    var classes = classnames(
      {'item': true},
      {'item-input':true},
      {'item-select': true},
      this.props.customClasses
    );
    return (
      <div>
        <label className={classes}>
          <div className='input-label'>
            {this.props.label}
          </div>
          <select value={this.state.value} onChange={this.handleChange}>
            {this.renderOptions()}
          </select>
        </label>
          {this.props.children}
      </div>
    );
  }
});

export default IonSelect;
