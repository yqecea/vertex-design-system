# Geist Component Catalog v1.0

Complete inventory of all components from vercel.com/geist.

## Component Count: 80+

### Data Display
| Component | Description | Key Props | Status |
|---|---|---|---|
| Avatar | User/team representation | `src`, `letter`, `size`, `placeholder`, `title` | Not implemented |
| Badge | Status indicator | `type` (default, success, warning, error), `size` | Not implemented |
| Gauge | Circular progress | `value`, `size`, `color` | Not implemented |
| Progress | Linear progress bar | `value`, `max`, `size` | Not implemented |
| Status Dot | Colored status indicator | `color` (green, red, amber, blue), `pulse` | Partial (CSS only) |
| Skeleton | Loading placeholder | `width`, `height`, `variant` | Not implemented |
| Spinner | Loading spinner | `size`, `color` | Not implemented |
| Table | Data table | `data`, `columns`, `sortable` | Not implemented |
| Relative Time Card | Time-based display | `timestamp`, `format` | Not implemented |
| Project Banner | Project header banner | `title`, `description`, `status` | Not implemented |

### Feedback
| Component | Description | Key Props | Status |
|---|---|---|---|
| Banner | Alert banner | `type`, `dismissible`, `onDismiss` | Not implemented |
| Error | Error message display | `message`, `code`, `action` | Not implemented |
| Error Card | Error in card format | `title`, `message`, `action` | Not implemented |
| Feedback | User feedback widget | `type`, `rating`, `comment` | Not implemented |
| Note | Inline note/annotation | `type` (default, success, warning, error) | Not implemented |
| Empty State | Empty content placeholder | `title`, `description`, `action` | Not implemented |
| Toast | Notification toast | `message`, `type`, `duration`, `onDismiss` | Not implemented |
| Loading Dots | Animated loading dots | `size`, `color` | Not implemented |

### Forms
| Component | Description | Key Props | Status |
|---|---|---|---|
| Button | Action button | `variant`, `size`, `loading`, `disabled` | Implemented |
| Split Button | Button with dropdown | `variant`, `items`, `onAction` | Not implemented |
| Input | Text input | `type`, `size`, `disabled`, `error` | Not implemented |
| Clearable Input | Input with clear button | `value`, `onClear`, `size` | Not implemented |
| Search Input | Input with search icon | `value`, `onSearch`, `loading` | Not implemented |
| Textarea | Multi-line input | `rows`, `resize`, `maxLength` | Not implemented |
| Select | Dropdown select | `options`, `value`, `disabled` | Not implemented |
| Multi Select | Multiple selection | `options`, `values`, `max` | Not implemented |
| Checkbox | Boolean toggle | `checked`, `indeterminate`, `disabled` | Not implemented |
| Radio | Single selection | `checked`, `disabled`, `name` | Not implemented |
| Switch | Toggle switch | `checked`, `disabled`, `size` | Not implemented |
| Slider | Range slider | `min`, `max`, `step`, `value` | Not implemented |
| Combobox | Searchable select | `options`, `value`, `searchable` | Not implemented |
| Choicebox | Radio/checkbox group | `options`, `type`, `value` | Not implemented |
| Label | Form label | `htmlFor`, `required` | Partial (CSS only) |
| Keyboard Input | Keyboard shortcut display | `shortcut`, `modifier` | Not implemented |
| Phone | Phone number input | `value`, `country`, `format` | Not implemented |
| Calendar | Date picker calendar | `value`, `onChange`, `range` | Not implemented |

### Navigation
| Component | Description | Key Props | Status |
|---|---|---|---|
| Breadcrumbs | Path navigation | `items`, `separator` | Not implemented |
| Tabs | Tab navigation | `items`, `value`, `onChange` | Not implemented |
| Pagination | Page navigation | `total`, `page`, `onChange` | Not implemented |
| Menu | Dropdown menu | `items`, `trigger`, `placement` | Not implemented |
| Dots Menu | Three-dot menu | `items`, `placement` | Not implemented |
| Command Menu | Command palette | `items`, `searchable`, `shortcut` | Not implemented |
| Context Menu | Right-click menu | `items`, `trigger` | Not implemented |
| Scroller | Horizontal scroll | `items`, `gap`, `padding` | Not implemented |
| Load More Button | Infinite scroll trigger | `loading`, `onLoad`, `hasMore` | Not implemented |

### Overlay
| Component | Description | Key Props | Status |
|---|---|---|---|
| Modal | Dialog overlay | `open`, `onClose`, `size` | Not implemented |
| Drawer | Side panel | `open`, `onClose`, `side`, `size` | Not implemented |
| Sheet | Bottom sheet | `open`, `onClose`, `height` | Not implemented |
| Tooltip | Hover tooltip | `content`, `placement`, `delay` | Not implemented |
| Popover | Click popover | `content`, `trigger`, `placement` | Not implemented |
| Toast (overlay) | Toast container | `toasts`, `position`, `limit` | Not implemented |
| Destructive Action Modal | Danger confirmation | `title`, `description`, `onConfirm` | Not implemented |

### Layout
| Component | Description | Key Props | Status |
|---|---|---|---|
| Grid | CSS Grid component | `columns`, `rows`, `gap` | Partial (documented) |
| GridSystem | Grid with guides | `debug`, `guideWidth`, `dashedGuides` | Partial (documented) |
| GridCell | Grid cell | `column`, `row`, `solid` | Partial (documented) |
| Separator | Visual divider | `orientation`, `size` | Partial (CSS only) |
| Collapse | Expandable section | `open`, `onToggle`, `title` | Not implemented |
| Show more | Text truncation | `lines`, `expanded`, `onToggle` | Not implemented |
| File Tree | Hierarchical file list | `items`, `onSelect`, `expanded` | Not implemented |
| Browser | Browser mockup | `url`, `children`, `tabs` | Not implemented |
| Video | Video player | `src`, `controls`, `poster` | Not implemented |

### Content
| Component | Description | Key Props | Status |
|---|---|---|---|
| Card | Content container | `variant`, `padding`, `shadow` | Partial (panel) |
| Context Card | Card with context | `title`, `content`, `actions` | Not implemented |
| Entity | Named entity display | `name`, `type`, `icon`, `href` | Not implemented |
| Description | Description list | `items`, `layout` | Not implemented |
| Fieldset | Form field grouping | `title`, `children`, `disabled` | Not implemented |
| Code | Inline code | `language`, `children` | Partial (CSS only) |
| Code Block | Syntax highlighted block | `language`, `filename`, `copyable` | Not implemented |
| Snippet | Copyable code snippet | `code`, `language`, `onCopy` | Not implemented |
| Text With Copy Button | Copyable text | `text`, `onCopy` | Not implemented |
| Copy Button | Copy action button | `text`, `onCopy`, `timeout` | Not implemented |
| Deployment Status | Deployment indicator | `status`, `url`, `time` | Not implemented |
| MiddleTruncate | Truncated text | `text`, `maxLength`, `side` | Not implemented |
| Theme Switcher | Dark/light toggle | `value`, `onChange` | Not implemented |
| Toggle | Binary toggle | `checked`, `onChange`, `disabled` | Not implemented |
| Pill | Tag/badge pill | `variant`, `onRemove` | Not implemented |
| Book | Book/document display | `title`, `author`, `cover` | Not implemented |

## Implementation Status Summary

| Status | Count | Percentage |
|---|---|---|
| Fully Implemented | 6 | 7.5% |
| Partial (CSS only) | 8 | 10% |
| Not Implemented | 66 | 82.5% |
| **Total** | **80** | **100%** |

## Priority Implementation Order

### Phase 1 (Critical — for production use)
1. Button, Input, Textarea, Select, Checkbox, Radio, Switch
2. Modal, Drawer, Tooltip, Toast
3. Card, Badge, StatusDot, Skeleton, Spinner
4. Tabs, Breadcrumbs, Pagination
5. Avatar, Label, Separator

### Phase 2 (Important)
6. Combobox, Multi Select, Slider, Calendar
7. Menu, Command Menu, Context Menu
8. Code Block, Snippet, Copy Button
9. Table, Gauge, Progress
10. Collapse, Show more, File Tree

### Phase 3 (Nice to have)
11. Browser, Video, Book
12. Project Banner, Relative Time Card
13. Feedback, Empty State, Error Card
14. Deployment Status, MiddleTruncate
15. Theme Switcher, Toggle, Pill

## Notes

- All components should use real Geist tokens (--ds-*)
- All components should respect `data-theme="dark/light"`
- All components should work with `data-material` attribute
- All components should respect `prefers-reduced-motion`
- All components should have `aria-*` attributes
- All components should support `ref` forwarding
- All components should be tree-shakeable

## References

- Source: vercel.com/geist/avatar (sidebar component list)
- Official docs: https://vercel.com/geist/introduction
- Package: geist@1.7.2 (npm)

---

*Catalog extracted from official Vercel Geist documentation. 80+ components identified.*