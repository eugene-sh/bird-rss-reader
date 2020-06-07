import * as React from 'react'

import Page from '@components/pages/page';
import FeedCard from '@components/feed-card';

export function TodayPage() {
	return	(
		<Page title='Сегодня' description='Актуальные события за последнее время'>
			<FeedCard />
			<FeedCard />
			<FeedCard />
		</Page>
	)
}