const isDogBetter = true;
const isCatBetter = false;

console.log(isDogBetter && isCatBetter);

console.log(isDogBetter || isCatBetter);

console.log(!(isDogBetter && isCatBetter));

const atoms = 5;
const sandGrains = 1240;
const starsInSky = 355;

/* a) atoms is greater than starsInSky AND atoms is greater than sandGrains. */

console.log(`a)`, atoms > starsInSky && atoms > sandGrains);

/* with && (and) when at least one value is false result is false */



/* b) atoms is NOT equal to sandGrains. */

console.log(`b)`, atoms !== sandGrains);


/* c) starsInSky is less than sandGrains OR starsInSky is greater than atoms. */

console.log(`c)`, starsInSky < sandGrains || starsInSky > atoms);
/* with || (or) when at least one value is true result is true */



/* d) atoms is equal to starsInSky OR atoms is NOT equal to sandGrains */

console.log(`d)`, atoms === starsInSky || atoms !== sandGrains);


/* e) atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10. */

console.log(`e)`, atoms >= 10 && sandGrains <= 10);
/* with && (and) when at least one value is false result is false */


/* f) atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100. */

console.log(`f)`,(atoms * starsInSky) < 100 || (atoms * sandGrains) > 100);

/* with || (or) when at least one value is true result is true */




