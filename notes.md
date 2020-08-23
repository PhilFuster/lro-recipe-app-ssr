# Learning React Chapter 12. React and the Server

This is one of the example projects in the book.

This is a remake of the earlier example, _recipes app_ but this time with Server Side Rendering (SSR).

Making use of _ReactDOM_'s **hydrate** function. ReactDOM.hydrate and ReactDOM.render are the same except hydrate is used to add content to a container that was rendered by ReactDOMServer.

The Order of Operations will look like this:

1. Render a static version of the app, allowing users to see that something has happened and the page has "loaded".
2. Make the request for the dynamic JavaScript
3. Replace the static content with the dynamic content
4. User clicks on something and it works

Rehydration is the process of statically loading the content as static HTML and then loading the JavaScript. This allows user experience perceived performance.

For the server portion, Express is used. Express is a light weight Node server.
