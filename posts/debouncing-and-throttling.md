---
title: 'Debouncing and throttling Explained'
date: 'January 3, 2022'
excerpt: "In this article I'll explain what is Debounce and Throttle."
cover_image: '/images/posts/debounce-and-throttle-in-js.png'
category: 'Web Development'
---

**Debouncing** and **Throttle** are techniques to control how many times we allow functions to be executed.

**Debouncing** and **Throttle** functions are useful when we are attaching the function to the DOM event.

Take an Example of scroll event:

<iframe height="300" style="width: 100%;" scrolling="no" title="Scroll events counter" src="https://codepen.io/dcorb/embed/PZOZgB?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dcorb/pen/PZOZgB">
  Scroll events counter</a> by Corbacho (<a href="https://codepen.io/dcorb">@dcorb</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

When we scroll we can execute a lot of events per second, and our event handler fucntions cannot be ready for that.
This issue had twitter with their news feed:

> In 2011, an issue popped up on the Twitter website: when you were scrolling down your Twitter feed, it became slow and unresponsive. John Resig published [a blog post about the problem](http://ejohn.org/blog/learning-from-twitter) where it was explained how bad of an idea it is to directly attach expensive functions to the `scroll` event.

### Debounce

The **Debounce** technique allow us to “group” multiple sequential calls in a single one.

It's

<iframe height="300" style="width: 100%;" scrolling="no" title="Debounce. Trailing" src="https://codepen.io/dcorb/embed/KVxGqN?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dcorb/pen/KVxGqN">
  Debounce. Trailing</a> by Corbacho (<a href="https://codepen.io/dcorb">@dcorb</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

You can see how sequential fast events are represented by a single debounce event. But if the events are triggered with big gaps, the debouncing doesn't happen.

### Leading edge

You may find that you don't need waiting before triggering function execution until event stop happens so rapidly. For this we have `leading` option.

Example with `leading` option:

<iframe height="300" style="width: 100%;" scrolling="no" title="Debounce. Leading" src="https://codepen.io/dcorb/embed/GZWqNV?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dcorb/pen/GZWqNV">
  Debounce. Leading</a> by Corbacho (<a href="https://codepen.io/dcorb">@dcorb</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Throttle

Let's look on scroll event. For example take an infinite news feed aka instagram. We use **Debounce** because it will only trigger when use stop scrolling.

The logic is next we need to now how far user from the bottom and it's close to the point we should fire the function and load the content before user reaching the bottom.

Let's look on example:

<iframe height="300" style="width: 100%;" scrolling="no" title="Infinite scrolling throttled" src="https://codepen.io/dcorb/embed/eJLMxa?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dcorb/pen/eJLMxa">
  Infinite scrolling throttled</a> by Corbacho (<a href="https://codepen.io/dcorb">@dcorb</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

So, basically throttle will invoke function at most once per every wait milliseconds.

### In summary

-   **Debounce** - grouping a burst of events in a single one.
-   **Throttle** - guarantee a constant flow of execution every X millisecond (Like checking every n millisecond your scroll position).

### Resources

-   [Original article which I took as an example.](https://css-tricks.com/debouncing-throttling-explained-examples/)
-   [Lodash debounce](https://lodash.com/docs/4.17.15#debounce)
-   [Lodash throttle](https://lodash.com/docs/4.17.15#throttle)

Happy Coding 💻

Best regards, Mike ✌️
