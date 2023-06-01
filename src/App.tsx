import { BrowserRouter } from "react-router-dom"
import { Layout } from './components/base/Layout';
import { UIProvider } from "./context/UI/UIContext";
import Router from './Router';

function App() {

  return (
    <UIProvider>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </UIProvider>
  )
}

export default App
