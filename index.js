'use strict';

const { name } = require('./package');

module.exports = {
  name,
  options: {
    nodeAssets: {
      'roboto-fontface': {
        srcDir: 'css/roboto',
        import: ['roboto-fontface.css'],
        public: {
          srcDir: 'fonts',
          destDir: 'fonts',
          include: ['roboto/*']
        }
      }
    }
  }
};
