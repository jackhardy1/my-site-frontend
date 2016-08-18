import React from 'react';
import _ from 'lodash';

export default class Note extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  renderTaskSection(){
    const { task, isCompleted } = this.props;
    const taskStyle=  {
      color: isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    };
    return (
      <td style={taskStyle}
      onClick={this.props.toggleTask.bind(this, task)}> {task} </td>
    )
  }

  renderActionsSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <button>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      );
    }

    return (
            <td>
              <button onClick={this.onEditClick.bind(this)}>Edit</button>
              <button>Delete</button>
            </td>
          );
  }

  render() {
    return (
    <table>
      <thead>
        <tr>
          {this.renderTaskSection()}
          {this.renderActionsSection()}
        </tr>
      </thead>
    </table>
    )
  }

  onEditClick(){
    this.setState({ isEditing: true});
  }

  onCancelClick(){
    this.setState({ isEditing: false});
  }
}
