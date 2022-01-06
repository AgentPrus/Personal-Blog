---
title: 'Debounce in Controlled Components'
date: 'January 6, 2022'
excerpt: "In this article I'm going to share how to use debounce with controlled components"
cover_image: '/images/posts/debounce-in-react.jpg'
category: 'Web Development, React.js'
---

## Controlled and Uncontrolled

**Uncontrolled** components maintain their own state and update it based on user input. In React **Controlled** components value is set by React `state` and update by using `setState()`.

Example of **Controlled** input:

```jsx
function Controlled() {
    const [value, setValue] = useState();

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <label htmlFor="search-input">Search</label>
            <input
                id="search-input"
                name="search"
                type="search"
                value={value}
                onChange={handleChange}
            />
            <button type="submit">Search</button>
        </>
    );
}
```

## Debounce and Controlled components

Let's take search input as an example for using debounce and controlled component.

This is our search input with `debounce callBack`:

```jsx
// With debounce callback

export default function SearchInput() {
    const [isLoading, setIsLoading] = useState(false);
    const [searchResults, setSearchResults] = useState(null);
    const [searchString, setSearchString] = useState('');

    const handleChange = (event) => {
        setSearchString(event.target.value);
    };

    const debouncedCallBack = debounce(handleChange, 500);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            try {
                const response = await getPeople(searchString);
                const data = await response.json();
                setSearchResults(data.results);
                setIsLoading(false);
            } catch (e) {
                setIsLoading(false);
            }
        })();
    }, [searchString]);

    return (
        <div>
            <input type="search" onChange={debouncedCallBack} value={searchString} />
            <button>Search</button>
            <div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    searchResults?.map((result) => {
                        return <p key={result.name}>{result.name}</p>;
                    })
                )}
            </div>
        </div>
    );
}
```

Looks like it should work, but no. You can try this [sandbox](https://codesandbox.io/s/ecstatic-feynman-o4o9z). When we try to type something nothing happens. So why is it happening?

> This is a caveat of function components. Local variables inside a function expires after every call. Every time the component is re-evaluated, the local variables gets initialized again.

So how we can fix this. The first solution which I've found it's creating our custom hook `useDebounce`. It will look like this:

```jsx
import { useState, useEffect } from 'react';

export function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
        () => {
            // Update debounced value after delay
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);
            // Cancel the timeout if value changes (also on delay change or unmount)
            // This is how we prevent debounced value from updating if value is changed ...
            // .. within the delay period. Timeout gets cleared and restarted.
            return () => {
                clearTimeout(handler);
            };
        },
        [value, delay] // Only re-call effect if value or delay changes
    );
    return debouncedValue;
}
```

Now we can remove `debounceCallBack` and use `debouncedValue` which we receive from our hook for our GET request.

```jsx
// With useDebounce custom hook

export default function SearchInput() {
    const [isLoading, setIsLoading] = useState(false);
    const [searchResults, setSearchResults] = useState(null);
    const [searchString, setSearchString] = useState('');
    const debouncedSearchString = useDebounce(searchString, 500);

    const handleChange = (event) => {
        setSearchString(event.target.value);
    };

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            try {
                const response = await getPeople(debouncedSearchString);
                const data = await response.json();
                setSearchResults(data.results);
                setIsLoading(false);
            } catch (e) {
                setIsLoading(false);
            }
        })();
    }, [debouncedSearchString]);

    return (
        <div>
            <input type="search" onChange={handleChange} value={searchString} />
            <button>Search</button>
            <div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    searchResults?.map((result) => {
                        return <p key={result.name}>{result.name}</p>;
                    })
                )}
            </div>
        </div>
    );
}
```

The second solution which I've found uses the `useCallback` hook. Also, we should change our fetching logic a little bit:

```jsx
// With use useCallback & debounce
export default function SearchInput() {
    const [isLoading, setIsLoading] = useState(false);
    const [searchResults, setSearchResults] = useState(null);
    const [searchString, setSearchString] = useState('');
    const delayedQuery = useCallback(
        debounce(async (queryString) => {
            const response = await getPeople(queryString);
            const data = await response.json();

            if (data.results && data.results.length) {
                setSearchResults(data.results);
            }
        }, 500),
        []
    );
    const handleChange = (event) => {
        setSearchString(event.target.value);
        delayedQuery(event.target.value);
    };

    return (
        <div>
            <input type="search" onChange={handleChange} value={searchString} />
            <button>Search</button>
            <div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    searchResults?.map((result) => {
                        return <p key={result.name}>{result.name}</p>;
                    })
                )}
            </div>
        </div>
    );
}
```

As you can see above all fetching logic I've moved into `debounce` which is inside `useCallback`. Also, I've set values in the `onChange` handler for both our `searchString` and `delayedQuery`. This is a very basic example, and has a lot of room for improvements which you can do on your own 😉.

## Resources

-   [Official React docs](https://reactjs.org/docs/forms.html#controlled-components)
-   [Original article with useCallback solution](https://rajeshnaroth.medium.com/using-throttle-and-debounce-in-a-react-function-component-5489fc3461b3)
-   [More details about useDebounce hook](https://usehooks.com/useDebounce/)
-   [GitHub repo with code mentioned in this article](https://github.com/AgentPrus/debounce-example)

Happy Coding 👨‍💻
Best regards Mike ✌️
