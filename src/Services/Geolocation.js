import { tokenPosition } from '../Env/Env';

const link = 'http://api.ipstack.com/5.164.180.194';

async function getPosition() {
  try {
    const url = `${link}?access_key=${tokenPosition}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTPS ${response.status}: ${await response.text()}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error in herokuapp - ${error.message}`);
  }
}

export default getPosition;
