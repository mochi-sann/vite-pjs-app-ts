import p5 from "p5";

import "./ari.css";
import { newPostion } from "./NewPos";
// これを参考に作りたい
const SquereColor = (state: number): string => {
  return state === 0 ? "#ffffff" : state === 2 ? "#ff0000" : "#000000";
};
// 動いたところは 1 なにもないところは 0 蟻は 2
const generate2DArray2 = (m: number, n: number, val = 0) => {
  return [...Array(m)].map((_) => Array(n).fill(val));
};
export type PostionType = { x: number; y: number; directions: number };
/**
 * ルール
 *  白いマスにアリがいた場合、90°右に方向転換し、そのマスの色を反転させ、1マス前進する。
 *  黒いマスにアリがいた場合、90°左に方向転換し、そのマスの色を反転させ、1マス前進する。
 */
new p5((p5Instance) => {
  const p = p5Instance as unknown as p5;
  // ワールドの四角の数
  const WORLD_SIZE: { height: number; width: number } = {
    height: 200,
    width: 200,
  };
  const smiratoinSpeed = 30;
  /*
   * directions :  0↑ 1→ 2↓ 3←
   * */
  let Position: PostionType[] = [
    {
      x: Math.floor(WORLD_SIZE.width / 2),
      y: Math.floor(WORLD_SIZE.height / 2),
      directions: 0,
    },
  ];

  const SquereSize: number = 2;

  let world: number[][] = generate2DArray2(
    WORLD_SIZE.width,
    WORLD_SIZE.height,
    0
  );

  p.setup = () => {
    p.createCanvas(
      WORLD_SIZE.width * SquereSize,
      WORLD_SIZE.height * SquereSize
    );
    // startPosition.map((pos) => {
    // world.[pos.y][pos.x] = 2;})
    // Position.map((pos) => {
    //   world[pos.y][pos.x] = 2;
    // });
    p.noStroke();
    p.background(220);
  };

  /** フレームごとの描画処理 */
  p.draw = () => {
    for (let index = 0; index < smiratoinSpeed; index++) {
      Position = Position.map((pos) => {
        // console.log(pos, world[pos.y][pos.x]);
        if (world[pos.y][pos.x] === 1) {
          // 黒
          world[pos.y][pos.x] = 0;
          return newPostion(pos, -1);
        } else {
          //白
          world[pos.y][pos.x] = 1;
          return newPostion(pos, 1);
        }
      });
    }
    world.map((value, h) => {
      value.map((state, w) => {
        p.fill(p.color(SquereColor(state)));
        p.square(h * SquereSize, w * SquereSize, SquereSize);
        // p.fill(p.color(SquereColor(0)));
      });
    });

    // Position = Position.map((pos) => {
    //   console.log({ pos });
    //   return { x: pos.x + 1, y: pos.y, directions: pos.directions };
    // });
  };
}, document.getElementById("app")!);
