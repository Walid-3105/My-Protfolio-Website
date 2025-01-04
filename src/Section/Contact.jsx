import React, { useRef } from "react";
import hand from "../assets/hand.jpg";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6skbish", "template_lewbdjn", form.current, {
        publicKey: "tn4vwxhbqIVW88KqG",
      })
      .then(
        () => {
          toast.success("Email Send Successfully");
          form.current.reset();
        },
        (error) => {
          toast.error("FAILED...");
        }
      );
  };
  return (
    <div>
      <div id="contact" className="py-12 ">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Contact Me
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Contact Information */}
          <div className="card w-full md:w-1/3 bg-base-200 shadow-md">
            <div className="card-body">
              <img className="rounded-lg" src={hand} alt="" />
              <ul className="">
                <li className="flex items-center text-white">
                  Syed Abdullah Al Walid
                </li>
                <li className="mb-3">Frontend Developer</li>
                <li className="mb-3">
                  I am available for Remote,Hybrid & On-Site Work. Connect with
                  me.
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-400 mr-4">
                    email:{" "}
                  </span>
                  <a
                    href="mailto:saawalid03@gmail.com"
                    className="text-white hover:text-blue-500 "
                  >
                    saawalid03@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-gray-400 mr-4">
                    phone:
                  </span>
                  <a
                    href="tel:+8801533818315"
                    className="text-white hover:text-blue-500"
                  >
                    +880 1533818315
                  </a>
                </li>
                <li className="mt-3">Find Me In</li>
                <li className="flex gap-2 mt-1">
                  <Link
                    to={
                      "https://www.linkedin.com/in/syed-abdullah-al-walid-2b23a6332/"
                    }
                    target="_blank"
                  >
                    <FaLinkedin size={15}></FaLinkedin>
                  </Link>
                  <Link
                    to={"https://www.facebook.com/sa.al.walid.2024"}
                    target="_blank"
                  >
                    <FaFacebook size={15}></FaFacebook>
                  </Link>
                  <Link
                    to={"https://www.instagram.com/saawalid_3105/"}
                    target="_blank"
                  >
                    <FaInstagram size={15}></FaInstagram>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card w-full md:w-1/2 bg-base-100 shadow-md">
            <div className="card-body">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-control mb-4">
                  <label htmlFor="name" className="label">
                    <span className="label-text text-gray-600">Name</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    placeholder="Enter your name"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control mb-4">
                  <label htmlFor="email" className="label">
                    <span className="label-text text-gray-600">Email</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control mb-4">
                  <label htmlFor="message" className="label">
                    <span className="label-text text-gray-600">Message</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Write your message here"
                    className="textarea textarea-bordered w-full"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
