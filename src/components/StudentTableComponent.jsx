import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Row, Col, Spinner } from "reactstrap";
import { Button, Icon, ButtonToolbar, Message } from "rsuite";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";
import swal from "sweetalert";
import { deleteStudent } from "../actions/studentAction";

//Method
const handleClick = (dispatch, id, name) => {
  swal({
    title: "Are you sure to delete this student? " + name,
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(deleteStudent(id));
      swal("Deleted Successfully!", {
        icon: "success",
      }).then(function () {
        window.location = "/siswa";
      });
    }
  });
};

//Table
const { SearchBar } = Search;

const defaultSorted = [
  {
    dataField: "name",
    order: "desc",
  },
];

const mapStateToProps = (state) => {
  return {
    getStudentList: state.students.getStudentList,
    errorStudentList: state.students.errorStudentList,
  };
};

const StudentTableComponent = (props) => {
  //Formating Data From Firebase
  const newKeys = Object.keys(props.getStudentList);
  const newData = Object.values(props.getStudentList);
  for (var i = 0; i < newKeys.length; i++) {
    newData[i]["id"] = newKeys[i];
    newData[i]["no"] = i + 1;
  }

  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      hidden: true,
    },
    {
      dataField: "no",
      text: "No",
      sort: true,
      headerStyle: () => {
        return { width: "5%" };
      }
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
              <Button color="blue" href={"students/detail/" + row.id}>
                <Icon icon="detail" /> Detail
              </Button>
              <Button color="green" href={"students/edit/" + row.id}>
                <Icon icon="edit" /> Edit
              </Button>
              <Button
                color="red"
                onClick={() => handleClick(props.dispatch, row.id, row.name)}
              >
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
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Button color="yellow" href="/create">
                    <Icon icon="plus" /> Create New
                  </Button>
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
            <Message
              showIcon
              type="error"
              title="Error"
              description={props.errorStudentList}
            />
          ) : (
            <Spinner color="primary"></Spinner>
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(StudentTableComponent);
