import { expect, test } from "vitest";
import { WordlSizeType } from "../ari/ari";
import { newPostion } from "../ari/NewPos";

const WORLD_SIZE: WordlSizeType = {
  height: 200,
  width: 200,
};
/*
 * directions :  0↑ 1→ 2↓ 3←
 * 0 y -1
 * 1 x +1
 * 2 y +1
 * 3 x -1
 *
 * */
test("get newPos1", () => {
  expect(
    newPostion({ x: 10, y: 10, directions: 0 }, 1, WORLD_SIZE)
  ).toStrictEqual({
    x: 11,
    y: 10,
    directions: 1,
  });
});
test("get newPos1", () => {
  expect(
    newPostion({ x: 10, y: 10, directions: 0 }, -1, WORLD_SIZE)
  ).toStrictEqual({
    x: 9,
    y: 10,
    directions: 3,
  });
});
test("get newPos2", () => {
  expect(
    newPostion({ x: 10, y: 10, directions: 1 }, 1, WORLD_SIZE)
  ).toStrictEqual({
    x: 10,
    y: 11,
    directions: 2,
  });
});
test("get newPos3", () => {
  expect(
    newPostion({ x: 10, y: 10, directions: 2 }, 1, WORLD_SIZE)
  ).toStrictEqual({
    x: 9,
    y: 10,
    directions: 3,
  });
});
test("get newPos4", () => {
  expect(
    newPostion({ x: 10, y: 10, directions: 3 }, 1, WORLD_SIZE)
  ).toStrictEqual({
    x: 10,
    y: 9,
    directions: 0,
  });
});
