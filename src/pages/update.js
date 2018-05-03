import React, { Component } from "react";

class Update extends Component {
  // Setting the component's initial state
  state = {
    productId: "",
    productName: "",
    productDescription: "",
    relatedProducts: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    alert(`${this.state.productName} was Updated.`);
    this.setState({
      productId: "",
      productName: "",
      productDescription: "",
      relatedProducts: ""
    });
  };

  render() {
    return (
      <div>
        <p>Update the inventory.</p>
        <form className="add">
          <input
            value={this.state.productId}
            name="productId"
            onChange={this.handleInputChange}
            type="text"
            placeholder={this.state.productName}
          />
          <input
            value={this.state.productName}
            name="productName"
            onChange={this.handleInputChange}
            type="text"
            placeholder={this.state.productName}
          />
          <input
            value={this.state.productDescription}
            name="productDescription"
            onChange={this.handleInputChange}
            type="text"
            placeholder={this.state.productDescription}
          />
          <input
            value={this.state.relatedProducts}
            name="relatedProducts"
            onChange={this.handleInputChange}
            type="text"
            placeholder={this.state.relatedProducts}
          />
          <button onClick={this.handleFormSubmit}>Update</button>
        </form>
      </div>
    );
  }
}

export default Update;
