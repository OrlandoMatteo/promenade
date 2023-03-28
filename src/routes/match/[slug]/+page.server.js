import { error } from '@sveltejs/kit';
import db from '../../../lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  let matchID = params.slug || 42;
  //if (matchID) {
  //  return { matchID: matchID };
  //}
  const match = await db.collection('test').find({ matchID: matchID }).toArray()
  if (match.length == 0) {
    return { matchID: matchID };
  }
  else {
    let out = match[0]
    delete out._id
    return out
  }

  throw error(404, 'Not found');
}
