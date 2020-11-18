import React from 'react';


const Summary = ({ data }) => (
  <section className="border-b border-neutral-300 lg:flex items-center">
    <div className="my-5">
      <img
        className="mx-auto w-32 lg:w-full xl:w-2/5 object-fill	 "
        src="pro.jpg"
        alt="pro"
      />
    </div>
    <p className="text-center tracking-wide leading-relaxed lg:text-left lg:mx-8 lg:text-lg">
      {data}
    </p>
  </section>
);

export default Summary;
