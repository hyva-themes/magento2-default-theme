# Hyvä Themes - Default Theme

[![Hyvä Themes](https://hyva.io/media/wysiwyg/logo-compact.png)](https://hyva.io/)

## hyva-themes/magento2-default-theme

![Supported Magento Versions][ico-compatibility]

Compatible with Magento 2.4.0 and higher.
 
## Installation

You need a valid Hyvä packagist.com key.

Get a free key by registering an account at [www.hyva.io](https://www.hyva.io) and creating one from your account dashboard.

You will receive instruction like the following after creating your packagist.com key:

```
# this command adds your key to your projects auth.json file
# replace yourLicenseAuthentificationKey with your own key
composer config --auth http-basic.hyva-themes.repo.packagist.com token yourLicenseAuthentificationKey
# replace yourProjectName with your project name
composer config repositories.private-packagist composer https://hyva-themes.repo.packagist.com/yourProjectName/
```

Run those commands, and then, install the theme and its dependencies with composer:

```sh
composer require hyva-themes/magento2-default-theme
```
Next, run the Magento setup command:

```sh
bin/magento setup:upgrade
```
Navigate to the `Content > Design > Configuration` admin section and activate the hyva/default theme.

Please see the [Getting Started](https://docs.hyva.io/hyva-themes/getting-started/index.html#getting-started) documentation for further information.

## License

This package is primarily dual-licensed under the **Open Software License (OSL 3.0)** and the **Academic Free Software License (ASL 3.0)**.

* **Copyright:** Copyright © 2020-present Hyvä Themes. All rights reserved.
* **License Text (OSL 3.0):** The full text of the OSL 3.0 license can be found in the `LICENSE.txt` file within this package, and is also available online at [http://opensource.org/licenses/osl-3.0.php](http://opensource.org/licenses/osl-3.0.php).
* **License Text (AFL 3.0):** The full text of the AFL 3.0 license can be found in the `LICENSE_AFL.txt` file within this package, and is also available online at [http://opensource.org/licenses/afl-3.0.php](http://opensource.org/licenses/osl-3.0.php).

You have the choice which of the two licenses to use.

### Additional Licenses for Included Assets

* **Copyright:** This product includes software developed by Magento, Inc. (https://github.com/magento/magento2) and distributed under the Academic Free License (AFL) v3.0.  
  The Source Code of the original Work is available at https://github.com/magento/magento2.  
  Included libraries from Nick Piscitelli (https://github.com/NickPiscitelli/) are distributed under the MIT license.
* **License Texts:**
  The full text of the AFL 3.0 license can be found in `LICENSE_AFL.txt` and online at [http://opensource.org/licenses/afl-3.0.php](http://opensource.org/licenses/afl-3.0.php).  
  The full text of the MIT license can be found online at [https://opensource.org/license/MIT](https://opensource.org/license/MIT).

## Changelog
Please see [The Changelog](CHANGELOG.md).

[ico-compatibility]: https://img.shields.io/badge/magento-%202.4-brightgreen.svg?logo=magento&longCache=true&style=flat-square
