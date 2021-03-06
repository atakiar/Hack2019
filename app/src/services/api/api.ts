import request from './request';
import { times } from './config';

const sendImage = async (uri: string, base64: string): Promise<{ success: boolean, text: string, pageID: string }> => {
  const tokenURL = '/page/new';
  const addURL = '/image/add';
  const textURL = '/page/get';

  try {
    const tokenRes = await request({ url: tokenURL, method: 'POST', time: times.long });

    if (!tokenRes.responseJson) {
      return { success: false, text: '', pageID: '' };
    }

    const { token = '' } = tokenRes.responseJson;

    const name = uri.split('/').pop();

    if (!name) {
      return { success: false, text: '', pageID: '' };
    }

    const imageRes = await request({ url: addURL, token, method: 'POST', body: { image: `data:image/jpeg;base64,${base64}` } });

    if (!imageRes.responseJson) {
      return { success: false, text: '', pageID: '' };
    }

    console.log(imageRes.responseJson)

    const { text = '', pageID = '' } = imageRes.responseJson;

    console.log(text);

    return { success: true, text, pageID }
  } catch (error) {
    console.log(error);
    return { success: false, text: '', pageID: '' };
  }
};

export { sendImage };