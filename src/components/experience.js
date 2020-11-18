import React from 'react';

const Experience = ({ data }) => (
  <section>
    <h1 className="section-header">Experience</h1>
    {data &&
      data.map((item, i) => (
        <article className="my-5 text-black" key={`${item.company}-${i}`}>
          <h2 className="item-header text-black">{item.role}</h2>
          <h3 className="item-sub text-black">
            {item.company} | {item.start} - {item.end || 'PRESENT'}
          </h3>
          <p className="py-6 text-black">{item.description}</p>
        </article>
      ))}
  </section>
);

export default Experience;
