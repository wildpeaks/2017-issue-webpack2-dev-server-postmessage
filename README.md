# TestCase

Setup:
> Node 7.4.0
> Windows 10
> Webpack 2.2.0-rc.7
> Webpack-dev-server 2.2.0-rc.0

How to reproduce:
1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. Open http://localhost:8000 in your browser.
4. Look at errors in the DevTools console.

Chrome:
> Uncaught TypeError: Failed to execute 'postMessage' on 'DedicatedWorkerGlobalScope': The 2nd argument is neither an array, nor does it have indexed properties.

Firefox:
> TypeError: Argument 2 of DedicatedWorkerGlobalScope.postMessage can't be converted to a sequence.

They seem to point to [this line](https://github.com/webpack/webpack-dev-server/blob/v2.2.0-rc.0/client/index.js#L51)
as it appears `"*"` is not a valid [transfert list](https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage).
