import * as React from 'react';

import Heading from '../../src/General/Heading';

import { PrimaryColor, SecondaryColor } from '../../src/Style/Colors';

const ColoredSquare = ({ bgColor, fontColor, name }) => (
  <div style={{ margin: '1em', flex: '1 20%' }}>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '150px',
        height: '150px',
        margin: '2em auto',
        backgroundColor: bgColor,
        fontSize: '18px',
        fontWeight: 'bold',
        color: fontColor,
        boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
      }}
    >
      {bgColor}
    </div>
    <code style={{ display: 'flex', justifyContent: 'center' }}>{name}</code>
  </div>
);

const ColorStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>Colors</h1>
      <p>
        <code>
          {"import { PrimaryColor, SecondaryColor } from 'glints-aries'"}
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
        Primary Color
      </Heading>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ColoredSquare
          bgColor={PrimaryColor.glintsred}
          fontColor="white"
          name="PrimaryColor.glintsred"
        />
        <ColoredSquare
          bgColor={PrimaryColor.glintsblue}
          fontColor="white"
          name="PrimaryColor.glintsblue"
        />
        <ColoredSquare
          bgColor={PrimaryColor.glintsyellow}
          fontColor="black"
          name="PrimaryColor.glintsyellow"
        />
      </div>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
        Secondary Color
      </Heading>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ColoredSquare
          bgColor={SecondaryColor.white}
          fontColor="black"
          name="SecondaryColor.white"
        />

        <ColoredSquare
          bgColor={SecondaryColor.whitesmoke}
          fontColor="black"
          name="SecondaryColor.whitesmoke"
        />

        <ColoredSquare
          bgColor={SecondaryColor.ivory}
          fontColor="black"
          name="SecondaryColor.ivory"
        />

        <ColoredSquare
          bgColor={SecondaryColor.black}
          fontColor="white"
          name="SecondaryColor.black"
        />

        <ColoredSquare
          bgColor={SecondaryColor.lighterblack}
          fontColor="white"
          name="SecondaryColor.lighterblack"
        />

        <ColoredSquare
          bgColor={SecondaryColor.grey}
          fontColor="white"
          name="SecondaryColor.grey"
        />

        <ColoredSquare
          bgColor={SecondaryColor.lightgrey}
          fontColor="black"
          name="SecondaryColor.lightgrey"
        />
        <ColoredSquare
          bgColor={SecondaryColor.lightergrey}
          fontColor="black"
          name="SecondaryColor.lightergrey"
        />
        <ColoredSquare
          bgColor={SecondaryColor.purplepizza}
          fontColor="white"
          name="SecondaryColor.purplepizza"
        />
        <ColoredSquare
          bgColor={SecondaryColor.blue}
          fontColor="white"
          name="SecondaryColor.blue"
        />
        <ColoredSquare
          bgColor={SecondaryColor.actionblue}
          fontColor="white"
          name="SecondaryColor.actionblue"
        />
        <ColoredSquare
          bgColor={SecondaryColor.bluegem}
          fontColor="white"
          name="SecondaryColor.bluegem"
        />
        <ColoredSquare
          bgColor={SecondaryColor.green}
          fontColor="white"
          name="SecondaryColor.green"
        />
        <ColoredSquare
          bgColor={SecondaryColor.lightgreen}
          fontColor="black"
          name="SecondaryColor.lightgreen"
        />
        <ColoredSquare
          bgColor={SecondaryColor.orange}
          fontColor="black"
          name="SecondaryColor.orange"
        />
      </div>
    </div>
  </div>
);

export default ColorStory;
