# @alienlebarge/stylelint-config

[![Build Status][travis-ci-image]][travis-ci-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[travis-ci-url]:https://travis-ci.org/alienlebarge/stylelint-config
[travis-ci-image]:https://travis-ci.org/alienlebarge/stylelint-config.svg?branch=master
[david-dm-url]:https://david-dm.org/alienlebarge/stylelint-config
[david-dm-image]:https://img.shields.io/david/alienlebarge/stylelint-config.svg
[david-dm-dev-url]:https://david-dm.org/alienlebarge/stylelint-config#info=devDependencies
[david-dm-dev-image]:https://img.shields.io/david/dev/alienlebarge/stylelint-config.svg

My own [stylelint](http://stylelint.io/) configurations.
These rule configurations are massively inspired by [Harry Roberts](https://twitter.com/csswizardry) [CSS Guidelines](http://cssguidelin.es/).

## Usage

### Install

```
$ npm install @alienlebarge/stylelint-config
```

### Extend

Create a `.stylelintrc` file with:

```json
{
    "extends": "@alienlebarge/stylelint-config"
}
```

[Documentation about `extends`](http://stylelint.io/user-guide/configuration/#extends).
