import React, { Component } from "react";
//import TableComponent from "../components/tableComponent";
//import { connect } from "react-redux";
//import { getProductList } from "../actions/productAction";

class HomeContainer extends Component {
//   componentDidMount() {
//     this.props.dispatch(getProductList());
//   }
  //Ketika component dipasang
  //inject data dari API ke reducer

  render() {
    return (
      <div>
        {/* <TableComponent></TableComponent> */}
      </div>
    );
  }
}

export default HomeContainer;
//export default connect()(HomeContainer);
//connect untuk menghubungkan ke reducers
