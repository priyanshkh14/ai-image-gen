import * as dotenv from 'dotenv';
import { createError } from '../error.js';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

// Set the OpenAI API key from environment variables
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Controller to generate an AI image based on a prompt
export const generateImage = async (req, res, next) => {
    try {
        const { prompt } = req.body;
        const response = await openai.createImage({
            prompt: prompt,
            model: 'dall-e-3',
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        });
        const generateImage = response.data.data[0].b64_json;
        return res.status(200).json({ photo: generateImage });
    } catch (error) {
        console.error("OpenAI image generation error:", error);
        next(
            createError(
                error.status || 500,
                error?.response?.data?.error?.message || 'An error occurred while generating the image.'
            )
        )
    }
}