  interface Hotel {
    id: number,
    title: string,
    address: string,
    description: string,
    phone: string,
    picture: string,
    photos: string[],
    weather:  {
      temperature: number,
      wind: number,
      icon: string
    },
    profile: {
      followers: number,
      following: number,
      photo: string
    },
    stars: number
  }
  
  export const hotels: Hotel[] = [
    {
      id: 0,
      title: 'Universal Cabana',
      address: 'Orlando',
      description: 'Best one!',
      phone: '+3242353434',
      picture: 'assets/images/1.jpeg',
      photos: [
        'assets/images/res.jpg',
        'assets/images/r1.jpg'
      ],
      weather:  {
        temperature: 12,
        wind: 11,
        icon: 'assets/icons/sun.png'
      },
      profile: {
        followers: 112,
        following: 11,
        photo: 'assets/images/b1.jpeg'
      },
      stars: 3
    },
    {
      id: 1,
      title: 'Kharkov plaza',
      address: 'Kharkov',
      description: 'Five Stars',
      phone: '+3242353434',
      picture: 'assets/images/2.jpeg',
      photos: [
        'assets/images/res.jpg',
        'assets/images/r1.jpg'
      ],
      weather:  {
        temperature: 5,
        wind: 4,
        icon: 'assets/icons/rain.png'
      },
      profile: {
        followers: 12,
        following: 111,
        photo: 'assets/images/b2.jpeg'
      },
      stars: 4
    },
    {
      id: 2,
      title: 'Hotel name',
      address: 'Orlando',
      description: 'Lorem ipson0',
      phone: '+3242353434',
      picture: 'assets/images/3.jpeg',
      photos: [
        'assets/images/res.jpg',
        'assets/images/r1.jpg'
      ],
      weather:  {
        temperature: -2,
        wind: 2,
        icon: 'assets/icons/cloud.png'
      },
      profile: {
        followers: 45,
        following: 78,
        photo: 'assets/images/b3.jpeg'
      },
      stars: 5
    }
  ];