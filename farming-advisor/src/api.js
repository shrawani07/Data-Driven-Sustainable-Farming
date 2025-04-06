import axios from "axios";
import i18n from 'i18next'; // assuming you're using i18next
const axiosInstance = axios.create({
  // baseURL: "https://ai-farm.onrender.com",
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // Ensure this matches your backend settings
});

// Fetch all farmers
export const fetchFarmers = async (lang = "en") => {
  try {
    const response = await axiosInstance.get("/farmers", {
      headers: {
        "Accept-Language": lang,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching farmers:", error.message);
    return { error: "Failed to fetch farmers" };
  }
};


// Fetch all markets
export const fetchMarkets = async () => {
  try {
    const response = await axiosInstance.get("/markets");
    return response.data;
  } catch (error) {
    console.error("Error fetching markets:", error.message);
    return { error: "Failed to fetch markets" };
  }
};

// Get advice for a specific farm
export const getAdvice = async (farmId, lang = 'en') => {
  try {
    const response = await axiosInstance.get(`/advise/${farmId}?lang=${lang}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching advice:", error.message);
    return { error: "Failed to fetch advice" };
  }
};


// Upload farmer data
export const uploadFarmerData = async (data) => {
  const lang = i18n.language || "en"; // get selected language
  try {
    const response = await axiosInstance.post(
      `/upload/farmer_data?lang=${lang}`, // pass language as query param
      data
    );
    return response.data || "Farmer data uploaded successfully";
  } catch (error) {
    console.error("Error uploading farmer data:", error.message);
    return { error: "Failed to upload farmer data" };
  }
};

// Upload market data
export const uploadMarketData = async (data) => {
  try {
    const response = await axiosInstance.post("/upload/market_data", data);
    return response.data || "Market data uploaded successfully";
  } catch (error) {
    console.error("Error uploading market data:", error.message);
    return { error: "Failed to upload market data" };
  }
};
