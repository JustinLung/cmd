const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["assets/images/cmd-laptop.png","assets/images/detail-hero-image.jpg","assets/images/hero-image.jpg","favicon.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		entry: {"file":"immutable/start-2f267d11.js","imports":["immutable/start-2f267d11.js","immutable/chunks/index-320b9329.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/index.js')),
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "[uid]",
				pattern: /^\/([^/]+?)\/?$/,
				names: ["uid"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/_uid_.js')),
				a: [0,3],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
