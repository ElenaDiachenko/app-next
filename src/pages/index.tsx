import Link from 'next/link'

import Meta from '@/components/ui/Meta'

export default function Home() {
	return (
		<Meta title="Main page" description="Description">
			<h1 className="text-3xl font-bold underline ">Hello world!</h1>
			<Link href="/about">About</Link>
		</Meta>
	)
}
