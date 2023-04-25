import { IStaticSectionData } from '@/interfaces'
import { FC } from 'react'

type EnterpriseItemType = {
	item: IStaticSectionData
}

const EnterpriseItem: FC<EnterpriseItemType> = ({
	item: { title, icon: Icon }
}) => {
	return (
		<li className="flex items-center gap-2 text-base">
			<Icon size={28} />
			<p>{title}</p>
		</li>
	)
}

export default EnterpriseItem
