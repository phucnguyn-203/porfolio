import { defineField } from 'sanity';

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
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      description: 'The thumbnail of the art performance',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'The description of the art performance',
      validation: (Rule) => Rule.required(),
    }),
    // defineField({
    //   name: 'file',
    //   title: 'File',
    //   type: 'file',
    //   description: 'The file of the art performance',
    //   validation: (Rule) => Rule.required(),
    // }),
    defineField({
      name: 'fileName',
      title: 'File Name',
      type: 'string',
      description: 'The name of the uploaded file',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      description: 'The date of the art performance',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'file',
      type: 'file',
      title: 'File',
      description: 'Upload a file for the art performance',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
      fileName: 'fileName',
    },
    prepare(selection: { title: any; media: any; fileName: any }) {
      const { title, media, fileName } = selection;
      return {
        title: title,
        media: media,
        subtitle: fileName ? `File Name: ${fileName}` : 'No file uploaded',
      };
    },
  },
};

export default artPerformance;
