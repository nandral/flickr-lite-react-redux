import prodStore from './configureStore.prod';
import devStore from './configureStore.dev';

const isDev = process.env.NODE_ENV !== 'production';
// const isDev = process.env.REACT_APP_STAGE !== 'production';

export default (isDev ? devStore : prodStore);
