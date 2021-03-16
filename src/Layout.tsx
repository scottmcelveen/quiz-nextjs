import React, { ReactNode } from 'react'
import 'fontsource-roboto';
import Link from 'next/link'
import Head from 'next/head'
import { Button, CssBaseline } from '@material-ui/core'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
<div>
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
  </Head>
  <header>
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>{' '}
      |{' '}
      <Link href="/about">
        <a>About</a>
      </Link>{' '}
      |{' '}
      <Link href="/users">
        <a>Users List</a>
      </Link>{' '}
      | <a href="/api/users">Users API</a>
    </nav>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  </header>
    <CssBaseline />
      {children}
</div>
)

export default Layout
