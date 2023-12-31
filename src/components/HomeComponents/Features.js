import React from 'react'
import styled from 'styled-components'
import { FaRegHeart, FaRegStar } from 'react-icons/fa'
import { AiOutlineAntDesign } from 'react-icons/ai'

function Features() {
    return (
        <Wrapper className='section-center'>
            <div className='header'>
                <h1>Features</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit, sed do eiusmod tempor.</p>
            </div>
            <div className='features'>
                <div className='feature'>
                    <FaRegHeart />
                    <h3>Feature 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                </div>
                <div className='feature'>
                    <FaRegStar />
                    <h3>Feature 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                </div>
                <div className='feature'>
                    <AiOutlineAntDesign />
                    <h3>Feature 3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default Features

const Wrapper = styled.div`
    .header{
        h1{
            text-align:center;
            margin-bottom:0.5rem;
            font-size:2.5rem;
        }
        p{
            text-align:center;
        }
        margin-bottom:2rem;
    }
    .features{
        display:grid;
        grid-template-columns:repeat(1,1fr);
        gap:2rem;
        .feature{
            background-color:#f5f5f5;
            padding:2rem;
            display:flex;
            flex-direction:column;
            align-items:center;
            svg{
                color:#bb58fe;
                font-size:3rem;
                margin-bottom:1rem;
            }
            h3,p{
                text-align:center;
            }
            h3{
                margin-bottom:1rem;
            }
        }
    }

    @media screen and (min-width:776px){
        .features{
            grid-template-columns:repeat(3,1fr);
        }
    }
`