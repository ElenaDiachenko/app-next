import { FC, ReactNode, useCallback, useRef, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

type CarouselProps = {
	children: ReactNode
}
const Carousel: FC<CarouselProps> = ({ children }) => {
	let scrl = useRef<HTMLDivElement | null>(null)
	const [scrollX, setscrollX] = useState(0)
	const [scrolEnd, setscrolEnd] = useState(false)

	const slide = useCallback((direction: 'left' | 'right') => {
		if (scrl?.current) {
			const shift =
				direction === 'left'
					? -scrl.current.offsetWidth / 2
					: scrl.current.offsetWidth / 2
			scrl.current.scrollLeft += shift
			setscrollX(scrollX + shift)

			if (
				Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
				scrl.current.offsetWidth
			) {
				setscrolEnd(true)
			} else {
				setscrolEnd(false)
			}
		}
	}, [])

	const scrollCheck = useCallback(() => {
		if (!scrl?.current) return

		setscrollX(scrl.current.scrollLeft)
		if (
			Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
			scrl.current.offsetWidth
		) {
			setscrolEnd(true)
		} else {
			setscrolEnd(false)
		}
	}, [])

	return (
		<section>
			<div className="mx-auto w-full max-w-[1200px] px-4 ">
				<div className="relative flex items-center group">
					{scrollX !== 0 && (
						<div className=" h-[60px] grid place-content-center shadow-[8px_0_8px_-4px_rgba(204,204,204,1)] ">
							<MdChevronLeft
								onClick={() => slide('left')}
								className="opacity-100 hover:opacity-90 cursor-pointer "
								size={25}
							/>
						</div>
					)}
					<div
						ref={scrl}
						onScroll={scrollCheck}
						className=" overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative mx-2">
						{children}
					</div>
					{!scrolEnd && (
						<div className=" h-[60px] grid place-content-center shadow-[-8px_0_8px_-4px_rgba(204,204,204,1)] ">
							<MdChevronRight
								onClick={() => slide('right')}
								className=" opacity-100 hover:opacity-90 cursor-pointer  "
								size={25}
							/>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

export default Carousel
