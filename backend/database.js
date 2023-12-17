const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: "postgres",
  password: "Kommikarp3",
  database: "veebiRakendused",
  host: "localhost",
  port: "5432"
});

const execute = async (sql_query) => {
  try {
    const client = await pool.connect(); 
    await client.query(sql_query); 
    return true;
  } catch (error) {
    console.error(error.stack);
    return false;
  }
};

const createUserTableQuery = `
  CREATE TABLE IF NOT EXISTS "users" (
    userid uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(200) NOT NULL,
    userpassword VARCHAR(200) NOT NULL,
    userimage VARCHAR(200)
  );
`;

const createPostsTableQuery = `
  CREATE TABLE IF NOT EXISTS "posts" (
    postid uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    posttext TEXT NOT NULL,
    postcreatedate TIMESTAMPTZ DEFAULT current_timestamp,
    posttime TIMESTAMPTZ DEFAULT current_timestamp,
    tags JSONB,
    likecount INTEGER,
    comments JSONB,
    userid uuid REFERENCES "users" (userid),
    postimage VARCHAR(200) 
  );
`;

const createTables = async () => {
  const userTableResult = await execute(createUserTableQuery);
  const postsTableResult = await execute(createPostsTableQuery);

  if (userTableResult && postsTableResult) {
    console.log('Tables "users" and "posts" are created');
  }
};

createTables();

