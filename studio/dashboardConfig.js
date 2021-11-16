export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-even-studio',
                  apiId: '18d36d94-a100-4133-a9b5-265405d86f11'
                },
                {
                  buildHookId: '6193f61a27216b4d5cec11ad',
                  title: 'Events Website',
                  name: 'sanity-nuxt-even',
                  apiId: '40bdb409-f774-41f7-9e15-66ae2cec574a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kapehe-ok/sanity-nuxt-even',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-even.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
