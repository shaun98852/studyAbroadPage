import {Switch, BrowserRouter, Route} from 'react-router-dom'

import Home from './components/Home'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default App
