import React from 'react'
import { List } from 'semantic-ui-react'
import ProductList from '../pages/ProductList'
import CartSummary from './CartSummary'
import Categories from './Categories'
import Navi from './Navi'
import { Grid,GridColumn,GridRow } from 'semantic-ui-react'
import { Route } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn  width={4}>
          <Categories></Categories>
          </GridColumn>
          <GridColumn width={12}>
          
          </GridColumn>

        </GridRow>
      </Grid>
     
      
      
    </div>
  )
}
