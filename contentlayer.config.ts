import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'

const Links = defineNestedType(() => ({
  name: 'Links',
  fields: {
    title: { type: 'string', required: true },
    url: { type: 'string', required: true },
  },
}))


const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    category: {
      type: 'enum',
      options: ['project','code','opinion','other'],
      default: 'project'
    },
    keywords: {
      type: 'list',
      of: {type: 'string'}
    },
    image:{
      type: 'string',
      description: 'The hero image of the post',
      // required: true
    },
    links: {
      type: 'list',
      of: Links,
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
})
