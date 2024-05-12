import { defineField } from 'sanity';

const profile = {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      description: 'Your full name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'In one short sentence, what do you do?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'jobs',
      title: 'Jobs',
      type: 'array',
      description: "Add a list of jobs you've done",
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      description: 'Tell us a bit about yourself',
      type: 'text',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      description: 'Add your social media links',
      fields: [
        defineField({
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        }),
        defineField({
          name: 'youtube',
          title: 'Youtube',
          type: 'url',
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        }),
      ],
      options: {
        collapsed: false,
        collapsible: true,
        columns: 2,
      },
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      description: 'Upload your profile picture',
      options: {
        hotspot: true,
      },
    }),
  ],
};

export default profile;
