import { IReview } from '@/interfaces'
import { FC } from 'react'

type StatItemType = {
	item: IReview
}

const ClientReviewItem: FC<StatItemType> = ({
	item: { desc, avatar, userName, userDesc }
}) => {
	return (
		<div className=" inline-flex w-[102%] whitespace-normal mx-auto">
			<div className="flex-col mx-6">
				<div className=" ">{desc}</div>
				<div className="center-row gap-3">
					<p>{avatar}</p>
					<div className="pb-4">
						<p className="text-t-black pb-3 font-medium">{userName}</p>
						<p>{userDesc}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ClientReviewItem
