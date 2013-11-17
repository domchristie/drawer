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
4.  Wrap any content that “butts up” to the drawer in an element with a class of `drawer-butt`. (This will usually be your main content, but it may also be a header, for example. See [simple example](examples/simple.html).)
5.  Toggle the drawer by adding/removing the `drawer-open` class to the body element

    For example, if you had a toggle element with a `data-drawer-toggle` attribute, you might toggle the drawer with jQuery, as follows:

        $(document).on('click touchstart', '[data-drawer-toggle]', function() {
          $('body').toggleClass('drawer-open');
        });

## Browser Support

Drawer has been designed to work with _modern browers_ i.e. **recent versions** of **Chrome**, **Firefox**, **Internet Explorer**, and **Opera**. The two column layout will still work on **IE8**, but toggling the `drawer-open` class name will have no effect.

## Examples

*   [A basic fixed header and toggle example](/examples/simple.html)
*   [A responsive navigation bar example](/examples/navigation.html)

## Bibliography

Drawer uses ideas from the following resources:

*   [Multi-Device Layout Patterns](http://www.lukew.com/ff/entry.asp?1514) by Luke Wroblewski
*   [Off Canvas: A Multi-Device Web Layout Pattern](http://jasonweaver.name/lab/offcanvas/) by Jason Weaver
*   [Jank Free](http://jankfree.org/)

## Licence

Drawer is copyright © 2013 [Dom Christie](http://domchristie.co.uk) and is released under the MIT licence.