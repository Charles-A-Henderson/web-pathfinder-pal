
## Fix: Duplicate Page Content

### Problem
In `src/App.tsx`, the `<AnimatedRoutes />` component is rendered twice (lines 46 and 48), causing every page's entire content to appear doubled.

### Solution
Remove the second `<AnimatedRoutes />` on line 48. The corrected structure will be:

```
<BrowserRouter>
  <ScrollToTop />
  <AnimatedRoutes />
  <Chatbot />
</BrowserRouter>
```

### Files Changed
- `src/App.tsx` — Delete the duplicate `<AnimatedRoutes />` call (line 48)

This is a one-line fix with no side effects.
