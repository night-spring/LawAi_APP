import React, { useState, useEffect, useRef } from 'react';
import { View, Text,TextInput, ScrollView, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Landing = () => {
  const navigation = useNavigation();
  const [showButton, setShowButton] = useState(false);
  const scrollViewRef = useRef(null); // Use useRef here to reference ScrollView

  const handleDownload = () => {
    navigation.navigate('Download');
  };

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setShowButton(offsetY > 300); // Show the back-to-top button after scrolling 300px
  };

  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true }); // Use scrollViewRef correctly
  };

  const handleSmoothScroll = (target) => {
    scrollViewRef.current?.scrollTo({ y: target, animated: true }); // Use scrollViewRef correctly
  };
  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const handleInputChange = (name, value) => {
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = () => {
      console.log('Form submitted:', formData);
    };
  return (
    <ScrollView
      style={styles.container}
      ref={scrollViewRef} // Assign scrollViewRef here
      onScroll={handleScroll}
      scrollEventThrottle={16}
    >
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image source={require('../images/indian-emblem.png')} style={styles.emblem} />
          <View>
            <Text style={styles.headerTitle}>LawAI Portal</Text>
            <Text style={styles.headerSubtitle}>Enforcing Law & Justice for Government of India</Text>
          </View>
        </View>
       
      </View>

      {/* Back to Top Button */}
      {showButton && (
        <TouchableOpacity style={styles.backToTop} onPress={scrollToTop}>
          <Text style={styles.backToTopText}>↑</Text>
        </TouchableOpacity>
      )}

      {/* Hero Section */}
      <View style={styles.hero}>
      {/* Main Heading */}
      <Text style={styles.heroTitle}>Empowering Law Enforcement with AI</Text>

      {/* Subtext */}
      <Text style={styles.heroSubtitle}>
        Revolutionize law enforcement with AI-powered tools. Streamline FIR filing, access legal
        resources, and enhance operational efficiency with cutting-edge technology.
      </Text>

      {/* Call-to-Action Buttons */}
      <View style={styles.heroButtons}>
        <TouchableOpacity
          style={[styles.ctaButton, styles.getStartedButton]}
          onPress={() => navigation.navigate('Utilities')}
        >
          <Text style={styles.ctaButtonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.ctaButton, styles.learnMoreButton]}
          onPress={() => handleSmoothScroll(600)}
        >
          <Text style={styles.ctaButtonText}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </View>
 

      {/* Image Section */}
      <View style={styles.imageSection}>
      {/* Image with Overlay */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../images/Landing.jpg')}
          style={styles.landingImage}
          resizeMode="cover"
        />
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>
            An initiative representing trust and authority abiding by the constitution.
          </Text>
        </View>
      </View>

      {/* Additional Description */}
      <Text style={styles.imageDescription}>
        This initiative is designed to bring the power of technology to law enforcement agencies,
        providing them with the resources they need to uphold justice and maintain public trust.
      </Text>
    </View>
    <View style={styles.keyFeaturesContainer}>
      {/* Heading */}
      <Text style={styles.keyFeaturesHeading}>Key Features</Text>

      {/* Feature Cards */}
      <View style={styles.keyFeaturesCardsContainer}>
        {/* Feature Card 1 */}
        <View style={styles.keyFeaturesCard}>
          <View style={[styles.keyFeaturesIconContainer, { backgroundColor: '#3b82f6' }]}>
            <Icon name="library-books" size={32} color="#ffffff" />
          </View>
          <Text style={styles.keyFeaturesCardTitle}>NLP & Legal Database</Text>
          <Text style={styles.keyFeaturesCardText}>
            Interprets incident details and connects to legal databases for relevant laws.
          </Text>
        </View>

        {/* Feature Card 2 */}
        <View style={styles.keyFeaturesCard}>
          <View style={[styles.keyFeaturesIconContainer, { backgroundColor: '#10b981' }]}>
            <Icon name="sync" size={32} color="#ffffff" />
          </View>
          <Text style={styles.keyFeaturesCardTitle}>Unified Platform</Text>
          <Text style={styles.keyFeaturesCardText}>
            Centralized repository of updated laws with easy search by act, section, or keyword.
          </Text>
        </View>

        {/* Feature Card 3 */}
        <View style={styles.keyFeaturesCard}>
          <View style={[styles.keyFeaturesIconContainer, { backgroundColor: '#ef4444' }]}>
            <Icon name="assignment-turned-in" size={32} color="#ffffff" />
          </View>
          <Text style={styles.keyFeaturesCardTitle}>Case Database for Monitoring</Text>
          <Text style={styles.keyFeaturesCardText}>
            Monitor ongoing and past cases seamlessly with real-time updates and case tracking.
          </Text>
        </View>
      </View>
    </View>
      {/* Vision Section */}
      <View style={styles.visionSection}>
      {/* Icon */}
      <View style={styles.iconWrapper}>
        <View style={styles.iconContainer}>
        <Icon name="visibility" size={32} color="#2563eb" />

        </View>
      </View>

      {/* Title */}
      <Text style={styles.visionTitle}>Our Vision</Text>

      {/* Description */}
      <Text style={styles.visionText}>
        At LawAI, we aim to bridge the gap between law enforcement and advanced technology,
        empowering officers with tools to uphold justice swiftly and accurately across the nation.
      </Text>

      {/* Cards */}
      <View style={styles.visionCards}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Innovative AI Tools</Text>
          <Text style={styles.cardText}>
            Leveraging the latest AI advancements to bring unmatched precision in legal processes.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Empowering Officers</Text>
          <Text style={styles.cardText}>
            Providing law enforcement with resources that make their work efficient and impactful.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Nationwide Impact</Text>
          <Text style={styles.cardText}>
            Reaching every corner of the country to ensure justice is accessible to all.
          </Text>
        </View>
      
    </View>
      </View>
      <View style={styles.contactSection}>
        {/* Left Section */}
        <View style={styles.leftSection}>
          <Text style={styles.heading}>Get in Touch</Text>
          <Text style={styles.description}>
            Have questions, feedback, or just want to say hello? Fill out the form or reach us via our contact details below. We're here to help!
          </Text>
          <View style={styles.contactDetails}>
            <View style={styles.contactItem}>
              <Icon name="envelope" size={20} color="#3b82f6" />
              <Text style={styles.contactText}>code.a.cola.01@gmail.com</Text>
            </View>
            <View style={styles.contactItem}>
              <Icon name="phone" size={20} color="#3b82f6" />
              <Text style={styles.contactText}>+91-123-456-7890</Text>
            </View>
            <View style={styles.contactItem}>
              <Icon name="map-marker" size={20} color="#3b82f6" />
              <Text style={styles.contactText}>Ministry of Law & Justice, Madhya Pradesh, India</Text>
            </View>
          </View>
        </View>

        {/* Right Section (Form) */}
        <View style={styles.formSection}>
          <View style={styles.formField}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Your Name"
              value={formData.name}
              onChangeText={(text) => handleInputChange('name', text)}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="youremail@example.com"
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.label}>Message</Text>
            <TextInput
              style={styles.textArea}
              placeholder="Your message here..."
              value={formData.message}
              onChangeText={(text) => handleInputChange('message', text)}
              multiline
            />
          </View>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Send Message</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    backgroundColor: '#1E3A8A',
    padding: 16,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emblem: {
    width: 50,
    height: 50,
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#d1d5db',
  },
  headerButtons: {
    flexDirection: 'row',
    marginTop: 16,
  },
  downloadButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginRight: 8,
  },
  visitButton: {
    backgroundColor: '#2563EB',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 14,
    color: '#1E3A8A',
    fontWeight: 'bold',
  },
  hero: {
    backgroundColor: '#514FEC', // Simulating gradient
    paddingVertical: 40,
    paddingHorizontal: 16,
    textAlign: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 40,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#e5e7eb',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 32,
    maxWidth: 600,
  },
  heroButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  ctaButton: {
    borderRadius: 9999,
    paddingVertical: 12,
    paddingHorizontal: 24,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  getStartedButton: {
    backgroundColor: '#facc15',
  },
  learnMoreButton: {
    backgroundColor: '#ffffff',
  },
  ctaButtonText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#1d4ed8', // Adjust for the button text color (blue for both buttons)
  },
  imageSection: {
    padding: 24,
  },
  landingImage: {
    width: '100%',
    height: 300,
    borderRadius: 16,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 16,
    overflow: 'hidden', // Ensures the overlay and image stay within the border radius
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  imageDescription: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    textAlign: 'center',
    paddingHorizontal: 24,
    marginTop: 16,
    maxWidth: 800,
  },
  keyFeaturesContainer: {
    backgroundColor: '#f9fafb',
    paddingVertical: 32,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  keyFeaturesHeading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e3a8a',
    textAlign: 'center',
    marginBottom: 24,
  },
  keyFeaturesCardsContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  keyFeaturesCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    width: '90%',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
    alignItems: 'center',
  },
  keyFeaturesIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  keyFeaturesCardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1e40af',
    marginBottom: 8,
    textAlign: 'center',
  },
  keyFeaturesCardText: {
    fontSize: 16,
    color: '#4b5563',
    textAlign: 'center',
  },
  visionSection: {
    backgroundColor: '#f9fafb',
    paddingVertical: 32,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  iconWrapper: {
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#dbeafe',
    padding: 12,
    borderRadius: 9999,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 4,
  },
  icon: {
    fontSize: 32,
    color: '#2563eb',
  },
  visionTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1e3a8a',
    textAlign: 'center',
    marginBottom: 12,
  },
  visionText: {
    fontSize: 16,
    color: '#4b5563',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
    maxWidth: 600,
  },
  visionCards: {
    width: '100%',
    alignItems: 'center',
  },
  container: {
    flexGrow: 1,
  },
  contactSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: '#ebf8ff',
    justifyContent: 'center',
  },
  leftSection: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#4b5563',
    textAlign: 'center',
    marginBottom: 16,
    maxWidth: 400,
  },
  contactDetails: {
    width: '100%',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  contactText: {
    fontSize: 16,
    color: '#4b5563',
    marginLeft: 8,
  },
  formSection: {
    flex: 1,
    marginLeft: 16,
    width: '100%',
  },
  formField: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderColor: '#d1d5db',
    borderWidth: 1,
    fontSize: 16,
  },
  textArea: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderColor: '#d1d5db',
    borderWidth: 1,
    fontSize: 16,
    height: 120,
  },
  submitButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },

  // Responsive Styles for smaller screens
  '@media (max-width: 640px)': {
    leftSection: {
      marginBottom: 0,
      paddingHorizontal: 8,
      flex: 1,
    },
    formSection: {
      marginLeft: 0,
      width: '100%',
    },
    heading: {
      fontSize: 24,
    },
    description: {
      fontSize: 14,
      paddingHorizontal: 16,
    },
    input: {
      paddingHorizontal: 12,
      paddingVertical: 10,
    },
    textArea: {
      paddingHorizontal: 12,
      paddingVertical: 10,
    },
    submitButton: {
      marginTop: 12,
    },
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
    width: '90%', // Makes the card take up most of the width
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1d4ed8',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
  },

  backToTop: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#1E3A8A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backToTopText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Landing;
