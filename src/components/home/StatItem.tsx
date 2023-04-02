import { FC } from 'react'
import { IconType } from 'react-icons'

type StatItemType = {
	stat: { title: string; desc: string; icon: IconType }
}

const StatItem: FC<StatItemType> = ({ stat: { title, desc, icon: Icon } }) => {
	return (
		<li className="my-8 flex flex-col gap-3 md:flex-row  md:items-center">
			<Icon size={40} className="text-accent/90 " />
			<div className="">
				<p className="text-t-black font-semibold">{title}</p>
				<p className="">{desc}</p>
			</div>
		</li>
	)
}

export default StatItem