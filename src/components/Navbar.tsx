import Link from 'next/link'

import { menuLink } from '@/constants'
import { AiOutlineMenu } from 'react-icons/ai'

import Dropdown from './ui/Dropdown'

export default function Navbar() {
	return (
		<header className="border-t-[5px] border-t-accent border-b-[1px] border-b-secondary/20 shadow-[0 1px 0 rgba(255,255,255,0.2)] ">
			<div className="container">
				<nav className="flex items-center font-bold justify-between md:justify-start">
					<div className="md:hidden">
						<AiOutlineMenu />
					</div>
					<div className="">
						<Link href="/" className="block py-4">
							<img
								src="./images/logo.png"
								alt="logo"
								className="w-[100px] h-[30px] md:w-[130px] md:h-[30px]"
							/>
						</Link>
					</div>
					<div className=" hidden md:flex items-center gap-3 ml-5">
						{menuLink.map((link, idx) =>
							link.subCategories.length > 0 ? (
								<Dropdown key={idx} category={link} />
							) : (
								<Link
									key={idx}
									href={`/${link.slug}`}
									className="px-3 py-2 transition-colors hover:text-accent block ">
									{link.name}
								</Link>
							)
						)}
					</div>
					<ul className="flex items-center gap-4 md:ml-auto">
						<li className="btn-primary font-bold">
							<Link
								href="/"
								className="hover:text-white hover:bg-accent/60 transition-colors   ">
								Post a job
							</Link>
						</li>
						<li>
							<Link href="/register">Sign Up</Link>
						</li>
						<li>
							<Link href="/login">Log In</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
