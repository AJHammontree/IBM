import React, { Component } from "react";

class Add extends Component {
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

    alert(`${this.state.productName} was added.`);
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
        <p>Add an item to the inventory.</p>
        <form className="add">
          <input
            value={this.state.productId}
            name="productId"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Id"
          />
          <input
            value={this.state.productName}
            name="productName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Product Name"
          />
          <input
            value={this.state.productDescription}
            name="productDescription"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Description"
          />
          <input
            value={this.state.relatedProducts}
            name="relatedProducts"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Related Products"
          />
          <button onClick={this.handleFormSubmit}>Add</button>
        </form>
      </div>
    );
  }
}

export default Add;
