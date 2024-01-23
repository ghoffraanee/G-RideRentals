import pool from '../db';

export default async function handler(req, res) {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM car');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}