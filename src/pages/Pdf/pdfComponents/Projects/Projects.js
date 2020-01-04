import React from 'react';
import { View, Text } from '@react-pdf/renderer';

import { styles } from '../../styles';

const Projects = ({ user }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.h1}>Projects</Text>
      {user.projects.map((project, i) => (
          <View key={i} wrap={false}>
            {
              i !== 0 && <View style={styles.hr}></View>
            }
            <Text style={styles.h2}>{project.name}</Text>
            <Text style={styles.h3}>{project.summary}</Text>
            <View style={styles.list}>
              {[...project.languages, ...project.libraries].map((item, j) => (
                <Text style={styles.item} key={j}>{item}</Text>
              ))}
            </View>
          </View>
      ))}
    </View>
  );
};

export default Projects;
