import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";

const Contact = () => {

  return (
    <section id="contact" className="w-full bg-gradient-to-b from-white to-gray-100 py-16">
      <div className="flex flex-col max-w-[1200px] w-11/12 items-center mt-10 mx-auto space-y-10 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold">Get In Touch</h1>
        <p className="text-gray-600 max-w-[700px] mx-auto text-sm sm:text-base">
          Have a project in mind? I'd love to hear about it. Feel free to reach out using the contact information below.
        </p>
      </div>

      {/* Main Section */}
      <div className="flex flex-col w-full items-center">
        {/* Contact Info */}
        <div className="flex flex-col space-y-6 w-full max-w-md">
          <p className="font-semibold text-gray-700 text-lg">Get in touch</p>

          <div className="space-y-5">
            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="bg-gray-200 text-black p-3 rounded-md text-xl">
                <MdOutlineEmail />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <p className="text-md font-medium break-words">pateriyaji27@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="bg-gray-200 text-black p-3 rounded-md text-xl">
                <LuPhone />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Phone</p>
                <p className="text-md font-medium">+91 7804900019</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="bg-gray-200 text-black p-3 rounded-md text-xl">
                <CiLocationOn />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Location</p>
                <p className="text-md font-medium">Hyderabad (Telangana)</p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div>
            <p className="font-semibold mb-2">Follow me</p>
            <div className="flex gap-3 flex-wrap">
              <a href="https://github.com/Pateriya27" target="_blank" rel="noreferrer"
                className="p-3 text-2xl bg-gray-200 rounded-md hover:bg-black hover:text-white transition">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/harshit-pateriya27/" target="_blank" rel="noreferrer"
                className="p-3 text-2xl bg-gray-200 rounded-md hover:bg-black hover:text-white transition">
                <FiLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Contact;