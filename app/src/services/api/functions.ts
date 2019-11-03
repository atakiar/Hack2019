const timeout = (ms: number, promise: Promise<Response>) => new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Timed out'));
  }, ms);
  promise.then(resolve, reject);
});

const urlJoin = (url1, url2) => {
  let totalUrl = url1;

  if (url2[0] === '/') {
    totalUrl += url2;
  } else {
    totalUrl += `/${url2}`;
  }

  return totalUrl;
};


export { timeout, urlJoin }