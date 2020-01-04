import React from 'react';

import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    border: 1
  },
  h1: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  inline: {
    display: "flex",
    flexDirection: "row"
  },
  Paragraph: {
    fontSize: 14,
  },
  h2: {
    fontSize: 14,
  },
  list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    //border: 1,
  },
  item: {
    fontSize: 14,
    color: '#0043ce',
    backgroundColor: '#d0e2ff',
    border: 2,
    borderColor: '#0043ce',
    paddingLeft: 8,
    paddingTop: 6,
    paddingRight: 3,
    paddingBottom:3,
    margin: 5,
  },
});

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
      <Text style={styles.h1}>Profiles</Text>
      <View style={styles.inline}>
        {user.basics.profiles.map((profile, i) => (
            <Text style={[styles.inline, styles.h2]} key={profile.network}>
              {i !== 0 && ' | '}
                {profile.network}
            </Text>
          ))}
      </View>
    </View>
  );
};

export default Me;
