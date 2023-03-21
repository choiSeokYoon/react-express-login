import { atom } from 'recoil';
import {recoilPersist} from "recoil-persist"

const {persistAtom} =recoilPersist()

export const recoilUser = atom({
  key: 'recoilUser',
  default: true,
  effects_UNSTABLE:[persistAtom]
});


export const recoilPost = atom({
  key: 'recoilPost',
  default: [],
})