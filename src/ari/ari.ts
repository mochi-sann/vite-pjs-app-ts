import p5 from "p5";

import "./ari.css";
// これを参考に作りたい
console.log("this is ari");
const SquereColor = (state: number): string => {
  return state === 1 ? "#22ff22" : "#00f9f9";
};
new p5((p5Instance) => {
  const p = p5Instance as unknown as p5;
  // ワールドの四角の数
  const WORLD_SIZE: { height: number; width: number } = {
    height: 50,
    width: 50,
  };
  const SquereSize: number = 20;

  let world: number[][] = Array(WORLD_SIZE.height).fill(
    Array(WORLD_SIZE.width).fill(0)
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
        p.fill(p.color(SquereColor(0)));
      });
    });
  };
}, document.getElementById("app")!);
