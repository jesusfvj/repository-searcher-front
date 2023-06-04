import { BrowserRouter } from "react-router-dom"
import { Layout } from './components/base/Layout';
import { UIProvider } from "./context/UI/UIContext";
import UserProvider from "./context/UserContext/UserContext";
import Router from './Router';


function App() {

  return (
    <UserProvider>
      <UIProvider>
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </UIProvider>
    </UserProvider>
  )
}

export default App
