import { defineConfig, SchemaTypeDefinition } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import schemaTypes from './schemas';

export default defineConfig({
  name: 'default',
  title: 'portfolio',
  projectId: '1izmhydm',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],
  basePath: '/studio',
  schema: {
      types: schemaTypes as SchemaTypeDefinition[],
  },
});