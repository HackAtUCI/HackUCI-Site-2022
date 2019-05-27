import React from 'react';

import { BlockTransition } from 'app/components';
import { Header } from './header';
import { Statement } from './statement';

import './Home.scss';

function Home() {
  return (
    <React.Fragment>
			<Header/>
      {/* <BlockTransition/> */}
      <Statement/>
    </React.Fragment>
  );
}

export default Home;
