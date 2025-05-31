import { Text, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import useGreeting from "@/hooks/useGreetings";
import { CartesianChart, Bar } from "victory-native";
import { LinearGradient, vec } from "@shopify/react-native-skia";

export default function Index() {
  const insets = useSafeAreaInsets();
  const greeting = useGreeting();

  const DATA = (length: number = 10) =>
    Array.from({ length }, (_, index) => ({
      month: index + 1,
      listenCount: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
    }));

  const data = DATA(8);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top + hp("2%"),
        paddingLeft: wp("5%"),
        paddingRight: wp("5%"),
        paddingBottom: insets.bottom,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Text style={styles.Text}>Dashboard</Text>
      <Text>{greeting}, Waf</Text>
      <View style={{ height: hp("30%"), width: "100%" }}>
        <CartesianChart
          data={data}
          xKey="month"
          yKeys={["listenCount"]}
          padding={5}
          domain={{ y: [0, 100] }}
          domainPadding={{ left: 50, right: 50, top: 50 }}
          axisOptions={{
            tickCount: 5,
            labelColor: "black",
            lineColor: "black",
            formatXLabel: (value) => {
              const date = new Date(2025, value - 1);
              return date.toLocaleDateString("default", { month: "short" });
            },
            formatYLabel: (value) => `${value}`,
          }}
        >
          {({ points, chartBounds }) => (
            <>
              <Bar
                points={points.listenCount}
                chartBounds={chartBounds}
                animate={{ type: "timing", duration: 1000 }}
                roundedCorners={{ topLeft: 10, topRight: 10 }}
              >
                <LinearGradient
                  start={vec(0, 0)}
                  end={vec(0, 400)}
                  colors={["green", "#9ee905"]}
                />
              </Bar>
            </>
          )}
        </CartesianChart>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    fontSize: hp("4%"),
    color: "#333",
    fontWeight: "bold",
  },
});
