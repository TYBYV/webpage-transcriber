webpage-transcriber
==================

This project contains a simple transcribes that converts the contents of a webpage to another representation obtained by scraping the webpage itself and using the results to feed a React template.


Building and testing
--------------------
Run the project in development mode like so:

    $ git clone https://github.com/zenoamaro/webpage-transcriber.git
    $ cd webpage-transcriber
    $ npm install
    $ make devel

Then open the address in your browser of choice:

    http://localhost:8080/webpack-dev-server/
    webpack result is served from http://localhost:8080/
    content is served from /Users/.../dist

To build a minificated version of the source:

    $ npm run build

To run the unit tests on CLI or browser:

    $ npm run test
    $ npm run test-devel

More tasks are available on the [Makefile](Makefile):

  - `prepublish`: tests, rebuilds dist and docs.
  - `compile`: compiles sources to ES5.
  - `build`: builds and optimizes distributables.
  - `devel`: rebuilds on file change.
  - `clean`: removes the built artifacts.

  - `docs`: compiles the docs from the sources.
  - `lint`: lints the source.
  - `test`: runs the unit tests.
  - `test-devel`: runs the unit tests in the dev webserver.


License
-------
The MIT License (MIT)

Copyright (c) 2015, zenoamaro <zenoamaro@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
