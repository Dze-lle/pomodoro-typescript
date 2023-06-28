import { GlobalState } from '../interfaces';

type TimeAction =
  | { type: 'START_TIMER'; payload: number }
  | { type: 'CHANGE_STATE'; payload: boolean }
  | { type: 'CHANGE_EVENT'; payload: { name: string; value: string } }
  | { type: 'UPDATE_EVENT'; payload: number }
  | { type: 'RESET_TIMER' };

export const TimerReducer = (state: GlobalState, action: TimeAction) => {
  switch (action.type) {
    case 'START_TIMER':
      return {
        ...state,
        globalTime: action.payload,
      };

    case 'CHANGE_STATE':
      return {
        ...state,
        changeState: action.payload,
      };

    case 'CHANGE_EVENT':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case 'UPDATE_EVENT':
      return {
        ...state,
        globalTime: action.payload,
      };

    case 'RESET_TIMER':
      return {
        session: 25,
        break: 5,
        changeState: false,
        globalTime: 1500,
      };

    default:
      return state;
  }
};
