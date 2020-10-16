import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Row, Col, Spinner } from "reactstrap";
import { Button, Icon, ButtonToolbar, Message, IconButton } from "rsuite";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
    getThemesList: state.themes.getThemesList,
    errorThemesList: state.themes.errorThemesList,
  };
};

const ThemeTableComponent = (props) => {
  //Formating Data From Firebase
  const newKeys = Object.keys(props.getThemesList);
  const newData = Object.values(props.getThemesList);
  var currentdate = new Date();
  currentdate =
    currentdate.getDate() +
    "/" +
    currentdate.getMonth() +
    "/" +
    currentdate.getFullYear();
  for (var i = 0; i < newKeys.length; i++) {
    newData[i]["id"] = newKeys[i];
    newData[i]["no"] = i + 1;
    newData[i]["finishdate"] = currentdate;
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
      dataField: "link",
      text: "Subtema",
      headerStyle: () => {
        return { width: "40%" };
      },
      formatter: (rowContent, row) => {
        return (
          <div className="text-center">
            <ButtonToolbar>
              &nbsp;
              <Button
                color="primary"
                disabled={row.id > 2 ? true : false}
                href={"themes/detail/" + row.id}
              >
                <Icon icon={row.id > 2 ? "close" : "check"} /> 1
              </Button>
              <Button
                color="primary"
                disabled={row.id > 2 ? true : false}
                href={"themes/detail/" + row.id}
              >
                <Icon icon={row.id > 2 ? "close" : "check"} /> 2
              </Button>
              <Button
                color="primary"
                disabled={row.id > 2 ? true : false}
                href={"themes/detail/" + row.id}
              >
                <Icon icon={row.id > 2 ? "close" : "check"} /> 3
              </Button>
            </ButtonToolbar>
          </div>
        );
      },
    },
    {
      dataField: "finishdate",
      text: "Tanggal Selesai",
      sort: true,
    },
    {
      dataField: "link",
      text: "Action",
      headerStyle: () => {
        return { width: "10%" };
      },
      formatter: (rowContent, row) => {
        return (
          <div>
            <ButtonToolbar>
              <IconButton
                color="blue"
                href={"themes/detail/" + row.id}
                icon={<Icon icon="detail" />}
              >
                <span className="d-none d-sm-block">Detail</span>
              </IconButton>
            </ButtonToolbar>
          </div>
        );
      },
    },
  ];

  return (
    <Container className="container-fluid">
      {props.getThemesList ? (
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
                  {/* <IconButton
                    color="yellow"
                    children={Link}
                    to="/themes/create"
                    icon={<Icon icon="plus" />}
                  >
                    <span className="d-none d-sm-block">Create New</span>
                  </IconButton>
                  &nbsp;
                  <IconButton
                    color="green"
                    href="/themes/create"
                    icon={<Icon icon="plus" />}
                  >
                    <span className="d-none d-sm-block">Refresh</span>
                  </IconButton> */}
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
          {props.errorThemesList ? (
            <Message
              showIcon
              type="error"
              title="Error"
              description={props.errorThemesList}
            />
          ) : (
            <Spinner color="primary"></Spinner>
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(ThemeTableComponent);
