import * as React from 'react'

export function FeedCard() {
	return (
		<div className='feed_card'>
			<div className='feed_card-image'>
				<img src='https://placeimg.com/200/100' alt='img'/>
			</div>
			<div className='feed_card-body'>
				<div className='feed_card-title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, recusandae.</div>
				<div className='feed_card-addinfo'>
					<div className='feed_card-source'>VK News</div>
					<div className='feed_card-divider'>/</div>
					<div className='feed_card-author'>Eugene Shamidanov</div>
				</div>
				<div className='feed_card-article'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequuntur debitis saepe neque a minus quod? Aliquid error quia, sunt aliquam blanditiis explicabo ipsum cum vitae! Enim animi quasi odit earum necessitatibus, nihil amet possimus officiis ad illum alias hic aspernatur quae magni eos nostrum itaque nisi rem debitis totam!</div>
				<div className='feed_card-buttons'>
					<div className="feed_card-button feed_card-markasread_button">
						<i className="fas fa-check"></i>
					</div>
					<div className="feed_card-button feed_card-bookmark_button">
						<i className="fas fa-bookmark"></i>
					</div>
				</div>
			</div>
		</div>
	)
}
