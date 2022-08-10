# Code Updates

This page documents updates in `@telekom/scale-components` and related packages.

## New dropdown select beta component

02.08.22

The dropdown menu is now an integrated part and is no longer generated by the browser as in the [current version](./?path=/docs/components-dropdown--standard). This makes the component less error-prone. In particular, errors that could occur when switching between light and dark modes are now avoided.

We aim to deprecate the [Dropdown](./?path=/docs/components-dropdown--standard) component in favour of the newly released beta [Dropdown Select](./?path=/docs/beta-components-dropdown-select--standard) as soon as new component gets our of the beta phase.

## Dark and light mode (`v3.0.0-beta.100`)

- The Scale components are now also available in Dark Mode
- The color palette was optimized
- The design token concept was optimized and extended by semantic tokens
- The text styles have been optimized
- CSS variables prefixed with `--scl` are deprecated in favor of the new `--telekom` ones.

Read more about <a href="https://github.com/telekom/scale/blob/main/docs/dark-mode-v3-beta-100.md" target="_blank" rel="noopener noreferrer">the changes on GitHub</a>.

### Affected content

All components  
[Release Notes](./?path=/docs/new-release-release-notes--page)  
[Sketch Library Update](./?path=/docs/new-release-sketch-library-update--page)  
[Design Tokens](./?path=/docs/guidelines-design-tokens--page)  
[Typography](./?path=/docs/guidelines-typography--page)  
[Colors](./?path=/docs/guidelines-colors--page)  
[Shadows](./?path=/docs/guidelines-shadows--page)

## v1 to v2 Migration

Find the guide <a href="https://github.com/telekom/scale/blob/main/docs/archive/v1-to-v2-migration-guide.md" target="_blank" rel="noopener noreferrer">on GitHub</a>.