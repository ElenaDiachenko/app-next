import Link from 'next/link'

import {
	Categories,
	Enterprise,
	Hero,
	HowGuruWorks,
	SlideMenu,
	Stats,
	WorkYourWay
} from '@/components/home'
import { Meta } from '@/components/ui'

export default function Home() {
	return (
		<Meta title="Main page" description="Description">
			<SlideMenu />
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
