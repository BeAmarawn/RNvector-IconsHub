import React from 'react';
import { View, FlatList } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ShimmerList = () => {
  const arrData = [1, 2, 3];
  return (
    <FlatList
      data={arrData}
      keyExtractor={(item, index) => String(index)}
      renderItem={() => (
        <View
          style={{
            backgroundColor: '#2d2c29',
            height: 140,
            width: 142,
            borderRadius: 7,
            marginRight: 10,
          }}
        >
          <SkeletonPlaceholder
            backgroundColor="#2d2c29"
            highlightColor="#A1A2A1"
            speed={1500}
          >
            <View style={{ alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ height: 125, width: 115, borderRadius: 7 }} />
                <View
                  style={{
                    height: 50,
                    width: 25,
                    marginLeft: 2,
                    borderRadius: 4,
                  }}
                />
              </View>
              <View
                style={{
                  height: 12,
                  width: 140,
                  marginTop: 2,
                  borderRadius: 4,
                }}
              />
            </View>
          </SkeletonPlaceholder>
        </View>
      )}
      horizontal
    />
  );
};
export default ShimmerList;
