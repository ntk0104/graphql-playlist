import { getStore } from 'store';
import loadable from './loadable';

const store = getStore();

export default directory =>
  loadable(() =>
    import(`../features/${directory}/routes`).then(async module => {
      const { default: reducer, sliceKey } = await import(
        `../features/${directory}/slice`
      );
      store.injectReducer(sliceKey, reducer);
      return module;
    }),
  );
