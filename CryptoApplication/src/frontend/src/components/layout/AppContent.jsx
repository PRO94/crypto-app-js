import { Layout, Typography } from "antd";
import { useCrypto } from "../../context/crypto-context";

const contentStyle = {
  textAlign: "center",
  minHeight: "calc(100vh - 60px)",
  color: "#fff",
  backgroundColor: "#001529",
  padding: "1rem",
};

export default function AppContent() {
  const { assets, crypto } = useCrypto();

  return (
    <Layout.Content style={contentStyle}>
      <Typography.Title level={3} style={{ textAlign: "left", color: "#fff" }}>
        Portfolio:{" "}
        {assets
          .map((asset) => {
            const coin = crypto.find((c) => c.id == asset.id);
            return asset.amount * coin.price;
          })
          .reduce((acc, v) => {
            return (acc += v);
          }, 0)
          .toFixed(2)}{" "}
        USD
      </Typography.Title>
    </Layout.Content>
  );
}
