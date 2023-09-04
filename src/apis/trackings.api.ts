import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_USERNAME = process.env.NEXT_AUTH_USERNAME!;
const API_PASSWORD = process.env.NEXT_AUTH_PASSWORD!;

// Fungsi ini akan menggunakan username dan password dari .env.local
export const searchHotels = async (receipt_no: string) => {
  try {
    const response = await axios.get(
      `${API_URL}/tracking/public/?receipt_no=${receipt_no}`,
      {
        auth: {
          username: API_USERNAME,
          password: API_PASSWORD,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
