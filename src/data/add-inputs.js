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
      label: 'location',
      type: 'text',
      required: true,
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
      label: 'type',
      type: 'select',
      required: true,
      message: 'Please enter a password',
      options: ['--Choose an option--', 'full-time', 'part-time', 'internship', 'remote']
    },
  ]