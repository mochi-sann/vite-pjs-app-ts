import { PostionType } from "./ari";
import { newDirection } from "./util";

export const newPostion = (
  pos: PostionType,
  newDireaction: number
): PostionType => {
  const Direction = newDirection(pos.directions, newDireaction);
  const yPos =
    Direction === 0 ? pos.y - 1 : Direction === 2 ? pos.y + 1 : pos.x;
  const xPos =
    Direction === 1 ? pos.x + 1 : Direction === 3 ? pos.x - 1 : pos.x;
  return { x: xPos, y: yPos, directions: Direction };
};
