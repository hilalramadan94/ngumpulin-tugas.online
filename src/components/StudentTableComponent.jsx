import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Row, Col, Spinner  } from "reactstrap";
import { Button, Icon, Alert, ButtonToolbar } from "rsuite";
import {
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//import swal from "sweetalert";
//import { deleteStudent } from "../actions/studentAction";

//Method
// const handleClick = (dispatch, id) => {
//   swal({
//     title: "Are you sure to delete this product?",
//     icon: "warning",
//     buttons: true,
//     dangerMode: true,
//   }).then((willDelete) => {
//     if (willDelete) {
//       dispatch(deleteStudent(id));
//       swal("Deleted Successfully!", {
//         icon: "success",
//       });
//     } else {
//       swal("Delete Canelled!");
//     }
//   });
// };

//Table
const { SearchBar } = Search;

// const defaultSorted = [
//   {
//     dataField: "name",
//     order: "desc",
//   },
// ];

const mapStateToProps = (state) => {
  return {
    getStudentList: state.students.getStudentList,
    errorStudentList: state.students.errorStudentList,
  };
};

const StudentTableComponent = (props) => {
  //Formating Data From Firebase
  const newKeys = Object.keys(props.getStudentList)
  const newData = Object.values(props.getStudentList)
  for(var i = 0; i < newKeys.length; i++)
  newData[i]['id'] = newKeys[i];

  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      hidden: true,
    },
    {
      dataField: "",
      text: "Nama",
      sort: true,
      headerStyle: () => {
        return { width: "5%" };
      },
      formatter: (rowContent, row, rowIndex) => {
        return rowIndex+1}
    },
    {
      dataField: "name",
      text: "Nama",
      sort: true,
    },
    {
      dataField: "class.name",
      text: "Kelas",
      sort: true,
    },
    {
      dataField: "link",
      text: "Action",
      headerStyle: () => {
        return { width: "25%" };
      },
      formatter: (rowContent, row) => {
        return (
          <div>
            <ButtonToolbar>
              <Button color="blue" href={"detail/" + row.id}>
                <Icon icon="detail" /> Detail
              </Button>
              <Button color="green" href={"detail/" + row.id}>
                <Icon icon="edit" /> Edit
              </Button>
              <Button color="red" onClick={() => Alert.error("Data Berhasil Didelete")}>
                <Icon icon="trash" /> Delete
              </Button>
            </ButtonToolbar>
          </div>
        );
      },
    },
  ];

  return (
    <Container>
      {props.getStudentList ? (
        <ToolkitProvider
          bootstrap4
          keyField="name"
          data={newData}
          columns={columns}
          //defaultSorted={defaultSorted}
          //search
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to={"/create"}>
                    <Button color="dark" className="mr-2">
                      <FontAwesomeIcon icon={faPlus} />
                      Create New
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <div className="float-right">
                    <SearchBar {...props.searchProps} />
                  </div>
                </Col>
              </Row>
              <br />

              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {props.errorStudentList ? (
            <h2>{props.errorStudentList}</h2>
          ) : (
            <Spinner color="primary"></Spinner>
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(StudentTableComponent);
