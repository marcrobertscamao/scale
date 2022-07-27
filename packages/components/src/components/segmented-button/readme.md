# scale-segmented-button



<!-- Auto Generated Below -->


## Properties

| Property                     | Attribute                      | Description                                  | Type                               | Default       |
| ---------------------------- | ------------------------------ | -------------------------------------------- | ---------------------------------- | ------------- |
| `adjacentSiblings`           | `adjacent-siblings`            |                                              | `"left" \| "leftright" \| "right"` | `undefined`   |
| `ariaDescriptionTranslation` | `aria-description-translation` |                                              | `string`                           | `'$selected'` |
| `disabled`                   | `disabled`                     | (optional) If `true`, the button is disabled | `boolean`                          | `false`       |
| `segmentedButtonId`          | `segmented-button-id`          | (optional) button's id                       | `string`                           | `undefined`   |
| `selected`                   | `selected`                     | (optional) If `true`, the button is selected | `boolean`                          | `false`       |
| `size`                       | `size`                         | (optional) The size of the button            | `"large" \| "small" \| "xl"`       | `undefined`   |
| `styles`                     | `styles`                       | (optional) Injected CSS styles               | `string`                           | `undefined`   |


## Events

| Event         | Description                                                                                        | Type                                              |
| ------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `scale-click` | Emitted when button is clicked                                                                     | `CustomEvent<{ id: string; selected: boolean; }>` |
| `scaleClick`  | <span style="color:red">**[DEPRECATED]**</span> in v3 in favor of kebab-case event names<br/><br/> | `CustomEvent<{ id: string; selected: boolean; }>` |


## Methods

### `setFocus() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [scale-icon-action-success](../icons/action-success)
- [scale-icon-action-close](../icons/action-close)

### Graph
```mermaid
graph TD;
  scale-segmented-button --> scale-icon-action-success
  scale-segmented-button --> scale-icon-action-close
  style scale-segmented-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*