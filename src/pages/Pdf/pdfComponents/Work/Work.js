import React from 'react';
import { View, Text } from '@react-pdf/renderer';

import { styles } from '../../styles';

const Work = ({ user }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.h1}>Work</Text>
      {user.work.map((work, i) => (
            <View key={i} wrap={false}>
              {
                i !== 0 && <View style={styles.hr}></View>
              }
              <Text style={styles.h2}>{work.position}</Text>
              <View style={styles.inline}>
                  <Text style={[styles.inline, styles.h3]}>{`${work.company} `}</Text>
                  <Text style={[styles.inline, styles.h3]}>{`${work.location} - `}</Text>
                  <Text style={[styles.inline, styles.h3]}>
                    {work.start.year} to {work.end.year}
                  </Text>
              </View>
              <Text style={styles.h3}>{work.summary}</Text>
          </View>
          ))}
    </View>
  );
};

export default Work;
