import { Dispatch, FC, SetStateAction } from 'react'
import { CiCircleChevDown, CiCircleChevUp } from 'react-icons/ci'

type WorkYourWayItemType = {
	active: string
	setActive: Dispatch<SetStateAction<string>>
	item: { title: string; desc: string }
}

const WorkYourWayItem: FC<WorkYourWayItemType> = ({
	item: { title, desc },
	active,
	setActive
}) => {
	const isActive = active === title

	return (
		<li className=" flex flex-col gap-2   ">
			<div
				className="flex gap-2 items-center cursor-pointer"
				onClick={() => setActive(title)}>
				{isActive ? (
					<CiCircleChevUp size={27} className="text-accent/90 " />
				) : (
					<CiCircleChevDown size={27} className="text-accent/90 " />
				)}
				<p className="text-t-black md:text-xl font-medium">{title}</p>
			</div>
			<p className={`${isActive ? 'block mt-2 ml-[35px]' : 'hidden'}`}>
				{desc}
			</p>
		</li>
	)
}

export default WorkYourWayItem
