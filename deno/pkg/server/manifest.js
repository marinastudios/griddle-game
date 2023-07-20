const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.5d9ea5fa.js","app":"_app/immutable/entry/app.5ea10f89.js","imports":["_app/immutable/entry/start.5d9ea5fa.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.2aa3ffc2.js","_app/immutable/entry/app.5ea10f89.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.7cf2deec.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-194c73c8.js')),
			__memo(() => import('./chunks/1-a5acf5fc.js')),
			__memo(() => import('./chunks/2-d89a1772.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api",
				pattern: /^\/api\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-61c98b63.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

export { manifest };
//# sourceMappingURL=manifest.js.map
