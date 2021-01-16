import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/';

class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 26
		}
		this.nextYear = this.nextYear.bind(this);
	}
	nextYear() {
		console.log(1);
		this.setState(state => ({
			years: ++state.years
		}))
	}
	render() {
		const {name, surname, link} = this.props;
		const {years} = this.state;
		return (
			<>
			<button onClick={this.nextYear}>++</button>
				<h1>My name is {name}, surname - {surname}, years - {years}</h1>
				<a href={link}>My profile</a>
			</>
		  )
	}
}

// function WhoAmI(props) {
//   return (
//     <>
//         <h1>My name is {props.name}, surname - {props.surname}</h1>
//         <a href="{props.link}">My profile</a>
//     </>
//   )
// }

const All = () => {
	return (
		<>
			<WhoAmI name="John" surname="Li" link="instagram.com"/>
			<WhoAmI name="Max" surname="Fill" link="instagram.com"/>
			<WhoAmI name="Sam" surname="Jonson" link="instagram.com"/>
		</>
	)
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
