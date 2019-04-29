export interface ActorData {
  id: number
  name: string
  surname: string
  birth: string
  movie_id: number
}

export interface MovieData {
  id: number
  title: string
  director: string
  year: number
  playbill: string
}

export const actors: ActorData[] = [
  { id: 1, name: "Jack", surname: "Nicholson", birth: "22/04/1937", movie_id: 1},
  { id: 2, name: "Anthony", surname: "Hopkins", birth: "31/12/1937", movie_id: 2 },
  { id: 3, name: "Emily", surname: "Watson", birth: "14/01/1967", movie_id: 4 },
  { id: 4, name: "Robert", surname: "De Niro", birth: "17/08/1943", movie_id: 3 }
]

export const movies: MovieData[] = [
  { id: 1, title: "Shining", director: "Stanley Kubrick", year: 1969, playbill: "http://t2.gstatic.com/images?q=tbn:ANd9GcQ6P4J5irUozK-QizN05NksNkF7td2n1sF2lHn7_M_Gw-eudo4j" },
  { id: 2, title: "The Silence of the Lambs", director: "Jonathan Demme", year: 1991, playbill: "https://is2-ssl.mzstatic.com/image/thumb/Video4/v4/ea/59/bf/ea59bf2a-65c7-81b5-6edd-141b9f615ae7/1600x2400_SilenceoftheLambs_Italian.jpg/268x0w.jpg" },
  { id: 3, title: "Taxi Driver", director: "Martin Scorsese", year: 1976, playbill: "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg" },
  { id: 4, title: "Breaking the Waves", director: "Lars von Trier", year: 1996, playbill: "https://m.media-amazon.com/images/M/MV5BNDYwZTU2MzktNWYxMS00NTYzLTgzOWEtMTRiYjc5NGY2Nzg1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg" }
]
