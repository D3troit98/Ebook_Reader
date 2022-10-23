import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId:'tgdwvobz',
    dataset:'production',
    apiVersion:'2021-11-16',
    useCdn:true,
    token:'skya7BeyTI64e0HPO3P0JDovE2B3K2kvJXQfr5DaCY4IYQkGltcHRBrlKKhawDvqk6DvSkNTeuLB87EIiOTewfDq4VhlJHZMIKx2WtaxpMSjqE7430ofAk7qfDwVbfrmQH1a5HqMSFBHuSvlZlNA8Dqoj3cSmDS0Ao8UIPkBl82noduXQyuG',
    ignoreBrowserTokenWarning: true
})

const builder = imageUrlBuilder(client)

export const urlFor = (source:any ) => builder.image(source)