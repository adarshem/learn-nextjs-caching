import sql from 'better-sqlite3';
import { cache } from 'react';
import { unstable_cache as nextCache } from 'next/cache';
import { Message } from '@/lib/types';

const db = new sql('messages.db');

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY, 
      text TEXT
    )`);
}

initDb();

export function addMessage(message: string) {
  db.prepare('INSERT INTO messages (text) VALUES (?)').run(message);
}
// nextCache - Data cache
// cache - avoid duplicate calls
// messages - cache keys to internally indentify cached data
// nextCache takes third argument tags or revalidate
// tags: ['msg'] -> then call revalidateTag('msg') in the server cations to revalidate the cache;

export const getMessages = nextCache(
  cache(async function getMessages() {
    console.log('Fetching messages from db');
    return db.prepare('SELECT * FROM messages').all() as Message[];
  }),
  ['messages'],
  {
    tags: ['msg']
  }
);
