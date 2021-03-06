import { GraphQLClient } from 'graphql-request';
import config from './config';

const { GRAPHCMS_URI, GRAPHCMS_PERMANENT_AUTH_KEY } = config;

const client = new GraphQLClient(GRAPHCMS_URI);

client.setHeaders({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${GRAPHCMS_PERMANENT_AUTH_KEY}`,
});

export default client;
