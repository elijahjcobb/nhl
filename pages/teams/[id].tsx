import { GetServerSideProps } from "next"
import { PlayerRow } from "../../components/player-row";
import { Shell } from "../../components/shell"
import { TeamRow } from "../../components/team-row"
import { fetchTeamLogo, fetchPlayerHeadShot, fetchTeam, type Team } from "../../data"
import styles from "../../styles/teamPage.module.css";

interface PageProps {
	team: Team;
}

export default function Page({
	team
}: PageProps) {
	return <Shell
		nav={{
			title: team.teamName
		}}
	>
		<div className={styles.players}>
			{team.roster.roster.map(player => <PlayerRow team={team} key={player.person.id} {...player} />)}
		</div>
	</Shell>
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
	const teamId = context.query.id;
	if (typeof teamId !== 'string') {
		return { notFound: true }
	}
	const team = await fetchTeam(teamId);
	if (!team) {
		return { notFound: true }
	}
	return {
		props: {
			team
		}
	}
}