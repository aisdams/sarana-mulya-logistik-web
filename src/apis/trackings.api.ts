import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const searchHotels = async (fasilitasHotelCode: string) => {
  try {
    const response = await axios.get(
      `${API_URL}/fasilitas-hotel?fasilitas_hotel_code=${fasilitasHotelCode}`
    );
    return response.data; // Assuming the API returns JSON data
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
