import React, {useContext, useState, useEffect}from 'react'
import { pizzaJson } from './components/modelJson'
import {Context} from "./Context/Cont"
import Cart from './components/Cart'
import Modal from './components/Modal'
import styles from "./styles/home.module.css"

const App = () => {
  const { index,quatidade,AbrirModal, FecharModal, setQuatidade, setIndex,setOpenModal ,indexPrice,openModal, setIndexPrice, setOpenCart, openCart, dados, setDados,  itemAdc, setItemAdc, setItemAdcPrice, exists, escolher, AdiconarAoCart, EscolherPizza} = useContext(Context);
 

  useEffect(() => {
    if(index){
      setQuatidade(1)
      setIndexPrice(0)
      
     
    }
    
  
  },[index])


  useEffect(() => {
    if(index){
      setIndexPrice(indexPrice)
      console.log(indexPrice)
      
      
    }
  
  },[indexPrice])


  useEffect(() => {
    if(index){
      setIndexPrice(indexPrice)
      console.log(indexPrice)
    }
  
  },[exists])
 
  
  

  const AbriCart = () => {
      setOpenCart(true)
      setOpenCart(true);
      console.log(dados);
      console.log(indexPrice);
      
   
    
  }

  const FecharCart = () => {

  setOpenCart(false);
}

  

 

  
  
  return (
    <div>
      {openModal&& <Modal/>}
      { openCart&&<Cart/>}
      <nav className={styles.containerNav}>
        <div className={styles.Navbutton} onClick={()=> AbriCart()}>AbriCart</div>
      </nav>
      <div className={styles.SuperContainer}>
      {
        pizzaJson.map((item,index) =>
          <div className={styles.container} key={index}>
              <div className={styles.containerItem}>
                <div className={styles.containerImgAndAdc}>
                  <img className={styles.imgItem} src={item.img}/>
                  <div className={styles.Adc} onClick={()=>escolher(item,index)} >+</div> 
                </div>
                <div className={styles.item}>{item.name}</div>
                <div className={styles.item}>{item.description}</div> 
              </div>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default App