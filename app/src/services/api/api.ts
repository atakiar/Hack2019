import request from './request'

const sendImage = async (uri: string): Promise<boolean> => {
  const tokenURL = '/page/new';
  const addURL = '/image/add';
  try {
    const tokenRes = await request({ url: tokenURL, method: 'POST' })

    if (!tokenRes.responseJson) {
      return false;
    }

    const { token } = tokenRes.responseJson;

    const imageRes = await request({ url: addURL, token, method: 'POST' })

    if (!imageRes.responseJson) {
      return false;
    }

  }

  return true;
}