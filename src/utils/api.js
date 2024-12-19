import axios from 'axios';

//const API_KEY = 'YOUR_HUGGING_FACE_API_KEY'; 
//const ZEROGPT_API_KEY = import.meta.env.VITE_ZERO_GPT_KEY;

export const translateText = async (text, targetLanguage) => {
  try {
    const response = await axios.get('https://api.mymemory.translated.net/get', {
      params: {
        q: text,
        langpair: `en|${targetLanguage}`,
      },
    });
    return response.data.responseData.translatedText;
  } catch (error) {
    throw new Error(`Error during translation: ${error.response?.data || error.message}`);
  }
};

export const analyzeText = async (text) => {
  try {
    const response = await axios.post("https://gemlang.vercel.app/api/detectText", { text });
    console.log("finally na", response.data);
    return response.data;
  } catch (error) {
    throw new Error(`Error detecting text: ${error.response?.data || error.message}`);
  }
};


/* export const analyzeText = async (text) => {
  try {
    const response = await axios.post(
      "https://api.zerogpt.com/api/detect/detectText",
      {
        text: "",
        input_text: text
      },
      {
        headers: {
          ApiKey: ZEROGPT_API_KEY,
          "Content-Type": "application/json"
        }
      }
    );
    console.log("finally na", response.data)
    return response.data;
  } catch (error) {
    throw new Error(`Error detecting text: ${error.response?.data || error.message}`);
  }
}; */