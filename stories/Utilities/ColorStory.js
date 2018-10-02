import React from 'react';
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

    <table className="doc-table">
      <thead>
        <tr style={{ borderBottom: '1px solid lightgrey' }}>
          <th colSpan="3">
            <h3>
                Primary Color
            </h3>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div
              style={{
                width: '150px', height: '150px', backgroundColor: `${PrimaryColor.glintsred}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
              }}
            />
            <code style={{ display: 'flex', justifyContent: 'center' }}>
                PrimaryColor.glintsred
            </code>
          </td>
          <td>
            <div
              style={{
                width: '150px', height: '150px', backgroundColor: `${PrimaryColor.glintsblue}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
              }}
            />
            <code style={{ display: 'flex', justifyContent: 'center' }}>
                PrimaryColor.glintsblue
            </code>
          </td>
          <td>
            <div
              style={{
                width: '150px', height: '150px', backgroundColor: `${PrimaryColor.glintsyellow}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
              }}
            />
            <code style={{ display: 'flex', justifyContent: 'center' }}>
                PrimaryColor.glintsyellow
            </code>
          </td>
        </tr>
      </tbody>
    </table>

    <table className="doc-table">
      <thead>
        <tr style={{ borderBottom: '1px solid lightgrey' }}>
          <th colSpan="3">
            <h3>
                Secondary Color
            </h3>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div
              style={{
                width: '150px', height: '150px', backgroundColor: `${SecondaryColor.white}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
              }}
            />
            <code style={{ display: 'flex', justifyContent: 'center' }}>
                SecondaryColor.white
            </code>
          </td>
          <td>
            <div
              style={{
                width: '150px', height: '150px', backgroundColor: `${SecondaryColor.whitesmoke}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
              }}
            />
            <code style={{ display: 'flex', justifyContent: 'center' }}>
                SecondaryColor.whitesmoke
            </code>
          </td>
          <td>
            <div
              style={{
                width: '150px', height: '150px', backgroundColor: `${SecondaryColor.grey}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
              }}
            />
            <code style={{ display: 'flex', justifyContent: 'center' }}>
                SecondaryColor.grey
            </code>
          </td>
        </tr>
        <tr>
          <td>
            <div
              style={{
                width: '150px', height: '150px', backgroundColor: `${SecondaryColor.lightgrey}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
              }}
            />
            <code style={{ display: 'flex', justifyContent: 'center' }}>
                SecondaryColor.lightgrey
            </code>
          </td>
          <td>
            <div
              style={{
                width: '150px', height: '150px', backgroundColor: `${SecondaryColor.black}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
              }}
            />
            <code style={{ display: 'flex', justifyContent: 'center' }}>
                SecondaryColor.black
            </code>
          </td>
          <td>
            <div
              style={{
                width: '150px', height: '150px', backgroundColor: `${SecondaryColor.lightblack}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
              }}
            />
            <code style={{ display: 'flex', justifyContent: 'center' }}>
                SecondaryColor.lightblack
            </code>
          </td>
        </tr>
        <tr>
          <td>
            <div
              style={{
                width: '150px', height: '150px', backgroundColor: `${SecondaryColor.blue}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
              }}
            />
            <code style={{ display: 'flex', justifyContent: 'center' }}>
                SecondaryColor.blue
            </code>
          </td>
          <td>
            <div
              style={{
                width: '150px', height: '150px', backgroundColor: `${SecondaryColor.bluegem}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
              }}
            />
            <code style={{ display: 'flex', justifyContent: 'center' }}>
                SecondaryColor.bluegem
            </code>
          </td>
          <td>
            <div
              style={{
                width: '150px', height: '150px', backgroundColor: `${SecondaryColor.buttercup}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
              }}
            />
            <code style={{ display: 'flex', justifyContent: 'center' }}>
                SecondaryColor.buttercup
            </code>
          </td>
        </tr>
        <tr>
          <td colSpan="3">
            <div
              style={{
                width: '150px', height: '150px', backgroundColor: `${SecondaryColor.purplepizza}`, margin: '2em auto', boxShadow: '0 6px 10px 0 rgba(0,0,0,0.15)',
              }}
            />
            <code style={{ display: 'flex', justifyContent: 'center' }}>
                SecondaryColor.purplepizza
            </code>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default ColorStory;
