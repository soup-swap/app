import '../styles/globals.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '../lib/supabaseClient'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
	const router = useRouter()
	const [authenticatedState, setAuthenticatedState] = useState('not-authenticated')
	useEffect(() => {
	  const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
		handleAuthChange(event, session)
		if (event === 'SIGNED_IN') {
		  setAuthenticatedState('authenticated')
		  router.push('/profile')
		}
		if (event === 'SIGNED_OUT') {
		  setAuthenticatedState('not-authenticated')
		}
	  })
	  checkUser()
	  return () => {
		authListener.subscription.unsubscribe()
	  }
	}, [])
	async function checkUser() {
	  const user = await supabase.auth.getUser()
	  if (user) {
		setAuthenticatedState('authenticated')
	  }
	}
	async function handleAuthChange(event, session) {
	  await fetch('/api/auth', {
		method: 'POST',
		headers: new Headers({ 'Content-Type': 'application/json' }),
		credentials: 'same-origin',
		body: JSON.stringify({ event, session }),
	  })
	}
	console.log('authenticatedState:', authenticatedState)
	return (
	  <div>
		<nav style={navStyle}>
		  <Link legacyBehavior href="/">
			<a style={linkStyle}>Home</a>
		  </Link>
		  {
			authenticatedState === 'not-authenticated' && (
			  <Link legacyBehavior href="/sign-in">
				<a style={linkStyle}>Sign In</a>
			  </Link>
			)
		  }
		  <Link legacyBehavior href="/profile">
			<a style={linkStyle}>Profile</a>
		  </Link>
		  <Link legacyBehavior href="/protected">
			<a style={linkStyle}>Protected</a>
		  </Link>
		</nav>
		<Component {...pageProps} />
	  </div>
	)
  }
  
  const navStyle = {
	margin: 20
  }
  
  const linkStyle = {
	marginRight: 10
  }
  
  export default MyApp