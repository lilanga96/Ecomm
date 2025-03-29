import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient('https://zgzwsnhmmkzfejewsxyg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnendzbmhtbWt6ZmVqZXdzeHlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyNjY5NDQsImV4cCI6MjA1ODg0Mjk0NH0.T3h1CMra8uKlu7C0AEywW5NMg38P7vx9VfcpU5Egclg')

//YRsMdZb9UjRGULj


function Login() {

    const [session, setSession] = useState(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session)
        })
        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
          setSession(session)
        })
        return () => subscription.unsubscribe()
      }, [])
      if (!session) {
        return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
      }
      else {
        return (<div>Logged in!</div>)
      }


  
}

export default Login
