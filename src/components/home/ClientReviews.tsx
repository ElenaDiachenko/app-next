import { reviews } from '@/data'

import { Carousel, SectionTitle } from '../ui'
import ClientReviewItem from './ClientReviewItem'

const ClientReviews = () => {
	return (
		<section className="py-[54px] md:py-16">
			<div className="container-box">
				<SectionTitle text={'What Clients Say'} />
				<Carousel step={1}>
					{reviews.map(review => (
						<ClientReviewItem key={review.id} item={review} />
					))}
				</Carousel>
			</div>
		</section>
	)
}

export default ClientReviews
