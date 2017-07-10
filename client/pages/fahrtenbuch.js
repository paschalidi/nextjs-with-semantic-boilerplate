/**
 *
 * fahrtenbuch
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';

import 'isomorphic-fetch';

import * as contentful from 'contentful';
import {
  SPACE_ID,
  ACCESS_TOKEN,
  HEADER_ENTRY_ID,
  TRUST_CHAIN_ID,
  HARDWARE_SECTION_ID,
  SOFTWARE_SECTION_ID,
  EXPORT_SECTION_ID,
} from '../contentful/fahrtenbuch';

import Layout from '../components/Layout/index';
import Single from '../components/Single';
import TrustChain from '../components/TrustChain';
import SectionTop from '../components/SectionTop';
import SectionBottom from '../components/SectionBottom';

class Fahrtenbuch extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static async getInitialProps() {
    const client = contentful.createClient({ space: SPACE_ID, accessToken: ACCESS_TOKEN });
    const res = await client.getEntries();

    return {
      contentful: {
        res,
        entry: res.includes.Entry,
        asset: res.includes.Asset,
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      entries: props.contentful.entry,
      assets: props.contentful.asset,
      isLoading: true,
    };
  }

  componentWillMount() {
    const { entries, assets } = this.state;

    Object.keys(entries).map(async (entryKey) => {
      const {
        title,
        subtitle,
        sectionTitle,
        anchor,

        image,
        image02,

        trustIcon,
        trustIcon01,
        trustIcon02,
      } = entries[entryKey].fields;

      switch (entries[entryKey].sys.id) {
        case HEADER_ENTRY_ID:
          const imageUrl = this.getImageUrlFromAssets(assets, image.sys.id);
          const imageUrl02 = this.getImageUrlFromAssets(assets, image02.sys.id);
          this.setState({
            header: {
              title,
              imageLeft: imageUrl,
              imageRight: imageUrl02,
            },
          });
          break;
        case TRUST_CHAIN_ID:
          const trustIconUrl = this.getImageUrlFromAssets(assets, trustIcon.sys.id);
          const trustIconUrl01 = this.getImageUrlFromAssets(assets, trustIcon01.sys.id);
          const trustIconUrl02 = this.getImageUrlFromAssets(assets, trustIcon02.sys.id);
          const trustIconUrls = [trustIconUrl, trustIconUrl01, trustIconUrl02]
          this.setState({
            trustChain: {
              title,
              imageArray: trustIconUrls,
            },
          });
          break;
        case HARDWARE_SECTION_ID:
          this.setState({
            sectionHardware: {
              sectionTitle,
              title,
              imageArray: ["http://placehold.it/200x50", "http://placehold.it/200x50"],
            },
          });
          break;
        case SOFTWARE_SECTION_ID:
          this.setState({
            sectionSoftware: {
              sectionTitle,
              title,
              subtitle,
            },
          });
          break;
        case EXPORT_SECTION_ID:
          this.setState({
            sectionExport: {
              sectionTitle,
              title,
              subtitle,
              anchor,
            },
          });
          break;

        default:
          return;
      }
    });
    this.setState({ isLoading: false });
  }

  getImageUrlFromAssets(assets, id) {
    const theAsset = Object.entries(assets).find((asset) => asset[1].sys.id === id);
    return `https:${theAsset[1].fields.file.url}`;
  }

  render() {
    const {
      header,
      trustChain,
      sectionHardware,
      sectionSoftware,
      sectionExport,
    } = this.state;


    console.log("header")
    console.log(header)

    return (
      <Layout title="Fahrtenbuch">
        <style jsx>{``}</style>
        <Single hasNoContainer hasColorPrime hasDoubleImage contentfulData={header} />
        <TrustChain hasColorPrime contentfulData={trustChain} />
        <section>
          <SectionTop contentfulData={sectionHardware} />
          <SectionBottom />
        </section>

        <section>
          <SectionTop contentfulData={sectionSoftware} />
          <SectionBottom />
        </section>

        <section>
          <SectionTop contentfulData={sectionExport} />
          <SectionBottom />
        </section>
      </Layout>
    );
  }
}

export default withRedux(initStore)(Fahrtenbuch);
