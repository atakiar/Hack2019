
const depth = (d) => {
  if (d < 1) {
    return null;
  } if (d > 5) {
    console.error(`${d} is too deep. (nice)`);
    return null;
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
