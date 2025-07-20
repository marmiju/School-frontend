export interface Result {
  id: number;
  class: string;
  section: string;
  semester: string;
  link: string;
}



const baseurl = process.env.Url  || 'http://localhost:3000'


export default async function FetchResult(){

    try {
        const res =await fetch(`${baseurl}/data/result.json`)

        const result:Result[] = await res.json()
        return await result
        
    } catch (error) {
        console.log(error)
        new Error('Something Went Wrong!')
    }

} 