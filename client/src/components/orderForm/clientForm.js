import React, { Component } from 'react';

export default class ClientForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
  }
  onChangeName(event) {
    this.props.onClientChange('name', event.target.value);
  }
  onChangeAddress(event) {
    this.props.onClientChange('address', event.target.value);
  }
  onChangePhone(event) {
    this.props.onClientChange('phone', event.target.value);
  }
  render() {
    const { client } = this.props;
    return (
      <div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Name: </label>
          <div className="col-sm-10">
            <input
              required
              name="name"
              type="text"
              className="form-control"
              placeholder="Name"
              value={client.name}
              onChange={this.onChangeName}
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Address: </label>
          <div className="col-sm-10">
            <input
              required
              name="address"
              type="text"
              className="form-control"
              placeholder="Address"
              value={client.address}
              onChange={this.onChangeAddress}
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Phone #: </label>
          <div className="col-sm-10">
            <input
              required
              name="phone"
              type="text"
              className="form-control"
              placeholder="Phone"
              value={client.phone}
              onChange={this.onChangePhone}
            />
          </div>
        </div>
      </div>
    );
  }
}
