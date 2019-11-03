const timeout = async (ms: number, promise: Promise<Response>) => {
  setTimeout(() => {
    return Error('Timed out');
  }, ms);

  const result = await promise;
  return result;
}



const urlJoin = (url1: string, url2: string): string => {
  let totalUrl = url1;

  if (url2[0] === '/') {
    totalUrl += url2;
  } else {
    totalUrl += `/${url2}`;
  }

  return totalUrl;
};


export { timeout, urlJoin }