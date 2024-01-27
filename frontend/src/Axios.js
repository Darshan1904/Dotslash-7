const axios = require('axios');
const generateCodeImage = async () => {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/images/generations',
            {
                model: "dall-e-3",
                prompt: "A cute baby sea otter"
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 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' // Replace with your OpenAI API key
                },
            }
        );

        const imageSrc = response.data.choices[0].text.trim();
        console.log(imageSrc);
    } catch (err) {
        console.log(err);
    }
}
generateCodeImage();