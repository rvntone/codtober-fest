import React, { Component } from 'react';
import { connect } from 'react-redux';

class Order extends Component {
  render() {
    const { order } = this.props;
    const { client } = order;
    return (
      <tr className="d-flex">
        <td class="col-3">{client.name}</td>
        <td className="col-4">{client.address}</td>
        <td className="col-3 text-right">{order.total}</td>
        <td className="col-2 text-center">
          <div class="text-center">
            <a
              class="btn btn-success btn-sm view-order"
              href={`/order/${this.props.index}`}
            >
              View
            </a>
          </div>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { list } = state.orders;
  return { order: list[props.index] };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Order);
