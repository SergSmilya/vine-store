import { useState } from "react"
import AdultVerify from "../components/AdultVerify/AdultVerify"
import SecWineDish from "../components/SecWineDish";
import AboutSec from "../components/AboutSec";

export default function HomePage() {
  const [adultModalIsShow, setAdultModalIsShow] = useState(true);

  return (
    <>
      {adultModalIsShow ? <AdultVerify isOpen={adultModalIsShow} handleChangeModalShow={setAdultModalIsShow} /> :
        <>
          <SecWineDish />
          <AboutSec />
        </>
      }
    </>
  )
}