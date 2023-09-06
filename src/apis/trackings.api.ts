import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_USERNAME = process.env.NEXT_AUTH_USERNAME!;
const API_PASSWORD = process.env.NEXT_AUTH_PASSWORD!;

export const trackings = async (receipt_no: string) => {
  try {
    // Buat string kredensial dengan menggabungkan username dan password
    const credentials = `${API_USERNAME}:${API_PASSWORD}`;

    // Encode string kredensial menggunakan Base64
    const base64Credentials = btoa(credentials);

    // Atur header Authorization dengan nilai 'Basic' + string kredensial yang dienkripsi
    const headers = {
      Authorization: `Basic ${base64Credentials}`,
    };

    const response = await axios.get(
      `${API_URL}/tracking/public/${receipt_no}`,
      {
        headers, // Atur header Authorization
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// `${API_URL}/tracking/no_resi=${receipt_no}&tanggal`,
