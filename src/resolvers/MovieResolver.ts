import { Arg, Query, Resolver } from 'type-graphql'
import { movies, MovieData } from '../data'
import Movie from '../schemas/Movie'

@Resolver(of => Movie)
export default class {
  @Query(returns => Movie, { nullable: true })
  movieById(@Arg('id') id: number): MovieData | undefined {
    return movies.find(movie => movie.id === id)
  }

  @Query(returns => Movie, { nullable: true })
  movieByYear(@Arg('year') year: number): MovieData | undefined {
    return movies.find(movie => movie.year === year)
  }
}