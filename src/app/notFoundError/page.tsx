import React from 'react'
import styles from './styles.module.css';
import Link from 'next/link';

const notFoundError = () => {
  return (
    <div className={`d-flex justify-content-center align-items-center flex-column gap-3 ${styles.selectorTest}`}>
        <h1 className={styles.red}>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <button type="button" className={`${styles.buttonHome} btn btn-danger `}>
            <Link href="/account" className='undercorateLink text-white'>Back to home page</Link>
        </button> 
    </div> 
  )
}

export default notFoundError