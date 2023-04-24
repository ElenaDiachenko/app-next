import React from 'react'

import { Button, SectionTitle } from '@/components/ui'

import { constants } from '@/utils/constants'

import WorkYourWayItem from './WorkYourWayItem'

const WorkYourWay = () => {
	return (
		<section className="bg-accent/5 py-[54px] md:py-16">
			<div className="container-box">
				<SectionTitle text={'Work Your Way'} />
				<div className="center-col md:flex-row justify-between gap-3">
					<div className="w-full md:w-1/2 flex-end">
						<img
							src="./images/workyourway.jpg"
							alt="work-your-way"
							className="w-full h-auto"
						/>
					</div>
					<div className="w-full md:w-1/2 self-start ">
						<p className="md:mb-8 text-t-black md:text-xl font-medium">
							Choose from four Payment terms and create Agreements.
						</p>
						<ul className="flex flex-col gap-4">
							{constants.workWayList.map((item, idx) => (
								<WorkYourWayItem key={idx} item={item} />
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WorkYourWay
