import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [totalAmount, setTotalAmount] = useState(null);

  const calculateLoan = () => {
    const interest = (loanAmount * interestRate) / 100;
    setTotalAmount(parseFloat(loanAmount) + interest);
  };

  return (
    <View style={styles.container}>
      <Text>Loan Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Loan Amount"
        keyboardType="numeric"
        value={loanAmount}
        onChangeText={setLoanAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Interest Rate (%)"
        keyboardType="numeric"
        value={interestRate}
        onChangeText={setInterestRate}
      />
      <Button title="Calculate" onPress={calculateLoan} />
      {totalAmount !== null && <Text>Total Amount to Repay: {totalAmount}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    marginVertical: 10,
    padding: 5,
  },
});

export default LoanCalculator;
