import { GraphQLServer } from 'graphql-yoga'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import MovieResolver from '../src/resolvers/MovieResolver'

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [MovieResolver],
    emitSchemaFile: true
  })

  const server = new GraphQLServer({
    schema
  })
  
  server.start(() => console.log(`Server's up at port 4000`))
}