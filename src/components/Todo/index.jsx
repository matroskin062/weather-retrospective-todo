import React, { Component } from 'react';
import { TodoAPI } from '../../api/TodoAPI';
import AddTodo from './AddTodo/AddTodo';
import SelectUser from './SelectUser/SelectUser';
import TodoItem from './TodoItem/TodoItem';
import TodoSearch from './TodoSearch/TodoSearch';

import styles from './TodoList.module.css';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      todos: [],
      selectedUser: null,
      searchQuery: null,
    };

    this.selectUser = this.selectUser.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  async getUsers() {
    const users = await TodoAPI.getUsers();
    this.setState((state) => ({
      ...state,
      users,
    }));
  }

  async getTodos(id) {
    const todos = await TodoAPI.getTodos(id);
    this.setState((state) => ({
      ...state,
      todos,
    }));
  }

  selectUser(id) {
    this.setState(
      (state) => ({
        ...state,
        selectedUser: id,
      }),
      () => {
        this.getTodos(this.state.selectedUser);
      }
    );
  }

  async addTodo(title) {
    const todo = {
      title,
      userId: parseInt(this.state.selectedUser),
      completed: false,
    };

    const response = await TodoAPI.addTodo(todo);

    this.setState((state) => ({
      ...state,
      todos: [...state.todos, response],
    }));
  }

  onSearch(string) {
    this.setState((state) => ({
      ...state,
      searchQuery: string,
    }));
  }

  render() {
    const { users, todos, selectedUser } = this.state;
    const { selectUser, addTodo } = this;

    return (
      <div className={styles.Container}>
        <div className={styles.Controls}>
          <SelectUser users={users} selectUser={selectUser} />
          {selectedUser && (
            <>
              <AddTodo addTodo={addTodo} />
              <TodoSearch onSearch={this.onSearch} />
            </>
          )}
        </div>
        {todos.map((todo) => (
          <TodoItem {...todo} key={todo.id} bold={this.state.searchQuery} />
        ))}
      </div>
    );
  }
}
