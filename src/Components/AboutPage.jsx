const AboutPage = () => {
  const handleContact = () => {
    const url =
      "https://mail.google.com/mail/?view=cm&fs=1&to=ndcvillegas03@gmail.com&su=Let's Work Together&body=Hi, I'd love to discuss a project with you.";

    try {
      window.open(url, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Email client failed to open:", error);
      window.location.href =
        "mailto:ndcvillegas03@gmail.com?subject=Let's Work Together&body=Hi, I'd love to discuss a project with you.";
    }
  };

  // Vite-safe path: works on localhost AND if deployed to a subfolder
  const resumeHref = `${import.meta.env.BASE_URL}RESUME_VILLEGAS.pdf`;

  return (
    <>
      <section className="px-10 py-20 text-center relative">
        <div className="relative z-10">
          <p className="font-Moderniz text-4xl md:text-7xl xl:text-8xl text-black leading-tight">
            Delivering originality with a refined touch to strengthen your online
            presence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10 relative z-20">
            <button
              onClick={handleContact}
              className="relative z-30 text-black border-2 border-black rounded-2xl px-8 py-4 hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 transform cursor-pointer inline-block font-medium"
              aria-label="Send email to Nykel Villegas"
              type="button"
              style={{ pointerEvents: "auto" }}
            >
              Contact
            </button>

            <a
              href={resumeHref}
              download="./RESUME_VILLEGAS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-30 text-white border-2 border-black rounded-2xl px-8 py-4 bg-black hover:bg-gray-800 hover:border-gray-800 transition-all duration-300 hover:scale-105 transform cursor-pointer inline-block font-medium"
              aria-label="Download Nykel Villegas Resume PDF"
              style={{ pointerEvents: "auto" }}
            >
              Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
