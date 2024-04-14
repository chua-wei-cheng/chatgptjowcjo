import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const systemMessage = [{role: 'system', content: 'You are a helpful assistant.'}]

  try {
    const response = await openai.completions.create({
      prompt: `What is the sentiment of the following text:`,
      model: 'gpt-4.0-turbo'
    });

    res.json(response);
  } catch (err) {
    res.status(500).json({ err });
  }
}