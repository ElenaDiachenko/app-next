import { FC, useState } from 'react'
import { CiCircleChevDown, CiCircleChevUp } from 'react-icons/ci'

type WorkYourWayItemType = {
	item: { title: string; desc: string }
}

const WorkYourWayItem: FC<WorkYourWayItemType> = ({
	item: { title, desc }
}) => {
	return (
		<li className=" flex flex-col gap-2   ">
			<div className="flex gap-2 items-center">
				<CiCircleChevDown size={30} className="text-accent/90 " />
				<p className="text-t-black md:text-xl font-medium">{title}</p>
			</div>
			<p className="mt-2">{desc}</p>
		</li>
	)
}

export default WorkYourWayItem
