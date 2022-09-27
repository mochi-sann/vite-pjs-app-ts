import p5 from "p5";

import "./ari.css";
// これを参考に作りたい
console.log("this is ari");
const SquereColor = (state: number): string => {
  return state === 1 ? "#000000" : "#ffffff";
};
const generate2DArray2 = (m: number, n: number, val = 0) => {
  return [...Array(m)].map((_) => Array(n).fill(val));
};

new p5((p5Instance) => {
  const p = p5Instance as unknown as p5;
  // ワールドの四角の数
  const WORLD_SIZE: { height: number; width: number } = {
    height: 40,
    width: 40,
  };
  const SquereSize: number = 20;

  let world: number[][] = generate2DArray2(
    WORLD_SIZE.width,
    WORLD_SIZE.height,
    0
  );
  console.log({ world: world[2][1] });
  console.log(JSON.stringify(world, null, 2));
  p.setup = () => {
    p.createCanvas(
      WORLD_SIZE.width * SquereSize,
      WORLD_SIZE.height * SquereSize
    );
    p.background(220);
  };

  /** フレームごとの描画処理 */
  p.draw = () => {
    world.map((value, h) => {
      value.map((state, w) => {
        p.fill(p.color(SquereColor(state)));
        p.square(h * SquereSize, w * SquereSize, SquereSize);
        // p.fill(p.color(SquereColor(0)));
      });
    });
  };
}, document.getElementById("app")!);
