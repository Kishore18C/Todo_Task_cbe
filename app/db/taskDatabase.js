let tasks = [
  {
    id: 1,
    title: 'Your task',
    startTime: '8.00 A.M',
    endTime: '10.00 P.M',
    date: '8.00 A.M, Tuesday',
    description:
      'DxrNS0hZsWUgtId5c99IW60KyzcYauoKJGXadwqDJY4A60KGljCXVmrpHfezxKoLhGYFvgKmWzGJrm3nd9l5yxTYOWB7713DH41EnMA5PE10pJVlc905ON',
  },
];

export function getTasks() {
  return tasks;
}

export function getTasksById(id) {
  return tasks.filter(task => task.id === id);
}

export function addTasks(task) {
  tasks = [...tasks, task];
  return true;
}
