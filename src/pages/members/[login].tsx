import { GetStaticPaths, GetStaticProps } from "next";

export default function Member({ user }){
    return (
        <>
            <img srcSet={user.avatar_url} style={{width:100, height:100, borderRadius:50}}/>
            <h1>{user.name}</h1>
            <p>{user.bio}</p>
            <p>{user.location}</p>
        </>
    )
}
export const getStaticPaths:GetStaticPaths = async () =>{
    const response = await fetch(`https://api.github.com/orgs/rocketseat/members`)
    const data = await response.json()

    const paths = data.map((member)=>({
         params: { login: member.login } 
    }))

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps:GetStaticProps = async ({params}) => {   
    const response = await fetch(`https://api.github.com/users/${params}`)
    const data = await response.json()

    return {
        props:{
            user: data
        }
    }
}
