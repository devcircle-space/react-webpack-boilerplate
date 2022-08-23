import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

module.exports = {
	entry: resolve(__dirname, "src", "index.tsx"),
	output: {
		path: resolve(__dirname, "build"),
		filename: "bundle.js",
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.[jt]sx?$/,
				use: ["babel-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: "asset/inline",
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".jsx"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: resolve(__dirname, "public", "index.html"),
		}),
		new CleanWebpackPlugin(),
	],
	devServer: {
		static: resolve(__dirname, "./src"),
		port: 3000,
		hot: "only",
		compress: true,
		open: true,
	},
};

