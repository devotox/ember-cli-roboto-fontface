'use strict';

module.exports = {
	name: 'ember-cli-roboto-fontface',
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
