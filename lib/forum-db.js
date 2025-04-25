// lib/forum-db.js
import mysql from 'mysql2/promise';

const forumDb = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'P@ssw0rd!',       
  database: 'forum_db' 
});

export default forumDb;
