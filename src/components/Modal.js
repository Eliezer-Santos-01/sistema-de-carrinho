import React,{useContext, useState}from 'react'
import styles from '../styles/modal.module.css'
import { pizzaJson } from './modelJson'
import { Context } from '../Context/Cont'

const Modal = ({id="Modal"}) => {
  const {index, setOpenModal, quatidade, Multi, Sub, AdiconarAoCart, EscolherPizza, indexPrice, setIndexPrice} = useContext(Context)
  
  const [selecionado0, setSelecionado0] = useState()
  const [selecionado1, setSelecionado1] = useState()
  const [selecionado2, setSelecionado2] = useState()
  
  const Click = (e) => {
    if(e.target.id == id) setOpenModal(false)
  }



  return (
    <div id={id} onClick={Click} className={styles.modalContainer}> 
      <div className={styles.container}>
        <div className={styles.containeritens}>
          <div className={styles.containerModalImg}>
            <img className={styles.ModalImg} src={pizzaJson[index].img}/>
          </div>
          <div className={styles.containerModalDesc}>
            <div className={styles.itemModalName}>{pizzaJson[index].name}</div>
            <div className={styles.itemModalDesc}>{pizzaJson[index].description}</div>
            
            
            <div className={styles.itemModalSizes}>{pizzaJson[index].sizes.map((item, index)=> 
              <div  className={styles.containerModalItemSizes} key={index} >
                  <div className={styles.itemSizes} onClick={() =>EscolherPizza(item,index)}>
                    {item}
                  </div>
              </div>
              )}
            </div> 
            <div>{(indexPrice >= 0) &&
              <div>
                <div className={styles.itemSizesModal}>
                  {pizzaJson[index].sizes[indexPrice]}
                </div>
                <div className={styles.containerButtons}>
                  <button className={styles.modalButton} onClick={()=>Multi()}>+</button>
                  <div className={styles.modalQuant} >{quatidade}</div>
                  <button className={styles.modalButton2} onClick={()=>Sub()} > - </button>
                </div>
                <div className={styles.txtItem}>Por</div>
                {indexPrice >= 0&&
                  <div className={styles.itemModalPrice}>{`R$ ${ (quatidade * pizzaJson[index].price[indexPrice]).toFixed(2)}`}</div>
                }
                <div className={styles.containerBtnADcCar}>
                  <button className={styles.modalButtonAdcCart} onClick={()=> AdiconarAoCart()} >Adicioanar ao Cart</button>
                </div>
              </div>
            }
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Modal