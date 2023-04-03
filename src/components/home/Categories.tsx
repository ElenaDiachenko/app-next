import { categories } from '@/data'
import React from 'react'

import SectionTitle from '@/components/ui/SectionTitle'

import Button from '../ui/Button'
import CategoryItem from './CategoryItem'

const Categories = () => {
	return (
		<section className="py-[54px] md:py-16">
			<div className="container-box">
				<SectionTitle text={'Find Top Freelancers'} />
				<ul className="grid grid-cols-1  md:grid-cols-3 gap-5 mb-8">
					{categories.map((cat, id) => (
						<CategoryItem key={id} category={cat} />
					))}
				</ul>
				<Button title={'See all Skills'} />
			</div>
		</section>
	)
}

export default Categories
