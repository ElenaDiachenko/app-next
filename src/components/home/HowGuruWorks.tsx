import React from 'react'

import SectionTitle from '@/components/ui/SectionTitle'

import { constants } from '@/utils/constants'

import Button from '../ui/Button'
import HowGuruWorksItem from './HowGuruWorksItem'

const HowGuruWorks = () => {
	return (
		<section className="py-[54px] md:py-16">
			<div className="container-box">
				<SectionTitle text={"It's Easy to Get Work Done on Guru"} />
				<ul className="grid grid-cols-2  md:grid-cols-4 gap-4 mb-8">
					{constants.howWork.map((item, idx) => (
						<HowGuruWorksItem key={idx} item={item} />
					))}
				</ul>
				<Button title={'See How Guru Works'} />
			</div>
		</section>
	)
}

export default HowGuruWorks
