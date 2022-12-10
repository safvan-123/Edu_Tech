import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from "./reportWebVitals";
import  ThemeContext  from "./context/ThemeContext"; 
import store from "./store";

ReactDOM.render(
	<React.StrictMode>
		<Provider store = {store}>
			<BrowserRouter basename='/'>
				<ThemeContext>
					<App />
				</ThemeContext>  
			</BrowserRouter>    
        </Provider>	
	</React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
