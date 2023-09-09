import React from 'react';
import './index.scss';
import MainBanner from './mainBanner';
import MiniBanner from './miniBanner';
import CreateAndSell from './createAndSell';
import LiveAuctions from './liveAuctions';
import FeatureedArtist from './featureedArtist';
import Hot from './hot';
import CreateYourOwn from './createYourOwn';
import Layout from '../../layout';
import { App } from './index.styled'


export default function HomePage() {
  return (
    <Layout>
      <App>
        <MainBanner />
        <MiniBanner />
        <CreateAndSell />
        <LiveAuctions />
        <FeatureedArtist />
        <Hot />
        <CreateYourOwn />
      </App>
    </Layout>
  );
}