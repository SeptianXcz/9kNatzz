exports.run = {
   usage: ['owner'],
   category: 'special',
   async: async (m, {
      client
   }) => {
      client.sendContact(m.chat, [{
         name: global.owner_name,
         number: global.owner,
         about: 'Owner & Creator'
      }], m, {
         org: 'SA Network',
         website: 'https://linktr.ee/OFC.4ksanzz',
         email: 'xml.4ksanzz@yahoo.com'
      })
   },
   error: false,
   cache: true,
   location: __filename
}