
import {Quote} from '../components/Quote'
import { Auth } from '../components/Auth'
export const Signin = () => {
  return (
    <div className='grid  lg:grid-cols-2 grid-cols-1'>
      <div className='flex flex-col justify-center '>
      <Auth type="signin" />
      </div>

        <div className='hidden lg:block'>
        <Quote />
        </div>
        

    </div>
  )
}

