# next-mini-router
Virtual and dynamic routes made simple, like react-router-dom, but with the Next.js way

## Installation

``` 
npm install @next-mini-router/core
```

## Usage

```
import { NextMiniRouter, Route } from '@next-mini-router/core'

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const NotFound = () => <h1>Not Found</h1>

const App = () => (
  <NextMiniRouter defaultState={{...variables }}>
    <Route path="/">
        <Home />
    </Route>
    <Route path="/about">
        <About />
    </Route>
  </Router>
)
```

## Commands to build and publish

```
 npm install
 npm run changeset
 npm run version-packages
 npm run release
```
