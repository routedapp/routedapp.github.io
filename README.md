# Routed Website

<br/>
<a href="https://routedapp.org"><img src="/src/images/logomark.png" width="300"/></a>
<br/>


## Technologies

The [routedapp.org](https://routedapp.github.io/) website is built on several platforms:

- [Gatsby](http://gatsbyjs.org/): builds a static version of the site from the React and Markdown source.
- [MDX](https://mdxjs.com/): used to combine markdown-formatted text with React components on the site's pages.
- [Contentful](https://www.contentful.com/): a headless CMS that makes it easy to edit and add content that's imported into the Gatsby site.
- [Theme-UI](https://theme-ui.com): a library to specify theme tokens and values that are used to style the site.


## Installation

A `.env` file containing the following values must be added to the root directory:

- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_ACCESS_TOKEN`

These values enable the `gatsby-source-contentful` plugin to access the page data stored on Contentful.  Talk to someone on the Routed team to get the latest values.  The same keys and values are provided as secrets in the GitHub repo.

You can also add this entry to the `.env` file:

- `ENABLE_GATSBY_REFRESH_ENDPOINT=true`

This will add a *Refresh Data* button to the `http://localhost:8000/___graphql` page that's available when running the development server.  Clicking the button will pull down the latest changes from Contentful and rebuild the local site.


## Development

To start the development server, use `npm run develop`.  You can then open a browser to `http://localhost:8000/` to view the site.

As you make changes to your local repo, Gatsby will rebuild the affected pages and automatically update what's shown in the browser (usually).  Sometimes, though, you may need to refresh the page to get it to show the latest changes.  Occasionally, especially when changing the `gatsby-config.js` file, you'll need to stop the development server and restart it for the site to build correctly.

If things really go awry, stop the server and use `npm run clean` to completely wipe out the cache before rebuilding.  For example, deleting or renaming files while the server is running can sometimes confuse things.  Gatsby will keep complaining about "missing" files until you clear the cache.  Adding fields to existing content types in Contentful can also require a full cache rebuild.

The development server also opens a page at `http://localhost:8000/___graphql`, which provides tools for previewing GraphQL queries against the site.  This can be useful for validating queries pull in content from the CMS.

The Theme-UI config is in `src/gatsby-plugin-theme-ui/index.js`.  While that's a somewhat awkward path, it has to be there to work with Gatsby's ["shadowing"](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/) feature.


## Previewing changes from Contentful

There's a [preview version of the site](https://routed-website-test.netlify.app/) hosted on Netlify that builds from the GitHub repo but pulls draft content from Contentful.  This enables changes to be previewed before they're published to the live site.

To preview a change, modify a piece of content on Contentful.  Let the auto-save finish, but don't click Publish.  Instead, click the *Build website* button in the sidebar, which will trigger a build of the Netlify site using the draft content.  When the build finishes, click *Open site* to open the Netlify preview site to see the changes.


## Publishing to GitHub Pages

The [build-gatsby.yml](.github/workflows/build-gatsby.yml) GitHub Action is set up to build the Gatsby site on every commit to `main`, and then push the static files to GitHub Pages.  This action is also triggered whenever a change to the Contentful site is published.

On the [Actions tab](https://github.com/routedapp/routedapp.github.io/actions), you can see the recent pushes to GitHub Pages.  Workflows labeled as `contentful-change` were started when the webhook was triggered by a change published to Contentful.
