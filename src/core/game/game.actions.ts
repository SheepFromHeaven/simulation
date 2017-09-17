export const GAME_ACTIONS = {
  START: 'START',
  STOP: 'STOP',
  TICK: 'TICK'
};

export const startApp = () => ({
  type: GAME_ACTIONS.START
});

export const stopApp = () => ({
  type: GAME_ACTIONS.STOP
});

export const increaseTick = () => ({
  type: GAME_ACTIONS.TICK
});


