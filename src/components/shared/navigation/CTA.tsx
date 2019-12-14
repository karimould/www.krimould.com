import React, { useState } from 'react'
import { useOnClickOutside } from '../../../hooks/hooks'

/*
 * ToDo: clean code up
 *
 */

interface CTAProps {
  locale: string
}

interface CTAFormProps {
  locale: string
  isClicked: boolean
  outsideClick: any
}

const CTA = ({ locale }: CTAProps): JSX.Element => {
  const [isHovered, setHoveredStatus] = useState<boolean>(false)
  const [isClicked, setClickStatus] = useState<boolean>(false)
  //for the useOnClickOutside hook
  const [isDisabled, setIsDisabled] = useState<boolean>(true)

  function openModal(): void {
    setIsDisabled(false)
    !isClicked ? setClickStatus(true) : null
  }

  const closeModal = (): void => {
    setIsDisabled(true)
    setClickStatus(false)
  }

  const outsideElement = useOnClickOutside(closeModal, isDisabled)

  return (
    <div
      className="cta-wrapper"
      onMouseOut={(): void => setHoveredStatus(false)}
      onMouseOver={(): void => setHoveredStatus(true)}
      onClick={(): void => openModal()}
    >
      {isClicked ? (
        <div className="relative">
          <div className="absolute z-10 pt-5 pl-5 cursor-pointer text-white text-2xl">
            <button onClick={(): void => closeModal()}>X</button>
          </div>
        </div>
      ) : null}
      {isHovered ? <HoverCTA locale={locale} /> : <NoHoverCTA locale={locale} />}
      {isClicked ? <ClickCTA outsideClick={outsideElement} locale={locale} isClicked={isClicked} /> : ''}
    </div>
  )
}

const NoHoverCTA = ({ locale }: CTAProps): JSX.Element => {
  return (
    <div className="hire-me">
      <p>FREE</p>
      <p>FOR</p>
      <p>FREELANCE</p>
      <p>WORK</p>
    </div>
  )
}
const HoverCTA = ({ locale }: CTAProps): JSX.Element => {
  return (
    <div className="hire-me bg-black text-white p-5 cursor-pointer">
      <p>HIRE</p>
      <p>ME</p>
    </div>
  )
}

const ClickCTA = ({ locale, isClicked, outsideClick }: CTAFormProps): JSX.Element => {
  const [animationState, setAnimationState] = useState({
    w: 0,
    h: 100,
    opacity: 0,
    animationDone: false,
  })
  let { w, h, opacity, animationDone } = animationState

  function startAnimation(): void {
    if (!animationDone) {
      setTimeout(function(): void {
        setAnimationState({ w: 500, h: 100, opacity: 0, animationDone: true })
      }, 10)
      setTimeout(function(): void {
        setAnimationState({ w: 500, h: 500, opacity: 0, animationDone: true })
      }, 2000)
      setTimeout(function(): void {
        setAnimationState({ w: 500, h: 500, opacity: 1, animationDone: true })
      }, 3500)
    }
  }

  function submitHandler(e: React.FormEvent): void {
    e.preventDefault()
  }
  isClicked ? startAnimation() : null

  return (
    <div
      className={`cta-modal-container absolute top-0 left-0 bg-black ${isClicked ? 'block' : 'hidden'}`}
      style={{ width: w, height: h }}
      ref={outsideClick}
    >
      <div className="cta-form-container relative w-full text-white" style={{ opacity: opacity }}>
        <div className="form pt-16">
          <form onSubmit={submitHandler} name="contact" method="POST" data-netlify="true">
            ><label htmlFor="fname">Name</label>
            <br />
            <input className="w-full mb-3 text-black" mb-10 type="text" id="name" name="name" />
            <br />
            <label htmlFor="fname">E-Mail</label>
            <br />
            <input className="w-full mb-3 text-black" type="email" id="email" name="email" />
            <br />
            <label htmlFor="fname">Phone</label>
            <br />
            <input className="w-full mb-3 text-black" type="phone" id="phone" name="phone" />
            <br />
            <label className="" htmlFor="text">
              Text
            </label>
            <br />
            <textarea className="w-full mb-5 text-black" id="text" name="text" />
            <br />
            <input className="p-2 w-full text-black bg-white" type="submit" value="Senden" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default CTA
