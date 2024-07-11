import CopyPlugin from "copy-webpack-plugin";

export const plugins = [
  new CopyPlugin({
    patterns: [
      { from: "source", to: "dist" },
      { from: "other", to: "public" },
    ],
  }),
];