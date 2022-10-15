export const inputs = [
    {
      label: 'position',
      type: 'text',
      required: true,
    },
    {
      label: 'company',
      type: 'text',
      required: true,
      message: 'Please enter a valid Email',
    },
    {
      label: 'job location',
      type: 'text',
      required: true,
      message: 'Please enter a password',
    },
    {
      label: 'status',
      type: 'select',
      required: true,
      message: 'Please enter a password',
      options: ['pending', 'interview', ['declined']]
    },
    {
      label: 'job type',
      type: 'select',
      required: true,
      message: 'Please enter a password',
      options: ['full-time', 'part-time', 'internship', 'remote']
    },
  ]