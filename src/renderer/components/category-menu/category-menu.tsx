import * as React from 'react'

import CategoryMenuItem from '@components/category-menu-item'
import { CategoryMenuItemType }  from '@components/category-menu-item/category-menu-item'


export default class CategoryMenu extends React.Component {
	render() {
		const data: Array<CategoryMenuItemType> = [
			{
				id: 1,
				title: 'Здоровье',
				sources: ['Source 1', 'Source 2', 'Source3']
			},
			{
				id: 2,
				title: 'Технологии',
				sources: ['Source 1', 'Source 2', 'Source3']
			},
			{
				id: 3,
				title: 'Политика',
				sources: ['Source 1', 'Source 2', 'Source3']
			},
			{
				id: 4,
				title: 'Культура',
				sources: ['Source 1', 'Source 2', 'Source3']
			},
			{
				id: 5,
				title: 'Религия',
				sources: ['Source 1', 'Source 2', 'Source3']
			},
			{
				id: 6,
				title: 'ПрочCategoryMenuItemTypeCategoryMenuItemTypeее',
				sources: ['Source 1', 'Source 2', 'Source3', 'Source 2', 'Source3', 'Source 2', 'Source3', 'Source 2', 'Source3', 'Source 2', 'Source3']
			},
			{
				id: 7,
				title: 'Здоровье',
				sources: ['Source 1', 'Source 2', 'Source3']
			},
			{
				id: 8,
				title: 'Технологии',
				sources: ['Source 1', 'Source 2', 'Source3']
			},
			{
				id: 9,
				title: 'Политика',
				sources: ['Source 1', 'Source 2', 'Source3']
			},
			{
				id: 10,
				title: 'Культура',
				sources: ['Source 1', 'Source 2', 'Source3']
			},
			{
				id: 11,
				title: 'Религия',
				sources: ['Source 1', 'Source 2', 'Source3']
			},
			{
				id: 12,
				title: 'Прочее',
				sources: ['Source 1', 'Source 2', 'Source3', 'Source 2', 'Source3', 'Source 2', 'Source3', 'Source 2', 'Source3', 'Source 2', 'Source3']
			},
		]

		return (
			<div className='category-menu'>
				{ data.map(item => <CategoryMenuItem categoryMenuItem={item} key={item.id} />) }
			</div>
		)
	}
}