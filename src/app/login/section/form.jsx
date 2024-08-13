import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "@/templates/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/templates/EyeSlashFilledIcon";
import { ButtonPrimary } from "@/templates/buttons";
import SectionHeading from "@/templates/heading";

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
    <div className="w-2/5 bg-secondary-white py-8 px-6 shadow rounded-lg sm:px-10">
      <div className="text-center">
        <SectionHeading sub={"WELCOME BACK!"} title={"Sign In"} />
        <p className="mt-2 text-sm text-gray-600">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign up
          </a>
        </p>
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
              href="/forgot-password"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <ButtonPrimary width="full" size="lg" onClick={handleSubmit}>
            Login
          </ButtonPrimary>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm font-medium text-gray-600">or Login With</p>
          {/* Here you can add buttons or icons for Google, Facebook, etc. */}
          <div className="bg-black h-24 mt-2"></div>{" "}
          {/* Placeholder for other login methods */}
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
  );
};

export default LoginForm;
