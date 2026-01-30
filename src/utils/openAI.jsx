/* eslint-disable no-undef */
import OpenAI from 'openai';

// eslint-disable-next-line no-unused-vars
const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

