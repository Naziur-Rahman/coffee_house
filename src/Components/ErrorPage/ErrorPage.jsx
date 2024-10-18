import React from 'react'
import { useRouteError } from 'react-router-dom'
const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
  return (
    <div id="error-page ">
      <div className='py-20 text-center'>
        <h1 className='text-3xl font-semibold text-sky-400'>Oops!</h1>
         <div className='py-5 font-medium'>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
         </div>
      </div>
    </div>
  )
}

export default ErrorPage
