interface Pokemon {
  count: number
  next: string
  previous: string
  results: Result[]
};

interface Result {
  name: string
  url: string
}

interface PokemonDetail {
  abilities: Ability[]
}

interface Ability {
  name: string
  url: string
}

interface Sprites {
  other: Other
}

interface Other {
  dream_world: {
    front_default: string
  }
}

export type { Pokemon, Result, PokemonDetail, Sprites };
