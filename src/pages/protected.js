import { supabase } from '../lib/supabaseClient'

export default function Protected({ user }) {
	console.log({ user })
	return (
	  <div style={{ maxWidth: '420px', margin: '96px auto' }}>
		<h2>Hello from protected route</h2>
	  </div>
	)
  }
  
  export async function getServerSideProps({ req }) {
	//original, depricated code
	//const { user } = await supabase.auth.api.getUserByCookie(req)

	const { user } = await supabase.auth.getUser()
	console.log('user:', user)
	if (!user) {
	  return { props: {}, redirect: { destination: '/sign-in' } }
	}
  
	return { props: { user } }
  }