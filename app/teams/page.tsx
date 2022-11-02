import { fetchTeams } from "../../data"
import styles from "./index.module.css";
import { TeamRow } from "./team-row";

export default async function Page() {
	const teams = await fetchTeams();
	return <div>
		{teams.map(team => {
			return <TeamRow key={team.id} team={team} />
		})}
	</div>

}