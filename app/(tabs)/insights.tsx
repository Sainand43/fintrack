import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TriangleAlert as AlertTriangle, ArrowRight, ChevronDown, TrendingDown, TrendingUp } from 'lucide-react-native';
import { mockInsights } from '../../data/mockData';

export default function InsightsScreen() {
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');
  const periodOptions = ['This Week', 'This Month', 'Last 3 Months', 'This Year'];
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Smart Insights</Text>
      </View>
      
      <View style={styles.periodSelector}>
        <Text style={styles.periodLabel}>Period:</Text>
        <TouchableOpacity style={styles.periodButton}>
          <Text style={styles.periodButtonText}>{selectedPeriod}</Text>
          <ChevronDown size={16} color="#6B7280" />
        </TouchableOpacity>
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <View style={styles.insightSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Spending Insights</Text>
          </View>
          
          {mockInsights.spending.map((insight, index) => (
            <View key={index} style={styles.insightCard}>
              <View style={[styles.insightIconContainer, { backgroundColor: insight.iconBg }]}>
                {insight.type === 'increase' ? (
                  <TrendingUp size={24} color={insight.iconColor} />
                ) : (
                  <TrendingDown size={24} color={insight.iconColor} />
                )}
              </View>
              
              <View style={styles.insightContent}>
                <Text style={styles.insightTitle}>{insight.title}</Text>
                <Text style={styles.insightDescription}>{insight.description}</Text>
                
                <View style={styles.insightStats}>
                  <View style={styles.insightStat}>
                    <Text style={styles.insightStatLabel}>This Month</Text>
                    <Text style={styles.insightStatValue}>₹{insight.currentValue.toLocaleString()}</Text>
                  </View>
                  
                  <View style={styles.insightStat}>
                    <Text style={styles.insightStatLabel}>Last Month</Text>
                    <Text style={styles.insightStatValue}>₹{insight.previousValue.toLocaleString()}</Text>
                  </View>
                  
                  <View style={styles.insightStat}>
                    <Text style={styles.insightStatLabel}>Change</Text>
                    <Text 
                      style={[
                        styles.insightStatValue, 
                        insight.type === 'increase' ? styles.negativeChange : styles.positiveChange
                      ]}
                    >
                      {insight.type === 'increase' ? '+' : '-'}{insight.changePercentage}%
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
        
        <View style={styles.insightSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommendations</Text>
          </View>
          
          {mockInsights.recommendations.map((recommendation, index) => (
            <View key={index} style={styles.recommendationCard}>
              <View style={styles.recommendationHeader}>
                <View style={styles.recommendationTitleContainer}>
                  <AlertTriangle size={20} color="#F59E0B" />
                  <Text style={styles.recommendationTitle}>{recommendation.title}</Text>
                </View>
                <Text 
                  style={[
                    styles.recommendationImpact,
                    { color: recommendation.impactColor }
                  ]}
                >
                  {recommendation.impact}
                </Text>
              </View>
              
              <Text style={styles.recommendationDescription}>{recommendation.description}</Text>
              
              <View style={styles.recommendationActions}>
                <TouchableOpacity style={styles.recommendationAction}>
                  <Text style={styles.recommendationActionText}>View Details</Text>
                  <ArrowRight size={16} color="#6366F1" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        
        <View style={styles.insightSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Savings Opportunities</Text>
          </View>
          
          {mockInsights.savings.map((saving, index) => (
            <View key={index} style={styles.savingCard}>
              <View style={styles.savingIconContainer}>
                <Image 
                  source={{ uri: saving.icon }} 
                  style={styles.savingIcon} 
                />
              </View>
              
              <View style={styles.savingContent}>
                <Text style={styles.savingTitle}>{saving.title}</Text>
                <Text style={styles.savingDescription}>{saving.description}</Text>
                
                <View style={styles.savingStats}>
                  <View style={styles.savingStat}>
                    <Text style={styles.savingStatLabel}>Potential Savings</Text>
                    <Text style={styles.savingStatValue}>₹{saving.potentialSavings.toLocaleString()}/month</Text>
                  </View>
                  
                  <TouchableOpacity style={styles.savingActionButton}>
                    <Text style={styles.savingActionButtonText}>Take Action</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
  },
  periodSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  periodLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4B5563',
    marginRight: 12,
  },
  periodButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  periodButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4B5563',
    marginRight: 8,
  },
  scrollView: {
    flex: 1,
  },
  insightSection: {
    marginBottom: 24,
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  insightCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  insightIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  insightContent: {
    flex: 1,
  },
  insightTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  insightDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
    lineHeight: 20,
  },
  insightStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingTop: 16,
  },
  insightStat: {
    alignItems: 'center',
  },
  insightStatLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  insightStatValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  positiveChange: {
    color: '#10B981',
  },
  negativeChange: {
    color: '#EF4444',
  },
  recommendationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  recommendationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  recommendationTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginLeft: 8,
  },
  recommendationImpact: {
    fontSize: 12,
    fontWeight: '500',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
  },
  recommendationDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
    lineHeight: 20,
  },
  recommendationActions: {
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingTop: 16,
  },
  recommendationAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recommendationActionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6366F1',
    marginRight: 8,
  },
  savingCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    flexDirection: 'row',
  },
  savingIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  savingIcon: {
    width: 24,
    height: 24,
  },
  savingContent: {
    flex: 1,
  },
  savingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  savingDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
    lineHeight: 20,
  },
  savingStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  savingStat: {},
  savingStatLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 2,
  },
  savingStatValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#10B981',
  },
  savingActionButton: {
    backgroundColor: '#6366F1',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  savingActionButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});