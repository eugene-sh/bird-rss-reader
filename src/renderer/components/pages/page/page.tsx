import * as React from 'react'

interface PageProps {
	title: string,
	description?: string,
	children: JSX.Element | JSX.Element[]
}

export function Page({ title, description, children }: PageProps) {
	return (
		<div className='page'>
			<div className='page-header'>
				<div className='page-title'>{title}</div>
				<div className="page-description">{description}</div>
			</div>
			<div className="page-content">
				{children}
			</div>
		</div>
	)
}