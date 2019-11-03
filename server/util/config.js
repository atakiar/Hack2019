const commandLineArguments = process.argv.filter(
  arg => !arg.includes('index') && !arg.includes('node')
);

const isProd = process.env.NODE_ENV === 'prod';

// const secret = commandLineArguments[0] || process.env.SECRET;
const secret = 'test'; // TODO: Fix

module.exports = {
  isProd,
  secret,
};
