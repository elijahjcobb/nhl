import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import type { IconType } from "react-icons";
import { IoChevronBack } from "react-icons/io5";
import { useRouter } from "next/router";
import { useCallback } from "react";
import clsx from "clsx";

export interface NavProps {
	title: string;
	actionIcon?: IconType;
	onActionTap?: () => void;
}

export function Nav({
	title,
	actionIcon: ActionIcon,
	onActionTap,
	className
}: NavProps & {
	className?: string;
}) {

	const router = useRouter();

	const handleHomeClick = useCallback(() => router.back(), [router]);

	return <nav className={clsx(styles.nav, className)}>
		<button className={styles.action} onClick={handleHomeClick}>
			<IoChevronBack size={32} />
		</button>
		<h1>{title}</h1>
		<button className={styles.action} onClick={onActionTap}>
			{ActionIcon ? <ActionIcon size={32} /> : null}
		</button>
	</nav>
}