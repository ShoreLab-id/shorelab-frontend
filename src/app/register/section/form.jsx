import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "@/templates/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/templates/EyeSlashFilledIcon";
import { ButtonPrimary } from "@/templates/buttons";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
      <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-900">
        Create your account
      </h2>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              isInvalid={!!errors.name}
              validationState={errors.name ? "invalid" : "valid"}
              errorMessage={errors.name}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              isInvalid={!!errors.email}
              validationState={errors.email ? "invalid" : "valid"}
              errorMessage={errors.email}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Input
              id="password"
              name="password"
              type={isVisible ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              isInvalid={!!errors.password}
              validationState={errors.password ? "invalid" : "valid"}
              errorMessage={errors.password}
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
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={isConfirmVisible ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              fullWidth
              isInvalid={!!errors.confirmPassword}
              validationState={errors.confirmPassword ? "invalid" : "valid"}
              errorMessage={errors.confirmPassword}
              endContent={
                <button
                  type="button"
                  onClick={() => setIsConfirmVisible(!isConfirmVisible)}
                  className="focus:outline-none"
                >
                  {isConfirmVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree to the{" "}
              <a
                href="/terms"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Terms and Conditions
              </a>
            </label>
          </div>
        </div>

        <div>
          <ButtonPrimary width="full" size="lg" onClick={handleSubmit}>
            Register
          </ButtonPrimary>
        </div>
      </form>
    </div>
  );
};

export default Form;
