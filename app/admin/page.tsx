import {isAdmin} from '../../lib/auth';import Dashboard from './ui';export default async function Admin(){return <main className="wrap"><Dashboard loggedIn={await isAdmin()}/></main>}
