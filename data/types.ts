export interface BaseResponse {
  copyright: string;
}

export interface TeamsResponse extends BaseResponse {
  teams: Team[];
}

export interface Team {
  id: number;
  name: string;
  link: string;
  venue: Venue;
  abbreviation: string;
  teamName: string;
  locationName: string;
  firstYearOfPlay: string;
  division: Division;
  conference: Conference;
  franchise: Franchise;
  shortName: string;
  officialSiteUrl: string;
  franchiseId: number;
  active: boolean;
}

export interface Conference {
  id: number;
  name: string;
}

export interface Division {
  id: number;
  name: string;
  nameShort: string;
  abbreviation: string;
}

export interface Venue {
  name: string;
  link: string;
  city: string;
  timeZone: TimeZone;
  id?: number;
}

export interface TimeZone {
  id: string;
  offset: number;
  tz: string;
}

export interface Team {
  id: number;
  name: string;
  link: string;
  venue: Venue;
  abbreviation: string;
  teamName: string;
  locationName: string;
  firstYearOfPlay: string;
  division: Division;
  conference: Conference;
  franchise: Franchise;
  roster: TeamRoster;
  shortName: string;
  officialSiteUrl: string;
  franchiseId: number;
  active: boolean;
}

export interface Franchise {
  franchiseId: number;
  teamName: string;
  link: string;
}

export interface TeamRoster {
  roster: RosterElement[];
  link: string;
}

export interface RosterElement {
  person: Person;
  jerseyNumber: string;
  position: Position;
}

export interface Person {
  id: number;
  fullName: string;
  link: string;
}

export interface Position {
  code: string;
  name: string;
  type: string;
  abbreviation: string;
}

export interface RecordsResponse extends BaseResponse {
  records: Record[];
}

export interface Record {
  standingsType: string;
  league: Conference;
  division: Division;
  conference: Conference;
  season: string;
  teamRecords: TeamRecord[];
}

export interface TeamRecord {
  team: Conference;
  leagueRecord: LeagueRecord;
  regulationWins: number;
  goalsAgainst: number;
  goalsScored: number;
  points: number;
  divisionRank: string;
  divisionL10Rank: string;
  divisionRoadRank: string;
  divisionHomeRank: string;
  conferenceRank: string;
  conferenceL10Rank: string;
  conferenceRoadRank: string;
  conferenceHomeRank: string;
  leagueRank: string;
  leagueL10Rank: string;
  leagueRoadRank: string;
  leagueHomeRank: string;
  wildCardRank: string;
  row: number;
  gamesPlayed: number;
  streak: Streak;
  pointsPercentage: number;
  ppDivisionRank: string;
  ppConferenceRank: string;
  ppLeagueRank: string;
  lastUpdated: Date;
}

export interface LeagueRecord {
  wins: number;
  losses: number;
  ot: number;
  type: string;
}

export interface Streak {
  streakType: string;
  streakNumber: number;
  streakCode: string;
}

export interface PersonDetailResponse extends BaseResponse {
  people: PersonDetail[];
}

export interface PersonDetail {
  id: number;
  fullName: string;
  link: string;
  firstName: string;
  lastName: string;
  primaryNumber: string;
  birthDate: Date;
  currentAge: number;
  birthCity: string;
  birthStateProvince: string;
  birthCountry: string;
  nationality: string;
  height: string;
  weight: number;
  active: boolean;
  alternateCaptain: boolean;
  captain: boolean;
  rookie: boolean;
  shootsCatches: string;
  rosterStatus: string;
  currentTeam: CurrentTeam;
  primaryPosition: Position;
}

export interface CurrentTeam {
  id: number;
  name: string;
  link: string;
}

export interface ScheduleResponse {
  copyright: string;
  totalItems: number;
  totalEvents: number;
  totalGames: number;
  totalMatches: number;
  wait: number;
  dates: DateElement[];
}

export interface DateElement {
  date: Date;
  totalItems: number;
  totalEvents: number;
  totalGames: number;
  totalMatches: number;
  games: Game[];
  events: any[];
  matches: any[];
}

export interface Game {
  gamePk: number;
  link: string;
  gameType: string;
  season: string;
  gameDate: Date;
  status: Status;
  teams: {
    away: Away;
    home: Away;
  };
  venue: Venue;
}

export interface Status {
  abstractGameState: string;
  codedGameState: string;
  detailedState: string;
  statusCode: string;
  startTimeTBD: boolean;
}

export interface Away {
  leagueRecord: LeagueRecord;
  score: number;
  team: Venue;
}

export interface LeagueRecord {
  wins: number;
  losses: number;
  ot: number;
  type: string;
}
