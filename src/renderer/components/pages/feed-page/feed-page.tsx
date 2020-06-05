import * as React from 'react'
import { useParams } from 'react-router-dom';

import Page from '@components/pages/page';

export function FeedPage() {
		const { id } = useParams()
		return (
			<Page title={id}>
				<div>
					{id}
				</div>
			</Page>
		)
}