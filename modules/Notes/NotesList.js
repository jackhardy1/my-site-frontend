import React from 'react';
import _ from 'lodash';
import Note from './Note';
import CreateNote from './CreateNote';

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

export default class NotesList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      notes
    };
  }

  renderItems() {
    return _.map(notes, (note, index) => <Note key={index} {...note}
    toggleTask = {this.toggleTask.bind(this)}
    saveTask = {this.saveTask.bind(this)}
    deleteTask = {this.deleteTask.bind(this)}/>);
  }

  render() {
    return (
        <div>
          <CreateNote notes={notes}
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
    const foundNote = _.find(notes, note => note.task === task)
    foundNote.isCompleted = !foundNote.isCompleted;
    this.setState({ notes })
  }

  saveTask(oldTask, newTask) {
    const foundNote = _.find(notes, note => note.task === oldTask)
    foundNote.task = newTask;
    this.setState({ notes })
  }

  deleteTask(taskToDelete) {
    _.remove(notes, note => note.task === taskToDelete);
    this.setState({ notes })
  }
}
