import { GetServerSideProps } from "next"
import { Shell } from "../../components/shell"
import { TeamRow } from "../../components/team-row"
import { fetchTeamLogo, fetchTeams } from "../../data"
import styles from "../../components/team-row/index.module.css";

interface PageProps {
	teams: { name: string, logo: string, id: number }[]
}

export default function Page({
	teams
}: PageProps) {
	return <Shell
		nav={{
			title: "Teams"
		}}
	>
		<div className={styles.rows}>
			{teams.map(team => <TeamRow name={team.name} logo={team.logo} id={team.id} key={team.id} />)}
		</div>
	</Shell>
}


export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
	const teams = await fetchTeams();
	return {
		props: {
			teams: teams.map(team => ({
				name: team.name,
				logo: fetchTeamLogo(team.id),
				id: team.id
			}))
		}
	}

}