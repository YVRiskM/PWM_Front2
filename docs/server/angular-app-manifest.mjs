
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/PWM_Front/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/PWM_Front"
  },
  {
    "renderMode": 2,
    "route": "/PWM_Front/home"
  },
  {
    "renderMode": 2,
    "route": "/PWM_Front/pwm"
  },
  {
    "renderMode": 2,
    "route": "/PWM_Front/faculty"
  },
  {
    "renderMode": 2,
    "route": "/PWM_Front/modulo"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 906, hash: 'a823ae22221610ecbc6169b7bfb957faacafee7d32894ebe5330eb058f2f81e4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1419, hash: 'a7953b2d1ade602b8bc7934d9396973148c93537d4483df15eebf595a9bd5b42', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 12124, hash: '4600965c0f8e70b243c24bde7376da7fd8ece30ce9c0769c9d48b96b786584d6', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'faculty/index.html': {size: 12485, hash: '095df01175a044a2a8e0036b1100789aa3b8576e0a3ff5cbc0bfc928c4804284', text: () => import('./assets-chunks/faculty_index_html.mjs').then(m => m.default)},
    'modulo/index.html': {size: 13769, hash: '9042a3f3fa967447dbe7018beeb1ec3009ae08cf329885aba5c8000caf29727b', text: () => import('./assets-chunks/modulo_index_html.mjs').then(m => m.default)},
    'index.html': {size: 12124, hash: '4600965c0f8e70b243c24bde7376da7fd8ece30ce9c0769c9d48b96b786584d6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'pwm/index.html': {size: 19319, hash: '12a28fb40534299862617b2ceaeb2da5dcdfd4a41cea2a174058272ddd9eb1f4', text: () => import('./assets-chunks/pwm_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
