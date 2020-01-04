import React from 'react';
import { View, Text } from '@react-pdf/renderer';

import { styles } from '../../styles';

const Me = ({ user }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.h1}>About Me</Text>
      <Text style={styles.Paragraph}>{user.basics.summary}</Text>
      <Text style={styles.h1}>Skills</Text>
      <View style={styles.list}>
        {user.skills.map(skill => (
          <Text style={styles.item} key={skill.name}>{skill.name}</Text>
        ))}
      </View>
    </View>
  );
};

export default Me;
