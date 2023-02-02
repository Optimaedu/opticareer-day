
// Global styles
// -------------------------------------

import '../styles/globals.scss';

// Fonts
// -------------------------------------

import '../styles/fonts.scss';

// App
// -------------------------------------

import type { AppProps } from 'next/app';
import withKeyboardFocus from '../hoc/withKeyboardFocus';

function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Component {...pageProps} />
  );
}

export default withKeyboardFocus(App);
