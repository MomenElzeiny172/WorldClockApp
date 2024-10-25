import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import cities, { City } from '../../data/cities';


const WorldClock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Sets up an interval timer that updates the current time every second (1000 ms).
    const intervalId = setInterval(() => {
      // Updates the current time state with the current date and time.
      setCurrentTime(new Date());
    }, 1000);

    // Cleans up the interval timer when the component is unmounted,
    // preventing memory leaks.
    return () => clearInterval(intervalId);
  }, []);

  const getCityTime = (offset: number): string => {
    // Gets the local UTC offset (in hours) of the user's current timezone.
    const localUtcOffset = new Date().getTimezoneOffset() / 60;

    // Calculates the time for a specific city by adjusting the current time based on
    // the city's offset relative to UTC and the user's local UTC offset.
    const cityTime = new Date(currentTime.getTime() + (offset + localUtcOffset) * 3600 * 1000);

    // Formats the city's time as a string with 2-digit hour and minute components.
    return cityTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const renderCityItem = ({ item }: { item: City }) => (
    <View style={styles.cityContainer}>
      <Text style={styles.cityText}>{item.city}</Text>
      <Text style={styles.timeText}>{getCityTime(item.offset)}</Text>
    </View>
  );

  return (
    <FlatList
      data={cities}
      keyExtractor={(item) => item.city}
      renderItem={renderCityItem}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
  },
  cityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginVertical: 6,
    marginHorizontal: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 2,
  },
  cityText: {
    fontSize: 16,
    fontWeight: '600',
  },
  timeText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#555555',
  },
});

export default WorldClock;
