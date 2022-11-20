import clsx from "clsx";
import { useRouter } from "next/router";
import { useMemo } from "react";
import type { IconType } from "react-icons";
import { IoHomeOutline, IoTrophyOutline, IoTrophy, IoHome, IoPeople, IoPeopleOutline } from "react-icons/io5";
import styles from "./index.module.css";

const TABS: { href: string, name: string, inactiveIcon: IconType, activeIcon: IconType }[] = [
	{
		href: "/",
		name: "home",
		inactiveIcon: IoHomeOutline,
		activeIcon: IoHome
	},
	{
		href: "/teams",
		name: "teams",
		inactiveIcon: IoPeopleOutline,
		activeIcon: IoPeople
	},
	{
		href: "/standings",
		name: "standings",
		inactiveIcon: IoTrophyOutline,
		activeIcon: IoTrophy
	}
]

export function Footer({
	className
}: {
	className?: string;
}) {
	const router = useRouter();
	return <div className={clsx(className, styles.items)}>
		{TABS.map(({
			href,
			name,
			inactiveIcon,
			activeIcon
		}) => {
			const isActive = (href === '/') ? (router.pathname === '/') : (router.pathname.startsWith(href));
			const Icon = isActive ? activeIcon : inactiveIcon;
			return <button
				onClick={() => router.push(href)}
				className={clsx(styles.item, isActive && styles.active)}
				key={name}>
				<Icon className={styles.icon} />
				<span className={styles.name} >{name}</span>
			</button>
		})}
	</div>
}