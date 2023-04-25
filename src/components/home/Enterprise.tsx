import Link from 'next/link'

import React from 'react'

import { constants } from '@/utils/constants'

import { Button } from '../ui'
import EnterpriseItem from './EnterpriseItem'

const Enterprise = () => {
	return (
		<section className=" text-white bg-accent-blue bg-enterprise-banner bg-no-repeat  bg-[bottom_right] bg-[length:60%]  py-24 ">
			<div className="container-box  ">
				<div className="center-col md:flex-row  gap-16">
					<div className=" border-b-2 border-accent md:border-r-2 md:border-b-0 pb-16 md:pb-0 md:pr-16">
						<img
							src="./images/enterprise_logo.jpg"
							alt="logo"
							className="w-[178px] h-[73px]"
						/>
					</div>
					<div className="">
						<p className="  md:text-xl font-medium mb-6">
							Custom Enterprise Solutions for Your Business.
						</p>
						<ul className="flex flex-col gap-6 mb-8">
							{constants.enterpriseList.map((item, idx) => (
								<EnterpriseItem key={idx} item={item} />
							))}
						</ul>
						<Button
							title={'Learn about Guru Enterprise'}
							style={' md:mr-auto md:ml-0'}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Enterprise
