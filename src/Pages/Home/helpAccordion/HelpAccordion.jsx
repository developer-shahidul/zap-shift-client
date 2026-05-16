import { MdArrowOutward } from "react-icons/md";

const HelpAccordion = () => {
  return (
    <div className="my-25">
      <div className="mb-10 text-center lg:max-w-208 mx-auto">
        <h2 className="text-[40px] font-extrabold text-[#03373D] mb-6">
          Frequently Asked Question (FAQ)
        </h2>

        <p className="text-[#606060]">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <div className="space-y-4 mb-10">
        {/* Accordion 1 */}
        <div className="collapse collapse-arrow border border-base-300 bg-white shadow-2xl has-[input:checked]:bg-[#067A87] has-[input:checked]:text-white">
          <input type="radio" name="faq-accordion" defaultChecked />

          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>

          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>
        {/* Accordion 2 */}
        <div className="collapse collapse-arrow border border-base-300 bg-white shadow-2xl has-[input:checked]:bg-[#067A87] has-[input:checked]:text-white">
          <input type="radio" name="faq-accordion" />

          <div className="collapse-title font-semibold">
            I forgot my password. What should I do?
          </div>

          <div className="collapse-content text-sm">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>
        {/* Accordion 3 */}
        <div className="collapse collapse-arrow border border-base-300 bg-white shadow-2xl has-[input:checked]:bg-[#067A87] has-[input:checked]:text-white">
          <input type="radio" name="faq-accordion" />

          <div className="collapse-title font-semibold">
            How do I update my profile information?
          </div>

          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
        {/* Accordion 4 */}
        <div className="collapse collapse-arrow border border-base-300 bg-white shadow-2xl has-[input:checked]:bg-[#067A87] has-[input:checked]:text-white">
          <input type="radio" name="faq-accordion" />

          <div className="collapse-title font-semibold">
            How do I update my profile information?
          </div>

          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>{" "}
        {/* Accordion 5*/}
        <div className="collapse collapse-arrow border border-base-300 bg-white shadow-2xl has-[input:checked]:bg-[#067A87] has-[input:checked]:text-white">
          <input type="radio" name="faq-accordion" />

          <div className="collapse-title font-semibold">
            How do I update my profile information?
          </div>

          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
        {/* Accordion 6 */}
        <div className="collapse collapse-arrow border border-base-300 bg-white shadow-2xl has-[input:checked]:bg-[#067A87] has-[input:checked]:text-white">
          <input type="radio" name="faq-accordion" />

          <div className="collapse-title font-semibold">
            How does this posture corrector work?
          </div>

          <div className="collapse-content text-sm">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="btn bg-[#CAEB66] rounded-[100px] px-8 py-4">
          Track Your Parcel
        </button>
        <button className="rounded-full h-11 w-11 flex items-center justify-center  bg-black text-[#CAEB66] text-xl">
          <MdArrowOutward />
        </button>
      </div>
    </div>
  );
};

export default HelpAccordion;
