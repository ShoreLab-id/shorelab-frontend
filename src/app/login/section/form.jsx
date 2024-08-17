import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "@/templates/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/templates/EyeSlashFilledIcon";
import { ButtonPrimary, ButtonSecondary } from "@/templates/buttons";
import SectionHeading from "@/templates/heading";
import { FaGoogle } from "react-icons/fa";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center w-screen">
      <div></div>
      <div className="py-8 px-6 w-3/5 shadow rounded-lg sm:px-10 bg-absolute-white">
        <div className="text-center">
          <SectionHeading sub={"WELCOME BACK!"} title={"Sign In"} />
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <Input
              id="email"
              name="email"
              label="Username/Email"
              type="email"
              variant="bordered"
              autoComplete="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
            />
            <Input
              id="password"
              name="password"
              variant="bordered"
              label="Password"
              type={isVisible ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              endContent={
                <button
                  type="button"
                  onClick={() => setIsVisible(!isVisible)}
                  className="focus:outline-none"
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div>
              <a
                href="/forgotpass"
                className="font-medium text-primary-dark hover:text-teal-secondary"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <ButtonPrimary width="full" size="lg" onClick={handleSubmit}>
              Sign In
            </ButtonPrimary>
          </div>

          <div className="text-center mt-6">
            <div className="flex justify-center mt-4">
              <ButtonSecondary
                width="full"
                size="lg"
                onClick={() => console.log("Google login")}
              >
                <div className="flex items-center justify-center gap-4 w-full">
                  <FaGoogle className="text-4xl" />
                  <span>Login with Google</span>
                </div>
              </ButtonSecondary>
            </div>
            <p className="mt-2 text-md text-gray-600">
              Don&apos;t have an account?{" "}
              <a
                href="/register"
                className="font-medium text-primary-dark hover:text-teal-secondary"
              >
                Sign up
              </a>
            </p>
          </div>

          <div className="text-center mt-6">
            <a
              href="/terms"
              target="_blank"
              className="text-xs font-medium text-blue-600 hover:text-blue-500"
            >
              Terms and Conditions
            </a>
            {" | "}
            <a
              href="/privacy"
              target="_blank"
              className="text-xs font-medium text-blue-600 hover:text-blue-500"
            >
              Privacy Policy
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
