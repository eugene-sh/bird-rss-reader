import * as React from 'react'

import Sidebar from '@components/sidebar'
import Content from '@components/content'

export function App() {
	return (
		<div className='app'>
			<Sidebar />
			<Content />
		</div>
	)
}