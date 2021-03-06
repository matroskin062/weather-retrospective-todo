import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const TodoAPI = {
  getUsers: async () => {
    const { data } = await instance.get('/users');
    return data;
  },
  getTodos: async (id) => {
    const { data } = await instance.get(`/todos?userId=${id}`);
    return data;
  },
  getTodo: async (id) => {
    const { data } = await instance.get(`/todos/${id}`);
    return data;
  },
  addTodo: async (todo) => {
    const { data } = await instance.post('/todos', todo);
    return data;
  },
  deleteTodo: (id) => {
    instance.delete(`/todos/${id}`);
  },
  updateTodoStatus: async (id, status) => {
    const { data } = await instance.patch(`/todos/${id}`, {
      completed: status,
    });
    return data;
  },
};
