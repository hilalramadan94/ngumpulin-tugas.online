import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Row, Col, Spinner } from "reactstrap";
import { Button, Icon, ButtonToolbar, Message, IconButton } from "rsuite";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";
import swal from "sweetalert";
import { deleteStudent, getStudentsList } from "../actions/studentAction";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

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
        console.log("delete ok");
        dispatch(getStudentsList());
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

const StudentTableComponent = (props) => {
  //Formating Data From Firebase
  const newKeys = Object.keys(props.getStudentsList);
  const newData = Object.values(props.getStudentsList);
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
      },
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
      hidden: isMobile,
    },
    {
      dataField: "class.year",
      text: "Tahun",
      sort: true,
      hidden: isMobile,
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
              <Button
                color="blue"
                componentClass={Link}
                to={"students/detail/" + row.id}
              >
                <Icon icon="detail" /> Detail
              </Button>
              <Button
                color="green"
                componentClass={Link}
                to={"students/edit/" + row.id}
              >
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
      {props.getStudentsList ? (
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
                  <IconButton
                    color="yellow"
                    componentClass={Link}
                    to="/students/create"
                    icon={<Icon icon="plus" />}
                  >
                    <span className="d-none d-sm-block">Create New</span>
                  </IconButton>
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
          {props.errorStudentsList ? (
            <Message
              showIcon
              type="error"
              title="Error"
              description={props.errorStudentsList}
            />
          ) : (
            <Spinner color="primary"></Spinner>
          )}
        </div>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    getStudentsList: state.students.getStudentsList,
    errorStudentsList: state.students.errorStudentsList,
  };
};

export default connect(mapStateToProps, null)(StudentTableComponent);
