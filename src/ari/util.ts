export type WordlSize = { height: number; width: number };
/**
 * 新しい蟻のPositionを返す
 * @module newPostion
 * @param  {PostionType} pos  今現在のポジションを入力する
 * @param {-1 | 1 } newDireaction  これから進む方向を入れる -1 左 1 右
 * **/
export const newDirection = (nowDir: number, newDir: number | -1 | 1) => {
  if (nowDir == 0 && newDir == -1) return 3;
  if (nowDir == 3 && newDir == 1) return 0;
  return Math.abs((nowDir + newDir) % 4);
};
