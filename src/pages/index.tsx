import Link from 'next/link'

import {
	Categories,
	Enterprise,
	Hero,
	HowGuruWorks,
	Stats,
	WorkYourWay
} from '@/components/home'
import { Carousel, Meta } from '@/components/ui'

export default function Home() {
	return (
		<Meta title="Main page" description="Description">
			<Carousel />
			<Hero />
			<Stats />
			<Categories />
			<HowGuruWorks />
			<WorkYourWay />
			<Enterprise />
			<Link href="/about">About</Link>
		</Meta>
	)
}
