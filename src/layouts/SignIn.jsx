import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignIn(props) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://media-exp1.licdn.com/dms/image/C4E03AQGrT99ripKzfw/profile-displayphoto-shrink_200_200/0/1637695972547?e=2147483647&v=beta&t=ea5x3-y1c2_icdzyQEe-fr6pi3Yh6l-4W8mEOAVdZlA"></Image>
            <Dropdown pointing="top left" text='Yavuz Göç'>
            <Dropdown.Menu>
                <Dropdown.Item text="Bilgilerim" icon="info"></Dropdown.Item>
                <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out"></Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
