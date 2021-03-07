import React from 'react';
import { TodoAPI } from '../../../api/TodoAPI';

const withTodoItem = (Component) => {
  class WithTodoItem extends React.Component {
    state = {
      completed: this.props.completed,
    };

    toggleCompleted() {
      const { id } = this.props;
      const { completed } = this.state;
      TodoAPI.updateTodoStatus(id, !completed);
      this.setState((state) => ({
        ...state,
        completed: !completed,
      }));
    }

    makeBold(item, keyword) {
      const re = new RegExp(`\\b${keyword}`);
      const boldText = item.replace(re, '<b>' + keyword + '</b>');
      return { __html: boldText };
    }

    render() {
      return (
        <Component
          {...this.props}
          completed={this.state.completed}
          toggleCompleted={this.toggleCompleted.bind(this)}
          makeBold={this.makeBold}
        />
      );
    }
  }
  return WithTodoItem;
};

export default withTodoItem;
