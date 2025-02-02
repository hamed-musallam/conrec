# Changelog

### [3.2.1](https://www.github.com/mljs/conrec/compare/v3.2.0...v3.2.1) (2021-08-30)


### Bug Fixes

* **types:** move swapAxes option to Conrec constructor ([643c197](https://www.github.com/mljs/conrec/commit/643c1977d10f8ca9e74e5e9f8ff09279c6daf535))

## [3.2.0](https://www.github.com/mljs/conrec/compare/v3.1.0...v3.2.0) (2021-02-28)


### Features

* improve speed ([d521b5f](https://www.github.com/mljs/conrec/commit/d521b5f2853042455e5a35e71b62bdc5f90896e4))

## [3.1.0](https://github.com/mljs/conrec/compare/v3.0.0...v3.1.0) (2021-02-26)


### Features

* improve speed ([28005aa](https://github.com/mljs/conrec/commit/28005aa2a3ce465d21793461155c642920ce526c))

# [3.0.0](https://github.com/mljs/conrec/compare/v2.0.0...v3.0.0) (2019-07-03)


### Features

* add a swapAxes option and swap the default axes ([#6](https://github.com/mljs/conrec/issues/6)) ([3341203](https://github.com/mljs/conrec/commit/3341203))


### BREAKING CHANGES

* In previous versions, the X axis was along the rows of the data matrix
and the Y axis along the columns. This was not intuitive regarding how
the contours are then drawn. The default was changed to now consider X
along the columns and Y along the rows respectively.
Pass `swapAxes: true` to the Conrec constructor to get the previous
behavior.



# [2.0.0](https://github.com/mljs/conrec/compare/v1.0.0...v2.0.0) (2019-05-16)


### Code Refactoring

* rewrite project is ESM ([4754f86](https://github.com/mljs/conrec/commit/4754f86))


### BREAKING CHANGES

* The Conrec class is now a named export.



<a name="1.0.0"></a>
# [1.0.0](https://github.com/mljs/conrec/compare/v0.0.2...v1.0.0) (2016-07-21)


### Features

* add timeout option ([a3f1861](https://github.com/mljs/conrec/commit/a3f1861))



<a name="0.0.2"></a>
## 0.0.2 (2016-07-12)




