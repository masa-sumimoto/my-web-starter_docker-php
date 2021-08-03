# My Starter : Docker + PHP

This is my web starter kit.

`PHP + SCSS + JS + Docker`

## Concept

```
Virtualization        : Docker
Package Manager       : Yarn
Module Bundler        : Webpack5
JavaScript Transpiler : Babel
Linter / Formatter    : ESLint / Stylelint / Prettier
CSS Architecture      : BEM / OOCSS *1
CSS Frameworks        : Bootstrap5
JavaScript Frameworks : Bootstrap5 / jQuery

*1: Use OOCSS only for Bootstrap
```

## Initialize

```
$ git clone git@github.com:masa-sumimoto/my-web-starter_docker-php.git
$ mv my-web-starter_docker-php
$ cd app
$ yarn install
```

## Commands

```
// Serve and Develop
$ docker-compose up

// Stop Server
ctrl + c

// Build production files
$ cd app
$ yarn run build
```
