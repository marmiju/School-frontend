export interface Notice {
  id: number;
  title: string;
  link: string;
}


const baseurl = process.env.Url  || 'http://localhost:3000'


export default async function FetchNotice(){

    try {
        const res =await fetch(`${baseurl}/data/notice.json`)

        const result:Notice[] = await res.json()
        return await result
        
    } catch (error) {
        console.log(error)
        new Error('Something went wrong!')
    }

} 