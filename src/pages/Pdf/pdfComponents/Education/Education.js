import React from 'react';
import { View, Text } from '@react-pdf/renderer';

import { styles } from '../../styles';

const Education = ({ user }) => {
  return (
    <View style={styles.section} wrap={false}>
      <Text style={styles.h1}>Education</Text>

      {user.education.map((education, i) => (
        <View key={i} >
          <Text style={styles.h2}>{education.position}</Text>
          <View style={styles.inline}>
              <Text style={[styles.inline, styles.h3]}>{`${education.studyType}, `}</Text>
              <Text style={[styles.inline, styles.h3]}>{`${education.area} - `}</Text>
              <Text style={[styles.inline, styles.h3]}>
              {education.start.year} to {education.end.year}
              </Text>
          </View>
          <Text style={styles.h3}>{education.description.replace('\n\n', '\n')}</Text>
      </View>
      ))}
    </View>
  );
};

export default Education;
