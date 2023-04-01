/** @type {import('tailwindcss').Config} */
const twColors = require('tailwindcss/colors')

const colors = {
	transparent: twColors.transparent,
	black: twColors.black,
	white: twColors.white,
	gray: twColors.gray,
	accent: '#4c83c3',
	['t-black']: '#111111',
	['bg-light']: '#f5f5f5',
	['bg-accent-blue']: '#2b3247',
	primary: '#333333',
	secondary: '#666666',
	['hover-light']: '#f7f7f7'
}
module.exports = {
	content: [
		// "./app/**/*.{js,ts,jsx,tsx}",
		// "./pages/**/*.{js,ts,jsx,tsx}",
		// "./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		colors,
		// screens: {
		// 	xs: { min: '320px', max: '639px' },
		// 	sm: { min: '640px', max: '767px' },
		// 	md: { min: '768px', max: '1023px' },
		// 	lg: { min: '1024px', max: '1279px' }
		// },
		container: {
			center: true,
			padding: '1rem'
		},
		boxShadow: {
			card: '0 0 4px 4px rgba(20,102,143,0.08)'
		},
		extend: {
			keyframes: {
				animationOpacity: {
					from: { opacity: 0.2 },
					to: { opacity: 1 }
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)'
					},
					'50%': {
						opacity: 0.3
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				opacity: 'animationOpacity .5s easy-in-out',
				scaleIn: 'scaleIn .35s easy-in-out'
			},
			backgroundImage: {
				'hero-banner': "url('/images/banner.svg')",
				'hero-figure': "url('/images/bannerguy.png')",
				'footer-texture': "url('/img/footer-texture.png')"
			}
		}
	},
	plugins: []
}
