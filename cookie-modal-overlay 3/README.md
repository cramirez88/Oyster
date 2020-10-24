# Simple Overlay
This project contains a simple and full configurable jQuery plugin that loads a cookie-controlled overlay on a page which can also only be shown once within a specific period. The plugin is fully configurable and the loading of the overlay can be triggered automatically or by specific events. If you want to try it yourself, simply download the latest version and follow the installation guide below. 

## Prerequisites
* Basic web frontend knowledge
* jQuery core library

## Download / Installation
1. [Download v1.0.3](https://github.com/thexmanxyz/Simple-Overlay/archive/v1.0.3.zip) of Simple Overlay
2. Extract the files and copy them to your website folder
3. Define the CSS and JS resource files in your HTML page. You can also place the `<script>` tag after your `<body>` content. Basic resource import example:
   * **JS (< 4kB):**
   ```HTML
   <script src="js/simple-overlay.min.js"></script>
   ```
   * **CSS (~ 2kB):**
   ```HTML
   <link href="css/simple-overlay.min.css" rel="stylesheet">
   ```
   * **SCSS(~ 2kB):** if you want to use SCSS instead
   ```SCSS
   @import 'simple-overlay.scss';
   ```
4. Initialize the plugin with basic values as follows:
   ```JS
   $('body').simpleOverlay({});
   ``` 
   
   or
   
   ```JS
   jQuery('body').simpleOverlay({});
   ```
5. If you want to further customize the appearance or behavior please take a closer look on the plugin parameters and their explanation listed in the next section.

## Configuration and Parameters
The plugin can be easily configured during the initialization and the following parameters are currently available. The listing contains the parameters together with their default values.

- `attach: true,` | Defines whether the overlay HTML should be automatically attached on plugin initialization.
- `openOnInit: true,` | Defines whether the overlay should be shown on plugin initialization.
- `checkOnInit: true,` | Defines whether the cookie should be checked before the overlay is shown.
- `closeOnEsc: true,` | Defines if a key press on ESC should close the overlay or not.
- `background: '',` | Background image used for the overlay. Preferably a svg image which can be scaled to screensize.
- `style: 'black',` | Set the color style for the overlay. Supported values are `black` / `b` or `white` / `w`.
- `containerId: 'simple-overlay',` | The id used for the overlay container during initialization and identification.
- `contentContainerClass: 'simple-container',` | The class attached to the content container.
- `content: '',` | The HTML appended to the content container. This is the text shown on the overlay.
- `revision: 0,` | The current overlay revision. If you want to reset the overlay state increase the revision by one.
- `clickEvents: {` | Click events attachable by CSS selectors for different operations.
    - `open: [],` | Additional selectors used for click events that cookie-dependent open the overlay.
    - `alwaysOpen: [],` | Additional selectors used for click events that always open the overlay.
    - `close: []},` | Additional selectors used for click events that close the overlay.
- `cookie {` | Cookie settings used for overlay control.
    - `name: 'simple-overlay',` | This parameters contains the name used for creating the plugin cookie.
    - `expiry: 30},` | This parameters defines the expiry time (in days) for a cookie set by the plugin.
- `attachContainer: function(){ ... },` | Handles the DOM attachment of the overlay container.
- `initializeOpen: function(){ ... },` | Controls the overlay auto loading behavior.
- `openOverlay: function(){ ... },` | Shows the overlay (e.g. on open events).
- `openOverlayCheck: function(){ ... },` | Shows the overlay cookie-dependent (e.g. on open events).
- `closeOverlay: function(){ ... },` | Hides the overlay (e.g. on close events).
- `setCookie: function(){ ... },` | Sets a cookie for the plugin.
- `getCookie: function(){ ... },` | Retrieves a cookie set by the plugin.
- `checkCookie: function(){ ... },`| Determines whether the overlay should be shown or not.
- `triggerOpen: function(always){ ... },` | Defines overlay open events by a given flag.
- `triggerCookieOpen: function(){ ... },` | Defines overlay cookie-dependent open events.
- `triggerAlwaysOpen: function(){ ... },` | Defines overlay always open events.
- `triggerClose: function(){ ... },` | Defines overlay close events.
- `triggerCustom: function() { ... },` | Defines custom trigger events.
- `beforeAttachContainer: function(){ ... },` | Called before container attached.
- `beforeOverlayOpen: function(){ ... },` | Called before overlay shown.
- `beforeOverlayClose: function(){ ... },` | Called before overlay hidden.
- `beforeSetCookie: function(){ ... },` | Called before cookie set.
- `beforeGetCookie: function(){ ... },` | Called before cookie retrieved.
- `afterAttachContainer: function(){ ... },` | Called after container attached.
- `afterOverlayOpen: function(){ ... },` | Called after overlay shown.
- `afterOverlayClose: function(){ ... },` | Called after overlay hidden.
- `afterSetCookie: function(){ ... },` | Called after cookie set.
- `afterGetCookie: function(){ ... }` | Called after cookie retrieved.

### Usage / Examples
The following example demonstrates the automatic attachment of the necessary HTML markup. In this case you can omit the [manual insertion](https://github.com/thexmanxyz/Simple-Overlay#manual-container-attachment) of HTML markup completely. Everything is handled by the plugin.

```Javascript
$('body').simpleOverlay({
  background: 'img/your_image.svg',
  content: 'I am demonstrating the overlay content!'
});
```

Sometimes you may want that the overlay is triggered by a certain click event and controlled by a previous user action.

```Javascript
$('body').simpleOverlay({
  content: 'I am demonstrating the overlay content!',
  clickEvent: {
    open: ['.your_selector']
  }
});
```

In the above example the overlay will only be shown on click when the user not already saw it within the cookie expiry period. Please mind that you use a selector that fits your implementation. If you want to always show the overlay in dependence of a click use the following configuration:

```Javascript
$('body').simpleOverlay({
  /* checkOnInit: false, // you can omit the cookie check on init as well */
  /* openOnInit: false, // or you can completely hide the overlay on init */
  content: 'I am demonstrating the overlay content!',
  clickEvent: {
    alwaysOpen: ['.your_selector']
  }
});
```

The code comments demonstrate how you can control the initialization behavior of the plugin. When you need a different expiry duration for the overlay cookie (default is 30 days), e.g. you want that the user gets the overlay shown again after 7 days, take a look at the following example:

```Javascript
$('body').simpleOverlay({
  content: 'I am demonstrating the overlay content!',
  cookie: {
    expiry: 7
  }
});
```

When you want to reset the expiry duration once, simply increase the overlay `revision` by one. E.g. the default value is `0` and increasing the revision to `1` will show the overlay again even when the cookie has not yet expired. The cookie will simply be renewed to it's expiry duration.

```Javascript
$('body').simpleOverlay({
  content: 'I am demonstrating the overlay content!',
  revision: 1
});
```

### Manual Container Attachment
You can also attach the container yourself and adjust the HTML markup in a way you like it. The example below shows a simple plugin generated overlay with a custom background. But you can also omit the `style` attribute completely if don't need a `background-image`.

```HTML
<div id="simple-overlay" style="background-image: linear-gradient(rgba(0, 0, 0,.6),rgba(0,0,0,.6)), url(img/your_image.svg);" class="simple-overlay background-image">
  <div class="simple-container">I am demonstrating the overlay content!</div>
  <button type="button" class="close" aria-label="Close">
    <span aria-hidden="true">×</span>
  </button>
</div>
```

You have to configure the plugin as follows when you don't want that the HTML is generated by the plugin:

```Javascript
$('body').simpleOverlay({
  attach: false
});
```

Please mind that you can also change the `id` of the container (`simple-overlay`) with the following configuration:

```Javascript
$('body').simpleOverlay({
  attach: false,
  containerId: 'your_container_id'
});
```

### Manual Container Background
When necessary, the overlay background image can also be defined or customized in your stylesheet with the following CSS rules:

```CSS
.simple-overlay {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0,.6),rgba(0,0,0,.6)), url(img/your_image.svg);
}
```

But remember that in this case it is not necessary to initialize the plugin with the `background` parameter.

## Features
* simple configurable jQuery overlay plugin
* control over HTML markup
* multiple initialization modes
* different styling modes (black and white)
* build-in background image support
* support for cookie-controlled appearance
  * cookie expiry and cookie creation can be customized
* custom event options
  * define custom click events with selectors
  * or attach custom event triggers e.g. with `triggerCustom(...)`
* fully customizable through different callback methods at important execution points

## Future Tasks
- [?] Currently no future tasks known.

## Known Issues
None

## Dependencies
* [jQuery](https://jquery.com/)

## Credits
Thanks to the jQuery team for this [great plugin tutorial](https://learn.jquery.com/plugins/basic-plugin-creation/).

Thanks to [w3schools.com](https://www.w3schools.com) for providing the following two usesful tutorials on [overlays](https://www.w3schools.com/howto/howto_css_overlay.asp) and [cookies](https://www.w3schools.com/js/js_cookies.asp).

## by [thex](https://github.com/thexmanxyz)
Copyright (c) 2020, free to use in personal and commercial software as per the [license](/LICENSE).
