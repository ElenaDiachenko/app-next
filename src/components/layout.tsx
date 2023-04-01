import Navbar from './Navbar'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<footer>Footer</footer>
		</>
	)
}

export default RootLayout
