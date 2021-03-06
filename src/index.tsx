import React from "react"
import ReactDOM from "react-dom"

import "./index.css"

import { Provider } from "react-redux"
import App from "./App"
import ThemeProvider from "./shared/themes/style/stylc"
import reportWebVitals from "./reportWebVitals"
import store from "./store"
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
