var fs     = require('fs')
	, path = require('path');

module.exports = function sitemap(options) {
	options = options || {};
	var safe = (options.unsafe === undefined) ? true : !options.unsafe;

	return function(req, res, next) {
		if (req.sitemap && safe) return next();
		req.sitemap = _sitemap;
		next();
	};
};

function _sitemap() {
	throw Error("Sitemap isn't finished yet.");
};