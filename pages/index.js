import Head from 'next/head'
import Image from 'next/image'
import { Suspense } from 'react'
import Card from '../src/components/Card.server'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Hello</title>
			</Head>
			<Suspense fallback={'Loading...'}>
				<Card />
			</Suspense>
		</div>
	)
}
