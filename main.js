import readlineSync from "readline-sync";
import { Josephus } from "./josephus";

function main() {
	console.log("Plz enter Josephus problem parameters:");
	let n = readlineSync.question(
		"How many positions (kids) in the circle at start?(n): "
	);
	let k = readlineSync.question("How many skip positions?(k): ");

	const result = Josephus.josephus(n, k);
	console.log(`sequence of ${n} and ${k} is(last number is winner): ${result}`);
	console.log(`The winner is ${result[result.length - 1]}`);
}

main();
