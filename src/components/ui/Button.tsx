import Link from 'next/link'

import { FC } from 'react'

type ButtonProps = {
	title: string
	variant?: boolean
}

const Button: FC<ButtonProps> = ({ title, variant = false }) => {
	return (
		<div
			className={`${
				variant ? ' btn-secondary ' : ' btn-primary '
			} font-bold mx-auto w-max px-6 py-4`}>
			<Link
				href="/"
				className="  hover:text-white hover:bg-accent/60 transition-colors  ">
				{title}
			</Link>
		</div>
	)
}

export default Button
