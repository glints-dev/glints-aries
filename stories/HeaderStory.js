import React from 'react';
import Header from './../src/Header';

const HeaderStory = () => {
  return (
    <div className="doc-mainbar">
      <h1>Glints Text</h1>
      <Header
        caption="we have help"
        number={"3000"}
        description="Young Professionals To Discover Their Dream Careers"
        suffix="+"
      />
    </div>
  );
}

export default HeaderStory;
