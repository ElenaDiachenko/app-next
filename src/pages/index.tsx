import Link from 'next/link'

import { Hero, Stats } from '@/components/home'
import Carousel from '@/components/ui/Carousel'
import Meta from '@/components/ui/Meta'
import SectionTitle from '@/components/ui/SectionTitle'

export default function Home() {
	return (
		<Meta title="Main page" description="Description">
			<Carousel />
			<Hero />
			<Stats />
			<SectionTitle text={'Hello world'} />
			<Link href="/about">About</Link>
		</Meta>
	)
}
