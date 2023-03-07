import './Card.css'
import React from 'react'
import image from './image.png'

const formatter = new Intl.NumberFormat('de-DE')

export default function Card(){
    const [counter, setCounter] = React.useState(1)
    function add(){
        setCounter(counter + 1)
    }

    function substract(){
        if(counter > 0){
            setCounter(counter - 1)
        }
    }


    return(
        <div style={{
            height:"264px",
            width:"484.9px",
            backgroundColor:"white",
            borderRadius:"13.47px",
        }}>
            <div className='card'>

                <div className='card--price'>

                    <div className='card--soustotal'>
                        <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.28278 17.2834C7.27172 17.2785 13.2346 18.0716 19.0141 19.6417C19.8301 19.8639 20.645 19.2578 20.645 18.4115V17.2834M2.96645 1.28851V2.13035C2.96645 2.35362 2.87776 2.56774 2.71988 2.72562C2.56201 2.88349 2.34788 2.97219 2.12461 2.97219H1.28278M1.28278 2.97219V2.55127C1.28278 1.85423 1.84849 1.28851 2.54553 1.28851H21.4869M1.28278 2.97219V13.0742M21.4869 1.28851V2.13035C21.4869 2.59504 21.864 2.97219 22.3287 2.97219H23.1705M21.4869 1.28851H21.9078C22.6048 1.28851 23.1705 1.85423 23.1705 2.55127V13.4951C23.1705 14.1922 22.6048 14.7579 21.9078 14.7579H21.4869M1.28278 13.0742V13.4951C1.28278 13.83 1.41582 14.1512 1.65263 14.388C1.88944 14.6249 2.21063 14.7579 2.54553 14.7579H2.96645M1.28278 13.0742H2.12461C2.34788 13.0742 2.56201 13.1629 2.71988 13.3208C2.87776 13.4787 2.96645 13.6928 2.96645 13.9161V14.7579M21.4869 14.7579V13.9161C21.4869 13.6928 21.5755 13.4787 21.7334 13.3208C21.8913 13.1629 22.1054 13.0742 22.3287 13.0742H23.1705M21.4869 14.7579H2.96645M15.594 8.02321C15.594 8.91628 15.2392 9.77278 14.6077 10.4043C13.9762 11.0358 13.1197 11.3906 12.2267 11.3906C11.3336 11.3906 10.4771 11.0358 9.84558 10.4043C9.21408 9.77278 8.85931 8.91628 8.85931 8.02321C8.85931 7.13013 9.21408 6.27363 9.84558 5.64213C10.4771 5.01063 11.3336 4.65586 12.2267 4.65586C13.1197 4.65586 13.9762 5.01063 14.6077 5.64213C15.2392 6.27363 15.594 7.13013 15.594 8.02321ZM18.9613 8.02321H18.9703V8.03219H18.9613V8.02321ZM5.49196 8.02321H5.50094V8.03219H5.49196V8.02321Z" stroke="black" stroke-width="2.02041" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>SOUS-TOTAL</p>
                    </div>
                    
                    <p style={{fontWeight: "bold", fontSize: "14"}}>{formatter.format(counter * 750)} DZD</p>
                </div>

                <div style={{
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center'
                }}>
                    
                    <div className='card--product'>
                        
                        <img src={image} />

                        <div style={{
                            width:"155px",
                            lineHeight:"0px"
                        }}>
                            <p style={{
                                lineHeight:"16.17px"
                            }}>Miellerie Mazouni Miel De Fleurs Sauvages - 250 Grs -</p>
                            <p style={{
                                fontWeight: "bold", color:"#92CE08",marginBottom:"0px"
                            }}>750.00 DZD</p>
                            <div style={{display: "flex",
                            alignItems:"center",
                            columnGap:"8.72px",
                            marginTop:"0px"
                         }}>
                                <p style={{
                                    color: "#C2C2C2",
                                    lineHeight:"0px",
                                    fontSize:"9.43px",
                                    fontWeight:"Regular",
                                }}><s>1600.00 DZD</s></p> 
                                <p style={{
                                    backgroundColor:"#F0FFCE",
                                    color:"#92CE08",
                                    fontSize:"6.6px",
                                    padding:"6px 2px",
                                    fontWeight:"400"
                                }}> -53%</p>
                            </div>
                        </div>

                    </div>

                    <div className='card--add'>

                        <button className='buttonminus' 
                        style={{
                            backgroundColor: counter === 0 ? "#F0F0F0" : "#92CE08"
                        }}
                        onClick={substract}>
                            <svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4774 1.0484H1.70184" stroke="white" stroke-width="2.02041" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <p style={{
                            fontWeight:"500"
                        }}>{counter}</p>
                        <button className='buttonplus' onClick={add}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.19165 1.66064V12.4362M12.5794 7.0484H1.80389" stroke="white" stroke-width="2.02041" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>

                    </div>

                </div>

                <div style={{
                    display:'flex',
                    justifyContent:'center',
                    columnGap:"40px",
                    marginTop:'16px',
                }}>

                    <button className='annuler'>ANNULER</button>
                    <button className='addpanier'>AJOUTER AU PANIER</button>

                </div>

            </div>
        </div>
    )
}