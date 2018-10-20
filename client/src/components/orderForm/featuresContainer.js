import React, { Component } from 'react';
import { connect } from 'react-redux';
import IngredientList from './ingredientList';
import SizeList from './sizeList';

export class FeatureContainer extends Component {
  render() {
    const {
      onSizeChange,
      pizzaSize,
      onIngredientToogle,
      ingredientsSelected,
    } = this.props;
    return (
      <div>
        <table className="table bg-white table-bordered">
          <thead className="thead-dark">
            <tr>
              <th className="w-50">Choose a size</th>
              <th className="w-50">Choose your ingredients</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SizeList sizeChange={onSizeChange} pizzaSize={pizzaSize} />
              </td>
              <td>
                <IngredientList
                  toogleIngredient={onIngredientToogle}
                  ingredientsSelected={ingredientsSelected}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeatureContainer);
