const { sql } = require('@vercel/postgres');
const { User, Project } = require('./definitions');
import { unstable_noStore as noStore } from 'next/cache';

/**
 * Récupère un utilisateur par son adresse e-mail.
 * @param {string} email L'adresse e-mail de l'utilisateur.
 * @returns {Promise<User>} Une promesse résolue avec l'utilisateur trouvé.
 */
export async function getUser(email) {
    noStore();
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
    noStore();
    try {
        const data = await sql`SELECT * FROM projects`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch projects.');
    }
}


/**
 * Récupère tous les projets ordonné de plus récent au plus ancien selon la createdat
 * @returns {Promise<Project[]>} Une promesse résolue avec un tableau de projets 
 */
export async function fetchProjectsOrderedByDesc() {
    noStore();
    try {
        const data = await sql`SELECT * FROM projects ORDER BY createdat DESC`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch projects.');
    }
}

/**
 * Récupère les 3 dernirs projets les plus récents 
 * @returns {Promise<Project[]>} Une promesse résolue avec un tableau de projets 
 */
export async function fetchRecentProjects() {
    noStore();
    try {
        const data = await sql`SELECT * FROM projects ORDER BY createdat DESC LIMIT 3`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch recent projects.');
    }
}

/**
 * Récupère un projet par son identifiant.
 * @param {string} id L'identifiant du projet.
 * @returns {Promise<Project>} Une promesse résolue avec le projet trouvé.
 */
export async function fetchProjectById(id) {
    noStore();
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

export async function fetchProjectByName(name) {
    noStore();
    try {
        const data = await sql`
            SELECT * FROM projects WHERE name = ${name}
        `;
        
        return data.rows[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch project by name.');
    }
}
/**
 * Fetches all distinct technologies from the projects table.
 * @returns {Array} An array containing all distinct technologies.
 * @throws {Error} If there's an error fetching the technologies.
 */
export async function fetchAllTechnologies() {
    try {
        const data = await sql`
            SELECT DISTINCT UNNEST(technologies) as technology
            FROM projects;
        `;
        return data.rows.map(row => row.technology);
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch all technologies.');
    }
}

/**
 * Fetches filtered projects based on the provided technology.
 * If no technology is provided, fetches all projects.
 * Projects are ordered by createdat in descending order.
 * @param {string} technology - The technology to filter the projects by.
 * @returns {Array} An array containing filtered projects.
 * @throws {Error} If there's an error fetching the projects.
 */
export async function fetchFilteredProjects(technology) {
    noStore();
    try {
        if (!technology) {
            // If technology is null or empty, return all projects ordered by createdat in descending order
            const allProjects = await sql`
                SELECT *
                FROM projects
                ORDER BY createdat DESC;
            `;
            return allProjects.rows;
        } else {
            // Otherwise, return filtered projects by technology ordered by createdat in descending order
            const filteredProjects = await sql`
                SELECT *
                FROM projects
                WHERE ARRAY[${technology}] <@ technologies
                ORDER BY createdat DESC;
            `;
            return filteredProjects.rows;
        }
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch filtered projects.');
    }
}
