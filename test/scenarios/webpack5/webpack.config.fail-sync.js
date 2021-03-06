"use strict";

/**
 * Fail synchronously.
 */
const base = require("./webpack.config");
const { StatsWriterPlugin } = require("../../../index");

module.exports = {
  ...base,
  plugins: [
    new StatsWriterPlugin({
      filename: "stats-transform-fail-sync.json",
      transform() {
        throw new Error("SYNC");
      }
    })
  ]
};
