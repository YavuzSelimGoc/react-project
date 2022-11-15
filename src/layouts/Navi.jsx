import React, {useState}  from 'react'
import { Button, Dropdown, Menu,Container } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignIn from './SignIn'
import SignOut from './SignOut'

export default function Navi() {
  const [isAuthenticated,setIsAuthenticated]=useState(true)
  function handleSignOut(params) {
    setIsAuthenticated(false)
  }
  function handleSignIn(params) {
    setIsAuthenticated(true)
  }
  return (
    <Menu inverted fixed="top">
<Container>
<Menu.Item
      name='home'
    />
    <Menu.Item
      name='messages'
    />

    <Menu.Menu position='right'>
      <CartSummary></CartSummary>
      {isAuthenticated?<SignIn signOut={handleSignOut}></SignIn>:<SignOut signIn={handleSignIn}></SignOut>}
    </Menu.Menu>
</Container>
  </Menu>
  )
}
