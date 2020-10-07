import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container } from "rsuite";
import { getThemesList } from '../actions/themeAction';
import ThemeTableComponent from '../components/ThemeTableComponent';

class ThemesListContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getThemesList());
      }

    render() {
        return (
            <div>
              <br />
              <Container>
                <center>
                  <h1 style={{margin:30}}>Daftar Tematik</h1>
                </center>
              </Container>
              <ThemeTableComponent></ThemeTableComponent>
            </div>
          );
    }
}

export default connect()(ThemesListContainer)