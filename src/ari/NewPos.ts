import { PostionType, WordlSizeType } from "./ari";
import { newDirection } from "./util";

export const newPostion = (
  pos: PostionType,
  newDireaction: number,
  WorldSize: WordlSizeType
): PostionType => {
  /*
   * directions :  0↑ 1→ 2↓ 3←
   * +x →
   * +y ↓
   * * */
  const Direction = newDirection(pos.directions, newDireaction);
  let yPos = Direction === 0 ? pos.y - 1 : Direction === 2 ? pos.y + 1 : pos.y;
  let xPos = Direction === 1 ? pos.x + 1 : Direction === 3 ? pos.x - 1 : pos.x;
  if (yPos < 0) {
    yPos += WorldSize.height;
  } else if (yPos > WorldSize.height) {
    yPos -= WorldSize.height;
  }
  if (xPos < 0) {
    xPos += WorldSize.width;
  } else if (xPos > WorldSize.width) {
    xPos -= WorldSize.width;
  }
  // const NewPos ={
  //   x :  Direction === 0 ? pos.y - 1 : Direction === 2 ? pos.y + 1 : pos.x ;
  //   y :
  // }
  return { x: xPos, y: yPos, directions: Direction };
};
