import Link from 'next/link'

import { Categories, Hero, HowGuruWorks, Stats } from '@/components/home'
import Carousel from '@/components/ui/Carousel'
import Meta from '@/components/ui/Meta'

export default function Home() {
	return (
		<Meta title="Main page" description="Description">
			<Carousel />
			<Hero />
			<Stats />
			<Categories />
			<HowGuruWorks />
			<Link href="/about">About</Link>
		</Meta>
	)
}
