import React from 'react';
import Item from './../src/Item';

const ItemStory = () => {
  return (
    <div className="doc-mainbar">
      <div style={{width: '100%', border: '1px solid #000', padding: '20px'}}>
        <Item
          title="role name by props"
          url="javascript:void(0)"
          imgUrl="https://placeimg.com/64/64/any"
          isExternal="false"
        />
      </div>
    </div>
  );
}

export default ItemStory;