import { render } from 'react-dom'

import { App } from './App'
import { GenresContextProvider } from './contexts/GenresContext'

render(
<GenresContextProvider>
  <App />
</GenresContextProvider>, 
document.getElementById('root'))