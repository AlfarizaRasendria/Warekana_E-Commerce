import React from 'react'
import Image from 'next/image'


const checkout = () => {
    return (
        <div className='content row py-5'>
            {/* Billing Details */}
            <div className='d-flex justify-content-center flex-column align-items-start col-6'>
                <h4 className='mb-5'>Billing Details</h4>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
                        <input type="text" className="form-control formControl" id="formGroupExampleInput" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Street Address</label>
                        <input type="text" className="form-control formControl" id="formGroupExampleInput2" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Apartment, floor, etc</label>
                        <input type="text" className="form-control formControl" id="formGroupExampleInput2" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Town/City</label>
                        <input type="text" className="form-control formControl" id="formGroupExampleInput2" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Phone Number</label>
                        <input type="text" className="form-control formControl" id="formGroupExampleInput2" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Email Address</label>
                        <input type="text" className="form-control formControl" id="formGroupExampleInput2" />
                    </div>
                </form>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">
                        Save this information for faster check-out next time
                    </label>
                </div>
            </div>

            <div className='d-flex justify-content-start flex-column col-6'>

                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-center align-items-center gap-5'>
                        <Image
                            src={`/italian_pasta.svg`}
                            width={150}
                            height={150}
                            alt="Picture of the pasta"
                            className='imageAsset rounded'
                        />
                        <p>Italian Pasta</p>
                    </div>
                    <p>$650</p>
                </div>

                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-center align-items-center gap-5'>
                        <Image
                            src={`/italian_pasta.svg`}
                            width={150}
                            height={150}
                            alt="Picture of the pasta"
                            className='imageAsset rounded'
                        />
                        <p>Italian Pasta</p>
                    </div>
                    <p>$650</p>
                </div>

                <div className="d-flex justify-content-between border-bottom bbThick">
                    <p>Subtotal:</p>
                    <p>$1750</p>
                </div>

                <div className="d-flex justify-content-between border-bottom bbThick">
                    <p>Shipping:</p>
                    <p>Free</p>
                </div>

                <div className="d-flex justify-content-between border-bottom bbThick">
                    <p>Total:</p>
                    <p>$1750</p>
                </div>

                <form action="" className='mt-4'>
                    <div className="col-12">
                        <div className="row mb-3">
                            <div className="col-6"> 
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="Bank" />
                                    <label className="form-check-label" htmlFor="gridRadios1">
                                        Bank
                                    </label>
                                </div>
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="Cod" />
                                    <label className="form-check-label" htmlFor="gridRadios2">
                                        Cash on delivery
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-danger">Submit</button>
                            </div>
                            <Image
                                src={`/listPaymentMethod.svg`}
                                width={100}
                                height={50}
                                alt="Picture of the pasta"
                                className='imageAsset rounded col-5 p-0'
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default checkout