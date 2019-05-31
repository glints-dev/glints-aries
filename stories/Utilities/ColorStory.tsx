import * as React from 'react';

import Heading from '../../src/General/Heading';

import { PrimaryColor, SecondaryColor } from '../../src/Style/Colors';

const ColorStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Colors
      </h1>
      <p>
        <code>
          {'import { PrimaryColor, SecondaryColor } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>Primary Color</Heading>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ margin: '1em', flex: '1 25%' }}>
          <div
            style={{
              width: '150px', height: '150px', backgroundColor: `${PrimaryColor.glintsred}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
            }}
          />
          <code style={{ display: 'flex', justifyContent: 'center' }}>
            PrimaryColor.glintsred
          </code>
        </div>
        <div style={{ margin: '1em', flex: '1 25%' }}>
          <div
            style={{
              width: '150px', height: '150px', backgroundColor: `${PrimaryColor.glintsblue}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
            }}
          />
          <code style={{ display: 'flex', justifyContent: 'center' }}>
            PrimaryColor.glintsblue
          </code>
        </div>
        <div style={{ margin: '1em', flex: '1 25%' }}>
          <div
            style={{
              width: '150px', height: '150px', backgroundColor: `${PrimaryColor.glintsyellow}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
            }}
          />
          <code style={{ display: 'flex', justifyContent: 'center' }}>
            PrimaryColor.glintsyellow
          </code>
        </div>
      </div>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>Secondary Color</Heading>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ margin: '1em', flex: '1 20%' }}>
          <div
            style={{
              width: '150px', height: '150px', backgroundColor: `${SecondaryColor.white}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
            }}
          />
          <code style={{ display: 'flex', justifyContent: 'center' }}>
            SecondaryColor.white
          </code>
        </div>
        <div style={{ margin: '1em', flex: '1 20%' }}>
          <div
            style={{
              width: '150px', height: '150px', backgroundColor: `${SecondaryColor.whitesmoke}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
            }}
          />
          <code style={{ display: 'flex', justifyContent: 'center' }}>
            SecondaryColor.whitesmoke
          </code>
        </div>
        <div style={{ margin: '1em', flex: '1 20%' }}>
          <div
            style={{
              width: '150px', height: '150px', backgroundColor: `${SecondaryColor.ivory}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
            }}
          />
          <code style={{ display: 'flex', justifyContent: 'center' }}>
            SecondaryColor.ivory
          </code>
        </div>
        <div style={{ margin: '1em', flex: '1 20%' }}>
          <div
            style={{
              width: '150px', height: '150px', backgroundColor: `${SecondaryColor.black}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
            }}
          />
          <code style={{ display: 'flex', justifyContent: 'center' }}>
            SecondaryColor.black
          </code>
        </div>
        <div style={{ margin: '1em', flex: '1 20%' }}>
          <div
            style={{
              width: '150px', height: '150px', backgroundColor: `${SecondaryColor.lighterblack}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
            }}
          />
          <code style={{ display: 'flex', justifyContent: 'center' }}>
            SecondaryColor.lighterblack
          </code>
        </div>
        <div style={{ margin: '1em', flex: '1 20%' }}>
          <div
            style={{
              width: '150px', height: '150px', backgroundColor: `${SecondaryColor.grey}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
            }}
          />
          <code style={{ display: 'flex', justifyContent: 'center' }}>
            SecondaryColor.grey
          </code>
        </div>
        <div style={{ margin: '1em', flex: '1 20%' }}>
          <div
            style={{
              width: '150px', height: '150px', backgroundColor: `${SecondaryColor.lightgrey}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
            }}
          />
          <code style={{ display: 'flex', justifyContent: 'center' }}>
              SecondaryColor.lightgrey
          </code>
        </div>
        <div style={{ margin: '1em', flex: '1 20%' }}>
          <div
            style={{
              width: '150px', height: '150px', backgroundColor: `${SecondaryColor.lightergrey}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
            }}
          />
          <code style={{ display: 'flex', justifyContent: 'center' }}>
              SecondaryColor.lightergrey
          </code>
        </div>
        <div style={{ margin: '1em', flex: '1 20%' }}>
          <div
            style={{
              width: '150px', height: '150px', backgroundColor: `${SecondaryColor.purplepizza}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
            }}
          />
          <code style={{ display: 'flex', justifyContent: 'center' }}>
              SecondaryColor.purplepizza
          </code>
        </div>
        <div style={{ margin: '1em', flex: '1 20%' }}>
          <div
            style={{
              width: '150px', height: '150px', backgroundColor: `${SecondaryColor.blue}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
            }}
          />
          <code style={{ display: 'flex', justifyContent: 'center' }}>
              SecondaryColor.blue
          </code>
        </div>
        <div style={{ margin: '1em', flex: '1 20%' }}>
          <div
            style={{
              width: '150px', height: '150px', backgroundColor: `${SecondaryColor.actionblue}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
            }}
          />
          <code style={{ display: 'flex', justifyContent: 'center' }}>
              SecondaryColor.actionblue
          </code>
        </div>
        <div style={{ margin: '1em', flex: '1 20%' }}>
          <div
            style={{
              width: '150px', height: '150px', backgroundColor: `${SecondaryColor.bluegem}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
            }}
          />
          <code style={{ display: 'flex', justifyContent: 'center' }}>
              SecondaryColor.bluegem
          </code>
        </div>
        <div style={{ margin: '1em', flex: '1 20%' }}>
          <div
            style={{
              width: '150px', height: '150px', backgroundColor: `${SecondaryColor.green}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
            }}
          />
          <code style={{ display: 'flex', justifyContent: 'center' }}>
              SecondaryColor.green
          </code>
        </div>
        <div style={{ margin: '1em', flex: '1 20%' }}>
          <div
            style={{
              width: '150px', height: '150px', backgroundColor: `${SecondaryColor.lightgreen}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
            }}
          />
          <code style={{ display: 'flex', justifyContent: 'center' }}>
              SecondaryColor.lightgreen
          </code>
        </div>
        <div style={{ margin: '1em', flex: '1 20%' }}>
          <div
            style={{
              width: '150px', height: '150px', backgroundColor: `${SecondaryColor.orange}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
            }}
          />
          <code style={{ display: 'flex', justifyContent: 'center' }}>
              SecondaryColor.orange
          </code>
        </div>
      </div>
    </div>

  </div>
);

export default ColorStory;
