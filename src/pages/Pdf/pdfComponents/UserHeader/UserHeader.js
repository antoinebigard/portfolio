import React from 'react';
import { View, Text, Image } from '@react-pdf/renderer';

import { styles } from '../../styles';

const UserHeader = ({ user }) => {
  return (
      <View style={styles.header}>
        <Image style={styles.headerImage} src={user.basics.picture} />
        <View style={styles.headerLeftSection}>
          <View style={styles.inline}>
            <Text style={[styles.inline, styles.headerH1, styles.headerH1Color]}>{`${user.basics.name.split(' ')[0]} `}</Text>
            <Text style={[styles.inline, styles.headerH1]}>{user.basics.name.split(' ')[1]}</Text>
          </View>
          <Text style={styles.h4}>{user.basics.label}</Text>
          <Text style={styles.h4}>Coding in {user.basics.region}</Text>
          <Text style={styles.h4}>{user.basics.yearsOfExperience} years of experience as a developer</Text>
          <Text style={[styles.h4, { marginBottom: 5 }]}>Email: bigard.antoine@gmail.com</Text>
          <View style={styles.inline}>
            <Text style={[styles.inline,styles.HeaderParagraph]}>{user.basics.summary}</Text>
          </View>
          <View style={styles.inline}>
            {user.basics.profiles.map((profile, i) => (
              <Text style={[styles.inline, styles.h4]} key={profile.network}>
                {i !== 0 && ' | '}
                  {profile.network}
              </Text>
            ))}
          </View>
        </View>
      </View>
  );
};

export default UserHeader;
