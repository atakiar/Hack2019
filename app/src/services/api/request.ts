import { timeout, urlJoin } from './functions';
import { times, serverURL } from './config';

const setup = req => {
  if (!req.method) {
    req.method = 'GET';
  }

  req.url = urlJoin(serverURL, req.url);

  if (!req.time) {
    req.time = times.short;
  }

  if (req.body) {
    req.body = JSON.stringify(req.body);
  }

  if (!req.contentType) {
    req.contentType = 'application/json'
  }

  return req;
};

interface ApiResponse {
  responseJson: {
    token?: string,
    text?: string,
    pageID?: string,
  } | null,
  response: Response | null
}

const request = async (req): Promise<ApiResponse> => {
  // Setup
  const {
    method, url, time, token, body, contentType
  } = setup(req);

  // Request
  try {
    const response: Response = await timeout(
      time,
      fetch(url, {
        headers: {
          Accept: 'application/json',
          'Content-Type': contentType,
          Authorization: token,
        },
        method,
        body,
      }),
    );

    // If response ok
    if (response.ok) {
      const responseJson = await response.json();

      // If server response successful
      if (responseJson.success) {
        return { responseJson, response };
      }

      // If server response unsuccessful
      return { responseJson: null, response };
    }
    // If other error (likely timeout or server outage)
  } catch (error) {
    return { responseJson: null, response: null };
  }
  return { responseJson: null, response: null };
};

export default request;
