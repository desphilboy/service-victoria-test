import readlineSync from 'readline-sync';
import { TattsCalcs } from './tatts-lotto.js';

function main() {
	const allNumbers = 45;
	const drawSize = 6;
	let entries = readlineSync.question('How many Game entries?(12, 24 , or ... ?): ');
	let fixes = readlineSync.question('How many fix numbers? ( should be 0 to 5): ');
	let times = TattsCalcs.tatts(entries, fixes, drawSize, allNumbers)/TattsCalcs.tatts(entries, 0, drawSize, allNumbers);

	console.log(`All number choices=${allNumbers}, Draw size=${drawSize}, Number of game entries=${entries}, Fix choices=${fixes}`);	
 	console.log( `probability of big win is ${TattsCalcs.tatts(entries, fixes, drawSize, allNumbers)} which is ${times} times of no-fix-numbers`);
}


main();
