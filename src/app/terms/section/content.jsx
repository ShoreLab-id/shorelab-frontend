import SectionHeading from "@/templates/heading";
import React from "react";

const Content = () => {
  return (
    <div className="bg-inherit py-8 px-8 text-justify max-w-prose">
      <SectionHeading
        sub={"Official ShoreLabs Terms and Conditions"}
      ></SectionHeading>
      <div className="space-y-4">
        <section>
          <h2 className="text-2xl text-teal-secondary font-bold">
            1. Introduction
          </h2>
          <p className="text-secondary-white">
            ShoreLabs is dedicated to the conservation of maritime life,
            aligning with Sustainable Development Goals (SDGs) and continuing
            the legacy of COREMAP-CTI. We aim to address the economic and
            environmental impact of maritime conservation, including the hidden
            target to help Indonesia have an effective maritime management. Our
            vision is to lead the charge against maritime threats and to inspire
            global change.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-teal-secondary font-bold">
            2. Partnerships
          </h2>
          <p className="text-secondary-white">
            ShoreLabs is open to partnerships with various entities, including
            educational institutions, companies, and research organizations.
            Partners are expected to uphold the moral and ethical standards of
            ShoreLabs, particularly in the preservation of the maritime
            environment. Financial contributions are highly encouraged to
            support our projects. Universities partnering with ShoreLabs and
            enrolling their students in ShoreLabs Academy must provide detailed
            data about each student, including their academic background and
            motivations for joining. Partners must also ensure their activities
            do not harm the maritime environment, as this would contradict the
            very essence of our mission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-teal-secondary font-bold">
            3. ShoreLabs Academy
          </h2>
          <p className="text-secondary-white">
            ShoreLabs Academy offers a comprehensive education in maritime
            science and conservation. Participation is open to students
            registered with ShoreLabs or those enrolled through partner
            institutions. All data provided must be verified prior to
            participation. Participants must adhere to the highest standards of
            academic integrity and follow all safety protocols. Any breaches
            will result in immediate consequences, which may include removal
            from the program and notification of their home institution.
            Repeated breaches by students from the same institution will result
            in penalties for the partner institution.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-teal-secondary font-bold">
            4. Intellectual Property
          </h2>
          <p className="text-secondary-white">
            All research, data, and intellectual property generated under
            ShoreLabs projects are the exclusive property of ShoreLabs. Partners
            and participants are encouraged to voice their concerns and opinions
            regarding intellectual property, but the final decision rests with
            ShoreLabs. Disputes will be handled with a heavy emphasis on
            protecting ShoreLabs&apos; interests, with flexibility in the choice of
            resolution methods.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-teal-secondary font-bold">
            5. Data Protection and Privacy
          </h2>
          <p className="text-secondary-white">
            ShoreLabs collects minimal personal data necessary for participation
            and operation, including name, email, and login credentials. For
            those joining ShoreLabs Academy, additional information such as
            university affiliation, contact details, and academic information
            will be collected. ShoreLabs is committed to safeguarding this data
            and will implement stringent security measures. In the event of a
            data breach, ShoreLabs will advise all affected individuals to
            change their passwords and will upgrade security measures. While
            ShoreLabs will take all reasonable steps to protect data,
            participants are also responsible for their own digital safety.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-teal-secondary font-bold">
            6. Financial Contributions
          </h2>
          <p className="text-secondary-white">
            ShoreLabs welcomes financial contributions from partners and
            supporters. Transparency in financial operations is a priority, and
            partners may request reports on how their contributions are used.
            Regular auditing will occur on a monthly basis, although this may
            vary depending on operational needs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-teal-secondary font-bold">
            7. Liability and Insurance
          </h2>
          <p className="text-secondary-white">
            Participants in ShoreLabs projects, including ShoreLabs Academy, are
            aware of the inherent risks associated with maritime work and travel
            to research sites. ShoreLabs is not liable for any injuries,
            damages, or losses incurred during participation. Participants are
            encouraged to obtain their own insurance coverage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-teal-secondary font-bold">
            8. Termination
          </h2>
          <p className="text-secondary-white">
            ShoreLabs reserves the right to terminate partnerships or
            participation in its projects if there are severe or repeated
            breaches of contract, or if a partner&apos;s continued involvement is
            deemed detrimental to ShoreLabs&apos; mission. Termination may also occur
            if a partner decides to withdraw or if their actions are found to be
            in conflict with the future of ShoreLabs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-teal-secondary font-bold">
            9. Compliance and Ethics
          </h2>
          <p className="text-secondary-white">
            All participants and partners are required to adhere to strict
            ethical guidelines that align with ShoreLabs&apos; mission and vision.
            This includes compliance with environmental regulations,
            sustainability practices, and research ethics. Failure to comply
            will result in immediate consequences, including potential legal
            action.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-teal-secondary font-bold">
            10. Amendments and Updates
          </h2>
          <p className="text-secondary-white">
            These Terms and Conditions will be reviewed and updated quarterly,
            or sooner if potential issues are identified. Participants and
            partners will be formally notified of any changes, and continued
            involvement with ShoreLabs will constitute acceptance of the revised
            terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-teal-secondary font-bold">
            11. Governing Law
          </h2>
          <p className="text-secondary-white">
            These Terms and Conditions are governed by the laws of [Your
            Jurisdiction]. Disputes arising under these terms will be resolved
            through mediation or arbitration, conducted in [Your Jurisdiction],
            with an emphasis on professional and fair handling of all issues.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-teal-secondary font-bold">
            12. Miscellaneous
          </h2>
          <p className="text-secondary-white">
            If any provision of these Terms and Conditions is found to be
            invalid or unenforceable, the remaining provisions shall remain in
            full force and effect. These terms constitute the entire agreement
            between ShoreLabs and its participants/partners, superseding any
            prior agreements or understandings.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Content;
