import React,{ useRef} from "react"
import red from './../Pictures/red.png'
import blue from './../Pictures/blue.png'
import Triad from './../Pictures/Triad.png'

function Heatmap(props){
    const Triangle=useRef(null)

    return(
        <>
            <div >
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 80 }}>
                    <div></div>
                    <div>
                     <h5>OUTPUT HEAT MAP</h5>   
                    </div>
                    <div></div>
                </div>
                <img ref={Triangle} src={Triad}></img>
                {props.state.points?.map((point,i) => (
                     <img key={point._id}  style={{position:"absolute", left:point.x+Triangle.current.x-12, top:point.y+Triangle.current.offsetTop-12}} src={i+1===props.state.points.length? red:blue} ></img>
                ))}
            </div>
        </>
    )
}

export default Heatmap