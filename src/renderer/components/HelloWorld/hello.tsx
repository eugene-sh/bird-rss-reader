import * as React from 'react';

import './hello.scss'

export interface HelloProps {
	compiler: string;
	framework: string;
}

export class HelloWorld extends React.Component<HelloProps, {}> {
	render() {
		const { compiler, framework } = this.props;
		return (
			<div className='greet'>
				<h1>Hello from {compiler} and {framework}!</h1>
			</div>
		)
	}
}

