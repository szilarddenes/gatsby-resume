import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Link,
} from '@react-pdf/renderer';

// Color scheme from website
const colors = {
  yellow: 'rgb(252, 196, 25)',
  teal: 'rgb(59, 201, 219)',
  darkText: 'rgb(40, 40, 40)',
  mediumGray: 'rgb(100, 100, 100)',
  lightGray: 'rgb(150, 150, 150)',
  white: 'rgb(255, 255, 255)',
};

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    padding: 30,
    fontSize: 9,
    fontFamily: 'Helvetica',
    color: colors.darkText,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 15,
    borderBottom: `2 solid ${colors.yellow}`,
    paddingBottom: 10,
  },
  profileImageContainer: {
    width: 80,
    marginRight: 15,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    border: `2 solid ${colors.yellow}`,
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    color: colors.yellow,
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    color: colors.teal,
    marginBottom: 8,
  },
  contactInfo: {
    fontSize: 8,
    color: colors.mediumGray,
    marginBottom: 2,
  },
  contactRow: {
    flexDirection: 'row',
    gap: 10,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: colors.yellow,
    marginTop: 12,
    marginBottom: 6,
    borderBottom: `1 solid ${colors.yellow}`,
    paddingBottom: 2,
  },
  subsectionTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: colors.teal,
    marginTop: 6,
    marginBottom: 3,
  },
  text: {
    fontSize: 9,
    lineHeight: 1.4,
    marginBottom: 4,
    color: colors.darkText,
  },
  smallText: {
    fontSize: 8,
    color: colors.mediumGray,
    marginBottom: 2,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
    marginBottom: 3,
  },
  jobTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: colors.darkText,
  },
  company: {
    fontSize: 9,
    color: colors.teal,
    fontFamily: 'Helvetica-Bold',
  },
  date: {
    fontSize: 8,
    color: colors.mediumGray,
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 2,
    marginLeft: 10,
  },
  bullet: {
    width: 8,
    fontSize: 8,
    color: colors.yellow,
  },
  bulletText: {
    flex: 1,
    fontSize: 8,
    lineHeight: 1.3,
    color: colors.darkText,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  skillTag: {
    backgroundColor: colors.yellow,
    color: colors.darkText,
    padding: '2 6',
    fontSize: 7,
    borderRadius: 3,
    marginBottom: 3,
  },
  twoColumn: {
    flexDirection: 'row',
    gap: 15,
  },
  column: {
    flex: 1,
  },
  certificationItem: {
    marginBottom: 4,
  },
  link: {
    color: colors.teal,
    textDecoration: 'none',
  },
});

const PDFResume = ({ data }) => {
  const { basics, work, education, certifications, trainings, awards, publications, skillsMain, languages, interests, references } = data;

  return (
    <Document>
      {/* Page 1 */}
      <Page size="A4" style={styles.page}>
        {/* Header with profile picture and contact info */}
        <View style={styles.header}>
          <View style={styles.profileImageContainer}>
            <Image
              style={styles.profileImage}
              src="src/img/szilarddenes_profile_circle.png"
            />
          </View>
          <View style={styles.headerText}>
            <Text style={styles.name}>{basics.name}</Text>
            <Text style={styles.title}>{basics.label}</Text>
            <View style={styles.contactRow}>
              <Text style={styles.contactInfo}>📧 {basics.email}</Text>
              <Text style={styles.contactInfo}>📱 +36 30 8134832</Text>
            </View>
            <View style={styles.contactRow}>
              <Text style={styles.contactInfo}>🌐 szilarddenes.com</Text>
              <Text style={styles.contactInfo}>📍 {basics.location.city}, {basics.location.countryCode}</Text>
            </View>
          </View>
        </View>

        {/* Summary */}
        <Text style={styles.sectionTitle}>PROFESSIONAL SUMMARY</Text>
        <Text style={styles.text}>{basics.summary}</Text>

        {/* Work Experience */}
        <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>
        {work && work.slice(0, 4).map((job, index) => (
          <View key={index}>
            <View style={styles.jobHeader}>
              <View style={{ flex: 1 }}>
                <Text style={styles.jobTitle}>{job.position}</Text>
                <Text style={styles.company}>{job.name}</Text>
              </View>
              <Text style={styles.date}>{job.startDate} - {job.endDate || 'Present'}</Text>
            </View>
            <Text style={styles.smallText}>{job.location}</Text>
            {job.highlights && job.highlights.slice(0, 3).map((highlight, i) => (
              <View style={styles.bulletPoint} key={i}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>{highlight}</Text>
              </View>
            ))}
          </View>
        ))}

        {/* Education */}
        <Text style={styles.sectionTitle}>EDUCATION</Text>
        {education && education.map((edu, index) => (
          <View key={index} style={{ marginBottom: 4 }}>
            <View style={styles.jobHeader}>
              <View style={{ flex: 1 }}>
                <Text style={styles.jobTitle}>{edu.studyType} - {edu.area}</Text>
                <Text style={styles.company}>{edu.institution}</Text>
              </View>
              <Text style={styles.date}>{edu.startDate} - {edu.endDate}</Text>
            </View>
            {edu.courses && (
              <Text style={styles.smallText}>Focus: {edu.courses.join(', ')}</Text>
            )}
          </View>
        ))}

        {/* Skills - Main */}
        <Text style={styles.sectionTitle}>TECHNICAL SKILLS</Text>
        {skillsMain && skillsMain.slice(0, 6).map((skill, index) => (
          <View key={index} style={{ marginBottom: 3 }}>
            <Text style={styles.subsectionTitle}>{skill.name}</Text>
            <View style={styles.skillsContainer}>
              {skill.software && skill.software.map((software, i) => (
                <Text key={i} style={styles.skillTag}>{software.name}</Text>
              ))}
            </View>
          </View>
        ))}
      </Page>

      {/* Page 2 */}
      <Page size="A4" style={styles.page}>
        {/* Certifications */}
        <Text style={styles.sectionTitle}>CERTIFICATIONS</Text>
        {certifications && certifications.map((cert, index) => (
          <View key={index} style={styles.certificationItem}>
            <Text style={styles.jobTitle}>{cert.title}</Text>
            <Text style={styles.smallText}>{cert.issuer} • {cert.date}</Text>
          </View>
        ))}

        {/* Trainings & Workshops */}
        <Text style={styles.sectionTitle}>PROFESSIONAL DEVELOPMENT</Text>
        {trainings && trainings.map((training, index) => (
          <View key={index} style={{ marginBottom: 3 }}>
            <View style={styles.jobHeader}>
              <View style={{ flex: 1 }}>
                <Text style={styles.jobTitle}>{training.name}</Text>
                <Text style={styles.smallText}>{training.organizer}</Text>
              </View>
              <Text style={styles.date}>{training.date}</Text>
            </View>
          </View>
        ))}

        {/* Awards & Grants */}
        {awards && awards.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>AWARDS & GRANTS</Text>
            {awards.map((award, index) => (
              <View key={index} style={{ marginBottom: 3 }}>
                <View style={styles.jobHeader}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.jobTitle}>{award.title}</Text>
                    <Text style={styles.smallText}>{award.awarder}</Text>
                  </View>
                  <Text style={styles.date}>{award.date}</Text>
                </View>
              </View>
            ))}
          </>
        )}

        {/* Publications */}
        {publications && publications.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>PUBLICATIONS</Text>
            {publications.map((pub, index) => (
              <View key={index} style={{ marginBottom: 4 }}>
                <Text style={styles.text}>
                  {pub.authors} ({pub.releaseDate}). <Text style={{ fontFamily: 'Helvetica-Bold' }}>{pub.name}</Text>. {pub.publisher}.
                </Text>
              </View>
            ))}
          </>
        )}

        {/* Remaining Work Experience if any */}
        {work && work.length > 4 && (
          <>
            <Text style={styles.sectionTitle}>ADDITIONAL EXPERIENCE</Text>
            {work.slice(4).map((job, index) => (
              <View key={index} style={{ marginBottom: 4 }}>
                <View style={styles.jobHeader}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.jobTitle}>{job.position}</Text>
                    <Text style={styles.company}>{job.name}</Text>
                  </View>
                  <Text style={styles.date}>{job.startDate} - {job.endDate || 'Present'}</Text>
                </View>
                <Text style={styles.smallText}>{job.summary}</Text>
              </View>
            ))}
          </>
        )}
      </Page>

      {/* Page 3 */}
      <Page size="A4" style={styles.page}>
        {/* Remaining Skills if any */}
        {skillsMain && skillsMain.length > 6 && (
          <>
            <Text style={styles.sectionTitle}>ADDITIONAL TECHNICAL SKILLS</Text>
            {skillsMain.slice(6).map((skill, index) => (
              <View key={index} style={{ marginBottom: 3 }}>
                <Text style={styles.subsectionTitle}>{skill.name}</Text>
                <View style={styles.skillsContainer}>
                  {skill.software && skill.software.map((software, i) => (
                    <Text key={i} style={styles.skillTag}>{software.name}</Text>
                  ))}
                </View>
              </View>
            ))}
          </>
        )}

        {/* Languages */}
        <Text style={styles.sectionTitle}>LANGUAGES</Text>
        <View style={styles.twoColumn}>
          {languages && languages.map((lang, index) => (
            <View key={index} style={styles.column}>
              <Text style={styles.text}>
                <Text style={{ fontFamily: 'Helvetica-Bold' }}>{lang.language}:</Text> {lang.fluency}
              </Text>
            </View>
          ))}
        </View>

        {/* Interests */}
        {interests && interests.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>INTERESTS</Text>
            <View style={styles.skillsContainer}>
              {interests.map((interest, index) => (
                <Text key={index} style={styles.skillTag}>{interest.name}</Text>
              ))}
            </View>
          </>
        )}

        {/* References */}
        {references && references.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>PROFESSIONAL REFERENCES</Text>
            {references.map((ref, index) => (
              <View key={index} style={{ marginBottom: 6 }}>
                <Text style={styles.jobTitle}>{ref.name}</Text>
                <Text style={styles.text}>{ref.reference}</Text>
              </View>
            ))}
          </>
        )}

        {/* Footer */}
        <View style={{ position: 'absolute', bottom: 30, left: 30, right: 30, borderTop: `1 solid ${colors.yellow}`, paddingTop: 8 }}>
          <Text style={{ fontSize: 7, color: colors.mediumGray, textAlign: 'center' }}>
            This resume was generated from szilarddenes.com • Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFResume;
