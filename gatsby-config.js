//
module.exports = {
  siteMetadata: {
    title: `Banabo`,
    description: `With Banabo, you can completely map every unique visitor's journey with your brand through conversion.`,
    author: `@Colin & Ben`,
    keywords: `marketing attribution, channel growth, cross-channel attribution scores, multi-channel conversions, startup marketing software`,
    siteUrl: "https://banabo.io",
    // Need to add image metadata
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby starter default`,
        short_name: `starter`,
        start_url: `/`,
        icon: `./src/images/banabologowhite.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-fullstory`,
      options: {
        fs_org: "12ZTK0",
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      },
    },
  ],
};
