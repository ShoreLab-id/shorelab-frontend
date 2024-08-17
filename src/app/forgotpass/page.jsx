"use client";

import React, { useState } from "react";
import { ButtonPrimary } from "@/templates/buttons";
import { Input } from "@nextui-org/react";
import SectionHeading from "@/templates/heading";
import { oxygen } from "@/templates/font";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-primary-dark text-white">
      <div className="max-w-fit w-[720px] px-8 py-10 bg-black rounded-lg shadow-lg text-center">
        <SectionHeading
          sub={"OH NO!"}
          title={"Forgot Your Generic Password? That Fast??"}
        />

        {!submitted ? (
          <>
            <p className={oxygen + "mt-4 text-md text-gray-300"}>
              Oh well, it happens to the best of us, right? No it doesn&apos;t.
              Anyway, enter your email below, and we&apos;ll pretend we can send
              you a password reset link. No, seriously, we will. Probably.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <Input
                id="email"
                name="email"
                type="email"
                label="Your Email"
                variant="bordered"
                autoComplete="email"
                placeholder="Where can we spam you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
              />
              <ButtonPrimary width="full" size="lg">
                Send Me Help!
              </ButtonPrimary>
            </form>
          </>
        ) : (
          <div className="mt-4">
            <p className="text-sm text-gray-300">
              Great! We&apos;ve sent you a password reset link. If you
              don&apos;t see it, check your spam folder. If it&apos;s not there
              either, then well... maybe it&apos;s time to embrace the chaos and
              just create a new account? Skill-issue much?
            </p>
            <ButtonPrimary
              width="full"
              size="lg"
              onClick={() => setSubmitted(false)}
              className="mt-6"
            >
              Try Again?
            </ButtonPrimary>
          </div>
        )}

        <div className="mt-6">
          <p className="text-xl text-gray-400">
            Remembered your password suddenly? I thought that was impossible for
            you. Oh, well,{" "}
            <a
              href="/login"
              className="font-medium text-primary-dark hover:text-teal-secondary"
            >
              back to Login page, I guess.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
