const imageProcessing = require('../services/imageProcessing');
const textProcessing = require('../services/textProcessing');

const tests = ['./__tests__/images/test2.png'];

const run = () => {
  tests.forEach(async filePath => {
    console.log('sup');
    const encodedImage = imageProcessing.toBase64(filePath);
    // let { text } = await imageProcessing.processImage(encodedImage);
    let text = 'I the land of the Chaldeaas, st e residence of my father, I,Abraham, saw that it wan neodfal for mo to obiain another Place of residonoo, and finding thers was groater happiness and ‘pesco and rest for me, I sought for the blessing of th fathers, and th right whereunto I should be ordained to administer the samo; having boen myself s followe of rightoousness, desiring also 10 bo one who possessed. great knowledgo, and to be & great follower of righicousnoss, sud to possess & groater knowledgo a0d to bo & father of many naions, & princs of pesco; and desiring to roceive instrustions, sad to kesp tho commandments of God, I became a rightfal heir, o High Priest, holding the gt belonging to tho fathors; it was conforred upon mo from. tho fathers; it came down from the fathers, from the beginning. of time, yos, even from the boginning, or before the founds-tions of the earth to the present time, even the right of the frot bom, on the first man, who is Adam, or frst father, through the fathers, unto me.';
    text = await textProcessing.spellCorrection.packageBased(text);
    console.log(`sup3: ${text}`);
  });
};

module.exports = { run };
