import { pool } from "../db.js";

export const getInscripciones = async (req, res) => {
  const [result] = await pool.query('SELECT * FROM inscripcion')
  res.json(result)
}

export const getInscripcion = async (req, res) => {
  const [result] = await pool.query('SELECT * FROM inscripcion WHERE id = ?', [req.params.id])
  res.json(result[0])
}

export const addInscripcion = async (req, res) => {
  const { name, number, integrantes, nicks, logo, comprobante } = req.body;
  const [result] = await pool.query('INSERT INTO inscripcion (name, number, integrantes, nicks, logo, comprobante) VALUES (?,?,?,?,?,?)', [name, number, integrantes, nicks, logo, comprobante]);
  res.json({
    id: result.insertId,
    name,
    integrantes,
    nicks,
    logo,
    comprobante
  })
}

export const deleteInscripcion = async (req, res) => {
  const result = await pool.query('DELETE FROM inscripcion WHERE id = ?', [req.params.id])
  res.send(result)
}

export const updateInscripcion = async (req, res) => {
  const [result] = await pool.query('UPDATE inscripcion SET ? WHERE id = ?', [req.body, req.params.id])
  res.json(result)
}