import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid';
import { Book } from '../../images';


import { useLocation } from 'react-router-dom'

const product = {
    name: 'Everyday Ruck Snack',
    href: '#',
    price: '$220',
    description:
        "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg',
    imageAlt: 'Model wearing light green backpack with black canvas straps and front zipper pouch.',
    breadcrumbs: [
        { id: 1, name: 'Travel', href: '#' },
        { id: 2, name: 'Bags', href: '#' },
    ],
    sizes: [
        { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
        { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function BookDetail() {
    const location = useLocation()
    const { book } = location.state
    return (
        <div className="bg-white h-screen">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                {/* Product details */}
                <div className="lg:max-w-lg lg:self-end">
                    <div className="mt-4">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{book.title}</h1>
                    </div>
                    <section aria-labelledby="information-heading" className="mt-4">
                        <h2 id="information-heading" className="sr-only">
                            {book.title}
                        </h2>
                        <div className="mt-2 space-y-6 ml-8 mb-3">
                            <p className="text-base text-gray-500">{book.description}</p>
                        </div>

                        <div className="flex items-center">
                            <div className="ml-4  border-gray-300 pl-4">
                                <h2>Reviews</h2>
                                {
                                    book.reviews.map((review) =>
                                        <div className='flex flex-col bg-white mt-3 shadow-lg p-5'>
                                            <div className="flex items-center">
                                                <div>
                                                    <div className="flex items-center">
                                                        {[0, 1, 2, 3, 4].map((rating) => (
                                                            <StarIcon
                                                                key={rating}
                                                                className={classNames(
                                                                    review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                                                    'h-5 w-5 flex-shrink-0'
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                        ))}
                                                    </div>
                                                  
                                                </div>
                                                
                                            </div>
                                            <div className='pt-1'>
                                                <p>{review.comment}</p>
                                            </div>

                                        </div>)
                                }


                            </div>
                        </div>

                       

                    </section>
                </div>

                {/* Product image */}
                <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                        <img src={Book} alt={'place holder'} className="h-full w-full object-cover object-center" />
                    </div>
                </div>

                {/* Product form */}
                <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
                    <section aria-labelledby="options-heading">


                        <form>
                            <div className="mt-10">
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                >
                                    Add review
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    )
}
