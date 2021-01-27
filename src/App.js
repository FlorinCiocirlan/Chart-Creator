import Home from './Components/Home';
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Docs from './Components/Docs';
import About from './Components/About'

function App() {
	return (
		<Router>
			<div>
				<Header />
				<Route exact path='/' component={Home}></Route>
				<Route exact path='/docs' component={Docs}></Route>
				<Route path='/about' component={About}></Route>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
