import React, { Component } from 'react';
import { connect } from 'react-redux';

import FeatureContainer from './featuresContainer';
import ClientForm from './clientForm';
import { createOrder } from '../../actions/orders';
export class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: {
        name: '',
        address: '',
        phone: '',
      },
      ingredients: {},
      pizzaSize: null,
    };
    this.onClientChange = this.onClientChange.bind(this);
    this.onSizeChange = this.onSizeChange.bind(this);
    this.onIngredientChange = this.onIngredientChange.bind(this);
    this.onOrderClick = this.onOrderClick.bind(this);
  }
  onClientChange(attribute, value) {
    const newClient = { ...this.state.client };
    newClient[attribute] = value;
    this.setState(() => ({
      client: newClient,
    }));
  }
  onSizeChange(pizzaSize) {
    this.setState(() => ({
      pizzaSize,
    }));
  }
  onIngredientChange(ingredientIndex) {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[ingredientIndex] = !newIngredients[ingredientIndex];
    this.setState(() => ({
      ingredients: newIngredients,
    }));
  }
  onOrderClick() {
    const {
      client: { name, address, phone },
      ingredients,
      pizzaSize,
    } = this.state;
    const {
      ingredients: ingredientList,
      pizzaSizes: pizzaSizesList,
    } = this.props;
    let total = 0;
    Object.keys(ingredients).forEach(ingredientId => {
      const ingredient = ingredientList.find(
        ingredient => ingredient['@id'] === ingredientId,
      );
      total += ingredient.price;
    });
    total += pizzaSizesList.find(
      pizzaSizeItem => pizzaSizeItem['@id'] === pizzaSize,
    ).price;
    const order = {
      size: pizzaSize,
      ingredients: Object.keys(ingredients),
      total,
      client: {
        name,
        address,
        phoneNumber: phone,
      },
    };
    this.props.createOrder(order);
  }
  render() {
    const { ingredients, pizzaSize, client } = this.state;
    return (
      <div className="jumbotron">
        <h2 className="text-center">Build your own pizza!</h2>
        <ClientForm client={client} onClientChange={this.onClientChange} />
        <FeatureContainer
          pizzaSize={pizzaSize}
          onSizeChange={this.onSizeChange}
          ingredientsSelected={ingredients}
          onIngredientToogle={this.onIngredientChange}
        />
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-warning btn-lg"
            onClick={this.onOrderClick}
          >
            Order
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients.list,
    pizzaSizes: state.pizzaSizes.list,
  };
};

const mapDispatchToProps = { createOrder };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderForm);
