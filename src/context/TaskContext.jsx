import { createContext, useState, useEffect } from 'react';
import { getFromStorage, saveToStorage } from '../utils/localStorage';
import { defaultTasks } from '../utils/dummyData';
import { generateId } from '../utils/helpers';

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = getFromStorage('tasks', null);
    if (savedTasks) {
      setTasks(savedTasks);
    } else {
      setTasks(defaultTasks);
      saveToStorage('tasks', defaultTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      saveToStorage('tasks', tasks);
    }
  }, [tasks]);

  const addTask = (taskData) => {
    const newTask = {
      id: generateId(),
      status: 'Create',
      createdAt: new Date().toISOString(),
      ...taskData,
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const updateTask = (taskId, updatedFields) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === taskId ? { ...task, ...updatedFields } : task))
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const getTaskById = (taskId) => tasks.find((task) => task.id === taskId);

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, getTaskById }}>
      {children}
    </TaskContext.Provider>
  );
}
