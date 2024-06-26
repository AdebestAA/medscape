import Image from 'next/image'
import Demographics from './Infos/Demographics'
import Visits from './Infos/Visits'
import Test from './Infos/Test'
import Diagnoses from './Infos/Diagnoses'
import Orders from './Infos/Orders'
import "./PatientProfile.css"


const PatientProfile = () => {
  return (
    <div className='patient-profile'>
      <div className='image-div'>
        <div className='inner-image-div'>
          <div className='image-div-position'>
        <figure className='relative w-[150px] h-[150px] rounded-full border-[2px] border-[blue]'>
            <Image src={"/model.jpg"} fill className='rounded-full object-cover' alt='model'/>
        </figure>
          </div>
        </div>
      </div>

      <header className='header'>
        <h5 className='header-heading'>Lisa T</h5>
        <p className='header-prgrph'>I have swelling in my abdomen and legs, and I&apos;ve barely urinated in the last 2 days.</p>
      </header>

      <div className='user-info-section'>
<nav className='nav'>
    <button>Demographics</button>
    <button>Visits</button>
    <button>Tests</button>
    <button>Diagnoses</button>
    <button>Orders</button>
</nav>

<section className='all-info-container'>
<Demographics/>
<Visits/>
<Test/>
<Diagnoses/>
<Orders/>
</section>
      </div>
    </div>
  )
}

export default PatientProfile






