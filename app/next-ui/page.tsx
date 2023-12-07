"use client"
import "../styles/_culc_app.scss"
import {useState} from 'react'

type logic = "-" | "+" | "x" | "÷" | "=" | "c" | "nothing"

export default function Home() {

  const [typing, setTyping] = useState<string>("")

  const [evaluate, setEvaluate] = useState<string>("")

  const[answer, setAnswer] = useState<number>(0)
  const callCalc = (logic: logic) => {
    if (logic === "c")  {
      setTyping("")
      setAnswer(0)
      setEvaluate("")
      return
    }
    let func = evaluate + typing + logic

    setTyping("")

    if(func.includes("x") || func.includes("÷")){
      func ="(" + func
    }

    const result = func.replaceAll("x", ")*").replaceAll("÷", ")/").replaceAll("nothing", "").replaceAll("=", "")
    if (logic === "="){
      setTyping("")
      setAnswer(eval(result))
      return
    }

    setEvaluate(result)
    setAnswer(eval(result.slice(0,-1)))

  }


  return (
      <div className={""}>
        <div className="avatron">
          <div className="top-stripes-container">
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
          </div>
          <div className="result">
          <p className={"text-2xl text-white"}>{answer}</p>
          </div>
          <div className="button-container">
            <div className="logo-container">
              <div className="logo">
                <span className="name">Kohei</span><strong>electronic</strong>
              </div>
            </div>
            <div className="button-container-top">
              <div className="button-top-row">
                <div onClick={() => callCalc("c")} className="button button--orange button-first">
                  <div className="shading"></div>
                  <div className="button-inner">
                    <div className="button-text">C</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-container-bottom">
              <div className="button-row top-row">
                <div className="button button--orange button-first">
                  <div className="shading"></div>
                  <div className="button-inner">
                    <div className="button-text">MC</div>
                  </div>
                </div>
                <div className="button button--orange button-second">
                  <div className="shading"></div>
                  <div className="button-inner">
                    <div className="button-text">M+</div>
                  </div>
                </div>
                <div className="button button--orange button-third">
                  <div className="shading"></div>
                  <div className="button-inner">
                    <div className="button-text">M-</div>
                  </div>
                </div>
                <div className="button button--orange button-fourth">
                  <div className="shading"></div>
                  <div className="button-inner">
                    <div className="button-text">MR</div>
                  </div>
                </div>
              </div>
              <div className="button-row second-row">
                <div onClick={() => setTyping(typing+"7")} className="button button--gray button-first">
                  <div className="shading"></div>
                  <div className="button-inner">
                    <div className="button-text button-text--number">7</div>
                  </div>
                </div>
                <div onClick={() => setTyping(typing+"8")} className="button button--gray button-second">
                  <div className="shading"></div>
                  <div className="button-inner">
                    <div className="button-text button-text--number">8</div>
                  </div>
                </div>
                <div onClick={() => setTyping(typing+"9")} className="button button--gray button-third">
                  <div className="shading"></div>
                  <div className="button-inner">
                    <div className="button-text button-text--number ">9</div>
                  </div>
                </div>
                <div onClick={() => callCalc("-")} className="button button--white button-fourth">
                  <div className="shading"></div>
                  <div className="button-inner">
                    <div className="button-text button-text--number button-text--bold">-</div>
                  </div>
                </div>
              </div>
              <div className="button-row third-row">
                <div onClick={() => setTyping(typing+"4")} className="button button--gray button-first">
                  <div className="shading"></div>
                  <div className="button-inner">
                    <div className="button-text button-text--number">4</div>
                  </div>
                </div>
                <div onClick={() => setTyping(typing+"5")} className="button button--gray button-second">
                  <div className="shading"></div>
                  <div className="button-inner">
                    <div className="button-text button-text--number">5</div>
                  </div>
                </div>
                <div onClick={() => setTyping(typing+"6")} className="button button--gray button-third">
                  <div className="shading"></div>
                  <div className="button-inner">
                    <div className="button-text button-text--number ">6</div>
                  </div>
                </div>
                <div onClick={() => callCalc("÷")} className="button button--white button-fourth">
                  <div className="shading"></div>
                  <div className="button-inner">
                    <div className="button-text button-text--number button-text--bold">÷</div>
                  </div>
                </div>
              </div>
              <div className="button-row fourth-row">
                <div onClick={() => setTyping(typing+"1")} className="button button--gray button-first">
                  <div className="shading"></div>
                  <div className="button-inner">
                    <div className="button-text button-text--number">1</div>
                  </div>
                </div>
                <div onClick={() => setTyping(typing+"2")} className="button button--gray button-second">
                  <div className="shading"></div>
                  <div className="button-inner">
                    <div className="button-text button-text--number">2</div>
                  </div>
                </div>
                <div onClick={() => setTyping(typing+"3")} className="button button--gray button-third">
                  <div className="shading"></div>
                  <div className="button-inner">
                    <div className="button-text button-text--number">3</div>
                  </div>
                </div>
                <div onClick={() => callCalc("x")} className="button button--white button-fourth">
                  <div className="shading"></div>
                  <div className="button-inner">
                    <div className="button-text button-text--number button-text--bold">x</div>
                  </div>
                </div>
              </div>
              <div className="button-row fifth-row">
                <div onClick={() => setTyping(typing+"0")} className="button button--gray button-first">
                  <div className="shading"></div>
                  <div className="button-inner">
                    <div className="button-text button-text--number">0</div>
                  </div>
                </div>
                <div className="button button--gray button-second">
                  <div className="shading"></div>
                  <div className="button-inner">
                    <div className="button-text button-text--number">.</div>
                  </div>
                </div>
                <div onClick={() => callCalc("=")} className="button button--white button-fourth">
                  <div className="shading"></div>
                  <div className="button-inner">
                    <div className="button-text button-text--number ">=</div>
                  </div>
                </div>
                <div onClick={() => callCalc("+")} className="button button--white button-fourth">
                  <div className="shading"></div>
                  <div className="button-inner">
                    <div className="button-text button-text--number button-text--bold">+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


  )
}
