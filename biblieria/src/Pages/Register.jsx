import React from 'react'

export default function Register() {
  return (
    <>
        <div className='container w-50 position-absolute top-50 start-50 translate-middle bg-dark text-white p-5 rounded' data-bs-theme="dark" >
            <div className='row' >
                        <h2 className='text-center mb-5' >
                            Register
                        </h2>
                    <form className='w-75 position-relative top-0 start-50 translate-middle-x' >
                    <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="text" className="form-control" name='name' id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name='password' className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" name='check' className="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-secondary">Register</button>
                    </form>
            </div>
        </div>
    </>
  )
}
