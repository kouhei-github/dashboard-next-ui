"use client"

import "../styles/_credit_card.css"
import {ChangeEvent, useState} from 'react'

const currentYear = new Date().getFullYear()

const initCardHolder: {class: string, innerHtml: string}[] = []
for (let i = 0; i < 16; i++) {
  initCardHolder.push({class: "", innerHtml: "#"},)
}

export default function Subscription() {
  const [number, setNumber] = useState('');
  const [holder, setHolder] = useState('Name on card');
  const [month, setMonth] = useState('MM');
  const [year, setYear] = useState('YY');
  const [cvv, setCvv] = useState('');
  const [cvvFocus, setCvvFocus] = useState(false);
  const [highlight, setHighlight] = useState('');

  const handleHolderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHolder(event.target.value);
    setHighlight('highlight__holder');
  };

  const handleCvvChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCvv(event.target.value);
  };

  const [card, setCard] = useState<string>("card")
  const handleNumberFocus = (className: string, flip=true) => {
    setCard(flip ? card.replaceAll("flip", "") : "flip card")
    setHighlight(className)
  }

  const [cardNumberClass, setCardNumberClass] = useState<{class: string, innerHtml: string}[]>(initCardHolder)
  const [enteredCardNumbers, setEnteredCardNumbers] = useState<number>(0)
  const handleNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    if(enteredCardNumbers > value.length) {
      let newArr = [...cardNumberClass];
      newArr[15 - (15 - value.length)] = {class: "", innerHtml: "#"}
      setCardNumberClass(newArr)
    } else {
      if(value.length > 4 && value.length < 13) {
        let newArr = [...cardNumberClass];
        newArr[value.length - 1] = {class: "filed", innerHtml: "*"}
        setCardNumberClass(newArr)
      } else {
        let newArr = [...cardNumberClass];
        newArr[value.length - 1] = {class: "filed", innerHtml: value.slice(-1)}
        setCardNumberClass(newArr)
      }
    }

    setEnteredCardNumbers(value.length)
    setNumber(value)
  };

  return (
      <>
        <main>
          <section id="card" className={card}>
            <div id="highlight" className={highlight}></div>
            <section className="card--front">
              <div className="card--header">
                <div>CreditCard</div>
                <svg xmlns="http://www.w3.org/2000/svg" height="40" width="60" id="svg895" version="1.1"
                     viewBox="-96 -98.908 832 593.448">
                  <defs id="defs879">
                  </defs>
                  <path id="rect887" display="inline" fill="#ff5f00" strokeWidth="5.494" d="M224.833 42.298h190.416v311.005H224.833z"/>
                  <path id="path889" d="M244.446 197.828a197.448 197.448 0 0175.54-155.475 197.777 197.777 0 100 311.004 197.448 197.448 0 01-75.54-155.53z" fill="#eb001b" strokeWidth="5.494"/>
                  <path id="path891" d="M621.101 320.394v-6.372h2.747v-1.319h-6.537v1.319h2.582v6.373zm12.691 0v-7.69h-1.978l-2.307 5.493-2.308-5.494h-1.977v7.691h1.428v-5.823l2.143 5h1.483l2.143-5v5.823z" className="e" fill="#f79e1b" strokeWidth="5.494"/>
                  <path id="path893" d="M640 197.828a197.777 197.777 0 01-320.015 155.474 197.777 197.777 0 000-311.004A197.777 197.777 0 01640 197.773z" className="e" fill="#f79e1b" strokeWidth="5.494"/>
                </svg>
              </div>
              <div id="card_number" className="card--number">
                {Array.from( {length: 16}, (_, index) => (
                    <span key={index} className={cardNumberClass[index].class}>{cardNumberClass[index].innerHtml}<br/></span>
                ))}
              </div>
              <div className="card--footer">
                <div className="card--holder">
                  <div className="card--section--title">Card Holder</div>
                  <div id="card_holder">{holder}</div>
                </div>
                <div className="card__expires">
                  <div className="card--section--title">Expires</div>
                  <span id="card_expires_month">{month}</span>/<span id="card_expires_year">{year.slice( -2 )}</span>
                </div>
              </div>
            </section>
            <section className="card--back">
              <div className="card--hide-line"></div>
              <div className="card-cvv">
                <span>CVV</span>
                <div className={`card-cvv-field ${cvvFocus ? 'flip' : ''}`}>{Array( cvv.length + 1 ).join( "*" )}
              </div>
            </div>
          </section>
        </section>

        <form className="form">
          <div>
            <label htmlFor="number">Card Number</label>
            <input id="number" type="number" value={number} onFocus={() => handleNumberFocus("highlight__number")} onChange={(event) => handleNumberChange(event)}/>
          </div>
          <div>
            <label htmlFor="holder">Card Holder</label>
            <input id="holder" type="text" value={holder} onFocus={() => handleNumberFocus("highlight__holder")} onChange={(event) => handleHolderChange(event)} />
          </div>
          <div className="filed--group">
            <div>
              <label htmlFor="expiration_month">Expiration Date</label>
                <div className="filed--date">
                  <select id="expiration_month" value={month} onFocus={() => handleNumberFocus("highlight__expire")} onChange={(event) => setMonth(event.target.value)}>
                    <option disabled>Month</option>
                    {Array.from({length: 12}, (_, index) => (
                        <option key={index}>{String(index+1).length === 1 ? `0${index+1}` : index+1}</option>
                    ) )}
                  </select>
                  <select id="expiration_year" value={year} onFocus={() => handleNumberFocus("highlight__expire")} onChange={(event) => setYear(event.target.value)}>
                    <option disabled>Year</option>
                    {Array.from({length: currentYear+9 - currentYear+1}, (_, index) => (
                        <option key={index}>{index + currentYear}</option>
                    ))}
                  </select>
                </div>
              </div>
            <div>
              <label htmlFor="cvv">CVV</label>
              <input
                  id="cvv"
                  type="number"
                  value={cvv}
                  onFocus={() => handleNumberFocus("highlight__cvv", false)}
                  onBlur={() => handleNumberFocus("hidden")}
                  onChange={(event) => handleCvvChange(event)}/>
            </div>
          </div>
        </form>
        </main>
      </>
  )
}
