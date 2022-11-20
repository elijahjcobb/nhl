import { ReactNode } from "react"
import { Footer } from "../footer";
import { Nav, type NavProps } from "../nav";
import styles from "./index.module.css";

export function Shell({
	children,
	nav,
}: {
	children: ReactNode;
	nav: NavProps;
}) {
	return <div className={styles.container}>
		<Nav className={styles.header} {...nav} />
		<div className={styles.body}>
			{children}
		</div>
		<Footer className={styles.footer} />
	</div>
}