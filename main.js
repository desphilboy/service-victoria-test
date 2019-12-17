import readlineSync from 'readline-sync';
import { Josephus } from './josephus';

function main() {

	let n = readlineSync.question('How many kids in the circle at start?(n): ');
	let k = readlineSync.question('How many skips each time playing?(k): ');

  console.log( `Josephus sequence of ${n} and ${k} is(last number is winner): ${Josephus.josephus(n,k)}`);
}

main();
