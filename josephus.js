export class Josephus {
	constructor() {}

	static josephus(n, k, s = 1) {
		let circle = [];
		let sequence = [];
		let r;

		if (k < 1) {
			return;
		}

		for (let i = 0; i < n; ++i) {
			circle.push(i + 1);
		}

		let pos = s - 1;
		while (circle.length > 1) {
			pos = Number(pos) + Number(k);
			if (pos >= circle.length) {
				pos = pos % circle.length;
			}
			r = circle.splice(pos - 1, 1)[0];
			pos = pos - 1;
			sequence.push(r);
		}
		sequence.push(circle[0]);
		return sequence;
	}
}
