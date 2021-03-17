import { withSSRContext } from 'aws-amplify'
import React from 'react'
import {GetServerSideProps} from 'next'

interface IProtectedProps {
    authenticated: boolean,
    email: string
}

const Protected: React.FC<IProtectedProps> = ({ authenticated, email }) => {
  if (!authenticated) {
    return <h1>Not authenticated</h1>
  }
  return <h1>Hello {email} from SSR route!</h1>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { Auth } = withSSRContext(context)
    try {
      const user = await Auth.currentAuthenticatedUser()
      console.log('user: ', user)
      return {
        props: {
          authenticated: true, email: user.attributes.email
        }
      }
    } catch (err) {
      return {
        props: {
          authenticated: false
        }
      }
    }
}

export default Protected