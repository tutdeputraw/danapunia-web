import React from 'react';
import { Page, Navbar, Toolbar, Link, View, App } from 'framework7-react';

const MyApp = () => (
  <App>
    <View main>
      <Page>
        <Navbar title="My App" />
        <Toolbar>
          <Link>Link 1</Link>
          <Link>Link 2</Link>
        </Toolbar>
        <p>This is my Framework7-React app!</p>
      </Page>
    </View>
  </App>
);

export default MyApp;
