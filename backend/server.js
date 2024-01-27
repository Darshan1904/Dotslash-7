const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://chatgpt-42.p.rapidapi.com/texttoimage',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '53288c652dmsh989ed3cf5c17917p1a6525jsn8b57c0700f3c',
    'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com'
  },
  data: {text: 'a dog'}
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}