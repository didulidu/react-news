import { IMAGE_GET, IMAGE_SET } from './constants';

export const imageGet = (payload) => ({
  type: IMAGE_GET,
  payload,
});

export const imageSet = (payload) => ({
  type: IMAGE_SET,
  payload,
});
