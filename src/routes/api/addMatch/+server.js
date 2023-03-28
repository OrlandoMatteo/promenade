import { json } from '@sveltejs/kit';
import db from '../../../lib/db';
/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  let data = await request.json()
  const match = await db.collection('test').insertOne(data)
  return json({ status: 200, body: "Match added" })
}
