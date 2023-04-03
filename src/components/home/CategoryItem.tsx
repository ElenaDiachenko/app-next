import Link from 'next/link'

import { ICategory } from '@/interfaces'
import { FC } from 'react'

const CategoryItem: FC<ICategory> = ({ category }) => {
	const { name, icon: Icon, slug, users } = category
	return (
		<li className="grid place-content-center shadow-card p-4">
			<Link
				href={`/${slug}`}
				className="center-col items-center  hover:underline text-accent p-4  ">
				<Icon size={40} className="text-accent/90 mb-4 " />
				<p className="text-t-black font-medium  mb-1 text-center ">{name}</p>
				<p className="text-primary/80  font-normal text-sm">
					{users &&
						`${new Intl.NumberFormat('en-US').format(users)} Freelancers`}
				</p>
			</Link>
		</li>
	)
}

export default CategoryItem
