// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

// console.log( owners );

export const getHeroById = (id) => heroes.find( (hero) => hero.id === id );

// console.log( getHeroeById(2) );

// filter
export const getHeroesByOwner = ( owner ) => heroes.filter( (hero) => hero.owner === owner );

// console.log( getHeroesByOwner('Marvel') );


