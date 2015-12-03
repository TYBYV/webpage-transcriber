DEVELOPMENT=env NODE_ENV=development
PRODUCTION=env NODE_ENV=production
LINT=./node_modules/.bin/eslint
TEST=./node_modules/.bin/mocha
TEST_DIRECT=./node_modules/.bin/_mocha
TEST_COMPILERS=js:babel/register
DOCS=./node_modules/.bin/jsdoc
COMPILE=./node_modules/.bin/babel
BUILD=./node_modules/.bin/webpack
DEV_SERVER=./node_modules/.bin/webpack-dev-server

usage:
	@echo - prepublish .... tests, rebuilds dist and docs.
	@echo - compile ....... compiles sources to ES5.
	@echo - build ......... builds and optimizes distributables.
	@echo - devel ......... starts the development webserver.
	@echo - clean ......... removes the built artifacts.
	@echo
	@echo - docs .......... compiles the docs from the sources.
	@echo - lint .......... lints the source.
	@echo - test .......... runs the unit tests.
	@echo - test-devel .... runs the unit tests in the dev webserver.

prepublish: lint test build compile docs

clean:
	@rm -rf lib dist docs

devel:
	@$(DEVELOPMENT) $(DEV_SERVER) --config .webpackrc

compile:
	@$(COMPILE) -q -d lib src

build:
	@$(PRODUCTION) $(BUILD) --config .webpackrc

docs:
	-@$(DOCS) --configure .jsdocrc

lint:
	@$(LINT) src

test:
	@$(PRODUCTION) $(BUILD) --config .webpackrc.test
	@$(PRODUCTION) $(TEST) dist/tests.js

test-devel:
	@$(DEVELOPMENT) $(DEV_SERVER) --config .webpackrc.test

.PHONY: usage prepublish clean devel\
        compile build docs\
        lint test test-devel
