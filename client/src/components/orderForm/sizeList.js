import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPizzaSizes } from '../../actions/pizzaSize';
import PizzaSize from './pizzaSize';

export class PizzaSizeList extends Component {
  componentDidMount = () => {
    this.props.fetchPizzaSizes();
  };
  onSelectPizzaSize(index) {
    this.props.sizeChange(index);
  }
  renderIngredients() {
    const { sizesIds, pizzaSize } = this.props;
    return sizesIds.map(sizesId => {
      return (
        <PizzaSize
          select={this.onSelectPizzaSize.bind(this, sizesId)}
          selected={sizesId === pizzaSize}
          key={sizesId}
          index={sizesId}
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
    sizesIds: state.pizzaSizes.list.map(pizzaSize => pizzaSize['@id']),
  };
};

const mapDispatchToProps = { fetchPizzaSizes };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PizzaSizeList);
