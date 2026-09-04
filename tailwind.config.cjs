/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#f8f7ff',
					100: '#ede9fe',
					500: '#7c3aed',
					600: '#6d28d9',
					700: '#5b21b6',
					800: '#4c1d95',
					900: '#2e1065',
				},
				accent: {
					50: '#fdf2f8',
					100: '#fce7f3',
					500: '#ec4899',
					600: '#db2777',
					700: '#be185d',
				},
			},
			typography: {
				DEFAULT: {
					css: {
						color: '#374151',
						a: {
							color: '#7c3aed',
							'&:hover': {
								color: '#6d28d9',
							},
						},
					},
				},
			},
			boxShadow: {
				'lg-custom': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
				'md-custom': '0 10px 15px -3px rgba(0, 0, 0, 0.08)',
			},
			fontFamily: {
				sans: ['system-ui', 'sans-serif'],
				mono: ['Menlo', 'monospace'],
			},
			spacing: {
				'safe-area': 'max(1.5rem, env(safe-area-inset-left))',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
