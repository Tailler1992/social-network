import axios from 'axios';

const url = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {'API-KEY': 'b4996373-7bf1-42b8-9732-37c74f3aed31'}
});

const userAPI = {
  async getUsers(currentPage, pageSize) {
    const {data} = await axios.get(`${url}users?page=${currentPage}&count=${pageSize}`,
      {
        withCredentials: true
      });
    return data;
  },
  async postFollow(userID) {
    const {data} = await instance.post(`follow/${userID}`);
    return data;
  },
  async deleteFollow(userID) {
    const {data} = await instance.post(`follow/${userID}`);
    return data;
  }
};

const profileApi = {
  async getProfile(userID) {
    const {data} = await axios.get(`${url}profile/${userID}`);
    return data;
  },
  async getStatus(userID) {
    const {data} = await axios.get(`${url}profile/status/${userID}`);
    return data;
  },
  async updateStatus(status) {
    await instance.put(`profile/status/`, {status: status});
  }
};

const authApi = {
  async getAuth() {
    const {data} = await axios.get(`${url}auth/me`,
      {
        withCredentials: true
      });
    return data;
  },

  login(email, password, rememberMe) {
    return instance.post('auth/login', {email, password, rememberMe});
  },

  logout() {
    return instance.delete('auth/login');
  }
};

export {userAPI, profileApi, authApi};