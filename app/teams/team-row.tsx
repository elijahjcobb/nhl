import { fetchTeamLogo, Team } from "../../data"
import Image from "next/image";

export function TeamRow({
	team
}: {
	team: Team
}) {
	return <div>
		<Image alt={`${team.name} logo`} src={fetchTeamLogo(team.id)} width={64} height={64} />
		<span>{team.name}</span>
	</div >
}