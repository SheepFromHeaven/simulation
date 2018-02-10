export interface EngineState {
  isRunning: boolean;
  ticksPassed: number;
}

export const getInitialEngineState = (): EngineState => ({
  isRunning: false,
  ticksPassed: 0
});
