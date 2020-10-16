import React from "react";
import { connect } from "react-redux";
import { Table, Spinner } from "reactstrap";
import { Grid } from "rsuite";

const mapStateToProps = (state) => {
  return {
    getSubjectsVideo: state.subjects.getSubjectsVideo,
    errorSubjectsVideo: state.subjects.errorSubjectsVideo,
  };
};

export const DetailSubjectComponent = (props) => {
  return (
    <div>
      <center>
        <Grid fluid>
          {props.getSubjectsVideo != null && props.getSubjectsVideo.length > 0
            ? props.getSubjectsVideo.map((item) => (
                <iframe
                  style={{margin:"10px"}}
                  src={item.url}
                  frameborder="1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              ))
            : console.log("")}
        </Grid>
      </center>
    </div>
  );
};

export default connect(mapStateToProps, null)(DetailSubjectComponent);
