import React from 'react';
import { TodoAPI } from '../../../api/TodoAPI';

const withTodoItem = (Component) => {
  class WithTodoItem extends React.Component {
    state = {
      completed: this.props.completed,
    };

    updateStatus(id) {
      TodoAPI.updateTodoStatus(id, !this.state.completed);
      this.setState((state) => ({
        ...state,
        completed: !state.completed,
      }));
    }

    render() {
      return (
        <Component
          {...this.props}
          completed={this.state.completed}
          updateStatus={this.updateStatus.bind(this)}
        />
      );
    }
  }
  return WithTodoItem;
};

export default withTodoItem;
