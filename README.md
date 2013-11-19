# Drawer: jank free sliding sidebar layouts

## What?

**Drawer** is a starting point for building 2-column responsive layouts that implement a smooth sliding sidebar (or _drawer_).

The default behaviour is as follows:

**On smaller viewport sizes**: the drawer is hidden by default. When the drawer is shown, the content is shifted to the right, whilst maintaining its width.

**On larger viewport sizes**: the drawer is always shown (toggling makes no difference). Content fills the remaining space.

## Why?

The project was created to fulfil the following requirements:

*   It should include **jank free sliding transitions**, by making use of hardware accelerated properties (i.e. CSS transforms).
*   It **should not break native scrolling controls**: the main content should be scrollable using page up/down keys, as well as by using the _tap-status-bar-to-return-to-top_ behaviour.
*   **Very few (if any) external dependencies**, to keep it lightweight and easy to customise.
*   Leave most of the interaction/visual design to the implementer.

There are a few other implementations of the general UI pattern, but it was difficult to find one that fulfilled all of the above.

## Usage

1.  Add the following meta viewport tag:

        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
2.  Include the `drawer.css` stylesheet
3.  Wrap your sidebar content in an element with a class of `drawer`
4.  Wrap any content that “butts up” to the drawer in an element with a class of `drawer-butt`. (This will usually be your main content, but it may also be a header, for example. See [simple example](http://domchristie.github.io/drawer/examples/simple.html).)
5.  Give `.drawer-butt` a `background-color` (by default it’s `#fff`). Change the colour of `.drawer`, by modifying the `background-color` of the `body` element. This allows the drawer to always appear full-height, independent of its `position` CSS value.
6.  Toggle the drawer by adding/removing the `drawer-open` class to the body element

    For example, if you had a toggle element with a `data-drawer-toggle` attribute, you might toggle the drawer with jQuery, as follows:

        $(document).on('click touchstart', '[data-drawer-toggle]', function() {
          $('body').toggleClass('drawer-open');
        });

## Browser Support

Drawer has been designed to work with _modern browers_ i.e. **recent versions** of **Chrome**, **Firefox**, **Safari**, **Internet Explorer** (although sliding animations will not work in IE9), and **Opera**. IE 7/8 users will see the two-column version of the site (toggling will have no effect).

### Adding Support for iOS Safari <=4 and Android <=2

The default implementation makes use of `position: fixed` to achieve two independent scrolling columns. `position: fixed` is poorly supported in some older browers, in particular iOS Safari <=4 and Android <=2. Users of these browsers may not be able view the all the content in the drawer (iOS), or may not be able to scroll it (Android). Fallback support can be added with a bit of user agent (UA) sniffing. (Given that support for `position: fixed` is complex and therefore not binary, unfortunately UA sniffing may be the only way. See Brad Frost’s [Fixed Positioning in Mobile Browsers](http://bradfrostweb.com/blog/mobile/fixed-position/).)

UA sniffing is used in the examples: see [`examples/ua-sniffer.js`](https://github.com/domchristie/drawer/blob/master/examples/ua-sniffer.js), and the styles [`examples/site.css`](https://github.com/domchristie/drawer/blob/master/examples/site.css).

## Examples

*   [A basic fixed header and toggle example](http://domchristie.github.io/drawer/examples/simple.html)
*   [A responsive navigation bar example](http://domchristie.github.io/drawer/examples/navigation.html)

## Bibliography

Drawer uses ideas from the following resources:

*   [Mailchimp Pattern Library](http://ux.mailchimp.com/patterns)
*   [Multi-Device Layout Patterns](http://www.lukew.com/ff/entry.asp?1514) by Luke Wroblewski
*   [Off Canvas: A Multi-Device Web Layout Pattern](http://jasonweaver.name/lab/offcanvas/) by Jason Weaver
*   [Fixed Positioning in Mobile Browsers](http://bradfrostweb.com/blog/mobile/fixed-position/) by Brad Frost
*   [Jank Free](http://jankfree.org/)

## Licence

Drawer is copyright © 2013 [Dom Christie](http://domchristie.co.uk) and is released under the MIT licence.