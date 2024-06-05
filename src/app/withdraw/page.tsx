import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

const withdrawPage = () => {
  return (
    <div className='content row justify-content-center align-items-start gap-5'>
      <div className={`${styles.warekanaPayWrapper} d-flex flex-column align-items-start justify-content-center col-6 gap-2 rounded p-5`}>
        <div className='d-flex justify-content-center align-items-center gap-3'>
          <Image src={`./warekanaLogo.svg`} width={62} height={62} alt="warekana logo" />
          <Image src={`./warekanaText.svg`} width={335} height={60} alt="warekana logo" />
        </div>
        <p className={`${styles.customDescBalance} m-0`}>Available balance:</p>
        <h3>Rp 250.000</h3>
      </div>

      <div className='col-4'>
        <h4>Amount</h4>
        <div className='d-flex justify-content-between'>
          <button type='button' className={`${styles.greenInc}  d-flex justify-content-center align-items-center`}>
            <Image width={50} height={40} src={`./icon-plus.svg`} alt="Plus Icon"></Image>
          </button>
          <div className='d-flex justify-content-center align-items-center border border-dark w-75'>
            <p className='m-0'>100.000</p>
          </div>
          <button type='button' className={`${styles.greenInc}  d-flex justify-content-center align-items-center`}>
            <Image width={50} height={40} src={`./icon-minus.svg`} alt="Minus Icon" className={`${styles.whiteMinusIcon}`}></Image>
          </button>
        </div>
        <h6 className='mt-3 mb-0'>Select Payment Method</h6>
        <form action="" className='row mt-2'>
          <div className="form-check col-6">
            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" required/>
              <label className="form-check-label" htmlFor="gridRadios1">
                <Image src={"./bkash.svg"} width={45} height={20} alt="payment method image"></Image>
              </label>
          </div>
          <div className="form-check col-6">
            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" required/>
              <label className="form-check-label" htmlFor="gridRadios1">
                <Image src={"./masterCard.svg"} width={45} height={20} alt="payment method image"></Image>
              </label>
          </div>
          <div className="form-check col-6">
            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" required/>
              <label className="form-check-label" htmlFor="gridRadios1">
                <Image src={"./visa.svg"} width={45} height={20} alt="payment method image"></Image>
              </label>
          </div>
          <div className="form-check col-6">
            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" required/>
              <label className="form-check-label" htmlFor="gridRadios1">
                <Image src={"./threeOrange.svg"} width={45} height={20} alt="payment method image"></Image>
              </label>
          </div>
        <button type="submit" className={`${styles.greenInc} btn btn-primary mt-3 w-100 rounded`}>Withdraw</button>
        </form>
      </div>
    </div>
  )
}

export default withdrawPage