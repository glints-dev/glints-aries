import React from 'react';
import Stats from './../src/Stats';

const StatsStory = () => {
  return (
    <div className="doc-mainbar">
      <h1>Glints Text</h1>
      <br/>

      <Stats
        caption="we have help"
        number={"300.000"}
        description="Young Professionals To Discover Their Dream Careers"
        suffix="+"
      />

      <br/>
      <br/>
      <br/>

      <h1>usage</h1>
      <pre>{`import { Stats } from 'glints-aries';

<Stats
  caption="we have help"
  number='300.000'
  description="Young Professionals To Discover Their Dream Careers"
  suffix="+"
/>`}</pre>
    </div>
  );
}

export default StatsStory;
