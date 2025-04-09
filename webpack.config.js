const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Режим разработки (можно сменить на 'production' для продакшена)
  entry: './src/js/script.js', // Точка входа для JavaScript
  output: {
    path: path.resolve(__dirname, 'dist'), // Папка для собранных файлов
    filename: 'bundle.js', // Имя выходного JS-файла
    clean: true, // Очищает папку dist перед сборкой
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Обрабатываем CSS-файлы
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон HTML
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'), // Папка для dev-сервера
    compress: true,
    port: 9000, // Порт для локального сервера
  },
};