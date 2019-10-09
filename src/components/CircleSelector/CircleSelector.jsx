import React from 'react';
import './CircleSelector.css';

function CircleSelector(props) {
	const onClick = (event) => {
		props.onChange(event.target.value);
	};

	if (props.selected)
		return (
			<div className="CircleSelector">
				<button className={props.selected === '1' ? 'selected' : null} value="1" onClick={onClick}>
					{props.selected === '1' ? 'Circle 1' : 'SELECT CIRCLE 1'}
				</button>
				<button className={props.selected === '2' ? 'selected' : null} value="2" onClick={onClick}>
					{props.selected === '2' ? 'Circle 2 ' : 'SELECT CIRCLE 2'}
				</button>
				<button className={props.selected === '3' ? 'selected' : null} value="3" onClick={onClick}>
					{props.selected === '3' ? 'Circle 3 Selected' : 'SELECT CIRCLE 3'}
				</button>
				<button className={props.selected === '4' ? 'selected' : null} value="4" onClick={onClick}>
					{props.selected === '4' ? 'Circle 4 Selected' : 'SELECT CIRCLE 4'}
				</button>
			</div>
		);
}

export default CircleSelector;
