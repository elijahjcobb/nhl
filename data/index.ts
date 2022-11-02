import {
  PersonDetail,
  PersonDetailResponse,
  RecordsResponse,
  ScheduleResponse,
  Team,
  TeamsResponse,
} from "./types";

async function fetcher<T>(path: string, isr = 10): Promise<T> {
  const res = await fetch(`https://statsapi.web.nhl.com/api/v1/${path}`, {
    next: { revalidate: isr },
  });
  return res.json() as T;
}

export async function fetchTeams(): Promise<Team[]> {
  const res = await fetcher<TeamsResponse>(`/teams`);
  return res.teams;
}

export async function fetchTeam(teamId: string): Promise<Team | undefined> {
  const res = await fetcher<TeamsResponse>(
    `/teams/${teamId}?expand=team.roster`
  );
  return res.teams[0];
}

export function fetchSchedule(teamId: string): Promise<ScheduleResponse> {
  return fetcher(`/schedule?teamId=${teamId}&season=20222023`);
}

export function fetchStandings(): Promise<RecordsResponse> {
  return fetcher(`/standings?season=20222023`);
}

export async function fetchPlayer(
  playerId: string
): Promise<PersonDetail | undefined> {
  const res = await fetcher<PersonDetailResponse>(`/people/${playerId}`);
  return res.people[0];
}

export function fetchPlayerHeadShot(playerId: string): string {
  return `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${playerId}@2x.jpg`;
}

export function fetchPlayerActionShot(playerId: string): string {
  return `https://cms.nhl.bamgrid.com/images/actionshots/${playerId}@2x.jpg`;
}

export function fetchTeamLogo(teamId: string): string {
  return `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${teamId}.svg`;
}

export * from "./types";
