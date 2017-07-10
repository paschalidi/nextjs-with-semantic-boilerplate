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

  TOP_HARDWARE_SECTION_ID,
  MIDDLE_HARDWARE_SECTION_ID,
  BOTTOM_HARDWARE_SECTION_ID,

  TOP_SOFTWARE_SECTION_ID,
  MIDDLE_SOFTWARE_SECTION_ID,
  BOTTOM_SOFTWARE_SECTION_ID,

  TOP_EXPORT_SECTION_ID,
  MIDDLE_EXPORT_SECTION_ID,
} from '../contentful/fahrtenbuch';

import Layout from '../components/Layout/index';
import Single from '../components/Single';
import TrustChain from '../components/TrustChain';
import SectionTop from '../components/SectionTop';
import SectionMiddle from '../components/SectionMiddle';
import SectionBottom from '../components/SectionBottom';
import { Grid } from 'semantic-ui-react';

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
        paragraph,
        listContent,

        buttonText,
        anchor,
        anchor01,

        image,
        image02,
        imageMobile,

        trustIcon,
        trustIcon01,
        trustIcon02,
      } = entries[entryKey].fields;

      switch (entries[entryKey].sys.id) {
        case HEADER_ENTRY_ID:
          const imageUrl = this.getImageUrlFromAssets(assets, image.sys.id);
          const imageUrl02 = this.getImageUrlFromAssets(assets, image02.sys.id);
          const imageUrlMobile = this.getImageUrlFromAssets(assets, imageMobile.sys.id);
          console.log("imageUrlMobile")
          console.log(imageUrlMobile)
          this.setState({
            header: {
              title,
              imageLeft: imageUrl,
              imageRight: imageUrl02,
              image: imageUrlMobile,
            },
          });
          break;
        case TRUST_CHAIN_ID:
          const trustIconUrl = this.getImageUrlFromAssets(assets, trustIcon.sys.id);
          const trustIconUrl01 = this.getImageUrlFromAssets(assets, trustIcon01.sys.id);
          const trustIconUrl02 = this.getImageUrlFromAssets(assets, trustIcon02.sys.id);
          const trustIconUrls = [trustIconUrl, trustIconUrl01, trustIconUrl02, "http://placehold.it/200x50"]
          this.setState({
            trustChain: {
              title,
              imageArray: trustIconUrls,
            },
          });
          break;

        ///HARDWARE
        case TOP_HARDWARE_SECTION_ID:
          this.setState({
            topSectionHardware: {
              sectionTitle,
              title,
              imageArray: ["http://placehold.it/200x50", "http://placehold.it/200x50"],
            },
          });
          break;
        case MIDDLE_HARDWARE_SECTION_ID:
          const middleHardwareImageUrl = this.getImageUrlFromAssets(assets, image.sys.id);
          this.setState({
            middleSectionHardware: {
              image: middleHardwareImageUrl,
              listContent,
            },
          });
          break;
        case BOTTOM_HARDWARE_SECTION_ID:
          this.setState({
            bottomSectionHardware: {
              buttonText,
            },
          });
          break;

        ///SOFTWARE
        case TOP_SOFTWARE_SECTION_ID:
          this.setState({
            topSectionSoftware: {
              sectionTitle,
              title,
              subtitle,
            },
          });
          break;
        case MIDDLE_SOFTWARE_SECTION_ID:
          const middleSoftwareImageUrl = this.getImageUrlFromAssets(assets, image.sys.id);
          this.setState({
            middleSectionSoftware: {
              image: middleSoftwareImageUrl,
            },
          });
          break;
        case BOTTOM_SOFTWARE_SECTION_ID:
          this.setState({
            bottomSectionSoftware: {
              paragraph,
              anchor,
              anchor01,
            },
          });
          break;

        ///EXPORT
        case TOP_EXPORT_SECTION_ID:
          this.setState({
            topSectionExport: {
              sectionTitle,
              title,
              subtitle,
              anchor,
            },
          });
          break;
        case MIDDLE_EXPORT_SECTION_ID:
          const middleExportImageUrl = this.getImageUrlFromAssets(assets, image.sys.id);
          this.setState({
            middleSectionExport: {
              image: middleExportImageUrl,
            },
          });
          break;

        default:
          break;
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
      headerMobile,
      trustChain,
      topSectionHardware,
      middleSectionHardware,
      bottomSectionHardware,

      topSectionSoftware,
      middleSectionSoftware,
      bottomSectionSoftware,

      topSectionExport,
      middleSectionExport,
    } = this.state;

    return (
      <Layout title="Fahrtenbuch">
        <section>
          <Grid>
            <Grid.Row only="tablet computer">
              <Single hasNoContainer hasColorPrime hasDoubleImage contentfulData={header} />
            </Grid.Row>
            <Grid.Row only="mobile">
              <Single hasNoContainer hasColorPrime hasImageOnRight contentfulData={header} />
            </Grid.Row>
          </Grid>
          <TrustChain hasColorPrime contentfulData={trustChain} />
        </section>

        <section>
          <SectionTop contentfulData={topSectionHardware} />
          <SectionMiddle hasNoContainer hasColorPrime contentfulData={middleSectionHardware} />
          <SectionBottom contentfulData={bottomSectionHardware} />
        </section>

        <section>
          <SectionTop contentfulData={topSectionSoftware} />
          <SectionMiddle hasOnlyImage hasColorPrime contentfulData={middleSectionSoftware} />
          <SectionBottom contentfulData={bottomSectionSoftware} />
        </section>

        <section>
          <SectionTop contentfulData={topSectionExport} />
          <SectionMiddle hasOnlyImage hasColorPrime contentfulData={middleSectionExport} />
        </section>
      </Layout>
    );
  }
}

export default withRedux(initStore)(Fahrtenbuch);
