import * as React from 'react';

import Heading from '../../src/General/Heading';

import { PrimaryColor, SecondaryColor, Greyscale, Divider } from '../../src';

const deprecatedColors = [
  'ivory: #FFFAEA',
  'lighterblack: #AAAAAA',
  'lightergrey: #EEEEEE',
  'blue: #0869C2',
  'darkerblue: #027EB7',
  'lightgreen: #EEF6F4',
  'lightorange: #FFF6E8',
  'lightred: #FFF2F3',
  'lightblue: #D6F4FF',
  'darkblue: #004b68',
];

const movedColors = [
  'white: #FFFFFF',
  'whitesmoke: #F3F3F3',
  'black: #000000',
  'lightblack: #777777',
  'grey: #777777',
  'darkgrey: #777777',
  'lightgrey: #C6C6C6',
];

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
          {
            "import { PrimaryColor, SecondaryColor, Greyscale } from 'glints-aries'"
          }
        </code>
      </p>
    </div>
    <div style={{ marginBottom: '2em' }}>
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
        Primary Color
      </Heading>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ColoredSquare
          bgColor={PrimaryColor.glintsyellow}
          fontColor="black"
          name="PrimaryColor.glintsyellow"
        />
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
      </div>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
        Secondary Color
      </Heading>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ColoredSquare
          bgColor={SecondaryColor.actionblue}
          fontColor="white"
          name="SecondaryColor.actionblue"
        />
        <ColoredSquare
          bgColor={SecondaryColor.green}
          fontColor="white"
          name="SecondaryColor.green"
        />
        <ColoredSquare
          bgColor={SecondaryColor.darkgreen}
          fontColor="white"
          name="SecondaryColor.darkgreen"
        />
        <ColoredSquare
          bgColor={SecondaryColor.magenta}
          fontColor="white"
          name="SecondaryColor.magenta"
        />
        <ColoredSquare
          bgColor={SecondaryColor.violet}
          fontColor="white"
          name="SecondaryColor.violet"
        />
        <ColoredSquare
          bgColor={SecondaryColor.orange}
          fontColor="black"
          name="SecondaryColor.orange"
        />
      </div>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
        Greyscale
      </Heading>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ColoredSquare
          bgColor={Greyscale.black}
          fontColor="white"
          name="Greyscale.black"
        />
        <ColoredSquare
          bgColor={Greyscale.grey}
          fontColor="white"
          name="Greyscale.grey"
        />
        <ColoredSquare
          bgColor={Greyscale.lightgrey}
          fontColor="black"
          name="Greyscale.lightgrey"
        />
        <ColoredSquare
          bgColor={Greyscale.softgrey}
          fontColor="black"
          name="Greyscale.softgrey"
        />
        <ColoredSquare
          bgColor={Greyscale.white}
          fontColor="black"
          name="Greyscale.white"
        />
      </div>
    </div>

    <Divider />

    <div style={{ marginBottom: '2em', paddingTop: '2em', fontSize: '16px' }}>
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
        Deprecated Colors
      </Heading>
      The following changes were made to <code>SecondaryColor</code> in
      v4.0.0-beta.38. Currently, using any of the properties below will still
      work. However, the changes will go into effect shortly after we refactor
      out all uses of them in our codebases so please avoid using them
      altogether.
      <h4 style={{ marginTop: '1em' }}>Deprecated colors:</h4>
      {deprecatedColors.map(color => (
        <React.Fragment>
          {color}
          <br />
        </React.Fragment>
      ))}
      <h4 style={{ marginTop: '1em' }}>Renamed Colors:</h4>
      <code>purplepizza</code> renamed to <code>magenta</code>
      <br />
      <code>bluegem</code> renamed to <code>violet</code>
      <br />
      <h4 style={{ marginTop: '1em' }}>
        Moved to <code>Greyscale</code>
      </h4>
      {movedColors.map(color => (
        <React.Fragment>
          {color}
          <br />
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default ColorStory;
