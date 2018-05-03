import React, { Component } from "react";

const List = (props) => {

    render() {
        return (
    <div>
        <ul>
            <li> Product Id: {this.props.productId} </li>
            <li> Product name: {this.props.productName}  </li>
            <li> Product Description: {this.props.productDescription}  </li>
            <li> Related Product: {this.props.relatedProduct}  </li>
        </ul>
    </div>
        )}
}

export default List;

