export const mockTransactions = [
  {
    id: 1,
    name: 'Grocery Store',
    category: 'Grocery',
    amount: 2450,
    date: 'Oct 15, 2025',
    type: 'expense',
    icon: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=100&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Salary Deposit',
    category: 'Income',
    amount: 45000,
    date: 'Oct 10, 2025',
    type: 'income',
    icon: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=100&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Restaurant Bill',
    category: 'Food',
    amount: 1850,
    date: 'Oct 8, 2025',
    type: 'expense',
    icon: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=100&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Movie Tickets',
    category: 'Entertainment',
    amount: 800,
    date: 'Oct 5, 2025',
    type: 'expense',
    icon: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=100&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Petrol',
    category: 'Transport',
    amount: 1200,
    date: 'Oct 3, 2025',
    type: 'expense',
    icon: 'https://images.unsplash.com/photo-1605039852533-fa4b53a5d5d7?q=80&w=100&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Freelance Payment',
    category: 'Income',
    amount: 15000,
    date: 'Oct 1, 2025',
    type: 'income',
    icon: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=100&auto=format&fit=crop'
  },
  {
    id: 7,
    name: 'Medical Checkup',
    category: 'Medical',
    amount: 3500,
    date: 'Sep 28, 2025',
    type: 'expense',
    icon: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=100&auto=format&fit=crop'
  },
  {
    id: 8,
    name: 'Shopping Mall',
    category: 'Shopping',
    amount: 4200,
    date: 'Sep 25, 2025',
    type: 'expense',
    icon: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=100&auto=format&fit=crop'
  },
  {
    id: 9,
    name: 'Electricity Bill',
    category: 'Utilities',
    amount: 1800,
    date: 'Sep 20, 2025',
    type: 'expense',
    icon: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=100&auto=format&fit=crop'
  },
  {
    id: 10,
    name: 'Dividend',
    category: 'Income',
    amount: 5000,
    date: 'Sep 15, 2025',
    type: 'income',
    icon: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=100&auto=format&fit=crop'
  }
];

export const mockMonthlyData = {
  labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  expenses: [28000, 32000, 30000, 35000, 32840],
  income: [40000, 42000, 45000, 48000, 45250]
};

export const mockCategoryData = [
  {
    name: 'Food',
    value: 8500,
    amount: 8500,
    percentage: 26,
    color: '#6366F1',
    legendFontColor: '#7F7F7F',
    legendFontSize: 12
  },
  {
    name: 'Transport',
    value: 6200,
    amount: 6200,
    percentage: 19,
    color: '#F59E0B',
    legendFontColor: '#7F7F7F',
    legendFontSize: 12
  },
  {
    name: 'Shopping',
    value: 5400,
    amount: 5400,
    percentage: 16,
    color: '#10B981',
    legendFontColor: '#7F7F7F',
    legendFontSize: 12
  },
  {
    name: 'Medical',
    value: 4800,
    amount: 4800,
    percentage: 15,
    color: '#EF4444',
    legendFontColor: '#7F7F7F',
    legendFontSize: 12
  },
  {
    name: 'Utilities',
    value: 4200,
    amount: 4200,
    percentage: 13,
    color: '#8B5CF6',
    legendFontColor: '#7F7F7F',
    legendFontSize: 12
  },
  {
    name: 'Others',
    value: 3740,
    amount: 3740,
    percentage: 11,
    color: '#EC4899',
    legendFontColor: '#7F7F7F',
    legendFontSize: 12
  }
];

export const mockInsights = {
  spending: [
    {
      title: 'Food Expenses Increased',
      description: 'Your spending on food has increased by 18% compared to last month. Consider cooking at home more often to reduce expenses.',
      type: 'increase',
      iconBg: 'rgba(239, 68, 68, 0.1)',
      iconColor: '#EF4444',
      currentValue: 8500,
      previousValue: 7200,
      changePercentage: 18
    },
    {
      title: 'Transport Costs Reduced',
      description: 'Your transport expenses have decreased by 12% compared to last month. Great job on optimizing your travel costs!',
      type: 'decrease',
      iconBg: 'rgba(16, 185, 129, 0.1)',
      iconColor: '#10B981',
      currentValue: 6200,
      previousValue: 7050,
      changePercentage: 12
    }
  ],
  recommendations: [
    {
      title: 'High Subscription Costs',
      description: 'You are spending ₹2,400 monthly on subscriptions. Consider reviewing and canceling unused services to save money.',
      impact: 'Medium Impact',
      impactColor: '#F59E0B'
    },
    {
      title: 'Frequent Food Deliveries',
      description: 'You ordered food delivery 12 times this month, spending ₹4,800. Cooking at home could save you approximately ₹3,000 monthly.',
      impact: 'High Impact',
      impactColor: '#EF4444'
    },
    {
      title: 'Utility Bill Optimization',
      description: 'Your electricity bill is 15% higher than average. Consider energy-saving measures to reduce monthly costs.',
      impact: 'Low Impact',
      impactColor: '#10B981'
    }
  ],
  savings: [
    {
      title: 'Reduce Food Delivery',
      description: 'Cut food delivery orders by half to save on delivery fees and premium pricing.',
      icon: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=100&auto=format&fit=crop',
      potentialSavings: 2400
    },
    {
      title: 'Optimize Subscriptions',
      description: 'Review and cancel unused subscription services.',
      icon: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=100&auto=format&fit=crop',
      potentialSavings: 1200
    },
    {
      title: 'Public Transport',
      description: 'Use public transport twice a week instead of cabs.',
      icon: 'https://images.unsplash.com/photo-1605039852533-fa4b53a5d5d7?q=80&w=100&auto=format&fit=crop',
      potentialSavings: 1600
    }
  ]
};