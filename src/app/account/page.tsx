import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const account = () => {
    return (
        <div className='content row py-5'>
            {/* Manage Left Side bar */}
            <div className={`${styles.leftBarContainer} d-flex justify-content-start align-items-start flex-column gap-2 col-md-2`}>
                <div>
                    <h4 className='mb-4'>Manage My Account</h4>
                    <p className={`${styles.red}`}>My Profile</p>
                    <Link href='/topUp' className='undercorateLink text-black'><p>Topup</p></Link>
                    <Link href='/withdraw' className='undercorateLink text-black'><p>Withdraw</p></Link>
                </div>
                <Link href="" className='mb-4 align-self-start text-dark undercorateLink'><h4 >My Wishlist</h4></Link>
                <Link href="" className='mb-4 align-self-start text-dark undercorateLink'><h4>My Cart</h4></Link>
            </div>

            {/* Manage Right Side bar */}
            <div className='d-flex justify-content-center align-items-center flex-column gap-5 ms-3 col-md-9'>
                <h4 className='align-self-start'>Edit Your Profile</h4>
                <div>
                    <form className="row g-3 gap-3">
                        <div className="col-md-6">
                            <label htmlFor="inputName" className="form-label">Name</label>
                            <input type="email" className="form-control formControl" id="inputName" placeholder="CakUser"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail" className="form-label">Email</label>
                            <input type="text" className="form-control formControl" id="inputEmail" placeholder="Cak123@gmail.com"/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="Address" className="form-label">Address</label>
                            <input id="Address" className="form-control formControl" placeholder="Kenjeran Street, Surabaya">
                            </input>
                        </div>
                        <div className="col-md-6 d-flex flex-column gap-4">
                            <label htmlFor="currentPassword" className="form-label">Password</label>
                            <input type="password" className="form-control formControl" id="currentPassword" required placeholder="Current Password"/>
                            <input type="password" className="form-control formControl" id="newPassword" required placeholder="New Password"/>
                            <input type="password" className="form-control formControl" id="confirmNewPassword" required placeholder="Confirm New Password"/>
                        </div>
                        <div className="col-12 d-flex flex-row justify-content-end align-items-center gap-5 mt-5">
                            <Link href="/Home" className="undercorateLink text-black">Cancel</Link>
                            <button type="submit" className="btn btn-danger p-3">Save Changes</button>
                        </div>
                    </form>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default account