import React from 'react'
import Header from '../components/Header'

const View = () => {
  return (
    <>
      <Header />
      <div style={{paddingTop:'150px'}} className='flex flex-col mx-5 '>
        <div className='grid grid-cols-2 item-center h-screen'>
          <img width={'450px'} height={'200px'} src="https://thumbs.dreamstime.com/z/full-grocery-cart-35581724.jpg" alt="" />
          <div>
            <h3 className='font-bold'>PID : id</h3>
            <h1 className='text-5xl font-bold'>Product Name</h1>
            <h4 className='font-bold text-red-600 text-2xl'>$ 250</h4>
            <h4>Brand : brand</h4>
            <h4>Category : categroy</h4>
            <p>
              <span className='font-bold'>Descrpition</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem autem est molestias non repellat provident perspiciatis animi exercitationem expedita, error soluta nesciunt libero perferendis tempore sit nulla mollitia fuga dolore!
              <div className='flex justify-between mt-5'>
                <button className='bg-blue-600 text-white p-2'>Add to wishlist</button>
                <button className='bg-green-600 text-white p-2'>Add to cart</button>

              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default View