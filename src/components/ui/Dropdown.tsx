import Link from 'next/link'

import { ICategory } from '@/interfaces'
import { Menu, Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'
import { HiChevronDown } from 'react-icons/hi'

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

const Dropdown: FC<ICategory> = ({ category }) => {
	const { id, name, subCategories } = category

	return (
		<Menu as="div" className="relative inline-block text-left">
			<Menu.Button
				title="Expand menu"
				className="inline-flex w-full justify-center gap-x-1.5  bg-white px-3 py-3 transition-colors hover:text-accent">
				{name}
				<HiChevronDown
					className="-mr-1 h-5 w-5 text-primary"
					aria-hidden="true"
				/>
			</Menu.Button>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95">
				<Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right  bg-white  focus:outline-none">
					{subCategories.map(subCategory => (
						<Menu.Item key={subCategory.id}>
							<Link
								href={`/${subCategory.slug}`}
								className="block hover:bg-bg-light hover:text-accent p-2 group transition-colors">
								{subCategory.name}
							</Link>
						</Menu.Item>
					))}
				</Menu.Items>
			</Transition>
		</Menu>
	)
}

export default Dropdown
