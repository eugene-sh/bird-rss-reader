import * as React from 'react'

export interface ContentProps {
	children: JSX.Element | JSX.Element[]
}

export function Content({children}:ContentProps) {
	return (
		<div className='content'>
			{children}
		</div>
	)
}
