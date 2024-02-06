const NewsLetter = () => {
    return (
      <section className='container mx-auto '>
        <form className='bg-[#169ed8] dark:bg-[#2c88af] text-white  rounded-xl md:rounded-[30px] flex flex-col justify-center items-center py-6 md:py-14'>
          <p className='md:font-semibold text-lg md:text-xl text-center mb-3'>
            Would you like to know more about the Hotel and our offers?
          </p>
          <h6 className='md:font-semibold font-medium text-2xl md:text-3xl lg:text-5xl text-center'>
            Sign Up for Our Newsletters!
          </h6>
  
          <div className='flex-col justify-center w-full md:flex-row flex pt-12'>
            <input
              type='email'
              placeholder='Your email...'
              className='bg-[#0e6c94] h-11 md:h-16 mb-2 md:mb-0 rounded-xl pl-6 md:mr-5 md:w-[452px] text-white placeholder:text-white focus:outline-none'
            />
            <button type='button' className='btn-tertiary'>
              Subscribe
            </button>
          </div>
        </form>
      </section>
    );
    }
  
  export default NewsLetter;