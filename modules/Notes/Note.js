import React from 'react';
import _ from 'lodash';

export default class Note extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isEditing: false};
  }

  renderTaskSection(){
    const { task, isCompleted } = this.props;
    const taskStyle=  {
      color: isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    };

    if(this.state.isEditing) {
      return (
        <td>
            <form onSubmit={this.onSaveClick.bind(this)}>
              <input type="text" defaultValue={task} ref="editInput"/>
            </form>
        </td>
      );
    }

    return (
      <td style={taskStyle}
      onClick={this.props.toggleTask.bind(this, task)}> {task} </td>
    )
  }

  renderActionsSection() {

    if (this.state.isEditing) {
      return (
        <td>
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      );
    }

    return (
      <td>
        <button className="edit btn btn-sm btn-primary glyphicon glyphicon-pencil"
          onClick={this.onEditClick.bind(this)}>Edit</button>
        <button className="delete btn btn-sm btn-danger glyphicon glyphicon-remove"
          onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
      </td>
    );
  }

  render() {
    return (
    <div className="note">
      <table>
        <thead>
          <tr>
            {this.renderTaskSection()}
            {this.renderActionsSection()}
          </tr>
        </thead>
      </table>
    </div>
    )
  }

  onEditClick(){
    this.setState({ isEditing: true});
  }

  onCancelClick(){
    this.setState({ isEditing: false});
  }

  onSaveClick(event){
    event.preventDefault();

    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;

    this.props.saveTask(oldTask,newTask);
    this.setState({ isEditing: false });
  }
}
