/**
 *
 * index
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
  RIGHT_SINGLE_ENTRY_ID,
  LEFT_SINGLE_ENTRY_ID,
  FIRST_TRIPLE_ENTRY_ID,
  SECOND_TRIPLE_ENTRY_ID,
  THIRD_TRIPLE_ENTRY_ID
} from '../contentful';

import Loading from '../components/Loading';

import Layout from '../components/Layout/index';
import HeroHeader from '../components/HeroHeader';
import TripleContainer from '../components/TripleContainer';
import Triple from '../components/Triple';
import SingleContainer from '../components/SingleContainer';
import Slider from '../components/Slider';
import TrustChain from '../components/TrustChain';

class Index extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static async getInitialProps() {
    const client = contentful.createClient({ space: SPACE_ID, accessToken: ACCESS_TOKEN });
    const res = await client.getEntries({ include: 2 });

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

    Object.keys(entries).map((entryKey) => {
      const entry = entries[entryKey];
      const { anchor, title, subtitle, image } = entry.fields;

      switch (entry.sys.id) {
        case HEADER_ENTRY_ID:
          if (image) {
            const asset = Object.entries(assets)
              .find(this.assetFromEntry, entry.fields.image.sys.id);

            this.setState({
              isLoading: false,
              header: {
                anchor,
                title,
                subtitle,
                image: `https:${asset[1].fields.file.url}`,
              },
            });
          } else {
            this.setState({
              isLoading: false,
              header: { anchor, title, subtitle },
            });
          }

          break;

        case LEFT_SINGLE_ENTRY_ID:
          if (image) {
            const asset = Object.entries(assets)
              .find(this.assetFromEntry, entry.fields.image.sys.id);

            this.setState({
              isLoading: false,
              leftSingleContainer: {
                anchor,
                title,
                subtitle,
                image: `https:${asset[1].fields.file.url}`,
              },
            });
          } else {
            this.setState({
              isLoading: false,
              leftSingleContainer: { anchor, title, subtitle },
            });
          }
          break;

        case RIGHT_SINGLE_ENTRY_ID:
          if (image) {
            const asset = Object.entries(assets)
              .find(this.assetFromEntry, entry.fields.image.sys.id);

            this.setState({
              isLoading: false,
              rightSingleContainer: {
                anchor,
                title,
                subtitle,
                image: `https:${asset[1].fields.file.url}`,
              },
            });
          } else {
            this.setState({
              isLoading: false,
              rightSingleContainer: { anchor, title, subtitle },
            });
          }
          break;

        case FIRST_TRIPLE_ENTRY_ID:
          if (image) {
            const asset = Object.entries(assets)
              .find(this.assetFromEntry, entry.fields.image.sys.id);

            this.setState({
              isLoading: false,
              firstTriple: {
                anchor,
                title,
                subtitle,
                image: `https:${asset[1].fields.file.url}`,
              },
            });
          } else {
            this.setState({
              isLoading: false,
              firstTriple: { anchor, title, subtitle },
            });
          }
          break;

        case SECOND_TRIPLE_ENTRY_ID:
          if (image) {
            const asset = Object.entries(assets)
              .find(this.assetFromEntry, entry.fields.image.sys.id);

            this.setState({
              isLoading: false,
              secondTriple: {
                anchor,
                title,
                subtitle,
                image: `https:${asset[1].fields.file.url}`,
              },
            });
          } else {
            this.setState({
              isLoading: false,
              secondTriple: { anchor, title, subtitle },
            });
          }
          break;

        case THIRD_TRIPLE_ENTRY_ID:
          if (image) {
            const asset = Object.entries(assets)
              .find(this.assetFromEntry, entry.fields.image.sys.id);

            this.setState({
              isLoading: false,
              thirdTriple: {
                anchor,
                title,
                subtitle,
                image: `https:${asset[1].fields.file.url}`,
              },
            });
          } else {
            this.setState({
              isLoading: false,
              thirdTriple: { anchor, title, subtitle },
            });
          }
          break;

        default:
          return true;
      }
    });
  }

  assetFromEntry(asset) {
    return asset[1].sys.id === this;
  }

  render() {
    const {
      isLoading,
      header,
      leftSingleContainer,
      rightSingleContainer,
      firstTriple,
      secondTriple,
      thirdTriple,
    } = this.state;

    return (
      <Layout title="Vimcar">
        <Loading isLoading={isLoading} />
        <HeroHeader contentfulData={header} />
        <div className="top-10">
          <TripleContainer >
            <Triple contentfulData={firstTriple} />
            <Triple contentfulData={secondTriple} />
            <Triple contentfulData={thirdTriple} />
          </TripleContainer>

          <SingleContainer imageOnLeft contentfulData={leftSingleContainer} />
          <SingleContainer contentfulData={rightSingleContainer} />

          <Slider
            images={[
              'https://source.unsplash.com/random',
              'https://source.unsplash.com/random',
              'https://source.unsplash.com/random',
              'https://source.unsplash.com/random',
              'https://source.unsplash.com/random',
              'https://source.unsplash.com/random',
            ]}
          />
          <TrustChain />
        </div>
      </Layout>
    );
  }
}

export default withRedux(initStore)(Index);
