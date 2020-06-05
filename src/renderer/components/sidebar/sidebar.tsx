import * as React from 'react'
import { Link, NavLink } from "react-router-dom"

import Logo from '@components/logo'
import CategoryList from '@components/category-menu'

export interface GroupProps {
	title: string,
	children: JSX.Element | JSX.Element[] 
}

export function Group({children,  title}: GroupProps) {
	return (
		<div className='group'>
			<div className="group-title">
				{title}
			</div>
			<div className='group-content'>
				{children}
			</div>
		</div>
	)
}

export interface SidebarSectionItemProps {
	icon: JSX.Element,
	text: string
}

export default class Sidebar extends React.Component {
	render() {
		return (
			<div className='sidebar'>

				<div className='sidebar-item' style={{marginTop: '25px'}}>
					<div className='sidebar-item_content sidebar-item_button'>
						<Logo />
					</div>
				</div>

				<div className='sidebar-item' style={{marginTop: '70px'}}>
					<div className='sidebar-item_content'>

						<Group title='Меню'>
							<NavLink to="/today">
								<div style={{padding: '15px 0'}}>
									<div className='icon_text'>
										<div className='icon_text-icon'>
											<i className="fas fa-calendar"></i>
										</div>
										<div className='icon_text-text'>
											Сегодня
										</div>
									</div>
								</div>
							</NavLink>

							<Link to="/favorites">
								<div>
									<div className='icon_text'>
										<div className='icon_text-icon'>
											<i className="fas fa-bookmark"></i>
										</div>
										<div className='icon_text-text'>
											Закладки
									</div>
									</div>
								</div>
							</Link>

						</Group>

					</div>
				</div>

				<div className='sidebar-item sidebar-item-stretch' style={{marginTop: '70px'}}>
					<div className='sidebar-item_content'>

						<Group title='Категории'>
								<CategoryList />
						</Group>

					</div>
				</div>

				<div className='sidebar-item' style={{marginTop: '70px', borderTop: '1px solid rgba(34,36,38,.15)'}}>
					<div className='sidebar-item_content sidebar-item_button'>

						<div className='sidebar-action_button'>
							<div className='sidebar-action_button_icon'>
								<i className="fas fa-plus"></i>
							</div>
							<div className='sidebar-action_button_text'>
								Добавить
							</div>
						</div>

					</div>
				</div>

			</div>
		)
	}
}

