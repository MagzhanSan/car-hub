import './globals.css'
import { Footer, Navbar } from '@/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Car Hub by Maga',
	description: 'Car rental app built with Next.js and Tailwind CSS',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
