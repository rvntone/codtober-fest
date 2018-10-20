import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Ingredient extends Component {
  constructor(props) {
    super(props);
    this.onToogle = this.onToogle.bind(this);
  }
  onToogle() {
    this.props.select();
  }
  render() {
    const { ingredient, selected } = this.props;
    return (
      <div className="form-check">
        <input
          name={ingredient.name}
          value={ingredient.name}
          className="form-check-input"
          type="checkbox"
          checked={selected}
          onChange={this.onToogle}
        />
        <label className="form-check-label" htmlFor="defaultCheck1">
          {ingredient.name} - ${ingredient.price}
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    ingredient: state.ingredients.list.find(
      ingredient => props.index === ingredient['@id'],
    ),
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ingredient);
