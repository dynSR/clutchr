# CLAUDE.md — Angular & TypeScript Specific

**All Angular/TypeScript rules must be followed. No exceptions.**

## IMPORTANT Constraints

- **NEVER** add `zone.js` imports (project is fully zoneless).
- **NEVER** use `NgModules` or `CommonModule` in standalone components.
- **NEVER** install new npm packages without confirming with the user first and providing a justification.
- **NEVER** modify `.env` files (security rule).

## Stack

- **Framework**: Angular 21 (Standalone Components, Zoneless Change Detection)
- **Language**: TypeScript 5.5 (Strict Mode)
- **State Management**: NgRx **SignalStore** (`@ngrx/signals`)
- **UI**: Tailwind CSS V4 (utility-first)
- **Async**: RxJS for HTTP → convert to signals at component boundary via `toSignal()`
- **Testing**: `ng test`, `jasmine`, `karma`, CI-integrated lint & type-check (`npx tsc --noEmit`)

## Project Layout (key folders)

```
src/
├── app/
│   ├── core/                # Global services, utilities, shared assets
│   │   ├── components/      # Shared UI components
│   │   ├── services/        # Core API, auth, interceptors
│   │   ├── guards/          # Shared route guards
│   │   ├── directives/      # Shared directives used app-wide
│   │   ├── pipes/           # Shared pipes
│   │   └── utils/           # Helper functions
│   ├── features/
│   │   └── <feature>/
│   │       ├── components/  # Feature-specific UI
│   │       ├── models/      # Data models (structure)
│   │       ├── state/       # NgRx SignalStore (store + selectors)
│   │       ├── services/    # Feature-level API & business logic
│   │       ├── mappers/     # API → domain mapping
│   │       ├── guards/      # Optional feature-specific guards
│   │       ├── pages/       # Top-level route components
│   │       ├── types/       # Interfaces / enums / types for the feature
│   │       └── validators/  # Optional feature-specific validators
│   └── shared/              # Cross-feature reusable assets
│       ├── components/
│       ├── pipes/
│       ├── directives/
│       ├── validators/
│       ├── utils/
│       └── types/
assets/
environments/
styles.css
tailwind.css
```

## Commands

| Command                        | Purpose                                 |
|--------------------------------|-----------------------------------------|
| `ng build`                     | Build production bundle                 |
| `ng serve`                     | Local dev server (auto-reload)          |
| `ng lint`                      | ESLint + TSLint (Angular-specific)      |
| `npx tsc --noEmit`             | Run type-checking only                  |
| `ng test`                      | Jest/Karma test runner                  |
| `ng generate component <name>` | Scaffold a standalone component         |
| `ng generate service <name>`   | Scaffold a `providedIn: 'root'` service |

## Angular Rules (mandatory)

1. **Standalone components** – Always `standalone: true`. No `NgModule` bootstrapping unless for legacy constraints.
2. **Inject with `inject()`** – Functional-style DI. No class-constructor injection.
3. **Change detection** – `ChangeDetectionStrategy.OnPush` on every component.
4. **Control flow** – Use native `@if`, `@for`, `@defer` syntax; **never** `*ngIf` or `*ngFor`.
5. **HTTP** – Prefer `httpResource()` for GETs; use `HttpClient` for mutations. Return typed interfaces.
6. **Forms** – Reactive Forms only. Use `FormGroup`/`FormControl` with validators as pure functions.
7. **Routing** – Lazy-load feature modules via `Router`. Routes live in `*.routes.ts`.
8. **Styling** – Tailwind utility classes only; add custom CSS only when absolutely required in `styles.css`.
9. **Parent-child communication** – `@Input()` / `@Output()` only; avoid `@ViewChild` for business logic.
10. **Querying** – Use `viewChild()` / `contentChild()` for imperative DOM access; otherwise rely on signals.
11. **State Management** –
    - Feature state → `features/<name>/state/<name>.store.ts`
    - Global state → `core/state/<name>.store.ts`
    - Use `patchState()` only; never mutate state directly.
    - Side effects handled via `withMethods` + RxJS inside the store.

## Service & DI Rules

- **Stateless when possible**.
- **`providedIn: 'root'`** for singletons; scope with `providedIn: SomeModule` only for feature-scoped services.
- Keep API calls separate from business logic.
- Return **Observables**, not Promises, unless a strict external contract demands it.
- Use RxJS operators (`map`, `filter`, `switchMap`, `catchError`) – avoid nested subscriptions.

## TypeScript Practices

- Declare **interfaces** for all API / domain models.
- Use **enums** for finite constant sets; prefer `readonly` enum members.
- **Never** use `any`. Prefer `unknown` + type guards or explicit union types.
- Mark read-only properties with `readonly`.
- Keep **function signatures** explicit; avoid overloads unless required.
- Use **utility types** (`Partial<T>`, `Pick<T,K>`, `Omit<T,K>`) for flexible contracts.
- Prefer **readonly** on inputs/outputs to prevent accidental mutation.
- Add **type guards** for runtime narrowing (`if (isFoo(x)) …`).
- Properly mark elements as private/public/protected based on intended usage.

## Templates & Styling

- Keep templates declarative; move complex logic into **pipes** or **methods** marked `pure: true`.
- **Inline styles** are discouraged; rely on Tailwind utilities. If an external stylesheet is required, add it only in `styles.css` and document why.

## HTTP & APIs

- Base URLs live in `environment.ts`; never hard-code URLs.
- Use **typed response bodies** (`apiResponse: MyResponse`).
- Centralise error handling in an `HttpInterceptor` that maps errors to custom types.
- Implement **exponential back-off** retry logic only when the operation is idempotent or safe.
- Strip `null`/`undefined` from request bodies before sending.

## Testing Conventions

- Each component gets a `<feature>.component.spec.ts`.
- Use **Jest** (or Angular's built-in Karma) with **dom-testing-library** for DOM assertions.
- Mock services via **standalone mock providers** (`Provider` token → `useValue`).
- Run `npm run lint && npx tsc --noEmit && npm test` in CI.

## File Naming Conventions (canonical)

| Type        | Example                     |
|-------------|-----------------------------|
| Component   | `user-profile.component.ts` |
| Store       | `user-profile.store.ts`     |
| Service     | `user-profile.service.ts`   |
| Model       | `user-profile.model.ts`     |
| Type        | `user-profile.type.ts`      |
| Routes      | `user-profile.routes.ts`    |
| Mapper      | `user-profile.mapper.ts`    |
| Utility     | `user-profile.util.ts`      |
| Enum        | `user-role.enum.ts`         |
| Guard       | `auth.guard.ts`             |
| Interceptor | `auth.interceptor.ts`       |
| Pipe        | `date-format.pipe.ts`       |
| Directive   | `highlight.directive.ts`    |
| Validator   | `email.validator.ts`        |
