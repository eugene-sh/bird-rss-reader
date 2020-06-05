import * as React from 'react'
import {
	Route,
	useParams,
} from "react-router-dom"

import Sidebar from '@components/sidebar'
import Content from '@components/content'
import TodayPage from '@components/pages/today-page';
import FavoritesPage from '@components/pages/favorites-page';
import FeedPage from '@components/pages/feed-page';

export function App() {
	return (
		<div className='app'>
				<Sidebar />
				<Content>
					<Route exact path="/today" children={<TodayPage />} />
					<Route exact path="/favorites" children={<FavoritesPage />}/>
					<Route path="/feed/:id" children={<FeedPage />} />
				</Content>
		</div>
	)
}