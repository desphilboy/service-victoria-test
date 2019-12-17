import { Josephus } from "./josephus.js";

describe("Josephus", () => {
  it("gives correct sequence for n=5, k=2", () => {
    expect(Josephus.josephus(5, 2)).toMatchInlineSnapshot(`
      Array [
        2,
        4,
        1,
        5,
        3,
      ]
    `);
  });

  it("gives correct sequence for n=25, k=4", () => {
    expect(Josephus.josephus(25, 4)).toMatchInlineSnapshot(`
      Array [
        4,
        8,
        12,
        16,
        20,
        24,
        3,
        9,
        14,
        19,
        25,
        6,
        13,
        21,
        2,
        11,
        22,
        7,
        18,
        10,
        1,
        23,
        17,
        5,
        15,
      ]
    `);
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
