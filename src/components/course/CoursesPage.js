import React, { PropTypes } from 'react';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: { title: '' }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }
  onTitleChange(e) {
    const course = this.state.course;
    course.title = this.refs.course.value;
    this.setState({ course });
  }
  onClickSave() {
    console.log(this.state.course.title);
    this.refs.course.value = '';
  }
  render() {
    return (
      <div className="courses">
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input type="text" ref="course" onChange={this.onTitleChange} value={this.state.course.title} placeholder="Type course title" />
        <input className="btn btn-success" type="submit" value="Save" onClick={this.onClickSave} />
      </div>
    );
  }
}

export default CoursesPage;
