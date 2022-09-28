import p5 from "p5";

import "./ari.css";
// これを参考に作りたい
console.log("this is ari");
const SquereColor = (state: number): string => {
  return state === 0 ? "#ffffff" : state === 2 ? "#ff0000" : "#000000";
};
// 動いたところは 1 なにもないところは 0 蟻は 2
const generate2DArray2 = (m: number, n: number, val = 0) => {
  return [...Array(m)].map((_) => Array(n).fill(val));
};
type PostionType = { x: number; y: number; directions: number };
/**
 * 新しい蟻のPositionを返す
 * @module newPostion
 * @param  {PostionType} pos  今現在のポジションを入力する
 * @param {-1 | 1 } newDireaction  これから進む方向を入れる -1 左 1 右
 * **/
const newPostion = (pos: PostionType, newDireaction: -1 | 1): PostionType => {
  const Direction = Math.abs((pos.directions + newDireaction) % 4);
  const xPos =
    Direction === 0 ? pos.x + 1 : Direction === 2 ? pos.x - 1 : pos.x;
  const yPos =
    Direction === 1 ? pos.y + 1 : Direction === 3 ? pos.y - 1 : pos.x;
  return { x: xPos, y: yPos, directions: Direction };
};
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
  /*
   * directions :  0↑ 1→ 2↓ 3←
   * */
  let Position: PostionType[] = [
    {
      x: 100,
      y: 100,
      directions: 0,
    },
  ];

  const SquereSize: number = 3;

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
    Position = Position.map((pos) => {
      if (world[pos.y][pos.x] === 1) {
        world[pos.y][pos.x] = 0;
        return newPostion(pos, -1);
      } else {
        world[pos.y][pos.x] = 1;
        return newPostion(pos, 1);
      }
    });
    world.map((value, h) => {
      value.map((state, w) => {
        p.fill(p.color(SquereColor(state)));
        p.square(h * SquereSize, w * SquereSize, SquereSize);
        // p.fill(p.color(SquereColor(0)));
      });
    });
    Position = Position.map((pos) => {
      console.log({ pos });
      return { x: pos.x + 1, y: pos.y, directions: pos.directions };
    });
  };
}, document.getElementById("app")!);
