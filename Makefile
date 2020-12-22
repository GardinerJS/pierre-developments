.PHONY: clean
clean:
	rm -fr node_modules
	rm -fr build/

.PHONY: install
install:
	yarn install

.PHONY: start
start:
	yarn start

.PHONY: build
build:
	yarn build

.PHONY: test
test:
	yarn test

.PHONY: test-cov
test-cov:
	yarn test-cov

.PHONY: eject
eject:
	yarn eject