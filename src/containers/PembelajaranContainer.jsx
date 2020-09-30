import React, { Component } from 'react'

export default class PembelajaranContainer extends Component {
    render() {
        console.log(this.props.location.pathname);
        return (
            <div>
                <h1>Table Pembelajaran</h1>
            </div>
        )
    }
}
