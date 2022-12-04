export const inputs = [
    {
      label: 'position',
      type: 'text',
      required: true,
      message: 'Please enter the position',
    },
    {
      label: 'company',
      type: 'text',
      required: true,
      message: 'Please enter company name',
    },
    {
      label: 'location',
      type: 'text',
      // required: true,
      message: 'Please enter a password',
    },
    {
      label: 'status',
      type: 'select',
      required: true,
      message: 'Please enter a password',
      options: ['--Choose an option--', 'pending', 'interview', ['declined']]
    },
    {
      label: 'jobType',
      type: 'select',
      required: true,
      message: 'Please enter a password',
      options: ['--Choose an option--', 'full-time', 'part-time', 'internship', 'remote']
    },
  ]