import React from "react";
import SkeletonContent from "react-native-skeleton-content";
import { View, Text, StyleSheet } from "react-native";

export default function SearchSkeleton() {
  return (
    <View style={styles.skeletonContainer}>
      <SkeletonContent
        containerStyle={{ flex: 1, width: 300 }}
        isLoading={true}
        boneColor="#DFDFDF"
        animationDirection="horizontalRight"
        duration={1800}
        layout={[
          {
            key: "someId",
            width: "100%",
            height: 20,
            marginBottom: 6,
            borderRadius: 8,
          },
          {
            key: "someOtherId",
            width: "50%",
            height: 20,
            marginBottom: 6,
            borderRadius: 8,
          },
        ]}
      ></SkeletonContent>
    </View>
  );
}

const styles = StyleSheet.create({
  skeletonContainer: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
