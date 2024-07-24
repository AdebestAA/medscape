import Image from 'next/image'
import Demographics from './Infos/Demographics'
import Visits from './Infos/Visits'
import Test from './Infos/Test'
import Diagnoses from './Infos/Diagnoses'
import Orders from './Infos/Orders'
import "./PatientProfile.css"
import { IoClose } from "react-icons/io5";
import { useContext } from 'react'
import { FunctionalityContext } from '@/FunctionalilyContext'


const PatientProfile = () => {
const {showPatientProfile,
setShowPatientProfile} = useContext(FunctionalityContext)


  return (
    <div className={showPatientProfile ? "patient-profile show-patient" : "patient-profile hide-patient"}>
      <div className={"container-patient-profile-btn"}>
      <h1 className='patient-profile-small-screen'>PATIENT PROFILE</h1>
<button className='close-patient-profile-btn' onClick={()=> {
  setShowPatientProfile(false)
  }}><IoClose/></button>
      </div>
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






