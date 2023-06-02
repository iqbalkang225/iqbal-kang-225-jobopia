export const inputs = [
  {
    label: 'search',
    type: 'text',
  },
  {
    label: 'status',
    type: 'select',
    options: ['all', 'pending', 'interview', 'declined']
  },
  {
    label: 'jobType',
    type: 'select',
    options: ['all', 'full-time', 'part-time', 'internship', 'remote']
  },
  {
    label: 'sort',
    type: 'select',
    options: ['latest', 'oldest', 'a-z', 'z-a']
  }
]