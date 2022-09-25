import p5 from "p5";

import "./../style.css";
// これを参考に作りたい
new p5((p5Instance) => {
  const p = p5Instance as unknown as p5;
  p.setup = () => {
    p.createCanvas(500, 500);
    p.background(220);
  };

  /** フレームごとの描画処理 */
  p.draw = () => {};
}, document.getElementById("app")!);
