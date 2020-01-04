import React from 'react';
import Layout from '../../components/Layout';
import UserHeader from './pdfComponents/UserHeader';
import Me from './pdfComponents/Me';
import Projects from './pdfComponents/Projects';
import Work from './pdfComponents/Work';
import Education from './pdfComponents/Education';
import { SectionTitle } from '../../styles';
import { StyledPDFViewer, styles } from './styles';

import { Page, Document } from '@react-pdf/renderer';

// Create Document Component
const MyDocument = ({ user }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <UserHeader user={user} />
      <Me user={user} />
      <Projects user={user} />
      <Work user={user} />
      <Education user={user} />
    </Page>
  </Document>
);

const PdfDocument = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>PDF</SectionTitle>
        <StyledPDFViewer>
          <MyDocument user={user} />
        </StyledPDFViewer>
      </div>
    </Layout>
  );
};

export default PdfDocument;
