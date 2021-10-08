import React from 'react'
import LeftImage from './LeftImage'
import RightImage from './RightImage'

function LeftOrRIght(props) {
    return (
        <>
           {props.data.map(d => {
               return(
                   d.left_image_or_right_image ? <RightImage data={d} key={d.id}/> : <LeftImage data={d} key={d.id}/>
               )
           })} 
        </>
    )
}

export default LeftOrRIght
