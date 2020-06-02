import * as React from 'react'

import CategoryMenuItem from '@components/category-menu-item'
import { CategoryMenuItemType }  from '@components/category-menu-item/category-menu-item'


export default class CategoryMenu extends React.Component {
	render() {
		const data: Array<CategoryMenuItemType> = [
			{
				title: 'Здоровье',
				sources: ['Source 1', 'Source 2', 'Source3']
			},
			{
				title: 'Технологии',
				sources: ['Source 1', 'Source 2', 'Source3']
			},
			{
				title: 'Политика',
				sources: ['Source 1', 'Source 2', 'Source3']
			},
			{
				title: 'Культура',
				sources: ['Source 1', 'Source 2', 'Source3']
			},
			{
				title: 'Религия',
				sources: ['Source 1', 'Source 2', 'Source3']
			},
			{
				title: 'ПрочCategoryMenuItemTypeCategoryMenuItemTypeее',
				sources: ['Source 1', 'Source 2', 'Source3', 'Source 2', 'Source3', 'Source 2', 'Source3', 'Source 2', 'Source3', 'Source 2', 'Source3']
			},
			{
				title: 'Здоровье',
				sources: ['Source 1', 'Source 2', 'Source3']
			},
			{
				title: 'Технологии',
				sources: ['Source 1', 'Source 2', 'Source3']
			},
			{
				title: 'Политика',
				sources: ['Source 1', 'Source 2', 'Source3']
			},
			{
				title: 'Культура',
				sources: ['Source 1', 'Source 2', 'Source3']
			},
			{
				title: 'Религия',
				sources: ['Source 1', 'Source 2', 'Source3']
			},
			{
				title: 'Прочее',
				sources: ['Source 1', 'Source 2', 'Source3', 'Source 2', 'Source3', 'Source 2', 'Source3', 'Source 2', 'Source3', 'Source 2', 'Source3']
			},
		]

		return (
			<div className='category-menu'>
				{
					data.map((item, key) => <CategoryMenuItem categoryMenuItem={item} />)
				}
			</div>
		)
	}
}