import request from './request';
import { times } from './config';

const sendImage = async (uri: string, base64: string): Promise<{ success: boolean, text: string }> => {
  const tokenURL = '/page/new';
  const addURL = '/image/add';
  const textURL = '/page/get';

  try {
    const tokenRes = await request({ url: tokenURL, method: 'POST', time: times.long });

    if (!tokenRes.responseJson) {
      return { success: false, text: '' };
    }

    const { token = '' } = tokenRes.responseJson;

    const name = uri.split('/').pop();

    if (!name) {
      return { success: false, text: '' };
    }

    const imageRes = await request({ url: addURL, token, method: 'POST', body: { image: `data:image/jpeg;base64,${base64}` } });

    if (!imageRes.responseJson) {
      return { success: false, text: '' };
    }

    const textRes = await request({ url: textURL, token })

    if (!textRes.responseJson) {
      return { success: false, text: '' };
    }

    const { text = '' } = textRes.responseJson;

    console.log(text);

    return { success: true, text }
  } catch (error) {
    console.log(error);
    return { success: false, text: '' };
  }
};

export { sendImage };