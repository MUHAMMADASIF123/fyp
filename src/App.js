import React from "react";
import "./App.css";
import { Route, Routes, Redirect } from "react-router-dom";

import RegisterUser from "./Components/RegisterUser";
import Login from "./Components/Login";
import AdminLogin from "./Components/Admin_side/AdminLogin";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/About/AboutUs";
import Administration from "./Components/Administration";
import Admin from "./Components/Admin_side/Admin";

import RegistrationForm from "./Components/RegistrationForm";
import Home from "./Components/Home";

import Footer from "./Components/Footer";
import Intermediate from "./Components/Programs/Intermediate_Programs/Intermediate";
import Bscs from "./Components/Programs/Bechelor/BsCS/Bscs";
import BsBotany from "./Components/Programs/Bechelor/Bs_Botany/BsBotany";
import Bschemistry from "./Components/Programs/Bechelor/BsChemistry/Bschemistry";
import BsPhysics from "./Components/Programs/Bechelor/Bs_Physics/BsPhysics";
import BsStatistic from "./Components/Programs/Bechelor/Bs_Statistic/BsStatistic";
import BsIslamiat from "./Components/Programs/Bechelor/Bs_Islamiat/BsIslamiat";
import Bacholer_programs_list from "./Components/Programs/Bechelor/Bacholer_programs_list";
import PostGraduate from "./Components/Programs/Post_Graduate/PostGraduate";
import BsPoliticalScience from "./Components/Programs/Bechelor/Bs_PoliticalScience/BsPoliticalScience";
import BsZoology from "./Components/Programs/Bechelor/Bs_Zoology/BsZoology";
import BsEducation from "./Components/Programs/Bechelor/Bs_Education/BsEducation";
import BsMath from "./Components/Programs/Bechelor/Bs_Math/BsMath";
import BBA_ from "./Components/Programs/Bechelor/BBA/BBA_";
import BsEnglish from "./Components/Programs/Bechelor/Bs_English/BsEnglish";

import BsSociology from "./Components/Programs/Bechelor/Bs_Sociology/BsSociology";
import BsEconomics from "./Components/Programs/Bechelor/Bs_Economics/BsEconomics";
import BsMass_Communication from "./Components/Programs/Bechelor/Bs_Mass_Communication/BsMass_Communication";
import BsUrdu from "./Components/Programs/Bechelor/Bs_Urdu/BsUrdu";
import ComputerScience from "./Components/Departments/Computer_Science/ComputerScience";
import Chemistry_ from "./Components/Departments/Chemistry/Chemistry_";
import Zoology_ from "./Components/Departments/Zoology/Zoology_";
import Physics_ from "./Components/Departments/Physics/Physics_";
import Mathematics_ from "./Components/Departments/Mathematics/Mathematics_";
import Economics_ from "./Components/Departments/Economics/Economics_";
import Islamiyat_ from "./Components/Departments/Islamiyat/Islamiyat_";
import BBA from "./Components/Departments/BBA_Department/BBA";
import MassCom from "./Components/Departments/MassCom_Department/MassCom";
import Sociology from "./Components/Departments/Sociology_Department/Sociology";
import Botany from "./Components/Departments/Botany_Department/Botany";
import Education from "./Components/Departments/Education_Department/Education";
import English from "./Components/Departments/English_Department/English";
import Urdu from "./Components/Departments/Urdu_Department/Urdu";
import Statistics from "./Components/Departments/Statistics_Department/Statistics";
import PoliticalScience from "./Components/Departments/PoliticalScience_Department/PoliticalScience";

import StudentView from "./Components/Student/StudentView";
import StudentEdit from "./Components/Student/StudentEdit";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Student/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/registeruser" element={<RegisterUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        {/* <Route path='/Admin' element={<Admin />} /> */}
        {/* <Route path='/navbar' element={<Navbar />} /> */}
        <Route path="/Administration" element={<Administration />} />
        <Route path="/apply" element={<RegistrationForm />} />
        <Route path="/edit/:id" element={<StudentEdit />} />
        <Route path="/intermediate" element={<Intermediate />} />
        <Route path="/PostGraduate" element={<PostGraduate />} />
        <Route path="/bscs" element={<Bscs />} />
        <Route path="/Bschemistry" element={<Bschemistry />} />
        <Route
          path="/Bacholer_programs_list"
          element={<Bacholer_programs_list />}
        />
        <Route path="/BsPhysics" element={<BsPhysics />} />
        <Route path="/BsStatistic" element={<BsStatistic />} />
        <Route path="/BsPoliticalScience" element={<BsPoliticalScience />} />
        <Route path="/BsBotany" element={<BsBotany />} />
        <Route path="/BsIslamiat" element={<BsIslamiat />} />
        <Route path="/BsZoology" element={<BsZoology />} />
        <Route path="/BsEducation" element={<BsEducation />} />
        <Route path="/BsMath" element={<BsMath />} />
        <Route path="/BsEnglish" element={<BsEnglish />} />
        <Route path="/BsSociology" element={<BsSociology />} />
        <Route path="/BBA_" element={<BBA_ />} />
        <Route path="/BsEconomics" element={<BsEconomics />} />
        <Route
          path="/BsMass_Communication"
          element={<BsMass_Communication />}
        />
        <Route path="/BsUrdu" element={<BsUrdu />} />
        <Route path="/ComputerScience" element={<ComputerScience />} />
        <Route path="/Chemistry_" element={<Chemistry_ />} />
        <Route path="/Zoology_" element={<Zoology_ />} />
        <Route path="/Physics_" element={<Physics_ />} />
        <Route path="/Mathematics_" element={<Mathematics_ />} />
        <Route path="/Economics_" element={<Economics_ />} />
        <Route path="/Islamiyat_" element={<Islamiyat_ />} />
        <Route path="/BBA" element={<BBA />} />
        <Route path="/MassCom" element={<MassCom />} />
        <Route path="/Sociology" element={<Sociology />} />
        <Route path="/Botany" element={<Botany />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Urdu" element={<Urdu />} />
        <Route path="/English" element={<English />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/StudentView/:id" element={<StudentView />} />
        <Route path="/StudentEdit/:id" element={<StudentEdit />} />
        <Route path="/PoliticalScience" element={<PoliticalScience />} />
        <Route path="/Statistics" element={<Statistics />} />

        <Route path="/adminlogin" element={<AdminLogin />} />
      </Routes>
      {/* <Redirect to='/' /> */}
      <Footer />
    </div>
  );
}

export default App;
