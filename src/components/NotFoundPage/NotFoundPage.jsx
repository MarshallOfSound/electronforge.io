import React, { PureComponent } from 'react';

import { PrimarySection } from '../PageSections';

import styles from './NotFoundPage.scss';

export default class NotFoundPage extends PureComponent {
  render() {
    return (
      <PrimarySection>
        <h1 className={styles.title}>404</h1>
        <p className={styles.content}>This page could not be found</p>
      </PrimarySection>
    );
  }
}
