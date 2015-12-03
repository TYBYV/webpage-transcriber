import FastClick from 'fastclick';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import isMobile from 'utils/isMobile';
import scrape from 'scraper';
import spec from 'spec';


/**
 * Bootstrap the scraper and the template renderer
 * after doing some prep work.
 */
function bootstrap() {
    // Scrape the page at this time, and convert it
    // to a purer data representation.
    const payload = scrape(spec);

    // We create a root node for our application,
    // so that we aren't influenced by listeners
    // or other code that wants to touch <body>.
    const rootNode = document.createElement('div');
    document.body.innerHTML = '';
    document.body.appendChild(rootNode);

    // We want at least a viewport meta tag, so that we
    // are able to optimize the content for the viewport.
    const viewportNode = document.createElement('meta');
    viewportNode.setAttribute('name', 'viewport');
    viewportNode.setAttribute('content', 'width=device-width, user-scalable=no');
    document.head.appendChild(viewportNode);

    // Adopt fast-click to remove the annoying
    // 300ms wait on clicks on iPhones.
    FastClick.attach(document.body);

    ReactDOM.render(<Root payload={payload}/>, rootNode);
}


/*
We only want to operate when we have detected
a mobile phone. We wouldn't want a bug ruining
an otherwise working mission-critical app.
*/
if (isMobile()) bootstrap();
