import Link from 'next/link'

import Hero from '@/components/Hero'
import Meta from '@/components/ui/Meta'

export default function Home() {
	return (
		<Meta title="Main page" description="Description">
			<Hero />
			<Link href="/about">About</Link>
		</Meta>
	)
}
