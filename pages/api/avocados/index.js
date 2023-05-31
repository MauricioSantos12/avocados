import DB from '../../../app/database/database'

export default async function handler(req, res) {
  const db = new DB()
  const allEntries = await db.getAll()
  const length = allEntries.length

  res.statusCode = 200
  res.setHeader('Content-type', 'application/json')
  res.end( JSON.stringify({ data: allEntries, length }) );
  }