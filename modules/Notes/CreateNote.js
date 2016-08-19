import React from 'react';
import NotesList from './NotesList';

export default class CreateNote extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  renderError() {
    if (!this.state.error) { return null; }
      return <div style={{ color: 'red' }}> {this.state.error} </div>;
  }

  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="write note here" ref="createInput"/>
        <button> Create </button>
        {this.renderError()}
      </form>
    );
  }

  handleCreate(event){
    event.preventDefault();

    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);

    if(validateInput) {
      this.setState({ error: validateInput });
      return;
    }

    this.props.createTask(task);
    this.refs.createInput.value = '';
  }

  validateInput(task) {
    console.log(task);
    console.log(this.props.notes);
    if (!task) {
      return 'please enter a task'
    } else if (_.find(this.props.notes, note => note.task === task)) {
      return 'Task already exists!'
    } else {
      return null
    }
  }
}
