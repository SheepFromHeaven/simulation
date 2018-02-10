export const ENGINE_ACTIONS = {
  START: 'START',
  STOP: 'STOP',
  TICK: 'TICK'
};

export const startEngine = () => ({
  type: ENGINE_ACTIONS.START
});

export const stopEngine = () => ({
  type: ENGINE_ACTIONS.STOP
});

export const increaseTick = () => ({
  type: ENGINE_ACTIONS.TICK
});


