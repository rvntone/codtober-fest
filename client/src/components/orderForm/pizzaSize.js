import React, { Component } from 'react';
import { connect } from 'react-redux';

export class PizzaSize extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange() {
    this.props.select();
  }
  render() {
    const { pizaSize, selected } = this.props;
    return (
      <div className="form-check">
        <input
          name="size"
          value={pizaSize.label}
          className="form-check-input"
          type="radio"
          checked={selected}
          onChange={this.onChange}
        />
        <label className="form-check-label" htmlFor="defaultCheck1">
          {pizaSize.label} - ${pizaSize.price}
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    pizaSize: state.pizzaSizes.list.find(
      pizzaSize => props.index === pizzaSize['@id'],
    ),
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PizzaSize);
