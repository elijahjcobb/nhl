import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export function TeamRow({
	name,
	logo,
	id
}: {
	logo: string;
	name: string;
	id: string;
}) {
	return <Link href={`/teams/${id}`} className={styles.row}>
		<Image src={logo} alt={`team ${name} logo`} width={60} height={60} />
		<span className={styles.name}>{name}</span>
	</Link>
}