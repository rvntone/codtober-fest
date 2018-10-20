import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../../actions/orders';
import Order from './order';

export class OrderList extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }
  renderOrders() {
    const { countList } = this.props;
    const list = [];
    for (let index = 0; index < countList; index++) {
      list.push(<Order index={index} key={index} />);
    }
    return list;
  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <div id="order-list">
            <h2 className="text-center">Orders</h2>
            <table
              id="orders"
              className="table bg-white table-bordered table-hover"
            >
              <thead className="thead-dark">
                <tr className="d-flex">
                  <th className="col-3">Name</th>
                  <th className="col-4">Address</th>
                  <th className="col-3 text-right">Total Sale</th>
                  <th className="col-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>{this.renderOrders()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  countList: state.orders.list.length,
});

const mapDispatchToProps = { fetchOrders };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderList);
