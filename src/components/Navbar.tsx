import Link from 'next/link'

import { menuLink } from '@/constants'

import Dropdown from './ui/Dropdown'

export default function Navbar() {
	return (
		<header>
			<div className="container">
				<nav className="flex items-center font-bold">
					<h1>Logo</h1>
					<div className="flex  items-center">
						{menuLink.map((link, idx) =>
							link.subCategories.length > 0 ? (
								<Dropdown key={idx} category={link} />
							) : (
								<Link key={idx} href={`/${link.slug}`}>
									{link.name}
								</Link>
							)
						)}
					</div>
				</nav>
			</div>
		</header>
	)
}
