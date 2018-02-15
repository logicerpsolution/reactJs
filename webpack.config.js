var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: { 
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                 include: path.join(__dirname, 'src'),
                query: {
                    presets: ['react', 'es2015', 'stage-3']
                }
            },
            {
			  test: /\.css$/,
			  loader: 'style-loader'
			}, {
			  test: /\.css$/,
			  loader: 'css-loader',
			  query: {
				modules: true,
				localIdentName: '[name]__[local]___[hash:base64:5]'
			  }
			},
			{
  test: /\.(gif|png|jpe?g|svg)$/i,
  use: [
    'file-loader',
    {
      loader: 'image-webpack-loader',
      options: {
        mozjpeg: {
          progressive: true,
          quality: 65
        },
        // optipng.enabled: false will disable optipng
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: '65-90',
          speed: 4
        },
        gifsicle: {
          interlaced: false,
        },
        // the webp option will enable WEBP
        webp: {
          quality: 75
        }
      }
    }, 
        ],
	},
	{
	  test: /\.(ttf|eot|woff|woff2)$/,
	  loader: "file-loader",
	  options: {
		name: "fonts/[name].[ext]",
	  },
	},
	]
        
    }, 
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
    })],
    devServer: {
        historyApiFallback: true
    }
};
