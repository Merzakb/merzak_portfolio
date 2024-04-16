const { sql } = require('@vercel/postgres');
const { User, Project } = require('./definitions');

/**
 * Récupère un utilisateur par son adresse e-mail.
 * @param {string} email L'adresse e-mail de l'utilisateur.
 * @returns {Promise<User>} Une promesse résolue avec l'utilisateur trouvé.
 */
export async function getUser(email) {
    try {
        const user = await sql`SELECT * FROM users WHERE email=${email}`;
        return user.rows[0];
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}

/**
 * Récupère tous les projets.
 * @returns {Promise<Project[]>} Une promesse résolue avec un tableau de projets.
 */
export async function fetchProjects() {
    try {
        const data = await sql`SELECT * FROM projects`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch projects.');
    }
}

/**
 * Récupère les projets filtrés par technologies.
 * @param {string[]} technologies Les technologies à filtrer.
 * @returns {Promise<Project[]>} Une promesse résolue avec un tableau de projets filtrés.
 */
export async function fetchFilteredProjects(technologies) {
    try {
        const data = await sql`
            SELECT * FROM projects
            WHERE technologies @> ARRAY[${technologies.map(t => `'${t}'`).join(', ')}]
        `;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch filtered projects.');
    }
}

/**
 * Récupère un projet par son identifiant.
 * @param {string} id L'identifiant du projet.
 * @returns {Promise<Project>} Une promesse résolue avec le projet trouvé.
 */
export async function fetchProjectById(id) {
    try {
        const data = await sql`
            SELECT * FROM projects
            WHERE id = ${id}
        `;
        return data.rows[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch project by ID.');
    }
}
