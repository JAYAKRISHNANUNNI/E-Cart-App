import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'250px', marginTop:'100px',}} className='mt-5 w-full bg-blue-600 text-white p-4'>
      <div className='flex justify-between p-4'>
        <div style={{width:'400px'}} className='intro'>
          <h5 className='test-xl font-bold'><i class="fa-solid fa-truck-fast"></i>E-Cart</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, optio laboriosam, numquam porro voluptates ipsa veritatis maiores corporis tempore reprehenderit voluptatem deleniti temporibus dignissimos deserunt et. Dolores quos voluptas veritatis.</p>
          <p>Code licensed by Luminar, doc CC by 3.0.</p>
          <p>Currently v5.3.2.</p>
        </div>
        <div className='flex flex-col'>
        <h5 className='text-xl font-bold'>Links</h5>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Landing Page</Link>
          <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>Home Page</Link>
          <Link to={'/history'} style={{ textDecoration: 'none', color: 'white' }}>History Page</Link>

        </div>
        <div className='flex flex-col'>
        <h5 className='text-xl font-bold'>Guides</h5>
          <a href="https://react.dev/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>React</a>
          <a href="https://react-bootstrap.github.io/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>React Bootsrap</a>
          <a href="https://reactrouter.com/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>React Router</a>


        </div>
        <div className='flex flex-col'>
        <h5 className='text-xl font-bold'>Contact Us</h5>
          <div className='flex'>
            <input type="text" placeholder='Enter your email here..' className='form-control me-2' />
            <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
          </div>
          {/* icons */}
          <div className='flex justify-content-between mt-3 '>
            <a href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-brands fa-twitter pe-4"></i></a>
            <a href="https://www.instagram.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-instagram pe-4"></i></a>
            <a href="https://www.facebook.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-facebook pe-4"></i></a>
            <a href="https://in.linkedin.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-linkedin pe-4"></i></a>
            <a href="https://github.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-github pe-4"></i></a>
            <a href="https://github.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-solid fa-phone"></i></a>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Footer