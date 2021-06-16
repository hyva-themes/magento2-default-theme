# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

[Unreleased]: https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/compare/1.1.4...master

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

- **Add-to-cart button on PDP has it's original ID back**
  
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

  If any error occured during customer signup & customer was being redirected back to the registration form with error message. But the form data would not be preserved due to full-page caching.

  `cacheable="false"` has now been added to the `customer_form_register` block.

  See `Magento_Customer/layout/customer_account_create.xml`
  
  Thanks to Ravinder (redMonks/redChamps) for contributing

- **Shopping assitance checkbox has been added to registration form**

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



[1.1.4]: https://gitlab.hyva.io/hyva-themes/magento2-default-theme/-/compare/1.1.1...1.1.2


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
