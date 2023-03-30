import { Open_Sans } from 'next/font/google'

import Meta from '@/ui/Meta'

const font = Open_Sans({ subsets: ['latin'] })

export default function Home() {
	return (
		<Meta title="next-app" description="Description">
			<main className={font.className}>
				<h1 className="text-3xl font-bold underline ">Hello world!</h1>
			</main>
		</Meta>
	)
}
