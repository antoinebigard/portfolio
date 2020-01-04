import React from 'react';
import Layout from '../../components/Layout';
import UserHeader from './pdfComponents/UserHeader';
import Me from './pdfComponents/Me';
import { SectionTitle } from '../../styles';
import { StyledPDFViewer } from './styles';

import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';



// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    border: 1
  }
});

// Create Document Component
const MyDocument = ({ user }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <UserHeader user={user} />
      <Me user={user} />
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
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
