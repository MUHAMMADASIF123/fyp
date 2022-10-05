import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import {
  Addpost,
  Editpost,
  Postlist,
  RegisterUser,
  Login,
  ContactUs,
  AboutUs,
  Administration,
  Newheader,
  RegistrationForm,
  Home,
  Footer,
  Intermediate,
  Bscs,
  BsBotany,
  Bschemistry,
  BsPhysics,
  BsStatistic,
  BsIslamiat,
  Bacholer_programs_list,
  PostGraduate,
  BsPoliticalScience,
  BsZoology,
  BsEducation,
  BsMath,
  BBA_,
  BsEnglish,
  BsSociology,
  BsEconomics,
  BsMass_Communication,
  BsUrdu,
  ComputerScience,
  Chemistry_,
  Zoology_,
  Physics_,
  Mathematics_,
  Economics_,
  Islamiyat_,
  BBA,
  MassCom,
  Sociology,
  Botany,
  Education,
  English,
  Urdu,
  Statistics,
  PoliticalScience,
  Admin,
  StudentView,
  Studentprofile,
} from './exports'

function App() {
  return (
    <Suspense
      fallback={
        <div>
          <h1>ok</h1>
        </div>
      }
    >
      <div className='App'>
        <Newheader />
        <Routes>
          {/* //laskdlk /asdjhkasx ,asldkh */}
          {/* <Route path="/" element={<Newheader/>}/> */}
          <Route path='/' element={<Home />} />
          <Route path='/addpost' element={<Addpost />} />
          <Route
            path='/editpost/:postid'
            element={<Editpost />}
          />
          <Route
            path='/registeruser'
            element={<RegisterUser />}
          />
          <Route path='/login' element={<Login />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/Admin' element={<Admin />} />
          <Route
            path='/Administration'
            element={<Administration />}
          />
          <Route path='/apply' element={<RegistrationForm />} />
          <Route
            path='/intermediate'
            element={<Intermediate />}
          />
          <Route
            path='/PostGraduate'
            element={<PostGraduate />}
          />
          <Route path='/bscs' element={<Bscs />} />
          <Route path='/Bschemistry' element={<Bschemistry />} />
          <Route
            path='/Bacholer_programs_list'
            element={<Bacholer_programs_list />}
          />
          <Route path='/BsPhysics' element={<BsPhysics />} />
          <Route path='/BsStatistic' element={<BsStatistic />} />
          <Route
            path='/BsPoliticalScience'
            element={<BsPoliticalScience />}
          />
          <Route path='/BsBotany' element={<BsBotany />} />
          <Route path='/BsIslamiat' element={<BsIslamiat />} />
          <Route path='/BsZoology' element={<BsZoology />} />
          <Route path='/BsEducation' element={<BsEducation />} />
          <Route path='/BsMath' element={<BsMath />} />
          <Route path='/BsEnglish' element={<BsEnglish />} />
          <Route path='/BsSociology' element={<BsSociology />} />
          <Route path='/BBA_' element={<BBA_ />} />
          <Route path='/BsEconomics' element={<BsEconomics />} />
          <Route
            path='/BsMass_Communication'
            element={<BsMass_Communication />}
          />
          <Route path='/BsUrdu' element={<BsUrdu />} />
          <Route
            path='/ComputerScience'
            element={<ComputerScience />}
          />
          <Route path='/Chemistry_' element={<Chemistry_ />} />
          <Route path='/Zoology_' element={<Zoology_ />} />
          <Route path='/Physics_' element={<Physics_ />} />
          <Route
            path='/Mathematics_'
            element={<Mathematics_ />}
          />
          <Route path='/Economics_' element={<Economics_ />} />
          <Route path='/Islamiyat_' element={<Islamiyat_ />} />
          <Route path='/BBA' element={<BBA />} />
          <Route path='/MassCom' element={<MassCom />} />
          <Route path='/Sociology' element={<Sociology />} />
          <Route path='/Botany' element={<Botany />} />
          <Route path='/Education' element={<Education />} />
          <Route path='/Urdu' element={<Urdu />} />
          <Route path='/English' element={<English />} />
          <Route path='/Admin' element={<Admin />} />
          <Route
            path='/StudentView/:id'
            element={<StudentView />}
          />
          <Route
            path='/Studentprofile'
            element={<Studentprofile />}
          />
          <Route
            path='/PoliticalScience'
            element={<PoliticalScience />}
          />
          <Route path='/Statistics' element={<Statistics />} />

          {/* <Route path='/footer' element={<Footer/>}/> */}
        </Routes>
        {/* <Redirect to='/' /> */}
        <Footer />
      </div>
    </Suspense>
  )
}

export default App
