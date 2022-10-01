import React from 'react';
import { defineSchema, defineConfig } from 'tinacms';
import { client } from './__generated__/client';
import schemaPost from './schemas/posts';
import schemaTag from './schemas/tags';
import schemaWork from './schemas/works';
// absolute import does not work inside schema.tsx
import {
  NEXT_PUBLIC_TINA_BRANCH,
  NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF,
  TINA_GIT_HEAD,
  TINA_TOKEN,
  NEXT_PUBLIC_TINA_CLIENT_ID,
} from '../lib/env';
console.log('TINA_TOKEN', TINA_TOKEN);
console.log('NEXT_PUBLIC_TINA_CLIENT_ID', NEXT_PUBLIC_TINA_CLIENT_ID);
const branch =
  NEXT_PUBLIC_TINA_BRANCH ||
  NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  TINA_GIT_HEAD ||
  'main';

const schema = defineSchema({
  // See https://tina.io/docs/tina-cloud/connecting-site/ for more information about this config
  config: {
    token: TINA_TOKEN, // generated on app.tina.io,
    clientId: NEXT_PUBLIC_TINA_CLIENT_ID, // generated on app.tina.io
    branch,
  },
  collections: [schemaTag, schemaPost, schemaWork],
});

export default schema;

// Your tina config

export const tinaConfig = defineConfig({
  // @ts-ignore
  client,
  schema,
});
