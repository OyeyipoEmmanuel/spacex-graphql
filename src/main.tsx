import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ApolloClient } from '@apollo/client'
import { InMemoryCache } from '@apollo/client'
import { HttpLink } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: "https://spacex-production.up.railway.app/",
  }),
  cache: new InMemoryCache()
})

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={apolloClient}>
    <StrictMode>
      <App />
    </StrictMode>
  </ApolloProvider>,
)
