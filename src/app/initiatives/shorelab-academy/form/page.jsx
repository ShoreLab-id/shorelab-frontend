import { poppins, oxygen } from "@/templates/font";

const TextInputComponent = ({ label, type, name, placeholder, children }) => {
  return (
    <div className="flex flex-col py-3">
      <label className='text-[27px] text-teal-secondary after:content-["*"] after:text-danger-500'>
        {label}
      </label>
      <input
        required
        placeholder={placeholder}
        type={type}
        className={
          oxygen +
          "text-[20px] py-3 px-6 rounded-lg border-2 border-teal-secondary transition-colors focus:border-foam-tertiary focus:outline-none text-primary-dark"
        }
      />
      <p className={oxygen + "text-[20px] text-primary-dark"}>{children}</p>
    </div>
  );
};

const TextAreaInputComponent = ({ label, name, placeholder }) => {
  return (
    <div className="flex flex-col py-3">
      <label className="text-[27px] text-teal-secondary">{label}</label>
      <textarea
        placeholder={placeholder}
        className={
          oxygen +
          "text-[20px] py-3 px-6 rounded-lg border-2 border-teal-secondary transition-colors text-primary-dark min-h-48 max-h-48 focus:border-foam-tertiary focus:outline-none"
        }
      />
    </div>
  );
};

const SLAcademyForm = () => {
  return (
    <div className="w-full flex justify-center py-20">
      <div className="w-[90%] max-w-[1300px] h-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2
            className={
              poppins +
              "text-[27px] font-semibold text-teal-secondary text-center"
            }
          >
            REGISTRATION FORM
          </h2>
          <h1
            className={
              poppins +
              "text-[84px] font-semibold text-primary-dark text-center"
            }
          >
            ShoreLab Academy
          </h1>
        </div>
        <div>
          <p className={oxygen + "text-[36px] text-primary-dark"}>
            Thank you for your interest in ShoreLab Academy. Kindly fill in your
            details, and we will get in touch with you soon with more
            information. Thank you!
          </p>
          <form className="pt-10">
            <TextInputComponent
              placeholder="Registered Email"
              label="Email"
              type="email"
            >
              Enter you email used for login to ShoreLab. Don&apos;t have any?{" "}
              <a href="/register" className="font-semibold underline">
                Create Account
              </a>
              .
            </TextInputComponent>
            <TextInputComponent
              label="Phone"
              type="number"
              placeholder="Phone/WA Number"
            />
            <TextInputComponent
              label="University"
              type="text"
              placeholder="University Name"
            >
              Please enter your complete university name. For example:
              Universitas Gadjah Mada
            </TextInputComponent>
            <TextInputComponent
              label="Student Email"
              type="email"
              placeholder="Student University Email"
            />
            <TextInputComponent
              label="Faculty"
              type="text"
              placeholder="Faculty Name"
            >
              Please enter your complete faculty name. For example: Fakultas
              Teknik
            </TextInputComponent>
            <TextInputComponent
              label="Semester"
              type="number"
              placeholder="Current Semester"
            />
            <TextAreaInputComponent
              label="Expectations"
              type="textarea"
              placeholder="What are your expectations of this program. Tell us what do you want to achieve through the project"
            />
            <div className="w-1/5 pt-6">
              <button
                type="submit"
                className={
                  oxygen +
                  "bg-salmon-accent text-absolute-white hover:bg-[#FF8F84] active:bg-[#D65448] transition-colors w-full py-4 px-8 text-lg rounded-lg"
                }
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SLAcademyForm;
