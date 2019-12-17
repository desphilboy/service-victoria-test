import { Josephus } from "./josephus.js";

describe("Josephus", () => {
  it("gives correct sequence for n=5, k=2", () => {
    expect(Josephus.josephus(5, 2)).toMatchSnapshot();
  });

  it("gives correct sequence for n=25, k=4", () => {
    expect(Josephus.josephus(25, 4)).toMatchSnapshot();
  });

  it("gives normal chain or k=1", () => {
    expect(Josephus.josephus(4, 1)).toMatchInlineSnapshot(`
      Array [
        1,
        2,
        3,
        4,
      ]
    `);
  });
  it("returns empty if n=0", () => {
    expect(Josephus.josephus(0, 4)).toMatchInlineSnapshot(`
      Array [
        undefined,
      ]
    `);
  });
});
