import { useReducer } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { AppRouter } from './app/router/AppRouter';
import { AuthContext } from './app/views/store/contexts/AuthContext';
import { authReducer } from './app/views/store/reducers/authReducers';

const init = () => {
  let sessionUser = sessionStorage.getItem('user');
  let user;
  if (!sessionUser) {
    user = sessionUser;
  } else {
    user = JSON.parse(sessionUser);
  }
  return user;
}

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql', // Cambia esto por la URL de tu servidor GraphQL
  cache: new InMemoryCache(),
});


function App() {
  const [user, dispatchUser] = useReducer(authReducer, {}, init);

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{ user, dispatchUser }}>
        <AppRouter />
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;

