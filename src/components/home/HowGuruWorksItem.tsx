import { IStaticSectionData } from '@/interfaces'
import { FC } from 'react'

type HowGuruWorksItemType = {
	item: IStaticSectionData
}

const HowGuruWorksItem: FC<HowGuruWorksItemType> = ({
	item: { title, desc, icon: Icon }
}) => {
	return (
		<li className=" flex flex-col gap-3 ">
			<div className="p-5 mx-auto rounded-full shadow-card">
				<Icon size={40} className="text-accent/90 " />
			</div>
			<div className="text-center">
				<p className="text-t-black font-semibold md:text-2xl">{title}</p>
				<p className="">{desc}</p>
			</div>
		</li>
	)
}

export default HowGuruWorksItem
