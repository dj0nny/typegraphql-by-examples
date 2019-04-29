import { Field, Int, ObjectType } from 'type-graphql'
import Actor from './Actor'

@ObjectType()
export default class Movie {
  @Field(type => Int)
  id: number

  @Field(type => String)
  title: string

  @Field(type => String)
  director: string

  @Field(type => Int)
  year: number

  @Field(type => String)
  playbill: string

  @Field(type => [Actor])
  actors: Actor[]

}