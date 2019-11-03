import { ShadowStyleIOS } from 'react-native';

const depth = (d: number): ShadowStyleIOS => {
  if (d < 0) {
    d = 0;
  } if (d > 5) {
    d = 5;
  }

  const offsets = [0, 1.5, 3, 6, 10, 15];
  const opacities = [0, 0.24, 0.23, 0.23, 0.22, 0.22];
  const blurs = [0, 1, 3, 3, 5, 6];


  return ({
    shadowOpacity: opacities[d],
    shadowRadius: blurs[d] * 4,
    shadowColor: '#000000',
    shadowOffset: { height: offsets[d], width: offsets[d] },
  });
};


export default depth;
