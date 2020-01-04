import React from 'react';
import { View, Text, Image } from '@react-pdf/renderer';

import { styles } from '../../styles';

const UserHeader = ({ user }) => {
  return (
      <View style={styles.header}>
        <Image style={styles.headerImage} src={user.basics.picture} />
        <View style={styles.headerLeftSection}>
          <Text style={styles.headerH1}>{user.basics.name}</Text>
          <Text style={styles.h3}>@</Text>
          <Text style={styles.h3}>{user.basics.label}</Text>
          <Text style={styles.h3}>Coding in {user.basics.region}</Text>
          <Text style={styles.h3}>{user.basics.yearsOfExperience} years of experience as a developer</Text>
          <Text style={styles.h3}>{user.basics.headline}</Text>
          <Text style={styles.h3}>
            Blog:{' '}
          </Text>
        </View>
      </View>
  );
};

export default UserHeader;
