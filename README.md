# Hyvä Theme - Default Theme

[![Hyvä Themes](https://hyva.io/media/wysiwyg/logo-compact.png)](https://hyva.io/)

## hyva-themes/magento2-default-theme

The default Hyvä Theme package for Magento 2, including layout and styling assets used as the base for custom Magento storefronts.

![Supported Magento Versions][ico-compatibility]

Compatible with Magento 2.4.0 and higher.
 
## Hyvä Theme Installation

Installing Hyvä Theme requires several steps outlined below.

### Step 1: Configure composer repositories

The recommended way to install Hyvä Theme is with a Hyvä Private Packagist key. This will make many compatibility modules also available.
Alternatively, Hyvä Theme can be installed from GitHub.

Choose one of the following options:


#### Option 1: Installation from Hyvä Private Packagist (Recommended)

To install from the Hyvä Private Packagist repo, first get a key by registering an account at [www.hyva.io](https://www.hyva.io) and creating one from your account dashboard.

You will receive instructions like the following after creating the key:

```sh
# this command adds your key to your project's auth.json file
# replace yourLicenseAuthenticationKey with your own key
composer config --auth http-basic.hyva-themes.repo.packagist.com token yourLicenseAuthenticationKey
# replace yourProjectName with your project name
composer config repositories.private-packagist composer https://hyva-themes.repo.packagist.com/yourProjectName/
```

#### Option 2: Installation from GitHub

To install Hyvä directly from GitHub, configure all required GitHub repositories as composer repositories.

```sh
composer config repositories.hyva-themes/magento2-theme-module git https://github.com/hyva-themes/magento2-theme-module.git
composer config repositories.hyva-themes/magento2-default-theme git https://github.com/hyva-themes/magento2-default-theme.git
composer config repositories.hyva-themes/magento2-default-theme-csp git https://github.com/hyva-themes/magento2-default-theme-csp.git
composer config repositories.hyva-themes/magento2-base-layout-reset git https://github.com/hyva-themes/magento2-base-layout-reset.git
composer config repositories.hyva-themes/magento2-compat-module-fallback git https://github.com/hyva-themes/magento2-compat-module-fallback.git
composer config repositories.hyva-themes/magento2-mollie-theme-bundle git https://github.com/hyva-themes/magento2-mollie-theme-bundle.git
composer config repositories.hyva-themes/magento2-luma-checkout git https://github.com/hyva-themes/magento2-luma-checkout.git
composer config repositories.hyva-themes/magento2-theme-fallback git https://github.com/hyva-themes/magento2-theme-fallback.git
composer config repositories.hyva-themes/magento2-order-cancellation-webapi git https://github.com/hyva-themes/magento2-order-cancellation-webapi.git
composer config repositories.hyva-themes/magento2-email-module git https://github.com/hyva-themes/magento2-email-module.git
```


### Step 2: Install the Hyvä Theme Package

Install the theme and its dependencies with composer:

```sh
composer require hyva-themes/magento2-default-theme
```

### Step 3: Post Install Actions

- After installing the Hyvä Theme package, run the Magento setup command:

  ```sh
  bin/magento setup:upgrade
  ```

- Configure the theme in the Magento admin.
  Navigate to the `Content > Design > Configuration` admin section and activate the hyva/default theme.

- Follow the additional steps according to the Hyvä Themes [Getting Started](https://docs.hyva.io/hyva-themes/getting-started/index.html#getting-started) documentation.

## Support / Docs

- Documentation: [https://docs.hyva.io](https://docs.hyva.io)
- Account and downloads: [https://www.hyva.io](https://www.hyva.io)

## License

This package is dual-licensed under the **Open Software License (OSL 3.0)** and the **Academic Free Software License (AFL 3.0)**. You may choose either license.

- **Copyright:** Copyright © 2020-present Hyvä Themes. All rights reserved.
- **OSL 3.0 text:** `LICENSE.txt` or [http://opensource.org/licenses/osl-3.0.php](http://opensource.org/licenses/osl-3.0.php).
- **AFL 3.0 text:** `LICENSE_AFL.txt` or [http://opensource.org/licenses/afl-3.0.php](http://opensource.org/licenses/afl-3.0.php).

### Additional Licenses for Included Assets

- **Magento code:** Includes software from Magento, Inc. (https://github.com/magento/magento2) under the AFL 3.0. Source is available at https://github.com/magento/magento2.
- **Third-party libraries:** Includes Nick Piscitelli libraries (https://github.com/NickPiscitelli/) under the MIT license. License text: [https://opensource.org/license/MIT](https://opensource.org/license/MIT).

## Changelog
Please see [The Changelog](CHANGELOG.md).

[ico-compatibility]: https://img.shields.io/badge/magento-%202.4-brightgreen.svg?logo=magento&longCache=true&style=flat-square
