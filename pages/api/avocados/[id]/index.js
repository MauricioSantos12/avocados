import DB from '../../../../app/database/database'

export default async function handler(req, res) {
    const db = new DB()
    const id = req.query.id
    const avocadoFounded = await db.getById(id)
    res.statusCode = 200
    res.setHeader('Content-type', 'application/json')
    res.end( JSON.stringify(avocadoFounded) );

  }