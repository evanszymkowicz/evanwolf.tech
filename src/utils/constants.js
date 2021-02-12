// export const LAMBDA_ENDPOINT = 'https://kvz60gz535.execute-api.us-east-1.amazonaws.com/prod/distance'
export const IS_PROD = process.env.NODE_ENV === 'production'
export const META = {
  common: {
    image: '/images/profile/evan-szymkowicz.jpeg',
  },
  index: {
    title: 'Evan Szymkowicz | Software Engineer',
    description: 'I primarily focus on front end website development.'
  },
  profile: {
    title: 'Evan Szymkowicz | About',
    description: 'My profile.'
  },
  works: {
    title: 'Evan Szymkowicz | Featured',
    description: 'Some of what I have been working on.'
  }
}
