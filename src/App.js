import React, { Suspense } from "react";
import { BrowserRouter as Router , Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import MyCounter from "./article/MyCounter";
import Signin from "./member/Signin";
import Signup from "./member/Signup";

const Home = React.lazy(() => import('./home/Home'))


const App = () => {
	return <>
	<Suspense fallback={<div className={"loading"}/>}>
		<Router>
			<Switch>
				<Redirect exact from={"/"} to={"/app"} />
				<Route path={"/app"} render={(props)=><Home {...props}/>}/>
				<Route path={"/counter"} component={MyCounter}/>
				<Route path={"/signin"} component={Signin}/>
				<Route path={"/signup"} component={Signup}/>
			</Switch>
		</Router>
	</Suspense>
	</>
}


export default App;