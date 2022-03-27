import React,{ useRef,useEffect,useState} from "react"
import red from './../Pictures/red.png'
import Triad from './../Pictures/Triad.png'
import Draggable from 'react-draggable'


function DragDrop({sendDataToParent}){
 
  const [current, setCurrent] = useState({
      pointer:{
        position:{
          x:{
            real:0,
            virtual:0
          },
          y:{
            real:0,
            virtual:0
          }
        },
        height:{
          real:0,
          virtual:0
        },
        width:{
          real:0,
          virtual:0
        }
      },
      triangle:{
        position:{
          x:{
            real:0,
            virtual:0
          },
          y:{
            real:0,
            virtual:0
          }
        },
        height:{
          real:0,
          virtual:0
        },
        width:{
          real:0,
          virtual:0
        }
      },
  });
  const [Inside,setInside]=useState({in:0})

  const Pointer=useRef(null)  
  const Triangle=useRef(null)

  const startPosition=()=>{ 
      setCurrent(()=>({
      pointer:{
        position:{
          x:{
            real:Pointer.current.x,
            virtual:Pointer.current.x-Triangle.current.x+12
          },
          y:{
            real:Pointer.current.y,
            virtual:Pointer.current.y-Triangle.current.y+12
          }
        },
        height:{
          real:Pointer.current.height,
          virtual:Pointer.current.height
        },
        width:{
          real:Pointer.current.width,
          virtual:Pointer.current.width
        }
      },
      triangle:{
        position:{
          x:{
            real:Triangle.current.x,
            virtual:0
          },
          y:{
            real:Triangle.current.y,
            virtual:0
          }
        },
        height:{
          real:Triangle.current.height,
          virtual:Triangle.current.height
        },
        width:{
          real:Triangle.current.width,
          virtual:Triangle.current.width
        }
      },
    }
    ))
  }
  const currentPosition=(e,ui)=>{
      setCurrent((prevState)=>({
        pointer:{
          position:{
            x:{
              real:Pointer.current.x+ui.x,
              virtual:Pointer.current.x-Triangle.current.x+12+ui.x
            },
            y:{
              real:Pointer.current.y+ui.y,
              virtual:Pointer.current.y-Triangle.current.y+12+ui.y
            }
          },
          height:{
            real:Pointer.current.height,
            virtual:Pointer.current.height
          },
          width:{
            real:Pointer.current.width,
            virtual:Pointer.current.width
          }
        },
        triangle:{
          position:{
            x:{
              real:Triangle.current.x,
              virtual:0
            },
            y:{
              real:Triangle.current.y,
              virtual:0
            }
          },
          height:{
            real:Triangle.current.height,
            virtual:Triangle.current.height
          },
          width:{
            real:Triangle.current.width,
            virtual:Triangle.current.width
          }
        },
      }
      ))
  }

  useEffect(()=>{
    startPosition()
  }, [])

  useEffect(()=>{checkPositionInsideTriangle() },[current])
 
  useEffect(()=>{
    sendDataToParent(current.pointer.position.x.virtual,current.pointer.position.y.virtual,Inside.in)
  },[Inside])   



  const checkPositionInsideTriangle = () => {
    if (0<=current.pointer.position.x.virtual && current.pointer.position.x.virtual<=160 && 
      -current.triangle.height.virtual*2*current.pointer.position.x.virtual/current.triangle.width.virtual+current.triangle.height.virtual<=current.pointer.position.y.virtual && 
      current.pointer.position.y.virtual<=current.triangle.height.virtual) {
        setInside({in:1})
      } else if(160<current.pointer.position.x.virtual && current.pointer.position.x.virtual<320 && 
      current.triangle.height.virtual*2*current.pointer.position.x.virtual/current.triangle.width.virtual-current.triangle.height.virtual<=current.pointer.position.y.virtual && 
      current.pointer.position.y.virtual<=current.triangle.height.virtual){
        setInside({in:1})
      }else{
        setInside({in:0})
      }
    }
 
  return(
    <>
      <div style={{ position: 'relative' }} >
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 80 }}>
            <div></div>
            <div>sleeping</div>
            <div></div>
          </div>
        </div>
        <img ref={Triangle} src={Triad}></img>
        <Draggable onStop={(e,ui)=>currentPosition(e,ui)} >
          <img ref={Pointer}  src={red} ></img>
        </Draggable>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 80 }}>
          <div>eating</div>
          <div></div>
          <div>working</div>
        </div>
      </div>
    </>
  )
}

export default DragDrop