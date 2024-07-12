import axios from 'axios';

const API_URL = 'https://busal-sb.yeems214.xyz';

export const loginAccount = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/loginAccount`, credentials);
    return response.data;
  } catch (error) {
    console.error('Error logging in', error);
    throw error;
  }
};

export const createAccount = async (accountDetails) => {
  try {
    const response = await axios.post(`${API_URL}/createAccount`, accountDetails);
    return response.data;
  } catch (error) {
    console.error('Error creating account', error);
    throw error;
  }
};
