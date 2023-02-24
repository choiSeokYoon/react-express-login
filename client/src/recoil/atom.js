import { atom } from 'recoil';
import {recoilPersist} from "recoil-persist"

const {persistAtom} =recoilPersist()

export const recoilUser = atom({
  key: 'recoilUser',
  default: null,
  effects_UNSTABLE:[persistAtom]
});
