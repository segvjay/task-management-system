export const defaultUsers = [
  { id: 'u1', username: 'admin', password: 'admin123', name: 'Admin' },
  { id: 'u2', username: 'ravi', password: 'ravi123', name: 'Ravi Kumar' },
  { id: 'u3', username: 'priya', password: 'priya123', name: 'Priya Sharma' },
  { id: 'u4', username: 'aman', password: 'aman123', name: 'Aman Verma' },
];

export const defaultTasks = [
  {
    id: 't1',
    title: 'Design Login Page UI',
    description: 'Create a responsive login page using Tailwind CSS with form validation.',
    priority: 'High',
    dueDate: '2026-08-05',
    status: 'In Progress',
    createdAt: '2026-07-20T10:00:00.000Z',
  },
  {
    id: 't2',
    title: 'Setup Project Repository',
    description: 'Initialize GitHub repo, add README, and configure ESLint.',
    priority: 'Medium',
    dueDate: '2026-07-25',
    status: 'Completed',
    createdAt: '2026-07-18T09:00:00.000Z',
  },
  {
    id: 't3',
    title: 'Fix Navbar Responsiveness',
    description: 'Navbar breaks on mobile screens below 400px width.',
    priority: 'Low',
    dueDate: '2026-08-10',
    status: 'Create',
    createdAt: '2026-07-21T14:30:00.000Z',
  },
  {
    id: 't4',
    title: 'Write Unit Tests for Auth',
    description: 'Add basic test coverage for login/logout flow.',
    priority: 'Medium',
    dueDate: '2026-07-22',
    status: 'Create',
    createdAt: '2026-07-15T11:00:00.000Z',
  },
];
