import * as React from 'react'
import { Link   } from "react-router-dom"

export interface CategoryMenuItemProps {
	categoryMenuItem: CategoryMenuItemType
}

export interface CategoryMenuItemType {
	id: number,
	title: string,
	sources: string[]
}

export function CategoryMenuItem({ categoryMenuItem }: CategoryMenuItemProps) {
	const [opened, setOpened] = React.useState<boolean>(false)

	return (
		<div className={`category-item ${opened ? 'category-item-opened' : ''}`}>
			<div className='category-item_header' onClick={() => setOpened(!opened)}>
				<div className='category-item_icon'>
					<i className="fas fa-caret-right"></i>
				</div>
				<div>
					{categoryMenuItem.title.length > 16 ? `${categoryMenuItem.title.substr(0, 16)}...` : categoryMenuItem.title}
				</div>
			</div>
			<div className='category-item_content'>
				<ul>
					{
						categoryMenuItem.sources.map((source, key) => {
							return (
								<div>
									<Link to={`/feed/${source}`} key={key}>
										{source}
									</Link >
								</div>
							) 
						})
					}
				</ul>
			</div>
		</div>
	)
}