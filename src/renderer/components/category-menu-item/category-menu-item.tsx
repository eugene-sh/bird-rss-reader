import * as React from 'react'

export interface CategoryMenuItemProps {
	categoryMenuItem: CategoryMenuItemType
}

export interface CategoryMenuItemType {
	title: string,
	sources: string[]
}

export function CategoryMenuItem({categoryMenuItem}: CategoryMenuItemProps) {
		const [opened, setOpened] = React.useState<boolean>(false)

		return (
			<div className={`category-item ${opened ? 'category-item-opened' : ''}`}>
					<div className='category-item_header' onClick={() => setOpened(!opened)}>
						<div className='category-item_icon'>
							<i className="fas fa-chevron-right"></i>
						</div>
						<div>
							{categoryMenuItem.title.length > 16 ? `${categoryMenuItem.title.substr(0, 16)}...` : categoryMenuItem.title}
						</div>
					</div>
					<div className='category-item_content'>
						<ul>
							{ categoryMenuItem.sources.map((source, key) => <li>{source}</li>) }
						</ul>
					</div>
			</div>
		)
}