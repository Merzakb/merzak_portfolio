const { db } = require('@vercel/postgres');
const { projects, users } = require('./placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 12);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedProjects(client, projects) {
    try {
      await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
      // Créer la table "projects" si elle n'existe pas
      const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS projects (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          title VARCHAR(255) NOT NULL,
          description TEXT NOT NULL,
          images TEXT[] NOT NULL,
          technologies TEXT[] NOT NULL,
          github_url VARCHAR(255) NOT NULL,
          demo_url VARCHAR(255) NOT NULL
        );
      `;
  
      console.log(`Created "projects" table`);
  
      // Insérer les données dans la table "projects"
      const insertedProjects = await Promise.all(
        projects.map((project) => client.sql`
          INSERT INTO projects (name, title, description, images, technologies, github_url, demo_url)
          VALUES (
            ${project.name},
            ${project.title},
            ${project.description},
            ${project.images},
            ${project.technologies},
            ${project.github_url},
            ${project.demo_url}
          )
          ON CONFLICT (id) DO NOTHING;
        `),
      );
  
      console.log(`Seeded ${insertedProjects.length} projects`);
  
      return {
        createTable,
        projects: insertedProjects,
      };
    } catch (error) {
      console.error('Error seeding projects:', error);
      throw error;
    }
}
  

async function main() {
  const client = await db.connect();

  try {
    await seedUsers(client);
    await seedProjects(client, projects);
  } catch (error) {
    console.error(
      'Une erreur s\'est produite lors de la tentative de peuplement de la base de données:',
      error,
    );
  } finally {
    await client.end();
  }
}

main().catch((err) => {
  console.error(
    'Une erreur s\'est produite lors de la tentative de peuplement de la base de données:',
    err,
  );
});
