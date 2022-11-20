import Image from "next/image";
import { fetchPlayerHeadShot, fetchTeamLogo } from "../../data";
import { RosterElement, Team } from "../../data/types";
import styles from "./index.module.css";

export function PlayerRow({ person, jerseyNumber, position, team }: RosterElement & { team: Team }) {
	return <div className={styles.row}>
		<div className={styles.content}>
			<Image className={styles.head} src={fetchTeamLogo(team.id)} alt={`${person.fullName} team`} width={36} height={36} />
			<span className={styles.name}>{person.fullName}</span>
			<span className={styles.position}>{position.name}</span>
			<span className={styles.jersey}>{jerseyNumber}</span>
		</div>
		<Image className={styles.head} src={fetchPlayerHeadShot(person.id)} alt={`${person.fullName} headshot`} width={120} height={120} />
	</div>

}