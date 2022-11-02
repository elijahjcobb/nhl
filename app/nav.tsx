import Image from "next/image";
import styles from "./nav.module.css";
import { Roboto_Slab } from '@next/font/google'
import Link from "next/link";

const robotoSlab = Roboto_Slab()

const LINKS: { href: string, name?: string }[] = [
	{ href: 'teams' },
	{ href: 'schedule' },
	{ href: 'standings' },
]

export function Nav() {
	return <nav className={styles.nav}>
		<Link href="/" className={styles.title}>
			<Image src={'/nhl.svg'} width={36} height={36} alt='hockey stick' />
			<h1 className={robotoSlab.className}>NHL++</h1>
		</Link>
		<ul className={styles.links}>
			{LINKS.map(({ href, name }) => (
				<li key={href}><Link href={`/${href}`}>{name ?? href}</Link></li>
			))}
		</ul>
	</nav>
}