const withTM = require("next-transpile-modules")([
  "@wizard-ui/react",
  "@wizard-ui/core",
]);

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    esmExternals: "loose",
  },
  webpack: function (config) {
    config.experiments = { asyncWebAssembly: true, syncWebAssembly: true };
    return config;
  },
};

module.exports = withNextra(withTM(config));
