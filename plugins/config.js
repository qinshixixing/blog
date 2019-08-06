import config from '~/config.json';

export default (ctx, inject) => {
  inject('config', config);
};
