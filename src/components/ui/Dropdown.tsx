import Link from 'next/link'

import { Menu, Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'
import { HiChevronDown } from 'react-icons/hi'

type DropdownProps = {
	category: {
		id?: string
		name: string
		slug: string
		subCategories: SubCategoryType[]
	}
}
type SubCategoryType = {
	id: string
	name: string
	slug: string
	categoryId?: string
}

const Dropdown: FC<DropdownProps> = ({ category }) => {
	const { id, name, subCategories } = category

	return (
		<Menu as="div" className="relative inline-block text-left mx-auto">
			<Menu.Button
				title="Expand menu"
				className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2  ">
				{name}
				<HiChevronDown className="-mr-1 h-5 w-5 " aria-hidden="true" />
			</Menu.Button>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95">
				<Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right  focus:outline-none">
					<div className="flex flex-col justify-end p-1 bg-white whitespace-nowrap">
						{subCategories.map(subCategory => (
							<Menu.Item key={subCategory.id}>
								<Link
									href={`/${subCategory.slug}`}
									className=" block px-4 py-2 text-inherit hover:text-accent">
									{subCategory.name}
								</Link>
							</Menu.Item>
						))}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	)
}

export default Dropdown
