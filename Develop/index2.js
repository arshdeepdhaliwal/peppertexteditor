import { openDB } from 'idb';

const initDB = async () => {
  const db = await openDB('textEditor', 1, {
    upgrade(db) {
      db.createObjectStore('content', { keyPath: 'id', autoIncrement: true });
    }
  });
  return db;
};

const saveContent = async (content) => {
  const db = await initDB();
  await db.put('content', { id: 1, content });
};

const getContent = async () => {
  const db = await initDB();
  const data = await db.get('content', 1);
  return data ? data.content : '';
};

// Usage
document.querySelector('#text-editor').addEventListener('input', async (event) => {
  await saveContent(event.target.value);
});

window.addEventListener('DOMContentLoaded', async () => {
  const content = await getContent();
  document.querySelector('#text-editor').value = content;
});
