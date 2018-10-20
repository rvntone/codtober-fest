import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../../actions/orders';
import { fetchPizzaSizes } from '../../actions/pizzaSize';
import { fetchIngredients } from '../../actions/ingredients';

export class Order extends Component {
  componentDidMount() {
    this.props.fetchPizzaSizes();
    this.props.fetchIngredients();
    this.props.fetchOrders();
  }
  render() {
    const { order, pizzaSize, ingredients } = this.props;
    if (!order) {
      return <div>Loading...</div>;
    }
    console.log(pizzaSize, ingredients);
    const { client } = order;
    return (
      <div>
        <h2 id="title" className="text-center">
          Order Detail - {client.name}
        </h2>
        <br />

        <div id="contact-info">
          <div className="row">
            <label className="col-sm-3">Name: </label>
            <h5> {client.name} </h5>
          </div>

          <div className="row">
            <label className="col-sm-3">Address: </label>
            <h5>{client.address} </h5>
          </div>

          <div className="row">
            <label className="col-sm-3">Phone #: </label>
            <h5> {client.phoneNumber} </h5>
          </div>
        </div>

        <hr />

        <table className="table bg-white table-bordered">
          <thead className="thead-dark">
            <tr>
              <th className="w-50">Size</th>
              <th className="w-50">Ingredients</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p id="size"> {pizzaSize.label}</p>
              </td>
              <td id="ingredients">Extra Cheese $1</td>
            </tr>
            <tr className="table-active">
              <th id="total" className="text-right" colSpan="2">
                Total: ${order.total}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { list } = state.orders;
  const order = list[props.match.params.id];
  let pizzaSize = null;
  let ingredients = [];
  if (order) {
    const { list: ingredientList } = state.ingredients;
    const { list: pizzaSizeList } = state.pizzaSizes;
    pizzaSize = pizzaSizeList.find(
      pizzaSizeItem => pizzaSizeItem['@id'] === order.size,
    );
    ingredients = ingredientList.filter(ingredientItem =>
      order.ingredients.includes(ingredientItem['@id']),
    );
  }
  return { order, pizzaSize, ingredients };
};
const mapDispatchToProps = { fetchOrders, fetchPizzaSizes, fetchIngredients };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Order);
