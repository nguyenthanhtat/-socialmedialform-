import React,{useState,createContext} from 'react'
import { v4 as uuidv4 } from 'uuid';
export const Data = createContext()
const CommentContextProvider = ({children}) => {
    const [write,setWrite] = useState('')
    const [writeArray,setWriteArray] = useState([
  
    ])
    const [acReply,setAcReply] = useState(false)
    
    const MXH ={
      id:uuidv4(),
      write:write
    }
    
    
    const dataTodo = {write,setWrite,writeArray,setWriteArray,acReply,setAcReply,MXH}
    return (
        <Data.Provider value={dataTodo}>
            {children}
        </Data.Provider>
    )
}

export default CommentContextProvider
