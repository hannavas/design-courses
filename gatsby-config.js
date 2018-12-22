module.exports = {
    siteMetadata: {
        title: 'Design School',
        description: 'Peruse syllabi from design courses at colleges around the world.',
        keywords: 'design, school, syllabus, class, course, curriculum'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: 'i8neh8zamx90',
                accessToken: '9201849215f5fb27925b2bf8b9c3734ff607226d361b4eea77ab56a4ac88782e'
            }
        }
    ],
}
