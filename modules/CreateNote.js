import React from 'react';
import Notes from './notes';

export default class CreateNote extends React.Component {

  render() {
    return (
    <form onSubmit={this.handleCreate.bind(this)}>
      <input type="text" placeholder="write note here" ref="createInput"/>
      <button> Create </button>
    </form>
    )
  }

  handleCreate(event){
    event.preventDefault();
    this.props.createTask(this.refs.createInput.value);
  }
}
