import Link from 'next/link'

import { categories } from '@/data'

import { Carousel } from '../ui'

const SlideMenu = () => {
	return (
		<Carousel step={2} shadow={true}>
			{categories.map(category => (
				<Link
					key={category.id}
					href={`/${category.slug}`}
					className="inline-block hover:underline hover:text-accent p-4 ">
					{category.name}
				</Link>
			))}
		</Carousel>
	)
}

export default SlideMenu
