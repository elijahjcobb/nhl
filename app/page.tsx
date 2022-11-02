import { fetchTeam, fetchTeams } from "../data"

export default async function Page() {
  const foo = await fetchTeam('17');
  const bar = await fetchTeams();
  return <div>
    {JSON.stringify(foo)}
    {JSON.stringify(bar)}
  </div>
}
