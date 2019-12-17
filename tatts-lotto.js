
function factorial (n) {
	let p=1;
	for(let i=n; i>0; --i) {
		p = p *  i;
	}

	return p;
}

export class TattsCalcs {

	constructor() {}


	static tatts(entries, fixes, drawSize, Allnumbers) {
		let fixPossibility = (factorial(drawSize) / factorial(drawSize - fixes)) / (factorial(Allnumbers) / factorial(Allnumbers-fixes));
		
		let nonfixPossibility = factorial(fixes)/(factorial(Allnumbers - fixes)/factorial(Allnumbers - drawSize));

		let possibility = fixPossibility * nonfixPossibility * entries;
		
		return possibility;

	}
}
