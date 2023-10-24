/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

const { createFilePath } = require('gatsby-source-filesystem');
/**
* Implement Gatsby's Node APIs in this file.
*
* See: <https://www.gatsbyjs.com/docs/node-apis/>
*/

// You can delete this file if you're not using it

const path = require('path');

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
 const output = getConfig().output || {};

 actions.setWebpackConfig({
   output,
   resolve: {
     alias: {
       components: path.resolve(__dirname, 'src/components'),
       utils: path.resolve(__dirname, 'src/utils'),
       hooks: path.resolve(__dirname, 'src/hooks'),
       contents: path.resolve(__dirname, 'src/contents'),
     },
   },
 });
};


// Generate a Slug Each Post Data
exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField}  = actions;

  if(node.internal.type === `MarkdownRemark`){
    const slug = createFilePath({node, getNode});
    createNodeField({node, name: 'slug', value: slug})
  }
}