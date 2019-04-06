import types from '../types';

export const switchMode = () => ({
  type: types.SWITCH_MODE,
  mode: false //TO DO: Make Dynamic
});

export default {
  switchMode
}