export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["ads.txt","favicon.ico","img/Background.webp","img/home.webp","img/Logo.webp","img/manifest-icon-128x128.webp","img/manifest-icon-144x144.webp","img/manifest-icon-512x512.png","img/manifest-icon-96x96.webp","img/maps.webp","img/rules.webp","img/store.webp","img/vote.webp","manifest.json","pwa.js","robots.txt","sitemap.xml","sitemaps/sitemap-1.xml"]),
	mimeTypes: {".txt":"text/plain",".ico":"image/vnd.microsoft.icon",".webp":"image/webp",".png":"image/png",".json":"application/json",".js":"application/javascript",".xml":"application/xml"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.4c737092.js","imports":["_app/immutable/entry/start.4c737092.js","_app/immutable/chunks/index.898eee9f.js","_app/immutable/chunks/paths.8c5d1662.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.afa5a54b.js","imports":["_app/immutable/entry/app.afa5a54b.js","_app/immutable/chunks/index.898eee9f.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
