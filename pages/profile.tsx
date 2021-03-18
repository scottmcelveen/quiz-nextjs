import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import awsconfig from '../src/aws-exports-env';

Amplify.configure({...awsconfig, ssr: true});

interface IUser {
    attributes: IUserAttributes
}

interface IUserAttributes {
    email: string
}

function Profile() {
  const [user, setUser] = useState<IUser>()
  useEffect(() => {
    // Access the user session on the client
    Auth.currentAuthenticatedUser() 
      .then(user => {
        console.log("User: ", user)
        setUser(user)
      })
      .catch(() => setUser(undefined))
  }, [])
  return (
    <div>
      { user && <h1>Welcome, {user.attributes.email}</h1> }
      <AmplifySignOut />
    </div>
  )
}

export default withAuthenticator(Profile)