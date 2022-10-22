# Changelog - Default Theme

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

[Unreleased]: https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/compare/1.1.19...1.1.x-main


## [1.1.19] - 2022-10-22

[1.1.19]: https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/compare/1.1.18...1.1.19

### Added

- **Show/Hide password in forms with an Eye-EyeOff icon**

  Passwords can now be hidden or shown by clicking on an eye/eye-off icon in the login, registration and edit account customer forms.

  For more information, please refer to [issue #498](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/498).

  Many Thanks to Dung La (JaJuMa) for the contribution!

### Changed

- **Fix double h1 tag on PDP**

  For more information, please refer to [issue #452](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/452) and [merge request #542](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/542)

  Many thanks to Sean van Zuidam (Grimlink) for the contribution!

- **Fix Structured Data for Product Item (Missing Image)**

  This is a SEO related improvement.  
  For more information, please refer to [issue #495](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/495).

  Many Thanks to Dung La (JaJuMa) for the contribution!

- **Fix form submission if recaptcha is enabled**

  This change fixes a regression that was introduced with 1.2.0-beta1.

  For more information, please refer to [issue #497](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/497).

- **Remove customer-review-list anchor in pagination URL on PLP**

  In release 1.1.18 a `#customer-review-list` anchor was added to the pagination URLs, to fix an issue with product review pagination.  
  However, this anchor was also rendered on product listing pagination URLs.  
  This change now makes the pagination URL configurable via layout XML, and now only renders the review list anchor on product review pagination URLs.

  For more information, please refer to [issue #492](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/492).


### Removed

- **Remove character ')' in subtotal cart page**

  For more information, please refer to [issue #494](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/494).

  Many Thanks to Dung La (JaJuMa) for the contribution!


## [1.1.18] - 2022-10-15

[1.1.18]: https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/compare/1.1.17...1.1.18


### Added

- **Add support for Gift Messages**

  Previously this feature was not supported in Hyvä.

  For more information please refer to [merge request #505](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/505).

  Many thanks to Ross McHugh (Monsoon Consulting) for the contribution!

- **Add extension point for shipping method selection in PHP Cart**

  Child blocks added to the `checkout.cart.shipping` block on `checkout_cart_index` will now be automatically rendered.  
  Also, the region code is now provided as a `data-code` attribute on the region select options.

  For more information please refer to [merge request #503](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/503).

  Many thanks to Lucas van Staden (ProxiBlue) for the contribution!

- **Add extension point to cart drawer template**

  Four new layout containers are now available to customize the cart drawer: `cart-drawer.top`, `cart-drawer.items.before`, `cart-drawer.items.after`, `cart-drawer.bottom`.

  For more information please refer to [merge request #514](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/514).

  Many thanks to Kiel Pykett (Youwe - formerly Fisheye) for the contribution!

- **Allow displaying products assigned to child categories for anchor category sliders**

  For sliders configured with a single category ID, the property `include_child_category_products` can now be set in layout XML on the slider block
  to cause products assigned to child categories to be displayed, too.

  For more information please refer to [issue #473](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/473).

- **Added missing customer widget templates**

  Before the Luma version of the templates was used due to missing overrides in Hyvä.
  The new templates are `Magento_Customer::widget/fax.phtml`, `Magento_Customer::widget/gender.phtml` and `Magento_Customer::widget/taxvat.phtml`.

  For more information please refer to [merge request #543](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/543).

### Changed

- **Validation of Postcode and Telephone fields in customer address form**

  The validation for the customer/address/edit form now uses the advanced validation library to validate
  postcode and region according to the selected country, and also applies telephone validation according to the store
  configuration.

  For more information please refer to [issue #114](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/114).

  Many thanks to Oleksandr Melnychuk (Atwix) for the contribution!

- **Automatically scroll to review section on review pagination**

  Previously, the page reloaded at the page top, and a visitor would have to manually scroll down to the reviews page
  they navigated to.

  For more information please refer to [issue #453](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/453).

  Many Thanks to Dung La (JaJuMa) for the contribution!

- **Fix wrong product name used in review section when editing wishlist items**

  For more information please refer to [issue #462](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/462).

  Many Thanks to Dung La (JaJuMa) for the contribution!

- **Open the overlay keyboard when user clicks on search icon on mobile**

  This allows visitors to start typing right away, without first having to tap the search bar.

  For more information please refer to [issue #456](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/456).

  Many thanks to Nick Hall (MFG Supply) for the contribution!

- **Fix gallery images not compatible with many images**

  Previously, when quite a lot of images where added to a product, say 6 or more, the full-screen gallery view on mobile was filled up with thumbnails.

  For more information please refer to [issue #136](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/136).

  Many thanks to Oleksandr Melnychuk (Atwix) for the contribution!

- **The cart drawer should use the QuoteShortcutButtons block instead of InCatalog**

  Third party extensions can now correctly use the `is_catalog_product` property to determine if the product actions
  are being rendered on a PDP / PLP or on a checkout related page.

  For more information please refer to [merge request #504](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/504).

  Many thanks to Ravinder (redChamps) for the contribution!

- **A11y improvement: use aside tag for sidebars**

  The `aside` tag is used to mark certain elements as complimentary to the main content.  
  The sidebar main and additional are always complimentary to the catalog page so it makes sense to use the `aside` html tag instead of a generic `div`.

  For more information please refer to [issue #458](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/458).

  Many thanks to Sean van Zuidam (Grimlink) for the contribution!

- **Fix comment description of the meaning of the `assistance_allowed` value**

  Previously the comment reversed the meaning of the value.

  For more information please refer to [issue #461](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/461).

  Many thanks to Jerke Combee (Elgentos) for the contribution!

- **Fix the URL suffix determination for recently viewed products**

  This fixes a bug that occurred when the product URL suffix was configured to be empty.

  For more information please refer to [issue #463](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/463).

- **Fix crosssell slider on the PHP-Cart page if PageBuilder is disabled**

  For more information please refer to [issue #457](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/457).

  Many thanks to Rich Jones (Aware Digital) for the contribution!

- **Allow some HTML tags in order comments**

  Since Magento 2.4.4 the HTML tags `['b', 'br', 'strong', 'i', 'u', 'a']` are allowed to be rendered in order comments on the frontend. 

  For more information please refer to [issue #465](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/465).

- **Fix configurable-selection-changed event arguments**

  For more information please refer to [issue #468](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/468).

  Many thanks to Richard Brown (Lawson-His) for the report and the suggested fix!

- **Fix edit and remove icons for bundled products in the PHP-Cart**

  For more information please refer to [issue #469](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/469).

- **Use PHP reCaptcha view model constants instead of strings to refer to reCaptcha configuration**

  The ReCaptcha view model now has constants for the different built-in forms supporting ReCaptcha.

  For more information please refer to [merge request #517](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/517).

  Many thanks to Kiel Pykett (Youwe - formerly Fisheye) for the contribution!

- **Simplify password confirmation match checking function**

  For more information please refer to [merge request #521](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/521).

  Many thanks to Kiel Pykett (Youwe - formerly Fisheye) for the contribution!

- **Integrate changes from Magento 2.4.5**

  These changes include rendering numbers with a LocalFormatter, and adding new view models to that allow disabling some functionality in Adobe Commerce.  
  Because Hyvä supports Magento since 2.4.0 wrapper classes are used to provide the same functionality in Magento versions before 2.4.5.

  For more information please refer to [issue #479](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/479).

  Many thanks to Peter Jaap Blaakmeer (Elgentos) for the contribution!

- **Replace h2 in authentication-popup with strong tag to avoid wrong title tag order**

  This change is a SEO improvement.

  For more information please refer to [issue #486](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/486).

  Many thanks to Sean van Zuidam (Grimlink) for the contribution!
  
- **Fix broken review summary link and unintentional scroll**

  For more information please refer to [issue #486](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/486).

  Many thanks to Kenneth Danielsen (Novicell) for the contribution!


### Removed

- Nothing removed


## [1.1.17] - 2022-08-16

[1.1.17]: https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/compare/1.1.16...1.1.17

### Added

- **Specify the minimum node version >=12.13.0 in package.json**

  This is currently for informational purpose only since it will not be automatically checked without a `.npmrc` file with `strict-engine=true`.  
  The version constraint >=12.13.0 matches the one of [TailwindCSS v2](https://github.com/tailwindlabs/tailwindcss/blob/v2.2.19/package.json#L118).

  For more information please refer to the [issue #423](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/423).

- **Add show password functionality**

  The "Show Password" functionality was added to Luma in Magento versions 2.4.3-p2 and 2.4.4. This MR adds support for this feature to Hyvä.

  For more information please refer to the [merge request #484](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/484).

  Many thanks to Guus Portegies (Cees en Co) for the contribution!

- **Add .gitlab-ci file**

  Some tests and checks are now automatically executed in GitLab pipelines for new merge requests.  
  Currently some do not have to succeed (for example the code style check), but this will change at some point in the future.

- **Add absolute footer block**

  Hyvä now also contains this customization point (like Luma).

  For more information please refer to the [merge request #486](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/486).

  Many thanks to Erwin Romkes (Moore) for the contribution!

- **Add Out Of Stock label in product list item template**

  For more information please refer to the [issue #412](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/412).

  Many thanks to Nataly Gorupaha (Atwix) for the contribution!

- **Add default red textColor**

  The css class `text-red` was used in several templates, but no default text color was declared for the default theme.

  For more information please refer to the [merge request #497](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/497).

### Changed

- **Bugfix: Resolve "Cannot use object of type stdClass as array"**

  For more information please refer to the [issue #435](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/435).

- **Bugfix: Add missing bundled product cart item renderers**

  Previously the selected options on bundled products where not shown on the PHP cart page.  
  For more information please refer to the [issue #440](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/440).

  Many thanks to Laura Folco for the report and suggesting a fix!

- **Bugfix: Use JS to determine redirect target after addToCart in cached product list item template**

  For more information please refer to the [issue #445](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/445).

  Many thanks to Zach Nanninga (DEG Digital) for the detailed report and suggested solution!

- **Use new hyva.getUenc function to encode the current URL**

  Previously, a number of templates used `'&unec=' + btoa(window.location.href)` to add the ``uenc query parameter to an url.
  This is missing additional encoding of `+`, `/` and `=` done by `\Magento\Framework\Url\Encoder::encode()`.  

  For more information please refer to the [issue #450](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/450).

- **Bugfix: Fix ReCaptcha loader if no ReCaptcha v3 website key is configured**

  For more information please refer to the [merge request #475](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/475).

  Many thanks to Laura Folco for the help debugging the issue!

- **Bugfix: Fix call to replaceDomElement within reloadCartContent()**

  For more information please refer to the [issue #439](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/439).

- **Bugfix: Shipping methods with underscores in method code break the PHP cart**

  For more information please refer to the [issue #433](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/433).

  Many thanks to Stephanie Ehrling (Artplants) for the report and suggesting a fix!

- **Bugfix: Show new password mismatch method on customer edit form**

  For more information please refer to the [issue #422](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/422).

  Many thanks to Nataly Gorupaha (Atwix) for the contribution!

- **Update the minimum version requirement for `@hyva-themes/hyva-modules`**
  
  This change is only applicable to new installs and ensures the node version 12 compatible release of `@hyva-themes/hyva-modules` is installed by `npm install`.  
  Previously an older version of the library was installed by default that required node version 14 or newer.

  For more information please refer to the [issue #423](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/423).

- **Fix: Google PageSpeed warning "Links are not crawlable"**

  For more information please refer to the [issue #429](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/429).

  Many thanks to Ryan Hissey (Aware Digital) for the contribution!

- **Improvement: Reset PDP Gallery when all options are reset to "Choose an option..."**

  For more information please refer to the [issue #432](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/432).

- **Improvement: Sort the updated PDP Gallery when configurable options are selected**

  Previously only the initial gallery was sorted according to the image position specified on the product.

  For more information please refer to the [issue #426](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/426).

  Many thanks to Irina Smidt (Customgento) for the contribution!

- **Bugfix: add missing closing HTML tag on cart page**

  For more information please refer to the [merge request #481](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/481).

  Many thanks to Simon Sprankel (Customgento) for the contribution!

- **Improvement: Correctly associate labels to fields in login form**

  For more information please refer to the [merge request #482](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/482).

  Many thanks to Lucas van Staden (ProxiBlue) for the contribution!

- **Improvement: Add missing import for ViewModelRegistry in template**

  The class name is only referenced from a PHPDoc annotation, so previously no error was thrown, but now, with this change, IDE autocompletion correctly works for the `$viewModels` variable.

  For more information please refer to the [issue #442](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/442).

  Many thanks to Guus Portegies (Cees en Co) for the contribution!

- **Improvement: fix minor CLS on mobile menu**

  The "X" SVG to close the mobile menu was displayed on page load and then hidden by JS, causing it to be displayed briefly and causing a small CLS.

  For more information please refer to the [merge request #485](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/485).

  Many thanks to Nick Hall (MFG Supply) for the contribution!

### Removed

- **Remove hover classes for mobile**

  The hover state is generally not available on mobile devices, thus the classes previously had no effect.

  For more information please refer to the [issue #444](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/444).

  Many thanks to Jesse de Boer (Elgentos) for the contribution!


## [1.1.16] - 2022-06-16

[1.1.16]: https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/compare/1.1.15...1.1.16

Release 1.1.16 is a backward compatible bugfix release.

### Added

- Nothing added

### Changed

- **Fix rendering of newsletter subscription form in footer**

  In 1.1.15 a bug was introduced while extracting the copyright into a separate template.
  This bug is now fixed.

  For more information please refer to the [Merge Request #470](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/470).

### Removed

- Nothing removed

## [1.1.15] - 2022-06-13

[1.1.15]: https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/compare/1.1.14...1.1.15

### Upgrade guide

**Backward incompatible warning**
The default cart page has been replaced with a Server-Side-Rendered version using PHP and AlpineJS, if you're upgrading and want to keep the GraphQL cart you need to install the GraphQL cart separately. You should be able to keep using the GraphQL cart without further customizations and we will keep supporting both versions of the cart.

If you're upgrading from <1.1.15 please check the [documentation page on upgrading](https://docs.hyva.io/hyva-themes/upgrading/upgrading-to-1-1-15.html). Any additional information and known bugs/issues to this release will be documented there.

### Added

- **Support for reCaptcha v2 "I'm not a robot" and v2 invisible**

  This now provides feature parity with Luma. The implementation was also improved to make it easier to implement custom captcha integrations.

  More details can be found in the [Merge Request #340](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/340) and the  [theme module Merge Request #153](https://gitlab.hyva.io/hyva-themes/magento2-theme-module/-/merge_requests/153).

  Many thanks to Amanda Bradley (Youwe - formerly Fisheye) for the contribution!

- **Add additional actions container to product detail page**

  This allows adding additional actions to the list of add-to-wishlist, add-to-compare and so on.  

  For more information please refer to the [Merge Request #448](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/448).

  Many thanks to Ruud van Zuidam (Siteation) for the contribution!

- **Add recently ordered sidebar**

  Please refer to the [Issue #452](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/452) for more details.

  Many thanks to Nataly Gorupaha (Atwix) for the contribution!

- **Add wishlist sidebar**

  Please refer to the [Issue #384](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/384) for more details.

  Many thanks to Nataly Gorupaha (Atwix) for the contribution!

### Changed

- **Replace the GraphQL cart with a PHP cart implementation using AlpineJS and Ajax**

  This is a backward incompatible change, but existing sites can install the [`hyva-themes/magento2-graphql-cart` extension](https://gitlab.hyva.io/hyva-themes/magento2-graphql-cart)
  to restore the previous functionality in a backward compatible way.

  For more information please refer to the [Merge Request #397](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/397). 

- **Use SVG ViewModel instead of hardcoded SVGs in default theme**

  This includes adding the SVG loader to the theme web folder instead of hardcoding it in the loader template. 

  For more information please refer to the Merge Requests [#431](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/431) and [#432](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/432).

  Many thanks to Ruud van Zuidam (Siteation) for the contribution!  

- **Rely on automatic purge config for theme-module**

  By default, the automatic merging of tailwind.config.js is now used to add the theme module templates to the content path config of any Hyvä theme.

  Please refer to the [Issue #398](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/398) for more details.

- **Support multiple ratings**

  Previously only a single rating was shown.  

  Please refer to the [Issue #374](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/374) for more details.

  Many thanks to Nguyen Miha (JaJuMa) for the contribution!

- **Use a tag on current breadcrumb to improve a11y**

  This improves a11y since the aria-current attribute is only allowed on anchors.

  For more information please refer to the [Merge Request #436](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/436).

  Many thanks to Ruud van Zuidam (Siteation) for the contribution!

- **Fix layout XML parent for Send Friend icon in product info**

  Previously the icon was not rendered.

  For more information please refer to the [Merge Request #437](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/437).

  Many thanks to Ruud van Zuidam (Siteation) for the contribution!

- **Correct spacing beside toolbar pager dropdown**

  For more information please refer to the [Merge Request #438](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/438).

  Many thanks to Ruud van Zuidam (Siteation) for the contribution!

- **Fix rendering of sidebar on desktop for categories with empty content area**

  Please refer to the [Issue #312](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/312) for more details.

  Many thanks to Nataly Gorupaha (Atwix) for the contribution!

- **Move footer copyright into separate template file**

  Also include a comment to make it easier to render the copyright configured in the admin.

  For more information please refer to the [Merge Request #442](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/442).

  Many thanks to Ruud van Zuidam (Siteation) for the contribution!

- **Reserve space for form validation message on validation container, not input field**

  The previous solution required awkward workarounds for multiple inputs like radio buttons within a container.

  For more information please refer to the [Merge Request #445](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/445).

- **The minicart now shows the configured amount of items**

  Please refer to the [Issue #386](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/386) for more details.  

  Many thanks to Nataly Gorupaha (Atwix) for the contribution!

- **Fix: Selecting country with no regions hides region field but retains label**

  Please refer to the [Issue #391](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/391) for more details.

  Many thanks to Nataly Gorupaha (Atwix) for the contribution!

- **Use better reCaptcha v3 action names for better stats collection**

  For more information please refer to the [Merge Request #422](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/422).

  Many thanks to Lucas van Staden (ProxiBlue) for the contribution!

- **Fix: Render product image for selected attributes**

  This is accomplished by rendering the product image using `$block->getImage()` instead of the view model, so the swatch logic is applied automatically.

  Please refer to the [Issue #402](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/402) for more details.

- **Add required attribute to email and password fields in login form**

  Many thanks to Nataly Gorupaha (Atwix) for the contribution!

- **Fix PayPal in context JSON deserialization issue**

  Please refer to the [Issue #403](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/403) for more details.

  Many thanks to Nataly Gorupaha (Atwix) for the contribution!

- **Improve column width in compare product table**

  For more information please refer to the [Merge Request #439](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/439).

  Many thanks to Ruud van Zuidam (Siteation) for the contribution!

- **Improve pager a11y**

  The improvements consist of a number of changes.

  For more information please refer to the [Merge Request #435](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/435).

  Many thanks to Ruud van Zuidam (Siteation) and Sean van Zuidam (Grimlink) for the contribution!

- **Move sales order totals template to correct folder**

  Previously the Luma template was used accidentally.

  Please refer to the [Issue #405](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/405) for more details.

- **Fix: search field renders quotes as escaped HTML entity**

  Please refer to the [Issue #408](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/408) for more details.

- **Fix: initConfigurableOptions is not defined on out of stock configurable product page**

  Please refer to the [Issue #410](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/410) for more details.

- **Fix ApplePay shortcut button throwing an exception when logged in on FPC cache pages**

  The virtual type `Magento\Catalog\Block\ShortcutButtons\InCatalog` is now used instead of the original type `Magento\Catalog\Block\ShortcutButtons`.

  Please refer to the [Issue #413](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/413) for more details.

- **Use image of product matching partial option selection**

  Previously, the product image was only swapped when a full option selection was made. Now the image is updated already after the first selection (like in Luma).
  Also, images already in the initial image set will not be added to the gallery as duplicates when "append to gallery" is selected.

  For more information please refer to the [Merge Request #462](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/462). 

### Removed

- **Removed the composer.lock file from the hyva-themes/magento2-default-theme package**


## [1.1.14] - 2022-04-29

[1.1.14]: https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/compare/1.1.13...1.1.14

### Added

- **Allow modules to automatically add tailwind config and css to styles.css compilation**

  This feature allows modules to be ready to use after installation, without manual adjustments to a themes purge config.
  The feature is enabled for new themes automatically, but can also be used in older themes by installing the npm module
  `@hyva-themes/hyva-modules`, and making two small adjustments to the `tailwind.config.js` and the `postcss.config.js` files.

  More information can be found in [merge request #394](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/394).  
  The documentation for this new feature will be published shortly, too.

### Changed

- **Compress default-theme background hero image**

  This change reduces the file size by 92%!

  Many thanks to Jesse de Boer (Elgentos) for the contribution!

- **Do not cache preconfigured swatch options while editing cart**

  This change in addition to small change in the swatches JS allows setting default product options in PHP again.  

  For more information see [issue #368](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/368).

### Removed

- Nothing

## [1.1.13] - 2022-04-12

[1.1.13]: https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/compare/1.1.12...1.1.13

### Added

- **Support for Magento_Vault**

  The payment vault on the customer account area is now supported.
  Support during checkout depends on the installed checkout.

- **Show configurable product option price adjustments in attribute dropdowns**

  Previously the price adjustments where not displayed in hyvä (but where shown in Luma).

  More information can be found in the [merge request #401](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/401)

- **Add `id` parameter to reset password form required in 2.4.3-p2 and 2.4.4**

  This backward compatible change is required for Magento 2.4.4.

  More information can be found in the [issue #363](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/363)

- **Add i18n/en_US.csv with all Hyvä specific strings**

  This can serve as a base for custom translations.  
  Note: Some pre-made localizations are available at https://gitlab.hyva.io/hyva-themes/internationalization (de_DE, es_ES, fr_FR, it_IRT, nl_NL, pl_PL)

  More information can be found in the [merge request #223](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/223)

  Many thanks to Alexander Menk (iMi digital GmbH) for the contribution!

### Changed

- **Fix z-index issue on homepage for page messages**

  Both the page messages and the section below the hero image have a z-index of 10, which results in the section covering the page message.

  More information can be found in [issue #342](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/342) 

- **Fix Safari Customer account icon display bug**

  The Customer Account icon button in the top menu previously displayed wrong in Safari.

  More information can be found in [issue #341](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/341)

  Big thanks to Sean van Zuidam (Mooore) for the contribution!

- **Fix priority of x-cloak css so it works in all cases**

  Previously more specific styles prevented elements with the `x-cloak` attribute from being hidden.

  More information can be found in [issue #328](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/328).

  Many thanks to Eduard Chyzhyk (Mageworx) for the contribution!

- **Fix inconsistent currency format**

  So far only the store language was used to determine how to format the currency, but in some cases that is not enough, for example `de_CH` (Switzerland German) vs `de_DE` (Germany German).

  More information can be found in the [issue #345](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/345)
 
- **Fix log "Broken reference: the 'div.sidebar.additional' tries to reorder itself"**

  The error message previously was logged on most requests.

  More information can be found in the [issue #348](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/348).

  Big thanks to Sean van Zuidam (Mooore) for the contribution!

- **Consistently use hyva.formatPrice() reducing code duplication**

  More information can be found in the [merge request #404](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/404)

- **Fix: GraphQL queries in recently viewed product widgets assume top level Magento install**

  Previously the store code was missing from GraphQL queries, so in stores with a subfolder in the path, the GraphQL query was be broken.

  More information can be found in the [issue #336](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/336)

  Many thanks to Salvatore Capritta (Synthetic) for the contribution!

- **Bugfix: Can't Override Product Slider Item Template Using Layout XML**

  More information can be found in the [issue #340](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/340)

- **Bugfix: Add all items to cart from wishlist not working**

  More information can be found in the [issue #358](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/358)

  Many thanks to Krijn van de Kerkhof (X-com) for the contribution!

- **Bugfix: Google Map API SDK link broken**

  More information can be found in the [issue #357](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/357)

- **Centralize product list item rendering to remove code duplication**

  Previously the same logic to render product list items was repeated in multiple templates.  
  This required keeping changes in sync, especially when a new cache key item needed to be added.  
  A new method was introduced to the ProductListItem view model in the theme module, that now is used by all the templates.

  More information can be found in the [theme module issue #155](https://gitlab.hyva.io/hyva-themes/magento2-theme-module/-/issues/155)

- **Fix typo in HTML id attribute in checkout discount form toggle**

  More information can be found in the [issue #343](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/343)

- **Apply system configuration setting to show grand total in cart incl. or excl. tax**

  More information can be found in the [issue #334](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/334)

- **Fix: Edit cart item causes default values to be cached for PDP**

  More information can be found in the [issue #283](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/283)

- **Display unavailable shipping rates like in Luma in shipping estimation**

  Depending on the system configuration settings Luma hides or displays unavailable shipping methods during the shipping rate estimation.
  This change replicates that behavior in Hyvä.

  More information can be found in the [issue #292](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/292)

- **Show image of configurable product in cart if configured**

  Previously the image of the selected simple product was shown.  

  More information can be found in [issue #326](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/326)

  Many thanks to Lucas van Staden (ProxiBlue) for the contribution!

- **Fix pager jump styles**

  Previously the "gap" in the pager buttons was missing some styles.

  More information can be found in the [merge request #419](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/419)

  Many thanks to Alex Galdin (IT-Delight) for the contribution!

- **Fix PageBuilder full width row support**

  Previously full width and full bleed row content elements did not break out of the main content container.

  More information can be found in the [issue #361](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/361)

### Removed

- **Remove dependency on Magento_SendFriend**

  Previously, `static-content:deploy` failed if the Magento_SendFriend module was replaced/removed.

  More details can be found in the [merge request #344](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/287)

  Many thanks to Peter Jaap Blaakmeer (Elgentos) for the contribution!

## [1.1.12] - 2022-02-07

[1.1.12]: https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/compare/1.1.11...1.1.12

### Added

- **Add extra action block to cart drawer**

  This is  new extension point that allows displaying additional checkout option buttons.
  In Luma, this block was rendered as HTML server side but then displayed using JavaScript.
  In Hyvä, the block is rendered server side.

  More information can be found in the [merge request #386](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/386)

  Many thanks to Ravinder (redChamps) for the contribution!

### Changed

- **Bugfix: Resolve "Users cannot scroll on mobile menu"**

  Please refer to [issue #301](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/301) for more information.

  Thanks to Ben Crook (Space48) for reporting!

### Removed

- Nothing

## [1.1.11] - 2022-01-28

[1.1.11]: https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/compare/1.1.10...1.1.11

### Added

- **Add testing selector attributes to the PDP**

  More information can be found in the [merge request #367](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/367)

  Many thanks to Andrew Millar (Elgentos) for the contribution!

- **Add missing cart totals container as extension point**

  More information can be found in [issue #324](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/324)

- **Added missing 'form_additional_info' container to login form**

  This adds a missing extension point that also is present in Luma.

  More information can be found in the [merge request #378](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/378)

  Many thanks to Ravinder (redChamps) for the patch!

- **Add Hyvä theme-module to default tailwind purge list config**

  Previously tailwind classes used in the modal templates where not picked up by default.

  More information can be found in [issue #327](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/327)

### Changed

- **Bugfix: Fix cache key for all instances of product_list_item**

  The PageBuilder carousel and grid content type used the shared product list item block, but previously did not set
  the full cache information on the instance before rendering. This caused the previously rendered product to be
  shown.

  More information can be found in [issue #323](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/323)

- **Bugfix: Fix broken "Track your order" link on order view page**

  More information can be found in [issue #329](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/329)

  Many thanks to Alex Galdin (IT Delight) for the contribution!

- **Bugfix: Fix rendering of escaped html entities in product names in compare list**

  Previously special characters in the product name where escaped twice in the product compare list.

  More information can be found in [issue #313](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/313)

  Many thanks to Matt Walsh for the contribution!

- **Fix checkbox custom option checked property update**

  Previously it was not possible to programmatically alter the checkbox state after a user interacted with it.

  More information can be found in [issue #332](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/332)

  Many thanks to Simon Sprankel (Customgento) for the contribution!

- **Fix structured data for product reviews on the product detail page**

  More information can be found in [issue #321](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/321)

  Many thanks to Lucas Vu (JaJuMa) for the contribution!

- **Fix noisy messages in error log on search result page**

  Previously the redeclaration of a container on the search results page polluted the exception.log with
  `main.CRITICAL: The element "search_result_list" can't have a child because "search_result_list" already has a child with alias "additional"`

  More information can be found in [issue #304](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/304)

- **Add guard clause against undefined index in swatch renderer template**

  Previously, if a product attribute was set to "Used in Layered Navigation": "Filterable (no results)", an error was displayed.

  More information can be found in [issue #325](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/325)

- **Prohibit search with less than 3 characters**

  More information can be found in [issue #330](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/330)

### Removed

- Nothing

## [1.1.10] - 2022-01-14

[1.1.10]: https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/compare/1.1.9...1.1.10

### Added

- **Add container extension point to product list item template**

  This allows extensions to add new items to the element containing the add-to-cart, wishlist and compare buttons.

  More information can be found in the [merge request #361](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/361)

- **Add product_sku filter for SSR product sliders**

  This provides feature parity with the GraphQL Hyvä product slider.

  More information can be found in [issue #293](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/293)

- **Add Order Status to Order Detail page in Customer Account**

  More information can be found in [issue #318](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/318)
  
- Many thanks to Lucas Vu (JaJuMa) for the contribution!

### Changed

- **Allow installation in PHP 8 environments**

  More information can be found in [issue #297](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/297)

- **Bugfix: Do not render max allowed amount if "falsy" in add-to-cart form**

  More information can be found in [issue #295](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/295)

- **Apply logo_file if set in layout XML and no logo is configured in the admin area**

  This allows setting the logo with a block argument in layout XML as documented in the [devdocs](https://devdocs.magento.com/guides/v2.4/frontend-dev-guide/themes/theme-create.html#theme_logo).

  More information can be found in [issue #309](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/309)

- **Bugfix: swatch options type number type mismatch in switch statement**

  More information can be found in [issue #307](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/307)

- **Bugfix: hide swatch options for disabled products**

  More information can be found in [issue #307](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/307)

- **Initialize Send Friend form with one input (instead of zero)**

  More information can be found in [issue #310](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/310)

- **Bugfix: do not apply position sort order in product sliders if flat catalog is enabled**

  More information can be found in [issue #308](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/308)

- **Bugfix: on the cart page, keep discount in totals after estimating shipping and tax**

  More information can be found in [issue #296](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/296)

- **Bugfix: handle multiple tax rates when estimating shipping and tax**

  More information can be found in [issue #280](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/280)

- **Bugfix: Can't remove product from compare list**

  More information can be found in [issue #300](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/300)

- **Bugfix: Fixed class name typo to change the width of totals on large screens**

  More information can be found in [merge request #366](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/366)

  Thanks to Guus Portegies (Cees en Co) for the contribution!

- **Improvement: Better SSR slider styling for overflowing pagination bullets and equal item heights**

  More information can be found in [issue #320](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/320)

### Removed

- Nothing removed


## [1.1.9] - 2021-11-29

[1.1.9]: https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/compare/1.1.8...1.1.9

### Upgrade guide

If you're upgrading from <1.1.8 please check the documentation page on upgrading. Any additional information and known bugs/issues to this release will be documented there.

[1.1.9 Upgrading docs](https://docs.hyva.io/hyva-themes/upgrading/upgrading-to-1-1-9.html)

### Added

- **Use Tailwind CSS JIT mode**

  Update the default theme css and tailwind config so it is compatible with the Tailwind CSS JIT mode.

  * Use `npm run build-prod` to build a product bundle with the JIT compiler.  
  * Use `npm run build-dev` to build a unpurged development bundle with the AOT compiler.  
  * Use `npm run watch` to run the JIT file watcher recompiling the css after any change.  
  * Use `npm run browser-sync` to start the browser-sync file watcher.  
    Use `PROXY_URL="https://my-magento.test npm run browser-sync` to specify the backend host.

- **Support recently viewed products**

  In addition to the regular Recently Viewed Product widget, Hyvä also supports configuring recently viewed products
  using the system configuration.

  More information can be found in the [merge request #243](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/243)

  Many thanks to Faran Cheema (Aware Digital) for the contribution!
  
- **Add react-container.phtml to example purge config section in tailwind config**

  With this change uncommenting the line is all that is required after installing the react checkout.

  More information can be found in [merge request #292](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/292).

  Many thanks to Peter Jaap Blaakmeer (Elgentos) for the contribution!

- **Add PageBuilder widgets, styles & product templates**

  Since PageBuilder is now bundled with Magento Open Source, it makes sense to support it out of the box in Hyvä.

  More information can be found in the [merge request #295](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/295)

  Many thanks to John Hughes (Fisheye) for the contribution!

- **Add .gitignore to web/tailwind with node_modules/ entry**

  More information can be found in the [merge request #303](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/303)

  Many thanks to Lorenzo Stramaccia (magespecialist) for the contribution!

- **Bugfix: display values for all custom option types on cart page**

  More information is available on the [issue #187](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/187)

- **Support reCAPTCHA on product review form**

  More information is available on the [issue #70](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/70)

- **Add product search autocomplete**

  More information is available on the [merge request #325](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/325)

- **Add popular search terms page**

  More information is available on the [merge request #326](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/326)

- **Add advanced search page and advanced search results page**
  
  More information is available on the [issue #126](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/126)

- **Add support for downloadable product link selection on PDP**

  More information is available on the [issue #209](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/209)

  Many thanks to Daniel Bello (Sherocommerce) for the contribution!

### Changed

- **Use SSR rendering for product sliders instead of GraphQL**

  The product sliders no longer use GraphQL. The graphql product slider template still is present for backward
  compatibility, but it is no longer used.  
  The items use the product listing template, so add-to-cart and swatches are now supported, too.

  More information can be found on the [merge request #294](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/294)

- **Improve Send to Friend**
  
  The form has been improved a lot, including support for reCAPTCHA.

  More details can be found in the [merge request #228](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/228)

  Many thanks to Lucas van Staden (Proxiblue) for the contribution!

- **Remove defer attribute on CSS link as it has no effect**

  More details can be found in the [merge request #249](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/249)

  Many thanks to Sean van Zuidam (Mooore) for the contribution!

- **Improve Breadcrumbs markup accessibility**

  More details can be found in the [merge request #288](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/288)

  Many thanks to Sean van Zuidam (Mooore) for the contribution!

- **Improve compare and wishlist scripts for product list items**

  Previously the scripts to initialize the Alpine.js components where rendered for each product list item. With this
  change they are only rendered once, thus reducing the pagesize.

  More details can be found in the [merge request #289](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/289)

  Many thanks to Sean van Zuidam (Mooore) for the contribution!

- **Improve YouTube integration**

  * make sure to use youtube-nocookie.com if possible
  * only initialise / embed YouTube once
  * update iframe [API URL](https://developers.google.com/youtube/iframe_api_reference?hl=de#july-19,-2012)

  More details can be found in the [merge request #290](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/290)

  Many thanks to Simon Sprankel (Customgento) for the contribution!

- **Bugfix: Apply logo configuration in Magento 2.4.3 and newer**

  More information can be found in the [issue #252](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/252)

- **Adds fieldset as secondary parent selector to custom field styles**

  Previously field styles where not applied if no form parent tag was present.

  More details can be found in the [merge request #296](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/296)

  Many thanks to Josh Cairney (Swarmingtech) for the contribution!

- **Remove img tag from list of allowed HTML when using escaper::escapeHTML because it throws error**

  More details can be found in the [merge request #297](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/297)

  Many thanks to Wilfried Wolf (Sandstein) for the contribution!

- **Bugfix: Fix custom option price calculation**

  Custom option prices where wrong if the last custom option has no price assigned.

  More details can be found in the [merge request #298](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/298)

  Many thanks to Simon Sprankel (Customgento) for the contribution!

- **Use GraphQL variables instead of string replacements**

  This fixes a number of issues related to parameter escaping and serialization as well as making the queries
  editable with the GraphqlEditor as described [in the docs](https://docs.hyva.io/hyva-themes/writing-code/customizing-graphql.html).

  A new GraphQlQueriesWithVariables view model provides the matching queries. The old GraphQlQueries view model still
  exists unchanged for backward compatibility.

  All queries and mutations now are named, which should help with debugging.

  More information can be found in the [issue #261](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/261)

- **Move GA block to before.body.end by default**

  By default the GA block is meant to be placed in before.body.end for performance reasons.

  More details can be found in the [merge request #305](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/305)

  Many thanks to Josh Cairney (Swarmingtech) for the contribution!

- **Do not render HTML items with duplicate id attributes on product list toolbar**

  This change increases ARIA accessibility compliance.

  More information can be found in the [issue #279](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/279)

- **Apply product settings to qty input**

  Previously many product settings where ignored.

  More details can be found in the [merge request #308](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/308)

- **Make translated string consistent with Luma**

  Previously Hyvä used the string "Please enter a coupon code", while in Luma the string "Please enter a coupon code!"
  is used.

  More details can be found in the [issue #212](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/212)

- **Disable page scrolling if cart loader overlay is visible**

  More information can be found in the [issue #218](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/218)

- **Validate message length according to configured constraints when sharing the wishlist**

  More information can be found in the [issue #223](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/223)

- **Apply configuration "Redirect Customer to Account Dashboard"**

  Previously customers where always redirected to the customer account page regardless of the configuration setting.

  More information can be found in the [issue #234](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/234)

- **Hide zero product price if it is not salable**

  Products that are not salable and have a price > zero still are displayed with the price. This does not matche the
  behavior in Luma.

  More information can be found in the [issue #314](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/314)

- **Bugfix: Preselect product options when editing from cart**

  More information can be found in the [issue #240](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/240)

- **Bugfix: Escape customizable product option title in JS string**

  Previously product option titles included a `'` caused a JavaScript error.

  More information can be found in the [issue #241](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/241)

- **Bugfix: On PDP, uncaught TypeError: Cannot read property 'type' of undefined at Proxy.isTextSwatch**

  The issue only occurred with a configurable product set up with only one configurable attribute that is a swatch
  while at least one child product is out of stock and at least one child product is disabled.

  More information can be found in the [issue #190](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/190)

  Thanks to Guus Portegies (Cees en Co) for figuring out the steps to reproduce the issue!

- **Bugfix: On Cart Page, JavaScript error on invalid country configuration**

  The error occurred if the configured default shipping country was not included in the list of allowed countries.
  Now the checkout will continue to work, but an explanatory error message is logged to the browser console.

  More information can be found in the [issue #259](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/259)

- **Bugfix: include the current category ID in product list item cache key**

  More information can be found in the [issue #260](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/260)

- **Bugfix: On PDP, remove duplicate HTML element ID customer-reviews**

  More information can be found in the [issue #262](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/262)

- **Bugfix: Fix product reviews pagination**

  More information can be found in the [issue #161](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/161)

- **Bugfix: Apply sort by relevance URL parameter on product list page**

  More information can be found in the [issue #273](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/273)

- **Bugfix: prevent duplicate out-of-stock error messages on cart page**

  More information can be found in the [issue #329](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/329)

- **Bugfix: specify proper order for sidebar in sm breakpoint**

  Render the sidebar-main before the main content on sm screens.

  More information can be found in the [issue #242](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/242)

- **Styling improvements**

  * Moved `container` configuration from css to `tailwind.config.js`.
  * Reduce layout shifts on PHP sliders.
  * Since the refactor of `columns` from flex to grids, many pages have had double paddings. These nested container
    classes have now been removed.
  
  More information can be found in the [merge request #332](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/332)

- **Replace stock image with the new Hyvä logo on default homepage content**

  More information can be found in the [issue #278](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/278)

- **Bugfix: hide scrollbar in Firefox like in webkit**

  More information can be found in the [merge request #336](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/336)

  Many thanks to Sean van Zuidam (Mooore) for the contribution!

- **Bugfix: Hide configurable order item children in order page**

  More information can be found in the [issue #281](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/281)

- **Magento Coding Standard compliance and code improvements**

  Many small changes where made to make the code pass the Magento Coding Standards phpcs rules.
  Besides following the Magento Coding Standard, many small refactorings where made so the code complies with our own
  standards. All these changes should be backward compatible. The changes include:
  - Removing underscore prefixs from PHP variables in templates
  - Use `let` and `const` instead of `var` in JavaScript code
  - Remove usages of `$this = this` in JavaScript code

  More information can be found in the [merge request #344](https://gitlab.hyva.io/hyva-themes/magento2-theme-module/-/merge_requests/344)


### Removed

- Nothing removed

## [1.1.8] - 2021-09-24

[1.1.8]: https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/compare/1.1.7...1.1.8

### Added

- **Add estimate shipping form to cart page**

  More details can be found via the [issue #147](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/147).

- **Add customer account update email checkbox**

  The customer account edit form was previously missing this checkbox.

  Thank you to Josh Cairney @ Swarming Technology (@joshcairney) for the contribution.

- **Add container on cart page for custom product type options**

  This container allows rendering additional options for cart line items.  
  More details can be found in the [commit 029d2b](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/commit/029d2b4ff46675feccf3038790485a2b8d593f2c).

- **Add Date-of-Birth form field template with datepicker**

  Thanks to Alex Galdin @ integer_net (@alexgaldin) for the contribution!

- **Add additional information container to cart page**

  The container is rendered below the coupon form field on the cart page.
  More details can be found in the [commit 097918](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/commit/097918837faa6f3faeecb744123d1c166e32adcb).

- **Add container to totals on cart page to render custom totals**

  The container is rendered below the existing totals but before the grand total.
  More details can be found in the [commit 58f447](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/commit/58f4475a4bff85315cd8ef26e8e86fb4e04038e9).

- **Allow setting css classes on generic slider**

  If a value is set for the property `maybe_purged_tailwind_section_classes` on block class rendering the slider, it
  will be used as the container class="" attribute value. If the property is not set, the previous value is used,
  meaning this is a backward compatible change.

  More details can be found in [merge request #246](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/264).

- **Bugfix: add page content for customer/account/confirmation page** 

  Previously, if customer registration required email confirmation, clicking the link on the on-page message triggered
  a stack trace on the page `customer/account/confirmation`.
  
  More information can be found in the [issue #245](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/245).

- **Add meta og tags to PDP**

  Add meta og tags to the PDP.

### Changed

- **Bugfix: Escape product review gql mutation payload values**

  More information about this backward compatible change can be found in the
  [commit ff9095](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/commit/ff9095ed535a64c8861de82400a14e000adf102a)

- **Bugfix: Fix issues with old Safari browser**

  Details on backward compatible change can be found in the [merge request #261](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/261)

  Thank you to Guus Portegies @ Cees en Co (@gjportegies) for the contribution!

- **Bugfix: Make Google Analytics compatible with Magento_GoogleTagManager**

  Previously Google Analytics revenue data was not collected on the frontend order success page on Adobe Commerce.

  Thanks to Jesse de Boer @ Elgentos (@jesse) for investigating!

- **Bugfix: Align subtotal excl. tax value on cart page to the right like the other total modals**

- **Split mobile and desktop menu into separate .phtml files**

  Decoupling the two makes customizing one of the views possible without influencing the other menu.  
  The change is backward compatible.

- **Update TailwindCSS to the latest version**

  The version constraint in the package.json is now set to `2.2.9`.  
  This is a backward compatible change.

- **Apply Logo Dimensions set in the Adminhtml Theme Configuration**

  Previously the logo height and width set in the admin theme config where not applied.
  As long as there is no size configured on the theme, the previous dimensions set in layout XML are still used.
  Because the related view models where added to Magento only in version 2.4.3, they where copied into the Hyva_Theme
  module to provide forward compatiblity for older Magento versions.

  More details can be found in the [issue #221](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/221).

  Thanks to Tomas Kalasz @ CS2 (@TKalasz) for investigating and to Ravinder @ redChamps (@rav-redchamps) for the patch!

### Removed

- **Removed topmenu_static.phtml template**

  The template is now part of the hyva-ui repository.


## [1.1.7] - 2021-08-25

### Added

- nothing

### Changed

- **Bugfix: Remove trailing space in customer prefix option values**

  See [commit](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/commit/c2c6009daaf6048e2725a0e2f98e5604f202bb76)

  Thanks to Daniel Galla (IMI)!

- **Bugfix: Allow authentication-popup to be resubmitted**

  In the authentication popup (when guest checkout is disabled), once incorrect information is entered and the form is submitted, the submit button is “disabled” and re-submitting with the correct information is not possible.

  See issue [#214](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/214)

### Removed

- nothing

[1.1.7]: https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/compare/1.1.6...1.1.7


## [1.1.6] - 2021-08-12
_Version 1.1.6 of the Hyva_Theme module is required for this update_

### Critical
- **Fix for: Subtotals break if address set without shipping method**

  In some edge cases an address could be set on a quote item without a shipping method. This would break the cart total display.
  If default behaviour to quote shipping address is changed, for instance by a third-party module, where an address is set on the quote by default, but no shipping method, this would break the cart instantly.
  
  A direct patch/diff for this issue can be downloaded from commit [`9a78264f` diff](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/commit/9a78264f8726b3120e60e5f9222b36bb1fdeef63.diff)

  See commit [`9a78264f`](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/commit/9a78264f8726b3120e60e5f9222b36bb1fdeef63).


- **Page columns layout refactored from flex to grids**
  
  For a more solid handling of `2columns-right` and `3columns`, the page layout was refactored to CSS grids.
  This means all pages now have 'containered' content by default, since the `.columns` div now has the tailwind `container` class applied.
  
  If you want to build custom pages that are full-width, you now need to define your own page-layout. This means when you're creating custom pages, you no longer need to add in containers on all blocks you add, making layouts more consistent.

  The changes were made in `web/tailwind/components/structure.css` and require you to remove the extra wrapper container we previously introduced in `Magento_Theme/page_layout/override/base/2columns-left.xml`.
  These changes can be viewed in commit [`54c7f6d5`](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/commit/54c7f6d5f2c0ed109e611eb4cb196e453794a31a).
  
  In existing projects, you might end up with double margins on containers after this change.
  We would advise to either:
  1. remove extra containers you added in your content
  2. in case you don't want to update your existing content, keep the previous version of the files `Magento_Theme/page_layout/override/base/2columns-left.xml` and `web/tailwind/components/structure.css` in your child-theme.
    

### Added
- **The current page is recalculated when toggling limiter in toolbar**

  In `Magento_Catalog/templates/product/list/toolbar.phtml`, the active page is now recalculated when you switch the limiter in the toolbar. This change reflects an update in Magento core that was introduced in version 2.4.0.

  See commit [`db90fc6a`](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/commit/db90fc6a9de433e560c7b23826390dc62e9a44e2)

- **Regions now work as expected on customer account address forms**

  See commit [`78f144fe`](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/commit/78f144fe7c7ae6130507095c8632403b834b911a)


- **A lot of A11Y changed were made**
    - Button focus styles are improved (using Tailwind `ring` classes)
    - Removed nested `<nav>` and `<footer>` elements
    - header search icon had empty ref, changed to button
    - header search was missing submit button
    - header customer account had no focus state
    - PLP toolbar now has logical tab order
    - Swatches are now visibly focusable
    - "skip header" link was missing
    - Sliders now have a focus-within border when focused
    
  See [Issue `#204`](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/204), [Issue `#205`](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/205) and related Merge requests.

  Thanks to Clever Age for reporting.
  
  _NB: if you report other A11Y issues to us we'd be happy to address them_


- **Cart error messages are improved**
  
  General error messages in the cart are now styled (because they are now rendered by the global messages component).
  Cart-items that contain errors now show these errors in-line.
  
  This requires an update of the `hyva-themes/magento2-theme-module` to version 1.1.6.

  See all commits in [Merge Request `!249`](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/249).

### Changed
- **Fix for invalid aria-label on PDP swatches**

  `aria-labelledby="radiogroup-label"` was removed on the swatch render container div.

  See `Magento_Swatches/templates/product/view/renderer.phtml` and commit (`8970a96a`)[https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/commit/8970a96adca6195012196b06550d11d50c7bd9a3]

  Thanks to Hitesh Koshti (Ontapgroup) for contributing.


- **Fix for activeSelectOptions on Bundled product Radio options**

  Previously, when a radio option's quantity on a bundle product was set to user defined, the activeSelectOptions were improperly defined and the quantity input fields did not have their value or state properly set. The value got set to 0 and this negatively impacted the price calculation as well.
  Additionally, if the radio bundle option is required, there was no change binding on the "None" field.

  See `Magento_Bundle/templates/catalog/product/view/type/bundle/option/radio.phtml` and commit [`dd51fdfb`](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/commit/dd51fdfbdbb237851d917e0a3e4b69913cb83ffc)

  Thanks to Josh Cairney (Swarming Tech) for contributing.


- **Fixed issue where Cart items qty input fields have no label on cart page**

  The cartItem quantity change input field now has a label for screenreaders

  See `Magento_Checkout/templates/cart/items.phtml`
  
  Thanks to Hitesh Koshti (Ontapgroup) for contributing. 


- **Customer Login legends are now consistently styled**

  The form titles/legends for customer login and account registration are now consistently styled

  Thanks to Hitesh Koshti (Ontapgroup) for contributing.


- **Fix for bundled product Radio/Select if only one option present**

  When either the radio or select is a single option the user defined checkbox did not take effect which disables the qty input.

  See commit [`a3aaf192`](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/commit/a3aaf1929b4af173f604b0604b20bc4ae166fc14)

  Thanks to Ryan Hissey (Aware Digital) for contributing.


- **Bundled product qtyHelper method is now defined in parent component**

  The `qtyHelper` methods that memorize bundle option quantities selected by vistitors is now no longer generated for all bundle option, but defined once in the `initBundleOptions` component.

  See commit [`7d452495`](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/commit/7d45249514b04aabc26868218df4e257ccb30abc)

  Thanks to Ryan Hissey (Aware Digital) for contributing.


- **Cart display of totals and coupon are improved**

  We've refactored how cart subtotals look.

  See commit [`e4efe6cc`](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/commit/e4efe6ccd6298906995abf6abb17cda2b1102df4) or related issue with screenshots [`#195`](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/195)


- **Fix re-definition of `category.view.container` in layout xml**

  In `Magento_Catalog/layout/catalog_category_view.xml`, the `category.view.container` is no longer redefined.

  See commit [`3ce5c6c1`](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/commit/3ce5c6c1414d759ac263b9ddf18dc8030309ae17#3937fe081bbe3ab4df39105d411f910f6d2347b6)

  Thanks to John Hughes (Fisheye) for contributing


- **The `category.product.list.additional` has moved to `Magento_Catalog/layout/catalog_category_view.xml`**

  Thanks to Nathan Day (Fisheye) for contributing


- **The Checkout button in cart is no longer disabled on error**

  The state of the cart can change by changing quantities in the cart.
  Clicking "Proceed to Checkout" performs a serverside validation of the cart and will return back at the cart in case the cart is still invalid.

  An example is "Minimum order amount". If the minimum is not met, it will show a warning. If you would increase the quantity of an item so that the minimum is met, the message disappears. Validation takes place again when you continue to checkout.

  See commit [`1d5747d8`](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/commit/1d5747d8e5cf7ccc29cf465dd7b89e47e8fede14)


- **The product sections renderer `trim on boolean` error is fixed**

  The following error would occur:
  TypeError: trim() expects parameter 1 to be string, bool given in `Magento_Catalog/templates/product/view/sections/product-sections.phtml`
  
  See commit [`e1459009`](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/commit/e14590093054b9cf0058f0c5df6cffee4bbccf9f)

  Thanks to Victor Chiriac (Magecheck) for reporting

### Removed
- none

[1.1.6]: https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/compare/1.1.4...1.1.6


## [1.1.5] - version number SKIPPED
- 1.1.5 was skipped in order to stay in sync with `hyva-themes/magento2-theme-module`

## [1.1.4] - 2021-06-16
_Version 1.1.4 of the Hyva_Theme module is required for this update_

### Added
- **A Dispatch event that is triggered after accepting cookies**

  After accepting cookies `window.dispatchEvent(new CustomEvent('user-allowed-save-cookie'));` is now being triggered.

  In the Hyva_Theme module (v1.1.4) cookies are not stored until this event is triggered.

  See `Magento_Cookie/templates/notices.phtml`

  Thanks to Mirko Cesaro (Bitbull) for contributing

- **Initial active gallery image now defaults to 0 if no main image set**
  
  If no main image is set, the initial active image is now set to `0`.
  
  See `Magento_Catalog/templates/product/view/gallery.phtml`

  Thanks to Simon Sprankel (CustomGento) for contributing

- **In customer account area, sales items are now showing child-items**
  
  See `Magento_Sales/templates/order/invoice/items.phtml`, `Magento_Sales/templates/order/items.phtml` and commit [`72751505`](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/commit/72751505ed80a86987adf9eca3834a2369f7295c)

- **Customer account sales now show prices including tax**
  
  The layout file at `Magento_Tax/layout/sales_order_item_price.xml` was added, which adds tax to sales items in customer account, when needed.

- **Add-to-cart button on PDP has its original ID back**
  
  The add-to-cart button now contains `id="product-addtocart-button"` again, as it does in core Magento. This would help frontend testing frameworks in functioning.
  
  See `Magento_Catalog/templates/product/view/addtocart.phtml`

  Thanks to Laura Folco for contributing

- **Switching configurable options now dispatches an event**
  
  The event `configurable-selection-changed` is now dispatched from `Magento_ConfigurableProduct/templates/product/view/type/options/js/configurable-options.phtml`

  This allows you to hook into this event in 3rd party modules or custom code.

  Thanks to Simon Sprankel (CustomGento) for contributing

- **A generic slider template was added**
  
  `Magento_Theme/templates/elements/slider-generic.phtml` was added. Hyva_Theme module version 1.1.4 or higher is needed to use the generic slider.
  
  Please refer to `Rendering Sliders` in the Hyvä Documentation for full details on how to use the generic slider.

- **Out of stock swatches are now shown**
  
  Out of stock swatches are now implemented on PLP and PDP.
  Also, the phtml that renders swatches is consolidated to a single file: `Magento_Swatches/templates/product/swatch-item.phtml`
  Same goes for swatch tooltips: `Magento_Swatches/templates/product/tooltip.phtml`
  
  See commit [`fd3f3aa3`](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/commit/fd3f3aa35baf415efb1ea885ff2ee71c6c5376ae)

- **Email To Friend Button was added to PDP**

  The EmailToFried/SendFriend button has been added to the Product Detail Page.

  See commit [`a5211128 `](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/commit/a521112806aaf7c88fa4c94b3ff21901dcd4a58f)


### Changed
- **Product List items are now cached in block_html cache**

  This reduces cost for products with swatches, as they are loaded for
  each product individually and not as part of the product collection.

  See `Magento_Catalog/templates/product/list.phtml`
  
- **Top Menu now uses generic template block with viewmodel cache tags**

  Now that the Navigation View Model uses getIdentities() we can set the cache_tags on the topmenu and properly cache the menu in Full Page Cache.
  
  See `Magento_Theme/templates/html/header/topmenu.phtml` and commit [`6736ae66`](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/commit/6736ae66dc13cee9f5d612f2c1342e40f80b28b1)


- **PLP Titles have been reintroduced and Styled**
  
  We no longer remove the title in `Magento_Catalog/layout/catalog_category_view.xml`.

  Beside that, the titles are restyled a bit overall.

  Thanks to Rich Jones (Aware Digital) for contributing

- **Swatch options now correctly return `label` before `value`**

  See `Magento_Swatches/templates/product/js/swatch-options.phtml`

  Thanks to Rich Jones (Aware Digital) for contributing

- **Swatch labels are now properly closed with </label>**

  See `Magento_Swatches/templates/product/view/renderer.phtml`

  Thanks to Rich Jones (Aware Digital) for contributing

- **Product Description is now rendering Directives properly**

  `$productViewModel->productAttributeHtml()` is now used to render product descriptions. That means variables in `{{directives}}` are now rendered.
  
  See `Magento_Catalog/templates/product/view/description.phtml`

- **An empty product description no longer renders the parent element on PDP**
  
  See `Magento_Catalog/templates/product/product-detail-page.phtml`

  Thanks to Victor Chiriac (Mage Check) for contributing.

- **Additional product data on PDP is now rendered with a renderer**

  As in default Magento (Luma), additional data is now rendered with a renderer (`Magento_Catalog/templates/product/view/product-sections.phtml`) which allows you to change the display of these sections to a custom implementation.
  This makes it a lot easier to implement a tabbed display or accordeon. It also enables you to render additional data from 3rd party modules using the standard Magento layout group:
  ```
  <block class="Magento\Catalog\Block\Product\View\Attributes" template="Magento_Catalog::product/view/description.phtml" group="detailed_info"/>
  ```
  
  See 
  - `Magento_Catalog/layout/catalog_product_view.xml` and files in `Magento_Catalog/templates/product/view/sections/`
  - or all commits in [`Merge Request 201`](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/merge_requests/201)

- **Customer account registration pages are no longer cached**

  If any error occurred during customer signup & customer was being redirected back to the registration form with error message. But the form data would not be preserved due to full-page caching.

  `cacheable="false"` has now been added to the `customer_form_register` block.

  See `Magento_Customer/layout/customer_account_create.xml`
  
  Thanks to Ravinder (redMonks/redChamps) for contributing

- **Shopping assistance checkbox has been added to registration form**

  See `Magento_Customer/templates/form/register.phtml` and `Magento_LoginAsCustomerAssistance/layout/customer_account_create.xml`

  Thanks to Ravinder (redMonks/redChamps) for contributing

- **Logo image size variables are now correct**
  
  In `Magento_Theme/layout/default.xml` the variables `logo_img_width` and `logo_img_height` were renamed to `logo_width` and `logo_height`
  This changed in 2.3.5+ in Magento Core.
  
  Thanks to Guus Portegies (Cees en Co) for reporting

- **The checkout url in de minicart/cart-drawer changed**

  `checkout/index` was changed to `checkout`, which normally renders the same page/url. But, some 3rd party extensions (such as Mageplaza_OneStepCheckout) replace the `checkout` url to alter the path to a checkout page.
  
  See `Magento_Theme/templates/html/cart/cart-drawer.phtml`

- **Empty cart continue shopping now links to homepage**

  Previously, this linked back to the cart.

  Thanks to Daniel Galla (iMi) for contributing

### Removed
- **Standard Quantity field is no longer shown on Grouped products**
  
  See `Magento_Catalog/templates/product/view/quantity.phtml`

  Thanks to Rich Jones (Aware Digital) for contributing

- **Pagination was removed from customer account order print**

  See `Magento_Sales/layout/sales_order_print.xml`

- **Aria labelledby has been removed from PLP swatch-items**

  `aria-labelledby="radiogroup-label"` was causing LightHouse best practice warnings and thus has been removed.

  See `Magento_Swatches/templates/product/listing/renderer.phtml`
  
  Thanks to Hitesh Koshti (On Tap) for contributing

[1.1.4]: https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/compare/1.1.3...1.1.4

## [1.1.3] - 2021-05-07
_Version 1.1.3 of the Hyva_Theme module is required for this update_

### Added
- none

### Changed
- **Pass product instance to price view model instead of relying on internal state**

  This improves reusability of templates and allows changing the order in which they are rendered.

### Removed
- none

[1.1.3]: https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/compare/1.1.2...1.1.3

## [1.1.2] - 2021-05-03
_Version 1.1.2 of the Hyva_Theme module is required for this update_

### Added
- **Added `clear-messages` event to the messages-component**
  
  Messages from the messages component can now be cleared with an event that removes all messages in `Magento_Theme/templates/messages.phtml`  

  Can be used as `window.dispatchEvent(new CustomEvent('clear-messages'));`

- **Select template for custom-options**

  Custom options of the type `dropdown` and `multiple` are now rendered by a .pthml file, instead of using `\Magento\Catalog\Block\Product\View\Options\Type\Select\Multiple::_toHtml`
  A new viewModel and method were created for this: `\Hyva\Theme\ViewModel\CustomOption::getOptionHtml`

  This viewModel renders `Magento_Catalog/templates/product/composte/fieldset/options/view/multiple.phtml` (new) or `Magento_Catalog/templates/product/composite/fieldset/options/view/checkable.phtml` (existing).

- **Custom options are added for Bundled products**

  Turns out, when `dynamic pricing` is disabled, bundled products can have custom options. Who knew? We didn't.
  So now, bundled products contain custom options.
  
  This means that mostly extra logic was added to pricing at `Magento_Bundle/templates/catalog/product/view/price.phtml`

  Also the container `product_info_bundle_options_top` was *re-added* from core Magento and `product_info_bundle_options_bottom` was newly created.

### Changed
- **Added robots.txt file back to layout**

  See `Magento_Sitemap/layout/robots_index_index.xml`

  Thanks to Rik Willems (RedKiwi) for contributing.

- **Fix hardcoded required company field on customer account**

  See `Magento_Customer/templates/widget/company.phtml`
  
  Thanks to Aad Mathijssen (Isaac) for contributing.

- **Fix hardcoded required region field on customer account**

  See `Magento_Customer/templates/address/edit.phtml`

  Thanks to Aad Mathijssen (Isaac) for contributing.

- **Replaced removeEventListener with `{ once: true }` on addEventListener**

  See `Magento_ReCaptchaFrontendUi/templates/js/script_loader.phtml`:
  `document.body.addEventListener("input", loadRecaptchaScript, { once: true });`

  Thanks to Javier Villanueva (Media Lounge) for contributing.

- **FIX: reload customerData in cart after applying coupon code** 

  See `Magento_Checkout/templates/cart/js/cart.phtml`

- **Fix: don't show PLP Swatches for attributes with getUsedInProductListing disabled**

  See `Magento_Swatches/templates/product/listing/renderer.phtml`

- **Swatch display improvements**
    - set height and width on all non-text swatches
    - use swatch value and fall back to swatch label
    - hide image container in tooltip if no image/color available
    - add whitespace-nowrap to swatch and tooltip text
  
  See commit [`2ebc7a5c`](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/commit/2ebc7a5c41b2c888cbbf551dd42907763ae24c43)

- **Added .editorconfig for unified whitespace handling

  See `.editorconfig`
  
  Thanks to Sean van Zuidam (Mooore) for reporting.

- **Added initActive event to gallery that activates the main image**

  Previously, the first image in the image list would show as initial image.
  Now, the `main image` is activated on load.
  
  See `Magento_Catalog/templates/product/view/gallery.phtml`

  Thanks to Rik Willems (RedKiwi) for contributing.

- **Fix price calculation for bundled tier prices**

  Previously, the tierPrice price-reduction was calculated, instead of adding the result price.

  See `Magento_Bundle/templates/catalog/product/view/price.phtml`

  Thanks to Gautier Masdupuy (Diglin) for reporting.

- **Change item qty change event to input event in cart**

  Previously, cart item quantity changes in the cart were triggered `onBlur`, this was changed to `onInput`.
  This results in quicker feedback. Changes are still debounced with 1 second:
  `x-on:input.debounce.1000="mutateItemQty(item.id, $event.target.value);"`

- **Quality improvements on the cart page**
    - Direct customerData retrieval from localStorage was removed and replace with the `private-content-loaded` event only.
    - Replaced $this instances combined with `function(){}` for ES6 arrow functions and `this`
    - Added error feedback to `fetch()` methods, report errors to console and show general error message to visitors
    - Report 

- **Fix adding multiple select options to wishlist**
  
  Selected product options (custom, configurable, bundle and grouped) of the type `select-multiple` are now properly sent to the wishlist.

  See `Magento_Catalog/templates/product/view/addtowishlist.phtml`

  Thanks to Gautier Masdupuy (Diglin) for reporting.

- **Fix price calculation for bundled options**

  A bug was introduced in 1.1.1 that removed x-ref from bundle-option input fields, replacing then with   
  `document.querySelector(option[data-option-id="${optionId}-${selectionId}"]`

  Two issues occured:
  - not all inputs had the `data-option-id` attribute
  - not all inputs are of the type `option`

  The querySelector was changed to `[data-option-id="${optionId}-${selectionId}"]` and the attribute was added to the missing option types

  See `Magento_Bundle/templates/catalog/product/view/type/bundle/options.phtml` and `Magento_Bundle/templates/catalog/product/view/type/bundle/option/*.phtml`

- **Only validate 1 option for custom option checkboxes**
  
  Thanks to Hrvoje Jurišić (Favicode) for reporting.

- **Calculate product final price when configuring a product in cart with custom options**

  Previously, when editing a product in the cart, the product final price was only updated after changing custom options.
  Now, already selected options are properly selected when loading the configure cart-product page.

  See `initSelectedOptions` in `Magento_Catalog/templates/product/view/options/options.phtml`

- **Fix uploading new custom option file**

  Previously when editing a product in the cart with an uploaded custom-option-file, a new file would not be uploaded.
  Now, the value `save_new` is properly set on the hidden file-field.
  
  See `Magento_Catalog/templates/product/view/options/type/file.phtml`

- **Styling of bundled options was improved on smaller viewports**
  
  Mostly: input fields would break out of the containing columns because of the browsers default min-width value of `<fieldset>`
  
  See `Magento_Catalog/templates/product/view/options/wrapper/bottom.phtml`, `Magento_Bundle/templates/catalog/product/view/summary.phtml` and `Magento_Bundle/templates/catalog/product/view/type/bundle/options.phtml`

- **Escaping of additional attributes was removed to allow html to be rendered**

  Thanks to Vinai Kopp for contributing.

- **PDP prices are overhauled to respect all tax-settings**

  Tax display was inconsistent, mostly when selecting `catalog prices include tax` and `display product page prices excluding tax`.

  Price retrieval was refactored into a viewModel in `Hyva_Theme`: `\Hyva\Theme\ViewModel\ProductPrice`.
  This applies to:
  - Product price
  - custom options
  - tier prices
  - bundle options

  See commit [`61b3f1a0`](https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/commit/61b3f1a0fd557657d4de4103340772dff3893d5e)

### Removed
- `Hyva_Theme/templates/js/localStorageConfig.phtml`

  The file `localStorageConfig.phtml` was removed, since it is an anti-pattern to retrieve customerData from localStorage directly.
  Instead the `private-content-loaded` event should be used. Please refer to the documentation for more information on the `private-content-loaded` mechanism.

[1.1.2]: https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/compare/1.1.1...1.1.2

## [1.1.1] - 2021-04-08
### Added
- none
### Changed
- **Resolved issues with Configurables/Swatches:**
    - Empty swatches now render correctly
    - Dropdown attributes now render correctly with Swatches enabled. Therefore `Magento_ConfigurableProduct/templates/product/view/options/configurable.phtml` needed to be moved to `Magento_ConfigurableProduct/templates/product/view/type/options/configurable.phtml`
    - `initConfigurableOptions_{product_id}()` changed to `initConfigurableDropdownOptions_{product_id}()` in order to add `$block->getJsonConfig()` in a `<script>` block instead passing it through the `x-data=` attribute.
    - PLPs no longer try to render non-swatch attributes
    
   Thanks to Antonio Carboni (Magenio) for reporting
    
Please refer to [1.1.1] for all diff changes 

### Removed
- none

[1.1.1]: https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/compare/1.1.0...1.1.1

## [1.1.0] - 2021-04-02
### Added
- **Compare products sidebar added**
  
  Thanks to Timon de Groot and Sean van Zuidam (Mooore) for contributing.

- **Product Attributes listing added**
  
  The `product.attributes` was added to product detail pages, which list all available attributes for a product (as an addition to the 'featured attributes' listed on top of PDPs).  

  Thanks to Sean van Zuidam (Mooore) for contributing.
  
- **In Product Listings, price and image can now be updated**
  
  To support swatches on PLPs, the price and image can now be updated with events:
  `update-gallery-<?= (int)$productId ?>` and `update-prices-<?= (int)$productId ?>`
  
  See `Magento_Catalog/templates/product/list/item.phtml`

- **Empty checkout now shows message**
  
  If no checkout installed, a message is now being shown.
  
  See `Magento_Checkout/layout/checkout_index_index.xml`

- **Checkout registration now works**
  
  After checkout, the registration option is now shown.
  
  See `Magento_Checkout/templates/registration.phtml`
  
  Thanks to Vincent Marmiesse (PH2M) for contributing.

- **A footer column container was introduced**

  A wrapper column for the footer was added `Magento_Theme::html/footer/column.phtml`
  
  See `Magento_Directory/layout/default.xml` for usage.

- **Login as customer is now fully compatible**
  
  The default login as customer from the admin area now works, including the customer-account-area toggle to allow accounts to be controlled by store-owners.

  See `/Magento_LoginAsCustomerFrontendUi/`
  
  Thanks to Barry vd. Heuvel (Fruitcake) for contributing.  
  
- **Currency switchers were added**
  
  The footer now loads a currency switcher.
  
  See `Magento_Directory/layout/default.xml` and `Magento_Directory/templates/currency.phtml`
  
- **Store and Language switchers were added**
  
  The footer now loads a store and language switcher, if required.
  
  See `Magento_Store/layout/default.xml`, `Magento_Store/templates/switch/languages.phtml` and `Magento_Store/templates/switch/stores.phtml`

- **Configurable swatches were added**
  
  Swatches are now loaded on PLP and PDP pages. The swatches in layered navigation were already present but are now better styled and include tooltips.
  
  See `/Magento_Swatches/` for all changes.
  
  An important new pattern is the extension of already existing Alpine Components by merging/extending the initObjects.
  As present in `Magento_Swatches/templates/product/view/renderer.phtml`:
  
  ```
      <?= $block->getChildHtml('options_configurable_js') ?>
      <?= $block->getChildHtml('options_swatch_js') ?>
  
      <script>
          function initConfigurableSwatchOptions_<?= (int) $productId ?>() {
              const configurableOptionsComponent = initConfigurableOptions(
                  '<?= (int) $productId ?>',
                  <?= /* @noEscape */ $block->getJsonConfig() ?>
              );
              const swatchOptionsComponent = initSwatchOptions(
                  <?= /* @noEscape */ $block->getJsonSwatchConfig() ?>
              );
  
              // here we merge `configurableOptionsComponent` with `swatchOptionsComponent`
              return Object.assign(
                  configurableOptionsComponent,
                  swatchOptionsComponent
              );
          }
      </script>

  ```
- **Default Footer links were added**
  
  A static phtml file was added to load common footer links.
  
  See `Magento_Theme/layout/default.xml` and `Magento_Theme/templates/html/footer/links.phtml`
### Changed
- **Improved bundle option performance**
  
  On bundled products with large amount of options, `x-ref` used excessively in a loop caused performance issues.
  These were refactored to `document.querySelector()` and `document.getElementById()` lookups.
  
  See `Magento_Bundle/templates/catalog/product/view/type/bundle/options.phtml` and https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/93
  
  Thanks to Gautier Masdupuy (Diglin) for reporting.

- **product.info.options.wrapper was reintroduced**
  
  https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/117
  
  For compatibility with 3rd party modules / extensibility.
  See `Magento_Catalog/layout/catalog_product_view.xml`
  
  Thanks to Laura Folco for reporting.
  
- **Limiter and ViewMode in toolbar no longer break layout when empty**
  
  The Limiter and ViewMode now render empty containers to prevent the layout from breaking when they are disabled.
  
  Thanks to Judith Demets (Storefront) for contributing

- **Alt and Title fallbacks are added to the PDP image gallery**
  
  See `Magento_Catalog/templates/product/view/gallery.phtml`
  
  Thanks to Aad Mathijssen (Isaac) for contributing.

- **Tax display on PDP is now correct**
  
  https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/issues/115
  
  Previously, if catalog prices were excluding tax but displayed with tax, the tax would not be added correctly.
  
  Thanks to Antonio Carboni (Magenio) for reporting

- **Configurable prices now show 'as low as' until all options selected**
  
  See `Magento_Catalog/templates/product/view/price.phtml`
  
  Thanks to Konrad Langenberg (imi) for contributing.

- **min and max screenheight values are better named**
  
  Previously, `min-height: 50vh` was declared as `min-h-50`, this has been changed to `min-h-screen-50`.
  
  See `web/tailwind/tailwind.config.js`
  
  Please check your codebase for any instance of `min-h-{25,50,75}` as well as `max-h-{25,50,75}` and replace with `min-h-screen-X` and `max-h-screen-X` values. 

  Thanks to Sean Zuidam (Mooore) for reporting

- **Cart shipping totals now display correctly**

  See `Magento_Checkout/templates/cart/totals.phtml`
  
  Thanks to Victor Chiriac (Mage Check) for contributing.

- **Alpine Component JS for Configruable options moved to child block**
  
  In order to make `initConfigurableOptions()` reusable and extendable, it was moved into `Magento_ConfigurableProduct::product/view/options/js/configurable-options.phtml`

  This was needed for integration of Configurable Swatches without duplication of a large amount of JavaScript code.
  
  See `Magento_ConfigurableProduct/layout/catalog_product_view_type_configurable.xml`, `Magento_ConfigurableProduct/templates/product/view/options/configurable.phtml` and `Magento_ConfigurableProduct/templates/product/view/options/js/configurable-options.phtml`.

- **Customer account edit page password error message moved**
  
  for better layout stability, the structure of `Magento_Customer/templates/form/edit.phtml` changed to prevent layout shifts.

- **Customer menu in header now respects `isAllowed` setting for account registration**
  
  See `Magento_Customer/templates/header/customer-menu.phtml`
  
  Thanks to Barry vd. Heuvel (Fruitcake) for contributing.
  
- **Customer account edit prefix field now respects `isPrefixRequired` setting**
  
  Thanks to Philipp Neuteufel (Limesoda) for reporting.  

- **Footer newsletter subscription styled more consistently**
  
  The footer newsletter form is now styled more in line with the rest of the layout.

- **PDP reviews now take current storeview in account**
  
  The `store` header was previously missing from GraphQL calls.
  
  See `Magento_Review/templates/customer/list.phtml` and `Magento_Review/templates/form.phtml`

- **Orders and Returns for guests now correctly toggles between Email and ZIP code`
  
  Previously, the change event of the "Find Order By" dropdown was handling the wrong event data.
  
  `event.originalTarget.value` was changed into `event.target.value`.
  
  See `Magento_Sales/templates/guest/form.phtml`
  
- **The cart drawer now respects the `display sidebar` setting for minicart**
  
  If `checkout/sidebar/display` is set to `no`, the cart-drawer is no longer loaded.
  
  See `Magento_Theme/layout/default.xml`
  
  Thanks to Rik Willems (RedKiwi) for contributing.

- **The product slider now checks for `visiblity` and `status` of linked products**
  
  Upsells, Cross-sells and Related products are not filtered by graphql on storefront visiblity.
  We therefore added the `visibility` and `status` attributes to the graphql result so that we can filter on them.
  
  See `Magento_Theme/templates/elements/slider.phtml`

- **Escaping was improved in the topmenu**
  
  See `Magento_Theme/templates/html/header/topmenu.phtml`
  
  Thanks to Aad Mathijssen (Isaac) for contributing.

- **Browsersync improvements**
  
  Improvements to browsersync config were made to prevent form-key issues.
  
  Thanks to Javier Villanueva (Media Lounge) for contributing.
     
### Removed
- **`<script>` tags no longer contain the `defer` attribute**
  
  Since these have no effect...

- **Duplicate function declarations in Alpine Components**
  
  For IE11 compatibility we used to declare function names in Alpine init objects with an explicit function name. These have now been removed.
  For example:
  ```
  { addToWishlist: function addToWishlist(productId) { ... } }
  ```
  became:
  ```
  { addTowishList(productId) { ... } }
  ``` 

[1.1.0]: https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/compare/1.0.0...1.1.0

## [1.0.0] - 2021-02-15
### Added
- Initial Release added

### Changed
- see [1.0.0]

### Removed
- none

[1.0.0]: https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/compare/0.2.0...1.0.0

# Beta releases
#### [0.2.0] - 2021-02-03
#### [0.1.0] - 202-12-09

[0.2.0]: https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/compare/0.1.0...0.2.0
[0.1.0]: https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/tags/0.1.0
