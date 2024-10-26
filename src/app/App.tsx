import { Provider } from "react-redux"
import { appStore } from "./store"
import Form from "../components/Form/Form"
import WelkomeComponent from "../components/WelkomeComponent/WelkomeComponent"

function App() {
  return (
    <Provider store={appStore}>
      <Form />
      <WelkomeComponent />
    </Provider>
  )
}

export default App
