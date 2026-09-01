import SwaggerUI from 'swagger-ui-react';

//todo: fix linting
/* todo: transfer swagger to backend */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const SwaggerUIPage = (): React.ReactElement => (
  <SwaggerUI
    spec={{
      openapi: '3.0.3',
      info: {
        title: 'Sample User API',
        description: 'A minimal Swagger JSON example for managing users.',
        version: '1.0.0',
      },
      servers: [
        {
          url: 'https://example.com',
          description: 'Production server',
        },
      ],
      paths: {
        '/users': {
          get: {
            summary: 'Retrieve a list of users',
            description: 'Returns an array of user objects containing IDs and names.',
            responses: {
              '200': {
                description: 'A successful response',
                content: {
                  'application/json': {
                    schema: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/User',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      components: {
        schemas: {
          User: {
            type: 'object',
            properties: {
              id: {
                type: 'integer',
                format: 'int64',
                example: 1,
              },
              name: {
                type: 'string',
                example: 'Jane Doe',
              },
            },
            required: ['id', 'name'],
          },
        },
      },
    }}
  />
);
