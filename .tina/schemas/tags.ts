import { TinaCloudCollection } from 'tinacms';
const schemaTag: TinaCloudCollection = {
  label: 'Tags',
  name: 'tag',
  path: 'content/tags',
  format: 'json',
  fields: [{ type: 'string', name: 'label' }],
};

export default schemaTag;
