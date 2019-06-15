import React from 'react';
import { mount, route } from 'navi';
import { createApolloFetch } from 'apollo-fetch';
import { URL } from '../config';
import { Users } from '../containers/users';

const fetch = createApolloFetch({
  uri: URL,
});

export default mount({
  '/': route({
    title: 'Home',
    head: (
      <>
        <meta name="description" content="And example app" />
      </>
    ),
    getView: () => import('../containers/home.js'),
  }),

  '/users': route(async req => ({
    view: <Users />,
  })),
});
