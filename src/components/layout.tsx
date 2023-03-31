const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<header>
				<nav>
					<h1>Navbar</h1>
				</nav>
			</header>
			<main>{children}</main>
			<footer>Footer</footer>
		</>
	)
}

export default RootLayout
