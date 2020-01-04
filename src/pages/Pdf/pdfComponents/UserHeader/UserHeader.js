import React from 'react';

import { View, Text, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  header: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: '150px',
    marginRight: 10,
    borderRadius: 2,
    border: 1
  },
  section: {
    flexGrow: 1,
    border: 1,
    padding: 10,
    verticalAlign: 'baseline'
  },
  h1: {
    fontSize: 18,
  },
  h2: {
    fontSize: 14,
  }
});

const UserHeader = ({ user }) => {
  return (
      <View style={styles.header}>
        <Image style={styles.image} src={user.basics.picture} />
        <View style={styles.section}>
          <Text style={styles.h1}>{user.basics.name}</Text>
          <Text style={styles.h2}>@</Text>
          <Text style={styles.h2}>{user.basics.label}</Text>
          <Text style={styles.h2}>Coding in {user.basics.region}</Text>
          <Text style={styles.h2}>{user.basics.yearsOfExperience} years of experience as a developer</Text>
          <Text style={styles.h2}>{user.basics.headline}</Text>
          <Text style={styles.h2}>
            Blog:{' '}
          </Text>
        </View>
      </View>
  );
};

export default UserHeader;
