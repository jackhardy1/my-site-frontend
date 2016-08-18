import React from 'react';
import _ from 'lodash';
import Note from './Note'
import CreateNote from './CreateNote'

const notes = [
  {
    task: 'one',
    isCompleted: false
  },
  {
    task: 'two',
    isCompleted: true
  },
  {
    task: 'three',
    isCompleted: true
  }
];

export default class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes
    };
  }

  renderItems() {
    return _.map(notes, (note, index) => <Note key={index} {...note}
    toggleTask = {this.toggleTask.bind(this)}/>);
  }

  render() {
    return (
        <div>
          <CreateNote
          createTask={this.createTask.bind(this)}/>
          {this.renderItems()}
        </div>
    )
  }

  createTask(task){
    notes.push ({
      task,
      isCompleted: false
    })
    this.setState({ notes })
  }

  toggleTask(task){
    const foundNote = _.find(notes, note => note.task == task)
    foundNote.isCompleted = !foundNote.isCompleted;
    this.setState({ notes })
  }
}
