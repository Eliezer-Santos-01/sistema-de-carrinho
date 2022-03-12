import React,{createContext, useState}from 'react'
import {pizzaJson} from "../components/modelJson"

export const Context = createContext()

const Cont = ({children}) => {

    const [index, setIndex] = useState(0)
    const [indexPrice, setIndexPrice] = useState()
    const [dados, setDados] = useState([])
    const [openCart, setOpenCart] = useState(false)
    const [isloading, setIsloading] = useState(true)
    const [prices , setPrices] = useState([])
    const [itemAdc, setItemAdc] = useState([])
    const [itemAdcPrice, setItemAdcPrice] = useState([])
    const [dadosIndex, setDadosIndex] = useState([])
    const [quatidade, setQuatidade] = useState(1)
    const [Mult, setMuti] = useState()
    const [exists, setExists] = useState("")
    const [openModal, setOpenModal] = useState(false)
    
    const AbrirModal = () => {
      setOpenModal(true)
      
    }
    
  
    const FecharModal = () => {
      setOpenModal(false)
      
    }
    


    const ApagaDoCart = (Index) => {
      setIsloading(true)
      dados.splice(Index, 1)
      
    }

    const escolher = (item,index) => {
      AbrirModal()
      setIndex(index)
      setItemAdc(item)
      setOpenModal(true)
      console.log(index)
      
    }

    const Multi = ()=> {
      if(openModal){
      setQuatidade(quatidade + 1)
      }
    }
  
    const Sub = ()=> {
      if(quatidade > 1)
      setQuatidade(quatidade - 1)
    }
  

    const EscolherPizza = (item, Index) => {
      
      setIndexPrice(Index)
      setItemAdcPrice(item)
    }
  
    const AdiconarAoCart = () => {
        
        const ProdutoExistente = dados.find((item) => item.id === itemAdc.id && item.tamanhoEscolhido && item.tamanhoEscolhido === pizzaJson[index].sizes[indexPrice]);
          
        if(ProdutoExistente){
          setDados(dados.map((item) => 
            item.id === itemAdc.id && item.tamanhoEscolhido && item.tamanhoEscolhido === pizzaJson[index].sizes[indexPrice]
            ?{...ProdutoExistente, quatidade: ProdutoExistente.quatidade + quatidade, total: ProdutoExistente.total + quatidade * pizzaJson[index].price[indexPrice], tamanhoEscolhido: ProdutoExistente.tamanhoEscolhido = pizzaJson[index].sizes[indexPrice] }
            :item 
          )
        );
      }else{
        setDados([...dados, {...itemAdc, quatidade: quatidade, total: quatidade * pizzaJson[index].price[indexPrice], tamanhoEscolhido:pizzaJson[index].sizes[indexPrice]}])
      }
      
      
    }
 
  return (
   <Context.Provider value={{  AbrirModal,
    FecharModal,
    index, 
   setIndex, 
   indexPrice, 
   setIndexPrice, 
   dados, setDados, 
   openCart, 
   setOpenCart,
   ApagaDoCart, 
   isloading, 
   setIsloading, 
   prices , 
   setPrices, 
   itemAdc, 
   setItemAdc, 
   itemAdcPrice, 
   setItemAdcPrice, 
   dadosIndex, 
   setDadosIndex, 
   quatidade, 
   setQuatidade, 
   Mult, 
   setMuti, 
   exists, 
   setExists, 
   escolher,
   AdiconarAoCart,
   EscolherPizza,
   openModal,
   setOpenModal, 
   Multi,
   Sub}}>
       {children}
   </Context.Provider>
  )
}

export default Cont