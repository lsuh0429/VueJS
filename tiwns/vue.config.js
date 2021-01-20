module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    host: 'localhost',
    port: 8000,
    https: false,
    hotOnly: true,
    proxy: {
      '/sfc': {
        target: 'http://localhost:8080/sfc',
        ws: false,
        changeOrigin: true
      },
      '/demo': {
        target: 'http://localhost:8081',
        ws: false,
        changeOrigin: true
      }
    }
  }
}