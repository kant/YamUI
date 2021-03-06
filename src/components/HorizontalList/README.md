# HorizontalList

HorizontalList is made up of two components - `HorizontalList` and `ListItem`. HorizontalLists are useful whenever you need to display a number of items with equal spacing between. Note that spacing between items is standardized at 4px and is not adjustable.

---

### HorizontalList Props

| Prop | Type | Description |
| ---- | ---- | ----------- |
| align | 'right' or 'left' | Horizontal alignment of items |


### ListItem Props

none

---

## Example implementation

A list of Buttons

```
import { HorizontalList, ListItem } from 'yamui/dist/components/HorizontalList';
import Button, { ButtonColor } from 'yamui/dist/components/Button';


<HorizontalList>
  <ListItem>
    <Button text="Send Message" icon="mail" color={ButtonColor.SECONDARY} />
  </ListItem>
  <ListItem>
    <Button text="Call with Skype" icon="skype" color={ButtonColor.SECONDARY} />
  </ListItem>
  <ListItem>
    <Button text="Follow" icon="check" />
  </ListItem>
</HorizontalList>
```
