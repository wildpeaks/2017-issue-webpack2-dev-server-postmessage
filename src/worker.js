/* eslint-env worker */
'use strict';

console.log('[WORKER] Started');
self.onmessage = e => {
	console.log('[WORKER]', e);
	self.postMessage({
		hello: 222
	});
};
