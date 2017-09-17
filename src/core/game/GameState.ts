export interface GameState {
  isRunning: boolean;
  ticksPassed: number;
}

export const getInitialGameState = (): GameState => ({
  isRunning: false,
  ticksPassed: 0
});
