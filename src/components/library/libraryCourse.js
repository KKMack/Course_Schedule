import React, { Component } from "react";

import Icon from '../icon';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-couse__title">Problem Solving</label>
                { Icon("fas fa-check", 'library-course__icon') }
                {/*arrow component*/}
                {/*action button component*/}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare malesuada dignissim. Pellentesque ultrices porta augue, a tincidunt arcu elementum vehicula. Nulla elementum hendrerit orci in faucibus. Suspendisse gravida vestibulum nulla vel condimentum. Proin libero erat, bibendum sit amet nisi et, pulvinar dignissim neque. Donec eleifend pulvinar risus non dapibus. Cras eu porta quam, eget viverra enim. </p>
                </div>

            </div>
        )
    }
}

export default LibraryCourse;