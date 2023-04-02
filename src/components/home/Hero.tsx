import Link from 'next/link'

import React from 'react'
import { BsSearch } from 'react-icons/bs'

import { constants } from '@/utils/constants'

const Hero = () => {
	return (
		<section className=" text-white bg-hero-banner bg-no-repeat  bg-center bg-cover py-24 relative">
			<div className="mx-auto w-full max-w-[1200px] px-4 ">
				<div className="w-[63%] ">
					<div className="mb-12">
						<h1 className="font-medium text-5xl mb-2">
							Find & Hire <br />
							Expert Freelancers
						</h1>
						<p className="font-medium mb-2">
							Work with the best freelance talent from around the world on our
							secure,
							<br />
							flexible and cost-effective platform
						</p>
						<p
							aria-hidden="true"
							className="w-[100px] h-0 border-[2px] border-accent"></p>
					</div>
					<div className="flex justify-between  items-stretch max-w-[700px] flex-wrap gap-4">
						<form className=" flex-1 relative">
							<div className=" ">
								<input
									placeholder="What skills are you looking for?"
									className=" h-[60px] w-full rounded-md hover:border-[3px] hover:border-accent focus:border-accent outline-0 active:border-accent placeholder:text-secondary/70 placeholder:font-normal text-primary/80 font-semibold p-3"
								/>
								<button
									className="absolute top-1/2 right-1 transform  -translate-x-1/2 -translate-y-1/2 text-accent font-bold"
									type="submit">
									<BsSearch size={23} />
								</button>
							</div>
						</form>
						<span className=" my-auto">Or</span>
						<div className="btn-primary font-bold ">
							<Link
								href="/"
								className="hover:text-white hover:bg-accent/60 transition-colors  ">
								Post a Job - It's Free
							</Link>
						</div>
						<div className="flex flex-nowrap gap-2">
							{constants.heroSkills.map((skill, idx) => (
								<Link
									key={idx}
									href="/"
									className=" cursor-pointer text-secondary hover:text-white text-sm rounded  border border-secondary hover:border-white p-1">
									{skill}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
			<figure className="absolute right-0 top-0 bottom-0 w-[30%] z-[1] bg-hero-figure bg-no-repeat  bg-cover"></figure>
		</section>
	)
}

export default Hero
