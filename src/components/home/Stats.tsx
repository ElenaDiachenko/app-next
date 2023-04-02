import React from 'react'

import { constants } from '@/utils/constants'

import StatItem from './StatItem'

const Stats = () => {
	return (
		<section className="bg-accent/5">
			<div className="container-box">
				<ul className="grid grid-cols-2  md:grid-cols-4 gap-4">
					{constants.stats.map((stat, idx) => (
						<StatItem key={idx} stat={stat} />
					))}
				</ul>
			</div>
		</section>
	)
}

export default Stats
