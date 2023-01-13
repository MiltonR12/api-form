import { pool } from "../db.js";

export const getInscripciones = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM inscripcion')
    res.json(result)
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const getInscripcion = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM inscripcion WHERE id = ?',
      [req.params.id])
    res.json(result[0])
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const addInscripcion = async (req, res) => {
  const { name, number, integrantes, nicks, logo, comprobante } = req.body;
  try {
    const [result] = await pool.query('INSERT INTO inscripcion (name, number, integrantes, nicks, logo, comprobante) VALUES (?,?,?,?,?,?)', [name, number, integrantes, nicks, logo, comprobante]);
    res.json({
      id: result.insertId,
      name,
      integrantes,
      nicks,
      logo,
      comprobante
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const deleteInscripcion = async (req, res) => {
  try {
    const result = await pool.query('DELETE FROM inscripcion WHERE id = ?', [req.params.id])
    if (result.affectedRows == 0) {
      return res.status(404).json({
        message: 'Equipo not found'
      })
    }
    return res.send(result)
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const updateInscripcion = async (req, res) => {
  try {
    const [result] = await pool.query('UPDATE inscripcion SET ? WHERE id = ?', [req.body, req.params.id])
    res.json(result)
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}