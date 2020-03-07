import axios from 'axios';

const client = axios.create({
  baseURL:"http://localhost:3000",
  headers: {
    Accept: "application/json",
    'Content-Type':"application/json; charset=UTF-8",
  },
})
export default {
  getUsers(params={}){
    return client.get('/users',{ params });
  },
  getUser(id){
    return client.get('/users/${id}');
  },

  createUser(data){
    return client.post('/users', data);
  },
  updateUser(id , data){
    return client.put('/users/${id}', data);
  },
  deleteUser(id){
    return client.delete('/users/${id}');
  }
}