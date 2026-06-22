# Code Style Guide

## TypeScript

TypeScript is used only for type checking at **development time** — never for runtime behavior.

- Forbidden: `enum`, `const enum`, `namespace` — they affect the runtime
- Use literal types instead of enums: `type Direction = 'UP' | 'DOWN'`
- Use `interface` for object shapes, `type` for algebraic types and generics (`type Block = A | B`)
- No anonymous types for data fields — extract them into named types
- Anonymous types are allowed only in local `Props` of simple components
- Use `Partial<T>` for optional fields rather than scattering `field?: T` across the interface
- Empty value is `null`, not `undefined`. Never set `undefined` manually
- Type identifiers as `ID`, not `string`

## File Structure

### Modules

A component is a folder with an `index.ts`. All public exports go through the index file only.

```
/Button
├── Button.tsx
├── styles.module.css
├── index.ts          ← re-exports only
├── constants.ts
├── utils.ts
└── hooks/
    ├── useButton.ts
    └── index.ts
```

- Import through the module: `import { Button } from './Button'`
- Forbidden: `import { X } from './Button/components/X'`

### Styles

- Style file is always `styles.module.css` in the module root
- Imported in exactly one component file
- CSS classes needed by child components are passed as props
- Never import styles from another module

### Exports

- Named exports only — `export default` is forbidden
- `index.ts` contains re-exports only, no logic

## Variables and Functions

- Never reassign function arguments — create new variables instead
- Minimize mutable variables (`let`, reassignment)
- Side effects (DOM mutations, global state) go in a separate void function
- Never mix pure logic and side effects in the same function

```ts
// ✅
function applyEffect(state: number) {
  if (state % 2 !== 0) return;
  document.body.classList.toggle('active');
}

function handleNext(prev: number) {
  const next = prev + 1;
  applyEffect(prev);
  return next;
}
```

## Naming

- Boolean fields/variables — no prefix: `hidden`, `disabled`, `active`
- Predicate functions — with prefix: `isHidden(item)`, `hasAccess(user)`
- Optional `boolean` props always default to `false` and are named as negations: `disabled = false`, not `enabled = true`

## Components

### Props

- All optional props must have a non-null default value
- If a default is hard to provide — it's a signal to reconsider the decomposition

### Variability

Resolve ambiguity at the parent level, not inside the component.

```tsx
// ❌ component decides what to render
const Button = ({ icon, label }) => icon ? <...> : <...>;

// ✅ parent decides upfront
if (isIcon(value)) return <IconButton icon={value} />;
return <LabelButton label={value} />;
```

### children

- Never redefine the type of `children`
- A component must accept any `children`
- If you need a list — pass it as a regular prop (`strings`, `items`)

### Isolation

- Components are black boxes — parents must not reach into their rendering
- Forbidden: `React.cloneElement`, `React.Children.map` to inject props into children

## Low-Level Code

Use minimally. Mark with `// todo: avoid low-level code` when necessary:

- Direct browser API access (DOM, Window)
- Generators (except sagas)
- `localStorage` / `sessionStorage` / `IndexedDB`
- Named algorithms
