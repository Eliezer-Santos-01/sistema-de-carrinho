import React,{useState, useContext, useEffect}from 'react'
import {Context} from '../Context/Cont'

import styles from '../styles/Cart.module.css'
const Cart = ({id="Modal"}) => {
    const { dados, openCart,setOpenCart, ApagaDoCart, isloading, setIsloading} = useContext(Context);
    const [dadoscar, setDadosCar] = useState([])
    const [ quant, setQuant] = useState(0)
    const [cont, setCont] = useState(0)
    
    useEffect(() => {
        setIsloading(false)
        setDadosCar(dados)
        setDadosCar(dados)
      
        
    }, [isloading]);

    
    const click = (e) => {
      if(e.target.id == id) setOpenCart(false)
    }

    const Almenta = ( quatidade) => {
      
    
      setCont(quant + 1)
      console.log(cont)
      
    }
    const Diminuir = ( quatidade) => {
     
      setCont(quant - 1)
      console.log(cont)
    }
    
    return (
        <div id={id} onClick={click} className={styles.superContainer}>
          <div className={styles.containerItem}>
            <div className={styles.container}> 
                {openCart&& dados.map((item, index) => 
            <div className={styles.containerCartModal} key={index}>
              <div>
                  <div className={styles.itemCartApaga}>
                    <button onClick={()=> ApagaDoCart(index)}>Apaga do Carrinho</button>
                  </div>
              </div>
            <div className={styles.containerDescCart}>
              <div className={styles.containerDescIMg}>
                <img className={styles.itemCartImg} src={item.img}/>
              </div>
              <div className={styles.containerDescItem}>
                <div>{`Nome: ${item.name}`}</div>
                
                <div>{`Tamanho: ${item.tamanhoEscolhido}`}</div>
                <div>{`Quantidade: ${item.quatidade}`}</div>
                <div>{`Total: R$ ${(item.total).toFixed(2)}`}</div>
                <div>{cont}</div>
              </div>
              </div>
              </div>)}
            </div> 
          </div>
        </div>
     
    )
}

export default Cart