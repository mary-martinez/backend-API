const pool = require('../utils/pool');

module.exports = class Sign {
  id;
  word;
  aka;
  url;
  introduced;
  proficiency;

  constructor(row) {
    this.id = row.id;
    this.word = row.word;
    this.aka = row.aka;
    this.url = row.url;
    this.introduced = row.introduced;
    this.proficiency = row.proficiency;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT word, introduced FROM signs;');
    return rows.map((row) => new Sign(row));
  }
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM signs WHERE id=$1', [id]);
    if (!rows[0]) return null;

    return new Sign(rows[0]);
  }

};
