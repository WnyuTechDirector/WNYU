import {
  announcementType,
  managementCardType,
  textBlockType,
  videoCardType,
  articleType,
  podcastType,
  footerType,
} from './schemaTypes';
import { type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    textBlockType,
    managementCardType,
    announcementType,
    videoCardType,
    articleType,
    podcastType,
    footerType,
  ],
};
