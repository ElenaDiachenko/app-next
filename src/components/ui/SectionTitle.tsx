import { FC } from 'react'

type SectionTitleProps = {
	variant?: boolean
	text: string
}

const SectionTitle: FC<SectionTitleProps> = ({ variant = false, text }) => {
	return (
		<div className="container-box  flex  flex-col items-center mb-14">
			<h2
				className={`${
					variant ? ' text-white ' : ' text-t-black '
				} mb-2 text-2xl md:text-4xl`}>
				{text}
			</h2>
			<p
				aria-hidden="true"
				className={`${
					variant ? ' border-white ' : ' border-accent '
				} w-[50px] h-0 border-[2px]`}
			/>
		</div>
	)
}

export default SectionTitle
