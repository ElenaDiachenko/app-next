import Link from 'next/link'

import Hero from '@/components/Hero'
import Carousel from '@/components/ui/Carousel'
import Meta from '@/components/ui/Meta'

export default function Home() {
	return (
		<Meta title="Main page" description="Description">
			<Carousel />
			<Hero />
			<Link href="/about">About</Link>
		</Meta>
	)
}
