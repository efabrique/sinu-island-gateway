import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
// Ensure that each object in schemaTypes has at least 'name' and 'type' properties as required by Sanity

export default defineConfig({
  name: 'SINU',
  title: 'SINU Website',

  projectId: 'xha46ejg',
  dataset: 'sinu_website',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes.flat() as any, // Cast to 'any' if you are sure the objects conform, or update schemaTypes to have 'name' and 'type'
  },
})
