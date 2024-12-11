export default {
  input: process.env.INPUT_FILE ? [`${process.env.INPUT_FILE}`] : ['src/entry-1.js'],
  output: {
    dir: 'dist',
    format: 'es',
  },
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  }
};
