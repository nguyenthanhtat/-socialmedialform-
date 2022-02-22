import React,{useState,createContext} from 'react'
import {v4 as uuidv4} from 'uuid'
import {NHOM,NHOMJOIN} from '../Data/DataNhom'
export const DataNhom = createContext()
const ContextNhomProvider = ({children}) => {
    const [id,setId] =useState(uuidv4())
    const [name,setName] =useState()
    const [logo,setLogo] =useState()
    const [clbs,setClbs] =useState(NHOM)
    const[personClb,setPersonClb] =useState(NHOMJOIN)   
    // const handleADD =()=>{
    //     setClbs([...clbs,{id,name,logo}])
    // }
    // const handleRemove =(id)=>{
    //     setClbs(clbs.filter((clb)=>clb.id !== id))
        
        
    // }

    const dataTodo = {name,logo,clbs,personClb,setPersonClb,NHOMJOIN}
    return (
        <DataNhom.Provider value={dataTodo}>
            {children}
        </DataNhom.Provider>
    )
}

export default ContextNhomProvider
