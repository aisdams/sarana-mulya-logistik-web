import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_USERNAME = process.env.NEXT_AUTH_USERNAME!;
const API_PASSWORD = process.env.NEXT_AUTH_PASSWORD!;

export const trackings = async (receipt_no: string) => {
  try {
    const username = API_USERNAME;
    const password = API_PASSWORD;

    const response = await axios.get(
      `${API_URL}/tracking/public/${receipt_no}`,
      {
        headers: {
          Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
