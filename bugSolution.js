```javascript
<div class="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 p-4">
  {/* content */}
</div>

/* OR with fallback */
<div class="bg-blue-500 p-4 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500">
  {/* content */}
</div>
```
This revised code improves gradient behavior. Adding a `via` color often creates smoother gradients. If needed, the second snippet adds `bg-blue-500` as a fallback which displays a solid blue background if the gradient fails to render.