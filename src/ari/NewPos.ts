import { PostionType } from "./ari";
import { newDirection } from "./util";

export const newPostion = (
  pos: PostionType,
  newDireaction: number
): PostionType => {
  /*
   * directions :  0↑ 1→ 2↓ 3←
   * +x →
   * +y ↓
   * * */
  const Direction = newDirection(pos.directions, newDireaction);
  const yPos =
    Direction === 0 ? pos.y - 1 : Direction === 2 ? pos.y + 1 : pos.y;
  const xPos =
    Direction === 1 ? pos.x + 1 : Direction === 3 ? pos.x - 1 : pos.x;
  // const NewPos ={
  //   x :  Direction === 0 ? pos.y - 1 : Direction === 2 ? pos.y + 1 : pos.x ;
  //   y :
  // }
  return { x: xPos, y: yPos, directions: Direction };
};
