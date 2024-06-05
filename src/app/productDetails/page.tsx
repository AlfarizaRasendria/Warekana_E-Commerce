import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css';
import StarRating from '../components/StarRating';

const productDetails = () => {
    return (
        <div className='content d-flex flex-columns justify-content-center align-items-center'>
            <div className='row my-4 gap-5'>
                <div className={`${styles.foodWrapperDetails} col-6 d-flex justify-content-center align-items-center`}>
                    <Image
                        src={`/hotdog.svg`}
                        width={446}
                        height={315}
                        alt="Picture of the hotdog"
                        className='imageAsset rounded p-0'
                    />
                </div>

                <div className='d-flex justify-content-start col-5 align-items-start flex-column'>
                    <h4>Hotdog Paling Nikmat</h4>
                    <div className='d-flex justify-content-between align-items-center gap-2 mb-2'>
                        <div className='d-flex justify-content-center align-items-center gap-2 pe-2 brThick'>
                            <StarRating count={5} />
                            <p className='m-0'>(150 Reviews)</p>
                        </div>
                        <p className='greenLight m-0'>In Stock</p>
                    </div>
                    <p>$192.00</p>
                    <p className='bbThick pb-2'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                    <div className='d-flex align-items-center gap-2'>
                        <div className='d-flex'>
                            <button type='button' className={`${styles.favoriteIconWrapper} btn nonRounded d-flex justify-content-center align-items-center border border-dark bg-white`}>
                                <Image width={24} height={24} src={`./icon-minus.svg`} alt="Minus Icon"></Image>
                            </button>
                            <p className={`${styles.favoriteIconWrapper} d-flex justify-content-center align-items-center border border-dark bg-white m-0`}>2</p>
                            <button type='button' className={`${styles.favoriteIconWrapper} btn btn-danger nonRounded d-flex justify-content-center align-items-center border border-dark bg-danger`}>
                                <Image width={24} height={24} src={`./icon-plus.svg`} alt="Plus Icon"></Image>
                            </button>
                        </div>
                        <button type="button" className="btn btn-danger px-5">Buy Now</button>
                        <button type='button' className={`${styles.favoriteIconWrapper} d-flex justify-content-center align-items-center border border-dark bg-white`}>
                            <Image src={`./Favorite.svg`} width={20} height={17.5} alt="Favorite Icon"></Image>
                        </button>
                    </div>
                </div>
                <div className='d-flex justify-content-start align-items-center mt-5 gap-3'>
                    <Image src={`./relatedItemsIcon.svg`} alt="relatedItemIcon" width={20} height={40}></Image>
                    <h2>Related Items</h2>
                </div>
                <div className='row gap-5 justify-content-between align-items-start mt-4'>
                    <div className="card catalog col-3">
                        <Image src={"/hotdog.svg"} className="card-img-top" width={223}
                            height={173} alt="..."></Image>
                        <div className="card-body">
                            <h5 className="card-title">Hotdog</h5>
                            <div className="d-flex gap-2">
                                <p className="m-0">$120</p>
                                <p className="m-0 striketrough">$120</p>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <StarRating count={5} />
                                <p className='m-0'>(75)</p>
                            </div>
                        </div>
                    </div>
                    <div className="card catalog col-3">
                        <Image src={"/hotdog.svg"} className="card-img-top" width={223}
                            height={173} alt="..."></Image>

                        <div className="card-body">
                            <h5 className="card-title">Hotdog</h5>
                            <div className="d-flex gap-2">
                                <p className="m-0">$120</p>
                                <p className="m-0 striketrough">$120</p>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <StarRating count={5} />
                                <p className='m-0'>(75)</p>
                            </div>
                        </div>
                    </div>
                    <div className="card catalog col-3">
                        <Image src={"/hotdog.svg"} className="card-img-top" width={223}
                            height={173} alt="..."></Image>
                        <div className="card-body">
                            <h5 className="card-title">Hotdog</h5>
                            <div className="d-flex gap-2">
                                <p className="m-0">$120</p>
                                <p className="m-0 striketrough">$120</p>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <StarRating count={5} />
                                <p className='m-0'>(75)</p>
                            </div>
                        </div>
                    </div>
                    <div className="card catalog col-3">
                        <Image src={"/hotdog.svg"} className="card-img-top" width={223}
                            height={173} alt="..."></Image>
                        <div className="card-body">
                            <h5 className="card-title">Hotdog</h5>
                            <div className="d-flex gap-2">
                                <p className="m-0">$120</p>
                                <p className="m-0 striketrough">$120</p>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <StarRating count={5} />
                                <p className='m-0'>(75)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default productDetails