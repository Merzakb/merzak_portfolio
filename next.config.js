module.exports = {
    sassOptions: {
        includePaths: ['./styles'],
    },
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        return config;
      },
};
