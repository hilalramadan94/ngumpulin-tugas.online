import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Row, Col, Spinner } from "reactstrap";
import { Button, Icon, ButtonToolbar, Message } from "rsuite";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { connect } from "react-redux";

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
    getSubjectsList: state.subjects.getSubjectsList,
    errorSubjectsList: state.subjects.errorSubjectsList,
  };
};

const SubjectTableComponent = (props) => {
  //Formating Data From Firebase
  const newKeys = Object.keys(props.getSubjectsList);
  const newData = Object.values(props.getSubjectsList);
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
      dataField: "link",
      text: "Action",
      headerStyle: () => {
        return { width: "25%" };
      },
      formatter: (rowContent, row) => {
        return (
          <div>
            <ButtonToolbar>
              <Button color="blue" href={"subjects/detail/" + row.name}>
                <Icon icon="detail" /> Detail
              </Button>
            </ButtonToolbar>
          </div>
        );
      },
    },
  ];

  return (
    <Container>
      {props.getSubjectsList ? (
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
                  <div className="float-right">
                    <SearchBar {...props.searchProps} />
                  </div>
                </Col>
              </Row>
              <br />

              <BootstrapTable
                {...props.baseProps}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {props.errorSubjectsList ? (
            <Message
              showIcon
              type="error"
              title="Error"
              description={props.errorSubjectsList}
            />
          ) : (
            <Spinner color="primary"></Spinner>
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(SubjectTableComponent);
