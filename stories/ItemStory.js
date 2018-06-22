import React from 'react';
import Item from './../src/Item';

const ItemStory = () => {
  return (
    <div className="doc-mainbar">
      <div style={{width: '100%', border: '1px solid #000', padding: '20px'}}>
        <Item
          title="item title"
          subtitle="subtitle"
          url="https://glints.id"
          imgUrl="https://placeimg.com/64/64/any"
          isExternal={false}
          isReactRouter={true}
        />
      </div>
    </div>
  );
}

export default ItemStory;