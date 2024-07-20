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

export const fetchAllAccounts = async () => {
  try {
    const response = await axios.get(`${API_URL}/displayAllAccounts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching accounts', error);
    throw error;
  }
};

export const deleteAccount = async (email) => {
  try {
    const response = await axios.delete(`${API_URL}/deleteUserByEmail/${email}`);
    return response.data;
  } catch (error) {
    console.error('Error Deleting account', error);
    throw error;
  }
};

export const createInventory = async (inventoryDetails) => {
  try {
    const response = await axios.post(`${API_URL}/createInventory`, inventoryDetails);
    return response.data;
  } catch (error) {
    console.error('Error creating inventory', error);
    throw error;
  }
};

export const fetchAllInventory = async () => {
  try {
    const response = await axios.get(`${API_URL}/displayAllInventory`);
    return response.data;
  } catch (error) {
    console.error('Error fetching inventory', error);
    throw error;
  }
};

export const deleteInventory = async (email) => {
  try {
    const response = await axios.delete(`${API_URL}/deleteInventoryByEmail/${email}`);
    return response.data;
  } catch (error) {
    console.error('Error Deleting account', error);
    throw error;
  }
};

export const createSubscription = async (subscriptionDetails) => {
  try {
    const response = await axios.post(`${API_URL}/createSubscription`, subscriptionDetails);
    return response.data;
  } catch (error) {
    console.error('Error creating inventory', error);
    throw error;
  }
};

export const fetchAllSubscriptions = async () => {
  try {
    const response = await axios.get(`${API_URL}/displayAllSubscriptions`);
    return response.data;
  } catch (error) {
    console.error('Error fetching inventory', error);
    throw error;
  }
};

export const deleteSubscription = async (email) => {
  try {
    const response = await axios.delete(`${API_URL}/deleteSubscriptionByEmail/${email}`);
    return response.data;
  } catch (error) {
    console.error('Error Deleting account', error);
    throw error;
  }
};

