import { TinaCloudCollection } from 'tinacms';
const schemaWork: TinaCloudCollection = {
  label: 'Works',
  name: 'work',
  path: 'content/works',
  format: 'mdx',
  ui: {
    router: ({ document }) => {
      // This can be used to add contextual editing to your site. See https://tina.io/docs/tinacms-context/#accessing-contextual-editing-from-the-cms for more information.
      return `/demo/blog/${document._sys.filename}`;
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
    },
    {
      type: 'rich-text',
      label: 'Content',
      name: 'content',
      isBody: true,
      templates: [
        {
          name: 'PageSection',
          label: 'Page Section',
          fields: [
            {
              type: 'string',
              name: 'heading',
              label: 'Heading',
            },
            {
              type: 'string',
              name: 'content',
              label: 'Content',
              ui: {
                component: 'textarea',
              },
            },
          ],
        },
      ],
    },
  ],
};

export default schemaWork;
