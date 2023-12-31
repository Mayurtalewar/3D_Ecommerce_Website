import React from 'react'
import GridView from './GridView'
import ListView from './ListView'
import { useProductContext } from '../context/ProductContext'
import { useFilterContext } from '../context/FilterContext'
import styled from 'styled-components'
import { RotateLoader } from 'react-spinners'

function ProductsList() {
    const { filtered_products, grid_view } = useFilterContext()
    const { loading } = useProductContext()
    if (loading) {
        return (
            <Wrapper>
                <RotateLoader style={{alignSelf:'center', width:'fit-content', margin:'auto', display:'block'}}/>
            </Wrapper>
        )
    }
    if (filtered_products.length < 1) {
        return (
            <h3>Sorry, no results found...</h3>
        )
    }
    if (grid_view) {
        return <GridView products={filtered_products} />
    }
    return <ListView products={filtered_products} />

}
const Wrapper = styled.div`
    width:40vw;
`
export default ProductsList;