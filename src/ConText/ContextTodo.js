import React,{useState,createContext} from 'react'
export const Data = createContext()
const ContextTodoProvider = ({children}) => {
    const [title,setTitle] =useState('')
    const [hashtag,setHashtag] =useState('')
    const [content,setContent] =useState('')
    const [select,setSelect] =useState()
    const [state,setState] = useState([])
    const dataTodo = {title,setTitle,hashtag,content,setHashtag,setContent,select,setSelect,state,setState}
    return (
        <Data.Provider value={dataTodo}>
            {children}
        </Data.Provider>
    )
}

export default ContextTodoProvider
