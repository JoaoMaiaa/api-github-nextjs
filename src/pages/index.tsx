import { GetStaticProps } from 'next'
import Home from '../templates/home'
// import api from './api/hello'

export default function Page({ user }){
  
  return(
    <>
      <img srcSet={user.avatar_url} alt="" style={{borderRadius:50, width:100, height:100}} />
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      <p>{user.location}</p>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/JoaoMaiaa')
  const data = await response.json()

  // const res = await api.get('/')

  return {
    props:{
      user:data
    }
  }
}

