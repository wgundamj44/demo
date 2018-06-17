import axios from 'axios';

const apiClient = {
  get(url: string, config?: object) {
    return axios({
      url,
      baseURL: 'http://localhost:5000',
      ...config,
    });
  },
};

export default apiClient;
