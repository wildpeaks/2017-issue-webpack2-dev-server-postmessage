/* eslint-env browser */
'use strict';

console.log('[MAIN] Started');
const worker = new Worker('worker.bundle.js');
worker.onmessage = e => {
	console.log('[MAIN]', e);
};
worker.postMessage({
	hello: 111
});
