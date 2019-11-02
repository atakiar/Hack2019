import { createWorker } from 'tesseract.js';

const worker = createWorker();

const initialize = async () => {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
};

export default initialize;
