import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchIngredients } from '../../actions/ingredients';
import Ingredient from './ingredient';
export class IngredientList extends Component {
  componentDidMount = () => {
    this.props.fetchIngredients();
  };

  onToogleIngredient(index) {
    this.props.toogleIngredient(index);
  }
  renderIngredients() {
    const { ingredientsIds, ingredientsSelected } = this.props;
    return ingredientsIds.map(ingredientsId => {
      return (
        <Ingredient
          select={this.onToogleIngredient.bind(this, ingredientsId)}
          key={ingredientsId}
          index={ingredientsId}
          selected={!!ingredientsSelected[ingredientsId]}
        />
      );
    });
  }
  render() {
    return <div>{this.renderIngredients()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    ingredientsIds: state.ingredients.list.map(ingredient => ingredient['@id']),
  };
};

const mapDispatchToProps = { fetchIngredients };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IngredientList);
