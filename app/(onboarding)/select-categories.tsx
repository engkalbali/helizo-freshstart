import { View, Text, ScrollView } from 'react-native';
import React from 'react';

const SelectCategories = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        دسته‌بندی‌های مورد علاقه‌تو انتخاب کن:
      </Text>
      {/* لیست دسته‌بندی‌ها بعداً اینجا اضافه می‌شه */}
    </ScrollView>
  );
};

export default SelectCategories;
