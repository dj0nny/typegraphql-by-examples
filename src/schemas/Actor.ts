import { Field, Int, ObjectType } from 'type-graphql'
import Movie from './Movie'

@ObjectType()
export default class Actor {
  @Field(type => Int)
  id: number

  @Field(type => String)
  name: string

  @Field(type => String)
  surname: string

  @Field(type => String)
  birth: string

  @Field(type => Movie)
  movie: Movie
  
}