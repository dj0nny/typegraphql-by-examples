# typegraphql-by-examples

> Explore the main features of TypeGraphQL

## Why GraphQL? Why TypeScript?

__GraphQL__ is a powerful query language, developed by Facebook, for API services. In other hand, __Typescript__ is an extension of Javascript language that provides many features like data types, classes, interfaces, ecc...

As GraphQL and Typescript lover, I want to explore this intresting combination

## Getting Started

For this project you need [__Node__](https://nodejs.org/en/) installed on your machine with [__Npm__](https://www.npmjs.com/) or [__Yarn__](https://yarnpkg.com)

### Installing

You can clone this repository using __Git__:
```bash
git clone https://github.com/dj0nny/type-graphql-by-examples.git
```
Or download the repository [here](https://github.com/dj0nny/type-graphql-by-examples/archive/develop.zip)

Open a terminal and type, inside the root directory:
```bash
npm install 
# OR
yarn install
```

for installing all the dependencies. At the end type, in the same folder:
```bash
npm run dev
# OR
yarn run dev
```
for running the GraphQL server. It will be up and running at this address: http://localhost:4000.

## Deployment

You can also create a build version of this repository running the command:
```bash
npm run prod
# OR
yarn run prod
```

## TypeGraphQL Overview

TypeGraphQL is an implementation of GraphQL with TypeScript. This section it assumes that you have a basic understaning of GraphQL and Typescript. 

### Schemas

You can easly describe a schema using the __decorators__, for example:

```typescript
@ObjectType()
export default class Person {
  @Field(type => String) // explicit declaration of type's field
  name: string

  @Field() // you can also don't declarate the type of the field
  age: number

  @Field({ nullable: true }) // this field can be null
  isWorking?: boolean  
}
```

* The `@ObjectType()` decorator is used for describing a TypeGraphQL schema
* The `@Field` decorator is used for described a field of a TypeGraphQL schema

### Resolvers

A resolver is used for creating queries, mutations and field resolvers using a simple class-based syntax

```typescript
@Resolver(of => Person)
export default class {
  @Query(returns => Person, { nullable: true })
  personByName(@Arg('name') name: string): PersonData | undefined {
    return people.find(person => person.name === name)
  }

  @Query(returs => [People]) {
    getPeople(): People[] {
      return peoples()
    }
  }

  @Mutation(returns => Person)
  markAsWorking(@Arg("name") name: string): PersonData {
    const person = people.find(person => {
      return person.name === name
    })
    if(!person) {
      throw Error(`Couldn't find the person with name ${name}`)
    }
    if(person.isWorking === true) {
      throw Error(`Person with name ${name} is already working`)
    }
    person.isWorking = true
    return person
  }
}
```
* The `@Resolver` decorator is used for creating a TypeGraphQL resolver. The `(of => Person)` notation indicates the referenced schema.
* The `@Query` decorator is used for describing a query. In this case, the `personByName` query returs a `Person`, and this query could be null. The argument, indicate with `@Arg` decorator, is the name of the person and its implementation returns a `PersonData` type or `undefined`.
* The `@Mutation` decorator create a new mutation for changing data's value. This muatation returns a `Person` and its implementation is very similar to `personByName` query.

### Running the queries

The queries described in the previous section can be run using these statements:

#### personByName Query

```javascript
{
  personByName(name: 'John') {
    age
    isWorking
  }
}

```

#### getPeople Query

```javascript
{
  getPeople() {
    name
    age
    isWorking
  }
}

```

#### markAsWorking Mutation

```javascript
{
  markAsWorking(name: 'John') {
    age
    isWorking
  }
}

```



## Built With

* [TypeScript](https://www.typescriptlang.org/) - Javascript based-type language
* [TypeGraphQL](https://typegraphql.ml/) - A TypeScript integration of GraphQL
* [NodeJS](https://nodejs.org/en/) - A Javascript runtime

## Contributing

Pull Requests for adding features ⇄ and ★ are welcome 😎

