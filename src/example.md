Button example:

```js
<Button
  onClick={() => {
    console.log("button", "click");
  }}
>
  Push Me
</Button>
```

You can add a custom props to an example wrapper:

```js { "props": { "className": "checks" } }
<Button>I’m transparent!</Button>
```

Or add padding between examples in a block by passing the `padded` modifier:

```jsx padded
<Button>Push Me</Button>
<Button>Click Me</Button>
<Button>Tap Me</Button>
```

Or disable an editor by passing a `noeditor` modifier:

```jsx noeditor
<Button>Push Me</Button>
```

To render an example as highlighted source code add a `static` modifier:

```jsx static
import React from "react";
```

Examples with all other languages are rendered only as highlighted source code, not an actual component:

```html
<button size="large">Push Me</button>
```

Any [Markdown](http://daringfireball.net/projects/markdown/) is **allowed** _here_.
