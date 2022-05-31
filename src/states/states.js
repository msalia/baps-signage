import {atom} from 'recoil';
import {syncEffect, refine} from 'recoil-sync';
import {Pages} from '../Constants';

export const pageState = atom({
  key: 'Page',
  default: Pages.DEFAULT,
  effects: [syncEffect({refine: refine.number()})],
});
