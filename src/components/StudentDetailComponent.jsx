import React from "react";
import { connect } from "react-redux";
import { Table, Spinner } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getStudentDetail: state.students.getStudentDetail,
    errorStudentDetail: state.students.errorStudentDetail,
  };
};

export const DetailStudentComponent = (props) => {
  return (
    <div>
      {props.getStudentDetail ? (
        <Table striped>
          <tbody>
            <tr>
              <td width="25%">ID</td>
              <td>: {props.id}</td>
            </tr>
            <tr>
              <td>Nama</td>
              <td>: {props.getStudentDetail.name}</td>
            </tr>
            <tr>
              <td>Kelas </td>
              <td>: {props.getStudentDetail.class.name}</td>
            </tr>
            <tr>
              <td>Tahun </td>
              <td>: {props.getStudentDetail.class.year}</td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <div className="text-center">
          <Spinner color="primary"></Spinner>
        </div>
      )}
    </div>
  );
};

export default connect(mapStateToProps, null)(DetailStudentComponent);
