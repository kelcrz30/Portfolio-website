const AboutPage = () => {
  const handleResumeDownload = () => {
    try {
      const link = document.createElement('a');
      link.href = './RESUME_VILLEGAS.pdf';
      link.download = 'RESUME_VILLEGAS.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      
      document.body.appendChild(link);
      
      link.click();
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);
    } catch (error) {
      console.error('Resume download failed:', error);

      window.open('./RESUME_VILLEGAS.pdf', '_blank', 'noopener,noreferrer');
    }
  };

  const handleContact = () => {
    try {
      window.open(
        'https://mail.google.com/mail/?view=cm&fs=1&to=ndcvillegas03@gmail.com&su=Let\'s Work Together&body=Hi, I\'d love to discuss a project with you.',
        '_blank',
        'noopener,noreferrer'
      );
    } catch (error) {
      console.error('Email client failed to open:', error);
  
      window.location.href = 'mailto:ndcvillegas03@gmail.com?subject=Let\'s Work Together&body=Hi, I\'d love to discuss a project with you.';
    }
  };

  return (
    <>
      <section className="px-10 py-20 text-center relative">
        <div className="relative z-10">
          <p className="font-Moderniz text-4xl md:text-7xl xl:text-8xl text-black leading-tight">
            Delivering originality with a refined touch to strengthen your online presence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10 relative z-20">
            <button
              onClick={handleContact}
              className="relative z-30 text-black border-2 border-black rounded-2xl px-8 py-4 hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 transform cursor-pointer inline-block font-medium"
              aria-label="Send email to Nykel Villegas"
              type="button"
              style={{ pointerEvents: 'auto' }}
            >
              Contact
            </button>
            <button
              onClick={handleResumeDownload}
              className="relative z-30 text-white border-2 border-black rounded-2xl px-8 py-4 bg-black hover:bg-gray-800 hover:border-gray-800 transition-all duration-300 hover:scale-105 transform cursor-pointer inline-block font-medium"
              aria-label="Download Nykel Villegas Resume PDF"
              type="button"
              style={{ pointerEvents: 'auto' }}
            >
              Resume
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;