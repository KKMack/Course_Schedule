import React, { Component } from "react";
import { connect } from 'react-redux';

import * as actions from '../actions';
import LibraryCourse from "./libraryCourse";

class Library extends Component {

    componentWillMount() {
        this.props.fetchCourses()
    }

    renderCourses() {
        const data = this.props.courses;

        return data.map(course => {
            return <LibraryCourse/>
        })
    }

    render() {
        console.log(this.props.courses);
        return (
            <div className="library">
                <h1 className="library__title">Course Library</h1>
                <LibraryCourse/>
                <LibraryCourse/>
                <LibraryCourse/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.courses
}

export default connect(mapStateToProps, actions)(Library);