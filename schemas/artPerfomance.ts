import { defineField } from 'sanity';

const fileField = defineField({
  name: 'file',
  type: 'file',
  title: 'File',
  description: 'Upload a file for the art performance',
  validation: (Rule) => Rule.required(),
});
console.log('File field definition:', fileField);

const artPerformance = {
  title: 'Art Performance',
  name: 'artPerformance',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the art performance',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The slug of the art performance',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'The description of the art performance',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      description: 'The thumbnail of the art performance',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      description: 'The date of the art performance',
      validation: (Rule) => Rule.required(),
    }),
    fileField,
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
      fileField: 'file',
    },
  },
};
console.log('Art performance schema:', artPerformance);

export default artPerformance;
