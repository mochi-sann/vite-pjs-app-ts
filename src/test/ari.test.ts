import { expect, test } from "vitest";
import { newDirection } from "../ari/util";

// Edit an assertion and save to see HMR in action

test("get newDirection", () => {
  expect(newDirection(0, 1)).toBe(1);
  expect(newDirection(1, 1)).toBe(2);
  expect(newDirection(2, 1)).toBe(3);
  expect(newDirection(3, 1)).toBe(0);
  expect(newDirection(1, -1)).toBe(0);
  expect(newDirection(0, -1)).toBe(3);
  expect(newDirection(3, -1)).toBe(2);
  expect(newDirection(2, -1)).toBe(1);
});
