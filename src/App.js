import Home from './Components/Home';
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Docs from './Components/Docs';
import PieForm from './Components/PieForm';

function App() {
	return (
		<Router>
			<div>
				<Header />
				<div className='main-container'>
					<Route exact path='/' component={Home}></Route>
					<Route exact path='/docs' component={Docs}></Route>
					<Route path="/create" component={PieForm}></Route>
				</div>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
