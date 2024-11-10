install:
	npm ci

link:
	npm link

eslint:
	npx eslint .

nws:
	npx webpack serve

delete:
	rm -rf dist

build:
	NODE_ENV=production npx webpack