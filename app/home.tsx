import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

export default function HomeScreen() {
  const router = useRouter();

  const sampleFoods = [
    {
      id: '1',
      title: 'کباب کوبیده',
      image: 'https://cdn.snappfood.ir/media/cache/product_media/uploads/images/product/kh4.jpg',
      rating: 4.7,
      time: '45 دقیقه',
    },
    {
      id: '2',
      title: 'زرشک پلو با مرغ',
      image: 'https://cdn.snappfood.ir/media/cache/product_media/uploads/images/product/zpm.jpg',
      rating: 4.5,
      time: '50 دقیقه',
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#FEBA17' }}>
      <LinearGradient
        colors={['#4E1F00', '#74512D']}
        style={{ padding: 24, paddingTop: 48, borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}
      >
        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>سلام هلیا 🌟</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>چه غذایی برات بپزم امروز؟</Text>

        <Pressable
          onPress={() => router.push('/add-food')}
          style={{
            marginTop: 16,
            backgroundColor: '#FEBA17',
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderRadius: 9999,
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'flex-start',
          }}
        >
          <Feather name="plus-circle" size={20} color="#4E1F00" />
          <Text style={{ color: '#4E1F00', marginLeft: 8, fontWeight: 'bold' }}>افزودن غذا</Text>
        </Pressable>
      </LinearGradient>

      <ScrollView style={{ padding: 16 }}>
        {sampleFoods.map((food) => (
          <View
            key={food.id}
            style={{
              backgroundColor: 'white',
              borderRadius: 16,
              marginBottom: 16,
              overflow: 'hidden',
              // Shadow for iOS
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              // Elevation for Android
              elevation: 3,
            }}
          >
            <Image
              source={{ uri: food.image }}
              style={{ height: 192, width: '100%' }}
              resizeMode="cover"
            />
            <View style={{ padding: 16 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#4E1F00' }}>{food.title}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                <Text style={{ color: '#74512D' }}>⏱ {food.time}</Text>
                <Text style={{ color: '#74512D' }}>⭐ {food.rating}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
