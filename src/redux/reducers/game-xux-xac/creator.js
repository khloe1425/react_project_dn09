import { GameXucXac } from "./const";

export const banChonCreator = (payload) => {
  return {
    type: GameXucXac.BanChon,
    payload,
  };
};

export const playGameCreator = (payload) => ({
  type: GameXucXac.PlayGame,
  payload,
});
